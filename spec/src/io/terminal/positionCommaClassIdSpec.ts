import {Pev, Spev} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"
import {computePositionCommaClassId} from "../../../../src/io/terminal/positionCommaClassId"

describe("computePositionCommaClassId", (): void => {
    it("given a position, returns the JI Notation comma class ID at that position", (): void => {
        const position = {
            pev: [-9, 3, 0, 0, 0, 0, 0, 1] as Pev<{rational: true}>,
        } as Spev<{rational: true}>

        const actual = computePositionCommaClassId(position)

        const expected = CommaClassId._19_s
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", (): void => {
        const position = undefined

        const actual = computePositionCommaClassId(position)

        expect(actual).toBeUndefined()
    })
})
