function clearDisplay(){
    document.getElementById("display").value=""
}
function backspace(){
    var display=document.getElementById("display");
    display.value=display.value.slice(0,-1)
}
function appendvalue(value){
    document.getElementById("display").value+=value
}

function positive_negative(){
    var display=document.getElementById("display");
    if(display.value)
    {
        if(display.value.startsWith('-'))

            {
                display.value=display.value.slice(1)
            }
            else{
                display.value='-'+display.value
            }
    }
}
// percentage
function calculate() {
    const display = document.getElementById("display");
    let expression = display.value;

    // Replace percentages with decimal equivalents
    expression = expression.replace(/(\d+)%/g, function(match, p1) {
        return p1 / 100;
    });

    try {
        // Use Function constructor to evaluate the sanitized expression
        const result = new Function('return ' + expression)();
        display.value = result;
    } catch (e) {
        display.value = "Error";
        clearDisplay();
    }
}


document.addEventListener('keydown',function(event){
    if(event.key=='Enter')
    {
        event.preventDefault;
        calculate();
    }
});
