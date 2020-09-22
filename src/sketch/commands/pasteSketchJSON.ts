import { UI } from 'sketch';
import { AllLayers, ChildLayer, Document, fromNative } from 'sketch/dom';
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import { fromSJSON } from 'from-sketch-json';

import { getTextFromClipboard } from '../function/clipboard';

const adjustFrame = (layer: AllLayers) => {
  switch (layer.type) {
    case 'Image':
    case 'ShapePath':
    case 'Artboard':
      break;
    case 'Group':
    case 'Page':
    case 'Shape':
    case 'SymbolMaster':
      if (layer.layers && layer.layers.length !== 0) {
        layer.layers.forEach(adjustFrame);
      } else {
        layer.adjustToFit();
      }
  }
};

const errorMsg = '[Sketch JSON]不是有效的 Sketch JSON 对象😶';

/**
 * 将单个 JSON 转换为 Sketch 对象
 * @param layer
 */
const transformToSketch = (layer: SketchFormat.AnyObject) => {
  if (!layer._class) {
    UI.message(errorMsg);
    return;
  }
  const nativeLayer = fromSJSON(layer as any);
  const sketchObj = fromNative(nativeLayer) as ChildLayer;

  adjustFrame(sketchObj);
  Document.getSelectedDocument().selectedPage.layers.push(sketchObj);
};

/**
 * 复制 JSON 为 Sketch 图层
 **/
export const pasteSketchJSON = () => {
  const text = getTextFromClipboard();
  try {
    const json: SketchFormat.AnyObject | SketchFormat.AnyObject[] = JSON.parse(
      text
    );
    if (json instanceof Array) {
      for (const obj of json) {
        transformToSketch(obj);
      }
    } else {
      transformToSketch(json);
    }
  } catch (e) {
    const { message } = e;

    if (<string>message.includes('JSON Parse error: Unexpected identifier')) {
      UI.message(errorMsg);
    } else {
      UI.message(e);
    }
  }
};
