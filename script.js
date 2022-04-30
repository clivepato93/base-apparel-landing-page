window.addEventListener('resize',function(){
    console.log(this.window.innerWidth)
})

const form = document.querySelector('.form');
const error = document.querySelector('.error');
const button = document.querySelector('.btn');
const emailBox = document.querySelector('#inputBox');
const warning = document.querySelector('.warning');

const focus = ()=> form.classList.add('focus');

console.log(emailBox);
button.addEventListener('click',function (e) {
    e.preventDefault();
    const email = emailBox.value;
    // alert(emailBox.textContent)
    // alert('💩')
    // better check on regex in a real application
    if( /@/.test(email)) {
        form.classList.remove('warningBorder')
        error.classList.add('hidden')
       warning.classList.add('hidden')
       emailBox.value = ''
    }
    
    
    else {
        form.classList.add('warningBorder')
        error.classList.remove('hidden')
        warning.classList.remove('hidden') 
    }
})