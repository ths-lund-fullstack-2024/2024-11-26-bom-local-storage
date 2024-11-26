// setTimeout(() => {
//   console.log("3000 ms has passed");
// }, 3000);

// let count = 0;
// setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

// window.addEventListener("resize", () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   console.log({ height, width });
// });

// ########## Local Storage ########## //
// const username = "Niklas";
// const userAge = 27;
// const isAwesome = true;

// localStorage.setItem("username", username);
// localStorage.setItem("userAge", userAge);
// localStorage.setItem("isAwesome", isAwesome);

// const username = localStorage.getItem("username");
// const content = document.querySelector(".content");

// const usernameHTML = `<p>${username}</p>`;
// content.insertAdjacentHTML("afterbegin", usernameHTML);

// localStorage.removeItem("isAwesome");
// localStorage.clear();

// console.log(localStorage);

const user = {
  name: "Niklas",
  age: 27,
  isAwesome: true,
};

// localStorage.setItem("user", user); // Kommer inte att funka som den ska

localStorage.setItem("user", JSON.stringify(user));
const userFromLS = localStorage.getItem("user");
console.log(JSON.parse(userFromLS));
