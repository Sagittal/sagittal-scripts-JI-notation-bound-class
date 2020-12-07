import {BLANK, Io, join} from "@sagittal/general"
import * as fs from "fs"
import {JiNotationBoundClassAnalysis} from "../../boundClass"
import {visualizeCents} from "./cents"
import {visualizeBoundEventAnalyses} from "./events"
import {addFont} from "./font"
import {visualizeInaMidpoints} from "./inaMidpoints"
import {visualizeJiNotationLevelBoundClasses} from "./levelBoundClasses"
import {visualizeJiNotationLevelCommaClasses} from "./levelCommaClasses"
import {visualizeJiNotationLevelCommaMeans} from "./levelCommaMeans"
import {visualizeJiNotationLevels} from "./levels"
import {addParentSvg} from "./parentSvg"
import {visualizeSizeCategoryBounds} from "./sizeCategoryBounds"

const generateJiNotationBoundClassesImage = (jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis[]): void => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.copyFileSync("../../bravura/BravuraSagittalUpdate_v10.otf", "dist/BravuraSagittalUpdate_v10.otf")

    let elements: Io[] = [] as Io[]

    elements = elements.concat(addParentSvg())
    elements = elements.concat(addFont())

    elements = elements.concat(visualizeCents())
    elements = elements.concat(visualizeJiNotationLevels())
    elements = elements.concat(visualizeJiNotationLevelBoundClasses())

    jiNotationBoundClassAnalysis.forEach((jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis): void => {
        elements = elements.concat(
            visualizeBoundEventAnalyses(
                jiNotationBoundClassAnalysis.bestPossibleBoundHistoryAnalysis.boundEventAnalyses,
            ),
        )
    })

    elements = elements.concat(visualizeSizeCategoryBounds())
    elements = elements.concat(visualizeJiNotationLevelCommaMeans())
    elements = elements.concat(visualizeInaMidpoints())

    elements = elements.concat(visualizeJiNotationLevelCommaClasses())

    elements = elements.concat("</svg>\n" as Io)

    const imageOutput = join(elements, BLANK) as Io

    fs.writeFileSync("dist/jiNotationBoundClassesImage.svg", imageOutput)
}

export {
    generateJiNotationBoundClassesImage,
}
