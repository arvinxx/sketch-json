declare const NSUTF8StringEncoding: number;
declare const NSViewWidthSizable: number;
declare const NSViewHeightSizable: number;
declare const NSTitledWindowMask: number;
declare const NSWindowStyleMaskClosable: number;
declare const NSResizableWindowMask: number;
declare const NSBackingStoreBuffered: number;
declare const NSLayoutAttributeHeight: number;
declare const NSLayoutRelationEqual: number;
declare const NSLayoutAttributeTop: any;
declare const NSPasteboardTypeString: unique symbol;

declare function NSClassFromString(name: string): any;
declare function NSMakeRect(x: number, y: number, w: number, h: number): NSRect;
declare function CGRectMake(x: number, y: number, w: number, h: number): CGRect;
declare function NSMakeSize(w: number, h: number): NSSize;

declare class NSSize {
  width: number;
  height: number;
}
declare class AFAmazonS3Manager {}
declare class BCCache {}
declare class BCColorPickerBaseView {}
declare class BCDownloadManager {}
declare class BCEdgePaddings {}
declare class BCHSBColorPicker {}
declare class BCJSONDecoder {}
declare class BCJSONEncoder {}
declare class BCJSONZippedDecoder {}
declare class BCJSONZippedEncoder {}
declare class BCKeyEventActionTableView {}
declare class BCObjectPool {}
declare class BCPopover {}
declare class BCRangeMap {}
declare class BCRect {}
declare class BCSideBarViewController {}
declare class BCSketchToolRunner {}
declare class BCStructuredFile {}
declare class BCToolbarPopover {}
declare class BCToolbarPopoverContentViewController {}
declare class BCWindowBadge {}
declare class CABasicAnimation {}
declare class CALayer {}
declare class CGAffineTransform {}
declare class CGPoint {
  x: number;
  y: number;
}
declare class CGRect {
  origin: CGPoint;
  size: CGSize;
}
declare class CGSize {}
declare class CHProgressSheet {}
declare class CHSheetController {}
declare class CHSingletonObject {}
declare class CHWindowController {}
/**
 * CocoaScript 方法
 */
declare class COScript {
  /**
   * 设置是否持久化
   */
  setShouldKeepAround: (keepAround: boolean) => void;

  /**
   * 预处理源
   */
  preprocessedSource: string;

  static currentCOScript(): COScript;
  /**
   * 返回当前脚本是否持久化
   */
  shouldKeepAround(): boolean;
  /**
   * 返回处理后的代码
   */
  processedSource(): string;
  coreModuleMap: any;
  akToolbarButtonItemType: any;
  hash: any;
  superclass: any;
  description: any;
  debugDescription: any;
  attributeKeys(): any;

  associatedObject: any;
  archiveReferenceIdentifier_bc: any;
  immutableModelObject: any;
  exposedBindings: any;
  BCCache_selfOrDeferredObject: any;
  BCCache_unblockingSelfOrDeferredObject: any;
  classDescription: any;
  toOneRelationshipKeys: any;
  toManyRelationshipKeys: any;
  observationInfo: any;
  classForKeyedArchiver: any;
  autoContentAccessingProxy: any;
  scriptingProperties: any;
  classCode: any;
  className: any;

  /**
   * 是否需要预处理
   */
  shouldPreprocess(): boolean;
  env(): NSDictionary;
}
declare class DKDistortionTransform {}
declare class ECLogChannel {}
declare class ECLogHandler {}
declare class NSAffineTransform {}
declare class NSArray<T = NSObject> extends Array {
  [index: number]: T;
  count(): number;
  objectAtIndex(index: number): T;

  static arrayWithArray(array: any): NSArray;
}
declare class NSArrayController {}
declare class NSATSTypesetter {}
declare class NSAttributedString {
  static attributedStringWithString_attributes_(content: any, attribs: any);
}

declare class NSBezierPath {}
declare class NSBitmapImageRep {}
declare class NSBundle {}
declare class NSButton {}
declare class NSButtonCell {}
declare class NSCache {}
declare class NSClipView {}
declare class NSCollectionView {}
declare class NSCollectionViewItem {}
/**
 * 原生颜色类型
 * @see https://developer.apple.com/documentation/appkit/nscolor
 */
declare class NSColor extends NSObject {
  /**
   * 获取背景颜色
   */
  static windowBackgroundColor(): WindowBackgroundColor;

  static colorWithDeviceRed_green_blue_alpha(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ): NSColor;
}
declare class WindowBackgroundColor extends NSColor {}

