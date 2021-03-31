import {computeIrrationalDecimalFromSpev, NumericProperties, Spev} from "@sagittal/general"
import {computeNeighborPositionIndices} from "./neighborPositionIndices"
import {NeighborPositions} from "./types"

const computeNeighborPositions = <T extends NumericProperties>(
    position: Spev,
    targetPositions: Array<Spev<T>>,
): NeighborPositions => {
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(
        computeIrrationalDecimalFromSpev(position),
        targetPositions.map(computeIrrationalDecimalFromSpev),
    )

    return [
        targetPositions[lesserNeighborPositionIndex],
        targetPositions[greaterNeighborPositionIndex],
    ]
}

export {
    computeNeighborPositions,
}
