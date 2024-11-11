import { BoundEventAnalysis } from "../../../src/history"
import { computeExact } from "../../../src/history/exact"
import { boundEventAnalysisFixture } from "../../helpers/src/fixtures"

describe("computeExact", (): void => {
    it("returns true if every event's position is the same as the actual bound position", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            { ...boundEventAnalysisFixture, exact: true },
            { ...boundEventAnalysisFixture, exact: true },
            { ...boundEventAnalysisFixture, exact: true },
            { ...boundEventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(boundEventAnalyses)

        expect(actual).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            { ...boundEventAnalysisFixture, exact: true },
            { ...boundEventAnalysisFixture, exact: false },
            { ...boundEventAnalysisFixture, exact: true },
            { ...boundEventAnalysisFixture, exact: true },
        ]

        const actual = computeExact(boundEventAnalyses)

        expect(actual).toBeFalsy()
    })
})
