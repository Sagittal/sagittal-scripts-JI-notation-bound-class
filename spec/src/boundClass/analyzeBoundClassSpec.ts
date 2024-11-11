import { Abs, APOTOME, Cents, Count, Grade, HALF_SCALER, Multiplier, Name, Sum } from "@sagittal/general"
import {
    BoundClassId,
    BoundType,
    EXTREME_EDA,
    Ina,
    INSANE_EDA,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
    Tinas,
} from "@sagittal/system"
import { analyzeJiNotationBoundClass, JiNotationBoundClassAnalysis } from "../../../src/boundClass"
import * as jiNotationLevels from "../../../src/boundClass/levels"
import * as ranks from "../../../src/boundClass/ranks"
import { BoundHistory } from "../../../src/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../src/history"
import { RANKS } from "../../../src/ranks"
import { jiNotationBoundClassFixture } from "../../helpers/src/fixtures"

describe("analyzeJiNotationBoundClass", (): void => {
    const notBestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                scaler: HALF_SCALER,
            },
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                scaler: HALF_SCALER,
            },
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [164.5, INSANE_EDA],
            },
            // This one gets rank 4
        },
    ] as BoundHistory
    const bestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                scaler: HALF_SCALER,
            },
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [47.5, EXTREME_EDA],
            },
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [164.5, INSANE_EDA],
            },
            // This one gets rank 1
        },
    ] as BoundHistory
    const histories: BoundHistory[] = [notBestHistory, bestHistory]
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: {
            vector: APOTOME.vector,
            scaler: [164.5, INSANE_EDA],
        },
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        boundType: BoundType.INA_MIDPOINT,
    } as JiNotationBoundClass
    const boundClassId = BoundClassId.MINA_47
    const expectedBestBoundHistoryBoundEventAnalyses: BoundEventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                scaler: HALF_SCALER,
            },
            rank: RANKS[BoundType.COMMA_MEAN],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [47.5, EXTREME_EDA],
            },
            rank: RANKS[BoundType.INA_MIDPOINT],
            distance: 0.019171116563747148 as Abs<Cents>,
            inaDistance: 0.03929163848648158 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                vector: APOTOME.vector,
                scaler: [164.5, INSANE_EDA],
            },
            rank: RANKS[BoundType.INA_MIDPOINT],
            distance: 0.05970819482401879 as Abs<Cents>,
            inaDistance: 0.4248927038637779 as Multiplier<Ina>,
            exact: true,
        },
    ] as BoundEventAnalysis[]
    const expectedBestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
        boundEventAnalyses: expectedBestBoundHistoryBoundEventAnalyses,
        pitch: {
            vector: APOTOME.vector,
            scaler: [164.5, INSANE_EDA],
        },
        rank: RANKS[BoundType.COMMA_MEAN],
        grade: 131 as Grade<BoundHistory>,
        possible: true,
        exact: false,
        totalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
        totalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tinas>,
        initialPositionTinaDistance: -0.5613173198962725 as Multiplier<Tinas>,
    } as unknown as BoundHistoryAnalysis

    it("returns an analysis of the JI notation bound class using its histories, including a consolidation of said bound histories, and its best possible bound class history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])

        const expected = {
            bestRank: RANKS[BoundType.COMMA_MEAN],
            initialPosition: {
                vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                scaler: HALF_SCALER,
            },
            initialPositionTinaDistance: -0.5613173198962725 as Multiplier<Tinas>,
            possibleBoundHistoryCount: 2 as Count<BoundHistoryAnalysis>,
            bestPossibleBoundHistoryAnalysis: expectedBestPossibleBoundHistoryAnalysis,
            bestPossibleBoundHistoryTotalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
            bestPossibleBoundHistoryTotalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
            boundHistoryConsolidation: {
                [JiNotationLevelId.ULTRA]: [
                    {
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<JiNotationBound>,
                        pitch: {
                            vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        },
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [".)/| '/|", "47.5°233"] as Name<JiNotationBound>[],
                    },
                ],
                [JiNotationLevelId.EXTREME]: [
                    {
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<JiNotationBound>,
                        pitch: {
                            vector: [-17, 11, -2, 0, 0, 0, 0, 1],
                            scaler: HALF_SCALER,
                        },
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: ["164.5°809"] as Name<JiNotationBound>[],
                    },
                    {
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "47.5°233" as Name<JiNotationBound>,
                        pitch: {
                            vector: APOTOME.vector,
                            scaler: [47.5, EXTREME_EDA],
                        },
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.INA_MIDPOINT],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: ["164.5°809"] as Name<JiNotationBound>[],
                    },
                ],
                [JiNotationLevelId.INSANE]: [
                    {
                        jiNotationLevel: JiNotationLevelId.INSANE,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "164.5°809" as Name<JiNotationBound>,
                        pitch: {
                            vector: APOTOME.vector,
                            scaler: [164.5, INSANE_EDA],
                        },
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.INA_MIDPOINT],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [] as Name<JiNotationBound>[],
                    },
                ],
            },
        } as JiNotationBoundClassAnalysis
        expect(actual).toBeCloseToObject(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])

        const expectedBestHistoryRank = RANKS[BoundType.COMMA_MEAN]
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, boundClassId)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBoundClass(histories, [boundClassId, jiNotationBoundClass])

        expect(jiNotationLevels.updateJiNotationLevelAnalysis).toHaveBeenCalledWith(
            expectedBestPossibleBoundHistoryAnalysis,
        )
    })
})
