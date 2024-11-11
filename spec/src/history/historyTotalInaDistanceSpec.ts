import { Multiplier, Sum } from "@sagittal/general"
import { Ina } from "@sagittal/system"
import { BoundEventAnalysis } from "../../../src/history"
import { computeBoundHistoryTotalInaDistance } from "../../../src/history/historyTotalInaDistance"
import { boundEventAnalysisFixture } from "../../helpers/src/fixtures"

describe("computeBoundHistoryTotalInaDistance", (): void => {
    it("sums up the ina-distances of all the bound class events in the bound class history (they are already all positive)", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            { ...boundEventAnalysisFixture, inaDistance: 0.4 as Multiplier<Ina> },
            { ...boundEventAnalysisFixture, inaDistance: 0.5 as Multiplier<Ina> },
            { ...boundEventAnalysisFixture, inaDistance: 0.6 as Multiplier<Ina> },
        ]

        const actual = computeBoundHistoryTotalInaDistance(boundEventAnalyses)

        const expected = 1.5 as Sum<Multiplier<Ina>>
        expect(actual).toBe(expected)
    })
})
