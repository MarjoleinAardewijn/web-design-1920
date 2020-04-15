const year = document.querySelector('#year'),
    month = document.querySelector('#month'),
    day = document.querySelector('#day'),
    btnSubmit = document.querySelector('#submitButton'),
    calendarItemsWrapper = document.querySelector('.items-wrapper');

let counter = 0;

btnSubmit.addEventListener('click', getInputValues);

function getInputValues(event){
    event.preventDefault();

    let date = `${day.value}-${month.value}-${year.value}`;

    addItem(date);
}

function addItem(date) {
    counter++;

    const calendarItem = `
            <div class="item" id="item-${counter}">
                <div class="date">
                    <p>${date}</p>
                </div>
            </div>
        `;

    calendarItemsWrapper.insertAdjacentHTML("beforeend", calendarItem);

    const closeButton = document.getElementById(`close-btn-${counter}`);
    const item = document.getElementById(`item-${counter}`);

    closeButton.addEventListener("click", () => {
        item.remove();
    });
}

console.log(focussableElements);
