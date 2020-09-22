/// <reference types="node" />

interface DefaultFontFamily {
  /**
   * Defaults to `Times New Roman`.
   */
  standard?: string;
  /**
   * Defaults to `Times New Roman`.
   */
  serif?: string;
  /**
   * Defaults to `Arial`.
   */
  sansSerif?: string;
  /**
   * Defaults to `Courier New`.
   */
  monospace?: string;
  /**
   * Defaults to `Script`.
   */
  cursive?: string;
  /**
   * Defaults to `Impact`.
   */
  fantasy?: string;
}

interface WebPreferences {
  /**
   * Whether to enable DevTools. If it is set to `false`, can not use
   * `BrowserWindow.webContents.openDevTools()` to open DevTools. Default is `true`.
   */
  devTools?: boolean;
  /**
   * Whether node integration is enabled. Default is `false`.
   */
  nodeIntegration?: boolean;
  /**
   * Whether node integration is enabled in web workers. Default is `false`. More
   * about this can be found in Multithreading.
   */
  nodeIntegrationInWorker?: boolean;
  /**
   * Experimental option for enabling Node.js support in sub-frames such as iframes
   * and child windows. All your preloads will load for every iframe, you can use
   * `process.isMainFrame` to determine if you are in the main frame or not.
   */
  nodeIntegrationInSubFrames?: boolean;
  /**
   * Specifies a script that will be loaded before other scripts run in the page.
   * This script will always have access to node APIs no matter whether node
   * integration is turned on or off. The value should be the absolute file path to
   * the script. When node integration is turned off, the preload script can
   * reintroduce Node global symbols back to the global scope. See example here.
   */
  preload?: string;
  /**
   * If set, this will sandbox the renderer associated with the window, making it
   * compatible with the Chromium OS-level sandbox and disabling the Node.js engine.
   * This is not the same as the `nodeIntegration` option and the APIs available to
   * the preload script are more limited. Read more about the option here.
   */
  sandbox?: boolean;
  /**
   * Whether to enable the `remote` module. Default is `true`.
   */
  enableRemoteModule?: boolean;

  /**
   * Sets the session used by the page according to the session's partition string.
   * If `partition` starts with `persist:`, the page will use a persistent session
   * available to all pages in the app with the same `partition`. If there is no
   * `persist:` prefix, the page will use an in-memory session. By assigning the same
   * `partition`, multiple pages can share the same session. Default is the default
   * session.
   */
  partition?: string;
  /**
   * When specified, web pages with the same `affinity` will run in the same renderer
   * process. Note that due to reusing the renderer process, certain `webPreferences`
   * options will also be shared between the web pages even when you specified
   * different values for them, including but not limited to `preload`, `sandbox` and
   * `nodeIntegration`. So it is suggested to use exact same `webPreferences` for web
   * pages with the same `affinity`. _This property is experimental_
   */
  affinity?: string;
  /**
   * The default zoom factor of the page, `3.0` represents `300%`. Default is `1.0`.
   */
  zoomFactor?: number;
  /**
   * Enables JavaScript support. Default is `true`.
   */
  javascript?: boolean;
  /**
   * When `false`, it will disable the same-origin policy (usually using testing
   * websites by people), and set `allowRunningInsecureContent` to `true` if this
   * options has not been set by user. Default is `true`.
   */
  webSecurity?: boolean;
  /**
   * Allow an https page to run JavaScript, CSS or plugins from http URLs. Default is
   * `false`.
   */
  allowRunningInsecureContent?: boolean;
  /**
   * Enables image support. Default is `true`.
   */
  images?: boolean;
  /**
   * Make TextArea elements resizable. Default is `true`.
   */
  textAreasAreResizable?: boolean;
  /**
   * Enables WebGL support. Default is `true`.
   */
  webgl?: boolean;
  /**
   * Whether plugins should be enabled. Default is `false`.
   */
  plugins?: boolean;
  /**
   * Enables Chromium's experimental features. Default is `false`.
   */
  experimentalFeatures?: boolean;
  /**
   * Enables scroll bounce (rubber banding) effect on macOS. Default is `false`.
   */
  scrollBounce?: boolean;
  /**
   * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`
   * to enable. The full list of supported feature strings can be found in the
   * RuntimeEnabledFeatures.json5 file.
   */
  enableBlinkFeatures?: string;
  /**
   * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`
   * to disable. The full list of supported feature strings can be found in the
   * RuntimeEnabledFeatures.json5 file.
   */
  disableBlinkFeatures?: string;
  /**
   * Sets the default font for the font-family.
   */
  defaultFontFamily?: DefaultFontFamily;
  /**
   * Defaults to `16`.
   */
  defaultFontSize?: number;
  /**
   * Defaults to `13`.
   */
  defaultMonospaceFontSize?: number;
  /**
   * Defaults to `0`.
   */
  minimumFontSize?: number;
  /**
   * Defaults to `ISO-8859-1`.
   */
  defaultEncoding?: string;
  /**
   * Whether to throttle animations and timers when the page becomes background. This
   * also affects the Page Visibility API. Defaults to `true`.
   */
  backgroundThrottling?: boolean;
  /**
   * Whether to enable offscreen rendering for the browser window. Defaults to
   * `false`. See the offscreen rendering tutorial for more details.
   */
  offscreen?: boolean;
  /**
   * Whether to run Electron APIs and the specified `preload` script in a separate
   * JavaScript context. Defaults to `false`. The context that the `preload` script
   * runs in will still have full access to the `document` and `window` globals but
   * it will use its own set of JavaScript builtins (`Array`, `Object`, `JSON`, etc.)
   * and will be isolated from any changes made to the global environment by the
   * loaded page. The Electron API will only be available in the `preload` script and
   * not the loaded page. This option should be used when loading potentially
   * untrusted remote content to ensure the loaded content cannot tamper with the
   * `preload` script and any Electron APIs being used. This option uses the same
   * technique used by Chrome Content Scripts. You can access this context in the dev
   * tools by selecting the 'Electron Isolated Context' entry in the combo box at the
   * top of the Console tab.
   */
  contextIsolation?: boolean;
  /**
   * Whether to use native `window.open()`. Defaults to `false`. Child windows will
   * always have node integration disabled unless `nodeIntegrationInSubFrames` is
   * true. **Note:** This option is currently experimental.
   */
  nativeWindowOpen?: boolean;
  /**
   * Whether to enable the `<webview>` tag. Defaults to `false`. **Note:** The
   * `preload` script configured for the `<webview>` will have node integration
   * enabled when it is executed so you should ensure remote/untrusted content is not
   * able to create a `<webview>` tag with a possibly malicious `preload` script. You
   * can use the `will-attach-webview` event on webContents to strip away the
   * `preload` script and to validate or alter the `<webview>`'s initial settings.
   */
  webviewTag?: boolean;
  /**
   * A list of strings that will be appended to `process.argv` in the renderer
   * process of this app.  Useful for passing small bits of data down to renderer
   * process preload scripts.
   */
  additionalArguments?: string[];
  /**
   * Whether to enable browser style consecutive dialog protection. Default is
   * `false`.
   */
  safeDialogs?: boolean;
  /**
   * The message to display when consecutive dialog protection is triggered. If not
   * defined the default message would be used, note that currently the default
   * message is in English and not localized.
   */
  safeDialogsMessage?: string;
  /**
   * Whether dragging and dropping a file or link onto the page causes a navigation.
   * Default is `false`.
   */
  navigateOnDragDrop?: boolean;
  /**
   * Autoplay policy to apply to content in the window, can be
   * `no-user-gesture-required`, `user-gesture-required`,
   * `document-user-activation-required`. Defaults to `no-user-gesture-required`.
   */
  autoplayPolicy?:
    | 'no-user-gesture-required'
    | 'user-gesture-required'
    | 'document-user-activation-required';
  /**
   * Whether to prevent the window from resizing when entering HTML Fullscreen.
   * Default is `false`.
   */
  disableHtmlFullscreenWindowResize?: boolean;
  /**
   * An alternative title string provided only to accessibility tools such as screen
   * readers. This string is not directly visible to users.
   */
  accessibleTitle?: string;
  /**
   * Whether to enable the builtin spellchecker. Default is `false`.
   */
  spellcheck?: boolean;
}

