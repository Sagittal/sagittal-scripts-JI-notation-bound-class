import { Name, ScaledVector } from "@sagittal/general"
import { BoundType, JiNotationBound, JiNotationLevelId } from "@sagittal/system"

interface BoundEvent {
    jiNotationLevel: JiNotationLevelId
    name: Name<JiNotationBound>
    pitch: ScaledVector
    boundType: BoundType
}

type BoundHistory = BoundEvent[]

export { BoundEvent, BoundHistory }
