const wrapper = document.querySelector('.wrapper');
const input = wrapper.querySelector('.list_input');
const button = wrapper.querySelector('.generelist');

function generateList(arr) {
  let ul = document.createElement('ul');

  arr.forEach((element) => {
    let li = document.createElement('li');

    if (Array.isArray(element)) {
      li.append(generateList(element));
    } else {
      li.textContent = element;
    }
    ul.append(li);
  });
  wrapper.append(ul);
  return ul;
}

button.addEventListener('click', () => {
  const arrValue = JSON.parse(input.value);
  generateList(arrValue);
});
