
const image = document.getElementById('rotating-image');
let currentScroll = 0;

window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Calculate the rotation angle
    const rotationAngle = scrollY; // Adjust as needed

    // Update the image's rotation
    image.style.transform = `rotate(${rotationAngle}deg)`;
});

let menu=document.querySelector(".repo");
let kk=document.querySelector(".kk");
let flag=0;
 function hello(){
    if(flag==0){
        console.log(flag);
        menu.style.display="block";
        kk.style.display="none";
        
        flag=1;
    }
    else{
        console.log(flag);
        menu.style.display="none";
        kk.style.display="block";
        flag=0;
    }
 }
