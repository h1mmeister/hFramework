import axios, { AxiosResponse } from "axios";

interface UserProps {
  // ? defines that this is an optional property
  id?: number;
  name?: string;
  age?: number;
}

// type alias for callback function
type Callback = () => void;

export class User {
  // this annotation is used when we are not sure of what keys are included in the events object
  events: { [key: string]: Callback[] } = {};

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

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    // if (!handlers || handlers.length === 0) {
    //   return;
    // }
    // calling all the functions for a specific eventname
    handlers.forEach((callback) => {
      callback();
    });
  }
  // this will fetch the user from the json-server
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  // this will save the user depending whether we pushing a brand new user or the modifying the existing user
  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
