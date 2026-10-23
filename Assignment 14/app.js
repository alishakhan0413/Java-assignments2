function deleteRow(e){
    console.log(e.parentNode.parentNode);
    var row = e.parentNode.parentNode
    row.remove()
}
var span= document.getElementById("number") 
var count = Number(span.innerText)

function increase(){
    count = count+1
    console.log(count);
    span.innerText=count
}
function decrease(){
    count = count-1
    console.log(count);
    span.innerText=count
}
function display(){
   alert("welcome to the website");
}
function purchase(){
   alert("purchased successfully. Thankyou for shopping!");
}