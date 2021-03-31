import {Maybe, NumericProperties, Spev} from "@sagittal/general"

type NeighborPositions<T extends NumericProperties = {}> = [Maybe<Spev<T>>, Maybe<Spev<T>>]

type BoundedCommaClassPositions = NeighborPositions<{rational: true}>

export {
    NeighborPositions,
    BoundedCommaClassPositions,
}
