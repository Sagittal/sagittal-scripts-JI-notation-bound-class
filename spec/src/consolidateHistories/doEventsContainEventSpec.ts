import { Name } from "@sagittal/general"
import { BoundType, JiNotationBound, JiNotationLevelId } from "@sagittal/system"
import { isBoundEventContained } from "../../../src/consolidateHistories/doEventsContainEvent"
import { BoundEventAnalysis } from "../../../src/history"
import { RANKS } from "../../../src/ranks"
import { boundEventAnalysisFixture } from "../../helpers/src/fixtures"

describe("isBoundEventContained", (): void => {
    it("returns true when the bound class events contain an event which has the same name and the same JI notation level", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeTruthy()
    })

    it("returns false when the bound class events contain an event which has the same name but not the same JI notation level", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain an event which has the same JI notation level but not the same name", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain no events which have either the same name or the same JI notation level", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.COMMA_MEAN],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })
})
