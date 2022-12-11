// coding implementation
// end coding implementation

function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// function hasWhiteSpace(s) {
//     return s.indexOf(' ') >= 0;
// }

function validateForm(){
    let keyword = document.querySelector("#key").value
    let fromPrice = document.querySelector("#from").value
    let toPrice = document.querySelector("#to").value
    let passed = true;
    if(keyword == "") {
        alert("Keyword is not empty")
        passed = false;
    } 
    // else {
    //     if(hasWhiteSpace(keyword)) {
    //         alert("Key is not contains distance")
    //         passed = false;
    //     }
    // }

    if(fromPrice == "") {
        alert("From is not empty")
        passed = false;
    } else {
        if(!isNumber(fromPrice)) {
            alert("From is not number")
            passed=false;
        } else {
            if(!isInt(fromPrice)) {
                alert("From is not integer")
                passed = false;
            }
        }
    }

    if(toPrice == "") {
        alert("To is not empty")
        passed = false;
    } else {
        if(!isNumber(toPrice)) {
            alert("To is not number")
            passed=false;
        } else {
            if(!isInt(toPrice)) {
                alert("To is not integer")
                passed = false;
            }
        }
    }

    return passed;
}