declare class NSColorSpace {}
declare class NSColorWell {}
declare class NSComboBox {}
declare class NSControl {}
declare class NSCursor {}
declare class NSData {}
declare class NSDate {}
/**
 * 线程目录
 */
declare class NSDictionary {
  [key: string]: any;
}
declare class NSDocument {}
declare class NSDocumentController {}
declare class NSEdgeInsets {}
declare class NSError {}
declare class NSEvent {}
declare class NSFormatter {}
declare class NSGradient {}
declare class NSGraphicsContext {}
declare class NSHashTable {}
declare class NSImage {}
declare class NSImageCell {}
declare class NSImageView {}
declare class NSIndexPath {}
declare class NSIndexSet {}
declare class NSKeyedArchiver {}
declare class NSKeyedUnarchiver {}
declare class NSLayoutConstraint {
  static constraintWithItem_attribute_relatedBy_toItem_attribute_multiplier_constant_(
    view1: NSView,
    attr1: number,
    relation: number,
    view2: NSView,
    attr2: number,
    multiplier: number,
    c: number
  ): NSLayoutConstraint;
}
declare class NSLayoutManager {}
declare class NSMapTable {}
declare class NSMenu {}
declare class NSMenuItem {}
declare class NSMutableArray {}
declare class NSMutableAttributedString extends NSObject {
  static alloc(): NSMutableAttributedString;
  appendAttributedString(newString: any): void;
}
declare class NSMutableData {}
declare class NSMutableDictionary {}
declare class NSMutableSet {}
declare class NSMutableString {}
declare class NSNib {}
declare class NSNumber extends Number {}
declare class NSNumberFormatter {}
declare class NSObject {
  /**
   * Implemented by subclasses to initialize a new object (the receiver)
   * immediately after memory for it has been allocated.
   *
   */
  init(): this;

  alloc(): this;
  class(): any;
  className(): NSString;
  isKindOfClass<T extends NSObject>(arg: { new (): T }): this is T;
}
declare class NSOperation {}
declare class NSOperationQueue {}
declare class NSPanGestureRecognizer {}
declare class NSPopoverTouchBarItem {}
declare class NSPopUpButton {}
declare class NSPopUpButtonCell {}
declare class NSPredicate {}
declare class NSProgressIndicator {}

/**
 *  NSResponder 类型
 * @see https://developer.apple.com/documentation/appkit/nsresponder
 */
declare class NSResponder extends NSObject {}
declare class NSScrollView {}
declare class NSScrubberItemView {}
declare class NSSearchField {}
declare class NSSecureTextField {}
declare class NSSegmentedControl {}
declare class NSSet {}
declare class NSSlider {}
declare class NSSplitView {}

/**
 * UI Layout 方向
 */
declare enum NSUserInterfaceLayoutOrientation {
  horizontal,
  vertical,
}

declare enum NSStackViewDistribution {
  equalCentering,
  equalSpacing,
  fill,
  fillEqually,
  fillProportionally,
  gravityAreas,
}

declare class NSStackView extends NSView {
  /**
   * The horizontal or vertical layout direction of the stack view.
   */
  orientation: NSUserInterfaceLayoutOrientation;

  setOrientation(orientation: NSUserInterfaceLayoutOrientation): void;

  distribution: NSStackViewDistribution;

  /**
   * 初始化
   */
  static alloc(): NSStackView;

  /**
   * The minimum spacing, in points, between adjacent views in the stack view.
   * @see https://developer.apple.com/documentation/appkit/nsstackview/1488945-spacing
   */
  spacing: CGFloat;
  setSpacing(num: number): void;

  setBackgroundColor(color: NSColor): void;
}

declare class NSStoryboard {}
declare class NSString extends String {
  static stringWithContentsOfFile_encoding_error(...args: any[]): NSString;
  static stringWithFormat(...args: any[]): NSString;
  static stringWithString(rawString: string): NSString;

  dataUsingEncoding(NSUTF8StringEncoding: number): any;
}
declare class NSTableCellView {}
declare class NSTableView {}
declare class NSTextField {}
declare class NSTextFieldCell {}
declare class NSTextStorage {}
declare class NSTextView {}
declare class NSTimer {}
declare class NSToolbar {}
declare class NSToolbarItem {}
declare class NSTouchBar {}
declare class NSTouchBarItem {}
declare class NSUndoManager {}
declare class NSURL {
  static URLWithString(url: string): NSURL;
  static fileURLWithPath(path: string): NSURL;
}
declare class NSURLSession {}
/**
 *  NSView 类
 *  @see https://developer.apple.com/documentation/appkit/nsview
 */
declare class NSView extends NSResponder {
  adjustSubviews(): void;

