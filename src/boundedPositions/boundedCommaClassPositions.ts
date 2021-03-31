import {Spev} from "@sagittal/general"
import {CommaClassId, getCommaClass, JI_NOTATION_LEVELS_COMMA_CLASS_IDS, JiNotationLevelId} from "@sagittal/system"
import {computeNeighborPositions} from "./neighborPositions"
import {BoundedCommaClassPositions} from "./types"

const computeBoundedCommaClassPositions = (
    position: Spev,
    jiNotationLevel: JiNotationLevelId,
): BoundedCommaClassPositions => {
    const jiNotationLevelCommaClassIds: CommaClassId[] = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[jiNotationLevel]

    const jiNotationLevelCommaClassPositions: Spev[] = jiNotationLevelCommaClassIds
        .map((jiNotationLevelCommaClassId: CommaClassId): Spev => {
            return getCommaClass(jiNotationLevelCommaClassId).pitch
        })

    return computeNeighborPositions(position, jiNotationLevelCommaClassPositions) as BoundedCommaClassPositions
}

export {
    computeBoundedCommaClassPositions,
}
