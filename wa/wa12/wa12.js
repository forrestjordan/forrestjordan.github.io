let myData = {};

function fetchData() {
    const comicNumber = Math.floor(Math.random() * 3000) + 1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then(res => {
            myData = res;
            console.log(myData);
            document.getElementById("comicTitle").innerHTML = myData.title;
            document.getElementById("comicImg").src = myData.img;
            document.getElementById("comicImg").alt = myData.alt;
            document.getElementById("comicAltText").innerText = myData.alt;
            document.getElementById("comicDate").innerHTML = `${myData.month}/${myData.day}/${myData.year}`;
        });
}

document.getElementById("generate").addEventListener("click", fetchData);

fetchData();
