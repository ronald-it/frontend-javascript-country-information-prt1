import axios from "axios";

let countryInfoConst = document.getElementById('countryOne');

export async function fetchCountryName() {
    try {
        const countryInfo = await axios.get('https://restcountries.com/v2/all');
        console.log(countryInfo.data);
        for (let i = 0; i < countryInfo.data.length; i++) {
            console.log(countryInfo.data[i].name);
            console.log(countryInfo.data[i].flag);
            const countryPopulation = countryInfo.data[i].population;
            console.log(`Has a population of ${countryPopulation}`);
        }
        console.log(countryInfoConst);
        countryInfoConst.innerHTML = `<p>${countryInfo.data[0].name}</p>
        <p>${countryInfo.data[0].population}</p>`;
    } catch (e) {
        console.log(e);
    }
}

fetchCountryName();

export async function fetchCountryNameColor() {
    try {
        const countryInfo = await axios.get('https://restcountries.com/v2/all');
        if (countryInfo.data[0].region === 'Africa') {
            countryInfoConst.style.color="blue";
            console.log(countryInfoConst);
        }
        else if (countryInfo.data[0].region === 'Americas') {
            countryInfoConst.style.color="green";
            console.log(countryInfoConst);
        }
        else if (countryInfo.data[0].region === 'Asia') {
            countryInfoConst.style.color="red";
            console.log(countryInfoConst);
        }
        else if (countryInfo.data[0].region === 'Europe') {
            countryInfoConst.style.color="yellow";
            console.log(countryInfoConst);
        }
        else if (countryInfo.data[0].region === 'Oceania') {
            countryInfoConst.style.color="purple";
            console.log(countryInfoConst);
        }
    } catch (e) {
        console.log(e);
    }
}

fetchCountryNameColor();