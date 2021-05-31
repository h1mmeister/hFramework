interface UserProps {
  // ? defines that this is an optional property
  name?: string;
  age?: number;
}

// type alias for callback function
type Callback = () => void;

export class User {
  // this annotation is used when we are not sure of what keys are included in the events object
  events: { [key: string]: Callback[] };

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // need to assign update object to the data object
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // because fist time, we would get undefined, so for fallback we cause use ||
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
}
