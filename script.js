// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword(length) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!@#%&*-=+_?(){}[]";


    //prompt


    var alphaPrompt = confirm("Do you want to use alpha leters?");
    var capsPrompt = confirm("Do you want to use caps?");
    var numericPrompt = confirm("Do you want to use numeric?");
    var specialPrompt = confirm("Do you want to use special?");
    var sizeOfPassword = prompt("How long should you password be?");
    if (alpha != null) {

        document.getElementById("password").innerHTML =
            "Hello " + alpha + caps + numeric + special + sizeOfPassword + "! How are you today?"

    }


    var options = [alpha, caps, numeric, special];

    var password = "";
    var passwordArray = Array(length);

    for (i = 0; i < length; i++) {
        var currentOption = options[Math.floor(Math.random() * options.length)];
        var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
        password += randomChar;
        passwordArray.push(randomChar);
    }

    checkPassword();

    function checkPassword() {
        var missingValueArray = [];
        var containsAll = true;

        options.forEach(function (e, i, a) {
            var hasValue = false;
            passwordArray.forEach(function (e1, i1, a1) {
                if (e.indexOf(e1) > -1) {
                    hasValue = true;
                }
            });

            if (!hasValue) {
                missingValueArray = a;
                containsAll = false;
            }
        });

        if (!containsAll) {
            passwordArray[Math.floor(Math.random() * passwordArray.length)] = missingValueArray.charAt(Math.floor(Math.random() * missingValueArray.length));
            password = "";
            passwordArray.forEach(function (e, i, a) {
                password += e;
            });
            checkPassword();
        }
    }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
