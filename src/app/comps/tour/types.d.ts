import Shephered from "shepherd.js"

export interface UserSetting {
    title?: string
    classes?: string
    side?: string
    selector: string
    text: string
    route: string
    tour: string
}

export interface shepherd extends Shephered.Step.StepOptions {
    route?: string
    tour?: string;
}