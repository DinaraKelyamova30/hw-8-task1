let color = document.querySelector('div');
let count = 0;
color.onmouseover = function () {
    if (count == 0) {
        color.style.backgroundColor = 'red';
    } else if (count == 1) {
        color.style.backgroundColor = 'green';
    } else if (count == 2) {
        color.style.backgroundColor = 'violet';
       
    }  
    count++;
    if (count == 3) {
        count = 0;
    }  
}
color.onmouseout = function(){
    color.style.backgroundColor = 'aqua';
}