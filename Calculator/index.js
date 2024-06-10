function cleardisplay(){
    document.getElementById('display').value='0';
}
function backspace(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function solve(value){
    let display = document.getElementById('display');
    display.value = display.value + value;
}
function calculate(){
    let display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}
