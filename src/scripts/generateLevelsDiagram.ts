import { Filename, LogTarget, setupScriptAndIo } from "@sagittal/general"
import { generateLevelsDiagram } from "../io"

setupScriptAndIo("generateLevelsDiagram" as Filename, [LogTarget.FINAL])

generateLevelsDiagram()
