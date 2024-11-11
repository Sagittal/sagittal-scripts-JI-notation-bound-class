import { computeCentsFromPitch, isUndefined, stringify } from "@sagittal/general"
import {
    BLANK_SAGITYPE,
    computeSagittalSagitype,
    getCommaClass,
    getMinaName,
    getRepresentativeSagittal,
    JiNotationBoundClassEntry,
    JiNotationLevelId,
} from "@sagittal/system"
import { computeBoundedCommaClassInfoPairs } from "./boundedCommaClassInfoPairs"
import { BOUNDED_COMMA_CLASS_ID_PAIRS } from "./levelBoundedCommaClasses"
import {
    BoundedCommaClassIdPairs,
    BoundedCommaClassInfoPairs,
    JiNotationBoundClassIdentifiers,
} from "./types"

const extractJiNotationBoundClassIdentifiers = ([
    boundClassId,
    { pitch },
]: JiNotationBoundClassEntry): JiNotationBoundClassIdentifiers => {
    const boundedCommaClassIdPair = BOUNDED_COMMA_CLASS_ID_PAIRS.find(
        (boundedCommaClassIdPairs: BoundedCommaClassIdPairs): boolean => {
            return boundedCommaClassIdPairs.boundClassId === boundClassId
        },
    )
    if (!boundedCommaClassIdPair)
        throw new Error(
            `Could not find bounded comma class ID pair for bound with ID ${stringify(boundClassId)}`,
        )

    const boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs =
        computeBoundedCommaClassInfoPairs(boundedCommaClassIdPair)

    const [extremeLevelLesserBoundedCommaClassId, extremeLevelGreaterBoundedCommaClassId] =
        boundedCommaClassIdPair[JiNotationLevelId.EXTREME]!

    const extremeLevelLesserBoundedCommaClass =
        !isUndefined(extremeLevelLesserBoundedCommaClassId) &&
        getCommaClass(extremeLevelLesserBoundedCommaClassId)
    const formattedExtremeLevelLesserBoundedCommaClass = extremeLevelLesserBoundedCommaClass
        ? computeSagittalSagitype(getRepresentativeSagittal(extremeLevelLesserBoundedCommaClassId))
        : BLANK_SAGITYPE
    const lesserBoundedMinaName = extremeLevelLesserBoundedCommaClass
        ? getMinaName(extremeLevelLesserBoundedCommaClassId)
        : undefined

    const extremeLevelGreaterBoundedCommaClass =
        !isUndefined(extremeLevelGreaterBoundedCommaClassId) &&
        getCommaClass(extremeLevelGreaterBoundedCommaClassId)
    const formattedExtremeLevelGreaterBoundedCommaClass = extremeLevelGreaterBoundedCommaClass
        ? computeSagittalSagitype(getRepresentativeSagittal(extremeLevelGreaterBoundedCommaClassId))
        : BLANK_SAGITYPE
    const greaterBoundedMinaName = extremeLevelGreaterBoundedCommaClass
        ? getMinaName(extremeLevelGreaterBoundedCommaClassId)
        : undefined

    return {
        extremeLevelLesserBoundedCommaClass: formattedExtremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass: formattedExtremeLevelGreaterBoundedCommaClass,
        cents: computeCentsFromPitch(pitch),
        boundedCommaClassInfoPairs,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    }
}

export { extractJiNotationBoundClassIdentifiers }
