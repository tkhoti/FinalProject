let navigation=document.getElementById('nav')
let burgerbar=document.getElementById('burger')

burgerbar.addEventListener('click',function(){
    navigation.classList.toggle('active');
})

document.getElementById('submit').addEventListener('click',function(){
    alert('Subscribed!')
})

document.getElementById('Search').addEventListener('search',function(){
    alert('Hope You Found What You are Looking For')
})