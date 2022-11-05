const title = document.querySelector('h1')

title.addEventListener('click', ()=>{
    if (title.style.color !== 'blue') {
        title.style.color = 'blue';
    }else{
        title.style.color = 'red';
    }
})