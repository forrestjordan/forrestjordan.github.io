let myData = {};

function fetchData() {
    const comicNumber = Math.floor(Math.random() * 3000) + 1; 
    const url = `https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`; 

    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json(); 
            } else {
                console.error("Failed to fetch comic:", res);
                throw new Error("Failed to fetch comic");
            }
        })
        .then(res => {
            myData = res; 
            console.log(myData); 

            document.getElementById("comicTitle").innerHTML = myData.title; 
            document.getElementById("comicImg").src = myData.img; 
            document.getElementById("comicImg").alt = myData.alt; 
            document.getElementById("comicAltText").innerText = `Alt Text: ${myData.alt}`; 
            document.getElementById("comicDate").innerHTML = `Published on: ${myData.month}/${myData.day}/${myData.year}`; 
        })
        .catch(error => {
            console.error("Error fetching the comic:", error);
            document.getElementById("comicTitle").innerHTML = "Error loading comic.";
            document.getElementById("comicImg").src = "";
            document.getElementById("comicAltText").innerText = "";
            document.getElementById("comicDate").innerHTML = "";
        });
}

document.getElementById("generate").addEventListener("click", fetchData);

fetchData();
