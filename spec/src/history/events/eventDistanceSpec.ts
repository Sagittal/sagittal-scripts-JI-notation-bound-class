import {Abs, Cents, computePitchFromCents} from "@sagittal/general"
import {BoundEvent} from "../../../../src/histories"
import {computeBoundEventDistance} from "../../../../src/history/events/eventDistance"
import {boundEventFixture} from "../../../helpers/fixtures"

describe("computeBoundEventDistance", (): void => {
    it("returns the difference in position between the bound class event and the previous bound class event in the bound class history          ", (): void => {
        const boundEvent: BoundEvent = {...boundEventFixture, pitch: computePitchFromCents(5 as Cents)}
        const boundHistory = [
            {...boundEventFixture, pitch: computePitchFromCents(3 as Cents)},
            boundEvent,
        ]
        const index = 1

        const actual = computeBoundEventDistance(boundEvent, index, boundHistory)

        const expected = 2 as Abs<Cents>
        expect(actual).toBeCloseTo(expected)
    })
})
