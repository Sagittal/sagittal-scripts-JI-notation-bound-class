import {Filename, Io, slowTestOnlyRunInFullSuite, readLines, runScriptAndGetConsoleOutput} from "@sagittal/general"

describe("analyze-ji-notation-bound-classes", (): void => {
    it("computes a table of analyses of each bound's history, and also analyses by rank and level", (): void => {
        slowTestOnlyRunInFullSuite()

        const actual = runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)

        const expected = readLines("src/results/boundsTable.txt" as Filename)

        expect(actual).toEqualLines(expected)
    })

    it("generates a diagram showing all the bounds and their histories", (): void => {
        slowTestOnlyRunInFullSuite()

        runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)
        const actual = readLines("dist/jiNotationBoundClassesImage.svg" as Filename)

        const expected = readLines("src/results/boundsImage.svg" as Filename)

        expect(actual).toEqualLines(expected)
    })
})
