// assign function
// const obj ={
//     a:1,
//     b:5
// }
// console.log(obj);
// const copy =Object.assign({},obj);
// copy.a=77;
// console.log(copy);
// const target ={
//     a:10,b:19
// }
// const source ={
//     b:18,c:90
// }
// const copy = Object.assign(target , source);
// console,console.log(target);

// object.getprototypeOf()
//The Object.getPrototypeOf() static method returns the prototype
// (i.e. the value of the internal [[Prototype]] property) of the specified object.

// const prototype1={};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1);

//groupBy()  
// it group the value on the basic of given string 
// it take two parameter (object  , callBack function )
//A function to execute for each element in the iterable.
// It should return a value that can get coerced into a property key
// (string or symbol) indicating the group of the current element. 
//The function is called with the following arguments:

// example 

// const array = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];
//   const result = Object.groupBy(array , ({type}) => type);
//   console.log(result);


// hasOwn()
//The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. 
//If the property is inherited, or does not exist, the method returns false.
// const obj = {
//     name:"zaid",
//     class:"MCa"
// }
// console.log(Object.hasOwn(obj , 'name'))

//Object.prototype.hasOwnProperty()
//The hasOwnProperty() method of Object instances returns a boolean indicating whether 
//this object has the specified property as its own property 
//(as opposed to inheriting it).

// object.is();

// Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:

// both undefined
// both null
// both true or both false
// both strings of the same length with the same characters in the same order
// both the same object (meaning both values reference the same object in memory)
// both BigInts with the same numeric value
// both symbols that reference the same symbol value
// both numbers and
// both +0
// both -0
// both NaN
// or both non-zero, not NaN, and have the same value
// console.log(Object.is(1,1))
// console.log(Object.is(NaN , NaN))
// console.log(Object.is("zaid", "zaid"))
// console.log(Object.is("zaid","aidz"))

// Object.isExtensible

// The Object.isExtensible() static method determines if 
// // an object is extensible (whether it can have new properties added to it).
// const obj ={};
// console.log(Object.isExtensible(obj));

// // Object.preventExtensions   it prevent the existance of obj
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

//The Object.isFrozen() static method determines if an object is frozen.
// const obj ={};
// console.log(Object.isFrozen(obj));
// Object.freeze(obj);
// console.log(Object.isFrozen(obj))

// Object.isSealed()

//Returns true if the object is sealed, otherwise false.
// An object is sealed if it is not extensible and if all its properties are 
//non-configurable and therefore not removable (but not necessarily non-writable)

// const obj ={};
// console.log(Object.isSealed(obj));
// Object.seal(obj);
// console.log(Object.isSealed(obj));
 
// Object.keys

// The Object.keys() static method returns an
//  array of a given object's own enumerable string-keyed property names.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
// console.log(Object.keys(object1));

// Object.values
console.log(Object.values(object1))