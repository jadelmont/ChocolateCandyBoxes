let chocs = [
    { chocName: "Plain Milk", description: "Smooth milk chocolate", calories: 90, ingredients: "Cocoa butter, Milk, Cream", img: "assets/plain_milk.jpg" },
    { chocName: "Plain Dark", description: "Dark chocolate", calories: 90, ingredients: "Cocoa butter, Milk, Cream", img: "assets/plain_dark.jpg" },
    { chocName: "Bailey's Cup", description: "Dark chocolate with Bailey's Cream Filling", calories: 100, ingredients: "Cocoa butter, Milk, Cream, baileys", img: "assets/baileys_cup.jpg" },
    { chocName: "Cappuccino Cup", description: "Dark chocolate with Cappuccino style cream filling", calories: 120, ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant", img: "assets/cappuccino_cup.jpg" },
    { chocName: "Nutter Butter", description: "Dark chocolate with peanut butter", calories: 190, ingredients: "Cocoa butter, Milk, Cream, peanut butter", img: "assets/nutter_butter.jpg" },
    { chocName: "Orange Fondant", description: "Dark chocolate folded with orange fondant", calories: 90, ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant", img: "assets/orange_fondant.jpg" },
    { chocName: "Pistachio Cup", description: "Dark chocolate with nuggets of pistachio", calories: 90, ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut", img: "assets/pistachio_diamond.jpg" },
    { chocName: "Rum Barrel", description: "Dark chocolate with a decadent rum filling", calories: 90, ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings", img: "assets/rum_barrel.jpg" },
    { chocName: "Toffee Crunch", description: "Dark chocolate with brittle toffee candy", calories: 90, ingredients: "Cocoa butter, Milk, Cream, toffee", img: "assets/toffee_crunch.jpg" },
    { chocName: "Plain Supreme", description: "Dark chocolate with slivers of milk chocolate", calories: 90, ingredients: "Cocoa butter, Milk, Cream", img: "assets/plain_hybrid.jpg" }
];


$(document).ready(function () {
    const container = $("#chocContainer");

    
    container.css({
        display:"grid",
        gridTemplateColumns:"repeat(5, 1fr)", 
        gap:"15px", 
        justifyContent:"center",
        maxWidth:"100%",
        padding:"20px"
    });

    
    chocs.forEach((choc, index) => {
        const card = $(`
            <div class="chocCard" data-index="${index}" style="background-color: cream; border: 1px solid #ccc; padding: 15px; margin: 0 auto; width: 180px; text-align: center; border-radius: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.11);">
                <img src="${choc.img}" alt="${choc.chocName}" style="width: 100%; height: 130px; object-fit: cover; border-radius: 5px;">
                <h3 style="font-size: 16px; margin: 10px 0;">${choc.chocName}</h3>
                <p style="color: #555; font-size: 13px;">${choc.description}</p>
                <p class="hidden" style="margin-top: 10px; font-size: 13px; display: none;">Calories: ${choc.calories}</p>
                <p class="hidden" style="font-size: 13px; display: none;">Ingredients: ${choc.ingredients}</p>
            </div>
        `);
        container.append(card);
    });


    $(".hidden").hide();


    $("#randomSample").click(function () {
        const randomIndex = Math.floor(Math.random() * chocs.length);
        const randomCode = Math.floor(Math.random() * 50) + 1;

        $(".chocCard").css("background-color", "cream");
        $(`.chocCard[data-index=${randomIndex}]`).css("background-color", "yellow");

        alert(`Your Free Sample Code: ${randomCode}`);
    });


    $("#toggleContent").click(function () {
        $(".hidden").toggle();
    });
});
