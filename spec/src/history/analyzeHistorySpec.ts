import {
    Abs,
    addScaledVectors,
    APOTOME,
    Cents,
    computePitchFromCents,
    Ed,
    Irrational,
    IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
    Multiplier,
    multiply,
    Quotient,
    ScaledVector,
    Sum,
} from "@sagittal/general"
import {
    BoundType,
    EXTREME_EDA,
    Ina,
    JiNotationBoundClass,
    JiNotationLevelId,
    TINA_CENTS,
    Tinas,
} from "@sagittal/system"
import { computeInitialPosition } from "../../../src/boundClass/initialPosition"
import { BoundHistory } from "../../../src/histories"
import { analyzeHistory } from "../../../src/history"
import { RANKS } from "../../../src/ranks"
import {
    boundEventAnalysisFixture,
    boundEventFixture,
    jiNotationBoundClassFixture,
} from "../../helpers/src/fixtures"

describe("analyzeHistory", (): void => {
    const actualJiNotationBoundPitch = {
        vector: APOTOME.vector,
        scaler: [25.5, EXTREME_EDA as Ed],
    } as ScaledVector<Irrational>
    let boundHistory: BoundHistory
    let pitch: ScaledVector<Irrational>
    let jiNotationBoundClass: JiNotationBoundClass
    let initialPosition

    it("returns its bound class history but with its event augmented with analysis properties, and computes the final position of the bound class history, and its distance from the initial position, and its overall distance the JI notation bound class moved across all the bound class events", (): void => {
        pitch = addScaledVectors(actualJiNotationBoundPitch, {
            vector: IRRATIONAL_SCALED_VECTOR_BASE_VECTOR,
            scaler: [1, 2400] as Quotient, // 2^(1/2400) = 0.5¢
        } as ScaledVector<Irrational>)
        boundHistory = [
            {
                ...boundEventFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevelId.EXTREME,
            },
            {
                ...boundEventFixture,
                pitch,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevelId.INSANE,
            },
        ]
        jiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: actualJiNotationBoundPitch,
            jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        }
        initialPosition = computeInitialPosition(jiNotationBoundClass)

        const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

        expect(actual.boundEventAnalyses).toEqual([
            {
                ...boundEventAnalysisFixture,
                pitch,
                boundType: BoundType.INA_MIDPOINT,
                rank: RANKS[BoundType.INA_MIDPOINT],
                exact: false,
                distance: 0 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
                jiNotationLevel: JiNotationLevelId.EXTREME,
            },
            {
                ...boundEventAnalysisFixture,
                pitch,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                exact: false,
                distance: 0 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
                jiNotationLevel: JiNotationLevelId.INSANE,
            },
        ])
        expect(actual.pitch).toEqual(pitch)
        expect(actual.rank).toBe(RANKS[BoundType.SIZE_CATEGORY_BOUND])
        expect(actual.totalDistance).toBe(0 as Sum<Abs<Cents>>)
        expect(actual.initialPositionTinaDistance).toBeCloseToTyped(3.710191 as Multiplier<Tinas>)
    })

    describe("when the bound class history's position matches the actual JI notation bound class position", (): void => {
        it("returns the bound class history's events with their rank, plus true for the possible property and a 0 tina error", (): void => {
            pitch = actualJiNotationBoundPitch
            boundHistory = [
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevelId.INSANE,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBeTruthy()
            expect(actual.tinaError).toBeCloseToTyped(0 as Multiplier<Tinas>)
        })
    })

    describe(`when the bound class history's position does not match the actual JI notation bound class position, returns the bound class history plus false for the possible property and the error in tinas`, (): void => {
        it("works when the position is greater than the actual JI notation bound class position by less than a tina", (): void => {
            const expectedTinaError = (2 / 5) as Multiplier<Tinas>
            pitch = addScaledVectors(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA_CENTS, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBeFalsy()
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is greater than the actual JI notation bound class position by more than a tina", (): void => {
            const expectedTinaError = (5 / 2) as Multiplier<Tinas>
            pitch = addScaledVectors(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA_CENTS, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.INA_MIDPOINT,
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBeFalsy()
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound class position by less than a tina", (): void => {
            const expectedTinaError = (-2 / 5) as Multiplier<Tinas>
            pitch = addScaledVectors(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA_CENTS, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    jiNotationLevel: JiNotationLevelId.INSANE,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBeFalsy()
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })

        it("works when the position is below the actual JI notation bound class position by more than a tina", (): void => {
            const expectedTinaError = (-5 / 2) as Multiplier<Tinas>
            pitch = addScaledVectors(
                actualJiNotationBoundPitch,
                computePitchFromCents(multiply(TINA_CENTS, expectedTinaError)),
            )
            boundHistory = [
                {
                    ...boundEventFixture,
                    boundType: BoundType.INA_MIDPOINT,
                    pitch,
                },
                {
                    ...boundEventFixture,
                    pitch,
                    boundType: BoundType.COMMA_MEAN,
                },
            ]
            jiNotationBoundClass = {
                ...jiNotationBoundClassFixture,
                pitch: actualJiNotationBoundPitch,
                jiNotationLevels: [JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
            }
            initialPosition = computeInitialPosition(jiNotationBoundClass)

            const actual = analyzeHistory(boundHistory, jiNotationBoundClass, initialPosition)

            expect(actual.possible).toBeFalsy()
            expect(actual.tinaError).toBeCloseToTyped(expectedTinaError)
        })
    })
})
