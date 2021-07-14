import { UI } from 'sketch';
import { AllLayers, ChildLayer, Document, fromNative } from 'sketch/dom';
import SketchFormat from '@sketch-hq/sketch-file-format-ts';
import { fromSJSON } from 'from-sketch-json';

import { getTextFromClipboard } from '../function/clipboard';
import { documentContext } from '@/sketch/function/find';

/* istanbul ignore file */
/**
 * 似乎因为sketch环境没有 crypto 模块 因此没法直接使用 uuid 模块
 */
const uuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

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

const centerLayer = (layer: ChildLayer) => {
  const { width, height } = layer.frame;

  const { document } = documentContext();
  if (!document) return;

  const canvasView = document.sketchObject.contentDrawView();

  const { x, y } = canvasView.viewCenterInAbsoluteCoordinatesForViewPort(
    canvasView.viewPort()
  );
  layer.frame.x = x - width / 2;
  layer.frame.y = y - height / 2;
};

/**
 * 将单个 JSON 转换为 Sketch 对象
 * @param layer
 * @param center
 */
const transformToSketch = (layer: SketchFormat.AnyLayer, center = true) => {
  if (!layer._class) {
    UI.message(errorMsg);
    return;
  }
  const do_objectID = uuid();
  Object.assign(layer, { do_objectID });
  const nativeLayer = fromSJSON(layer as any);
  const sketchObj = fromNative(nativeLayer) as ChildLayer;

  adjustFrame(sketchObj);
  Document.getSelectedDocument().selectedPage.layers.push(sketchObj);
  if (center) {
    centerLayer(sketchObj);
  }
  return sketchObj;
};

/**
 * 复制 JSON 为 Sketch 图层
 **/
export const pasteSketchJSON = () => {
  const text = getTextFromClipboard();
  try {
    const json: SketchFormat.AnyLayer | SketchFormat.AnyLayer[] =
      JSON.parse(text);
    if (json instanceof Array) {
      for (const obj of json) {
        transformToSketch(obj, false);
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
