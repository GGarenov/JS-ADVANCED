window.addEventListener('load', solve);

function solve() {

        
        const carModelEl = document.getElementById('car-model');
        const carYearEl = document.getElementById('car-year');
        const partNameEl = document.getElementById('part-name');
        const partNumberEl = document.getElementById('part-number');
        const conditionEl = document.getElementById('condition');

        // getting the other elements

        const nextBtn = document.getElementById('next-btn');
       
        const confirmListUl = document.getElementById('confirm-list');

        //create info list element
         const partInfoSection = document.getElementById('part-info');
         const infoListUl = document.createElement('ul');
        infoListUl.classList.add('info-list');
        partInfoSection.appendChild(infoListUl);

        //attach events

        nextBtn.addEventListener('click', publish);

        //callbacks

        function publish(e) {
                 e.preventDefault();

                const carModelElValue = carModelEl.value;
                const carYearElValue = carYearEl.value;
                const partNameElValue = partNameEl.value;
                const partNumberElValue = partNumberEl.value;
                const conditionElValue = conditionEl.value;
        
                if (
                        !carModelElValue ||
                        carYearElValue < 1980 && carYearElValue > 2023 ||
                        !partNameElValue ||
                        !partNumberElValue ||
                        !conditionElValue
                ) {
                        return;
                }
                
             // create li
                const partContentLi = document.createElement('li');
                partContentLi.classList.add('part-content');
        // create p's
                const article = document.createElement('article');
                const carModelP = document.createElement('p');
                carModelP.textContent =`Car Model: ${carModelElValue}`;

                const carYearP = document.createElement('p');
                carYearP.textContent = `Car Year: ${carYearElValue}`;
                
                const partNameP = document.createElement('p');
                partNameP.textContent = `Part Name: ${partNameElValue}`;

                const partNumberP = document.createElement('p');
                partNumberP.textContent = `Part Number: ${partNumberElValue}`;

                const conditionP = document.createElement('p');
                conditionP.textContent =`Condition: ${conditionElValue}`;

                const editBtn = document.createElement('button');
                editBtn.classList.add('action-btn', 'Edit');

                const continueBtn = document.createElement('button');
                continueBtn.classList.add('action-btn', 'Continue');


                article.appendChild(carModelP);
                article.appendChild(carYearP);
                article.appendChild(partNameP);
                article.appendChild(partNumberP);
                article.appendChild(conditionP);

                partContentLi.appendChild(article);
                partContentLi.appendChild(editBtn);
                partContentLi.appendChild(continueBtn);

                infoListUl.appendChild(partContentLi);


                
        }
 


};


    
    
