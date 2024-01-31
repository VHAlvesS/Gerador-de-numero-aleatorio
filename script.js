const min = document.querySelector("#min");
const max = document.querySelector("#max");
const generate = document.querySelector("#generate");
const RandomNumberHTML = document.querySelector("#RandomNumber");

generate.addEventListener("click", function () {
  const valorMaximo = Number(max.value);
  const valorMinimo = Number(min.value);
  const randomNumber =
    Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
  RandomNumberHTML.textContent = `${randomNumber}`;
});
