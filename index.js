let div = document.getElementsByClassName('div');
for(let i=1; i<=3; i++){
    let add = prompt('Write url image');
    div.style.backgroundImage = `<div>${add}</div>`;
}