module.exports = function longestConsecutiveLength(array) {
  let compareNumeric = (a,b) => a - b;
let temp = [];
let sequencelength = 1;

let arr = array.sort(compareNumeric);
//console.log(arr);
if (arr.length == 0) return 0;

for (let i = 0; i < arr.length; i++) {

  if (arr[i] + 1 == arr[i+1]) {
    sequencelength++;
  } else {
    temp.push(sequencelength);
    sequencelength = 1;
  }
}

temp.sort(compareNumeric);


//console.log(temp);
//console.log(temp[temp.length - 1])
return temp[temp.length - 1];

}
