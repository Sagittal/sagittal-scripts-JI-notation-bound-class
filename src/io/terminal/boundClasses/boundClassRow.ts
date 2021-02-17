import {computeCentsFromPitch, formatDecimal, formatIntegerDecimal, Row} from "@sagittal/general"
import {alignSagitype, JiNotationBoundClassEntry} from "@sagittal/system"
import {JiNotationBoundClassAnalysis} from "../../../boundClass"
import {extractJiNotationBoundClassIdentifiers} from "../boundClassIdentifiers"
import {extractJiNotationLevelDistances} from "./levelDistances"
import {extractJiNotationLevelRanks} from "./levelRanks"
import {formatMinaName} from "./minaName"

const computeJiNotationBoundClassRow = (
    jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis,
    jiNotationBoundClassEntry: JiNotationBoundClassEntry,
): Row<{of: JiNotationBoundClassAnalysis}> => {
    let jiNotationBoundClassRow: Row<{of: JiNotationBoundClassAnalysis}>
    const jiNotationBoundClassIdentifiers = extractJiNotationBoundClassIdentifiers(jiNotationBoundClassEntry)

    const {
        extremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass,
        cents,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    } = jiNotationBoundClassIdentifiers
    const {
        bestRank,
        bestPossibleBoundHistoryAnalysis,
        initialPosition,
        initialPositionTinaDistance,
        bestPossibleBoundHistoryTotalDistance,
        bestPossibleBoundHistoryTotalInaDistance,
    } = jiNotationBoundClassAnalysis

    const [
        mediumLevelRank,
        highLevelRank,
        ultraLevelRank,
        extremeLevelRank,
    ] = extractJiNotationLevelRanks(bestPossibleBoundHistoryAnalysis)

    const [
        bestPossibleBoundHistoryMediumDistance,
        bestPossibleBoundHistoryHighDistance,
        bestPossibleBoundHistoryUltraDistance,
        bestPossibleBoundHistoryExtremeDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundHistoryAnalysis)

    const [
        bestPossibleBoundHistoryMediumInaDistance,
        bestPossibleBoundHistoryHighInaDistance,
        bestPossibleBoundHistoryUltraInaDistance,
        bestPossibleBoundHistoryExtremeInaDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundHistoryAnalysis, {ina: true})

    const boundClassId = jiNotationBoundClassEntry[0]

    jiNotationBoundClassRow = [
        boundClassId,
        formatMinaName(lesserBoundedMinaName),
        formatMinaName(greaterBoundedMinaName),
        alignSagitype(extremeLevelLesserBoundedCommaClass),
        alignSagitype(extremeLevelGreaterBoundedCommaClass),
        mediumLevelRank,
        highLevelRank,
        ultraLevelRank,
        extremeLevelRank,
        formatIntegerDecimal(bestRank, {align: true}),
        bestPossibleBoundHistoryMediumDistance,
        bestPossibleBoundHistoryHighDistance,
        bestPossibleBoundHistoryUltraDistance,
        bestPossibleBoundHistoryExtremeDistance,
        formatDecimal(bestPossibleBoundHistoryTotalDistance, {align: true}),
        bestPossibleBoundHistoryMediumInaDistance,
        bestPossibleBoundHistoryHighInaDistance,
        bestPossibleBoundHistoryUltraInaDistance,
        bestPossibleBoundHistoryExtremeInaDistance,
        formatDecimal(bestPossibleBoundHistoryTotalInaDistance, {align: true}), // These are ¢ but b/c the header
        formatDecimal(cents, {align: true}),                                    // Specifically states they are ¢
        formatDecimal(computeCentsFromPitch(initialPosition), {align: true}),   // And this is a very dense table
        formatDecimal(initialPositionTinaDistance, {align: true}),              // We're saving space and no ¢ signs
    ] as Row as Row<{of: JiNotationBoundClassAnalysis}>

    return jiNotationBoundClassRow
}

export {
    computeJiNotationBoundClassRow,
}
