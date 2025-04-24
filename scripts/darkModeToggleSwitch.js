// Dark mode toggle switch based on:
// B, Stone. 'How To Build a Tech Portfolio | Part 2: Enabling Interactivity With Javascript', 2022. [YouTube Video].
// https://www.youtube.com/watch?v=PUfiRZKlRgo

// Class to control CSS properties
class CssPropControl {
    constructor(element) {
        this.element = element;
    }

    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
    }

    set(varName, value) {
        return this.element.style.setProperty(varName, value);
    }
}

const bodyCssProps = new CssPropControl(document.body);
let toggle = document.querySelector('#dark-mode-toggle');

// Apply dark mode if it was previously selected
if (localStorage.getItem('currentMode') === 'dark') {
    toggle.checked = true;
    bodyCssProps.set('--background', bodyCssProps.get('--dark-background'));
    bodyCssProps.set('--primary', bodyCssProps.get('--dark-primary'));
    bodyCssProps.set('--secondary', bodyCssProps.get('--dark-secondary'));
    bodyCssProps.set('--text', bodyCssProps.get('--dark-text'));
}

// Add event listener to toggle switch
toggle.addEventListener('click', () => {
    let mode = toggle.checked ? 'dark' : 'light';
    localStorage.setItem('currentMode', mode);
    bodyCssProps.set('--background', bodyCssProps.get('--' + mode + '-background'));
    bodyCssProps.set('--primary', bodyCssProps.get('--' + mode + '-primary'));
    bodyCssProps.set('--secondary', bodyCssProps.get('--' + mode + '-secondary'));
    bodyCssProps.set('--text', bodyCssProps.get('--' + mode + '-text'));
});