interface Size {
  height: number;
  width: number;
}

interface Rectangle {
  // Docs: https://github.com/skpm/sketch-module-web-view/blob/master/docs/rectangle.md

  /**
   * The height of the rectangle (must be an integer).
   */
  height: number;
  /**
   * The width of the rectangle (must be an integer).
   */
  width: number;
  /**
   * The x coordinate of the origin of the rectangle (must be an integer).
   */
  x: number;
  /**
   * The y coordinate of the origin of the rectangle (must be an integer).
   */
  y: number;
}
interface BrowserWindowConstructorOptions {
  identifier: string;
  /**
   * 窗口宽 默认 800
   */
  width?: number;
  /**
   * 窗口高 默认 600
   */
  height?: number;
  /**
   * 失焦时自动隐藏
   * @type Boolean
   */
  hidesOnDeactivate?: boolean;
  /**
   * 记忆窗口尺寸 下次打开时复用
   */
  remembersWindowFrame?: boolean;
  /**
   * (**required** if y is used) Window's left offset from screen. Default is to
   * center the window.
   */
  x?: number;
  /**
   * (**required** if x is used) Window's top offset from screen. Default is to
   * center the window.
   */
  y?: number;
  /**
   * The `width` and `height` would be used as web page's size, which means the
   * actual window's size will include window frame's size and be slightly larger.
   * Default is `false`.
   */
  useContentSize?: boolean;
  /**
   * Show window in the center of the screen.
   */
  center?: boolean;
  /**
   * Window's minimum width. Default is `0`.
   */
  minWidth?: number;
  /**
   * Window's minimum height. Default is `0`.
   */
  minHeight?: number;
  /**
   * Window's maximum width. Default is no limit.
   */
  maxWidth?: number;
  /**
   * Window's maximum height. Default is no limit.
   */
  maxHeight?: number;
  /**
   * Whether window is resizable. Default is `true`.
   */
  resizable?: boolean;
  /**
   * Whether window is movable. This is not implemented on Linux. Default is `true`.
   */
  movable?: boolean;
  /**
   * Whether window is minimizable. This is not implemented on Linux. Default is
   * `true`.
   */
  minimizable?: boolean;
  /**
   * Whether window is maximizable. This is not implemented on Linux. Default is
   * `true`.
   */
  maximizable?: boolean;
  /**
   * Whether window is closable. This is not implemented on Linux. Default is `true`.
   */
  closable?: boolean;
  /**
   * Whether the window should always stay on top of other windows. Default is
   * `false`.
   */
  alwaysOnTop?: boolean;
  /**
   * Whether the window should show in fullscreen. When explicitly set to `false` the
   * fullscreen button will be hidden or disabled on macOS. Default is `false`.
   */
  fullscreen?: boolean;
  /**
   * Whether the window can be put into fullscreen mode. On macOS, also whether the
   * maximize/zoom button should toggle full screen mode or maximize window. Default
   * is `true`.
   */
  fullscreenable?: boolean;
  /**
   * Default window title. Default is `"Electron"`. If the HTML tag `<title>` is
   * defined in the HTML file loaded by `loadURL()`, this property will be ignored.
   */
  title?: string;
  /**
   * Whether window should be shown when created. Default is `true`.
   */
  show?: boolean;
  /**
   * Specify `false` to create a Frameless Window. Default is `true`.
   */
  frame?: boolean;
  /**
   * Specify parent document. Default is `null`.
   */
  parent?: MSDocument;
  /**
   * Whether this is a modal window. This only works when the window is a child
   * window. Default is `false`.
   */
  modal?: boolean;
  /**
   * Whether the web view accepts a single mouse-down event that simultaneously
   * activates the window. Default is `false`.
   */
  acceptFirstMouse?: boolean;
  /**
   * Whether to hide cursor when typing. Default is `false`.
   */
  disableAutoHideCursor?: boolean;
  /**
   * Window's background color as a hexadecimal value, like `#66CD00` or `#FFF` or
   * `#80FFFFFF` (alpha in #AARRGGBB format is supported if `transparent` is set to
   * `true`). Default is `#FFF` (white).
   */
  backgroundColor?: string;
  /**
   * Whether window should have a shadow. Default is `true`.
   */
  hasShadow?: boolean;
  /**
   * Set the initial opacity of the window, between 0.0 (fully transparent) and 1.0
   * (fully opaque). This is only implemented on Windows and macOS.
   */
  opacity?: number;
  /**
   * Forces using dark theme for the window, only works on some GTK+3 desktop
   * environments. Default is `false`.
   */
  darkTheme?: boolean;
  /**
   * Makes the window transparent. Default is `false`. On Windows, does not work
   * unless the window is frameless.
   */
  transparent?: boolean;

