import { Cents, computePitchFromCents, HALF_SCALER, Vector, ScaledVector } from "@sagittal/general"
import { JiNotationBoundClass, JiNotationLevelId } from "@sagittal/system"
import { computeInitialPosition } from "../../../src/boundClass/initialPosition"
import { jiNotationBoundClassFixture } from "../../helpers/src/fixtures"

describe("computeInitialPosition", (): void => {
    it("returns the mean of the bounded commas at the introducing JI notation level", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            jiNotationLevels: [JiNotationLevelId.HIGH, JiNotationLevelId.EXTREME],
            // This is chosen at ~42¢ to be between ~|\ (40.004352) and //| (43.012579) at the High JI notation level
            pitch: computePitchFromCents(42 as Cents),
        }

        const actual = computeInitialPosition(jiNotationBoundClass)

        const expected = {
            //   [ -14   6   0   0   0   0   0   0   1 ⟩       ~|\
            // + [  -8   8  -2                         ⟩      //|
            // / 2 =
            vector: [-22, 14, -2, 0, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
            scaler: HALF_SCALER,
        } as ScaledVector<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})
