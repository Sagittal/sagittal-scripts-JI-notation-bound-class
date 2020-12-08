import {Decimal, increment, Rank} from "@sagittal/general"
import {BoundClassId, BoundType} from "@sagittal/system"
import {rankBoundClassIds, rankCounts} from "../globals"

const updateRankAnalysis = (
    bestRank: Decimal<{integer: true}> & Rank<BoundType>,
    boundClassId: BoundClassId,
): void => {
    rankCounts[bestRank] = increment(rankCounts[bestRank])
    rankBoundClassIds[bestRank].push(boundClassId)
}

export {
    updateRankAnalysis,
}
