window.addEventListener('resize',function(){
    console.log(this.window.innerWidth)
})

const button = document.querySelector('.btn');

button.addEventListener('click',function (e) {
    e.preventDefault();
    alert('💩')
})