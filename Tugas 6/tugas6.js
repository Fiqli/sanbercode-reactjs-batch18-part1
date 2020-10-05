//  Soal 1
//Luas lingkaran
const luaslingkaran = (phi, r) =>{
    let hasil = phi * r;
    return hasil;
}
console.log(luaslingkaran(22/7, 7))
//keliling lingkaran 
const kelilinglingkaran = (a, phi, r) =>{
    let hasil = a * phi * r;
    return hasil;
}
console.log(kelilinglingkaran(2, 22/7, 7))
// Jawaban Soal 1

// Soal 2
let kalimat = "saya adalah seorang fronted developer"

const first = 'saya'
const second = 'adalah'
const third = 'seorang'
const fourth = 'fronted'
const five = 'developer'
 
const theString = `${first} ${second} ${third} ${fourth} ${five}`
 
console.log(theString) 
// Jawaban Soal 2

//Soal 3
const newFunction = function literal(firstName, lastName){
    return {
      firstName,lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
    
  newFunction("William", "Imoh").fullName() 
  // Jawaban Soal 3

  // Soal 4
  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }
  const firstName = newObject.firstName;
  const lastName = newObject.lastName;
  const destination = newObject.destination;
  const occupation = newObject.occupation;
  const spell = newObject.spell
  
  console.log(firstName, lastName, destination, occupation, spell)
  // Jawaban Soal 4

  // Soal 5
  const west = ["Will", "Chris", "Sam", "Holly"]
  const east = ["Gill", "Brian", "Noel", "Maggie"]
  const combined = [...west, ...east]
  console.log(combined)// "Will", "Chris", "Sam", "Holly", "Gill", "Brian", "Noel", "Maggie"
  // Jawaban Soal 5