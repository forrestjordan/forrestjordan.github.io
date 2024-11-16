// Variable to hold the API endpoint
const jokeAPI = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// fetch a joke fom the API
function getJoke() {
    fetch(jokeAPI)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch a joke.');
            }
        })
        .then(data => {
            console.log(data);
            displayRes(data.joke);
        })
        .catch(error => {
            console.error(error);
            alert('Something went wrong. Please try again!');
        });
}

// display the fetched joke in the paragraph
function displayRes(jokeText) {
    const jokeParagraph = document.getElementById('joke');
    jokeParagraph.textContent = jokeText;
}

// eevent listener to the button
document.getElementById('getJokeBtn').addEventListener('click', getJoke);

// display a joke when the page loads
window.onload = getJoke;
