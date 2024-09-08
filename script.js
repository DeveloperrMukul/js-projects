const count = document.querySelector(".count");
const minsBtn = document.querySelector(".minsBtn");
const plusBtn = document.querySelector(".plusBtn");
const input = document.querySelector(".IncrementBy");
const resetBtn = document.querySelector(".resetBtn")

minsBtn.addEventListener("click", () => {
    const countValue = parseInt(count.innerText)
    const inputValue = parseInt(input.value);
    count.innerText = countValue - inputValue;
});
plusBtn.addEventListener("click", () => {
    const countValue = parseInt(count.innerText);
  const inputValue = parseInt(input.value);
  count.innerText = countValue + inputValue;
});

resetBtn.addEventListener("click",()=>{
    count.innerText = 0;
    input.value = 1;
})





