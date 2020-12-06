import {Abs, APOTOME, Cents, Multiplier, Scamon} from "@sagittal/general"
import {BoundType, EXTREME_EDA, HIGH_EDA, Ina, JiNotationLevelId, ULTRA_EDA} from "@sagittal/system"
import {BoundHistory} from "../../../../src/histories"
import {analyzeBoundEvents} from "../../../../src/history/events"
import {RANKS} from "../../../../src/ranks"
import {boundEventAnalysisFixture, boundEventFixture} from "../../../helpers/src/fixtures"

describe("analyzeBoundEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
        const boundHistory: BoundHistory = [
            {
                ...boundEventFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevelId.HIGH,
                pitch: {monzo: APOTOME.monzo, scaler: [27.5, HIGH_EDA]} as Scamon<{rational: false}>,
            },
            {
                ...boundEventFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                pitch: {monzo: APOTOME.monzo, scaler: [33.5, ULTRA_EDA]} as Scamon<{rational: false}>,
            },
            {
                ...boundEventFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                pitch: {monzo: APOTOME.monzo, scaler: [135.5, EXTREME_EDA]} as Scamon<{rational: false}>,
            },
        ]
        const actualJiNotationBoundPitch = {
            monzo: APOTOME.monzo,
            scaler: [33.5, ULTRA_EDA],
        } as Scamon<{rational: false}>

        const actual = analyzeBoundEvents(boundHistory, actualJiNotationBoundPitch)

        const expected = [
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevelId.HIGH,
                pitch: {monzo: APOTOME.monzo, scaler: [27.5, HIGH_EDA]} as Scamon<{rational: false}>,
                rank: RANKS[BoundType.INA_MIDPOINT],
                exact: false,
                distance: 0.000000 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                pitch: {monzo: APOTOME.monzo, scaler: [33.5, ULTRA_EDA]} as Scamon<{rational: false}>,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                exact: true,
                distance: 0.854931 as Abs<Cents>,
                inaDistance: 0.436170 as Multiplier<Ina>,
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                pitch: {monzo: APOTOME.monzo, scaler: [135.5, EXTREME_EDA]} as Scamon<{rational: false}>,
                rank: RANKS[BoundType.COMMA_MEAN],
                exact: false,
                distance: 0.450063 as Abs<Cents>,
                inaDistance: 0.922414 as Multiplier<Ina>,
            },
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})
