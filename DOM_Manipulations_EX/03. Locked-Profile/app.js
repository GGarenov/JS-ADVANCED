function lockedProfile() {
    // constants
    const SHOW_MORE = 'Show more';
    const HIDE_IT = 'Hide it';

    // capture elements
   const buttonElements = Array.from(document.querySelectorAll("div button")); // select every div buttons
    console.log({ buttonElements })
    
    //attach event listeners

    for (const button of buttonElements) {
        button.addEventListener('click', show)
    }

    //on click functionality
    function show(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;
        
        if (isLocked) {
            return;
        }
    
        const hiddenFieldElements = e.target.previousElementSibling;
        
        if (e.target.textContent === SHOW_MORE) {
            hiddenFieldElements.style.display = "inline";
            e.target.textContent = HIDE_IT;
        
            return;
        }

        hiddenFieldElements.style.display = "";
        e.target.textContent = SHOW_MORE;

    }
}