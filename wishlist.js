let Total = document.getElementById("cartTotal");
let discountTotal = document.getElementById("discountTotal")
let discount = document.getElementById("discount")
let BuyBtn = document.getElementById("buyAll")

let BillSlip = document.getElementById("bill")


let Box = document.getElementById("container")



let Wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

function showData(data) {
    data.forEach((element, index) => {
        let Card = document.createElement("div")
        let Image = document.createElement("img")
        let Name = document.createElement("h4")
        let Price = document.createElement("h5")
        let Gender = document.createElement("h5")
        let Rating = document.createElement("button")
        let Count = document.createElement("button")
        let Delete = document.createElement("button")

        Image.src = element.image
        Name.innerText = element.name
        Price.innerText = "₹ .  " + element.price
        Gender.innerText = "Category: " + element.gender
        Rating.innerText = element.rating + "★★★★☆"
        Count.innerText = element.count + " Review"
        Delete.innerText = "Delete"

        Card.append(Image, Name, Price, Gender, Rating, Count, Delete)
        Box.append(Card)

        Delete.addEventListener("click", () => {
            Wishlist.splice(index, 1)
            localStorage.setItem("wishlist", JSON.stringify(Wishlist))
            window.location = "wishlist.html"
        })

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

        Card.setAttribute("class", "card")
        Image.setAttribute("class", "image")
        Delete.setAttribute("class", "deleteButton")

        Rating.setAttribute("class", "ratingButton")
        Count.setAttribute("class", "count")

    });


}
showData(Wishlist)