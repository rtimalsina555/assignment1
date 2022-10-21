//1)
const student = {
    name: "Ramesh Timalsina",
    sclass: "BE Computer",
    rollno: 33
};
//1.a)
const result = Object.getOwnPropertyNames(student);
console.log(student);

//1.b)
console.log(student);
delete student.rollno;
console.log(student);

//1.c)
const props = Object.keys(student).length;
console.log(props);

//2
const PI=3.14;
function volume(h ,r)
{
    var volumeOfCylinder = (PI*r*r*h);
				return volumeOfCylinder;
}

console.log(volume(3,2));


//3)
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = "AM";
 
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    } 
  if (hour == 0) {
        hour = 12;
        session = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec + " " + session;
    console.log(currentTime)
 
}
showTime();


//4
function FindAllMethods(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] == "function";
    });
}
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));


//5
var student1 = {
    name: "Ramesh Timalsina",
    sclass: "BE Computer",
    rollno: 33
};
var result1 = Object.keys(student1).map(function (key) {
    return [String(key), student1[key]];
});
console.log(result1);


//6
let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10);
}
console.log("Reverse number : "+rev);


//7
let stringCombinations = (str) => {
    let strLength = str.length;
    let result = [];
    let currentIndex = 0;
    while (currentIndex < strLength) {
      let char = str.charAt(currentIndex);
      let x;
      let arrTemp = [char];
      for (x in result) {
        arrTemp.push("" + result[x] + char);
      }
      result = result.concat(arrTemp);
      currentIndex++;
    }
    return result;
  };
  console.log(stringCombinations("dog"));


  //8
  function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));


//9
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


//10
function vowel(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel("IloveShahRukhKhan"));


//11
const n=Math.floor(Math.random() * 5);
  console.log("The random number is : " + n);
  function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);


//12
function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))


//13
function newstring(n){
    console.log(n)
    if(n.length>3){
      return n.substring(0,3).toUpperCase() + n.substring(3,n.length)
    }else{
      return n.toUpperCase()
    }
  }
  
  console.log(newstring("me"))
  console.log(newstring("kritika"))


  //14
  var vowels=['a','e'];
var consonants=[];
  const findvowelornot=()=>{

   
  let  char = 'i';

        if(char== 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
          console.log("char  is vowel");
           vowels.push(char);
           console.log('vowel arrays')
        }
        else{
        console.log("char is consonant");
       consonants.push(char);
       console.log('consonantsarrays')
        }

};
findvowelornot();
console.log(vowels);
