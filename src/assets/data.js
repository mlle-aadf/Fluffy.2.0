import coffee from "../../src/assets/coffee.jpg";
import coffee_mobile from "../../src/assets/coffee_mobile.jpg";
import community from "../../src/assets/community.jpg";
import community_mobile from "../../src/assets/community_mobile.jpg";
import donut from "../../src/assets/donut.jpg";
import donut_mobile from "../../src/assets/donut_mobile.jpg";

const colors = ["var(--darkGreen)", "var(--darkPink)", "var(--lightPink)", "var(--lightGreen)"]

const texts = {
    en: {
        greeting: "WELCOME",
        tagline: "COFFEE + DONUTS. PLANT-BASED. GOOD VIBES.",
        nav: ["HOME", "ABOUT", "CONTACT", "FR"],
        contact: {
            hours: {label: "HOURS", text: "M to S, 8 - 5"},
            address: {label: "ADDRESS", text: "4847 WELLINGTON ST.", href:"https://maps.app.goo.gl/DKZrqYSEHwRbHkMG9"},
            email: {label: "EMAIL", text: "CUSTOMERSERVICE@FLUFFYS.CA", href:"mailto: customerservice@fluffys.ca"},
            phone: {label: "PHONE", text: "604 725-1449", href:"tel: 604 725-1449"}
        }
    },
    fr: {
        greeting: "BIENVENUE",
        tagline: "CAFÉ + BEIGNES. PLANT-BASED. BONNES VIBES.",
        nav: ["ACCUEIL", "À PROPOS", "CONTACT", "EN"],
        contact: {
            hours: {label: "HEURES", text: "L à S, 8 - 5"},
            address: {label: "ADRESSE", text: "4847 RUE WELLINGTON", href:"https://maps.app.goo.gl/DKZrqYSEHwRbHkMG9"},
            email: {label: "COURRIEL", text: "CUSTOMERSERVICE@FLUFFYS.CA", href:"mailto: customerservice@fluffys.ca"},
            phone: {label: "TÉLÉPHONE", text: "604 725-1449", href:"tel: 604 725-1449"}
        }
    }
};


const slides = [
    {
        image: coffee,
        mobileImage: coffee_mobile,
        en: 'Coffee is more than just a drink — it’s an art form. As a 3rd Wave café, each bean is ethically sourced and each cup is crafted with care for an elevated experience.',
        fr:"Le café, c'est bien plus qu'une boisson — c'est un art de vivre. En tant que café 3rd Wave, chaque grain est choisi de manière éthique et chaque tasse préparée avec soin pour offrir une expérience élevée.",
        altText:"coffee bean / grain de café"
    },
    {
        image: donut,
        mobileImage: donut_mobile,
        en: 'Our deliciously fluffy, 100% plant-based doughnuts are made fresh daily from scratch, with love and using only natural, organic ingredients.',
        fr: "Nos beignes moelleux et délicieux - 100 % à base de plantes - sont préparés maison chaque jour avec amour, uniquement à partir d’ingrédients naturels et biologiques.",
        altText:"donuts / beignes"

    },
    {
        image: community,
        mobileImage: community_mobile,
        en: 'From eco-friendly practices to local partnerships, we’re committed to creating a sustainable future and building a connected community.',
        fr:  "De nos pratiques écoresponsables à nos partenariats locaux, nous sommes engagés à créer un avenir durable et à bâtir une communauté connectée.",
        altText:"cups / tasses"
    }
];



export { colors, slides, texts };

