import {areScamonsEqual} from "@sagittal/general"
import {HALF_APOTOME, SIZE_CATEGORY_BOUNDS, SizeCategoryBound} from "@sagittal/system"

const computeSizeCategoryBoundsUpToHalfApotome = (): SizeCategoryBound[] =>
    SIZE_CATEGORY_BOUNDS.slice(
        0,
        SIZE_CATEGORY_BOUNDS.findIndex(
            (sizeCategoryBound: SizeCategoryBound): boolean =>
                areScamonsEqual(sizeCategoryBound.pitch, HALF_APOTOME),
        ) + 1,
    )

export {
    computeSizeCategoryBoundsUpToHalfApotome,
}
