// const add = (a, b) => {
//   return a + b;
// }
//
// const user = {
//   name: "Jerry",
//   cities: ['Montreal', 'Delson'],
//   printPlacesLived(){
//       const cityMessages = this.cities.map((city)=>{
//         return this.name + ' has lived in ' + city;
//       });
//
//       return cityMessages;
//   }
// };
//
// console.log(user.printPlacesLived());


var multiplier = {
  numbers: [1,2,3,4,5,6,7,8],
  multiply: 5,
  multiplyBy(x){
    return this.numbers.map((number) => number * this.multiply);
  }
}


console.log(multiplier.multiplyBy());
