console.log (document)

console.log(document.getElementsByTagName ('p').length)

document.getElementById ('messageTotal').textContent = document.getElementsByTagName ('p').length;

    for(i=0; i<document.getElementsByClassName('poubelle').length; i++){
    
        document.getElementsByClassName('poubelle')[i].addEventListener("click",
           function(){

             console.log("click détecté !");
             this.parentNode.remove()
             document.getElementById ('messageTotal').textContent = document.getElementsByTagName ('p').length;
           }
        );
    }
    console.log(document)

console.log(document.getElementsByTagName ('p').length)

