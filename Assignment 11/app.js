var password = prompt("Enter your password...");
var hasAlphabet = false;
var hasNumber = false;
for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        hasAlphabet = true;
    }
    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}
var firstChar = password.charCodeAt(0);
if (password.length < 6) {
    console.log("Password must be at least 6 characters long.");
}
if (firstChar >= 48 && firstChar <= 57) {
    console.log("Password should not start with a number.");
}
if (hasAlphabet == false) {
    console.log("Password must contain alphabets.");
}
if (hasNumber == false) {
    console.log("Password must contain numbers.");
}
if (
    password.length >= 6 &&
    !(firstChar >= 48 && firstChar <= 57) &&
    hasAlphabet == true &&
    hasNumber == true
) {
    console.log("Valid password.");
}