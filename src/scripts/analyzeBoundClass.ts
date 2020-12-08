import {Filename, Io, isUndefined, LogTarget, program, saveLog, setupScriptAndIo} from "@sagittal/general"
import {BoundClassId, JI_NOTATION_BOUND_CLASSES} from "@sagittal/system"
import {analyzeJiNotationBoundClass} from "../boundClass"
import {computeHistories} from "../histories"
import {formatJiNotationBoundClass} from "../io"

setupScriptAndIo("analyzeBoundClass" as Filename, [LogTarget.FINAL])

const boundClassId = program.args[0] as BoundClassId
if (isUndefined(boundClassId)) throw new Error(`No bound class ID provided.`)

const jiNotationBoundClass = JI_NOTATION_BOUND_CLASSES[boundClassId]

if (jiNotationBoundClass) {
    const histories = computeHistories(jiNotationBoundClass)
    const jiNotationBoundClassAnalysis = analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])

    const jiNotationBoundOutput: Io =
        formatJiNotationBoundClass(jiNotationBoundClassAnalysis, [boundClassId, jiNotationBoundClass])
    saveLog(jiNotationBoundOutput, LogTarget.FINAL)
} else {
    throw new Error(`Could not find JI notation bound class with ID ${boundClassId}. Possible IDs are: ${Object.keys(JI_NOTATION_BOUND_CLASSES)}`)
}
