// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement } from "react";
import { BiRotateRight } from "react-icons/bi";



export interface contactMap {
    whatsapp?: boolean
}
export interface aboutmap {
    icon?: ReactElement<any>
    desc?: string
    year?: string
    skill?: string
    title?: string
    img: string

}




export const portfolioAboutMap: aboutmap[] = [
    {
        img: "/af.jpg",
        title: "Air Freight"
    },
    {
        img: "/of.jpg",
        title: "Ocean Freight"
    },
    {
        img: "/candf.jpg",
        title: "Clearing & Forwarding"
    }
]



export interface experiencemap {
    title?: string
    desc?: string
    icon?: ReactElement<any>

}

export const portfolioExperienceSW: experiencemap[] = [
    {
        title: "Our Mission",
        desc: "To be the clearing and forwarding company of choice in east Africa as well as provide a complete package of logistics services though our global network of partners."
    },
    {
        title: "Our Vision",
        desc: "To offer a single-source solution to and from any point worldwide keeping our clients informed of their shipment status at every step.",
    },
]


export const missionVision: experiencemap[] = [
    {
                icon: <BiRotateRight />,
                title: "Our Mission",
                desc: "To be the clearing and forwarding company of choice in east Africa as well as provide a complete package of logistics services though our global network of partners.",
            },
            {
                icon: <BiRotateRight />,
                title: "Our Vision",
                desc: "To offer a single-source solution to and from any point worldwide keeping our clients informed of their shipment status at every step.",
            },
]



// export const portfolioProjectMap: experiencemap[] = [
//     {
//         icon: <BiRotateRight />,
//         title: "Free USA Address",
//         desc: "We offer FREE USA and UK addresses that allows you to shop and ship what you love from the USA & UK and receive locally anywhere in Nigeria",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Zero Inventory Charge",
//         desc: "Where other shippers charge unnecessary high inventory fee another hidden charges that subsequently leads to high shipping cost. GiddsField offers FREE Inventory charge and not hidden charges.",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Free insurance",
//         desc: "The best part about GiddsField is that we offer free insurance on all the goods you need to be shipped.",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Free Consolidation and Packaging",
//         desc: "Upon shipment, we offer customized packaging and consolidation services that meet industry standards.",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Transparent Lowest Shipping Cost",
//         desc: "We value the trust of our customers, hence we offer the lowest shipping cost that covers customs duty and delivery cost to your destination.",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "15 Days Free Storage",
//         desc: "Where other shippers offers less than 10 days, GiddsField gives up to 15 Days FREE storage to give you ample time to shop more from multiple store and also be able to ship to Nigeria as one shipment with just one shipping cost.",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Real-Time Tracking",
//         desc: "With ExtraCargo, you are always aware of the whereabouts of your shipments. Our simple to use real-time tracking feature on our website enables you to track your delivery’s whereabouts every minute of the day!",
//     },
//     {
//         icon: <BiRotateRight />,
//         title: "Dedicated support staff",
//         desc: "We have a seamless system that guarantees smooth transactions. Should you encounter any issue, you have our super reliable, friendly, and highly skilled professionally-trained support staff. They will work with you personally to solve your problems and address your concerns!",
//     },
// ]


export interface contactmap {
    id?: number
    title?: string
    desc?:
    {
        addr: string
        addr1: string
        addr2: string
        Tell: string
        Tell2: string
        Tell3: string
        Email: string
    }

    parent?: string
    child?: string
    child1?: string
    child2?: string
    child3?: string
    child4?: string
    child5?: string
    child6?: string

}



export const portfolioContactMap: contactmap[] = [


    {
        parent: "Quick Links",
        child: "About Us",
        child1: "Services",
        child2: "Contacts",
        child3: "Catalogue",
    },
    {
        parent: "Services",
        child: "Air Freight",
        child1: "Ocean Freight",
        child2: "Clearing & Forwarding",
    },
    {
        parent: "Important Links",
        child: "Privacy Policy",
        child1: "Cookies Policy",
        child2: "Terms & Conditions",
    },
]

