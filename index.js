var number_Of_Drum_Rounds=document.querySelectorAll(".drum").length;
for(var i=0;i<number_Of_Drum_Rounds;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleClick)//insted of mentioning function name we can directly add function at that position but we should not have function name just like this function (){};
}
function handleClick(){
    // alert("I got clicked");
    var buttonInnerHtml=this.innerHTML;
    console.log(buttonInnerHtml);
    makeSound(buttonInnerHtml);
    button_animation(buttonInnerHtml);
}
document.addEventListener("keypress",function(event){
    console.log(event);
    makeSound(event.key);
    button_animation(event.key);
    // alert("key was pressed"); // to know which key has pressed we need to modify as function(event){conole.log(event)}
    });
function makeSound(key)
{
    console.log(event);
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;   
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
           break; 
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;   
        default: console.log(buttonInnerHtml);

    }
}

function button_animation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}


// another way to implement functions in addEventListner code 

// for(var i=0;i<number_Of_Drum_Rounds;i++)
// {
// document.querySelectorAll("button")[i].addEventListener("click",function (){
//     alert("I got clicked");   
// });//insted of mentioning function name we can directly add function at that position but we should not have function name just like this function (){};
// }

