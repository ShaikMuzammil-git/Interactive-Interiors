setInterval(() => {
    d=new Date();

    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hRotation= ( 30*htime ) + (mtime/2) ;
    mRotation= 6*mtime;
    sRotation= 6*stime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    
}, 1000); 



function Sbirds() {
    document.getElementById("birds").style.opacity = "0.8"; 
    document.getElementById("birds").style.animationName = "birds"; 
    document.getElementById("Sbirds").style.backgroundColor = "black"; 
    document.getElementById("Sbirds").style.color = "white";
    setTimeout(() =>{
        document.getElementById("birds").style.opacity = "0"; 
        document.getElementById("birds").style.animationName = "";
        document.getElementById("Sbirds").style.backgroundColor = "#f7e0e0"; 
        document.getElementById("Sbirds").style.color = "black";
        },2000);
}
function plane() {
    document.getElementById("plane").style.opacity = "0.8";
    document.getElementById("outdoor").style.opacity = "0";   
    setTimeout(() =>{
        document.getElementById("plane").style.opacity = "0";
        document.getElementById("outdoor").style.opacity = "1";
        },2500);       
}
function Smonkey() {
        document.getElementById("peek").style.opacity = "0.8"; 
        document.getElementById("Smonkey").style.backgroundColor = "black"; 
        document.getElementById("Smonkey").style.color = "white";
        setTimeout(() =>{
        document.getElementById("peek").style.opacity = "0";
        document.getElementById("Smonkey").style.backgroundColor = "#f7e0e0"; 
        document.getElementById("Smonkey").style.color = "black"; 
         },1000);
}
        
function pendulum() {
        var x = document.getElementById("pendulum");
        if(x.style.opacity === "0"){
               x.style.opacity = "1";  
               document.getElementById("Spendulum").style.backgroundColor = "black"; 
               document.getElementById("Spendulum").style.color = "white"; 
               document.getElementById("Spendulum").innerHTML = "hide it"; 
        }
        else{
        x.style.opacity = "0";  
        document.getElementById("Spendulum").style.backgroundColor = "#f7e0e0"; 
        document.getElementById("Spendulum").style.color = "black"; 
        document.getElementById("Spendulum").innerHTML = "pendulum"; 
        }
}

function photo() {
    var x=document.getElementById("painting")
    if(x.style.backgroundImage===("")){
    document.getElementById("painting").style.backgroundImage = "url(painting.jpg)";  
    document.getElementById("Spainting").style.backgroundColor = "black"; 
    document.getElementById("Spainting").style.color = "white"; 
    document.getElementById("Spainting").innerHTML = "undo painting";
        }   
        else{  document.getElementById("painting").style.backgroundImage = "";  
        document.getElementById("Spainting").style.backgroundColor = "#f7e0e0"; 
        document.getElementById("Spainting").style.color = "black"; 
        document.getElementById("Spainting").innerHTML = "change painting";
      } 
    }

    function night() {
        var x=document.getElementById("container")
        if(x.style.animationName===("")){
        document.getElementById("container").style.animationName = "night";  
        document.getElementById("nnnn").style.backgroundColor = "black"; 
        document.getElementById("nnnn").style.color = "white"; 
        document.getElementById("nnnn").innerHTML = "Day";
            }   
            else{  
            document.getElementById("container").style.animationName = "";  
            document.getElementById("nnnn").style.backgroundColor = "#f7e0e0"; 
            document.getElementById("nnnn").style.color = "black"; 
            document.getElementById("nnnn").innerHTML = "Night";
          } 
        }
        function light() {
            var x=document.getElementById("bulb")
            if(x.style.zIndex===("-1")){
            document.getElementById("bulb").style.zIndex = "2";  
            document.getElementById("Slight").style.backgroundColor = "black"; 
            document.getElementById("Slight").style.color = "white"; 
            document.getElementById("Slight").innerHTML = "Lamp Off";
                }   
                else{  
                document.getElementById("bulb").style.zIndex = "-1";  
                document.getElementById("Slight").style.backgroundColor = "#f7e0e0"; 
                document.getElementById("Slight").style.color = "black"; 
                document.getElementById("Slight").innerHTML = "Lamp On";
              } 
            }
