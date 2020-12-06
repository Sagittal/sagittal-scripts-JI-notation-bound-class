import {Count, Decimal, Rank, Row} from "@sagittal/general"
import {BoundType, JiNotationLevelId} from "@sagittal/system"
import {jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks} from "../../../../../src/globals"
import {computeJiNotationLevelAnalysisRows} from "../../../../../src/io/terminal/level/levelAnalysisRows"
import {RANKS} from "../../../../../src/ranks"

describe("computeJiNotationLevelAnalysisRows", (): void => {
    it("returns a row with the ranks for each bound type in this level", (): void => {
        const jiNotationLevel = JiNotationLevelId.ULTRA

        jiNotationLevelsBestHistoryRanks[jiNotationLevel] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 23 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 13 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel] = {
            [RANKS[BoundType.INA_MIDPOINT]]: 18 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.COMMA_MEAN]]: 17 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
            [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: 15 as Count<Decimal<{integer: true}> & Rank<BoundType>>,
        }

        const actual = computeJiNotationLevelAnalysisRows(jiNotationLevel)

        const expected = [
            ["ina midpoint", " 18    ", " 18    "],
            ["comma mean", " 23    ", " 17    "],
            ["size category bound", " 13    ", " 15    "],
        ] as Array<Row<{of: JiNotationLevelId}>>
        expect(actual).toEqual(expected)
    })
})
