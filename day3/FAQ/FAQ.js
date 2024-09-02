//arrow1 
{
var content=document.getElementById('toggle_1');
content.style.display='none'
}
document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');
    let isRotated = false;
    arrow.addEventListener('click', () => {
        isRotated = !isRotated;
        if (isRotated) {
            arrow.classList.add('rotate');
        } else {
            arrow.classList.remove('rotate');
        }
    });
});

document.getElementById('arrow').addEventListener('click', function() {
    var content = document.getElementById('toggle_1');

    if (content.style.display == 'none') 
    {
        content.style.display = 'block';
       
    } 
    else
    {
        content.style.display = 'none';
       
    }
});

//arrow_2
{
    var content=document.getElementById('toggle_2');
    content.style.display='none'
    }
document.addEventListener('DOMContentLoaded', () => {
    const arrow_2 = document.getElementById('arrow_2');
    let isRotated = false;
    arrow_2.addEventListener('click', () => {
        isRotated = !isRotated;
        if (isRotated) {
            arrow_2.classList.add('rotate');
        } else {
            arrow_2.classList.remove('rotate');
        }
    });
});

document.getElementById('arrow_2').addEventListener('click', function() {
    var content = document.getElementById('toggle_2');
    if (content.style.display === 'none') 
    {
        content.style.display = 'block';
       
    } 
    else
    {
        content.style.display = 'none';
       
    }
});

//arrow_3
{
    var content=document.getElementById('toggle_3');
    content.style.display='none'
    }
document.addEventListener('DOMContentLoaded', () => {
    const arrow_3 = document.getElementById('arrow_3');
    let isRotated = false;
    arrow_3.addEventListener('click', () => {
        isRotated = !isRotated;
        if (isRotated) {
            arrow_3.classList.add('rotate');
        } else {
            arrow_3.classList.remove('rotate');
        }
    });
});

document.getElementById('arrow_3').addEventListener('click', function() {
    var content = document.getElementById('toggle_3');
    if (content.style.display == 'none') 
    {
        content.style.display = 'block';
       
    } 
    else
    {
        content.style.display = 'none';
       
    }
});