import * as fs from "fs"
import { BLANK, Io, join } from "@sagittal/general"
import {
    visualizeCents,
    addFont,
    visualizeJiNotationLevelBoundClasses,
    visualizeJiNotationLevelCommaClasses,
    visualizeJiNotationLevels,
    addParentSvg,
} from "../image"

const generateLevelsDiagram = (): void => {
    if (!fs.existsSync("dist")) fs.mkdirSync("dist")
    if (!process.env.TEST_MODE) {
        fs.copyFileSync("../../bravura/BravuraSagittalUpdate_v10.otf", "dist/BravuraSagittalUpdate_v10.otf")
    }

    let elements: Io[] = [] as Io[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeJiNotationLevels())
    elements = elements.concat(visualizeJiNotationLevelBoundClasses())

    elements = elements.concat(visualizeJiNotationLevelCommaClasses())

    elements = elements.concat("</svg>\n" as Io)

    const imageOutput = join(elements, BLANK)

    fs.writeFileSync("dist/levelsDiagram.svg", imageOutput)
}

export { generateLevelsDiagram }
