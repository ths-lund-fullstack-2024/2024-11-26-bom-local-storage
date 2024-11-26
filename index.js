// setTimeout(() => {
//   console.log("3000 ms has passed");
// }, 3000);

// let count = 0;
// setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log({ height, width });
});
