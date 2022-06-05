

const button = document.querySelector("button.ripple");

button.addEventListener('click',e=>{
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const left = x - buttonLeft;
    const top = y - buttonTop;

    const circle = document.createElement("span");
    circle.className="circle";
    circle.style.top = top + "px";
    circle.style.left = left + "px";
    button.appendChild(circle);

    setTimeout(() => {
        circle.remove()
    }, 500);
})