  /**
   * The style of window title bar. Default is `default`. Possible values are:
   */
  titleBarStyle?: 'default' | 'hidden' | 'hiddenInset';

  /**
   * Add a type of vibrancy effect to the window, only on macOS. Can be
   * `appearance-based`, `light`, `dark`, `titlebar`, `selection`, `menu`, `popover`,
   * `sidebar`, `medium-light`, `ultra-dark`, `header`, `sheet`, `window`, `hud`,
   * `fullscreen-ui`, `tooltip`, `content`, `under-window`, or `under-page`.  Please
   * note that using `frame: false` in combination with a vibrancy value requires
   * that you use a non-default `titleBarStyle` as well. Also note that
   * `appearance-based`, `light`, `dark`, `medium-light`, and `ultra-dark` have been
   * deprecated and will be removed in an upcoming version of macOS.
   */
  vibrancy?:
    | 'appearance-based'
    | 'light'
    | 'dark'
    | 'titlebar'
    | 'selection'
    | 'menu'
    | 'popover'
    | 'sidebar'
    | 'medium-light'
    | 'ultra-dark';
  /**
   * Settings of web page's features.
   */
  webPreferences?: WebPreferences;
}

declare class EventEmitter {
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  removeAllListeners(event?: string | symbol): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: string | symbol): Function[];
  rawListeners(event: string | symbol): Function[];
  emit(event: string | symbol, ...args: any[]): boolean;
  listenerCount(type: string | symbol): number;
  // Added in Node 6...
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this;
  eventNames(): Array<string | symbol>;
}

declare class BrowserWindow extends EventEmitter {
  /**
   * Emitted when the web page has been rendered (while not being shown) and window
   * can be displayed without a visual flash.
   *
   * Please note that using this event implies that the renderer will be considered
   * "visible" and paint even though `show` is false.  This event will never fire if
   * you use `paintWhenInitiallyHidden: false`
   */
  on(event: 'ready-to-show', listener: Function): this;

  once(event: 'ready-to-show', listener: Function): this;

  addListener(event: 'ready-to-show', listener: Function): this;

  removeListener(event: 'ready-to-show', listener: Function): this;

  /**
   * Emitted when the window loses focus.
   */
  on(event: 'blur', listener: Function): this;

  once(event: 'blur', listener: Function): this;

  addListener(event: 'blur', listener: Function): this;

  removeListener(event: 'blur', listener: Function): this;

  /**
   * Emitted when the window enters a full-screen state.
   */
  on(event: 'enter-full-screen', listener: Function): this;

  once(event: 'enter-full-screen', listener: Function): this;

  addListener(event: 'enter-full-screen', listener: Function): this;

  removeListener(event: 'enter-full-screen', listener: Function): this;

  /**
   * Emitted when the window enters a full-screen state triggered by HTML API.
   */
  on(event: 'enter-html-full-screen', listener: Function): this;

  once(event: 'enter-html-full-screen', listener: Function): this;

  addListener(event: 'enter-html-full-screen', listener: Function): this;

  removeListener(event: 'enter-html-full-screen', listener: Function): this;

  /**
   * Emitted when the window gains focus.
   */
  on(event: 'focus', listener: Function): this;

  once(event: 'focus', listener: Function): this;

  addListener(event: 'focus', listener: Function): this;

  removeListener(event: 'focus', listener: Function): this;

  /**
   * Emitted when the window is hidden.
   */
  on(event: 'hide', listener: Function): this;

  once(event: 'hide', listener: Function): this;

  addListener(event: 'hide', listener: Function): this;

  removeListener(event: 'hide', listener: Function): this;

  /**
   * Emitted when the window is going to be closed. It's emitted before the
   * `beforeunload` and `unload` event of the DOM. Calling `event.preventDefault()`
   * will cancel the close.
   *
   * Usually you would want to use the `beforeunload` handler to decide whether the
   * window should be closed, which will also be called when the window is reloaded.
   * In Electron, returning any value other than `undefined` would cancel the close.
   * For example:
   *
   * _**Note**: There is a subtle difference between the behaviors of
   * `window.onbeforeunload = handler` and `window.addEventListener('beforeunload',
   * handler)`. It is recommended to always set the `event.returnValue` explicitly,
   * instead of only returning a value, as the former works more consistently within
   * Electron._
   */
  on(event: 'close', listener: (event: Event) => void): this;

  once(event: 'close', listener: (event: Event) => void): this;

  addListener(event: 'close', listener: (event: Event) => void): this;

  removeListener(event: 'close', listener: (event: Event) => void): this;

  /**
   * Emitted when the window is closed. After you have received this event you should
   * remove the reference to the window and avoid using it any more.
   */
  on(event: 'closed', listener: Function): this;

  once(event: 'closed', listener: Function): this;

  addListener(event: 'closed', listener: Function): this;

  removeListener(event: 'closed', listener: Function): this;

  /**
   * Emitted when the window leaves a full-screen state.
   */
  on(event: 'leave-full-screen', listener: Function): this;

  once(event: 'leave-full-screen', listener: Function): this;

  addListener(event: 'leave-full-screen', listener: Function): this;

  removeListener(event: 'leave-full-screen', listener: Function): this;

  /**
   * Emitted when the window is restored from a minimized state.
   */
  on(event: 'restore', listener: Function): this;

  once(event: 'restore', listener: Function): this;

  addListener(event: 'restore', listener: Function): this;

  removeListener(event: 'restore', listener: Function): this;

  /**
   * Emitted when window is maximized.
   */
  on(event: 'maximize', listener: Function): this;

  once(event: 'maximize', listener: Function): this;

  addListener(event: 'maximize', listener: Function): this;

  removeListener(event: 'maximize', listener: Function): this;

  /**
   * Emitted when the window is minimized.
   */
  on(event: 'minimize', listener: Function): this;

  once(event: 'minimize', listener: Function): this;

  addListener(event: 'minimize', listener: Function): this;

  removeListener(event: 'minimize', listener: Function): this;

  /**
   * Emitted when the window is being moved to a new position.
   *
   __Note__: On macOS this event is an alias of `moved`.
   */
  on(event: 'move', listener: Function): this;

  once(event: 'move', listener: Function): this;

  addListener(event: 'move', listener: Function): this;

  removeListener(event: 'move', listener: Function): this;

  /**
   * Emitted once when the window is moved to a new position.
   *
   * @platform darwin
   */
  on(event: 'moved', listener: Function): this;

  once(event: 'moved', listener: Function): this;

  addListener(event: 'moved', listener: Function): this;

