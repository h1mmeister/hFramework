import { User } from "./models/User";

const user = new User({ name: "Himanshu", age: 25 });
user.set({ name: "Simran" });

console.log(user.get("name"));
