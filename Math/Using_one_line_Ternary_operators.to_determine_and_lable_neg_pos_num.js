function checkSign(num) {
    num === 0 ? console.log ("Zero") : (num > 0) ? console.log ("Positive") : console.log ("Negative");
    return num === 0 ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(-10)
