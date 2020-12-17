import {ColorMethod, Count, Row} from "@sagittal/general"
import * as table from "@sagittal/general/dist/cjs/io/table/table"
import {BoundType} from "@sagittal/system"
import {JiNotationBoundClassAnalysis} from "../../../../../src/boundClass"
import {computeJiNotationBoundClassAnalysesOutput} from "../../../../../src/io/terminal/boundClasses"
import {RANKS} from "../../../../../src/ranks"
import {jiNotationBoundClassAnalysisFixture} from "../../../../helpers/src/fixtures"

describe("computeJiNotationBoundClassAnalysesOutput", (): void => {
    it("colors the rows correctly, according to their best rank", (): void => {
        const jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[] = [
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.INA_MIDPOINT]},
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.SIZE_CATEGORY_BOUND]},
            {...jiNotationBoundClassAnalysisFixture, bestRank: RANKS[BoundType.COMMA_MEAN]},
        ]

        spyOn(table, "formatTable")

        computeJiNotationBoundClassAnalysesOutput(jiNotationBoundClassAnalyses)

        expect(table.formatTable).toHaveBeenCalledWith(
            jasmine.anything(),
            {
                colors: [
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "blue",
                    "green",
                    "cyan",
                ] as ColorMethod[],
                headerRowCount: 5 as Count<Row<{header: true}>>,
            },
        )
    })
})
