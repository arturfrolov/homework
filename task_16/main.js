/* eslint-disable func-names */
function UserTable({ form, content, userInfo, addButton }) {
    const runAddUser = (event) => {
        event.preventDefault();
        this.addUser(form.elements.name.value, form.elements.phone.value, form.elements.age.value);
    };
    this.init = function () {
        form.addEventListener('submit', runAddUser);
        addButton.addEventListener('click', () => {
            form.reset();
            form.classList.add('open');
        });
        content.addEventListener('click', (event) => {
            const parent = event.target.closest('tr');
            this.deleteUser(event, parent);
            this.editUser(event, parent);
        });
        this.loadUsers();
    };
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        };
        this.userTamplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    };
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach((user) => this.userTamplate(user));
        }
    };
    this.userTamplate = function (user) {
        content.insertAdjacentHTML(
            'beforeend',
            `<tr data-userid="${user.id}">` +
                `<td>${user.id}</td>` +
                `<td>${user.name}</td>` +
                `<td>${user.phone}</td>` +
                `<td>${user.age}</td>` +
                `<td>
                <button class="btn btn-outline-primary js--view">View</button>
                <button class="btn btn-outline-primary js--edit">Edit</button>
                <button class="btn btn-outline-primary js--delete">Delete</button>
                </td>` +
            `</tr>`
        );
    };
    this.deleteUser = function (event, parent) {
        if (event.target.classList.contains('js--delete')) {
            parent.remove();
            const users = JSON.parse(localStorage.getItem('users'));
            users.forEach((user, index) => {
                if (user.id === +parent.dataset.userid) {
                    users.splice(index, 1);
                    localStorage.setItem('users', JSON.stringify(users));
                }
            });
        }
    };
    this.editUser = function (event, parent) {
        if (event.target.classList.contains('js--edit')) {
            form.classList.add('open');
            const users = JSON.parse(localStorage.getItem('users'));
            const element = form.elements;
            users.forEach((user) => {
                if (user.id === +parent.dataset.userid) {
                    element.name.value = user.name;
                    element.phone.value = user.phone;
                    element.age.value = user.age;
                    form.removeEventListener('submit', runAddUser);
                    form.addEventListener('submit', (event) => {
                        event.preventDefault();
                        user.name = element.name.value;
                        user.phone = element.phone.value;
                        user.age = element.age.value;
                        form.reset();
                        form.classList.remove('open');
                        localStorage.setItem('users', JSON.stringify(users));
                        document.location.reload();
                    });
                }
            });
        }
    };
}

const newUserTable = new UserTable({
    form: document.querySelector('.js--form'),
    content: document.querySelector('.js--content'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
});
newUserTable.init();
