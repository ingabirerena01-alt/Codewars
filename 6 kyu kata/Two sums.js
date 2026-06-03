function twoSum(numbers, target) {
    for (const [index, number] of numbers.entries()) {
      for(let i=index+1;i<numbers.length;i++){
        let num2=numbers[i];
      
      if (number+num2 ===target){
        return [number,num2];
      }}
}
    //return [0, 1];
}
  