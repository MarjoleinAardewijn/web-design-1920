const focussableElements = document.querySelectorAll('.focussable');
const state = {
    focussedElement: null,
    previousKey: null,
};

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
    if (event.key !== 'Shift' && event.key !== '/') {
        return;
    }

    event.preventDefault();

    const {previousKey, focussedElement} = state;
    const currentIndex = focussedElement ? [...focussableElements].findIndex(focussable => focussable === focussedElement) : -1;

    console.log('current index: ', currentIndex);

    if (previousKey !== 'Shift' && event.key === '/') {
        const nextIndex = currentIndex + 1 > focussableElements.length ? 0 : currentIndex + 1;
        const element = focussableElements[nextIndex];
        element.focus();
    } else if (previousKey === 'Shift' && event.key === '/') {
        const previousIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        const element = focussableElements[previousIndex];
        element.focus();
    }

    state.previousKey = event.key;
}

focusElement();