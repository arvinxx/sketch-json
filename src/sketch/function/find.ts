import { AllLayers, Page, Selection, Document } from 'sketch/dom';

export const isArtboard = (layer: AllLayers | Document) =>
  layer.type === 'Artboard' || layer.type === 'SymbolMaster';

/**
 * 获取当前文档的相关上下文
 * @return {document , page , selection}
 */
export const documentContext = (): {
  document: Document;
  selection: Selection;
  page: Page;
} => {
  const document = Document.getSelectedDocument();

  const selection = document.selectedLayers;
  const page = document.selectedPage;
  return { document, selection, page };
};
