// function animal() {}
// function dog() {}

// Object.defineProperties(animal.prototype, {
//   name: {
//     value() {
//       return 'animal'
//     }
//   },
//   say: {
//     value() {
//       return `i am ${this.name()}`
//     }
//   }
// })

// dog.prototype = Object.create(animal.prototype, {
//   constructor: {
//     value: dog,
//     enumerable: false
//   },
//   name: {
//     value() {
//       return 'dog'
//     }
//   }
// });

// document.write(dog.prototype.constructor);

// class Animal {
//   name() {
//     return 'animal'
//   }
//   say = () => {
//     return `i am ${this.name()}`
//   }
// }

// class dog extends Animal {
//   food = 'bone';
//   name() {
//     return 'dog'
//   }
// }

// document.write(new dog().say());