let Box=document.getElementById("colorBox");
function change() {
    
    let Width=document.getElementById("Width").value;
    let Height=document.getElementById("Height").value;
    let Blur=document.getElementById("Blur").value;
    let Dropshadow=document.getElementById("Dropshadow").value;
   Box.style.animation="2s";
    Box.style.width=Width+"px";
    Box.style.height=Height+"px";
     Box.style.filter="blur("+Blur+"px)";
   // Box.style.filter="drop-shadow(2px 2px 3px "+Dropshadow+")";
    alert(l);
}
