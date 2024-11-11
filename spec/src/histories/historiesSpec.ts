import { APOTOME, HALF_SCALER, Name } from "@sagittal/general"
import {
    BoundType,
    EXTREME_EDA,
    INSANE_EDA,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
    MEDIUM_EDA,
    ULTRA_EDA,
} from "@sagittal/system"
import { BoundHistory, computeHistories } from "../../../src/histories"
import { jiNotationBoundClassFixture } from "../../helpers/src/fixtures"

describe("computeHistories", (): void => {
    it("given a JI notation bound class, returns an array of all of its possible histories", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                vector: APOTOME.vector,
                scaler: [67.5, INSANE_EDA],
            },
            jiNotationLevels: [
                JiNotationLevelId.MEDIUM,
                JiNotationLevelId.ULTRA,
                JiNotationLevelId.EXTREME,
                JiNotationLevelId.INSANE,
            ],
        } as JiNotationBoundClass

        const actual = computeHistories(jiNotationBoundClass)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [1.5, MEDIUM_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [4.5, ULTRA_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [19.5, EXTREME_EDA],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [65.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [66.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [67.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [68.5, INSANE_EDA],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        vector: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    },
                },
            ],
        ] as BoundHistory[]

        expect(actual).toEqual(expected)
    })

    it("works for the final JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                vector: APOTOME.vector,
                scaler: [404.5, INSANE_EDA],
            },
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        } as JiNotationBoundClass

        const actual = computeHistories(jiNotationBoundClass)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [402.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [403.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [404.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [402.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [403.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [404.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: [10.5, 21] },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [402.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [403.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [404.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [116.5, 233],
                    },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [402.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [403.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {
                        vector: APOTOME.vector,
                        scaler: [404.5, 809],
                    },
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: { vector: APOTOME.vector, scaler: HALF_SCALER },
                },
            ],
        ] as BoundHistory[]

        expect(actual).toEqual(expected)
    })
})
