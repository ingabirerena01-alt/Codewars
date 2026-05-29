function prefill(n, v) {
  const num=Number(n);
  if (n===0||n==='0'){
    return []
  }
  else if (!Number.isInteger(num) || num < 0 || typeof n === 'boolean'){
    throw new TypeError( `${n} is invalid`)
  }
  else {
    if (v==null){
    return Array(num).fill(v)}
  
//  else 
    return  Array(num).fill(v)}
}