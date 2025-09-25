function convertToRoman(num) {
  const romanList = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

 for(let i=0; i<romanList.length; i++){
	 let symbol= romanList[i][0];
	 let value = romanList[i][1];

	 if(num >= value){
		 result.push(symbol);
		 num -= value;
	 }
	 return result;
 }

// Uncomment to test
// console.log(convertToRoman(36)); // Output: "XXXVI"

// Do not edit below this line
module.exports = convertToRoman;
