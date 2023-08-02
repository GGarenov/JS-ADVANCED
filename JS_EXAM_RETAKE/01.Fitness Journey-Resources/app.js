window.addEventListener('load', solve);

function solve() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let contactInput = document.getElementById('contact-number');
    let prefferedClassInput = document.getElementById('class-type');
    let classTimeInput = document.getElementById('class-time');

    //get the buttons and other items
    let nextBtn = document.getElementById('next-btn');
    let classInfoUl = document.querySelector('.class-info');
    
    let confirmClassUl = document.querySelector('.confirm-class');

    nextBtn.addEventListener('click', nextButtonHandler);

    function disableButton() {
        nextBtn.setAttribute('disabled', '');
    }

    function enableButton() {
        nextBtn.removeAttribute('disabled');
    }

     function clearAll() {
      nameInput.value = '';
      emailInput.value = '';
      contactInput.value = '';
      prefferedClassInput.value = '';
      classTimeInput.value = '';
    }


    function nextButtonHandler(e) {
        e.preventDefault();

        const nameInputValue = nameInput.value;
        const emailInputValue = emailInput.value;
        const contactInputValue = contactInput.value;
        const prefferedClassInputValue = prefferedClassInput.value;
        const classTimeInputValue = classTimeInput.value;

        if (!nameInputValue || !emailInputValue || !contactInputValue || !prefferedClassInputValue || !classTimeInputValue) {
            return;
        }

        disableButton();

        const listItem = document.createElement('li');
        listItem.classList.add('info-item');

        const articleEl = document.createElement('article');
        articleEl.classList.add('personal-info');

        const nameP = document.createElement('p');
        nameP.textContent = nameInputValue;
        const emailP = document.createElement('p');
        emailP.textContent = emailInputValue;
        const prefferedClassInputP = document.createElement('p');
        prefferedClassInputP.textContent = prefferedClassInputValue;
        const classTimeInputP = document.createElement('p');
        classTimeInputP.textContent = classTimeInputValue;

        // define buttons

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        articleEl.appendChild(nameP);
        articleEl.appendChild(emailP);
        articleEl.appendChild(prefferedClassInputP);
        articleEl.appendChild(classTimeInputP);

        listItem.appendChild(articleEl);
        listItem.appendChild(editBtn);
        listItem.appendChild(continueBtn);

        classInfoUl.appendChild(listItem);


        clearAll();

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();

            enableButton();

            nameInput.value = nameInputValue;
            emailInput.value = emailInputValue;
            contactInput.value = contactInputValue;
            prefferedClassInput.value = prefferedClassInputValue;
            classTimeInput.value = classTimeInputValue;

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
                enableButton();
            });
            
            confirmClassUl.appendChild(listItem);
            listItem.classList.add('continue-info');

            confirmBtn.addEventListener('click', (e) => {
                // listItem.remove();
            
                const bodyEl = document.getElementById('body');
                const mainEl = document.getElementById('main');
                bodyEl.removeChild(mainEl);

                const newH1El = document.createElement('h1');
                newH1El.id = 'thank-you';
                newH1El.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                bodyEl.appendChild(newH1El);

                //create button

                const doneBtn = document.createElement('button');
                doneBtn.id = 'done-btn';
                doneBtn.textContent = 'Done';
                bodyEl.appendChild(doneBtn);

            })







        })

    }


}




