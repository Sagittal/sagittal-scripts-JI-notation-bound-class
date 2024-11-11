import { Decimal, Formatted, Integer, Rank, RecordKey } from "@sagittal/general"
import { BoundType } from "@sagittal/system"
import { RANKS } from "../../ranks"

const FORMATTED_RANKS: Record<
    RecordKey<Decimal<Integer> & Rank<BoundType>>,
    Formatted<Decimal<Integer> & Rank<BoundType>>
> = {
    [RANKS[BoundType.INA_MIDPOINT]]: "ina midpoint" as Formatted<Decimal<Integer> & Rank<BoundType>>,
    [RANKS[BoundType.COMMA_MEAN]]: "comma mean" as Formatted<Decimal<Integer> & Rank<BoundType>>,
    [RANKS[BoundType.SIZE_CATEGORY_BOUND]]: "size category bound" as Formatted<
        Decimal<Integer> & Rank<BoundType>
    >,
}

export { FORMATTED_RANKS }
