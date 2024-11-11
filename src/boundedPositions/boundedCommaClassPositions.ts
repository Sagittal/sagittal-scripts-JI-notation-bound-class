import { Irrational, Rational, ScaledVector } from "@sagittal/general"
import {
    CommaClassId,
    getCommaClass,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    JiNotationLevelId,
} from "@sagittal/system"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedCommaClassPositions } from "./types"

const computeBoundedCommaClassPositions = (
    position: ScaledVector<Irrational>,
    jiNotationLevel: JiNotationLevelId,
): BoundedCommaClassPositions => {
    const jiNotationLevelCommaClassIds: CommaClassId[] = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[jiNotationLevel]

    const jiNotationLevelCommaClassPositions: ScaledVector<Rational>[] = jiNotationLevelCommaClassIds.map(
        (jiNotationLevelCommaClassId: CommaClassId): ScaledVector<Rational> => {
            return getCommaClass(jiNotationLevelCommaClassId).pitch
        },
    )

    return computeNeighborPositions(position, jiNotationLevelCommaClassPositions)
}

export { computeBoundedCommaClassPositions }
