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
        name: 'Fresh Produce Distribution',
        desc: 'We ensure the delivery of fresh produce to your doorstep, maintaining quality and freshness.',
    },
    {
        icon: 'fas fa-shopping-cart',
        name: 'Grocery Item Supplies',
        desc: 'Comprehensive supply of essential grocery items to meet your needs.',
    },
    {
        icon: 'fas fa-leaf',
        name: 'Organic and Specialty Food Products',
        desc: 'Sourcing organic and specialty food products for health-conscious consumers.',
    },
    {
        icon: 'fas fa-box',
        name: 'Bulk Ordering and Delivery Services',
        desc: 'Offering bulk ordering options with reliable delivery services.',
    },
    {
        icon: 'fas fa-cogs',
        name: 'Customizable Order Plans',
        desc: 'Tailored order plans to suit your specific requirements and preferences.',
    },
    {
        icon: 'fas fa-check-circle',
        name: 'Quality Assurance and Control',
        desc: 'Ensuring quality assurance and control throughout our supply chain.',
    },
    // {
    //     icon: 'fas fa-handshake',
    //     name: 'Support for Local Farmers and Suppliers',
    //     desc: 'Supporting local farmers and suppliers by sourcing their products.',
    // },
];


const testimonialsList = [
    {
        text: "Eaglespeed Distribution provided us with excellent service and quality products!",
        name: "John Doe",
    },
    {
        text: "The timely delivery and quality of produce were exceptional!",
        name: "Jane Smith",
    },
    {
        text: "Highly recommend! Great service and reliable products.",
        name: "David Johnson",
    },
    {
        text: "I was impressed with the quality and freshness of the products!",
        name: "Emily Davis",
    },
    {
        text: "Amazing experience! Will definitely order again!",
        name: "Michael Wilson",
    },
    {
        text: "Excellent customer service and top-notch quality!",
        name: "Sarah Thompson",
    },
];

export {
    productList,
    serviceList,
    testimonialsList,
}