// class Band {
//   constructor(name, type, level) {
//     this.name = name;
//     this.type = type;
//     this.level = level;
//   }

//   changesMembers = (member) => {
//     this.member = member++ 
//     return this.member
//   } 
//   changesMembersMinus = (member) => {
//     this.member = member-- 
//     return this.member
//   } 
//   // changeInstruments = (instrument) => {
//   //   this.instrument = instrument ++
//   //   return this.member
//   // }
// }
// class Album {
//   constructor(name, type, year) {
//     this.name = name
//     this.type = type
//     this.year = year
//   }
//   likeAndDislike = (like) => {
//    if (like) {
//     return this.likeAndDislike = this.likeAndDislike + 1
//     }

//   }
// }
// const musicBand = new Band("Les Chiraques", "rap Corézien", "5 étoiles")
// // console.log(musicBand.name);
// // console.log(musicBand.type);
// // console.log(musicBand.level);
// // console.log(musicBand.changesMembers(7));

// const album = new Album("Nirvana", "In utero", 2007)
// console.log(album.likeAndDislike());

class User {
  constructor(firstName, lastName, country, age, poid) {
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.age = age
  }
}
class Plats {
  constructor(name, type) {
    this.name = name
    this.type = type
    this.calories = 0
  }
  addCalories() {
    this.calories = 200
  }

}
const userOne = new User("Waloche", "white", "France", 32) 
console.log(userOne);
const userTwo = new User("Jean-MichMich", "Roberto", "Bresil", 5) 
console.log(userTwo);
const userThree = new User("Robert-Hubert", "Vincent", "Italie", 20) 
console.log(userThree);
const userFour = new User("Blaize","Alaize", "Canada", 32) 
console.log(userFour);