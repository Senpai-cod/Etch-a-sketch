const body = document.querySelector("body");

const div = document.createElement("div");
div.classList.add("container");
body.appendChild(div);

for(let j= 0; j< 16; j++){
    const rows = document.createElement("div")
    rows.classList.add("rows");
    div.appendChild(rows)
        for(let i=0; i < 16; i++){
            const divs = document.createElement("div");
            divs.classList.add("grid");
            rows.appendChild(divs);  
}
  }

const colorDivs = document.querySelectorAll(".grid");
colorDivs.forEach((divs) =>{
    divs.addEventListener("mouseover", ()=>{
    divs.style.backgroundColor = "grey";
});
    divs.addEventListener("mouseout", ()=>{
    divs.style.backgroundColor = "white";
});
    });

const button = document.createElement("button");
body.insertBefore(button,div);
button.textContent = "Click me";

button.addEventListener("click", ()=>{
    let gridNum = 1;
   do{
    gridNum = prompt("Enter The number of squares per side for the new grid.");
   }while(gridNum > 100 || gridNum < 1);

    body.removeChild(div);
    
    const divSecond = document.createElement("div");
    divSecond.classList.add("container");
    body.appendChild(divSecond);

for(let j= 0; j< Number(gridNum); j++){
    const rows = document.createElement("div")
    rows.classList.add("rows");
    divSecond.appendChild(rows)
    for(let i=0; i < Number(gridNum); i++){
        const divs = document.createElement("div");
        divs.classList.add("grid");
        rows.appendChild(divs);
}
}
const colorDivs = document.querySelectorAll(".grid");
colorDivs.forEach((divs) =>{
    divs.addEventListener("mouseover", ()=>{
    divs.style.backgroundColor = "grey";

});
    divs.addEventListener("mouseout", ()=>{
    divs.style.backgroundColor = "white";
});

    });

        });