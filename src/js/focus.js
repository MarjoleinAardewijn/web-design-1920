const focussableElements = document.querySelectorAll('.focussable'),
    state = {
        focussedElement: null,
    };

window.onload = function() {
    swap.focus();
};

document.addEventListener('keydown', refresh);

function focusElement() {
    console.log('added focus!');
    window.addEventListener('keydown', focusNextElement);

    focussableElements.forEach(focussable => {
        focussable.addEventListener('focus', (event) => {
            state.focussedElement = event.target;
        })
    });
}

function focusNextElement(event) {
    event.preventDefault();

    keysForwardAndBack(event, focussableElements, 'ArrowLeft', 'ArrowRight');
    keysForwardAndBack(event, focussableElements, 'k', 'l');

    focusSpecificElement(event, btnSubmit, 'p');
    focusSpecificElement(event, swap, 'o');
    click(event, ' ');
    click(event, 'Enter');
    refresh(event);
}

function keysForwardAndBack(event, focussableElements, backKey, forwardKey) {
    if (event.key !== forwardKey && event.key !== backKey) {
        return;
    }

    const {focussedElement} = state;
    const currentIndex = focussedElement ? [...focussableElements].findIndex(focussable => focussable === focussedElement) : -1;

    if (event.key === forwardKey) {
        const nextIndex = currentIndex + 1 > focussableElements.length ? 0 : currentIndex + 1;
        const element = focussableElements[nextIndex];
        element.focus();
    } else if (event.key === backKey) {
        const previousIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        const element = focussableElements[previousIndex];
        element.focus();
    }
}

function click(event, key){
    if (event.key !== key) {
        return;
    }

    const {focussedElement} = state;

    if (event.key === key) {
        focussedElement.click();
    }
}

function focusSpecificElement(event, element, key) {
    if (event.key !== key) {
        return;
    }

    if (event.key === key) {
        element.focus();
    }
}

function refresh(event) {
    if (event.key !== 'r') {
        return;
    }

    if (event.key === 'r') {
        window.location.reload();
    }
}

focusElement();