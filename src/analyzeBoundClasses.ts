import {JiNotationBoundClassEntry, JI_NOTATION_BOUND_CLASS_ENTRIES} from "@sagittal/system"
import {analyzeJiNotationBoundClass, JiNotationBoundClassAnalysis} from "./boundClass"
import {computeHistories} from "./histories"

const analyzeJiNotationBoundClasses = (): JiNotationBoundClassAnalysis[] =>
    JI_NOTATION_BOUND_CLASS_ENTRIES.map(
        (jiNotationBoundClassEntry: JiNotationBoundClassEntry): JiNotationBoundClassAnalysis => {
            const jiNotationBoundClass = jiNotationBoundClassEntry[1]
            const histories = computeHistories(jiNotationBoundClass)

            return analyzeJiNotationBoundClass(histories, jiNotationBoundClassEntry)
        },
    )

export {
    analyzeJiNotationBoundClasses,
}
