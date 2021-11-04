const age1 = function (number) {
    if (number >= 18) {
      return "true";
  } else {
      return "false";
  }
};
//const result = age1(25);
//console.log(result);

const age2 = function (number) {
  if (number >= 18) {
    return "Hello there";
} else {
    return "Hey kiddo";
}
};
//const result2 = age2(25);
//console.log(result2);
  
//VAT exercise 1
const berekenBTW = function (number1, number2) {
    return number1 * (1 + number2/100);
};

const doeBerekening = function() {
    const uitkomst = berekenBTW(1000, 21);
    console.log(uitkomst);
};

doeBerekening();

//VAT exercise 2
const berekenBTW2 = function (number3, number4) {
  return number3 / (1 + number4/100);
};

const doeBerekening2 = function() {
  const uitkomst2 = berekenBTW2(1210, 21);
  console.log(uitkomst2);
};

doeBerekening2();


