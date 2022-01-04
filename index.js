
var buttons=document.querySelectorAll(".drum");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var buttonValue=this.innerHTML;
        sound(buttonValue);
        keyPressAnimation(buttonValue);
    })
}

//now event on whole page , i.e whenever the key is pressed something will be done
document.addEventListener('keydown',function(event){
    sound(event.key); //as event .key will give the keyboard value ,, see by console.log(event);
    keyPressAnimation(event.key);
})

function sound(key)  //common function to both keyboard nad mouse
{
    switch (key) {
        case "w":
            let audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            let audio2=new Audio('sounds/kick-bass.mp3');
            audio2.play();
            break;
        case "s":
            let audio3=new Audio('sounds/snare.mp3');
            audio3.play();
            break;
        case "d":
            let audio4=new Audio('sounds/tom-1.mp3');
            audio4.play();
            break;
        case "j":
            let audio5=new Audio('sounds/tom-2.mp3');
            audio5.play();
            break;
        case "k":
            let audio6=new Audio('sounds/tom-3.mp3');
            audio6.play();
            break;
        case "l":
            let audio7=new Audio('sounds/tom-4.mp3');
            audio7.play();
            break;
    
        default:
            console.log(buttonValue);
            break;
    }
}

//now on pressing any button , making its opacity low by addinf class to button during pressing;
function keyPressAnimation(keyvalue){
    let button=document.querySelector('.'+keyvalue);
    console.log(button);
    button.classList.add('pressed');
    setTimeout(function(){
        button.classList.remove('pressed');
    },80);
}
