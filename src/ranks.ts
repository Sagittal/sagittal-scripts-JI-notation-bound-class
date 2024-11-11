import { Decimal, Integer, Rank } from "@sagittal/general"
import { BoundType } from "@sagittal/system"

const RANKS: Record<BoundType, Decimal<Integer> & Rank<BoundType>> = {
    [BoundType.INA_MIDPOINT]: 1 as Decimal<Integer> & Rank<BoundType>,
    [BoundType.COMMA_MEAN]: 2 as Decimal<Integer> & Rank<BoundType>,
    [BoundType.SIZE_CATEGORY_BOUND]: 3 as Decimal<Integer> & Rank<BoundType>,
}

export { RANKS }
