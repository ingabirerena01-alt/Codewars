//Implement a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.

function deepEqualArrays(arr1,arr2){
    if (arr1.length===arr2.length){
    for (let i=0;i<arr1.length;i++){
        const ar=arr1[i];
       // var {name: nam,details}=ar;
        for (let j=0;j<arr2.length;i++){
            const arr=arr2[j];
         //   var {name,details }=arr2[j];
         if(ar.name===arr.name&&ar.details.age===arr.details.age&&ar.details.city===arr.details.city){
             return true;
         }
         else 
         {return false}
        }
    }
}
else
{return false;}
  
}
const array1 = [
    { id: 1, name: "Ali", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];
const array2 = [
    { id: 3, name: "Ali", details: { age: 3, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }];
    console.log(deepEqualArrays(array1, array2)); 