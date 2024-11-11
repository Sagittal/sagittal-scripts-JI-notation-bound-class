import { JiNotationLevelId } from "@sagittal/system"
import { BoundHistoryConsolidation } from "../../../src/consolidateHistories"
import { ensureOneBestPossibleEventPerJiNotationLevel } from "../../../src/consolidateHistories/ensureOneBestPossibleEventPerLevel"
import { boundEventConsolidationFixture } from "../../helpers/src/fixtures"

describe("ensureOneBestPossibleEventPerJiNotationLevel", (): void => {
    it("throws an error if a bound class history consolidation has more than one event in a single JI notation level which is considered to be the one which is a member of the best possible bound class history", (): void => {
        const boundHistoryConsolidation: BoundHistoryConsolidation = {
            [JiNotationLevelId.MEDIUM]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
            ],
            [JiNotationLevelId.HIGH]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
            ],
            [JiNotationLevelId.EXTREME]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
            ],
        }

        expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(boundHistoryConsolidation)).toThrow(
            new Error(
                "Bound class history had at the Medium JI notation level more than one event marked as member of the best possible bound class history.",
            ),
        )
    })

    it("throws an error if a bound class history consolidation has, at a particular JI notation level, no event which is identified as being the member of the best possible bound class history", (): void => {
        const boundHistoryConsolidation: BoundHistoryConsolidation = {
            [JiNotationLevelId.MEDIUM]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
            ],
            [JiNotationLevelId.HIGH]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
            ],
            [JiNotationLevelId.EXTREME]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
            ],
        }

        expect((): void => ensureOneBestPossibleEventPerJiNotationLevel(boundHistoryConsolidation)).toThrow(
            new Error(
                "Bound class history had at the Medium JI notation level no event marked as member of the best possible bound class history.",
            ),
        )
    })

    it("does not throw an error if a bound class history consolidation does not have more than one best possible event per JI notation level", (): void => {
        const boundHistoryConsolidation: BoundHistoryConsolidation = {
            [JiNotationLevelId.MEDIUM]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
            ],
            [JiNotationLevelId.HIGH]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
            ],
            [JiNotationLevelId.EXTREME]: [
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: true },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
                { ...boundEventConsolidationFixture, isBestPossibleBoundHistoryMember: false },
            ],
        }

        expect((): void =>
            ensureOneBestPossibleEventPerJiNotationLevel(boundHistoryConsolidation),
        ).not.toThrow()
    })
})
