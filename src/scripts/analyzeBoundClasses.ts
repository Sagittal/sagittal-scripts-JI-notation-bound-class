import {Filename, Io, LogTarget, saveLog, setupScriptAndIo} from "@sagittal/general"
import {analyzeJiNotationBoundClasses} from "../analyzeBoundClasses"
import {JiNotationBoundClassAnalysis} from "../boundClass"
import {computeJiNotationBoundClassesOutput, generateJiNotationBoundClassesImage} from "../io"

setupScriptAndIo("analyzeBoundClasses" as Filename, [LogTarget.FINAL])

const jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[] = analyzeJiNotationBoundClasses()

const tableOutput: Io = computeJiNotationBoundClassesOutput(jiNotationBoundClassAnalyses)
saveLog(tableOutput, LogTarget.FINAL)

generateJiNotationBoundClassesImage(jiNotationBoundClassAnalyses)
