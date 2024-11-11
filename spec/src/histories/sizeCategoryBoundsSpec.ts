import { Irrational, maxScaledVector, ScaledVector } from "@sagittal/general"
import { HALF_APOTOME, SizeCategoryBound } from "@sagittal/system"
import { computeSizeCategoryBoundsUpToHalfApotome } from "../../../src/histories/sizeCategoryBounds"

describe("computeSizeCategoryBoundsUpToHalfApotome", (): void => {
    it("only returns the size category bounds that are less than or equal to the max position", (): void => {
        const actual: ScaledVector<Irrational>[] = computeSizeCategoryBoundsUpToHalfApotome().map(
            (sizeCategoryBound: SizeCategoryBound): ScaledVector<Irrational> => sizeCategoryBound.pitch,
        )

        const actualActual: ScaledVector<Irrational> = maxScaledVector(...actual)

        // @ts-ignore can't get this matcher to recognize types anymore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        expect(actualActual).toEqualScaledVector(HALF_APOTOME as ScaledVector<Irrational>)
    })
})
