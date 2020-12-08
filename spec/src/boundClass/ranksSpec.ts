import {Count, Decimal, deepClone, Index, Rank} from "@sagittal/general"
import {BoundClass, BoundClassId, BoundType} from "@sagittal/system"
import {updateRankAnalysis} from "../../../src/boundClass/ranks"
import {rankBoundClassIds, rankCounts} from "../../../src/globals"
import {RANKS} from "../../../src/ranks"

describe("updateRankAnalysis", (): void => {
    const bestRank: Decimal<{integer: true}> & Rank<BoundType> = RANKS[BoundType.SIZE_CATEGORY_BOUND]
    const boundClassId = BoundClassId.MINA_84

    let previousRankAnalysis: number
    let previousRankBoundClassIndices: Array<BoundClassId>

    beforeEach((): void => {
        previousRankAnalysis = rankCounts[bestRank]
        previousRankBoundClassIndices = deepClone(rankBoundClassIds[bestRank])

        updateRankAnalysis(bestRank, boundClassId)
    })

    it("updates the count of JI notation bound classes with this rank as their best rank", (): void => {
        expect(rankCounts[bestRank])
            .toBe(previousRankAnalysis + 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
    })

    it("updates the rank to include this JI notation bound class in the list of JI notation bound classes with it as their best rank            ", (): void => {
        expect(rankBoundClassIds[bestRank])
            .toEqual(previousRankBoundClassIndices.concat([boundClassId]))
    })
})
