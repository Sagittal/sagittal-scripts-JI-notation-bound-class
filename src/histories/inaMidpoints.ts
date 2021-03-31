import {APOTOME, isSpevGreater, Maybe, Name, Quotient, Spev} from "@sagittal/general"
import {
    HALF_APOTOME,
    InaMidpoint,
    JI_NOTATION_LEVEL_EDAS,
    JI_NOTATION_LEVELS,
    JiNotationLevelId,
} from "@sagittal/system"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevelId): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[JI_NOTATION_LEVELS.indexOf(jiNotationLevel)]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        const pitch = {
            pev: APOTOME.pev,
            scaler: [midpoint, eda as number] as Quotient,
        } as Spev<{rational: false}>

        if (isSpevGreater(pitch, HALF_APOTOME)) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return {name, pitch}
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<InaMidpoint>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
