import {Cents, Comma, computePitchFromCents, Monzo} from "@sagittal/general"
import {JiNotationLevelId} from "@sagittal/system"
import {computeBoundedCommaClassPositions} from "../../../src/boundedPositions"

describe("computeBoundedCommaClassPositions", (): void => {
    it("gives the positions of the comma classes immediately lesser and greater than the position at that JI notation level", (): void => {
        const position = computePitchFromCents(9 as Cents)
        const jiNotationLevel = JiNotationLevelId.MEDIUM

        const actual = computeBoundedCommaClassPositions(position, jiNotationLevel)

        const expected = [
            {monzo: [10, -6, 1, -1] as Monzo<{rational: true}>} as Comma,           //  |(      ~5.757802¢
            {monzo: [7, -4, 0, 1, -1] as Monzo<{rational: true}>} as Comma,         // )|(      ~9.687960¢
        ]

        expect(actual).toEqual(expected)
    })

    it("when the position is greater than the greatest comma class at the JI notation level, gives the position of the greatest comma class for the lesser comma class and undefined for the greater comma class", (): void => {
        const position = computePitchFromCents(57 as Cents)
        const jiNotationLevel = JiNotationLevelId.ULTRA

        const actual = computeBoundedCommaClassPositions(position, jiNotationLevel)

        const expected = [
            {monzo: [-3, 4, 1, -2] as Monzo<{rational: true}>} as Comma,            // )/|\     ~56.481904¢
            undefined,
        ]
        expect(actual).toEqual(expected)
    })
})
