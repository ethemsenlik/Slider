const motorlar = [
    {
        image:"2020-Kawasaki-Ninja-400-Black.jpg",
        name:"2020 Kavasaki Ninja 400 Black",
        readMore:"https://www.motosikletsitesi.com/ninja-400.html"
    },
    {
        image:"2023-benelli-leoncino-800.jpeg",
        name:"2023 Benelli Leoncino 800 Trail",
        readMore:"https://www.motosikletsitesi.com/2023-benelli-leoncino-800-trail.html"
    },
    {
        image:"2023-Indian-FTR-13.jpg",
        name:"2023 Indian FTR 1200",
        readMore:"https://www.motosikletsitesi.com/2023-indian-ftr-1200.html"
    },
    {
        image:"Moto-Guzzi-V9-Bobber-Sport-2020.jpg",
        name:"Moto Guzzi V9 Bobber Sport 2020",
        readMore:"https://www.motosikletsitesi.com/moto-guzzi-v9-bobber-sport-2020.html"
    },
    {
        image:"honda-cbr250rr-red-2024.jpeg",
        name:"2024 Honda CBR250RR",
        readMore:"https://www.motosikletsitesi.com/2024-honda-cbr250rr.html"
    },
    {
        image:"2024-New-Honda-Forza-250.jpeg",
        name:"2024 New Honda Forza 250",
        readMore:"https://www.motosikletsitesi.com/2024-new-honda-forza-250.html"
    }
]

let index = 0
goSlayt();


function goSlayt(i) {
    i = index

    if(i < 0){
        index = motorlar.length - 1
    }
    if(i >= motorlar.length){
        index = 0
    }

    let cardImageTop = document.querySelector(".card-img-top");
    cardImageTop.setAttribute("src", motorlar[index].image)

    let cardTitle = document.querySelector(".card-title");
    cardTitle.textContent = motorlar[index].name

    let button = document.querySelector("#button");
    button.setAttribute("href", motorlar[index].readMore)

}

let left = document.querySelector("#left");
left.addEventListener("click", function() {
    index--;
    goSlayt(index);
    console.log(index);
});

let right = document.querySelector("#right");
right.addEventListener("click", function() {
    index++;
    goSlayt(index);
    console.log(index);
});

