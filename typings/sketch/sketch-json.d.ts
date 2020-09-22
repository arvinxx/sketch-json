// Sketchy things
export type SketchLayer = any;

export type WrappedSketchLayer = {
  sketchObject: SketchLayer;
};

export type MSArray<T> = {
  [key: number]: T;
  length: number;
};

export type SketchPage = {
  name: () => NSString;
  setName: (name: string) => void;
  layers: () => Array<SketchLayer>;
  children: () => Array<SketchLayer>;
};

export type SketchStyle = any;

export type SketchSharedStyleContainer = {
  objects: () => any[];
  setObjects: (objects: Array<SketchStyle>) => void;
  addSharedStyleWithName_firstInstance: (name: string, ins: SketchStyle) => any;
  addSharedObject: (ins: any) => any;
};

type MSGradient = any;
type MSColor = any;

type SketchAssetCollection = {
  colors: () => Array<MSColor>;
  gradients: () => Array<MSGradient>;
};

export type SketchDocumentData = {
  delegate: () => SketchDocument;
  assets: () => SketchAssetCollection;
  layerStyles: () => void;
  layerTextStyles: () => SketchSharedStyleContainer;
  layerSymbols: () => void;
  symbolMap: () => { [symbolID: string]: SketchLayer };
  removePageAtIndex: (index: number) => void;
  addBlankPage: () => SketchPage;
  currentPage: () => SketchPage;
  setCurrentPage: (page: SketchPage) => void;
  pages: () => MSArray<SketchPage>;
  symbolsPageOrCreateIfNecessary: () => SketchPage;
};

export type SketchDocument = {
  documentData: () => SketchDocumentData;
  showMessage: (message: string) => void;
};

export type WrappedSketchDocument = {
  sketchObject: SketchDocument | SketchDocumentData;
};

export type SketchContext = {
  document: SketchDocument;
  actionContext: {
    document?: SketchDocument;
  };
};

// Reacty things

export type Size = { width: number; height: number };

export type LayoutInfo = {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
  direction?: 'ltr' | 'rtl';
};

// undefined: max content
// exactly: fill available space
// at-most: fit content
export type MeasureMode = 'undefined' | 'exactly' | 'at-most';

export type ResizeConstraints = {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  fixedHeight?: boolean;
  fixedWidth?: boolean;
};
