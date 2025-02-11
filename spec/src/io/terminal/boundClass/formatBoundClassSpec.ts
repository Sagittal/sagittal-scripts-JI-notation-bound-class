import { Cents, computePitchFromCents, NEWLINE } from "@sagittal/general"
import { BoundClassId, BoundType, JiNotationBoundClass } from "@sagittal/system"
import { JiNotationBoundClassAnalysis } from "../../../../../src/boundClass"
import { formatJiNotationBoundClass } from "../../../../../src/io"
import { RANKS } from "../../../../../src/ranks"
import {
    jiNotationBoundClassAnalysisFixture,
    jiNotationBoundClassFixture,
} from "../../../../helpers/src/fixtures"

describe("formatJiNotationBoundClass", (): void => {
    it("returns a string which is a multi-line, properly indented rendition of the JI notation bound class analysis, as well as identifying information for the JI notation bound", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: computePitchFromCents(5.447635 as Cents),
        }
        const boundClassId = BoundClassId.MINA_10
        const jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis = {
            ...jiNotationBoundClassAnalysisFixture,
            bestRank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = formatJiNotationBoundClass(jiNotationBoundClassAnalysis, [
            boundClassId,
            jiNotationBoundClass,
        ])

        const expected = [
            `{`,
            `    "extremeLevelLesserBoundedCommaClass": ",,|(",`,
            `    "extremeLevelGreaterBoundedCommaClass": ",|(",`,
            `    "cents": 5.44763,`,
            `    "boundedCommaClassInfoPairs": {`,
            `        "boundClassId": "mina10",`,
            `        "extreme": [`,
            `            {`,
            `                "id": "_11_V_13_k",`,
            `                "representativeSagittal": {`,
            `                    "sagitype": ",,|(",`,
            `                    "unicode": "",`,
            `                    "smallestSymbolSubsetId": "olympian"`,
            `                },`,
            `                "minaName": "10",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "commaAnalysis": {`,
            `                    "pitch": {`,
            `                        "vector": [`,
            `                            5,`,
            `                            -3,`,
            `                            0,`,
            `                            0,`,
            `                            1,`,
            `                            -1`,
            `                        ]`,
            `                    },`,
            `                    "vector": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.92528,`,
            `                    "decimal": 1.00285,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "two3FreeClass": {`,
            `                            "vector": [`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                -1,`,
            `                                1`,
            `                            ]`,
            `                        },`,
            `                        "name": "{13/11}₂,₃",`,
            `                        "two3FreePrimeLimit": 13,`,
            `                        "two3FreeSopfr": 24,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 34.42593`,
            `                    },`,
            `                    "apotomeSlope": -3.30327,`,
            `                    "aas": 3.30327,`,
            `                    "ate": 3,`,
            `                    "sizeCategory": 3,`,
            `                    "name": "11/13k"`,
            `                },`,
            `                "distance": 0.2039,`,
            `                "inaDistance": 0.41789`,
            `            },`,
            `            {`,
            `                "id": "_31_V_11_k",`,
            `                "representativeSagittal": {`,
            `                    "sagitype": ",|(",`,
            `                    "unicode": "",`,
            `                    "smallestSymbolSubsetId": "olympian"`,
            `                },`,
            `                "minaName": "11",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "commaAnalysis": {`,
            `                    "pitch": {`,
            `                        "vector": [`,
            `                            -11,`,
            `                            6,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "vector": [`,
            `                        -11,`,
            `                        6,`,
            `                        0,`,
            `                        0,`,
            `                        -1,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.44764,`,
            `                    "decimal": 1.00315,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "two3FreeClass": {`,
            `                            "vector": [`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                -1,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                1`,
            `                            ]`,
            `                        },`,
            `                        "name": "{31/11}₂,₃",`,
            `                        "two3FreePrimeLimit": 31,`,
            `                        "two3FreeSopfr": 42,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 195.75926`,
            `                    },`,
            `                    "apotomeSlope": 5.66457,`,
            `                    "aas": 5.66457,`,
            `                    "ate": 6,`,
            `                    "sizeCategory": 3,`,
            `                    "name": "31/11k"`,
            `                },`,
            `                "distance": 0.31846,`,
            `                "inaDistance": 0.65269`,
            `            }`,
            `        ],`,
            `        "insane": [`,
            `            {`,
            `                "id": "_11_V_13_k",`,
            `                "representativeSagittal": {`,
            `                    "sagitype": ",,|(",`,
            `                    "unicode": "",`,
            `                    "smallestSymbolSubsetId": "olympian"`,
            `                },`,
            `                "minaName": "10",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "commaAnalysis": {`,
            `                    "pitch": {`,
            `                        "vector": [`,
            `                            5,`,
            `                            -3,`,
            `                            0,`,
            `                            0,`,
            `                            1,`,
            `                            -1`,
            `                        ]`,
            `                    },`,
            `                    "vector": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.92528,`,
            `                    "decimal": 1.00285,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "two3FreeClass": {`,
            `                            "vector": [`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                -1,`,
            `                                1`,
            `                            ]`,
            `                        },`,
            `                        "name": "{13/11}₂,₃",`,
            `                        "two3FreePrimeLimit": 13,`,
            `                        "two3FreeSopfr": 24,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 34.42593`,
            `                    },`,
            `                    "apotomeSlope": -3.30327,`,
            `                    "aas": 3.30327,`,
            `                    "ate": 3,`,
            `                    "sizeCategory": 3,`,
            `                    "name": "11/13k"`,
            `                },`,
            `                "distance": 0.2039,`,
            `                "inaDistance": 1.45096`,
            `            },`,
            `            {`,
            `                "id": "_31_V_11_k",`,
            `                "representativeSagittal": {`,
            `                    "sagitype": ",|(",`,
            `                    "unicode": "",`,
            `                    "smallestSymbolSubsetId": "olympian"`,
            `                },`,
            `                "minaName": "11",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "commaAnalysis": {`,
            `                    "pitch": {`,
            `                        "vector": [`,
            `                            -11,`,
            `                            6,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "vector": [`,
            `                        -11,`,
            `                        6,`,
            `                        0,`,
            `                        0,`,
            `                        -1,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.44764,`,
            `                    "decimal": 1.00315,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "two3FreeClass": {`,
            `                            "vector": [`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                -1,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                0,`,
            `                                1`,
            `                            ]`,
            `                        },`,
            `                        "name": "{31/11}₂,₃",`,
            `                        "two3FreePrimeLimit": 31,`,
            `                        "two3FreeSopfr": 42,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 195.75926`,
            `                    },`,
            `                    "apotomeSlope": 5.66457,`,
            `                    "aas": 5.66457,`,
            `                    "ate": 6,`,
            `                    "sizeCategory": 3,`,
            `                    "name": "31/11k"`,
            `                },`,
            `                "distance": 0.31846,`,
            `                "inaDistance": 2.26621`,
            `            }`,
            `        ]`,
            `    },`,
            `    "lesserBoundedMinaName": "10",`,
            `    "greaterBoundedMinaName": "11"`,
            `}`,
            `{`,
            `    "bestPossibleBoundHistoryAnalysis": {`,
            `        "boundEventAnalyses": [],`,
            `        "pitch": {`,
            `            "vector": [`,
            `                1`,
            `            ],`,
            `            "scaler": [`,
            `                1,`,
            `                2`,
            `            ]`,
            `        },`,
            `        "rank": 0,`,
            `        "grade": 0,`,
            `        "totalDistance": 0,`,
            `        "exact": false,`,
            `        "totalInaDistance": 0,`,
            `        "possible": false,`,
            `        "tinaError": 0,`,
            `        "initialPositionTinaDistance": 0`,
            `    },`,
            `    "bestRank": 3,`,
            `    "initialPosition": {`,
            `        "vector": []`,
            `    },`,
            `    "initialPositionTinaDistance": 0,`,
            `    "bestPossibleBoundHistoryTotalDistance": 0,`,
            `    "bestPossibleBoundHistoryTotalInaDistance": 0,`,
            `    "boundHistoryConsolidation": {},`,
            `    "possibleBoundHistoryCount": 0`,
            `}`,
        ]

        expect(actual.split(NEWLINE)).toEqual(expected)
    })
})
