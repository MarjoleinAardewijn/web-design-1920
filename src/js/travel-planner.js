let startTime,
    departureStation = '',
    arrivalStation = '';

if (departureStationSelect) departureStationSelect.addEventListener('change', function(event) {
    changeSelection(event, departureStationSelect, arrivalStationSelect, departureStation, arrivalStation, `Ik wil graag de treinen zien die over 1 uur van ${departureStation} naar ${arrivalStation} gaan.`);
});

swap.addEventListener('click', swapDestinations);

if (arrivalStationSelect) arrivalStationSelect.addEventListener('change', function(event) {
    changeSelection(event, arrivalStationSelect, departureStationSelect, arrivalStation, departureStation, `Ik wil graag de treinen zien die over 1 uur van ${departureStation} naar ${arrivalStation} gaan.`);
});

addOneHour.addEventListener('click', addOneHourToCurrentTime);
addTwoHours.addEventListener('click', addTwoHoursToCurrentTime);

btnSubmit.addEventListener('click', setUrl);

function setUrl(event) {
    event.preventDefault();

    startTime = startTime === undefined ? getTime(1) : startTime;

    location.href = `https://www.ns.nl/reisplanner/#/?vertrek=${departureStationSelect.value}&vertrektype=treinstation&aankomst=${arrivalStationSelect.value}&aankomsttype=treinstation&type=vertrek&tijd=${getCurrentDate()}T${startTime}`;
}

function swapDestinations(event) {
    event.preventDefault();

    const departureValue = departureStationSelect.value;
    const arrivalValue = arrivalStationSelect.value;

    departureStationSelect.value = arrivalValue;
    arrivalStationSelect.value = departureValue;

    travelPlan.innerText = `Ik wil graag de treinen zien die over 1 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}

function addOneHourToCurrentTime(event) {
    event.preventDefault();

    startTime = getTime(1);

    changeActiveButton(addTwoHours, addOneHour);

    travelPlan.innerText = `Ik wil graag de treinen zien die over 1 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}

function addTwoHoursToCurrentTime(event) {
    event.preventDefault();

    startTime = getTime(2);

    changeActiveButton(addOneHour, addTwoHours);


    travelPlan.innerText = `Ik wil graag de treinen zien die over 2 uur van ${departureStationSelect.value} naar ${arrivalStationSelect.value} gaan.`;
}
