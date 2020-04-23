document.addEventListener('keydown', refresh);

function keyBindings(event) {
    keysForwardAndBack(event, focusableElements, 'ArrowLeft', 'ArrowRight');
    keysForwardAndBack(event, focusableElements, 'h', 'l');

    focusSpecificElement(event, btnSubmit, 'p');
    focusSpecificElement(event, swap, 'o');
    showAndHideLegend(event, 'i');
    click(event, ' ');
    click(event, 'Enter');
    refresh(event, 'r');
}

function keysForwardAndBack(event, focusableElements, backKey, forwardKey) {
    event.preventDefault();

    if (event.key !== forwardKey && event.key !== backKey) {
        return;
    }

    const {focusedElement} = state;
    const currentIndex = focusedElement ? [...focusableElements].findIndex(focusable => focusable === focusedElement) : -1;

    if (event.key === forwardKey) {
        const nextIndex = currentIndex + 1 > focusableElements.length ? 0 : currentIndex + 1;
        const element = focusableElements[nextIndex];
        element.focus();
    } else if (event.key === backKey) {
        const previousIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        const element = focusableElements[previousIndex];
        element.focus();
    }
}

function click(event, key){
    checkKey(event, key);

    const {focusedElement} = state;

    if (event.key === key) {
        focusedElement.click();
    }
}

function showAndHideLegend(event, key) {
    checkKey(event, key);

    if(event.key === key) {
        legendInfo.classList.toggle('hide');
        legend.classList.toggle('hide');
    }
}

function refresh(event, key) {
    checkKey(event, key);

    if (event.key === key) {
        window.location.reload();
    }
}