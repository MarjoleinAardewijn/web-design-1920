const year = document.querySelector('#year');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const btnSubmit = document.querySelector('#submitButton');

let counter = 0;

console.log(btnSubmit);

btnSubmit.addEventListener('click', getInputValues);

function getInputValues(event){
    event.preventDefault();

    let date = `${day.value} - ${month.value} - ${year.value}`;

    console.log(date);

    setItem(date);
}


function setItem(date) {
    counter++;

    const calendarItemsWrapper = document.querySelector('.items-wrapper'),
        calendarItem = `
            <div class="item" id="item-${counter}">
                <div class="date">
                    <p>${date}</p>
                </div>
                <button aria-label="Remove Item" id="close-btn-${counter}" class="close focussable">Verwijderen</button>
            </div>
        `;

    calendarItemsWrapper.insertAdjacentHTML("beforeend", calendarItem);

    const closeButton = document.getElementById(`close-btn-${counter}`);
    const item = document.getElementById(`item-${counter}`);

    closeButton.addEventListener("click", () => {
        item.remove();
    });
}
