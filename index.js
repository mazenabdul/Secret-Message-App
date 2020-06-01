const { hash } = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
    document.querySelector('#message-text').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('#show-header').innerHTML = message;

}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#message-text').classList.add('hide');
    document.querySelector('#secret-message').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const secret = document.querySelector('#link-input')
    secret.value = `${window.location}#${encrypted}`;
    secret.select();
})