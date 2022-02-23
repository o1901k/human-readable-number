module.exports = function toReadable (number) {
  let arrNumbers = number.toString().split(''); 
 let zeroToNineteen = ["zero", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
 let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 if (number >= 0 && number < 20) {
   return zeroToNineteen[number]
   } else if (number > 19 && number < 100 ) { 
   if(arrNumbers[1] == 0) {
   return dozens[arrNumbers[0]]
   }
         return dozens[arrNumbers[0]] + ' ' + zeroToNineteen[arrNumbers[1]]
   } else if (number >= 100 && number < 1000) {
   if(arrNumbers[2] == 0 && arrNumbers[1] == 0) {
   return zeroToNineteen[arrNumbers[0]] + ' ' + 'hundred'
   } if (arrNumbers[2] == 0) {
   return zeroToNineteen[arrNumbers[0]] + ' ' + 'hundred' + ' ' + dozens[arrNumbers[1]]
   }
   if (arrNumbers[1] == 1) {
   let arrNumber1 = number.toString().slice(0, 1); 
let arrNumbers2 = number.toString().slice(1, 3)
let allNumbers = [arrNumber1, arrNumbers2]
return zeroToNineteen[allNumbers[0]] + ' ' + 'hundred' + ' ' + zeroToNineteen[allNumbers[1]]
   } if(arrNumbers[1] == 0 ) {
   return zeroToNineteen[arrNumbers[0]] + ' ' + 'hundred' + ' ' + zeroToNineteen[arrNumbers[2]]
   }
          return zeroToNineteen[arrNumbers[0]] + ' ' + 'hundred' + ' ' + dozens[arrNumbers[1]] + ' ' + zeroToNineteen[arrNumbers[2]]
   } 
}