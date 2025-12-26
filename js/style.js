
window.addEventListener("load", ()=>{
    const preloader=document.querySelector(".preloader")
        preloader.classList.add("displaynone")
   
})
 const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("animation2")
                entry.target.classList.remove("notsee")
            }
            else{
                entry.target.classList.remove("animaton2")
                entry.target.classList.add("notsee")
            }
        });
});
    const boxs=document.querySelectorAll(".animation1")
    boxs.forEach(box =>observer.observe(box))

    const menuBar=document.querySelector("#menu")
    menuBar.addEventListener("click", ()=>{
      const navigationn=document.querySelector("nav")
      const rgba=document.querySelector(".rgba") 
      navigationn.classList.add("openSidebar") 
      rgba.classList.add("rgbaEffect")
      rgba.addEventListener("click", ()=>{
        rgba.classList.remove("rgbaEffect")
        navigationn.classList.remove("openSidebar")
      })
    })