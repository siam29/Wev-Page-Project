const adultsMinusBtn = document.getElementById('adults-minus');
const adultsPlusBtn = document.getElementById('adults-plus');
const adultsCountInput = document.getElementById('adults-count');

const childrenMinusBtn = document.getElementById('children-minus');
const childrenPlusBtn = document.getElementById('children-plus');
const childrenCountInput = document.getElementById('children-count');

const petsCheckbox = document.getElementById('pets-checkbox');

adultsMinusBtn.addEventListener('click', decreaseAdults);
adultsPlusBtn.addEventListener('click', increaseAdults);
childrenMinusBtn.addEventListener('click', decreaseChildren);
childrenPlusBtn.addEventListener('click', increaseChildren);

function decreaseAdults() {
  let adultsCount = parseInt(adultsCountInput.value);
  if (adultsCount > 1) {
    adultsCountInput.value = adultsCount - 1;
  }
}

function increaseAdults() {
  let adultsCount = parseInt(adultsCountInput.value);
  adultsCountInput.value = adultsCount + 1;
}

function decreaseChildren() {
  let childrenCount = parseInt(childrenCountInput.value);
  if (childrenCount > 0) {
    childrenCountInput.value = childrenCount - 1;
  }
}

function increaseChildren() {
  let childrenCount = parseInt(childrenCountInput.value);
  childrenCountInput.value = childrenCount + 1;
}