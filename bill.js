let Tbody = document.getElementById("elements")
let Wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

let Total = document.getElementById("cartTotal");
let discountTotal = document.getElementById("discountTotal")
let discount = document.getElementById("discount")


const D = new Date();
document.getElementById("date").innerHTML = D
function showData(data) {
    let Serial = 1
    data.forEach((element, index) => {

        let row = document.createElement("tr")

        let Sr = document.createElement("td")
        let Name = document.createElement("td")
        let Category = document.createElement("td")
        let Price = document.createElement("td")

        Sr.innerText = Serial
        Name.innerText = element.name
        Category.innerText = element.gender
        Price.innerText = element.price

        let sum = 0;
        for (let i = 0; i < Wishlist.length; i++) {
            sum += Wishlist[i].price
        }
        Total.innerText = sum + " Rs."
        if (sum > 10000) {
            discountTotal.innerText = (Math.floor(sum * 0.80)) + " Rs."
            Total.innerText = sum + " Rs."
            discount.innerText = "20 % discount has been applied"

        }


        row.append(Sr, Name, Category, Price)
        Tbody.append(row)
        Serial++


    })
}
showData(Wishlist)


let Final = document.createElement("tr")

let first = document.createElement("td")

let total = document.createElement("td")
let gender = document.createElement("td")
let price = document.createElement("td")

first.innerText = ""
total.innerText = "Total"
gender.innerText = "-"
price.innerText = Total.innerText

Final.append(first, total, gender, price)
Tbody.append(Final)



