import {maxSpev, Spev} from "@sagittal/general"
import {HALF_APOTOME, SizeCategoryBound} from "@sagittal/system"
import {computeSizeCategoryBoundsUpToHalfApotome} from "../../../src/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsUpToHalfApotome", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual = computeSizeCategoryBoundsUpToHalfApotome()
            .map((sizeCategoryBound: SizeCategoryBound): Spev => sizeCategoryBound.pitch)

        expect(maxSpev(...actual) as Spev).toEqualSpev(HALF_APOTOME)
    })
})
