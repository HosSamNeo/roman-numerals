const inNumber = document.getElementById("decimal");
const convertBTN = document.getElementById("convertor");
const response = document.querySelector(".response");

inNumber.addEventListener("keyup" , function(){
    convertBTN.classList.add("active");
    response.innerHTML = '';
});


convertBTN.addEventListener("click", function convertToRoman() {
    let theNum = inNumber.value;
    let convertedToRoman = '';
    let numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let roman = ['I','IV','V','IX', 'X','XL', 'L','XC', 'C','CD', 'D','CM','M']
    let i = 12;
    while(theNum != 0) {
      if(numbers[i] <= theNum){
        convertedToRoman += roman[i];
        theNum -= numbers[i]
      }else{
        i--;
      }
    }
    response.innerHTML = `<span>'${convertedToRoman}'</span> is the equivalent in roman numerals.`
 });