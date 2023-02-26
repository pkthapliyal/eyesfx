var slideImages = ["https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
    "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
    "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/hooper-eye-web.jpg",
    "https://static1.lenskart.com/media/desktop/img/Nov22/trans1.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/style/home/B1G1%20OFFER%20-%20WEB.jpg",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/marble/web.gif"]

window.addEventListener("load", function () {
    // add event-listeners;
    let div = document.getElementById("slideImages")
    let Img = document.createElement("img");
    Img.setAttribute("class", "Image")
    var i = 0;
    Img.src = slideImages[i]

    setInterval(function () {
        if (i < slideImages.length - 1) {
            i++;
            Img.src = slideImages[i]
        }
        else {
            i = 0;
            Img.src = slideImages[i]
        }
    }, 5000)

    div.append(Img)
    div.setAttribute("class", "SlideShowDiv")
    Img.setAttribute("class", "SlideShowImage")
})

var SignInModal = document.getElementById("signInModal");
var SignInAnchor = document.getElementById("SignIn");

var spanIn = document.getElementsByClassName("close-in")[0];

SignInAnchor.onclick = function () {
    SignInModal.style.display = "block";
}

spanIn.onclick = function () {
    SignInModal.style.display = "none";
}
window.onclick = function (event) {
    event.preventDefault()
    if (event.target == SignInModal) {
        SignInModal.style.display = "none";
    }
}

var SignUpModal = document.getElementById("signUpModal");
var SignUpAnchor = document.getElementById("SignUp");
var spanUp = document.getElementsByClassName("close-up")[0];

SignUpAnchor.onclick = function () {
    SignUpModal.style.display = "block";
}
spanUp.onclick = function () {
    SignUpModal.style.display = "none";
}
window.onclick = function (event) {
    event.preventDefault()
    if (event.target == SignUpModal) {
        SignUpModal.style.display = "none";
    }
}


let Name = document.getElementById("name")
let Email = document.getElementById("email")
let Mobile = document.getElementById("mobile-number")
let Password = document.getElementById("password")
let CreateAccocunt = document.getElementById("create-account")


let SIGNUP = document.getElementById("SIGNUP")

let Customers = JSON.parse(localStorage.getItem("costumerDetails")) || []

CreateAccocunt.addEventListener(("click"), () => {
    let name = Name.value
    let email = Email.value
    let mobile = Mobile.value
    let password = Password.value

    if (name != "" && email != "" && mobile != "" && password != "") {
        let obj = { name, email, mobile, password }
        Customers.push(obj)


        Name.innerHTML = ""
        Email.innerHTML = ""
        Mobile.innerHTML = ""
        Password.innerHTML = ""

        localStorage.setItem("costumerDetails", JSON.stringify(Customers))
        alert("Signed up successfully")
        window.location = "product.html"
    }
    else {
        alert("Please fill all the details !")
    }

})

let Login = document.getElementById("login")
let SignInBtn = document.getElementById("login")
let SignInMobile = document.getElementById("Mobile-Number")
let SignInPassword = document.getElementById("Password")
let Clear = document.getElementsByClassName("sign_in_content")

SignInBtn.addEventListener("click", () => {

    let flag = false
    for (let i = 0; i < Customers.length; i++) {
        if (Customers[i].mobile == SignInMobile.value && Customers[i].password == SignInPassword.value) {
            flag = true
            break

        }
    }
    if (flag == true) {
        alert("You have Sign in successfully")
        window.location = "product.html"
        SignInMobile.value = ""
        SignInPassword.value = ""
    }
    else {
        alert("Make sure you have an account!")
    }

})