import {onlyRunInCi} from "@sagittal/general"
import {BoundClassId, JI_NOTATION_BOUND_CLASS_ENTRIES, JiNotationBoundClass} from "@sagittal/system"
import {analyzeJiNotationBoundClass} from "../../../../../src/boundClass"
import {computeHistories} from "../../../../../src/histories"
import {formatRankAnalyses} from "../../../../../src/io/terminal/rank"

describe("formatRankAnalyses", (): void => {
    it("gives the correct answer", (): void => {
        onlyRunInCi()

        JI_NOTATION_BOUND_CLASS_ENTRIES.map(([boundClassId, jiNotationBoundClass]: [BoundClassId, JiNotationBoundClass]): void => {
            const histories = computeHistories(jiNotationBoundClass)
            analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])
        })

        const actual = formatRankAnalyses()

        const expected =
            "\n\n   ---   Rank Analyses   ---   " +
            "\n\n\n" +
            "ina midpoint event was worst-ranked bound class event:\n\ttotal: 99 bounds\n\tbounds: mina0, mina1, mina2, mina4, mina5, mina6, mina7, mina8, mina9, mina10, mina11, mina12, mina14, mina15, mina17, mina19, mina20, mina21, mina22, mina23, mina25, mina26, mina27, mina28, mina29, mina30, mina32, mina33, mina34, mina36, mina37, mina38, mina39, mina41, mina42, mina43, mina44, mina45, mina46, mina48, mina49Split, mina50, mina51Split, mina52, mina53, mina54, mina55, mina56, mina57, mina58, mina59, mina60, mina61, mina62, mina65, mina66, mina67, mina68, mina69, mina70, mina71, mina72Split, mina73, mina74, mina75, mina78Split, mina79, mina80, mina82, mina83, mina84, mina85, mina86, mina87, mina88, mina89, mina90, mina91, mina93, mina94, mina95, mina96, mina97, mina98, mina99, mina100, mina102, mina103, mina104, mina105Split, mina106, mina107, mina108, mina109, mina110, mina111, mina112, mina113Split, mina115".blue +
            "\n\n" +
            "comma mean event was worst-ranked bound class event:\n\ttotal: 22 bounds\n\tbounds: mina3, mina13, mina16, mina18, mina24, mina31, mina35, mina40, mina47, mina49, mina51, mina63, mina64, mina72, mina76, mina77, mina78, mina81, mina101, mina105, mina113, mina114".cyan +
            "\n\n" +
            "size category bound event was worst-ranked bound class event:\n\ttotal: 2 bounds\n\tbounds: mina92, mina116".green
        expect(actual).toEqual(expected)
    })
})
