import {Abs, Cents, Grade, Sum} from "@sagittal/general"
import {computeBestPossibleBoundHistoryAnalysis} from "../../../src/boundClass/bestPossibleHistory"
import {BoundHistory} from "../../../src/histories"
import {BoundHistoryAnalysis} from "../../../src/history"
import {boundHistoryAnalysisFixture} from "../../helpers/fixtures"

describe("computeBestPossibleBoundHistoryAnalysis", (): void => {
    it("returns the bound class history with the best grade (the not possible ones are all already filtered out)                ", (): void => {
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                grade: 3436643 as Grade<BoundHistory>,
            },
            {
                ...boundHistoryAnalysisFixture,
                grade: 245444 as Grade<BoundHistory>,
            },
            {
                ...boundHistoryAnalysisFixture,
                grade: 2422436 as Grade<BoundHistory>,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected = {
            ...boundHistoryAnalysisFixture,
            grade: 245444 as Grade<BoundHistory>,
        }
        expect(actual).toEqual(expected)
    })

    it("returns the best exact bound class history even if its grade is not the best", (): void => {
        const boundHistoryAnalyses = [
            {
                ...boundHistoryAnalysisFixture,
                grade: 3436643 as Grade<BoundHistory>,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                grade: 45575474 as Grade<BoundHistory>,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                grade: 245444 as Grade<BoundHistory>,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected = {
            ...boundHistoryAnalysisFixture,
            grade: 3436643 as Grade<BoundHistory>,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })

    it("tie-breaks by distance", (): void => {
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                grade: 3436643 as Grade<BoundHistory>,
                totalDistance: 0.2 as Sum<Abs<Cents>>,
                exact: true,
            },
            {
                ...boundHistoryAnalysisFixture,
                grade: 3436643 as Grade<BoundHistory>,
                totalDistance: 0.1 as Sum<Abs<Cents>>,
                exact: true,
            },
        ]

        const actual = computeBestPossibleBoundHistoryAnalysis(boundHistoryAnalyses)

        const expected: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            grade: 3436643 as Grade<BoundHistory>,
            totalDistance: 0.1 as Sum<Abs<Cents>>,
            exact: true,
        }
        expect(actual).toEqual(expected)
    })
})
