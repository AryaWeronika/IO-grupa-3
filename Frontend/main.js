const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if(true){ // check condition if something was filled
      changeStep("next");
    } else {
      window.alert("sometext");
    }
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = []; // results initialized to null
  form.querySelectorAll("input").forEach((input) => {
    // if input value is selected
    // set equal to var input
    // push to list
    if(input.checked){
      const { name, id, value } = input;
      inputs.push({ name, id, value });
    }
    if(input.type != "radio" && input.type != "checkbox"){
      const { name, id, value } = input;
      inputs.push({ name, id, value });
    }
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}