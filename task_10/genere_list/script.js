const wrapper = document.querySelector('.wrapper');
const input = wrapper.querySelector('.list');
const button = wrapper.querySelector('.generelist');

function getInputValue() {
  const arrValue = JSON.parse(input.value);

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
  console.log(generateList(arrValue));
}

button.addEventListener('click', getInputValue);
