import { finalElement, ScaledVector } from "@sagittal/general"
import { BoundHistory } from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): ScaledVector =>
    finalElement(boundHistory).pitch

export { computeBoundHistoryPosition }
