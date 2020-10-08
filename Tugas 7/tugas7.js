var sheep = new Animal("shaun");

console.log(sheep.name)// "shaun"
console.log(sheep.animalLegs)// 4
console.log(sheep.animalBlood)//false

class frog extends Animal {
    constructor (name){
        super (name);
    }

    jump(){
        return " hop hop"
    }
}

var sungokong = new ape ("kera sakti")
sungokong.yell()//"Auoo"

class ape extends Animal {
    constructor (name) {
        super (name);
    }

    yell(){
        return "Auoo"
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()// "Auoo"
console.log(sungokong);