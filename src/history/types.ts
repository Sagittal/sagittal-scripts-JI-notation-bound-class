import {
    Abs,
    Cents,
    Decimal,
    Grade,
    Integer,
    Irrational,
    Multiplier,
    Rank,
    ScaledVector,
    Sum,
} from "@sagittal/general"
import { BoundType, Ina, Tinas } from "@sagittal/system"
import { BoundHistory } from "../histories"
import { BoundEventAnalysis } from "./events"

interface BoundHistoryAnalysis {
    totalDistance: Sum<Abs<Cents>>
    boundEventAnalyses: BoundEventAnalysis[]
    exact: boolean
    totalInaDistance: Sum<Multiplier<Ina>>
    initialPositionTinaDistance: Multiplier<Tinas>
    pitch: ScaledVector<Irrational>
    possible: boolean
    rank: Decimal<Integer> & Rank<BoundType>
    grade: Grade<BoundHistory>
    tinaError: Multiplier<Tinas>
}

export { BoundHistoryAnalysis }
