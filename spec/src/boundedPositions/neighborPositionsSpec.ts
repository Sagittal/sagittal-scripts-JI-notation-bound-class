import { Cents, computePitchFromCents, Rational, ScaledVector } from "@sagittal/general"
import { computeNeighborPositions } from "../../../src/boundedPositions/neighborPositions"
import { NeighborPositions } from "../../../src/boundedPositions/types"

describe("computeNeighborPositions", (): void => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", (): void => {
        const position = computePitchFromCents(0.433 as Cents)
        const targetPositions = [0.0 as Cents, 0.1 as Cents, 0.5 as Cents, 0.66 as Cents].map(
            computePitchFromCents,
        ) as ScaledVector[] as ScaledVector<Rational>[]

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            computePitchFromCents(0.1 as Cents) as ScaledVector<Rational>,
            computePitchFromCents(0.5 as Cents) as ScaledVector<Rational>,
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })

    it("returns a position as undefined if there is no target on one side of the position", (): void => {
        const position = computePitchFromCents(0.7 as Cents)
        const targetPositions = [0.0 as Cents, 0.1 as Cents, 0.5 as Cents, 0.66 as Cents].map(
            computePitchFromCents,
        ) as ScaledVector[] as ScaledVector<Rational>[]

        const actual = computeNeighborPositions(position, targetPositions)

        const expected = [
            computePitchFromCents(0.66 as Cents) as ScaledVector<Rational>,
            undefined,
        ] as NeighborPositions
        expect(actual).toEqual(expected)
    })
})
