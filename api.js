const factContainer = document.getElementById("fact");
const btn = document.getElementById("btn");
const url = "https://dogapi.dog/api/v2/facts?limit=5";

let getFact = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = '${item.fact}';
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click,getFact");
getFact();