  subviews(): NSArray<NSView>;
  setSubviews(views: NSArray<NSView>);
  identifier(): string;
  setIdentifier(id: string): void;
  initWithFrame<T = NSView>(rect: NSRect): T;

  /**
   * View是否翻转坐标系
   * https://developer.apple.com/documentation/appkit/nsview/1483532-flipped?language=occ
   */
  readonly flipped: boolean;
  setFlipped(boolean): void;
}
declare class NSViewController {}
declare class NSWindow extends NSResponder {
  contentView(): NSView;
}
declare class NSWindowController {}
declare class NSWorkspace {
  static sharedWorkspace(): NSWorkspace;
  openURL(url: NSURL): boolean;
}
declare class NSXMLElement {}
declare class PDFFunction {}
declare class PDFParser {}
declare class PDFPattern {}
declare class PDFScanner {}
declare class SCKAPIOperation {}
declare class SCKShare {}
declare class SMKMirrorClient {}
declare class SMKMirrorController {}
declare class SnapItem {}
declare class SVGImporter {}

declare class _CHTransformStruct {}
declare class SCKAvatar {}
declare class SCKShareUploadOperation {}
declare class NSProgress {}
declare class NSPanel {
  static alloc(): any;
}

declare class CATextLayer {}
declare class _NSRange {}
declare class NSRange {}
declare class NSValue {}
declare class CGVector {
  dx: CGFloat;
  dy: CGFloat;
}
declare class CGFloat extends Number {}
declare class NSCopying extends NSObject {}
declare class NSFileWrapper {}
declare class NSURLSessionDataTask {}
declare class NSURLProtocol {}
declare class NSURLSessionTask {}
declare class NSMutableURLRequest {}
declare class SCKAPIAuthentication {}
declare class SCKAPISignable {}
declare class SCKArtboardViewport {}
declare class NSURLRequest {
  static requestWithURL(url: NSURL): NSURLRequest;
}
declare class NSURLSessionDownloadTask {}
declare class NSUUID {}
declare class NSURLSessionUploadTask {}
declare class SCKShareUploadDataSource {}

declare class WKWebView extends NSView {
  static alloc(): {
    initWithFrame_configuration(
      CGRect: CGRect,
      config: WKWebViewConfiguration
    ): WKWebView;
  };
  loadRequest(request: NSURLRequest): void;
  loadFileURL_allowingReadAccessToURL(url: NSURL, isDirectory: boolean): void;
  setAutoresizingMask(mask: number): void;
  evaluateJavaScript_completionHandler(js: string, cb: () => void): void;
}

/**
 * @see https://developer.apple.com/documentation/webkit/wkwebviewconfiguration
 */
declare class WKWebViewConfiguration {
  static alloc(): any;
}
declare class SCKCloudDocument {}

declare class NSValueTransformer {}
declare class NSTableRowView {}
declare class SCKAPIEnvironment {}
declare class SCKUser {}
declare class SCKOrganization {}
declare class MSCloudSharesControllerDelegate {}
declare class MSCollapsibleHeaderInspectorItemTarget {}
declare class MSColorHexStringTransformerDelegate {}
declare class MSDataSupplierDelegate {}
declare class MSGPUTexture {}
declare class MSInspectorFlowHandlerDelegate {}
declare class NSSegmentedCell {}
declare class NSSliderCell {}
declare class MSInspectorTableViewManagerDelegate {}
declare class MSLayerCoordinateSpace {}
declare class NSEnumerator {}
declare class MSInspectorMathValueAdaptorDelegate {}
declare class MTLCommandBuffer {}
declare class CAMetalDrawable {}
declare class MTLRenderPipelineState {}
declare class MTLCommandQueue {}
declare class CAMetalLayer {}
declare class MTLLibrary {}
declare class _opaque_pthread_mutex_t {}
declare class MTLTexture {}
declare class _TtC17SketchControllers15MSResizeSession {}
declare class NSOpenGLLayer {}
declare class NSOpenGLContext {}
declare class MSTiledRendererHostView {}
declare class NSTrackingArea {}
declare class NSToolbarItemGroup {}
declare class NSRect {}
/**
 * 实例线程
 */
declare class NSThread {
  static mainThread(): NSThread;
  threadDictionary(): NSDictionary;
}
declare class NSPasteboard {
  static generalPasteboard(): NSPasteboard;
  stringForType(t: typeof NSPasteboardTypeString): NSString;
  setString_forType(
    data: string | NSString,
    t: typeof NSPasteboardTypeString
  ): void;
}
declare class NSCollectionViewFlowLayout {}
declare class NSCollectionViewLayoutAttributes {}
