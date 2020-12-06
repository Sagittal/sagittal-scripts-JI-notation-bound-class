import {APOTOME, Scamon} from "@sagittal/general"
import {EXTREME_EDA, HIGH_EDA, ULTRA_EDA} from "@sagittal/system"
import {BoundHistory} from "../../../src/histories"
import {computeBoundHistoryPosition} from "../../../src/history/historyPosition"
import {boundEventFixture} from "../../helpers/fixtures"

describe("computeBoundHistoryPosition", (): void => {
    it("returns the position of the bound class history's final bound class event", (): void => {
        const boundHistory: BoundHistory = [
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [27.5, HIGH_EDA],
                } as Scamon<{rational: false}>,    // Not yet...
            },
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [33.5, ULTRA_EDA],
                } as Scamon<{rational: false}>,    // Almost there...
            },
            {
                ...boundEventFixture,
                pitch: {
                    monzo: APOTOME.monzo,
                    scaler: [135.5, EXTREME_EDA],
                } as Scamon<{rational: false}>,    // Final event
            },
        ]

        const actual = computeBoundHistoryPosition(boundHistory)

        const expected = {
            monzo: APOTOME.monzo,
            scaler: [135.5, EXTREME_EDA],
        } as Scamon<{rational: false}>
        expect(actual).toEqual(expected)
    })
})
