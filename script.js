window.addEventListener('resize',function(){
    console.log(this.window.innerWidth)
})

const form = document.querySelector('.form');
const button = document.querySelector('.btn');
const emailBox = document.querySelector('#inputBox');
const warning = document.querySelector('.warning');

console.log(emailBox);
button.addEventListener('click',function (e) {
    e.preventDefault();
    const email = emailBox.value;
    // alert(emailBox.textContent)
    // alert('💩')
    if( /@/.test(email)) {
       // return ;
       console.log('logging from true')
       warning.classList.add('hidden')
    }
    
    
    else {
        console.log('logging from false')
        warning.classList.remove('hidden') 
    }
})