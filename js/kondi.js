// const check =()=>{
const hidenav= document.getElementById("hidenav")
const navcard=document.querySelector('.navcard')

hidenav.addEventListener('click',()=>{
    navcard.style.display='block';
    hidenav.style.display='none'
  
})

hidenav.addEventListener('dbclick',()=>{

    navcard.style.display= 'none';
})