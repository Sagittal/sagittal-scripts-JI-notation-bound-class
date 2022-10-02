import {
    Abs,
    Cents,
    Comma,
    computePitchFromCents,
    Copfr,
    Decimal,
    Direction,
    EMPTY_PEV,
    Index,
    Max,
    Pev,
    Multiplier,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "@sagittal/general"
import {
    ApotomeSlope,
    Sagitype,
    Ate,
    BoundClassId,
    BoundType,
    CommaClassId,
    Ina,
    JiNotationBoundClass,
    JiNotationLevelId,
    MINA_CENTS,
    Minas,
    N2D3P9,
    SizeCategory,
    SymbolSubsetId,
    TINA_CENTS,
    ULTRINA_CENTS,
    Unicode,
} from "@sagittal/system"
import {extractJiNotationBoundClassIdentifiers} from "../../../../src/io/terminal/boundClassIdentifiers"
import {JiNotationBoundClassIdentifiers} from "../../../../src/io/terminal/types"
import {jiNotationBoundClassFixture} from "../../../helpers/src/fixtures"

describe("extractJiNotationBoundIdentifiers", (): void => {
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: computePitchFromCents(23.116419 as Cents),
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        boundType: BoundType.INA_MIDPOINT,
    }
    const boundClassId = BoundClassId.MINA_47

    it("returns helpful identifying information about the bound", (): void => {
        const actual: JiNotationBoundClassIdentifiers =
            extractJiNotationBoundClassIdentifiers([boundClassId, jiNotationBoundClass])

        const expected: JiNotationBoundClassIdentifiers = {
            extremeLevelLesserBoundedCommaClass: ".)/|" as Sagitype,
            extremeLevelGreaterBoundedCommaClass: "'/|" as Sagitype,
            cents: 23.116419 as Cents as Cents,
            boundedCommaClassInfoPairs: {
                boundClassId,
                [JiNotationLevelId.ULTRA]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / ULTRINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: ".)/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "47" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    pev: [0, 0, 2, 0, 0, 0, 0, -1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>} as Comma,
                        },
                        // Not the best example b/c ID and mina name are the same up to this point
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / ULTRINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: "'/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "48" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    pev: EMPTY_PEV as Pev<{rational: true}> as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            pev: [-19, 12] as Pev<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [-19, 12] as Pev<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._3_C,
                    },
                ],
                [JiNotationLevelId.EXTREME]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / MINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: ".)/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "47" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    pev: [0, 0, 2, 0, 0, 0, 0, -1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / MINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: "'/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "48" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    pev: EMPTY_PEV as Pev<{rational: true}> as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            pev: [-19, 12] as Pev<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [-19, 12] as Pev<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._3_C,
                    },
                ],
                [JiNotationLevelId.INSANE]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.1164196495597 - 22.9305875372457 as Abs<Cents>,
                        inaDistance: (23.1164196495597 - 22.9305875372457) / TINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: ".)/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "47" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: -2.411919815346935 as ApotomeSlope,
                            aas: 2.411919815346935 as Abs<ApotomeSlope>,
                            ate: 1 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{25/19}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 3 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 29 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 19 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    pev: [0, 0, 2, 0, 0, 0, 0, -1] as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient<{rational: true}>,
                            pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>,
                            decimal: 1.01333333302 as Decimal<{rational: true}>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [2, -1, -2, 0, 0, 0, 0, 1] as Pev<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: 23.46001038464900 - 23.1164196495597 as Abs<Cents>,
                        inaDistance: (23.46001038464900 - 23.1164196495597) / TINA_CENTS as Multiplier<Ina>,
                        representativeSagittal: {
                            sagitype: "'/|" as Sagitype,
                            unicode: "" as Unicode,
                            smallestSymbolSubsetId: SymbolSubsetId.HERCULEAN,
                        },
                        minaName: "48" as Name<Minas>,
                        commaAnalysis: {
                            apotomeSlope: 10.555481691145998 as ApotomeSlope,
                            aas: 10.555481691145998 as Abs<ApotomeSlope>,
                            ate: 12 as Ate,
                            two3FreeClassAnalysis: {
                                name: "{1}₂,₃" as Name<Two3FreeClass>,
                                two3FreeCopfr: 0 as Copfr<{rough: 5}>,
                                two3FreeSopfr: 0 as Sopfr<{rough: 5}>,
                                two3FreePrimeLimit: 1 as Max<Prime<{rough: 5}>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    pev: EMPTY_PEV as Pev<{rational: true}> as Pev<{rational: true, rough: 5, direction: Direction.SUPER}>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient<{rational: true}>,
                            pev: [-19, 12] as Pev<{rational: true}>,
                            decimal: 1.01364326455 as Decimal<{rational: true}>,
                            cents: 23.460010 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {pev: [-19, 12] as Pev<{rational: true}>} as Comma,
                        },
                        id: CommaClassId._3_C,
                    },
                ],
            },
            lesserBoundedMinaName: "47" as Name<Minas>,
            greaterBoundedMinaName: "48" as Name<Minas>,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
