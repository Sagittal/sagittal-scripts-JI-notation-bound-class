import { Abs, Cents, Maybe, Multiplier, Name } from "@sagittal/general"
import {
    Sagitype,
    BoundClassId,
    CommaAnalysis,
    CommaClassId,
    Ina,
    JiNotationLevelId,
    Minas,
    SymbolSubsetId,
    Unicode,
} from "@sagittal/system"

// Building up to BoundedCommaClassIdPairs

type BoundedCommaClassIdPair = [Maybe<CommaClassId>, Maybe<CommaClassId>]

type BoundedCommaClassIdPairs = { boundClassId: BoundClassId } & Partial<
    Record<JiNotationLevelId, BoundedCommaClassIdPair>
>

// Building up to JiNotationBoundClassIdentifiers

interface BoundedCommaClassInfo {
    id: CommaClassId
    commaAnalysis: CommaAnalysis
    representativeSagittal: {
        sagitype: Sagitype
        unicode: Unicode
        smallestSymbolSubsetId: SymbolSubsetId
    }
    introducingJiNotationLevel: JiNotationLevelId
    minaName: Name<Minas>
    distance: Abs<Cents>
    inaDistance: Multiplier<Ina>
}

type BoundedCommaClassInfoPair = [Maybe<BoundedCommaClassInfo>, Maybe<BoundedCommaClassInfo>]

type BoundedCommaClassInfoPairs = { boundClassId: BoundClassId } & Partial<
    Record<JiNotationLevelId, BoundedCommaClassInfoPair>
>

interface JiNotationBoundClassIdentifiers {
    boundedCommaClassInfoPairs: BoundedCommaClassInfoPairs
    extremeLevelGreaterBoundedCommaClass: Sagitype
    extremeLevelLesserBoundedCommaClass: Sagitype
    greaterBoundedMinaName: Maybe<Name<Minas>>
    lesserBoundedMinaName: Maybe<Name<Minas>>
    cents: Cents
}

export {
    BoundedCommaClassInfo,
    BoundedCommaClassInfoPairs,
    JiNotationBoundClassIdentifiers,
    BoundedCommaClassIdPairs,
    BoundedCommaClassIdPair,
}
