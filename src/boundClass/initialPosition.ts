import {computeRationalSpevGeometricMean, Spev, UNISON} from "@sagittal/general"
import {HALF_APOTOME, JiNotationBoundClass} from "@sagittal/system"
import {computeBoundedCommaClassPositions} from "../boundedPositions"

const computeInitialPosition = (jiNotationBoundClass: JiNotationBoundClass): Spev => {
    const {jiNotationLevels} = jiNotationBoundClass

    const initialLevel = jiNotationLevels[0]
    const [lesserBoundedCommaClassPosition = UNISON, greaterBoundedCommaClassPosition] =
        computeBoundedCommaClassPositions(jiNotationBoundClass.pitch, initialLevel)

    return greaterBoundedCommaClassPosition ?
        computeRationalSpevGeometricMean(lesserBoundedCommaClassPosition, greaterBoundedCommaClassPosition) :
        HALF_APOTOME
}

export {
    computeInitialPosition,
}
