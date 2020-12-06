import {Filename, Io, readLines} from "@sagittal/general"
import {onlyRunInCi} from "../../helpers/shared/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../helpers/shared/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-notation-bound-classes", (): void => {
    it("returns the same output for both the terminal and the image as the snapshot", (): void => {
        onlyRunInCi()

        const actual = runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)

        const expected = readLines("src/results/boundsTerminalAndImage.txt" as Filename)
        expect(actual).toEqualLines(expected)
    })
})
