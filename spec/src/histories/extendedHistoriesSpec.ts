import {
    APOTOME,
    Cents,
    computePitchFromCents,
    HALF_SCALER,
    Vector,
    Name,
    ScaledVector,
    Irrational,
    Ed,
    Rational,
} from "@sagittal/general"
import { BoundType, HIGH_EDA, JiNotationBound, JiNotationLevelId, ULTRA_EDA } from "@sagittal/system"
import { BoundEvent, BoundHistory } from "../../../src/histories"
import { computeExtendedHistories } from "../../../src/histories/extendedHistories"
import { jiNotationBoundClassFixture } from "../../helpers/src/fixtures"

describe("computeExtendedHistories", (): void => {
    let boundHistory: BoundHistory

    const passedInBoundEvent: BoundEvent = {
        jiNotationLevel: JiNotationLevelId.HIGH,
        boundType: BoundType.INA_MIDPOINT,
        name: "16.5°47" as Name<JiNotationBound>,
        pitch: { vector: APOTOME.vector, scaler: [16.5, HIGH_EDA as Ed] } as ScaledVector<Irrational>,
    }

    beforeEach((): void => {
        boundHistory = [passedInBoundEvent]
    })

    it("returns an array with potentially many elements: for each bound position of any bound type, a new bound class history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", (): void => {
        const actualJiNotationBoundDecimal = 45.4 as Cents

        const actual = computeExtendedHistories(boundHistory, JiNotationLevelId.ULTRA, {
            ...jiNotationBoundClassFixture,
            pitch: computePitchFromCents(actualJiNotationBoundDecimal),
            jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME],
        })

        const expected: BoundHistory[] = [
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "23.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [23.5, ULTRA_EDA as Ed],
                    } as ScaledVector<Irrational>,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "'//| )//|" as Name<JiNotationBound>,
                    pitch: {
                        vector: [4, -3, -1, 0, 0, 2, 0, -1] as Vector<Rational>,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ],
            [
                passedInBoundEvent,
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "S|M" as Name<JiNotationBound>,
                    pitch: {
                        vector: [8, -5] as Vector<Rational>,
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
