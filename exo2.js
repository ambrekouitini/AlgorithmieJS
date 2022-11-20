class Caracteristique{
    constructor( nom, probaMourir, probaDegat, probaMD){
        this.nom = nom;
        this.probaMourir = probaMourir;
        this.probaDegat = probaDegat;
        this.probaMD = probaMD;
    }
}

class Survivant{
    constructor( prenom, Caracteristique){
        this.prenom = prenom;
        this.Caracteristique = Caracteristique;
    }
}

class Tueur{
    constructor(nom, ptsVie){
        this.nom = nom;
        this.ptsVie = ptsVie
    }
}

// let prenom = prenomArray[Math.floor(Math.random()*10)]
// console.log(prenom)

let Jason = new Tueur("Jason", 100);
// console.log(Jason);

let CaracteristiqueNerd = new Caracteristique("Nerd", 0.3, 0.2, 0.5);
let CaracteristiqueSportif = new Caracteristique("Sportif", 0.2, 0.6, 0.2);
let CaracteristiqueBlonde = new Caracteristique("Blonde", 0.6, 0.2, 0.2);
let CaracteristiqueLion = new Caracteristique("Lion", 0.8, 0.1, 0.1);
let CaracteristiqueTiktok = new Caracteristique("Tiktok", 0.3, 0.1, 0.1);
let CaracteristiqueTimide = new Caracteristique("Timide", 0.2, 0.4, 0.2);



let allsurvivant = [];
let caracteristiqueArray = [CaracteristiqueNerd, CaracteristiqueSportif, CaracteristiqueBlonde, CaracteristiqueLion, CaracteristiqueTiktok, CaracteristiqueTimide];
let prenomArray = ["Brévin", "Hugo", "Quentin", "Marvin", "Arthur", "Enzo" ,"Marc", "Thomas", "Ambre", "Amîn" ]
let prenomArrayRestant=prenomArray.slice(0);
let caracteristiqueArrayRestant=caracteristiqueArray.slice(0);

for (let i = 0; i < 5; i++) {
    allsurvivant.push(new Survivant(prenomArrayRestant[Math.floor(Math.random()*10)], caracteristiqueArrayRestant[Math.floor(Math.random()*6)]))
}

console.log('Tous les survivants sont : ', allsurvivant);
console.log(" ---------------------------- ")
// randomSurvivant = allsurvivant[0];
// console.log(randomSurvivant)
// console.log(randomSurvivant.Caracteristique.probaMourir)

while(Jason.ptsVie > 0  && allsurvivant.length  > 0 ){
    let randomProba = Math.random();
    randomSurvivant = allsurvivant[0];
    console.log('Le survivant est : ', randomSurvivant.prenom);
    console.log(" ---------------------------- ")

    if(randomProba < randomSurvivant.Caracteristique.probaMourir) {
        console.log(randomSurvivant.prenom ,' est mort');
        allsurvivant.splice(0,1);
    } 
    else if(randomProba > randomSurvivant.Caracteristique.probaMourir && randomProba < (randomSurvivant.Caracteristique.probaMourir + randomSurvivant.Caracteristique.probaDegat)) {
        console.log(randomSurvivant.prenom, ' a esquivé et a infligé 10 pts de dégâts');
        Jason.ptsVie -= 10;
        console.log('Il reste ', Jason.ptsVie, 'pts de vie à Jason');
    } 
    else {
        console.log(randomSurvivant.prenom, 'a infligé 15 points de dégâts mais est mort ensuite.');
        Jason.ptsVie -= 15;
        console.log('Il reste ', Jason.ptsVie, 'points de vie à Jason');
        allsurvivant.splice(0,1);
    }
    
    if(Jason.ptsVie <= 0) {
        console.log('Jason le tueur est mort');
        console.log(allsurvivant.length, ' survivant !');
        break
    } 
    else if(Jason.ptsVie > 0 && allsurvivant.length == 0) {
        console.log('Tout le monde est mort !');
        console.log('GAME OVVVER !');
        break
    }
}