  removeListener(event: 'moved', listener: Function): this;

  constructor(options?: BrowserWindowConstructorOptions);

  /**
   * The window with the given id.
   * @param id number
   */
  static fromId(id: number): BrowserWindow;

  /**
   * Removes focus from the window.
   */
  blur(): void;

  blurWebView(): void;

  /**
   * Moves window to the center of the screen.
   */
  center(): void;

  /**
   * Try to close the window. This has the same effect as a user manually clicking
   * the close button of the window. The web page may cancel the close though. See
   * the close event.
   */
  close(): void;

  /**
   * Closes the currently open Quick Look panel.
   *
   * @platform darwin
   */
  closeFilePreview(): void;

  /**
   * Force closing the window, the `unload` and `beforeunload` event won't be emitted
   * for the web page, and `close` event will also not be emitted for this window,
   * but it guarantees the `closed` event will be emitted.
   */
  destroy(): void;

  /**
   * Starts or stops flashing the window to attract user's attention.
   */
  flashFrame(flag: boolean): void;

  /**
   * Focuses on the window.
   */
  focus(): void;

  focusOnWebView(): void;

  /**
   * The `bounds` of the window as `Object`.
   */
  getBounds(): Rectangle;

  /**
   * All child windows.
   */
  getChildWindows(): BrowserWindow[];

  /**
   * The `bounds` of the window's client area as `Object`.
   */
  getContentBounds(): Rectangle;

  /**
   * Contains the window's client area's width and height.
   */
  getContentSize(): number[];

  /**
   * Contains the window's maximum width and height.
   */
  getMaximumSize(): number[];

  /**
   * Window id in the format of DesktopCapturerSource's id. For example
   * "window:1234:0".
   *
   * More precisely the format is `window:id:other_id` where `id` is `HWND` on
   * Windows, `CGWindowID` (`uint64_t`) on macOS and `Window` (`unsigned long`) on
   * Linux. `other_id` is used to identify web contents (tabs) so within the same top
   * level window.
   */
  getMediaSourceId(): string;

  /**
   * Contains the window's minimum width and height.
   */
  getMinimumSize(): number[];

  /**
   * The platform-specific handle of the window.
   *
   * The native type of the handle is `HWND` on Windows, `NSView*` on macOS, and
   * `Window` (`unsigned long`) on Linux.
   */
  getNativeWindowHandle(): Buffer;

  /**
   * Contains the window bounds of the normal state
   *
   * **Note:** whatever the current state of the window : maximized, minimized or in
   * fullscreen, this function always returns the position and size of the window in
   * normal state. In normal state, getBounds and getNormalBounds returns the same
   * `Rectangle`.
   */
  getNormalBounds(): Rectangle;

  /**
   * between 0.0 (fully transparent) and 1.0 (fully opaque). On Linux, always returns
   * 1.
   */
  getOpacity(): number;

  /**
   * The parent window.
   */
  getParentWindow(): BrowserWindow;

  /**
   * Contains the window's current position.
   */
  getPosition(): number[];

  /**
   * The pathname of the file the window represents.
   *
   * @platform darwin
   */
  getRepresentedFilename(): string;

  /**
   * Contains the window's width and height.
   */
  getSize(): number[];

  /**
   * The title of the native window.
   *
   * **Note:** The title of the web page can be different from the title of the
   * native window.
   */
  getTitle(): string;

  /**
   * Whether the window has a shadow.
   */
  hasShadow(): boolean;

  /**
   * Hides the window.
   */
  hide(): void;

  /**
   * Hooks a windows message. The `callback` is called when the message is received
   * in the WndProc.
   *
   * @platform win32
   */
  hookWindowMessage(message: number, callback: () => void): void;

  /**
   * Whether the window is always on top of other windows.
   */
  isAlwaysOnTop(): boolean;

  /**
   * Whether the window can be manually closed by user.
   *
   On Linux always returns `true`.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  isClosable(): boolean;

  /**
   * Whether the window is destroyed.
   */
  isDestroyed(): boolean;

  /**
   * Whether the window's document has been edited.
   *
   * @platform darwin
   */
  isDocumentEdited(): boolean;

  /**
   * Returns Boolean - whether the window is enabled.
   */
  isEnabled(): void;

  /**
   * Whether the window is focused.
   */
  isFocused(): boolean;

  /**
   * Whether the window is in fullscreen mode.
   */
  isFullScreen(): boolean;

  /**
   * Whether the maximize/zoom window button toggles fullscreen mode or maximizes the
   * window.

   **Deprecated**
   */
  isFullScreenable(): boolean;

  /**
   * Whether the window is in kiosk mode.
   */
  isKiosk(): boolean;

  /**
   * Whether the window can be manually maximized by user.
   *
   On Linux always returns `true`.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  isMaximizable(): boolean;

  /**
   * Whether the window is maximized.
   */
  isMaximized(): boolean;

  /**
   * Whether menu bar automatically hides itself.

   **Deprecated**
   */
  isMenuBarAutoHide(): boolean;

  /**
   * Whether the menu bar is visible.
   */
  isMenuBarVisible(): boolean;

  /**
   * Whether the window can be manually minimized by user
   *
   On Linux always returns `true`.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  isMinimizable(): boolean;

  /**
   * Whether the window is minimized.
   */
  isMinimized(): boolean;

  /**
   * Whether current window is a modal window.
   */
  isModal(): boolean;

  /**
   * Whether the window can be moved by user.
   *
   On Linux always returns `true`.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  isMovable(): boolean;

  /**
   * Whether the window is in normal state (not maximized, not minimized, not in
   * fullscreen mode).
   */
  isNormal(): boolean;

  /**
   * Whether the window can be manually resized by user.

   **Deprecated**
   */
  isResizable(): boolean;

  /**
   * Whether the window is in simple (pre-Lion) fullscreen mode.
   *
   * @platform darwin
   */
  isSimpleFullScreen(): boolean;

  /**
   * Whether the window is visible to the user.
   */
  isVisible(): boolean;

  /**
   * Whether the window is visible on all workspaces.
   *
   **Note:** This API always returns false on Windows.
   */
  isVisibleOnAllWorkspaces(): boolean;

  /**

   * Same as `webContents.loadURL(url[, options])`.
   *
   * The `url` can be a remote address (e.g. `http://`) or a path to a local HTML
   * file using the `file://` protocol.
   *
   * To ensure that file URLs are properly formatted, it is recommended to use Node's
   * `url.format` method:
   */
  loadURL(url: string): void;

