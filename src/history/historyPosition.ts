import {finalElement, Spev} from "@sagittal/general"
import {BoundHistory} from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): Spev =>
    finalElement(boundHistory).pitch

export {
    computeBoundHistoryPosition,
}
