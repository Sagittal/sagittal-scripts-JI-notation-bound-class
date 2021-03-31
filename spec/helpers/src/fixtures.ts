import {
    Abs,
    Cents,
    Count,
    Decimal,
    EMPTY_PEV,
    Grade,
    HALF_SCALER,
    IRRATIONAL_SPEV_BASE_PEV,
    Multiplier,
    Name,
    Quotient,
    Rank,
    Spev,
    Sum,
    UNISON,
} from "@sagittal/general"
import {BoundType, Ina, JiNotationBound, JiNotationBoundClass, JiNotationLevelId, Tinas} from "@sagittal/system"
import {JiNotationBoundClassAnalysis} from "../../../src/boundClass"
import {BoundEventConsolidation} from "../../../src/consolidateHistories/types"
import {BoundEvent, BoundHistory} from "../../../src/histories"
import {BoundEventAnalysis, BoundHistoryAnalysis} from "../../../src/history"
import {RANKS} from "../../../src/ranks"

const boundEventFixture: BoundEvent = {
    pitch: {pev: IRRATIONAL_SPEV_BASE_PEV, scaler: HALF_SCALER} as Spev<{rational: false}>,
    boundType: "" as BoundType,
    jiNotationLevel: "" as JiNotationLevelId,
    name: "" as Name<JiNotationBound>,
}

const boundEventAnalysisFixture: BoundEventAnalysis = {
    ...boundEventFixture,
    distance: 0 as Abs<Cents>,
    inaDistance: 0 as Multiplier<Ina>,
    rank: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    exact: false,
}

const boundHistoryAnalysisFixture: BoundHistoryAnalysis = {
    boundEventAnalyses: [],
    pitch: {pev: IRRATIONAL_SPEV_BASE_PEV, scaler: HALF_SCALER} as Spev<{rational: false}>,
    rank: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    grade: 0 as Grade<BoundHistory>,
    totalDistance: 0 as Sum<Abs<Cents>>,
    exact: false,
    totalInaDistance: 0 as Sum<Multiplier<Ina>>,
    possible: false,
    tinaError: 0 as Multiplier<Tinas>,
    initialPositionTinaDistance: 0 as Multiplier<Tinas>,
}

const boundEventConsolidationFixture: BoundEventConsolidation = {
    ...boundEventFixture,
    isPossibleBoundHistoryMember: false,
    isBestPossibleBoundHistoryMember: false,
    rankOfBestRankedMemberHistory: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    rankOfBestRankedEventInAnyMemberHistory: 0 as Decimal<{integer: true}> & Rank<BoundType>,
    nextBoundEvents: [] as Array<Name<JiNotationBound>>,
    exact: false,
}

const jiNotationBoundClassFixture: JiNotationBoundClass = {
    jiNotationLevels: [],
    pitch: {
        pev: EMPTY_PEV,
        scaler: [1, 1] as Quotient,
    } as Spev<{rational: false}>,
    boundType: BoundType.INA_MIDPOINT,
    name: "" as Name<JiNotationBound>,
}

const jiNotationBoundClassAnalysisFixture: JiNotationBoundClassAnalysis = {
    bestPossibleBoundHistoryAnalysis: boundHistoryAnalysisFixture,
    bestRank: RANKS[BoundType.INA_MIDPOINT],
    initialPosition: UNISON,
    initialPositionTinaDistance: 0 as Multiplier<Tinas>,
    bestPossibleBoundHistoryTotalDistance: 0 as Sum<Abs<Cents>>,
    bestPossibleBoundHistoryTotalInaDistance: 0 as Sum<Multiplier<Ina>>,
    boundHistoryConsolidation: {},
    possibleBoundHistoryCount: 0 as Count<BoundHistoryAnalysis>,
}

export {
    boundEventFixture,
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    boundEventConsolidationFixture,
    jiNotationBoundClassFixture,
    jiNotationBoundClassAnalysisFixture,
}
