import axios from "axios";

let countryInfoConst = document.getElementById('countryOne');

export async function fetchCountryName() {
    try {
        const countryInfo = await axios.get('https://restcountries.com/v2/all');
        console.log(countryInfo.data);
        for (let i = 0; i < countryInfo.data.length; i++) {
            countryInfoConst.innerHTML += `<p>${countryInfo.data[i].name}</p>
        <p>Has a population of ${countryInfo.data[i].population} people</p>
        <img id="countryOneFlag" src="${countryInfo.data[i].flag}" alt="countryFlag">`;
        }
        console.log(countryInfoConst);
    } catch (e) {
        console.log(e);
    }
}

fetchCountryName();

export async function fetchCountryNameColor() {
    try {
        const countryInfo = await axios.get('https://restcountries.com/v2/all');
        for (let i = 0; i < countryInfo.data.length; i++) {
            if (countryInfo.data[i].region === 'Africa') {
                countryInfoConst[i].style.color = "blue";
                console.log(countryInfoConst);
            } else if (countryInfo.data[i].region === 'Americas') {
                countryInfoConst[i].style.color = "green";
                console.log(countryInfoConst);
            } else if (countryInfo.data[i].region === 'Asia') {
                countryInfoConst[i].style.color = "red";
                console.log(countryInfoConst);
            } else if (countryInfo.data[i].region === 'Europe') {
                countryInfoConst[i].style.color = "yellow";
                console.log(countryInfoConst);
            } else if (countryInfo.data[i].region === 'Oceania') {
                countryInfoConst[i].style.color = "purple";
                console.log(countryInfoConst);
            }
        }
    } catch (e) {
        console.log(e);
    }
}

fetchCountryNameColor();