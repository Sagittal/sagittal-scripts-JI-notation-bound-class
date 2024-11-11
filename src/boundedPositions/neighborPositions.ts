import {
    computeIrrationalDecimalFromScaledVector,
    Irrational,
    Rational,
    ScaledVector,
} from "@sagittal/general"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { NeighborPositions } from "./types"

const computeNeighborPositions = (
    position: ScaledVector<Irrational>,
    targetPositions: ScaledVector<Rational>[],
): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(
        computeIrrationalDecimalFromScaledVector(position),
        targetPositions.map(computeIrrationalDecimalFromScaledVector),
    )

    return [targetPositions[lesserNeighborPositionIndex], targetPositions[greaterNeighborPositionIndex]]
}

export { computeNeighborPositions }
