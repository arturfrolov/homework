const promptBtn = document.querySelector('.prompt_btn');
const redirect = document.querySelector('.redirect');

let str;
function addPrompt() {
    str = prompt('Введите ссылку');

    if (str == '' || str == null) {
        alert('Вы не ввели ссылку');
    } else {
        if (!str.startsWith('http') && !str.startsWith('https')) {
            str = `https://${str}`;
        }
    }
}

promptBtn.addEventListener('click', addPrompt);


function addRedirect() {
    if (!str) {
        alert('Вы не ввели ссылку');
    } else {
        document.location = str;
    }


}

redirect.addEventListener('click', addRedirect);