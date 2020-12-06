import {Filename, Io, LogTarget, saveLog, setupScriptAndIo} from "@sagittal/general"
import {analyzeJiNotationBoundClasses} from "../analyzeBoundClasses"
import {JiNotationBoundClassAnalysis} from "../boundClass"
import {computeJiNotationBoundClassesImage, computeJiNotationBoundClassesOutput} from "../io"

setupScriptAndIo("jiNotationBoundClass" as Filename, [LogTarget.FINAL])

const jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[] = analyzeJiNotationBoundClasses()

const tableOutput: Io = computeJiNotationBoundClassesOutput(jiNotationBoundClassAnalyses)

const imageOutput: Io = computeJiNotationBoundClassesImage(jiNotationBoundClassAnalyses)

saveLog(tableOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/jiNotationBoundClassesTable.txt" as Filename,
})
saveLog(imageOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/jiNotationBoundClassesImage.svg" as Filename,
    writeOnly: !process.env.TEST_MODE,
})
