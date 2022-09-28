let ulElem=document.getElementById("navbar__list")
let sec=document.querySelectorAll("section");
sec.forEach((elem,indx)=>{
 indx+=1;
let eelem=`<li>
<a href=${"#"+elem.id} class=menu__link >${"section"+indx}</a>
</li>`
ulElem.innerHTML+=eelem
})
let a_element=document.querySelectorAll("a[class=menu__link]")
a_element.forEach((elem,indx)=>{
    elem.onclick=function (e){
    e.preventDefault();
    sec[indx].scrollIntoView({
        behavior:"smooth"
       })
}
})

window.addEventListener("scroll",function(){
    sec.forEach((elem,indx)=>{
        let activeclass=document.querySelector(`a[href="#${elem.id}"]`);
        if(elem.getBoundingClientRect().top >= -400 && elem.getBoundingClientRect().top <= 150){

            elem.classList.add("your-active-class");
            activeclass.classList.add("active");
        
            }
            else{
                elem.classList.remove("your-active-class");
                activeclass.classList.remove("active");
            }
    })
    let butscroll=document.getElementById("but-scroll");
    if(window.scrollY >= "600"){
        butscroll.style.display="block"
    }
    else{
        butscroll.style.display="none"
    }
    butscroll.onclick=function () {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
})

// //////////////////////////////////////////////////////////////
// sec.forEach(function(elem,ind){
// let li_element=document.createElement("li");
// let a_element=document.createElement("a");
// a_element.classList.add("menu__link");
// a_element.href="#"+elem.id;

// ind+=1;
// a_element.innerHTML="section"+ind;
// li_element.appendChild(a_element);
// ulelem.appendChild(li_element);
// a_element.addEventListener("click",function(e){
//    e.preventDefault(); 
//    elem.scrollIntoView({
//     behavior:"smooth"
//    })
// })
// })
// /////////////////////////////////////////////////////////
