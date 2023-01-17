import Shephered from "shepherd.js"
import { shepherd, UserSetting } from "./types"

export const defaultSetting: Shephered.Tour.TourOptions = {
    useModalOverlay: true,
    defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'shadow-md bg-purple-dark',
        scrollTo: { behavior: "smooth", block: "center" }
    }
}

const tours: UserSetting[] = [
    {
        text: 'This step is attached to the bottom of the <code>.example-css-selector</code> element.',
        selector: ".toolbar",
        route: "/root",
        tour: 'tour1',
        side: "bottom"
    },

    {
        text: 'This is a rocket logo',
        selector: "#rocket",
        route: "/root",
        tour: 'tour1',
        side: "bottom"
    },
    {
        text: 'Cli command for genrating ocs',
        selector: ".terminal",
        route: "/root",
        tour: 'tour2',
        side: "bottom"
    },
    // form
    {
        title: "Form Input Field",
        text: 'This is a form input style type legacy',
        selector: "#legacy",
        route: "/root/form",
        tour: 'tour1',
        classes: "ml-20",
        side: "left"
    },
    {
        title: "Form Input Field",
        text: 'This is a form input style type standard',
        selector: "#standard",
        classes: "ml-20",
        route: "/root/form",
        tour: 'tour1',
        side: "left"
    },
    {
        title: "Form Input Field",
        text: 'This is a form input style type fill',
        selector: "#fill",
        classes: "ml-10",
        route: "/root/form",
        tour: 'tour2',
        side: "left"
    },
    {
        title: "Form Input Field",
        text: 'This is a form input style type outline',
        selector: "#outline",
        classes: "ml-10",
        route: "/root/form",
        tour: 'tour2',
        side: "left"
    },
]


export const tourSteps: shepherd[] = tours.map((el: any) => {
    const { selector, side } = el
    return { ...el, attachTo: { element: selector, on: side } }
})
