import {BoundType} from "@sagittal/system"
import {BoundEventAnalysis} from "../../../src/history"
import {computeRank} from "../../../src/history/rank"
import {RANKS} from "../../../src/ranks"
import {boundEventAnalysisFixture} from "../../helpers/fixtures"

describe("computeRank", (): void => {
    it("returns the worst rank of any of the bound class events in the bound class history", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[BoundType.INA_MIDPOINT],          // 1 = best
            },
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],   // 3 = worst
            },
            {
                ...boundEventAnalysisFixture,
                rank: RANKS[BoundType.COMMA_MEAN],            // 2 = in the middle
            },
        ]

        const actual = computeRank(boundEventAnalyses)

        const expected = RANKS[BoundType.SIZE_CATEGORY_BOUND] // 3 = worst
        expect(actual).toBe(expected)
    })
})
