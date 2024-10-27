import { maxScaledVector, ScaledVector } from "@sagittal/general"
import { HALF_APOTOME, SizeCategoryBound } from "@sagittal/system"
import { computeSizeCategoryBoundsUpToHalfApotome } from "../../../src/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsUpToHalfApotome", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsUpToHalfApotome().map(
            (sizeCategoryBound: SizeCategoryBound): ScaledVector => sizeCategoryBound.pitch,
        )

        // @ts-ignore
        expect(maxScaledVector(...actual) as ScaledVector).toEqualScaledVector(HALF_APOTOME)
    })
})
