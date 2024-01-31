const container = document.getElementById('container');

const toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
}

const submitForm = async (action) => {
    const form = document.querySelector('.form');
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const email = form.querySelector('input[type="email"]').value;

    try {
        const response = await fetch(`http://localhost:3000/${action}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log(`Success: ${data.message}`);
        } else {
            console.error(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}

// Initial call to adjust the logo position based on the initial state
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

document.getElementById('signupBtn').addEventListener('click', () => submitForm('signup'));
document.getElementById('signinBtn').addEventListener('click', () => submitForm('login'));
