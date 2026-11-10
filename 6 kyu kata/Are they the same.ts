export function comp(a1: number[] | null, a2: number[] | null): boolean {
  // your code
  //type num= number[];
  if(!a1 || !a2){
    return false}
    if (a1.length!==a2.length){
     return false;
   }
 const a:number[]= a1.sort((a,b)=>a-b);
  const b:number[]= a2.sort((c,d)=>c-d);
  return a.every((elt,index)=> (elt*elt)==b[index]);
  }