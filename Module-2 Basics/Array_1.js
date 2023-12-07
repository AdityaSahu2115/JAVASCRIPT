const myarr=[1,2,3,4,5,"hitesh",'true']
console.log(myarr);
//Array is reyclable in case of js ,here we can change the size of array.It follows shallow copy(changes occurs in original array ,do not require any copy of it)


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)->adds an element at the beginning of the array
// myArr.shift()->Removes 1st element from the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()->converts the array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//->manipulates original array
console.log("C ", myArr);
console.log(myn2)