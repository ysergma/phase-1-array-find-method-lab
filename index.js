// code your solution here
const record = [
   {year: "2018", result: "L"},
   {year: "2017", result: "W"},
   {year: "2016", result: "N/A"}

 ]
 
 function isCherries(fruit) {
   return fruit.result === "W";
 }
 
 console.log(record.find(isCherries));
 const found = function(){ return record.find(isCherries)}
  const superbowlWin = function(record){
   if(record.find(isCherries)){
      return record.find(isCherries)
                  .year
   }else {
      return undefined
   }
   
        
}
