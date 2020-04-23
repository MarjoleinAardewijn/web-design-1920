const focusableElements = document.querySelectorAll('.focusable'),
    state = {
        focusedElement: null,
    },
    btnSubmit = document.querySelector('#submitButton'),
    departureStationSelect = document.querySelector('#departureStation'),
    arrivalStationSelect = document.querySelector('#arrivalStation'),
    swap = document.querySelector('.swap'),
    addOneHour = document.querySelector('#addOneHour'),
    addTwoHours = document.querySelector('#addTwoHours'),
    travelPlan = document.querySelector('.travel-plan'),
    legend = document.querySelector('.legend'),
    legendInfo = document.querySelector('.legend-info'),
    messageElement = document.querySelector('.message'),
    errorMessage = document.querySelector('.error');

function getCurrentDate() {
    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0'),
        month = String(today.getMonth() + 1).padStart(2, '0'),
        year = today.getFullYear();

    return `${year}-${month}-${day}`;
}

function getTime(hours) {
    let d = new Date(),
        h = (d.getHours() < 10 ? '0' : '') + (d.getHours() + hours),
        m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

    return h + ':' + m;
}

function checkKey(event, key) {
    event.preventDefault();

    if (event.key !== key) {
        return;
    }
}

function changeSelection(event, currentSelectStation, comparedSelectStation, targetValue, valueOtherSelect, message) {
    if (currentSelectStation.value === comparedSelectStation.value) {
        setMessage('Vertrek en aankomst station mogen niet hetzelfde zijn');
        swap.focus();
        currentSelectStation.selectedIndex = 0;
    }

    targetValue = event.target.value;
    valueOtherSelect = comparedSelectStation.value;

    travelPlan.innerText = message;
}

function setMessage(message) {
    messageElement.classList.add('active');

    setTimeout(function () {
        messageElement.classList.remove('active');
    }, 10000);

    errorMessage.textContent = message;
}

function changeActiveButton(oldButton, newButton) {
    oldButton.classList.remove('active');
    newButton.classList.add('active');
}