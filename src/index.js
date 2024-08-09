import {
    apple,
    banana,
    carrot,
    tomato,
    potato,
    orange,
    spinach,
    grapes,
    broccoli,
    brianjal,
    radish,
    avocado,
    peach,
    strawberry,
    blueberry,
} from './assets';

const productList = [
    {
        name: "Fresh Apples",
        desc: "Crisp and juicy apples straight from the orchard.",
        price: 150,
        unit: "kg",
        img: apple
    },
    {
        name: "Organic Bananas",
        desc: "Sweet and ripe organic bananas, perfect for snacks.",
        price: 50,
        unit: "dozen",
        img: banana
    },
    {
        name: "Carrots",
        desc: "Fresh and crunchy carrots, great for salads and cooking.",
        price: 80,
        unit: "kg",
        img: carrot
    },
    {
        name: "Tomatoes",
        desc: "Juicy and ripe tomatoes, ideal for all your recipes.",
        price: 60,
        unit: "kg",
        img: tomato
    },
    {
        name: "Potatoes",
        desc: "Versatile and starchy potatoes for every meal.",
        price: 40,
        unit: "kg",
        img: potato
    },
    {
        name: "Oranges",
        desc: "Sweet and tangy oranges, packed with vitamin C.",
        price: 120,
        unit: "kg",
        img: orange
    },
    {
        name: "Spinach",
        desc: "Fresh and leafy spinach, great for salads and cooking.",
        price: 70,
        unit: "bunch",
        img: spinach
    },
    {
        name: "Grapes",
        desc: "Sweet and juicy grapes, perfect for snacking.",
        price: 200,
        unit: "kg",
        img: grapes
    },
    {
        name: "Broccoli",
        desc: "Fresh and healthy broccoli, perfect for steaming or roasting.",
        price: 90,
        unit: "kg",
        img: broccoli
    },
    {
        name: "Brianjal",
        desc: "Sweet and tangy pineapples, ideal for tropical dishes.",
        price: 100,
        unit: "piece",
        img: brianjal
    },
    {
        name: "Radish",
        desc: "Fresh and crunchy cabbage, great for salads and cooking.",
        price: 60,
        unit: "kg",
        img: radish
    },
    {
        name: "Avocados",
        desc: "Creamy and nutritious avocados, perfect for salads.",
        price: 250,
        unit: "kg",
        img: avocado
    },
    {
        name: "Peaches",
        desc: "Juicy and sweet peaches, great for snacking.",
        price: 180,
        unit: "kg",
        img: peach
    },
    {
        name: "Strawberries",
        desc: "Fresh and sweet strawberries, perfect for desserts.",
        price: 220,
        unit: "kg",
        img: strawberry
    },
    {
        name: "Blueberries",
        desc: "Fresh and juicy blueberries, perfect for smoothies.",
        price: 300,
        unit: "kg",
        img: blueberry
    }
];

const serviceList = [
    {
        icon: 'fas fa-truck',
        name: 'Fast Delivery',
        desc: 'We ensure quick and reliable delivery of fresh produce to your doorstep.',
    },
    {
        icon: 'fas fa-seedling',
        name: 'Quality Products',
        desc: 'Our products are sourced from trusted farms and suppliers, ensuring the highest quality.',
    },
    {
        icon: 'fas fa-users',
        name: 'Customer Support',
        desc: 'Our dedicated customer support team is here to assist you with any inquiries or concerns.',
    },
    {
        icon: 'fas fa-gift',
        name: 'Special Offers',
        desc: 'We provide special offers and discounts to make your shopping experience even better.',
    },
    {
        icon: 'fas fa-recycle',
        name: 'Sustainability',
        desc: 'We prioritize sustainability by sourcing eco-friendly and organic products.',
    },
    {
        icon: 'fas fa-calendar-check',
        name: 'Flexible Scheduling',
        desc: 'Choose a delivery schedule that suits your needs and preferences.',
    },
];


export {
    productList,
    serviceList
}