import { Apotome, APOTOME, HALF_SCALER, Irrational, Name, ScaledVector } from "@sagittal/general"
import {
    BoundType,
    EXTREME_EDA,
    HIGH_EDA,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
    MEDIUM_EDA,
} from "@sagittal/system"
import { BoundEvent, BoundHistory } from "../../../src/histories"
import { computeExtendedJiNotationLevelBoundHistories } from "../../../src/histories/extendedLevelHistories"
import { jiNotationBoundClassFixture } from "../../helpers/src/fixtures"

describe("computeExtendedJiNotationLevelBoundHistories", (): void => {
    it("given the histories for a bound up to the current JI notation level, returns the histories extended for all possible events at this JI notation level", (): void => {
        const historyPriorEventA: BoundEvent = {
            jiNotationLevel: JiNotationLevelId.MEDIUM,
            boundType: BoundType.INA_MIDPOINT,
            name: "1.5°21" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [1.5, MEDIUM_EDA],
            } as ScaledVector<Irrational, { of: Apotome }>,
        }
        const historyPriorEventB: BoundEvent = {
            jiNotationLevel: JiNotationLevelId.MEDIUM,
            boundType: BoundType.COMMA_MEAN,
            name: "|( )|(" as Name<JiNotationBound>,
            pitch: {
                vector: [],
                scaler: HALF_SCALER,
            } as ScaledVector<Irrational>,
        }
        const histories: BoundHistory[] = [[historyPriorEventA], [historyPriorEventB]]
        const jiNotationLevel = JiNotationLevelId.HIGH
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                vector: APOTOME.vector,
                scaler: [16.5, EXTREME_EDA],
            } as ScaledVector<Irrational, { of: Apotome }>,
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.HIGH, JiNotationLevelId.ULTRA],
        }

        const actual = computeExtendedJiNotationLevelBoundHistories(
            histories,
            jiNotationLevel,
            jiNotationBoundClass,
        )

        const expected = [
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [2.5, HIGH_EDA],
                    } as ScaledVector<Irrational, { of: Apotome }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [3.5, HIGH_EDA],
                    } as ScaledVector<Irrational, { of: Apotome }>,
                },
            ],
            [
                historyPriorEventA,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<JiNotationBound>,
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1],
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "2.5°47" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [2.5, HIGH_EDA],
                    } as ScaledVector<Irrational, { of: Apotome }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "3.5°47" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [3.5, HIGH_EDA],
                    } as ScaledVector<Irrational, { of: Apotome }>,
                },
            ],
            [
                historyPriorEventB,
                {
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( ~|" as Name<JiNotationBound>,
                    pitch: {
                        vector: [3, 1, 1, -1, 0, 0, -1],
                        scaler: HALF_SCALER,
                    } as ScaledVector<Irrational>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})
