window.addEventListener("load", solve);

function solve() {
  let titleElement = document.getElementById('post-title');
  let categoryElement = document.getElementById('post-category');
  let textContent = document.getElementById('post-content');
  let publishButton = document.getElementById('publish-btn');
  let reviewList = document.getElementById('review-list');
  let publishList = document.getElementById('published-list')
  let clearButton = document.getElementById('clear-btn')


  publishButton.addEventListener('click', publishHandler);
  clearButton.addEventListener('click', clearPostHandler);

  function publishHandler(e) {
    let title = titleElement.value;
    let category = categoryElement.value;
    let content = textContent.value;

    if (title === '' || category === '' || content === '') {
      return;
    }

    let publish = createPost(title, category, content)
    reviewList.appendChild(publish);
        titleElement.value = '';
        categoryElement.value = '';
        textContent.value = '';

  }


  function createPost(title, category, content) {
    let liElement = document.createElement('li');
    liElement.classList.add('rpost');
    let article = document.createElement('article');
    let titleH4 = document.createElement('h4');
    titleH4.textContent = title;
    let categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = `Category: ${category}`;
    let contentParagraph = document.createElement('p');
    contentParagraph.textContent = `Content: ${content}`;

    article.appendChild(titleH4);
    article.appendChild(categoryParagraph);
    article.appendChild(contentParagraph);
    
    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editHandler)
    editBtn.classList.add('action-btn', 'edit');
    
    let approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.classList.add('action-btn', 'approve');
    approveBtn.addEventListener('click', approveHandler)
    
    liElement.appendChild(article);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    
    return liElement;
  }

  function editHandler(e) {

    // mahame posta ot posts for review
    let liElement = e.target.parentElement;
    liElement.remove();


   // vrushtame go kum add new post za da go editnem 
    let titleH4 = liElement.querySelector('h4');
    let titleValue = titleH4.textContent;
    let paragraphs = liElement.querySelectorAll('p');
    let categoryValue = paragraphs[0].textContent;
    let contentValue = paragraphs[1].textContent;

    titleElement.value = titleValue;
    categoryElement.value = categoryValue.substring(10);
    textContent.value = contentValue.substring(9);
  }
  
  function approveHandler(e) {

    let liElement = e.target.parentElement;
    liElement.remove();
    let buttons = Array.from(liElement.querySelectorAll('button'));
    buttons.forEach(b => b.remove());
    publishList.appendChild(liElement);

  }

 function clearPostHandler() {
        let postsToClear = Array.from(publishList.children);
        postsToClear.forEach(p => p.remove());
        }

}
