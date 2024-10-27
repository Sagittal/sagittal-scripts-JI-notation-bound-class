import {
    CommaMean,
    computeRationalScaledVectorGeometricMean,
    indexOfFinalElement,
    Name,
} from "@sagittal/general"
import {
    CommaClassId,
    computeSagittalSagitype,
    getCommaClass,
    getRepresentativeSagittal,
    JiNotationLevelId,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "@sagittal/system"

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevelId): CommaMean[] => {
    const jiNotationLevelCommaClassIds = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[jiNotationLevel]

    const jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass =
        jiNotationLevelCommaClassIds.slice(0, indexOfFinalElement(jiNotationLevelCommaClassIds))

    return jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass.map(
        (commaClassId: CommaClassId, index: number): CommaMean => {
            const nextCommaClassId = jiNotationLevelCommaClassIds[index + 1]

            const commaClass = getCommaClass(commaClassId)
            const nextCommaClass = getCommaClass(nextCommaClassId)

            const name = [
                computeSagittalSagitype(getRepresentativeSagittal(commaClassId)),
                computeSagittalSagitype(getRepresentativeSagittal(nextCommaClassId)),
            ].join(" ") as Name<CommaMean>

            return {
                pitch: computeRationalScaledVectorGeometricMean(
                    commaClass.pitch,
                    nextCommaClass.pitch,
                ),
                name,
            }
        },
    )
}

export { computeJiNotationLevelCommaMeans }
