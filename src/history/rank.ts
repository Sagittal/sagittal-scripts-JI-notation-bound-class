import { Decimal, Integer, Rank } from "@sagittal/general"
import { BoundType } from "@sagittal/system"
import { RANKS } from "../ranks"
import { BoundEventAnalysis } from "./events"

const computeRank = (boundEventAnalyses: BoundEventAnalysis[]): Decimal<Integer> & Rank<BoundType> =>
    boundEventAnalyses.reduce(
        (
            rank: Decimal<Integer> & Rank<BoundType>,
            boundEventAnalysis: BoundEventAnalysis,
        ): Decimal<Integer> & Rank<BoundType> =>
            rank > boundEventAnalysis.rank ? rank : boundEventAnalysis.rank,
        RANKS[BoundType.INA_MIDPOINT],
    )

export { computeRank }
