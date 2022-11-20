class Personnage{
    constructor( prenom, sante){
        this.prenom = prenom;
        this.sante = sante;
    }
}

class Trajet{
    constructor( radio, feu_rouge){
        this.radio = radio;
        this.feu_rouge = feu_rouge;
        this.changement = 0;
    }

    feuRougeExp(Personnage,randomMusic){
        this.feu_rouge -= 1
        if(randomMusic == "Anissa - Wejdene"){
            Personnage.sante -= 1
            this.changement += 1
        }
    }
}

let radio = ["Anissa - Wejdene", "Choupette - Uzi", "Higher - Tems", "Coaster - Khalid", "Meuda - Tiakola"]


let John = new Personnage("John", 10);
let GoHome = new Trajet("Radio", 30);

while (GoHome.feu_rouge > 0){
    let randomMusic = radio[Math.floor(Math.random()*5)]
    GoHome.feuRougeExp(John,randomMusic)
    console.log("La musique joué est " + randomMusic)
    console.log("Il reste " + GoHome.feu_rouge + " feu rouges restants.")
    console.log(" ---------------------------- ")
    if(John.sante == 0){
        console.log("BOOOUM EXPLOSION !!!");
        break
    } 
}
if(John.sante > 0){
    console.log(" ---------------------------- ")
    console.log(" ---------------------------- ")
    console.log(John.prenom + " est bien arrivé à destination ")
    console.log("Il lui a fallu : " + GoHome.changement + " changements")
}
