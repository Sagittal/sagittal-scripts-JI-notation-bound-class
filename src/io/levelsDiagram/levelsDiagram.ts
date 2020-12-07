/* tslint:disable:no-reaching-imports */

import {BLANK, Io, join} from "@sagittal/general"
import * as fs from "fs"
import {visualizeCents} from "../image/cents"
import {addFont} from "../image/font"
import {visualizeJiNotationLevelBoundClasses} from "../image/levelBoundClasses"
import {visualizeJiNotationLevelCommaClasses} from "../image/levelCommaClasses"
import {visualizeJiNotationLevels} from "../image/levels"
import {addParentSvg} from "../image/parentSvg"

const generateLevelsDiagram = (): void => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
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

    const imageOutput = join(elements, BLANK) as Io

    fs.writeFileSync("dist/levelsDiagram.svg", imageOutput)
}

export {
    generateLevelsDiagram,
}
