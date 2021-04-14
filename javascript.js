









const navSlide=()=>{
    const text=document.querySelector('.changeWord');
    const nav= document.querySelector('.menu-body');
    const icon=document.querySelector(".fa-grip-lines");
   
    icon.addEventListener('click',()=>{
        icon.classList.toggle('fa-times');
       
        if(text.getAttribute('data-hide')==text.innerHTML){
            text.innerHTML=text.getAttribute('data-original');
        }
    else{
      text.setAttribute('data-original',text.innerHTML);
      text.innerHTML=text.getAttribute('data-hide');
    }

  
        if(nav.style.opacity==='0'){
        nav.style.opacity='1';
      //  word.innerHTML='Talent Point';
    }
    else if(nav.style.opacity==='1')
    nav.style.opacity='0';
        else 
       { nav.style.opacity='1';
       // nav.classList.toggle('menu-body');
}
    });
    
}
navSlide();


const firstBodyNav=()=>{

const icon1=document.querySelector("#nav1");
const icon2=document.querySelector("#nav2");
const icon3=document.querySelector("#nav3");
const icon4=document.querySelector("#nav4");
const hid=document.querySelectorAll('.hid');
const hid1=document.querySelectorAll('.hid1');
const down=document.querySelector('.fa-chevron-down');
const last=document.querySelector('.last');

icon1.addEventListener('click',()=>{
   // icon1.classList.toggle('fa-times');

   icon1.classList.add('fa-times');
 
hid.forEach((item) => {
    if(item.style.display==='none'){
    item.style.display='block';
    }

    else{
    item.style.display='none';
    icon1.classList.remove('fa-times');
    icon1.classList.add('fa-plus');}

})

});

icon2.addEventListener('click',()=>{
    // icon1.classList.toggle('fa-times');
 
    icon2.classList.add('fa-times');
  
 hid1.forEach((item) => {
     if(item.style.display==='none'){
     item.style.display='block';
     }
 
     else{
     item.style.display='none';
     icon2.classList.remove('fa-times');
     icon2.classList.add('fa-plus');}
 
 })
 
 });
 


icon3.addEventListener('click', ()=>{
    icon3.classList.toggle('fa-times');
});

icon4.addEventListener('click', ()=>{
    icon4.classList.toggle('fa-times');
});



down.addEventListener('click',()=>{
//down.classList.toggle('last');
if(last.style.display==='none'){
    last.style.display='block';
    }

    else
    last.style.display='none';

});

}

firstBodyNav();
