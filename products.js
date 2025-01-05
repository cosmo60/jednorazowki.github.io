const productsData = {
    instabar: {
        name: "INSTABAR 40000  ",
        flavors: [
            { name: "Sour Apple", available: true },
            { name: "Strawberry Kiwi", available: true },
            { name: "Blueberry Raspberry Lemonade", available: true },
            { name: "Yummy Bear", available: true },
            { name: "Cherry Cola", available: false },
            { name: "Pink Lemon", available: true },
            { name: "Cranberry Grape", available: false },
            { name: "Sakura Mint", available: false },
            { name: "Mango Pineapple Peach Ice", available: true },
            { name: "Apple Peach", available: true },
            { name: "Lemon Lime", available: true },
            { name: "Watermelon Lemon Sparkling Water", available: false },
            { name: "Blue Razz Ice", available: true },
            { name: "Watermelon Bubblegum", available: false },
            { name: "Watermelon Ice", available: true }
        ],
        prices: [
            { quantity: 1, price: 90, pricePerUnit: 90 },
            { quantity: 2, price: 180, pricePerUnit: 90 },
            { quantity: 5, price: 375, pricePerUnit: 75 },
            { quantity: 10, price: 675, pricePerUnit: 68 },
            { quantity: 20, price: 1160, pricePerUnit: 58 }
        ]
    },
    funky: {
        name: "FUNKY MONKEY 10000  ",
        flavors: [
            { name: "Menthol", available: true },
            { name: "Contis", available: true },
            { name: "Raspy Red", available: true },
            { name: "Black Curl", available: true },
            { name: "Garden's Heart", available: true },
            { name: "Fresh Red", available: true },
            { name: "Tangy Purple", available: true },
            { name: "Bubble Bomb", available: true }
        ],
        prices: [
            { quantity: 1, price: 70, pricePerUnit: 70 },
            { quantity: 2, price: 140, pricePerUnit: 70 },
            { quantity: 5, price: 315, pricePerUnit: 63 },
            { quantity: 10, price: 525, pricePerUnit: 53 },
            { quantity: 20, price: 900, pricePerUnit: 45 }
        ]
    },
    elfbar: {
        name: "ELF BAR 15000",
        flavors: [
            { name: "Blackberry Cherry", available: false },
            { name: "Blue Razz Ice", available: true },
            { name: "Cherry Lime", available: true },
            { name: "Grape Cranberry", available: true },
            { name: "Grapefruit Passion Fruit", available: true },
            { name: "Grape Ice", available: true },
            { name: "Kiwi Passion Fruit Guava", available: true },
            { name: "Kiwi Pineapple Peach", available: true },
            { name: "Pineapple Dragonfruit Grapefruit", available: true },
            { name: "Sour Apple", available: true },
            { name: "Strawberry Kiwi", available: true },
            { name: "Watermelon Ice", available: true }
        ],
        prices: [
            { quantity: 1, price: 80, pricePerUnit: 80 },
            { quantity: 2, price: 160, pricePerUnit: 80 },
            { quantity: 5, price: 375, pricePerUnit: 75 },
            { quantity: 10, price: 675, pricePerUnit: 68 },
            { quantity: 20, price: 1160, pricePerUnit: 58 }
        ]
    },
    snoopy: {
        name: "SNOOPY SMOKE 15000  ",
        flavors: [
            { name: "Tropical Rainbow Blast", available: true },
            { name: "Kool Mint", available: true },
            { name: "Triple Berry Ice", available: true },
            { name: "Mexican Mango Ice", available: true },
            { name: "Blue Gammi", available: true },
            { name: "Strawberry Ice", available: true },
            { name: "Pineapple Ice", available: true },
            { name: "Strawberry Banana", available: true },
            { name: "Pina Colada", available: true },
            { name: "Banana Mama", available: true },
            { name: "Blue Razz Ice", available: true },
            { name: "Red Juice", available: true },
            { name: "Watermelon Ice", available: true },
            { name: "Lush Ice", available: true },
            { name: "Grape Ice", available: true }
        ],
        prices: [
            { quantity: 1, price: 75, pricePerUnit: 75 },
            { quantity: 2, price: 150, pricePerUnit: 75 },
            { quantity: 5, price: 355, pricePerUnit: 71 },
            { quantity: 10, price: 640, pricePerUnit: 64 },
            { quantity: 20, price: 1080, pricePerUnit: 54 }
        ]
    },
    yocco: {
        name: "YOCCO CYBERPOD 12000  ",
        flavors: [
            { name: "Strawmelon", available: true },
            { name: "Yummy Gummy", available: true },
            { name: "Miami Mint", available: true },
            { name: "Georgia Peach", available: true },
            { name: "Triple Berry Ice", available: true },
            { name: "Strawmana", available: true },
            { name: "Watermelon Ice", available: true },
            { name: "Blue Razz Ice", available: true },
            { name: "California Cherry", available: true },
            { name: "Strawkiwi", available: true }
        ],
        prices: [
            { quantity: 1, price: 65, pricePerUnit: 65 },
            { quantity: 2, price: 130, pricePerUnit: 65 },
            { quantity: 5, price: 300, pricePerUnit: 60 },
            { quantity: 10, price: 520, pricePerUnit: 52 },
            { quantity: 20, price: 900, pricePerUnit: 45 }
        ]
    },
    merrymi: {
        name: "MERRYMI M-MECHA 16000  ",
        flavors: [
            { name: "Watermelon Ice", available: true },
            { name: "Raspberry Tea", available: true },
            { name: "Mountain Soda", available: true },
            { name: "Strawberry Kiwi", available: true },
            { name: "Pina Colada", available: false },
            { name: "Cranberry Mango", available: true },
            { name: "Pink Peach", available: true },
            { name: "Jasmine Tea", available: true },
            { name: "Sea Salt Lemon Tea", available: true },
            { name: "Lychee Ice", available: true },
            { name: "Cactus Candy", available: true },
            { name: "Black Cherry Lime", available: true },
            { name: "Pineapple Lychee Soda", available: true },
            { name: "Triple Mango", available: true },
            { name: "Strawberry Banana", available: true },
            { name: "Blue Razz Ice", available: true },
            { name: "Cherry Cola", available: true },
            { name: "Sour Apple", available: true },
            { name: "Black Mint", available: true },
            { name: "Grape Ice", available: true },
            { name: "Aloe Blackcurrant", available: true },
            { name: "Dragon Fruit Ice", available: true },
            { name: "Mixed Berries", available: true },
            { name: "Red Energy Ice", available: true },
            { name: "Kiwi Passion Fruit Guava", available: true }
        ],
        prices: [
            { quantity: 1, price: 80, pricePerUnit: 80 },
            { quantity: 2, price: 160, pricePerUnit: 80 },
            { quantity: 5, price: 375, pricePerUnit: 75 },
            { quantity: 10, price: 675, pricePerUnit: 68 },
            { quantity: 20, price: 1160, pricePerUnit: 58 }
        ]
    },
    random: {
        name: "RANDOM TORNADO 15000  ",
        flavors: [
            { name: "Blueberry Raspberry", available: true },
            { name: "Berry Lemonade", available: true },
            { name: "Cherry Cola", available: true },
            { name: "Ice Pop", available: true },
            { name: "Triple Berry", available: true },
            { name: "Banana Ice", available: true },
            { name: "Dragon Fruit", available: true },
            { name: "Peach Mango", available: true },
            { name: "Strawberry Kiwi", available: true },
            { name: "Strawberry Ice", available: true },
            { name: "Watermelon Ice", available: true },
            { name: "Lemon Lime", available: true },
            { name: "Pink Lemonade", available: true },
            { name: "Kiwi Passion Fruit Guava", available: true },
            { name: "Mixed Berries", available: true }
        ],
        prices: [
            { quantity: 1, price: 75, pricePerUnit: 75 },
            { quantity: 2, price: 150, pricePerUnit: 75 },
            { quantity: 5, price: 355, pricePerUnit: 71 },
            { quantity: 10, price: 640, pricePerUnit: 64 },
            { quantity: 20, price: 1080, pricePerUnit: 54 }
        ]
    },
    wga: {
        name: "WGA CRYSTAL 15000  ",
        flavors: [
            { name: "Strawberry Ice Pop", available: true },
            { name: "Bubblegum", available: true },
            { name: "Blueberry Raspberry", available: true },
            { name: "Fresh Mint", available: true },
            { name: "Kiwi Passion Fruit Guava", available: true },
            { name: "Aloe Blackcurrant", available: true }
        ],
        prices: [
            { quantity: 1, price: 80, pricePerUnit: 80 },
            { quantity: 2, price: 160, pricePerUnit: 80 },
            { quantity: 5, price: 375, pricePerUnit: 75 },
            { quantity: 10, price: 675, pricePerUnit: 68 },
            { quantity: 20, price: 1160, pricePerUnit: 58 }
        ]
    },
    ethereum: {
        name: "ETHEREUM 30ml / 50mg (liquid)",
        flavors: [
            { name: "Blueberry Raspberry", available: true },
            { name: "Apple Peach Ice", available: true },
            { name: "Strawberry Grape", available: true },
            { name: "Blackberry Ice", available: true },
            { name: "Peach Ice", available: true },
            { name: "Kiwi Passion", available: true },
            { name: "Melon Ice", available: true },
            { name: "Energy Apple Ice", available: true },
            { name: "Energy Drink", available: true },
            { name: "Grape Cherry", available: true },
            { name: "Strawberry Mint", available: true },
            { name: "Watermelon", available: true },
            { name: "Strawberry Watermelon", available: true },
            { name: "Cherry Cola", available: true },
            { name: "Raspberry Ice", available: true }
        ],
        prices: [
            { quantity: 1, price: 60, pricePerUnit: 60 },
            { quantity: 2, price: 120, pricePerUnit: 60 },
            { quantity: 5, price: 275, pricePerUnit: 55 },
            { quantity: 10, price: 500, pricePerUnit: 50 },
            { quantity: 20, price: 860, pricePerUnit: 43 }
        ]
    },
};

// Eksportuj dane
window.productsData = productsData;