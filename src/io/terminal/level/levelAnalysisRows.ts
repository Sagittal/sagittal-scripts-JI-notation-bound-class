import { Count, Decimal, formatIntegerDecimal, Integer, Rank, RecordKey, Row } from "@sagittal/general"
import { BoundType, JiNotationLevelId } from "@sagittal/system"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../globals"
import { FORMATTED_RANKS } from "../rankNames"

const computeJiNotationLevelAnalysisRows = (
    jiNotationLevel: JiNotationLevelId,
): Row<{ of: JiNotationLevelId }>[] => {
    const rows = [] as Row<{ of: JiNotationLevelId }>[]

    const jiNotationLevelsBestHistoryRanksEntries = Object.entries(
        jiNotationLevelsBestHistoryRanks[jiNotationLevel],
    ) as unknown[] as [
        RecordKey<Decimal<Integer> & Rank<BoundType>>,
        Count<Decimal<Integer> & Rank<BoundType>>,
    ][]

    jiNotationLevelsBestHistoryRanksEntries.forEach(
        ([rank, bestHistoryRankCount]: [
            RecordKey<Decimal<Integer> & Rank<BoundType>>,
            Count<Decimal<Integer> & Rank<BoundType>>,
        ]): void => {
            const formattedBestHistoryRankCount = formatIntegerDecimal(bestHistoryRankCount, { align: true })

            const bestCumulativeHistoryRankCount =
                jiNotationLevelsBestCumulativeHistoryRanks[jiNotationLevel][rank]
            const formattedBestCumulativeHistoryRankCount = formatIntegerDecimal(
                bestCumulativeHistoryRankCount,
                { align: true },
            )

            const jiNotationLevelRankRow = [
                FORMATTED_RANKS[rank],
                formattedBestHistoryRankCount,
                formattedBestCumulativeHistoryRankCount,
            ] as Row as Row<{ of: JiNotationLevelId }>

            rows.push(jiNotationLevelRankRow)
        },
    )

    return rows
}

export { computeJiNotationLevelAnalysisRows }
