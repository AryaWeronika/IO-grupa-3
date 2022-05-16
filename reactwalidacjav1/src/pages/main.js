import React from 'react';
import ReactDOM from 'react-dom/client';
const main = () => {
  return (
<div>
  const steps = Array.from(document.querySelectorAll("form .step"));
  const nextBtn = document.querySelectorAll("form .next-btn");
  const prevBtn = document.querySelectorAll("form .previous-btn");
  const form = document.querySelector("form");
  nextBtn.forEach((button) =&gt; {'{'}
  button.addEventListener("click", () =&gt; {'{'}
  if(true){'{'} // check condition if something was filled
  changeStep("next");
  {'}'} else {'{'}
  window.alert("sometext");
  {'}'}
  {'}'});
  {'}'});
  prevBtn.forEach((button) =&gt; {'{'}
  button.addEventListener("click", () =&gt; {'{'}
  changeStep("prev");
  {'}'});
  {'}'});
  form.addEventListener("submit", (e) =&gt; {'{'}
  e.preventDefault();
  const inputs = []; // results initialized to null
  form.querySelectorAll("input").forEach((input) =&gt; {'{'}
  // if input value is selected
  // set equal to var input
  // push to list
  if(input.checked){'{'}
  const {'{'} name, id, value {'}'} = input;
  inputs.push({'{'} name, id, value {'}'});
  {'}'}
  if(input.type != "radio" &amp;&amp; input.type != "checkbox"){'{'}
  const {'{'} name, id, value {'}'} = input;
  inputs.push({'{'} name, id, value {'}'});
  {'}'}
  {'}'});
  console.log(inputs);
  form.reset();
  {'}'});
  function changeStep(btn) {'{'}
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {'{'}
  index++;
  {'}'}
  else if (btn === "prev") {'{'}
  index--;
  {'}'}
  steps[index].classList.add("active");
  {'}'}
  const imieField = document.querySelector("input");
  nameField.addEventListener("input", () =&gt; {'{'}
  nameField.setCustomValidity("");
  nameField.checkValidity();
  console.log(nameField.checkValidity());
  {'}'});
  nameField.addEventListener("invalid", () =&gt; {'{'}
  nameField.setCustomValidity("Please fill in your First Name.");
  {'}'});
</div>
  );
}


export default main;