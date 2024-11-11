import { Maybe, Rational, ScaledVector } from "@sagittal/general"

type NeighborPositions = [Maybe<ScaledVector<Rational>>, Maybe<ScaledVector<Rational>>]

type BoundedCommaClassPositions = NeighborPositions

export { NeighborPositions, BoundedCommaClassPositions }
