import {Filename, Io, LogTarget, saveLog, setupScriptAndIo} from "@sagittal/general"
import {computeLevelsDiagram} from "../io"

setupScriptAndIo("jiNotationBoundClass" as Filename, [LogTarget.FINAL])

const imageOutput: Io = computeLevelsDiagram()

saveLog(imageOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/levelsDiagram.svg" as Filename,
    writeOnly: !process.env.TEST_MODE,
})
