
document.getElementById("position1id").addEventListener("click", function(e){
    changeslideshowPosition(document.getElementById("position1id"))
})
document.getElementById("position2id").addEventListener("click", function(e){
    changeslideshowPosition(document.getElementById("position2id"))
})
document.getElementById("position3id").addEventListener("click", function(e){
    changeslideshowPosition(document.getElementById("position3id"))
})
document.getElementById("position4id").addEventListener("click", function(e){
    changeslideshowPosition(document.getElementById("position4id"))
})

document.getElementById("logo3Id").addEventListener("click", function(e){
    window.open("https://www.instagram.com/websitecodingsolutions");
})


function scrollToHome(){
    document.querySelector('header').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToAbout(){
    document.querySelector('.aboutSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToContact(){
    document.querySelector('.contactSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function scrollToLocation(){
    document.querySelector('.locationSection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

let slideshowPosition = "position1id";


const changeslideshowPosition = (currentPostion)=>{
    try{
        if (currentPostion.classList.contains("currentPosition")){
            return;
        }
        else{
            currentPostion.classList.add("currentPosition")

            document.getElementById(`picture${slideshowPosition.split("")[8]}videoid`).style.display = "none"
            document.getElementById(`picture${currentPostion.id.split("")[8]}videoid`).style.display = "block"    
            document.getElementById(slideshowPosition).classList.remove("currentPosition")
            slideshowPosition = currentPostion.id;

        }
    }
    catch(e){
        //handle errors
        console.log(e)
        return;
    }
}