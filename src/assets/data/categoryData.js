import intro1 from '../img/category/intro1.png'
import intro2 from '../img/category/intro2.png'
import intro3 from '../img/category/intro3.png'

const intros = [
    {
        img : intro1,
        title : "Reliable Shipping"
    },
    {
        img : intro2,
        title : "You’re Safe With Us"
    },
    {
        img : intro3,
        title : "Best Quality & Pricing"
    },
]

const productRadio = [
    {
        type : "Sales",
        quantity : 12
    },
    {
        type : "Cannabis",
        quantity : 430
    },
    {
        type : "Pre-Rolls",
        quantity : 40
    },
    {
        type : "CBD Oil",
        quantity : 20
    },
    {
        type : "Magic Mushrooms",
        quantity : 34
    },
    {
        type : "Extracts",
        quantity : 26
    },
    {
        type : "Edibles",
        quantity : 32
    },
    {
        type : "Vape Pens",
        quantity : 12
    },
    {
        type : "Accessories",
        quantity : 10
    },
    {
        type : "Bath & Body",
        quantity : 8
    },
    {
        type : "Bundles",
        quantity : 24
    },
    {
        type : "Wholesale",
        quantity : 28
    },
]

const order = ["Default", "Review Count", "Popularity", "Average Rating", "Newness", "Price: Low to High", "Price: High to Low", "Random Products", "Product Name"]

export {intros, productRadio, order}