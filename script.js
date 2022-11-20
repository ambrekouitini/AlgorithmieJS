/*
EXO IF ://///////////////////////////

const a = 1;
const b = 4;
const c = 2;


if (a === b) {
    console.log('c egal');
}

if (c < b && a + c !== 3) {
    console.log('ok');
} else {
    console.log('c raté');
}
*/
/*
EXO SWITCH ://///////////////////////////

const a = 4;
const b = 2;
const c = 3;

switch (a){
    case b :
        console.log('égal a b');
        break;
    case c : 
        console.log('égal a c');
        break;
    default :
    console.log('egal a r');

}
*/
/*
EXO FOR ://///////////////////////////
var a = 5;
for (let i = 0; i < a; i++) {
    console.log('oklm');

}
*/
/*
EXO WHILE ://///////////////////////////

let a = 3;

while (a < 9) {
    a++
    if (a == 7) {
        continue
    }
    if (a == 8) {
        break
    }
    console.log(a)
}
console.log('j\'ai cassé la boucle de '+ a +' tours');
*/

// var a = 'Jean';
// var b = 'Jean';
// result = verif(a, b);


// function verif (nom1, nom2) {
//     return nom1 === nom2
// }
// console.log(result)

// cette version avec foreach ne modif pas les valeurs directement
// let names = [];
// names.push("Vincent","Paul","Arthur");

// names.forEach(name=> {
//     name += " va à la peche"
//     console.log(name);
//     console.log(names);
// })

// class Pokemon {
//     constructor( name, attack,defense,hp,luck){
//         this.name = name;
//         this.attack = attack;
//         this.defense = defense;
//         this.hp = hp;
//         this.luck = luck;
//     }

//     isLucky(){
//         if(Math.random() > this.luck){
//             return true
//         } else {
//             return false
//         }
//     }
//     attackPokemon(anPokemon){
//         if(this.isLucky()){
//             let degats = this.attack - anPokemon.defense;
//             anPokemon.hp -= degats
//         }
//     }
// }

// let Bulbi = new Pokemon("Bulbi", 10, 9, 20, 1);
// let Pika = new Pokemon("Pika", 7, 6, 20, 2);

// while (Bulbi.hp > 0 && Pika.hp > 0) {
//     Bulbi.attackPokemon(Pika)
//     console.log(Bulbi.name + " a infligé " + Bulbi.attack + " dégâts. Il reste " + Pika.hp + "hp à Pika");
//     if (Pika.hp <= 0  || Bulbi.hp <= 0) {
//         console.log("GAME OVER");
//         break;
//     } 
//     Pika.attackPokemon(Bulbi)
//     console.log(Pika.name + " a infligé " + Pika.attack + " dégâts. Il reste " + Bulbi.hp + "hp à Bulbi");
// }




class Pokemon {
    constructor( name, attack,defense,hp,luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        if(Math.random() > this.luck){
            return true
        } else {
            return false
        }
    }
    attackPokemon(anPokemon){
        if(this.isLucky){
            let degats = this.attack - anPokemon.defense
            anPokemon.hp -= degats
        }
    }
}

let Bulbi = new Pokemon("Bulbi", 10, 9, 20, );
let Pika = new Pokemon("Pika", 7, 6, 20, 2);

while (Bulbi.hp > 0 && Pika.hp > 0) {
    Bulbi.attackPokemon(Pika)
    console.log(Bulbi.name + " a infligé " + Bulbi.attack + " dégâts. Il reste " + Pika.hp + "hp à Pika");
    if (Pika.hp <= 0){
        console.log("Pika est mort. GAME OVER");
        break
    } else {
        Pika.attackPokemon(Bulbi)
        console.log(Pika.name + " a infligé " + Pika.attack + " dégâts. Il reste " + Bulbi.hp + "hp à Bulbi");
        if (Bulbi.hp <= 0){
            console.log("Bulbi est mort. GAME OVER");
            break
        }
    }
}