import {areScamonsEqual, isUndefined, Maybe, Scamon} from "@sagittal/general"
import {CommaClassId, getCommaClass, JI_NOTATION_COMMA_CLASS_IDS} from "@sagittal/system"

const computePositionCommaClassId = (position: Maybe<Scamon<{rational: true}>>): Maybe<CommaClassId> => {
    if (!position) {
        return undefined
    }

    const commaClassId = JI_NOTATION_COMMA_CLASS_IDS.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areScamonsEqual(commaClass.pitch, position)
    })

    if (!isUndefined(commaClassId)) {
        return commaClassId
    } else {
        return undefined
    }
}

export {
    computePositionCommaClassId,
}
