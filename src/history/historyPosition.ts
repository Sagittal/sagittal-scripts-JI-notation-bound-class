import { finalElement, Irrational, ScaledVector } from "@sagittal/general"
import { BoundHistory } from "../histories"

const computeBoundHistoryPosition = (boundHistory: BoundHistory): ScaledVector<Irrational> =>
    finalElement(boundHistory).pitch

export { computeBoundHistoryPosition }
