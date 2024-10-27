import {
    computeIrrationalDecimalFromScaledVector,
    NumericProperties,
    ScaledVector,
} from "@sagittal/general"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { NeighborPositions } from "./types"

const computeNeighborPositions = <T extends NumericProperties>(
    position: ScaledVector,
    targetPositions: Array<ScaledVector<T>>,
): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] =
        computeNeighborPositionIndices(
            computeIrrationalDecimalFromScaledVector(position),
            targetPositions.map(computeIrrationalDecimalFromScaledVector),
        )

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

export { computeNeighborPositions }
