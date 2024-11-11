import { computeRationalScaledVectorGeometricMean, Irrational, ScaledVector, UNISON } from "@sagittal/general"
import { HALF_APOTOME, JiNotationBoundClass } from "@sagittal/system"
import { computeBoundedCommaClassPositions } from "../boundedPositions"

const computeInitialPosition = (jiNotationBoundClass: JiNotationBoundClass): ScaledVector<Irrational> => {
    const { jiNotationLevels } = jiNotationBoundClass

    const initialLevel = jiNotationLevels[0]
    const [lesserBoundedCommaClassPosition = UNISON, greaterBoundedCommaClassPosition] =
        computeBoundedCommaClassPositions(jiNotationBoundClass.pitch, initialLevel)

    return greaterBoundedCommaClassPosition
        ? computeRationalScaledVectorGeometricMean(
              lesserBoundedCommaClassPosition,
              greaterBoundedCommaClassPosition,
          )
        : (HALF_APOTOME as ScaledVector as ScaledVector<Irrational>)
}

export { computeInitialPosition }