  /**
   * Maximizes the window. This will also show (but not focus) the window if it isn't
   * being displayed already.
   */
  maximize(): void;

  /**
   * Merges all windows into one window with multiple tabs when native tabs are
   * enabled and there is more than one open window.
   *
   * @platform darwin
   */
  mergeAllWindows(): void;

  /**
   * Minimizes the window. On some platforms the minimized window will be shown in
   * the Dock.
   */
  minimize(): void;

  /**
   * Moves window above the source window in the sense of z-order. If the
   * `mediaSourceId` is not of type window or if the window does not exist then this
   * method throws an error.
   */
  moveAbove(mediaSourceId: string): void;

  /**
   * Moves the current tab into a new window if native tabs are enabled and there is
   * more than one tab in the current window.
   *
   * @platform darwin
   */
  moveTabToNewWindow(): void;

  /**
   * Moves window to top(z-order) regardless of focus
   */
  moveTop(): void;

  /**
   * Uses Quick Look to preview a file at a given path.
   *
   * @platform darwin
   */
  previewFile(path: string, displayName?: string): void;

  /**
   * Same as `webContents.reload`.
   */
  reload(): void;

  /**
   * Remove the window's menu bar.
   *
   * @platform linux,win32
   */
  removeMenu(): void;

  /**
   * Restores the window from minimized state to its previous state.
   */
  restore(): void;

  /**
   * Selects the next tab when native tabs are enabled and there are other tabs in
   * the window.
   *
   * @platform darwin
   */
  selectNextTab(): void;

  /**
   * Selects the previous tab when native tabs are enabled and there are other tabs
   * in the window.
   *
   * @platform darwin
   */
  selectPreviousTab(): void;

  /**
   * Sets whether the window should show always on top of other windows. After
   * setting this, the window is still a normal window, not a toolbox window which
   * can not be focused on.
   */
  setAlwaysOnTop(
    flag: boolean,
    level?:
      | 'normal'
      | 'floating'
      | 'torn-off-menu'
      | 'modal-panel'
      | 'main-menu'
      | 'status'
      | 'pop-up-menu'
      | 'screen-saver',
    relativeLevel?: number
  ): void;

  /**
   * This will make a window maintain an aspect ratio. The extra size allows a
   * developer to have space, specified in pixels, not included within the aspect
   * ratio calculations. This API already takes into account the difference between a
   * window's size and its content size.
   *
   * Consider a normal window with an HD video player and associated controls.
   * Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls
   * on the right edge and 50 pixels of controls below the player. In order to
   * maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within
   * the player itself we would call this function with arguments of 16/9 and [ 40,
   * 50 ]. The second argument doesn't care where the extra width and height are
   * within the content view--only that they exist. Sum any extra width and height
   * areas you have within the overall content view.
   *
   * Calling this function with a value of `0` will remove any previously set aspect
   * ratios.
   *
   * @platform darwin
   */
  setAspectRatio(aspectRatio: number, extraSize?: Size): void;

  /**
   * Controls whether to hide cursor when typing.
   *
   * @platform darwin
   */
  setAutoHideCursor(autoHide: boolean): void;

  /**
   * Sets whether the window menu bar should hide itself automatically. Once set the
   * menu bar will only show when users press the single `Alt` key.
   *
   * If the menu bar is already visible, calling `setAutoHideMenuBar(true)` won't
   * hide it immediately.

   **Deprecated**
   */
  setAutoHideMenuBar(hide: boolean): void;

  /**
   * Sets the background color of the window. See Setting `backgroundColor`.
   */
  setBackgroundColor(backgroundColor: string): void;

  /**
   * Resizes and moves the window to the supplied bounds. Any properties that are not
   * supplied will default to their current values.
   */
  setBounds(bounds: Partial<Rectangle>, animate?: boolean): void;

  /**
   * Sets whether the window can be manually closed by user. On Linux does nothing.
   *
   **Deprecated**
   *
   * @platform darwin,win32
   */
  setClosable(closable: boolean): void;

  /**
   * Resizes and moves the window's client area (e.g. the web page) to the supplied
   * bounds.
   */
  setContentBounds(bounds: Rectangle, animate?: boolean): void;

  /**
   * Prevents the window contents from being captured by other apps.
   *
   * On macOS it sets the NSWindow's sharingType to NSWindowSharingNone. On Windows
   * it calls SetWindowDisplayAffinity with `WDA_MONITOR`.
   *
   * @platform darwin,win32
   */
  setContentProtection(enable: boolean): void;

  /**
   * Resizes the window's client area (e.g. the web page) to `width` and `height`.
   */
  setContentSize(width: number, height: number, animate?: boolean): void;

  /**
   * Specifies whether the window’s document has been edited, and the icon in title
   * bar will become gray when set to `true`.
   *
   * @platform darwin
   */
  setDocumentEdited(edited: boolean): void;

  /**
   * Disable or enable the window.
   */
  setEnabled(enable: boolean): void;

  /**
   * Changes whether the window can be focused.
   *
   On macOS it does not remove the focus from the window.
   *
   * @platform darwin,win32
   */
  setFocusable(focusable: boolean): void;

  /**
   * Sets whether the window should be in fullscreen mode.
   */
  setFullScreen(flag: boolean): void;

  /**
   * Sets whether the maximize/zoom window button toggles fullscreen mode or
   * maximizes the window.

   **Deprecated**
   */
  setFullScreenable(fullscreenable: boolean): void;

  /**
   * Sets whether the window should have a shadow.
   */
  setHasShadow(hasShadow: boolean): void;

  /**
   * Makes the window ignore all mouse events.
   *
   * All mouse events happened in this window will be passed to the window below this
   * window, but if this window has focus, it will still receive keyboard events.
   */
  setIgnoreMouseEvents(ignore: boolean): void;

  /**
   * Enters or leaves the kiosk mode.
   */
  setKiosk(flag: boolean): void;

  /**
   * Sets whether the window can be manually maximized by user. On Linux does
   * nothing.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  setMaximizable(maximizable: boolean): void;

  /**
   * Sets the maximum size of window to `width` and `height`.
   */
  setMaximumSize(width: number, height: number): void;

  /**
   * Sets whether the window can be manually minimized by user. On Linux does
   * nothing.

   **Deprecated**
   *
   * @platform darwin,win32
   */
  setMinimizable(minimizable: boolean): void;

  /**
   * Sets the minimum size of window to `width` and `height`.
   */
  setMinimumSize(width: number, height: number): void;

