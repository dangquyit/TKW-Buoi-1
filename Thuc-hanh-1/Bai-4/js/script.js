// coding implementation
// end coding implementation

function validateSearch() {
    let value = document.querySelector("#value").value
    let passed = true;
    if(value == "") {
        alert("Keyword is not empty")
        passed = false;
    }
    console.log("hd")
    return passed
}

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateForm( ) {
    let email = document.querySelector("#email").value
    let comment =document.querySelector("#com").value
    let rate = document.querySelector("#rate").value
    let passed =true;
    if(email == "") {
        alert("Email is not empty")
        passed =false
    } else {
        if(!validateEmail(email)) {
            alert("Invalid email")
            passed= false
        }
    }

    if(comment == "") {
        alert("Comment is not empty")
        passed = false
    } else {
        if(comment.length < 30) {
            alert("Comments must be longer than 30 characters")
            passed= false
        } 
    }

    if(rate =="") {
        alert("Rating is not empty")
        passed=false
    } else {
        if(!isNumber(rate)) {
            alert("Rating is not number")
            passed=false
        }
    }

    return passed;
}