
let btn = document.getElementById("btn")
btn.addEventListener("click", debounc(function(){
    console.log("Hello from the other side")
}, 2000))
function debounc(func,delay){
    console.log('cliked ')
    let timer;
    return function(){
        console.log('cliked2')
        clearTimeout(timer);
        timer = setTimeout(func,delay);
    }
}