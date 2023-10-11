// task 1
const input1 = document.getElementById("1");
const input2 = document.getElementById("2");
const button1 = document.getElementById("3");
const div1 = document.getElementById("4");
button1.addEventListener("click", function () {
  if (input2.value > 1000000000) {
    div1.innerHTML = "Result:";
    div1.insertAdjacentHTML(
      "beforeend",
      `Error: number ${input2.value} is too big`
    );
    return;
  }
  if (input1.value.length === 0 || input2.value.length === 0) {
    div1.innerHTML = "Result:";
    div1.insertAdjacentHTML("beforeend", " Error: missing fields");
    return;
  }
  div1.innerHTML = "Result:";
  div1.insertAdjacentHTML("beforeend", input2.value);
});
//task 2
const input3 = document.getElementById("5");
const input4 = document.getElementById("6");
const input5 = document.getElementById("7");
const button2 = document.getElementById("8");
const div2 = document.getElementById("9");
button2.addEventListener("click", function () {
  const costBefore = input3.value;
  const percentageOfInflation = input4.value;
  const money = input5.value;
  div2.innerHTML = "Result:";
  if (costBefore <= 1 || costBefore > 10000000) {
    div2.innerHTML = "Result:";
    div2.insertAdjacentHTML(
      "beforeend",
      `Price must be more than 1 and less than 10^7`
    );
    return;
  }
  if (percentageOfInflation < 1 || percentageOfInflation > 100) {
    div2.innerHTML = "Result:";
    div2.insertAdjacentHTML(
      "beforeend",
      `${percentageOfInflation} can't be more than 100 and less than 1`
    );
    return;
  }
  if (money <= 1 || money > 10000000) {
    div2.innerHTML = "Result:";
    div2.insertAdjacentHTML(
      "beforeend",
      `Number must be bigger than 1 and less than 10^7`
    );
    return;
  }

  const inflationAmount = (costBefore * percentageOfInflation) / 100;
  const newPrice = Number(costBefore) + Number(inflationAmount);
  const canBuy = (money / newPrice) >> 0;
  if(!canBuy<1){
    div2.insertAdjacentHTML("beforeend", `He can buy ${canBuy} chocolates`);
    return
  }
  else{
    div2.insertAdjacentHTML('beforeend', `He can't buy any chocolate`)
  }
});
//task 3
const input6 = document.getElementById("10");
const input7 = document.getElementById("11");
const input8 = document.getElementById("12");
const button3 = document.getElementById("13");
const div3 = document.getElementById("14");
button3.addEventListener("click", function () {
  if (input6.value < -2000000000) {
    div3.innerHTML = "Result: ";
    div3.insertAdjacentHTML("beforeend", "Number must be bigger than -2*10^9");
    return;
  }
  if (input7.value > 2000000000) {
    div3.innerHTML = "Result: ";
    div3.insertAdjacentHTML("beforeend", "Number must be less than 2*10^9");
    return;
  }
  if (input8.value === "plus") {
    div3.innerHTML = "Result: ";
    const number = input6.value + input7.value;
    div3.insertAdjacentHTML("beforeend", `${number}`);
    return;
  }
  if (input8.value === "minus") {
    div3.innerHTML = "Result: ";
    const number = input6.value - input7.value;
    div3.insertAdjacentHTML("beforeend", `${number}`);
    return;
  }
  if (input8.value === "div") {
    div3.innerHTML = "Result: ";
    const number = (input6.value / input7.value) >> 0;
    div3.insertAdjacentHTML("beforeend", `${number}`);
    return;
  }
  if (input8.value === "mod") {
    div3.innerHTML = "Result: ";
    const number = input6.value % input7.value;
    div3.insertAdjacentHTML("beforeend", `${number}`);
    return;
  }
  if (input8.value === "mult") {
    div3.innerHTML = "Result: ";
    const number = input6.value * input7.value;
    div3.insertAdjacentHTML("beforeend", `${number}`);
    return;
  }
});
