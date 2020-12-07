import {Filename, Io, readLines} from "@sagittal/general"
import {onlyRunInCi} from "../../helpers/shared/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../helpers/shared/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-notation-bound-classes", (): void => {
    it("computes a table of analyses of each bound's history, and also analyses by rank and level", (): void => {
        onlyRunInCi()

        const actual = runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)

        const expected = readLines("src/results/boundsTable.txt" as Filename)

        expect(actual).toEqualLines(expected)
    })

    it("generates a diagram showing all the bounds and their histories", (): void => {
        onlyRunInCi()

        runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)
        const actual = readLines("dist/jiNotationBoundClassesImage.svg" as Filename)

        const expected = readLines("src/results/boundsImage.svg" as Filename)

        expect(actual).toEqualLines(expected)
    })
})
