const increment = document.getElementsByTagName("button")[0];
const decrement = document.getElementsByTagName("button")[1];
const display = document.getElementsByTagName("h2")[0];
 
increment.addEventListener("click", (e) => {
<<<<<<< HEAD
    display.textContent = Number(display.textContent) + 10;
});
 
decrement.addEventListener("click", (e) => {
    display.textContent = Number(display.textContent) - 10;
=======
    display.textContent = Number(display.textContent) + 2;
});
 
decrement.addEventListener("click", (e) => {
    display.textContent = Number(display.textContent) - 2;
>>>>>>> git-prac
});