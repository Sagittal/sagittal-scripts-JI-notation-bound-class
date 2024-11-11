import {
    Basis,
    Cents,
    computeCentsFromPitch,
    computePx,
    DEFAULT_PRECISION,
    NumericProperties,
    Px,
    round,
    ScaledVector,
} from "@sagittal/general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = <T extends NumericProperties>(pitch: ScaledVector<T>): Px =>
    round(computePx((MARGIN + computeCentsFromPitch(pitch)) as Basis<Cents>, X_SCALE), DEFAULT_PRECISION)

export { computeX }
