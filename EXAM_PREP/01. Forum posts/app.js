window.addEventListener("load", solve);

function solve() {
    let titleEl = document.getElementById('post-title');
    let categoryEl = document.getElementById('post-category');
    let contentEl = document.getElementById('post-content');
    let publishBtn = document.getElementById('publish-btn');
    let ulList = document.getElementById('review-list');
    let clearBtn = document.getElementById('clear-btn');
    let publishedListUl = document.getElementById('published-list')


    publishBtn.addEventListener('click', publishHandler);

    function clearAll() {
        titleEl.value = '';
        categoryEl.value = '';
        contentEl.value = '';
    }



//publish Btn function
    function publishHandler(e) {
        e.preventDefault();

        const titleElvalue = titleEl.value;
        const categoryElvalue = categoryEl.value;
        const contentElvalue = contentEl.value;
        
        if (!titleElvalue ||
            !categoryElvalue ||
            !contentElvalue) {
            return
        }
        
        const listItem = document.createElement('li');
        listItem.classList.add('rpost');
        const articleEl = document.createElement('article');
        const h4El = document.createElement('h4');
        h4El.textContent = titleElvalue;
        const categoryP = document.createElement('p');
        categoryP.textContent = `Category: ${categoryElvalue}`
        const contentP = document.createElement('p');
        contentP.textContent = `Content: ${contentElvalue}`

        articleEl.appendChild(h4El);
        articleEl.appendChild(categoryP);
        articleEl.appendChild(contentP);
        
        //define buttons

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';


        const approveBtn = document.createElement('button');
        approveBtn.classList.add('action-btn', 'approve');
        approveBtn.textContent = 'Approve';

        //append the created elements

    

        listItem.appendChild(articleEl);
        listItem.appendChild(editBtn);
        listItem.appendChild(approveBtn);

        ulList.appendChild(listItem);

        clearAll();


        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            titleEl.value = titleElvalue;
            categoryEl.value = categoryElvalue;
            contentEl.value = contentElvalue;

            listItem.remove();

        });


        approveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            listItem.removeChild(editBtn);
            listItem.removeChild(approveBtn);

            publishedListUl.appendChild(listItem);

            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
            
                listItem.remove();


            })

        })


    }

}
