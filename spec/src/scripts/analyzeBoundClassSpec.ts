import {onlyRunInCi, runScriptAndGetConsoleOutput} from "@sagittal/general"

describe("analyze-ji-notation-bound-class", (): void => {
    it("can receive the argument without a flag", (): void => {
        onlyRunInCi()

        runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-class mina49Split")
    })
})
