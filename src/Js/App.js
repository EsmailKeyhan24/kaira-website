const toggleMenu=document.getElementById('toggleMenu')
const navBar=document.getElementById('navBar')
toggleMenu.addEventListener('click' , ()=>{
    navBar.style.right=0
})


document.addEventListener('click' , (e)=>{
    if(!toggleMenu.contains(e.target) && !navBar.contains(e.target)){
        navBar.style.right='-360px'
    }
})