const btnSubmit = document.querySelector('#submitButton'),
    departureStationSelect = document.querySelector('#departureStation'),
    arrivalStationSelect = document.querySelector('#arrivalStation'),
    swap = document.querySelector('.swap'),
    addOneHour = document.querySelector('#addOneHour'),
    addTwoHours = document.querySelector('#addTwoHours'),
    travelPlan = document.querySelector('.travel-plan');

let startTime;

// https://stackoverflow.com/questions/5416767/get-selected-value-text-from-select-on-change

swap.addEventListener('click', swapDestinations);

addOneHour.addEventListener('click', addOneHourToCurrentTime);
addTwoHours.addEventListener('click', addTwoHoursToCurrentTime);

btnSubmit.addEventListener('click', getUrl);

function getUrl(event){
    event.preventDefault();

    startTime = startTime === undefined ? getTime(1) : startTime;

    location.href=`https://www.ns.nl/reisplanner/#/?vertrek=${departureStationSelect.value}&vertrektype=treinstation&aankomst=${arrivalStationSelect.value}&aankomsttype=treinstation&type=vertrek&tijd=${getCurrentDate()}T${startTime}`;
}

function getCurrentDate() {
    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0'),
        month = String(today.getMonth() + 1).padStart(2, '0'),
        year = today.getFullYear();

    return `${year}-${month}-${day}`;
}

// https://stackoverflow.com/questions/5853492/change-select-value-on-click-with-javascript
function swapDestinations(event) {
    event.preventDefault();

    if(departureStationSelect.value === 'Eindhoven') {
        departureStationSelect.value = 'Amsterdam'; //change it's value
    } else if (departureStationSelect.value === 'Amsterdam') {
        departureStationSelect.value = 'Eindhoven';
    }

    if(arrivalStationSelect.value === 'Eindhoven') {
        arrivalStationSelect.value = 'Amsterdam'; //change it's value
    } else if (arrivalStationSelect.value === 'Amsterdam') {
        arrivalStationSelect.value = 'Eindhoven';
    }

    travelPlan.innerText = `Ik wil graag de treinen zien die over 1 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}

function addOneHourToCurrentTime(event) {
    event.preventDefault();

    addOneHour.classList.add('active');
    addTwoHours.classList.remove('active');

    startTime = getTime(1);

    travelPlan.innerText = `Ik wil graag de treinen zien die over 1 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}

function addTwoHoursToCurrentTime(event) {
    event.preventDefault();

    startTime = getTime(2);

    addOneHour.classList.remove('active');
    addTwoHours.classList.add('active');

    travelPlan.innerText = `Ik wil graag de treinen zien die over 2 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}

// https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
function getTime(hours) {
    let d = new Date(),
        h = (d.getHours() < 10 ? '0' : '') + (d.getHours() + hours),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

    return h + ':' + m;
}
