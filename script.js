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