import { Index } from "@sagittal/general"
import { computeNeighborPositionIndices } from "../../../src/boundedPositions/neighborPositionIndices"

describe("computeNeighborPositionIndices", (): void => {
    it("returns the indices of the positions in the list of sorted targets which are on either side of the position", (): void => {
        const position = 0.433
        const sortedTargetPositions = [0.0, 0.1, 0.5, 0.66]

        const actual = computeNeighborPositionIndices(position, sortedTargetPositions)

        const expected = [1 as Index, 2 as Index]
        expect(actual).toEqual(expected)
    })
})