  /**
   * Sets whether the window can be moved by user. On Linux does nothing.
   *
   **Deprecated**
   *
   * @platform darwin,win32
   */
  setMovable(movable: boolean): void;

  /**
   * Sets the opacity of the window. On Linux, does nothing. Out of bound number
   * values are clamped to the [0, 1] range.
   *
   * @platform win32,darwin
   */
  setOpacity(opacity: number): void;

  /**
   * Sets `parent` as current window's parent window, passing `null` will turn
   * current window into a top-level window.
   */
  setParentWindow(parent: (BrowserWindow) | (null)): void;

  /**
   * Moves window to `x` and `y`.
   */
  setPosition(x: number, y: number, animate?: boolean): void;

  /**
   * Sets the pathname of the file the window represents, and the icon of the file
   * will show in window's title bar.
   *
   * @platform darwin
   */
  setRepresentedFilename(filename: string): void;

  /**
   * Sets whether the window can be manually resized by user.

   **Deprecated**
   */
  setResizable(resizable: boolean): void;

  /**
   * Setting a window shape determines the area within the window where the system
   * permits drawing and user interaction. Outside of the given region, no pixels
   * will be drawn and no mouse events will be registered. Mouse events outside of
   * the region will not be received by that window, but will fall through to
   * whatever is behind the window.
   *
   * @experimental
   * @platform win32,linux
   */
  setShape(rects: Rectangle[]): void;

  /**
   * Changes the attachment point for sheets on macOS. By default, sheets are
   * attached just below the window frame, but you may want to display them beneath a
   * HTML-rendered toolbar. For example:
   *
   * @platform darwin
   */
  setSheetOffset(offsetY: number, offsetX?: number): void;

  /**
   * Enters or leaves simple fullscreen mode.
   *
   * Simple fullscreen mode emulates the native fullscreen behavior found in versions
   * of Mac OS X prior to Lion (10.7).
   *
   * @platform darwin
   */
  setSimpleFullScreen(flag: boolean): void;

  /**
   * Resizes the window to `width` and `height`. If `width` or `height` are below any
   * set minimum size constraints the window will snap to its minimum size.
   */
  setSize(width: number, height: number, animate?: boolean): void;

  /**
   * Makes the window not show in the taskbar.
   */
  setSkipTaskbar(skip: boolean): void;

  /**
   * Sets the region of the window to show as the thumbnail image displayed when
   * hovering over the window in the taskbar. You can reset the thumbnail to be the
   * entire window by specifying an empty region: `{ x: 0, y: 0, width: 0, height: 0
   * }`.
   *
   * @platform win32
   */
  setThumbnailClip(region: Rectangle): void;

  /**
   * Sets the toolTip that is displayed when hovering over the window thumbnail in
   * the taskbar.
   *
   * @platform win32
   */
  setThumbnailToolTip(toolTip: string): void;

  /**
   * Changes the title of native window to `title`.
   */
  setTitle(title: string): void;

  /**
   * Adds a vibrancy effect to the browser window. Passing `null` or an empty string
   * will remove the vibrancy effect on the window.
   *
   * Note that `appearance-based`, `light`, `dark`, `medium-light`, and `ultra-dark`
   * have been deprecated and will be removed in an upcoming version of macOS.
   *
   * @platform darwin
   */
  setVibrancy(
    type:
      | 'appearance-based'
      | 'light'
      | 'dark'
      | 'titlebar'
      | 'selection'
      | 'menu'
      | 'popover'
      | 'sidebar'
      | 'medium-light'
      | 'ultra-dark'
      | 'header'
      | 'sheet'
      | 'window'
      | 'hud'
      | 'fullscreen-ui'
      | 'tooltip'
      | 'content'
      | 'under-window'
      | 'under-page'
      | (null)
  ): void;

  /**
   * Sets whether the window should be visible on all workspaces.
   */
  setVisibleOnAllWorkspaces(visible: boolean): void;

  /**
   * Sets whether the window traffic light buttons should be visible.
   *
   This cannot be called when `titleBarStyle` is set to `customButtonsOnHover`.
   *
   * @platform darwin
   */
  setWindowButtonVisibility(visible: boolean): void;

  /**
   * Shows and gives focus to the window.
   */
  show(): void;

  /**
   * Same as `webContents.showDefinitionForSelection()`.
   *
   * @platform darwin
   */
  showDefinitionForSelection(): void;

  /**
   * Shows the window but doesn't focus on it.
   */
  showInactive(): void;

  /**
   * Toggles the visibility of the tab bar if native tabs are enabled and there is
   * only one tab in the current window.
   *
   * @platform darwin
   */
  toggleTabBar(): void;

  /**
   * Unhooks all of the window messages.
   *
   * @platform win32
   */
  unhookAllWindowMessages(): void;

  /**
   * Unhook the window message.
   *
   * @platform win32
   */
  unhookWindowMessage(message: number): void;

  /**
   * Unmaximizes the window.
   */
  unmaximize(): void;

  accessibleTitle: string;
  autoHideMenuBar: boolean;
  closable: boolean;
  excludedFromShownWindowsMenu: boolean;
  fullScreenable: boolean;
  readonly id: number;
  maximizable: boolean;
  minimizable: boolean;
  movable: boolean;
  resizable: boolean;
  readonly webContents: WebContents;
}

declare class WebContents extends EventEmitter {
  /**
   * A WebContents instance with the given ID.
   */
  static fromId(id: number): WebContents;

  /**
   * An array of all `WebContents` instances. This will contain web contents for all
   * windows, webviews, opened devtools, and devtools extension background pages.
   */
  static getAllWebContents(): WebContents[];

  /**
   * The web contents that is focused in this application, otherwise returns `null`.
   */
  static getFocusedWebContents(): WebContents;

  /**
   * Adds the specified path to DevTools workspace. Must be used after DevTools
   * creation:
   */
  addWorkSpace(path: string): void;

  /**
   * Whether the browser can go back to previous web page.
   */
  canGoBack(): boolean;

  /**
   * Whether the browser can go forward to next web page.
   */
  canGoForward(): boolean;

  /**
   * Whether the web page can go to `offset`.
   */
  canGoToOffset(offset: number): boolean;

  /**
   * Clears the navigation history.
   */
  clearHistory(): void;

  /**
   * Closes the devtools.
   */
  closeDevTools(): void;

  /**
   * Executes the editing command `copy` in web page.
   */
  copy(): void;

  /**
   * Copy the image at the given position to the clipboard.
   */
  copyImageAt(x: number, y: number): void;

