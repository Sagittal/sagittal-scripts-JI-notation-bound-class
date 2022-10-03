import {Name, slowTestOnlyRunInFullSuite} from "@sagittal/general"
import {
    BoundType,
    JI_NOTATION_BOUND_CLASSES,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
} from "@sagittal/system"
import {analyzeJiNotationBoundClasses} from "../../src/analyzeBoundClasses"
import {JiNotationBoundClassAnalysis} from "../../src/boundClass"
import {BoundEventAnalysis} from "../../src/history"

describe("analyzeJiNotationBoundClasses", (): void => {
    it("returns the same bound types as in the actual JI notation (with the Extreme level being the current highest)              ", (): void => {
        slowTestOnlyRunInFullSuite()

        const actual = analyzeJiNotationBoundClasses()
            .map((jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis): BoundType => {
                const jiNotationLevelEventAnalysis =
                    jiNotationBoundClassAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                        .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                            return boundEventAnalysis.jiNotationLevel === JiNotationLevelId.EXTREME
                        })

                return jiNotationLevelEventAnalysis!.boundType
            })

        const expected = Object.values(JI_NOTATION_BOUND_CLASSES)
            .map((jiNotationBoundClass: JiNotationBoundClass): BoundType => {
                return jiNotationBoundClass.boundType
            })
        expect(actual).toEqual(expected)
    })

    it("returns the same bound names as in the actual JI notation (with the Insane level being the current highest)               ", (): void => {
        slowTestOnlyRunInFullSuite()

        const actual = analyzeJiNotationBoundClasses()
            .map((jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis): Name<JiNotationBound> => {
                const jiNotationLevelEventAnalysis =
                    jiNotationBoundClassAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses
                        .find((boundEventAnalysis: BoundEventAnalysis): boolean => {
                            return boundEventAnalysis.jiNotationLevel === JiNotationLevelId.INSANE
                        })

                return jiNotationLevelEventAnalysis!.name
            })

        const expected = Object.values(JI_NOTATION_BOUND_CLASSES)
            .map((jiNotationBoundClass: JiNotationBoundClass): Name<JiNotationBound> => {
                return jiNotationBoundClass.name
            })
        expect(actual).toEqual(expected)
    })
})
