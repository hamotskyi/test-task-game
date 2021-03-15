function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateVariables(x) {
    if (x < 6) {
        return x + 1
    } else if (x == 6) {
        return 0
    }
}

let backgroundArr = [1, -240, -482, -724, -968, -1210, -1446];
let randomNumber = getRandomIntInclusive(0, 6);
let randomNum1 = calculateVariables(randomNumber);
let randomNum2 = calculateVariables(randomNum1);
let randomNum3 = calculateVariables(randomNum2);
let randomNum4 = calculateVariables(randomNum3);
let randomNum5 = calculateVariables(randomNum4);
let randomNum6 = calculateVariables(randomNum5);



console.log(randomNumber);
console.log(randomNum1);
console.log(randomNum2);
console.log(randomNum3);
console.log(randomNum4);
console.log(randomNum5);
console.log(randomNum6);

$(document).ready(function(){
    $("#spinerCell1").css("top", "-600px").css("background-position", `${backgroundArr[randomNumber]}px 20px`);
    $("#spinerCell2").css("top", "-400px").css("background-position", `${backgroundArr[randomNum1]}px 20px`);
    $("#spinerCell3").css("top", "-200px").css("background-position", `${backgroundArr[randomNum2]}px 20px`);
    $("#spinerCell4").css("top", "0px").css("background-position", `${backgroundArr[randomNum3]}px 20px`);
    $("#spinerCell5").css("top", "200px").css("background-position", `${backgroundArr[randomNum4]}px 20px`);
    $("#spinerCell6").css("top", "400px").css("background-position", `${backgroundArr[randomNum5]}px 20px`);
    $("#spinerCell7").css("top", "600px").css("background-position", `${backgroundArr[randomNum6]}px 20px`);
    $("#spinerCell8").css("top", "-600px").css("background-position", `${backgroundArr[randomNum4]}px 20px`);
    $("#spinerCell9").css("top", "-400px").css("background-position", `${backgroundArr[randomNum5]}px 20px`);
    $("#spinerCell10").css("top", "-200px").css("background-position", `${backgroundArr[randomNum6]}px 20px`);
    $("#spinerCell11").css("top", "0px").css("background-position", `${backgroundArr[randomNumber]}px 20px`);
    $("#spinerCell12").css("top", "200px").css("background-position", `${backgroundArr[randomNum1]}px 20px`);
    $("#spinerCell13").css("top", "400px").css("background-position", `${backgroundArr[randomNum2]}px 20px`);
    $("#spinerCell14").css("top", "600px").css("background-position", `${backgroundArr[randomNum3]}px 20px`);
    $("#spinerCell15").css("top", "-600px").css("background-position", `${backgroundArr[randomNum1]}px 20px`);
    $("#spinerCell16").css("top", "-400px").css("background-position", `${backgroundArr[randomNum2]}px 20px`);
    $("#spinerCell17").css("top", "-200px").css("background-position", `${backgroundArr[randomNum3]}px 20px`);
    $("#spinerCell18").css("top", "0px").css("background-position", `${backgroundArr[randomNum4]}px 20px`);
    $("#spinerCell19").css("top", "200px").css("background-position", `${backgroundArr[randomNum5]}px 20px`);
    $("#spinerCell20").css("top", "400px").css("background-position", `${backgroundArr[randomNum6]}px 20px`);
    $("#spinerCell21").css("top", "600px").css("background-position", `${backgroundArr[randomNumber]}px 20px`);
  });