  /**
   * Executes the editing command `cut` in web page.
   */
  cut(): void;

  /**
   * Decrease the capturer count by one. The page will be set to hidden or occluded
   * state when its browser window is hidden or occluded and the capturer count
   * reaches zero. If you want to decrease the hidden capturer count instead you
   * should set `stayHidden` to true.
   */
  decrementCapturerCount(stayHidden?: boolean): void;

  /**
   * Executes the editing command `delete` in web page.
   */
  delete(): void;

  /**
   * Disable device emulation enabled by `webContents.enableDeviceEmulation`.
   */
  disableDeviceEmulation(): void;

  /**
   * Initiates a download of the resource at `url` without navigating. The
   * `will-download` event of `session` will be triggered.
   */
  downloadURL(url: string): void;

  /**
   * End subscribing for frame presentation events.
   */
  endFrameSubscription(): void;

  /**
   * A promise that resolves with the result of the executed code or is rejected if
   * the result of the code is a rejected promise.
   *
   * Evaluates `code` in page.
   *
   * In the browser window some HTML APIs like `requestFullScreen` can only be
   * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
   * this limitation.

   Code execution will be suspended until web page stop loading.
   */
  executeJavaScript(code: string, callback?: boolean): Promise<any>;

  /**
   * If *offscreen rendering* is enabled returns the current frame rate.
   *
   **Deprecated**
   */
  getFrameRate(): number;

  /**
   * The operating system `pid` of the associated renderer process.
   */
  getOSProcessId(): number;

  /**
   * The Chromium internal `pid` of the associated renderer. Can be compared to the
   * `frameProcessId` passed by frame specific navigation events (e.g.
   * `did-frame-navigate`)
   */
  getProcessId(): number;

  /**
   * The title of the current web page.
   */
  getTitle(): string;

  /**
   * the type of the webContent. Can be `backgroundPage`, `window`, `browserView`,
   * `remote`, `webview` or `offscreen`.
   */
  getType():
    | 'backgroundPage'
    | 'window'
    | 'browserView'
    | 'remote'
    | 'webview'
    | 'offscreen';

  /**
   * The URL of the current web page.
   */
  getURL(): string;

  /**
   * The user agent for this web page.

   **Deprecated**
   */
  getUserAgent(): string;

  /**
   * Returns the WebRTC IP Handling Policy.
   */
  getWebRTCIPHandlingPolicy(): string;

  /**
   * the current zoom factor.

   **Deprecated**
   */
  getZoomFactor(): number;

  /**
   * the current zoom level.

   **Deprecated**
   */
  getZoomLevel(): number;

  /**
   * Makes the browser go back a web page.
   */
  goBack(): void;

  /**
   * Makes the browser go forward a web page.
   */
  goForward(): void;

  /**
   * Navigates browser to the specified absolute web page index.
   */
  goToIndex(index: number): void;

  /**
   * Navigates to the specified offset from the "current entry".
   */
  goToOffset(offset: number): void;

  /**
   * Increase the capturer count by one. The page is considered visible when its
   * browser window is hidden and the capturer count is non-zero. If you would like
   * the page to stay hidden, you should ensure that `stayHidden` is set to true.
   *
   This also affects the Page Visibility API.
   */
  incrementCapturerCount(size?: Size, stayHidden?: boolean): void;

  /**
   * Inserts `text` to the focused element.
   */
  insertText(text: string): Promise<void>;

  /**
   * Starts inspecting element at position (`x`, `y`).
   */
  inspectElement(x: number, y: number): void;

  /**
   * Opens the developer tools for the service worker context.
   */
  inspectServiceWorker(): void;

  /**
   * Opens the developer tools for the shared worker context.
   */
  inspectSharedWorker(): void;

  /**
   * Inspects the shared worker based on its ID.
   */
  inspectSharedWorkerById(workerId: string): void;

  /**
   * Schedules a full repaint of the window this web contents is in.
   *
   * If *offscreen rendering* is enabled invalidates the frame and generates a new
   * one through the `'paint'` event.
   */
  invalidate(): void;

  /**
   * Whether this page has been muted.

   **Deprecated**
   */
  isAudioMuted(): boolean;

  /**
   * Whether this page is being captured. It returns true when the capturer count is
   * large then 0.
   */
  isBeingCaptured(): boolean;

  /**
   * Whether the renderer process has crashed.
   */
  isCrashed(): boolean;

  /**
   * Whether audio is currently playing.
   */
  isCurrentlyAudible(): boolean;

  /**
   * Whether the web page is destroyed.
   */
  isDestroyed(): boolean;

  /**
   * Whether the devtools view is focused .
   */
  isDevToolsFocused(): boolean;

  /**
   * Whether the devtools is opened.
   */
  isDevToolsOpened(): boolean;

  /**
   * Whether the web page is focused.
   */
  isFocused(): boolean;

  /**
   * Whether web page is still loading resources.
   */
  isLoading(): boolean;

  /**
   * Whether the main frame (and not just iframes or frames within it) is still
   * loading.
   */
  isLoadingMainFrame(): boolean;

  /**
   * Indicates whether *offscreen rendering* is enabled.
   */
  isOffscreen(): boolean;

  /**
   * If *offscreen rendering* is enabled returns whether it is currently painting.
   */
  isPainting(): boolean;

  /**
   * Whether the web page is waiting for a first-response from the main resource of
   * the page.
   */
  isWaitingForResponse(): boolean;

  /**
   * the promise will resolve when the page has finished loading (see
   * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
   * A noop rejection handler is already attached, which avoids unhandled rejection
   * errors.
   *
   * Loads the `url` in the window. The `url` must contain the protocol prefix, e.g.
   * the `http://` or `file://`. If the load should bypass http cache then use the
   * `pragma` header to achieve it.
   */
  loadURL(url: string): Promise<void>;

  /**
   * Executes the editing command `paste` in web page.
   */
  paste(): void;

  /**
   * Executes the editing command `pasteAndMatchStyle` in web page.
   */
  pasteAndMatchStyle(): void;

  /**
   * Executes the editing command `redo` in web page.
   */
  redo(): void;

  /**
   * Reloads the current web page.
   */
  reload(): void;

  /**
   * Reloads current page and ignores cache.
   */
  reloadIgnoringCache(): void;

  /**
   * Resolves if the removal was successful.
   *
   * Removes the inserted CSS from the current web page. The stylesheet is identified
   * by its key, which is returned from `contents.insertCSS(css)`.
   */
  removeInsertedCSS(key: string): Promise<void>;

