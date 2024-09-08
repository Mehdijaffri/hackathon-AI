

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personalForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        const formData = new FormData(form);
        const inputs = Array.from(form.elements) as HTMLInputElement[];

        let isValid = true;

        for (const input of inputs) {
            if (input.tagName === 'INPUT' && input.type !== 'submit' && !input.value.trim()) {
                isValid = false;
                break;
            } else if (input.tagName === 'SELECT' && !input.value) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            event.preventDefault();
            alert('Please fill all the details');
        } else {
            alert('Your form has been submitted successfully');
        }
    });
});
