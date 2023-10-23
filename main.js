const initialState = document.querySelector(".selection-slate");
const finalState = document.querySelector(".thankYouSlate");

const ratingDigits = document.querySelectorAll(".rating-digit");
const btn = document.getElementById("btn");
const para = document.querySelector(".choice-preview")


ratingDigits.forEach(element => {
    element.addEventListener("click", (evt) => {
        let rating = evt.target.textContent;
        para.childNodes[1].textContent = rating;
    })
})


btn.addEventListener("click", () => {
    initialState.style.display = "none";
    finalState.style.display = "block";

})