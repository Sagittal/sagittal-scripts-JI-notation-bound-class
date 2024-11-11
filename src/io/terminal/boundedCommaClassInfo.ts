import { abs, subtractPitch } from "@sagittal/general"
import {
    analyzeComma,
    BoundClassId,
    CommaClassId,
    computeSagittalSagitype,
    computeSagittalUnicode,
    getCommaClass,
    getIntroducingJiNotationLevel,
    getMinaName,
    getRepresentativeSagittal,
    getSmallestSymbolSubsetId,
    JI_NOTATION_BOUND_CLASSES,
    JiNotationLevelId,
    OUTDATED_COMMA_NAME_OPTIONS_PREFERENCE,
} from "@sagittal/system"
import { computeInaDistance } from "../../history"
import { BoundedCommaClassInfo } from "./types"

const computeBoundedCommaClassInfo = (
    commaClassId: CommaClassId,
    boundClassId: BoundClassId,
    jiNotationLevel: JiNotationLevelId,
): BoundedCommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass.pitch, OUTDATED_COMMA_NAME_OPTIONS_PREFERENCE)

    const sagittal = getRepresentativeSagittal(commaClassId)
    const sagitype = computeSagittalSagitype(sagittal)
    const unicode = computeSagittalUnicode(sagittal)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubsetId = getSmallestSymbolSubsetId(commaClass.representativeSymbolClassId)

    const bound = JI_NOTATION_BOUND_CLASSES[boundClassId]

    const distance = abs(subtractPitch(bound.pitch, commaClass.pitch))
    const inaDistance = computeInaDistance(distance, jiNotationLevel)

    return {
        id: commaClassId,
        representativeSagittal: {
            sagitype,
            unicode,
            smallestSymbolSubsetId,
        },
        minaName,
        introducingJiNotationLevel,
        commaAnalysis,
        distance,
        inaDistance,
    }
}

export { computeBoundedCommaClassInfo }
