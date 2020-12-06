import {Abs, Cents, Sum} from "@sagittal/general"
import {BoundEventAnalysis} from "../../../src/history"
import {computeBoundHistoryTotalDistance} from "../../../src/history/historyTotalDistance"
import {boundEventAnalysisFixture} from "../../helpers/src/fixtures"

describe("computeBoundHistoryTotalDistance", (): void => {
    it("sums up the distances of all the bound class events in the bound class history (they are already all positive)              ", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {...boundEventAnalysisFixture, distance: 4 as Abs<Cents>},
            {...boundEventAnalysisFixture, distance: 5 as Abs<Cents>},
            {...boundEventAnalysisFixture, distance: 6 as Abs<Cents>},
        ]

        const actual = computeBoundHistoryTotalDistance(boundEventAnalyses)

        const expected = 15 as Sum<Abs<Cents>>
        expect(actual).toBe(expected)
    })
})
