import craftDesktop from "../assets/craft_desktop.webp";
import craftMobile from "../assets/craft_mobile.webp";
import craftTablet from "../assets/craft_tablet.webp";
import openingSoonDesktop from "../assets/opening-soon_desktop.webp";
import openingSoonMobile from "../assets/opening-soon_mobile.webp";
import openingSoonTablet from "../assets/opening-soon_tablet.webp";
import spaceDesktop from "../assets/space_desktop.webp";
import spaceMobile from "../assets/space_mobile.webp";
import spaceTablet from "../assets/space_tablet.webp";

const colors = ["var(--darkGreen)", "var(--darkPink)", "var(--lightPink)", "var(--lightGreen)"]

const texts = {
    en: {
        greeting: "WELCOME",
        tagline: "COFFEE + DONUTS. PLANT-BASED. GOOD VIBES.",
        nav: ["HOME", "ABOUT", "CONTACT", "FR"],
        href: ["/", "/about", "/contact", "/fr"],
        contact: {
            hours: {label: "HOURS", text: "M to S, 7 - 5"},
            address: {label: "ADDRESS", text: "4847 WELLINGTON ST.", href:"https://maps.app.goo.gl/DKZrqYSEHwRbHkMG9"},
            email: {label: "EMAIL", text: "CUSTOMERSERVICE@FLUFFYS.CA", href:"mailto: customerservice@fluffys.ca"},
            phone: {label: "PHONE", text: "514 123-4567", href:"tel: 514 123-4567"}
        }
    },
    fr: {
        greeting: "BIENVENUE",
        tagline: "CAFÉ + BEIGNES. PLANT-BASED. BONNES VIBES.",
        nav: ["ACCUEIL", "À PROPOS", "CONTACT", "EN"],
        href: ["/", "/about", "/contact", "/fr"],
        contact: {
            hours: {label: "HEURES", text: "L à D, 7 - 5"},
            address: {label: "ADRESSE", text: "4847 RUE WELLINGTON", href:"https://maps.app.goo.gl/DKZrqYSEHwRbHkMG9"},
            email: {label: "COURRIEL", text: "CUSTOMERSERVICE@FLUFFYS.CA", href:"mailto: customerservice@fluffys.ca"},
            phone: {label: "TÉLÉPHONE", text: "514 123 4567", href:"tel: 514 123-4567"}
        }
    }
};


const slides = [
    {
        id: 1,
        images: {
            small: openingSoonMobile,
            medium: openingSoonTablet,
            large: openingSoonDesktop,
        },
        text: {
            en: ["Coffee brings people together— so will we.", "From a shared dream to your new favourite café.\nJoin us soon for fresh brews, warm vibes, and plant-based treats."],
            fr: ["Le café crée des liens — et on fera pareil", "D'un rêve partagé à votre nouveau café préféré.\nBientôt chez vous : café frais, ambiance chaleureuse et gâteries végétariennes."],
        },
        altText: {
            en: "Opening soon!",
            fr: "Bient t ouvert!",
        },
    },
    {
        id: 2,
        images: {
            small: craftMobile,
            medium: craftTablet,
            large: craftDesktop,
        },
        text: {
            en: ["Where coffee becomes craft.", "Every cup is handcrafted with care, precision, and a love for the ritual."],
            fr: ["Où le café est un art.", "Chaque tasse est préparée avec soin, précision et amour pour le rituel."],
        },
        altText: {
            en: "Space",
            fr: "Espace",
        },
    },
    {
        id: 3,
        images: {
            small: spaceMobile,
            medium: spaceTablet,
            large: spaceDesktop,
        },
        text: {
            en: ["This is how it begins.", "A space in the making for coffee and community.\nWe can’t wait to meet you!"],
            fr: ["Tout commence ici.", "Un lieu en devenir, pensé pour le café et la communauté.\nOn a hâte de vous accueillir!"],
        },
        altText: {
            en: "Craft",
            fr: "Artisanal",
        },
    },
];



export { colors, slides, texts };

