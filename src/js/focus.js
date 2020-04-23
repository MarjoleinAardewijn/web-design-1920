window.onload = function() {
    swap.focus();
};

function focusElement() {
    window.addEventListener('keydown', keyBindings);

    focusableElements.forEach(focusable => {
        focusable.addEventListener('focus', (event) => {
            state.focusedElement = event.target;
        })
    });
}

function focusSpecificElement(event, element, key) {
    checkKey(event, key);

    if (event.key === key) {
        element.focus();
    }
}

focusElement();