import { APOTOME, Ed, Irrational, ScaledVector } from "@sagittal/general"
import { EXTREME_EDA, HIGH_EDA, ULTRA_EDA } from "@sagittal/system"
import { BoundHistory } from "../../../src/histories"
import { computeBoundHistoryPosition } from "../../../src/history/historyPosition"
import { boundEventFixture } from "../../helpers/src/fixtures"

describe("computeBoundHistoryPosition", (): void => {
    it("returns the position of the bound class history's final bound class event", (): void => {
        const boundHistory: BoundHistory = [
            {
                ...boundEventFixture,
                pitch: {
                    vector: APOTOME.vector,
                    scaler: [27.5, HIGH_EDA as Ed],
                } as ScaledVector<Irrational>, // Not yet...
            },
            {
                ...boundEventFixture,
                pitch: {
                    vector: APOTOME.vector,
                    scaler: [33.5, ULTRA_EDA as Ed],
                } as ScaledVector<Irrational>, // Almost there...
            },
            {
                ...boundEventFixture,
                pitch: {
                    vector: APOTOME.vector,
                    scaler: [135.5, EXTREME_EDA as Ed],
                } as ScaledVector<Irrational>, // Final event
            },
        ]

        const actual = computeBoundHistoryPosition(boundHistory)

        const expected = {
            vector: APOTOME.vector,
            scaler: [135.5, EXTREME_EDA as Ed],
        } as ScaledVector<Irrational>
        expect(actual).toEqual(expected)
    })
})
