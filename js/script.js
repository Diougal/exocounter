let compteur = 0 ;

function ChangeColor () {
    if (compteur < 0 )
document.getElementById("counter").style.color = ("red");
else if (compteur == 0 )
    document.getElementById("counter").style.color = ("black");
    else if (compteur > 0 )
    document.getElementById("counter").style.color = ("green");
}


function decompte() {
compteur = compteur - 1;
ChangeColor ();
document.getElementById("counter").innerHTML = compteur;

}


function reset(){
    compteur = 0;
    ChangeColor ();
    document.getElementById("counter").innerHTML = compteur;

}


function ajoute () {
    compteur = compteur + 1;
    ChangeColor ();
    document.getElementById("counter").innerHTML = compteur;

}

document.getElementById("button1").addEventListener("click", decompte);
document.getElementById("button2").addEventListener("click", reset);
document.getElementById("button3").addEventListener("click", ajoute);


