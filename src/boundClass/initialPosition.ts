import { computeRationalScaledVectorGeometricMean, ScaledVector, UNISON } from "@sagittal/general"
import { HALF_APOTOME, JiNotationBoundClass } from "@sagittal/system"
import { computeBoundedCommaClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBoundClass: JiNotationBoundClass): ScaledVector => {
    const { jiNotationLevels } = jiNotationBoundClass

    const initialLevel = jiNotationLevels[0]
    const [lesserBoundedCommaClassPosition = UNISON, greaterBoundedCommaClassPosition] =
        computeBoundedCommaClassPositions(jiNotationBoundClass.pitch, initialLevel)

    return greaterBoundedCommaClassPosition
        ? computeRationalScaledVectorGeometricMean(
              lesserBoundedCommaClassPosition,
              greaterBoundedCommaClassPosition,
          )
        : HALF_APOTOME
}

export { computeInitialPosition }
