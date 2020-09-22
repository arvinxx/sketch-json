declare const NSFontWeightRegular;
declare const NSFontWeightBold;
declare const NSFontWeightUltraLight;
declare const NSFontWeightThin;
declare const NSFontWeightLight;
declare const NSFontWeightMedium;
declare const NSFontWeightSemibold;
declare const NSFontWeightHeavy;
declare const NSFontWeightBlack;

declare class NSFont {
  familyName(): string;

  static systemFontOfSize_weight(fontSize: number, fontWeight: any): NSFont;

  static systemFontOfSize(size: number): NSFont;

  static fontWithName_size(
    familyName: string | object,
    fontSize: number
  ): NSFont;

  static fontWithDescriptor_size(fontDescriptor: any, fontSize: number): NSFont;

  fontDescriptor(): any;
}

declare const NSDataBase64EncodingEndLineWithCarriageReturn: any;
declare const NSFontTraitsAttribute: any;
declare const NSFontSymbolicTrait: any;
declare const NSFontItalicTrait: any;
declare const NSFontCondensedTrait: any;
declare const NSFontWeightTrait: any;
declare const NSFontManager: any;

type LineHeight =
  | number
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'normal'
  | string
  | 0
  | LineHeightProperty<string | 0>[]
  | ((...args: any[]) => any)
  | (() => number)
  | string;

declare class NSMutableParagraphStyle extends NSObject {
  static alloc(): NSMutableParagraphStyle;

  minimumLineHeight: LineHeight;
  lineHeightMultiple: number;
  maximumLineHeight: LineHeight;
  alignment: BorderPosition.Center | any;
}
