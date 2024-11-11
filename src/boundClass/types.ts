import {
    Abs,
    Cents,
    Count,
    Decimal,
    Integer,
    Multiplier,
    Rank,
    Rational,
    ScaledVector,
    Sum,
} from "@sagittal/general"
import { BoundType, Ina, Tinas } from "@sagittal/system"
import { BoundHistoryConsolidation } from "../consolidateHistories"
import { BoundHistoryAnalysis } from "../history"

interface JiNotationBoundClassAnalysis {
    bestRank: Decimal<Integer> & Rank<BoundType>
    initialPosition: ScaledVector<Rational>
    initialPositionTinaDistance: Multiplier<Tinas>
    possibleBoundHistoryCount: Count<BoundHistoryAnalysis>
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis
    bestPossibleBoundHistoryTotalDistance: Sum<Abs<Cents>>
    bestPossibleBoundHistoryTotalInaDistance: Sum<Multiplier<Ina>>
    boundHistoryConsolidation: BoundHistoryConsolidation
}

export { JiNotationBoundClassAnalysis }
