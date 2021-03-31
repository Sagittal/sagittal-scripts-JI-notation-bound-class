import {Name, Spev} from "@sagittal/general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "@sagittal/system"

interface BoundEvent {
    jiNotationLevel: JiNotationLevelId,
    name: Name<JiNotationBound>,
    pitch: Spev,
    boundType: BoundType,
}

type BoundHistory = BoundEvent[]

export {
    BoundEvent,
    BoundHistory,
}
