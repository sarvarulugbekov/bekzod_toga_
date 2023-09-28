let key = "21bZC42jh5h18mNG7JXL-qd1zLliZuULME4STYkghmQ";
let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector("button");

let city = "Tashkent";

function fetching() {
    fetch(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${key}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            body.style.backgroundImage = `url(${
                data.results[Math.ceil(Math.random() * data.results.length)]
                    .urls.regular
            })`;
            body.style.backgroundSize = "cover";
            body.style.backgroundRepeat = "no-repeat";
            body.style.backgroundPosition = "center";
            body.style.height = "100vh";
        })
        .catch((error) => console.error(error));
}

fetching();

button.addEventListener("click", (event) => {
    event.preventDefault();
    city = input.value;

    fetching();
});

// // .catch(error => console.error(error));
