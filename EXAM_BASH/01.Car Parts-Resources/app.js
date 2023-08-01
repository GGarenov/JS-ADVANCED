window.addEventListener('load', solve);

function solve() {
  // Select all DOM elements which we will use
  let carModelElement = document.getElementById('car-model');
  let carYearElement = document.getElementById('car-year');
  let partNameElement = document.getElementById('part-name');
  let partNumberElement = document.getElementById('part-number');
  let conditionElement = document.getElementById('condition');
  let nextButton = document.getElementById('next-btn');

  nextButton.addEventListener('click', nextButtonHandler);

  // capture other elements
  let infoListUl = document.querySelector('.info-list');

  let confirmList = document.querySelector('.confirm-list');

  //implement nextButton logic

  function hideImage() {
    let visibilityImg = document.getElementById('complete-img');
    visibilityImg.style.visibility = 'hidden';
  }
  function showImage() {
    let visibilityImg = document.getElementById('complete-img');
    visibilityImg.style.visibility = 'visible';
  }

  function setVisibilityText(text = '') {
    let visibilityText = document.getElementById('complete-text');
    visibilityText.textContent = text;
  }
  function disableButton() {
    nextButton.setAttribute('disabled', '');
  }
  function enableButton() {
    nextButton.removeAttribute('disabled');
  }
  function nextButtonHandler(e) {
    e.preventDefault();

    //implement nextButton logic

    const carModelValue = carModelElement.value;
    const carYearValue = carYearElement.value;
    const partNameValue = partNameElement.value;
    const partNumberValue = partNumberElement.value;
    const conditionValue = conditionElement.value;

    if (
      !carModelValue ||
      carYearValue < 1980 ||
      carYearValue > 2023 ||
      !partNameValue ||
      !partNumberValue ||
      !conditionValue
    ) {
      return;
    }
    hideImage();
    setVisibilityText();
    disableButton();

    // creating a list item and its content

    const listItem = document.createElement('li');
    listItem.classList.add('part-content');
    //listItem.classList('part-content');
    // mai trqbva i article da napravq

    const articleEl = document.createElement('article');

    const carModelP = document.createElement('p');
    carModelP.textContent = `Car Model: ${carModelValue}`;

    const carYearP = document.createElement('p');
    carYearP.textContent = `Car Year: ${carYearValue}`;

    const partNameP = document.createElement('p');
    partNameP.textContent = `Part Name: ${partNameValue}`;

    const partNumberP = document.createElement('p');
    partNumberP.textContent = `Part Number: ${partNumberValue}`;

    const conditionP = document.createElement('p');
    conditionP.textContent = `Condition: ${conditionValue}`;

    // define buttons

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    // append the created elements

    articleEl.appendChild(carModelP);
    articleEl.appendChild(carYearP);
    articleEl.appendChild(partNameP);
    articleEl.appendChild(partNumberP);
    articleEl.appendChild(conditionP);

    listItem.appendChild(articleEl);
    listItem.appendChild(editBtn);
    listItem.appendChild(continueBtn);

    infoListUl.appendChild(listItem);

    //     // Hide the image with ID "complete-img"
    //     let visibilityImg = document.getElementById('complete-img');
    //     visibilityImg.hidden = true;

    //     // Clear the text content of the paragraph with ID "complete-text"
    //     let visibilityText = document.getElementById('complete-text');
    //     visibilityText.textContent = "";

    //clear
    clearAll();

    // Edit button functionality

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();

      enableButton();

      carModelElement.value = carModelValue;
      carYearElement.value = carYearValue;
      partNameElement.value = partNameValue;
      partNumberElement.value = partNumberValue;
      conditionElement.value = conditionValue;

      //remove li Element
      listItem.remove();
    });

    continueBtn.addEventListener('click', (e) => {
      e.preventDefault();

      listItem.removeChild(editBtn);
      listItem.removeChild(continueBtn);

      const confirmBtn = document.createElement('button');
      confirmBtn.classList.add('confirm-btn');
      confirmBtn.textContent = 'Confirm';

      const cancelBtn = document.createElement('button');
      cancelBtn.classList.add('cancel-btn');
      cancelBtn.textContent = 'Cancel';
      listItem.appendChild(confirmBtn);
      listItem.appendChild(cancelBtn);

      cancelBtn.addEventListener('click', (e) => {
        listItem.remove();
      });

      confirmList.appendChild(listItem);

      confirmBtn.addEventListener('click', (e) => {
        listItem.remove();
        enableButton();
        showImage();
        setVisibilityText('Part is Ordered!');
      });
    });

    function clearAll() {
      carModelElement.value = '';
      carYearElement.value = '';
      partNameElement.value = '';
      partNumberElement.value = '';
      conditionElement.value = '';
    }
  }
}
