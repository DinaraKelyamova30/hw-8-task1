let color = document.querySelector('div');


color.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'red';
    console.log(color);
    
})
color.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'aqua';
    console.log(color);
    
})

color.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'yellow';
    console.log(color);
})

color.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'aqua';
})