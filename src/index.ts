// import { User } from "./models/User";

// const user = new User({ name: "Himanshu", age: 25 });

// console.log(user);

// user.on("change", () => {
//   console.log("Change #1");
// });

// user.on("change", () => {
//   console.log("Change #2");
// });

// user.trigger("change");

import axios from "axios";

axios.post("http://localhost:3000/users", {
  name: "Himanshu",
  age: 25,
});
