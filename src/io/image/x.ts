import {
    Basis,
    Cents,
    computeCentsFromPitch,
    computePx,
    DEFAULT_PRECISION,
    Px,
    round,
    ScaledVector,
} from "@sagittal/general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (pitch: ScaledVector): Px =>
    round(
        computePx((MARGIN + computeCentsFromPitch(pitch)) as Basis<Cents>, X_SCALE),
        DEFAULT_PRECISION,
    )

export { computeX }
