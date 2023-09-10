let adviceId = document.getElementById("advice-id");
let advice = document.getElementById("advice");
let logo = document.getElementById("logo");
let loading = document.getElementById("loading");
let url = "https://api.adviceslip.com/advice";

let fetchingAdvice = async () => {
  adviceId.innerHTML = ``;
  advice.innerHTML = ``;
  loading.style.display = "block";
  let response = await fetch(url);
  loading.style.display = "none";
  let data = await response.json();
  adviceId.innerHTML = `ADVICE #${data.slip.id}`;
  advice.innerHTML = `"${data.slip.advice}"`;
};
logo.addEventListener("click", () => {
  fetchingAdvice();
});
fetchingAdvice();