  /**
   * Removes the specified path from DevTools workspace.
   */
  removeWorkSpace(path: string): void;

  /**
   * Executes the editing command `replace` in web page.
   */
  replace(text: string): void;

  /**
   * Executes the editing command `replaceMisspelling` in web page.
   */
  replaceMisspelling(text: string): void;

  /**
   * resolves if the page is saved.
   */
  savePage(
    fullPath: string,
    saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML'
  ): Promise<void>;

  /**
   * Executes the editing command `selectAll` in web page.
   */
  selectAll(): void;

  /**
   * Send an asynchronous message to the renderer process via `channel`, along with
   * arguments. Arguments will be serialized with the Structured Clone Algorithm,
   * just like `postMessage`, so prototype chains will not be included. Sending
   * Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
   *
   * > **NOTE**: Sending non-standard JavaScript types such as DOM objects or special
   * Electron objects is deprecated, and will begin throwing an exception starting
   * with Electron 9.
   *
   * The renderer process can handle the message by listening to `channel` with the
   * `ipcRenderer` module.
   *
   An example of sending messages from the main process to the renderer process:
   */
  send(channel: string, ...args: any[]): void;

  /**
   * Send an asynchronous message to a specific frame in a renderer process via
   * `channel`, along with arguments. Arguments will be serialized with the
   * Structured Clone Algorithm, just like `postMessage`, so prototype chains will
   * not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets
   * will throw an exception.
   *
   * > **NOTE**: Sending non-standard JavaScript types such as DOM objects or special
   * Electron objects is deprecated, and will begin throwing an exception starting
   * with Electron 9.
   *
   * The renderer process can handle the message by listening to `channel` with the
   * `ipcRenderer` module.
   *
   * If you want to get the `frameId` of a given renderer context you should use the
   * `webFrame.routingId` value.  E.g.
   *
   You can also read `frameId` from all incoming IPC messages in the main process.
   */
  sendToFrame(frameId: number, channel: string, ...args: any[]): void;

  /**
   * Mute the audio on the current web page.

   **Deprecated**
   */
  setAudioMuted(muted: boolean): void;

  /**
   * Controls whether or not this WebContents will throttle animations and timers
   * when the page becomes backgrounded. This also affects the Page Visibility API.
   */
  setBackgroundThrottling(allowed: boolean): void;

  /**
   * Uses the `devToolsWebContents` as the target `WebContents` to show devtools.
   *
   * The `devToolsWebContents` must not have done any navigation, and it should not
   * be used for other purposes after the call.
   *
   * By default Electron manages the devtools by creating an internal `WebContents`
   * with native view, which developers have very limited control of. With the
   * `setDevToolsWebContents` method, developers can use any `WebContents` to show
   * the devtools in it, including `BrowserWindow`, `BrowserView` and `<webview>`
   * tag.
   *
   * Note that closing the devtools does not destroy the `devToolsWebContents`, it is
   * caller's responsibility to destroy `devToolsWebContents`.
   *
   * An example of showing devtools in a `<webview>` tag:
   *
   An example of showing devtools in a `BrowserWindow`:
   */
  setDevToolsWebContents(devToolsWebContents: WebContents): void;

  /**
   * If *offscreen rendering* is enabled sets the frame rate to the specified number.
   * Only values between 1 and 60 are accepted.

   **Deprecated**
   */
  setFrameRate(fps: number): void;

  /**
   * Ignore application menu shortcuts while this web contents is focused.
   *
   * @experimental
   */
  setIgnoreMenuShortcuts(ignore: boolean): void;

  /**
   * Sets the maximum and minimum layout-based (i.e. non-visual) zoom level.
   *
   **Deprecated:** This API is no longer supported by Chromium.
   *
   * @deprecated
   */
  setLayoutZoomLevelLimits(
    minimumLevel: number,
    maximumLevel: number
  ): Promise<void>;

  /**
   * Overrides the user agent for this web page.

   **Deprecated**
   */
  setUserAgent(userAgent: string): void;

  /**
   * Sets the maximum and minimum pinch-to-zoom level.
   *
   * > **NOTE**: Visual zoom is disabled by default in Electron. To re-enable it,
   * call:
   */
  setVisualZoomLevelLimits(
    minimumLevel: number,
    maximumLevel: number
  ): Promise<void>;

  /**
   * Setting the WebRTC IP handling policy allows you to control which IPs are
   * exposed via WebRTC. See BrowserLeaks for more details.
   */
  setWebRTCIPHandlingPolicy(
    policy:
      | 'default'
      | 'default_public_interface_only'
      | 'default_public_and_private_interfaces'
      | 'disable_non_proxied_udp'
  ): void;

  /**
   * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
   * divided by 100, so 300% = 3.0.

   **Deprecated**
   */
  setZoomFactor(factor: number): void;

  /**
   * Changes the zoom level to the specified level. The original size is 0 and each
   * increment above or below represents zooming 20% larger or smaller to default
   * limits of 300% and 50% of original size, respectively. The formula for this is
   * `scale := 1.2 ^ level`.

   **Deprecated**
   */
  setZoomLevel(level: number): void;

  /**
   * Shows pop-up dictionary that searches the selected word on the page.
   *
   * @platform darwin
   */
  showDefinitionForSelection(): void;

  /**
   * If *offscreen rendering* is enabled and not painting, start painting.
   */
  startPainting(): void;

  /**
   * Stops any pending navigation.
   */
  stop(): void;

  /**
   * Stops any `findInPage` request for the `webContents` with the provided `action`.
   */
  stopFindInPage(
    action: 'clearSelection' | 'keepSelection' | 'activateSelection'
  ): void;

  /**
   * If *offscreen rendering* is enabled and painting, stop painting.
   */
  stopPainting(): void;

  /**
   * Indicates whether the snapshot has been created successfully.
   *
   Takes a V8 heap snapshot and saves it to `filePath`.
   */
  takeHeapSnapshot(filePath: string): Promise<void>;

  /**
   * Toggles the developer tools.
   */
  toggleDevTools(): void;

  /**
   * Executes the editing command `undo` in web page.
   */
  undo(): void;

  /**
   * Executes the editing command `unselect` in web page.
   */
  unselect(): void;

  audioMuted: boolean;

  readonly devToolsWebContents: WebContents;
  frameRate: number;
  readonly hostWebContents: WebContents;
  readonly id: number;

  userAgent: string;
  zoomFactor: number;
  zoomLevel: number;
}

declare module 'sketch-module-web-view' {
  export = BrowserWindow;
}
