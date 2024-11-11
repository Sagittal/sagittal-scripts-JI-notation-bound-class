import { cleanObject, setAllPropertiesOfObjectOnAnother } from "@sagittal/general"
import {
    INITIAL_RANK_BOUND_IDS,
    INITIAL_RANK_COUNTS,
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
    rankBoundClassIds,
    rankCounts,
} from "../../../src/globals"

afterEach((): void => {
    cleanObject(jiNotationLevelsBestHistoryRanks)
    cleanObject(jiNotationLevelsBestCumulativeHistoryRanks)

    setAllPropertiesOfObjectOnAnother({
        objectToChange: rankCounts,
        objectWithProperties: INITIAL_RANK_COUNTS,
    })
    setAllPropertiesOfObjectOnAnother({
        objectToChange: rankBoundClassIds,
        objectWithProperties: INITIAL_RANK_BOUND_IDS,
    })
})
