interface UserProps {
  // ? defines that this is an optional property
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // need to assign update object to the data object
    Object.assign(this.data, update);
  }
}
