// Declare your arrays here
let imageContainer = document.querySelector("#imageContainer");
console.log(imageContainer);

let comedyUrls = ["https://i.pinimg.com/474x/ff/6b/fe/ff6bfe5338bf60e7295168aaca98e144.jpg",
"https://www.filmsourcing.com/wp-content/uploads/2013/03/werethemillers-poster.jpg"];
console.log("comedyUrls");

let actionUrls = ["https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596", 
"https://in.originalfilmart.com/cdn/shop/products/terminator_1984_italian_original_film_art_a.jpg?v=1597393983"];
console.log("actionUrls");

let dramaUrls = ["https://m.media-amazon.com/images/I/61hvjpjTZkL._AC_UF894,1000_QL80_.jpg",
"https://www.filmposters.com/images/posters/4441.jpg"];
console.log("dramaUrls");


// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function() {
    let userInput = document.querySelector("input").value;
    
    if (userInput === "comedy") {
    comedyUrls.forEach(function(x) {
        let pics = document.createElement("img");
        console.log(pics);
        pics.src = x;
        console.log(pics);
        imageContainer.appendChild(pics);
        console.log(imageContainer);
        });
    };

    if (userInput === "action") {
        actionUrls.forEach(function(x) {
            let pics = document.createElement("img");
            console.log(pics);
            pics.src = x;
            console.log(pics);
            imageContainer.appendChild(pics);
            console.log(imageContainer);
            });
        };
    
        if (userInput === "drama") {
            dramaUrls.forEach(function(x) {
                let pics = document.createElement("img");
                console.log(pics);
                pics.src = x;
                console.log(pics);
                imageContainer.appendChild(pics);
                console.log(imageContainer);
                });
            };
});


