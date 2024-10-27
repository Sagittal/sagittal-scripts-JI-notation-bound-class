import { Maybe, NumericProperties, ScaledVector } from "@sagittal/general"

type NeighborPositions<T extends NumericProperties = {}> = [
    Maybe<ScaledVector<T>>,
    Maybe<ScaledVector<T>>,
]

type BoundedCommaClassPositions = NeighborPositions<{ rational: true }>

export { NeighborPositions, BoundedCommaClassPositions }
