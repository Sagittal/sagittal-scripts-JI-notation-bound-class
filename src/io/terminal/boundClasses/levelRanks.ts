import { Decimal, formatIntegerDecimal, Formatted, Integer, Rank } from "@sagittal/general"
import { BoundType, JI_NOTATION_LEVELS, JiNotationLevelId } from "@sagittal/system"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
): Array<Formatted<Decimal<Integer> & Rank<BoundType>>> =>
    JI_NOTATION_LEVELS.map(
        (jiNotationLevel: JiNotationLevelId): Formatted<Decimal<Integer> & Rank<BoundType>> => {
            const jiNotationLevelEventAnalysis = boundHistoryAnalysis.boundEventAnalyses.find(
                (boundEventAnalysis: BoundEventAnalysis): boolean => {
                    return boundEventAnalysis.jiNotationLevel === jiNotationLevel
                },
            )

            return jiNotationLevelEventAnalysis
                ? (formatIntegerDecimal(jiNotationLevelEventAnalysis.rank, { align: true }) as Formatted<
                      Decimal<Integer> & Rank<BoundType>
                  >)
                : (" " as Formatted<Decimal<Integer> & Rank<BoundType>>)
        },
    )

export { extractJiNotationLevelRanks }
