const options = document.querySelectorAll('.rating-section input');
const labelOptions = document.querySelectorAll('.rating-section label');
const submitButton = document.getElementById('submit');
const ratingSummary = document.getElementById('rating-summary');
const flipCard = document.querySelector('.card');
const errorMessage = document.getElementById('error-message');

for (let i = 0; i < options.length; i++) {
    submitButton.addEventListener('click',() => {
        if (options[i].checked) {
            flipCard.style.transform = 'rotateY(180deg)';
            ratingSummary.innerHTML = 'You selected ' + options[i].value + ' out of 5';  
        }else {
            errorMessage.style.display='block';
        }
    });   
    
     
};

for (let j = 0; j < labelOptions.length; j++) {
    labelOptions[j].addEventListener('click',() => {
        labelOptions[j].style.background = 'hsl(25, 97%, 53%)';
        labelOptions[j].style.opacity = '1';
    });
    
};