/*let navbar = document.querySelector('.header  .flex  .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


Window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('Input={type="number"}').forEach(InputNumber => {
Inputnumber.oninput = () =>{
if (InputNumber.value.length > InputNumber.maxlength) InputNumber.value
    =InputNumber.value.slice(0,InputNumber.maxlength);

};
    
});*/

let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) {
            inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
        }
};
});




let dropdownItems = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .lists .items');

dropdownItems.forEach(item => {
    item.onclick = () => {
        let itemsParent = item.parentElement.parentElement;
        let output = itemsParent.querySelector('.output');
        output.value = item.innerText;
    };
});

