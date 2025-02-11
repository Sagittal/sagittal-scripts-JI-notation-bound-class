import {
    Abs,
    Cents,
    Comma,
    computePitchFromCents,
    Copfr,
    Decimal,
    EMPTY_VECTOR,
    Index,
    Max,
    Vector,
    Multiplier,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
    Rough,
    Rational,
    Super,
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
import { extractJiNotationBoundClassIdentifiers } from "../../../../src/io/terminal/boundClassIdentifiers"
import { JiNotationBoundClassIdentifiers } from "../../../../src/io/terminal/types"
import { jiNotationBoundClassFixture } from "../../../helpers/src/fixtures"

describe("extractJiNotationBoundIdentifiers", (): void => {
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: computePitchFromCents(23.116419 as Cents),
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        boundType: BoundType.INA_MIDPOINT,
    }
    const boundClassId = BoundClassId.MINA_47

    it("returns helpful identifying information about the bound", (): void => {
        const actual: JiNotationBoundClassIdentifiers = extractJiNotationBoundClassIdentifiers([
            boundClassId,
            jiNotationBoundClass,
        ])

        const expected: JiNotationBoundClassIdentifiers = {
            extremeLevelLesserBoundedCommaClass: ".)/|" as Sagitype,
            extremeLevelGreaterBoundedCommaClass: "'/|" as Sagitype,
            cents: 23.116419 as Cents,
            boundedCommaClassInfoPairs: {
                boundClassId,
                [JiNotationLevelId.ULTRA]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.1164196495597 - 22.9305875372457) as Abs<Cents>,
                        inaDistance: ((23.1164196495597 - 22.9305875372457) /
                            ULTRINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 3 as Copfr<Rough<5>>,
                                two3FreeSopfr: 29 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 19 as Max<Prime<Rough<5>>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    vector: [0, 0, 2, 0, 0, 0, 0, -1] as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient,
                            vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            decimal: 1.01333333302 as Decimal<Rational>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {
                                vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            } as Comma,
                        },
                        // Not the best example b/c ID and mina name are the same up to this point
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.460010384649 - 23.1164196495597) as Abs<Cents>,
                        inaDistance: ((23.460010384649 - 23.1164196495597) /
                            ULTRINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 0 as Copfr<Rough<5>>,
                                two3FreeSopfr: 0 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    vector: EMPTY_VECTOR as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient,
                            vector: [-19, 12] as Vector,
                            decimal: 1.01364326455 as Decimal<Rational>,
                            cents: 23.46001 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: { vector: [-19, 12] as Vector } as Comma,
                        },
                        id: CommaClassId._3_C,
                    },
                ],
                [JiNotationLevelId.EXTREME]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.1164196495597 - 22.9305875372457) as Abs<Cents>,
                        inaDistance: ((23.1164196495597 - 22.9305875372457) / MINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 3 as Copfr<Rough<5>>,
                                two3FreeSopfr: 29 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 19 as Max<Prime<Rough<5>>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    vector: [0, 0, 2, 0, 0, 0, 0, -1] as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient,
                            vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            decimal: 1.01333333302 as Decimal<Rational>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {
                                vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            } as Comma,
                        },
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.460010384649 - 23.1164196495597) as Abs<Cents>,
                        inaDistance: ((23.460010384649 - 23.1164196495597) / MINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 0 as Copfr<Rough<5>>,
                                two3FreeSopfr: 0 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    vector: EMPTY_VECTOR as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient,
                            vector: [-19, 12] as Vector,
                            decimal: 1.01364326455 as Decimal<Rational>,
                            cents: 23.46001 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: { vector: [-19, 12] as Vector } as Comma,
                        },
                        id: CommaClassId._3_C,
                    },
                ],
                [JiNotationLevelId.INSANE]: [
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.1164196495597 - 22.9305875372457) as Abs<Cents>,
                        inaDistance: ((23.1164196495597 - 22.9305875372457) / TINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 3 as Copfr<Rough<5>>,
                                two3FreeSopfr: 29 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 19 as Max<Prime<Rough<5>>>,
                                n2d3p9: 83.564815 as N2D3P9,
                                two3FreeClass: {
                                    vector: [0, 0, 2, 0, 0, 0, 0, -1] as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [76, 75] as Quotient,
                            vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            decimal: 1.01333333302 as Decimal<Rational>,
                            cents: 22.930587 as Cents,
                            name: "19/25C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: {
                                vector: [2, -1, -2, 0, 0, 0, 0, 1] as Vector,
                            } as Comma,
                        },
                        id: CommaClassId._19_V_25_C,
                    },
                    {
                        introducingJiNotationLevel: JiNotationLevelId.ULTRA,
                        distance: (23.460010384649 - 23.1164196495597) as Abs<Cents>,
                        inaDistance: ((23.460010384649 - 23.1164196495597) / TINA_CENTS) as Multiplier<Ina>,
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
                                two3FreeCopfr: 0 as Copfr<Rough<5>>,
                                two3FreeSopfr: 0 as Sopfr<Rough<5>>,
                                two3FreePrimeLimit: 1 as Max<Prime<Rough<5>>>,
                                n2d3p9: 1 as N2D3P9,
                                two3FreeClass: {
                                    vector: EMPTY_VECTOR as Vector<Rational & Super & Rough<5>>,
                                } as Two3FreeClass,
                            },
                            quotient: [531441, 524288] as Quotient,
                            vector: [-19, 12] as Vector,
                            decimal: 1.01364326455 as Decimal<Rational>,
                            cents: 23.46001 as Cents,
                            name: "3C" as Name<Comma>,
                            sizeCategory: 4 as Index<SizeCategory>,
                            pitch: { vector: [-19, 12] as Vector } as Comma,
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
