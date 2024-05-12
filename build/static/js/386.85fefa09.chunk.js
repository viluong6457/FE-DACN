/*! For license information please see 386.85fefa09.chunk.js.LICENSE.txt */
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [386],
  {
    56165: (module, __unused_webpack_exports, __webpack_require__) => {
      var _classPrivateGetter = __webpack_require__(183).default,
        _defineProperty = __webpack_require__(43693).default,
        _classPrivateMethodInitSpec = __webpack_require__(93312).default,
        _assertClassBrand = __webpack_require__(81756).default,
        _classPrivateFieldInitSpec = __webpack_require__(42459).default,
        _classPrivateFieldGet = __webpack_require__(16668).default,
        _classPrivateFieldSet = __webpack_require__(37088).default,
        root,
        factory;
      (root = globalThis),
        (factory = () =>
          (() => {
            'use strict';
            var __webpack_modules__ = [
                ,
                (t, e) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.VerbosityLevel =
                      e.Util =
                      e.UnknownErrorException =
                      e.UnexpectedResponseException =
                      e.TextRenderingMode =
                      e.RenderingIntentFlag =
                      e.PromiseCapability =
                      e.PermissionFlag =
                      e.PasswordResponses =
                      e.PasswordException =
                      e.PageActionEventType =
                      e.OPS =
                      e.MissingPDFException =
                      e.MAX_IMAGE_SIZE_TO_CACHE =
                      e.LINE_FACTOR =
                      e.LINE_DESCENT_FACTOR =
                      e.InvalidPDFException =
                      e.ImageKind =
                      e.IDENTITY_MATRIX =
                      e.FormatError =
                      e.FeatureTest =
                      e.FONT_IDENTITY_MATRIX =
                      e.DocumentActionEventType =
                      e.CMapCompressionType =
                      e.BaseException =
                      e.BASELINE_FACTOR =
                      e.AnnotationType =
                      e.AnnotationReplyType =
                      e.AnnotationPrefix =
                      e.AnnotationMode =
                      e.AnnotationFlag =
                      e.AnnotationFieldFlag =
                      e.AnnotationEditorType =
                      e.AnnotationEditorPrefix =
                      e.AnnotationEditorParamsType =
                      e.AnnotationBorderStyleType =
                      e.AnnotationActionEventType =
                      e.AbortException =
                        void 0),
                    (e.assert = function (t, e) {
                      t || o(e);
                    }),
                    (e.bytesToString = d),
                    (e.createValidAbsoluteUrl = function (t) {
                      let e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                        s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                      if (!t) return null;
                      try {
                        if (s && 'string' === typeof t) {
                          if (s.addDefaultProtocol && t.startsWith('www.')) {
                            const e = t.match(/\./g);
                            (null === e || void 0 === e ? void 0 : e.length) >=
                              2 && (t = 'http://'.concat(t));
                          }
                          if (s.tryConvertEncoding)
                            try {
                              t = _(t);
                            } catch {}
                        }
                        const i = e ? new URL(t, e) : new URL(t);
                        if (
                          (function (t) {
                            switch (
                              null === t || void 0 === t ? void 0 : t.protocol
                            ) {
                              case 'http:':
                              case 'https:':
                              case 'ftp:':
                              case 'mailto:':
                              case 'tel:':
                                return !0;
                              default:
                                return !1;
                            }
                          })(i)
                        )
                          return i;
                      } catch {}
                      return null;
                    }),
                    (e.getModificationDate = function () {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : new Date();
                      return [
                        t.getUTCFullYear().toString(),
                        (t.getUTCMonth() + 1).toString().padStart(2, '0'),
                        t.getUTCDate().toString().padStart(2, '0'),
                        t.getUTCHours().toString().padStart(2, '0'),
                        t.getUTCMinutes().toString().padStart(2, '0'),
                        t.getUTCSeconds().toString().padStart(2, '0')
                      ].join('');
                    }),
                    (e.getUuid = function () {
                      var t, e;
                      if (
                        'undefined' !== typeof crypto &&
                        'function' ===
                          typeof (null === (t = crypto) || void 0 === t
                            ? void 0
                            : t.randomUUID)
                      )
                        return crypto.randomUUID();
                      const s = new Uint8Array(32);
                      if (
                        'undefined' !== typeof crypto &&
                        'function' ===
                          typeof (null === (e = crypto) || void 0 === e
                            ? void 0
                            : e.getRandomValues)
                      )
                        crypto.getRandomValues(s);
                      else
                        for (let i = 0; i < 32; i++)
                          s[i] = Math.floor(255 * Math.random());
                      return d(s);
                    }),
                    (e.getVerbosityLevel = function () {
                      return n;
                    }),
                    (e.info = function (t) {
                      n >= a.INFOS && console.log('Info: '.concat(t));
                    }),
                    (e.isArrayBuffer = function (t) {
                      return (
                        'object' === typeof t &&
                        void 0 !==
                          (null === t || void 0 === t ? void 0 : t.byteLength)
                      );
                    }),
                    (e.isArrayEqual = function (t, e) {
                      if (t.length !== e.length) return !1;
                      for (let s = 0, i = t.length; s < i; s++)
                        if (t[s] !== e[s]) return !1;
                      return !0;
                    }),
                    (e.isNodeJS = void 0),
                    (e.normalizeUnicode = function (t) {
                      return (
                        v ||
                          ((v =
                            /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
                          (f = new Map([['\ufb05', '\u017ft']]))),
                        t.replaceAll(v, (t, e, s) =>
                          e ? e.normalize('NFKC') : f.get(s)
                        )
                      );
                    }),
                    (e.objectFromMap = function (t) {
                      const e = Object.create(null);
                      for (const [s, i] of t) e[s] = i;
                      return e;
                    }),
                    (e.objectSize = function (t) {
                      return Object.keys(t).length;
                    }),
                    (e.setVerbosityLevel = function (t) {
                      Number.isInteger(t) && (n = t);
                    }),
                    (e.shadow = l),
                    (e.string32 = function (t) {
                      return String.fromCharCode(
                        (t >> 24) & 255,
                        (t >> 16) & 255,
                        (t >> 8) & 255,
                        255 & t
                      );
                    }),
                    (e.stringToBytes = h),
                    (e.stringToPDFString = function (t) {
                      if (t[0] >= '\xef') {
                        let e;
                        if (
                          ('\xfe' === t[0] && '\xff' === t[1]
                            ? (e = 'utf-16be')
                            : '\xff' === t[0] && '\xfe' === t[1]
                            ? (e = 'utf-16le')
                            : '\xef' === t[0] &&
                              '\xbb' === t[1] &&
                              '\xbf' === t[2] &&
                              (e = 'utf-8'),
                          e)
                        )
                          try {
                            const s = new TextDecoder(e, { fatal: !0 }),
                              i = h(t);
                            return s.decode(i);
                          } catch (s) {
                            r('stringToPDFString: "'.concat(s, '".'));
                          }
                      }
                      const e = [];
                      for (let i = 0, a = t.length; i < a; i++) {
                        const s = p[t.charCodeAt(i)];
                        e.push(s ? String.fromCharCode(s) : t.charAt(i));
                      }
                      return e.join('');
                    }),
                    (e.stringToUTF8String = _),
                    (e.unreachable = o),
                    (e.utf8StringToString = function (t) {
                      return unescape(encodeURIComponent(t));
                    }),
                    (e.warn = r);
                  const s =
                    'object' === typeof process &&
                    process + '' === '[object process]' &&
                    !process.versions.nw &&
                    !(
                      process.versions.electron &&
                      process.type &&
                      'browser' !== process.type
                    );
                  (e.isNodeJS = s),
                    (e.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0]),
                    (e.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0]),
                    (e.MAX_IMAGE_SIZE_TO_CACHE = 1e7),
                    (e.LINE_FACTOR = 1.35),
                    (e.LINE_DESCENT_FACTOR = 0.35);
                  const i = 0.35 / 1.35;
                  (e.BASELINE_FACTOR = i),
                    (e.RenderingIntentFlag = {
                      ANY: 1,
                      DISPLAY: 2,
                      PRINT: 4,
                      SAVE: 8,
                      ANNOTATIONS_FORMS: 16,
                      ANNOTATIONS_STORAGE: 32,
                      ANNOTATIONS_DISABLE: 64,
                      OPLIST: 256
                    }),
                    (e.AnnotationMode = {
                      DISABLE: 0,
                      ENABLE: 1,
                      ENABLE_FORMS: 2,
                      ENABLE_STORAGE: 3
                    }),
                    (e.AnnotationEditorPrefix = 'pdfjs_internal_editor_'),
                    (e.AnnotationEditorType = {
                      DISABLE: -1,
                      NONE: 0,
                      FREETEXT: 3,
                      STAMP: 13,
                      INK: 15
                    }),
                    (e.AnnotationEditorParamsType = {
                      RESIZE: 1,
                      CREATE: 2,
                      FREETEXT_SIZE: 11,
                      FREETEXT_COLOR: 12,
                      FREETEXT_OPACITY: 13,
                      INK_COLOR: 21,
                      INK_THICKNESS: 22,
                      INK_OPACITY: 23
                    }),
                    (e.PermissionFlag = {
                      PRINT: 4,
                      MODIFY_CONTENTS: 8,
                      COPY: 16,
                      MODIFY_ANNOTATIONS: 32,
                      FILL_INTERACTIVE_FORMS: 256,
                      COPY_FOR_ACCESSIBILITY: 512,
                      ASSEMBLE: 1024,
                      PRINT_HIGH_QUALITY: 2048
                    }),
                    (e.TextRenderingMode = {
                      FILL: 0,
                      STROKE: 1,
                      FILL_STROKE: 2,
                      INVISIBLE: 3,
                      FILL_ADD_TO_PATH: 4,
                      STROKE_ADD_TO_PATH: 5,
                      FILL_STROKE_ADD_TO_PATH: 6,
                      ADD_TO_PATH: 7,
                      FILL_STROKE_MASK: 3,
                      ADD_TO_PATH_FLAG: 4
                    }),
                    (e.ImageKind = {
                      GRAYSCALE_1BPP: 1,
                      RGB_24BPP: 2,
                      RGBA_32BPP: 3
                    }),
                    (e.AnnotationType = {
                      TEXT: 1,
                      LINK: 2,
                      FREETEXT: 3,
                      LINE: 4,
                      SQUARE: 5,
                      CIRCLE: 6,
                      POLYGON: 7,
                      POLYLINE: 8,
                      HIGHLIGHT: 9,
                      UNDERLINE: 10,
                      SQUIGGLY: 11,
                      STRIKEOUT: 12,
                      STAMP: 13,
                      CARET: 14,
                      INK: 15,
                      POPUP: 16,
                      FILEATTACHMENT: 17,
                      SOUND: 18,
                      MOVIE: 19,
                      WIDGET: 20,
                      SCREEN: 21,
                      PRINTERMARK: 22,
                      TRAPNET: 23,
                      WATERMARK: 24,
                      THREED: 25,
                      REDACT: 26
                    }),
                    (e.AnnotationReplyType = { GROUP: 'Group', REPLY: 'R' }),
                    (e.AnnotationFlag = {
                      INVISIBLE: 1,
                      HIDDEN: 2,
                      PRINT: 4,
                      NOZOOM: 8,
                      NOROTATE: 16,
                      NOVIEW: 32,
                      READONLY: 64,
                      LOCKED: 128,
                      TOGGLENOVIEW: 256,
                      LOCKEDCONTENTS: 512
                    }),
                    (e.AnnotationFieldFlag = {
                      READONLY: 1,
                      REQUIRED: 2,
                      NOEXPORT: 4,
                      MULTILINE: 4096,
                      PASSWORD: 8192,
                      NOTOGGLETOOFF: 16384,
                      RADIO: 32768,
                      PUSHBUTTON: 65536,
                      COMBO: 131072,
                      EDIT: 262144,
                      SORT: 524288,
                      FILESELECT: 1048576,
                      MULTISELECT: 2097152,
                      DONOTSPELLCHECK: 4194304,
                      DONOTSCROLL: 8388608,
                      COMB: 16777216,
                      RICHTEXT: 33554432,
                      RADIOSINUNISON: 33554432,
                      COMMITONSELCHANGE: 67108864
                    }),
                    (e.AnnotationBorderStyleType = {
                      SOLID: 1,
                      DASHED: 2,
                      BEVELED: 3,
                      INSET: 4,
                      UNDERLINE: 5
                    }),
                    (e.AnnotationActionEventType = {
                      E: 'Mouse Enter',
                      X: 'Mouse Exit',
                      D: 'Mouse Down',
                      U: 'Mouse Up',
                      Fo: 'Focus',
                      Bl: 'Blur',
                      PO: 'PageOpen',
                      PC: 'PageClose',
                      PV: 'PageVisible',
                      PI: 'PageInvisible',
                      K: 'Keystroke',
                      F: 'Format',
                      V: 'Validate',
                      C: 'Calculate'
                    }),
                    (e.DocumentActionEventType = {
                      WC: 'WillClose',
                      WS: 'WillSave',
                      DS: 'DidSave',
                      WP: 'WillPrint',
                      DP: 'DidPrint'
                    }),
                    (e.PageActionEventType = { O: 'PageOpen', C: 'PageClose' });
                  const a = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
                  (e.VerbosityLevel = a),
                    (e.CMapCompressionType = { NONE: 0, BINARY: 1 }),
                    (e.OPS = {
                      dependency: 1,
                      setLineWidth: 2,
                      setLineCap: 3,
                      setLineJoin: 4,
                      setMiterLimit: 5,
                      setDash: 6,
                      setRenderingIntent: 7,
                      setFlatness: 8,
                      setGState: 9,
                      save: 10,
                      restore: 11,
                      transform: 12,
                      moveTo: 13,
                      lineTo: 14,
                      curveTo: 15,
                      curveTo2: 16,
                      curveTo3: 17,
                      closePath: 18,
                      rectangle: 19,
                      stroke: 20,
                      closeStroke: 21,
                      fill: 22,
                      eoFill: 23,
                      fillStroke: 24,
                      eoFillStroke: 25,
                      closeFillStroke: 26,
                      closeEOFillStroke: 27,
                      endPath: 28,
                      clip: 29,
                      eoClip: 30,
                      beginText: 31,
                      endText: 32,
                      setCharSpacing: 33,
                      setWordSpacing: 34,
                      setHScale: 35,
                      setLeading: 36,
                      setFont: 37,
                      setTextRenderingMode: 38,
                      setTextRise: 39,
                      moveText: 40,
                      setLeadingMoveText: 41,
                      setTextMatrix: 42,
                      nextLine: 43,
                      showText: 44,
                      showSpacedText: 45,
                      nextLineShowText: 46,
                      nextLineSetSpacingShowText: 47,
                      setCharWidth: 48,
                      setCharWidthAndBounds: 49,
                      setStrokeColorSpace: 50,
                      setFillColorSpace: 51,
                      setStrokeColor: 52,
                      setStrokeColorN: 53,
                      setFillColor: 54,
                      setFillColorN: 55,
                      setStrokeGray: 56,
                      setFillGray: 57,
                      setStrokeRGBColor: 58,
                      setFillRGBColor: 59,
                      setStrokeCMYKColor: 60,
                      setFillCMYKColor: 61,
                      shadingFill: 62,
                      beginInlineImage: 63,
                      beginImageData: 64,
                      endInlineImage: 65,
                      paintXObject: 66,
                      markPoint: 67,
                      markPointProps: 68,
                      beginMarkedContent: 69,
                      beginMarkedContentProps: 70,
                      endMarkedContent: 71,
                      beginCompat: 72,
                      endCompat: 73,
                      paintFormXObjectBegin: 74,
                      paintFormXObjectEnd: 75,
                      beginGroup: 76,
                      endGroup: 77,
                      beginAnnotation: 80,
                      endAnnotation: 81,
                      paintImageMaskXObject: 83,
                      paintImageMaskXObjectGroup: 84,
                      paintImageXObject: 85,
                      paintInlineImageXObject: 86,
                      paintInlineImageXObjectGroup: 87,
                      paintImageXObjectRepeat: 88,
                      paintImageMaskXObjectRepeat: 89,
                      paintSolidColorImageMask: 90,
                      constructPath: 91
                    }),
                    (e.PasswordResponses = {
                      NEED_PASSWORD: 1,
                      INCORRECT_PASSWORD: 2
                    });
                  let n = a.WARNINGS;
                  function r(t) {
                    n >= a.WARNINGS && console.log('Warning: '.concat(t));
                  }
                  function o(t) {
                    throw new Error(t);
                  }
                  function l(t, e, s) {
                    let i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    return (
                      Object.defineProperty(t, e, {
                        value: s,
                        enumerable: !i,
                        configurable: !0,
                        writable: !1
                      }),
                      s
                    );
                  }
                  const c = (function () {
                    function t(e, s) {
                      this.constructor === t &&
                        o('Cannot initialize BaseException.'),
                        (this.message = e),
                        (this.name = s);
                    }
                    return (t.prototype = new Error()), (t.constructor = t), t;
                  })();
                  function d(t) {
                    ('object' === typeof t &&
                      void 0 !==
                        (null === t || void 0 === t ? void 0 : t.length)) ||
                      o('Invalid argument for bytesToString');
                    const e = t.length,
                      s = 8192;
                    if (e < s) return String.fromCharCode.apply(null, t);
                    const i = [];
                    for (let a = 0; a < e; a += s) {
                      const n = Math.min(a + s, e),
                        r = t.subarray(a, n);
                      i.push(String.fromCharCode.apply(null, r));
                    }
                    return i.join('');
                  }
                  function h(t) {
                    'string' !== typeof t &&
                      o('Invalid argument for stringToBytes');
                    const e = t.length,
                      s = new Uint8Array(e);
                    for (let i = 0; i < e; ++i) s[i] = 255 & t.charCodeAt(i);
                    return s;
                  }
                  (e.BaseException = c),
                    (e.PasswordException = class extends c {
                      constructor(t, e) {
                        super(t, 'PasswordException'), (this.code = e);
                      }
                    }),
                    (e.UnknownErrorException = class extends c {
                      constructor(t, e) {
                        super(t, 'UnknownErrorException'), (this.details = e);
                      }
                    }),
                    (e.InvalidPDFException = class extends c {
                      constructor(t) {
                        super(t, 'InvalidPDFException');
                      }
                    }),
                    (e.MissingPDFException = class extends c {
                      constructor(t) {
                        super(t, 'MissingPDFException');
                      }
                    }),
                    (e.UnexpectedResponseException = class extends c {
                      constructor(t, e) {
                        super(t, 'UnexpectedResponseException'),
                          (this.status = e);
                      }
                    }),
                    (e.FormatError = class extends c {
                      constructor(t) {
                        super(t, 'FormatError');
                      }
                    }),
                    (e.AbortException = class extends c {
                      constructor(t) {
                        super(t, 'AbortException');
                      }
                    }),
                    (e.FeatureTest = class {
                      static get isLittleEndian() {
                        return l(
                          this,
                          'isLittleEndian',
                          (function () {
                            const t = new Uint8Array(4);
                            return (
                              (t[0] = 1),
                              1 === new Uint32Array(t.buffer, 0, 1)[0]
                            );
                          })()
                        );
                      }
                      static get isEvalSupported() {
                        return l(
                          this,
                          'isEvalSupported',
                          (function () {
                            try {
                              return new Function(''), !0;
                            } catch {
                              return !1;
                            }
                          })()
                        );
                      }
                      static get isOffscreenCanvasSupported() {
                        return l(
                          this,
                          'isOffscreenCanvasSupported',
                          'undefined' !== typeof OffscreenCanvas
                        );
                      }
                      static get platform() {
                        return 'undefined' === typeof navigator
                          ? l(this, 'platform', { isWin: !1, isMac: !1 })
                          : l(this, 'platform', {
                              isWin: navigator.platform.includes('Win'),
                              isMac: navigator.platform.includes('Mac')
                            });
                      }
                      static get isCSSRoundSupported() {
                        var t, e;
                        return l(
                          this,
                          'isCSSRoundSupported',
                          null === (t = globalThis.CSS) ||
                            void 0 === t ||
                            null === (e = t.supports) ||
                            void 0 === e
                            ? void 0
                            : e.call(t, 'width: round(1.5px, 1px)')
                        );
                      }
                    });
                  const u = [...Array(256).keys()].map((t) =>
                    t.toString(16).padStart(2, '0')
                  );
                  e.Util = class {
                    static makeHexColor(t, e, s) {
                      return '#'.concat(u[t]).concat(u[e]).concat(u[s]);
                    }
                    static scaleMinMax(t, e) {
                      let s;
                      t[0]
                        ? (t[0] < 0 && ((s = e[0]), (e[0] = e[1]), (e[1] = s)),
                          (e[0] *= t[0]),
                          (e[1] *= t[0]),
                          t[3] < 0 && ((s = e[2]), (e[2] = e[3]), (e[3] = s)),
                          (e[2] *= t[3]),
                          (e[3] *= t[3]))
                        : ((s = e[0]),
                          (e[0] = e[2]),
                          (e[2] = s),
                          (s = e[1]),
                          (e[1] = e[3]),
                          (e[3] = s),
                          t[1] < 0 && ((s = e[2]), (e[2] = e[3]), (e[3] = s)),
                          (e[2] *= t[1]),
                          (e[3] *= t[1]),
                          t[2] < 0 && ((s = e[0]), (e[0] = e[1]), (e[1] = s)),
                          (e[0] *= t[2]),
                          (e[1] *= t[2])),
                        (e[0] += t[4]),
                        (e[1] += t[4]),
                        (e[2] += t[5]),
                        (e[3] += t[5]);
                    }
                    static transform(t, e) {
                      return [
                        t[0] * e[0] + t[2] * e[1],
                        t[1] * e[0] + t[3] * e[1],
                        t[0] * e[2] + t[2] * e[3],
                        t[1] * e[2] + t[3] * e[3],
                        t[0] * e[4] + t[2] * e[5] + t[4],
                        t[1] * e[4] + t[3] * e[5] + t[5]
                      ];
                    }
                    static applyTransform(t, e) {
                      return [
                        t[0] * e[0] + t[1] * e[2] + e[4],
                        t[0] * e[1] + t[1] * e[3] + e[5]
                      ];
                    }
                    static applyInverseTransform(t, e) {
                      const s = e[0] * e[3] - e[1] * e[2];
                      return [
                        (t[0] * e[3] -
                          t[1] * e[2] +
                          e[2] * e[5] -
                          e[4] * e[3]) /
                          s,
                        (-t[0] * e[1] +
                          t[1] * e[0] +
                          e[4] * e[1] -
                          e[5] * e[0]) /
                          s
                      ];
                    }
                    static getAxialAlignedBoundingBox(t, e) {
                      const s = this.applyTransform(t, e),
                        i = this.applyTransform(t.slice(2, 4), e),
                        a = this.applyTransform([t[0], t[3]], e),
                        n = this.applyTransform([t[2], t[1]], e);
                      return [
                        Math.min(s[0], i[0], a[0], n[0]),
                        Math.min(s[1], i[1], a[1], n[1]),
                        Math.max(s[0], i[0], a[0], n[0]),
                        Math.max(s[1], i[1], a[1], n[1])
                      ];
                    }
                    static inverseTransform(t) {
                      const e = t[0] * t[3] - t[1] * t[2];
                      return [
                        t[3] / e,
                        -t[1] / e,
                        -t[2] / e,
                        t[0] / e,
                        (t[2] * t[5] - t[4] * t[3]) / e,
                        (t[4] * t[1] - t[5] * t[0]) / e
                      ];
                    }
                    static singularValueDecompose2dScale(t) {
                      const e = [t[0], t[2], t[1], t[3]],
                        s = t[0] * e[0] + t[1] * e[2],
                        i = t[0] * e[1] + t[1] * e[3],
                        a = t[2] * e[0] + t[3] * e[2],
                        n = t[2] * e[1] + t[3] * e[3],
                        r = (s + n) / 2,
                        o = Math.sqrt((s + n) ** 2 - 4 * (s * n - a * i)) / 2,
                        l = r + o || 1,
                        c = r - o || 1;
                      return [Math.sqrt(l), Math.sqrt(c)];
                    }
                    static normalizeRect(t) {
                      const e = t.slice(0);
                      return (
                        t[0] > t[2] && ((e[0] = t[2]), (e[2] = t[0])),
                        t[1] > t[3] && ((e[1] = t[3]), (e[3] = t[1])),
                        e
                      );
                    }
                    static intersect(t, e) {
                      const s = Math.max(
                          Math.min(t[0], t[2]),
                          Math.min(e[0], e[2])
                        ),
                        i = Math.min(
                          Math.max(t[0], t[2]),
                          Math.max(e[0], e[2])
                        );
                      if (s > i) return null;
                      const a = Math.max(
                          Math.min(t[1], t[3]),
                          Math.min(e[1], e[3])
                        ),
                        n = Math.min(
                          Math.max(t[1], t[3]),
                          Math.max(e[1], e[3])
                        );
                      return a > n ? null : [s, a, i, n];
                    }
                    static bezierBoundingBox(t, e, s, i, a, n, r, o) {
                      const l = [],
                        c = [[], []];
                      let d, h, u, p, _, g, v, f;
                      for (let A = 0; A < 2; ++A)
                        if (
                          (0 === A
                            ? ((h = 6 * t - 12 * s + 6 * a),
                              (d = -3 * t + 9 * s - 9 * a + 3 * r),
                              (u = 3 * s - 3 * t))
                            : ((h = 6 * e - 12 * i + 6 * n),
                              (d = -3 * e + 9 * i - 9 * n + 3 * o),
                              (u = 3 * i - 3 * e)),
                          Math.abs(d) < 1e-12)
                        ) {
                          if (Math.abs(h) < 1e-12) continue;
                          (p = -u / h), 0 < p && p < 1 && l.push(p);
                        } else
                          (v = h * h - 4 * u * d),
                            (f = Math.sqrt(v)),
                            v < 0 ||
                              ((_ = (-h + f) / (2 * d)),
                              0 < _ && _ < 1 && l.push(_),
                              (g = (-h - f) / (2 * d)),
                              0 < g && g < 1 && l.push(g));
                      let m,
                        b = l.length;
                      const P = b;
                      for (; b--; )
                        (p = l[b]),
                          (m = 1 - p),
                          (c[0][b] =
                            m * m * m * t +
                            3 * m * m * p * s +
                            3 * m * p * p * a +
                            p * p * p * r),
                          (c[1][b] =
                            m * m * m * e +
                            3 * m * m * p * i +
                            3 * m * p * p * n +
                            p * p * p * o);
                      return (
                        (c[0][P] = t),
                        (c[1][P] = e),
                        (c[0][P + 1] = r),
                        (c[1][P + 1] = o),
                        (c[0].length = c[1].length = P + 2),
                        [
                          Math.min(...c[0]),
                          Math.min(...c[1]),
                          Math.max(...c[0]),
                          Math.max(...c[1])
                        ]
                      );
                    }
                  };
                  const p = [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225,
                    8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222,
                    8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338,
                    352, 376, 381, 305, 322, 339, 353, 382, 0, 8364
                  ];
                  function _(t) {
                    return decodeURIComponent(escape(t));
                  }
                  var g = new WeakMap();
                  e.PromiseCapability = class {
                    constructor() {
                      _classPrivateFieldInitSpec(this, g, !1),
                        (this.promise = new Promise((t, e) => {
                          (this.resolve = (e) => {
                            _classPrivateFieldSet(g, this, !0), t(e);
                          }),
                            (this.reject = (t) => {
                              _classPrivateFieldSet(g, this, !0), e(t);
                            });
                        }));
                    }
                    get settled() {
                      return _classPrivateFieldGet(g, this);
                    }
                  };
                  let v = null,
                    f = null;
                  e.AnnotationPrefix = 'pdfjs_internal_id_';
                },
                (__unused_webpack_module, exports, __w_pdfjs_require__) => {
                  Object.defineProperty(exports, '__esModule', { value: !0 }),
                    (exports.RenderTask =
                      exports.PDFWorkerUtil =
                      exports.PDFWorker =
                      exports.PDFPageProxy =
                      exports.PDFDocumentProxy =
                      exports.PDFDocumentLoadingTask =
                      exports.PDFDataRangeTransport =
                      exports.LoopbackPort =
                      exports.DefaultStandardFontDataFactory =
                      exports.DefaultFilterFactory =
                      exports.DefaultCanvasFactory =
                      exports.DefaultCMapReaderFactory =
                        void 0),
                    Object.defineProperty(exports, 'SVGGraphics', {
                      enumerable: !0,
                      get: function () {
                        return _displaySvg.SVGGraphics;
                      }
                    }),
                    (exports.build = void 0),
                    (exports.getDocument = getDocument),
                    (exports.version = void 0);
                  var _util = __w_pdfjs_require__(1),
                    _annotation_storage = __w_pdfjs_require__(3),
                    _display_utils = __w_pdfjs_require__(6),
                    _font_loader = __w_pdfjs_require__(9),
                    _displayNode_utils = __w_pdfjs_require__(10),
                    _canvas = __w_pdfjs_require__(11),
                    _worker_options = __w_pdfjs_require__(14),
                    _message_handler = __w_pdfjs_require__(15),
                    _metadata = __w_pdfjs_require__(16),
                    _optional_content_config = __w_pdfjs_require__(17),
                    _transport_stream = __w_pdfjs_require__(18),
                    _displayFetch_stream = __w_pdfjs_require__(19),
                    _displayNetwork = __w_pdfjs_require__(22),
                    _displayNode_stream = __w_pdfjs_require__(23),
                    _displaySvg = __w_pdfjs_require__(24),
                    _xfa_text = __w_pdfjs_require__(25);
                  const DEFAULT_RANGE_CHUNK_SIZE = 65536,
                    RENDERING_CANCELLED_TIMEOUT = 100,
                    DELAYED_CLEANUP_TIMEOUT = 5e3,
                    DefaultCanvasFactory = _util.isNodeJS
                      ? _displayNode_utils.NodeCanvasFactory
                      : _display_utils.DOMCanvasFactory;
                  exports.DefaultCanvasFactory = DefaultCanvasFactory;
                  const DefaultCMapReaderFactory = _util.isNodeJS
                    ? _displayNode_utils.NodeCMapReaderFactory
                    : _display_utils.DOMCMapReaderFactory;
                  exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
                  const DefaultFilterFactory = _util.isNodeJS
                    ? _displayNode_utils.NodeFilterFactory
                    : _display_utils.DOMFilterFactory;
                  exports.DefaultFilterFactory = DefaultFilterFactory;
                  const DefaultStandardFontDataFactory = _util.isNodeJS
                    ? _displayNode_utils.NodeStandardFontDataFactory
                    : _display_utils.DOMStandardFontDataFactory;
                  function getDocument(t) {
                    var e, s;
                    if (
                      ('string' === typeof t || t instanceof URL
                        ? (t = { url: t })
                        : (0, _util.isArrayBuffer)(t) && (t = { data: t }),
                      'object' !== typeof t)
                    )
                      throw new Error(
                        'Invalid parameter in getDocument, need parameter object.'
                      );
                    if (!t.url && !t.data && !t.range)
                      throw new Error(
                        'Invalid parameter object: need either .data, .range or .url'
                      );
                    const i = new PDFDocumentLoadingTask(),
                      { docId: a } = i,
                      n = t.url ? getUrlProp(t.url) : null,
                      r = t.data ? getDataProp(t.data) : null,
                      o = t.httpHeaders || null,
                      l = !0 === t.withCredentials,
                      c = null !== (e = t.password) && void 0 !== e ? e : null,
                      d =
                        t.range instanceof PDFDataRangeTransport
                          ? t.range
                          : null,
                      h =
                        Number.isInteger(t.rangeChunkSize) &&
                        t.rangeChunkSize > 0
                          ? t.rangeChunkSize
                          : DEFAULT_RANGE_CHUNK_SIZE;
                    let u = t.worker instanceof PDFWorker ? t.worker : null;
                    const p = t.verbosity,
                      _ =
                        'string' !== typeof t.docBaseUrl ||
                        (0, _display_utils.isDataScheme)(t.docBaseUrl)
                          ? null
                          : t.docBaseUrl,
                      g = 'string' === typeof t.cMapUrl ? t.cMapUrl : null,
                      v = !1 !== t.cMapPacked,
                      f = t.CMapReaderFactory || DefaultCMapReaderFactory,
                      m =
                        'string' === typeof t.standardFontDataUrl
                          ? t.standardFontDataUrl
                          : null,
                      b =
                        t.StandardFontDataFactory ||
                        DefaultStandardFontDataFactory,
                      P = !0 !== t.stopAtErrors,
                      A =
                        Number.isInteger(t.maxImageSize) && t.maxImageSize > -1
                          ? t.maxImageSize
                          : -1,
                      F = !1 !== t.isEvalSupported,
                      S =
                        'boolean' === typeof t.isOffscreenCanvasSupported
                          ? t.isOffscreenCanvasSupported
                          : !_util.isNodeJS,
                      y = Number.isInteger(t.canvasMaxAreaInBytes)
                        ? t.canvasMaxAreaInBytes
                        : -1,
                      w =
                        'boolean' === typeof t.disableFontFace
                          ? t.disableFontFace
                          : _util.isNodeJS,
                      x = !0 === t.fontExtraProperties,
                      C = !0 === t.enableXfa,
                      E = t.ownerDocument || globalThis.document,
                      k = !0 === t.disableRange,
                      M = !0 === t.disableStream,
                      T = !0 === t.disableAutoFetch,
                      I = !0 === t.pdfBug,
                      R = d
                        ? d.length
                        : null !== (s = t.length) && void 0 !== s
                        ? s
                        : NaN,
                      D =
                        'boolean' === typeof t.useSystemFonts
                          ? t.useSystemFonts
                          : !_util.isNodeJS && !w,
                      G =
                        'boolean' === typeof t.useWorkerFetch
                          ? t.useWorkerFetch
                          : f === _display_utils.DOMCMapReaderFactory &&
                            b === _display_utils.DOMStandardFontDataFactory &&
                            g &&
                            m &&
                            (0, _display_utils.isValidFetchUrl)(
                              g,
                              document.baseURI
                            ) &&
                            (0, _display_utils.isValidFetchUrl)(
                              m,
                              document.baseURI
                            ),
                      L =
                        t.canvasFactory ||
                        new DefaultCanvasFactory({ ownerDocument: E }),
                      O =
                        t.filterFactory ||
                        new DefaultFilterFactory({
                          docId: a,
                          ownerDocument: E
                        });
                    (0, _util.setVerbosityLevel)(p);
                    const B = { canvasFactory: L, filterFactory: O };
                    if (
                      (G ||
                        ((B.cMapReaderFactory = new f({
                          baseUrl: g,
                          isCompressed: v
                        })),
                        (B.standardFontDataFactory = new b({ baseUrl: m }))),
                      !u)
                    ) {
                      const t = {
                        verbosity: p,
                        port: _worker_options.GlobalWorkerOptions.workerPort
                      };
                      (u = t.port ? PDFWorker.fromPort(t) : new PDFWorker(t)),
                        (i._worker = u);
                    }
                    const N = {
                        docId: a,
                        apiVersion: '3.11.174',
                        data: r,
                        password: c,
                        disableAutoFetch: T,
                        rangeChunkSize: h,
                        length: R,
                        docBaseUrl: _,
                        enableXfa: C,
                        evaluatorOptions: {
                          maxImageSize: A,
                          disableFontFace: w,
                          ignoreErrors: P,
                          isEvalSupported: F,
                          isOffscreenCanvasSupported: S,
                          canvasMaxAreaInBytes: y,
                          fontExtraProperties: x,
                          useSystemFonts: D,
                          cMapUrl: G ? g : null,
                          standardFontDataUrl: G ? m : null
                        }
                      },
                      W = {
                        ignoreErrors: P,
                        isEvalSupported: F,
                        disableFontFace: w,
                        fontExtraProperties: x,
                        enableXfa: C,
                        ownerDocument: E,
                        disableAutoFetch: T,
                        pdfBug: I,
                        styleElement: null
                      };
                    return (
                      u.promise
                        .then(function () {
                          if (i.destroyed) throw new Error('Loading aborted');
                          const t = _fetchDocument(u, N),
                            e = new Promise(function (t) {
                              let e;
                              var s;
                              d
                                ? (e =
                                    new _transport_stream.PDFDataTransportStream(
                                      {
                                        length: R,
                                        initialData: d.initialData,
                                        progressiveDone: d.progressiveDone,
                                        contentDispositionFilename:
                                          d.contentDispositionFilename,
                                        disableRange: k,
                                        disableStream: M
                                      },
                                      d
                                    ))
                                : r ||
                                  ((s = {
                                    url: n,
                                    length: R,
                                    httpHeaders: o,
                                    withCredentials: l,
                                    rangeChunkSize: h,
                                    disableRange: k,
                                    disableStream: M
                                  }),
                                  (e = _util.isNodeJS
                                    ? new _displayNode_stream.PDFNodeStream(s)
                                    : (0, _display_utils.isValidFetchUrl)(s.url)
                                    ? new _displayFetch_stream.PDFFetchStream(s)
                                    : new _displayNetwork.PDFNetworkStream(s))),
                                t(e);
                            });
                          return Promise.all([t, e]).then(function (t) {
                            let [e, s] = t;
                            if (i.destroyed) throw new Error('Loading aborted');
                            const n = new _message_handler.MessageHandler(
                                a,
                                e,
                                u.port
                              ),
                              r = new WorkerTransport(n, i, s, W, B);
                            (i._transport = r), n.send('Ready', null);
                          });
                        })
                        .catch(i._capability.reject),
                      i
                    );
                  }
                  async function _fetchDocument(t, e) {
                    if (t.destroyed) throw new Error('Worker was destroyed');
                    const s = await t.messageHandler.sendWithPromise(
                      'GetDocRequest',
                      e,
                      e.data ? [e.data.buffer] : null
                    );
                    if (t.destroyed) throw new Error('Worker was destroyed');
                    return s;
                  }
                  function getUrlProp(t) {
                    if (t instanceof URL) return t.href;
                    try {
                      return new URL(t, window.location).href;
                    } catch {
                      if (_util.isNodeJS && 'string' === typeof t) return t;
                    }
                    throw new Error(
                      'Invalid PDF url data: either string or URL-object is expected in the url property.'
                    );
                  }
                  function getDataProp(t) {
                    if (
                      _util.isNodeJS &&
                      'undefined' !== typeof Buffer &&
                      t instanceof Buffer
                    )
                      throw new Error(
                        'Please provide binary data as `Uint8Array`, rather than `Buffer`.'
                      );
                    if (
                      t instanceof Uint8Array &&
                      t.byteLength === t.buffer.byteLength
                    )
                      return t;
                    if ('string' === typeof t)
                      return (0, _util.stringToBytes)(t);
                    if (
                      ('object' === typeof t &&
                        !isNaN(
                          null === t || void 0 === t ? void 0 : t.length
                        )) ||
                      (0, _util.isArrayBuffer)(t)
                    )
                      return new Uint8Array(t);
                    throw new Error(
                      'Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.'
                    );
                  }
                  exports.DefaultStandardFontDataFactory =
                    DefaultStandardFontDataFactory;
                  class PDFDocumentLoadingTask {
                    constructor() {
                      var t, e;
                      (this._capability = new _util.PromiseCapability()),
                        (this._transport = null),
                        (this._worker = null),
                        (this.docId = 'd'.concat(
                          ((_docId._ = ((t = _docId._), (e = t++), t)), e)
                        )),
                        (this.destroyed = !1),
                        (this.onPassword = null),
                        (this.onProgress = null);
                    }
                    get promise() {
                      return this._capability.promise;
                    }
                    async destroy() {
                      this.destroyed = !0;
                      try {
                        var t, e;
                        null !== (t = this._worker) &&
                          void 0 !== t &&
                          t.port &&
                          (this._worker._pendingDestroy = !0),
                          await (null === (e = this._transport) || void 0 === e
                            ? void 0
                            : e.destroy());
                      } catch (i) {
                        var s;
                        throw (
                          (null !== (s = this._worker) &&
                            void 0 !== s &&
                            s.port &&
                            delete this._worker._pendingDestroy,
                          i)
                        );
                      }
                      (this._transport = null),
                        this._worker &&
                          (this._worker.destroy(), (this._worker = null));
                    }
                  }
                  var _docId = { _: 0 };
                  exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
                  class PDFDataRangeTransport {
                    constructor(t, e) {
                      let s =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : null;
                      (this.length = t),
                        (this.initialData = e),
                        (this.progressiveDone = s),
                        (this.contentDispositionFilename = i),
                        (this._rangeListeners = []),
                        (this._progressListeners = []),
                        (this._progressiveReadListeners = []),
                        (this._progressiveDoneListeners = []),
                        (this._readyCapability = new _util.PromiseCapability());
                    }
                    addRangeListener(t) {
                      this._rangeListeners.push(t);
                    }
                    addProgressListener(t) {
                      this._progressListeners.push(t);
                    }
                    addProgressiveReadListener(t) {
                      this._progressiveReadListeners.push(t);
                    }
                    addProgressiveDoneListener(t) {
                      this._progressiveDoneListeners.push(t);
                    }
                    onDataRange(t, e) {
                      for (const s of this._rangeListeners) s(t, e);
                    }
                    onDataProgress(t, e) {
                      this._readyCapability.promise.then(() => {
                        for (const s of this._progressListeners) s(t, e);
                      });
                    }
                    onDataProgressiveRead(t) {
                      this._readyCapability.promise.then(() => {
                        for (const e of this._progressiveReadListeners) e(t);
                      });
                    }
                    onDataProgressiveDone() {
                      this._readyCapability.promise.then(() => {
                        for (const t of this._progressiveDoneListeners) t();
                      });
                    }
                    transportReady() {
                      this._readyCapability.resolve();
                    }
                    requestDataRange(t, e) {
                      (0, _util.unreachable)(
                        'Abstract method PDFDataRangeTransport.requestDataRange'
                      );
                    }
                    abort() {}
                  }
                  exports.PDFDataRangeTransport = PDFDataRangeTransport;
                  class PDFDocumentProxy {
                    constructor(t, e) {
                      (this._pdfInfo = t),
                        (this._transport = e),
                        Object.defineProperty(this, 'getJavaScript', {
                          value: () => (
                            (0, _display_utils.deprecated)(
                              '`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead.'
                            ),
                            this.getJSActions().then((t) => {
                              if (!t) return t;
                              const e = [];
                              for (const s in t) e.push(...t[s]);
                              return e;
                            })
                          )
                        });
                    }
                    get annotationStorage() {
                      return this._transport.annotationStorage;
                    }
                    get filterFactory() {
                      return this._transport.filterFactory;
                    }
                    get numPages() {
                      return this._pdfInfo.numPages;
                    }
                    get fingerprints() {
                      return this._pdfInfo.fingerprints;
                    }
                    get isPureXfa() {
                      return (0, _util.shadow)(
                        this,
                        'isPureXfa',
                        !!this._transport._htmlForXfa
                      );
                    }
                    get allXfaHtml() {
                      return this._transport._htmlForXfa;
                    }
                    getPage(t) {
                      return this._transport.getPage(t);
                    }
                    getPageIndex(t) {
                      return this._transport.getPageIndex(t);
                    }
                    getDestinations() {
                      return this._transport.getDestinations();
                    }
                    getDestination(t) {
                      return this._transport.getDestination(t);
                    }
                    getPageLabels() {
                      return this._transport.getPageLabels();
                    }
                    getPageLayout() {
                      return this._transport.getPageLayout();
                    }
                    getPageMode() {
                      return this._transport.getPageMode();
                    }
                    getViewerPreferences() {
                      return this._transport.getViewerPreferences();
                    }
                    getOpenAction() {
                      return this._transport.getOpenAction();
                    }
                    getAttachments() {
                      return this._transport.getAttachments();
                    }
                    getJSActions() {
                      return this._transport.getDocJSActions();
                    }
                    getOutline() {
                      return this._transport.getOutline();
                    }
                    getOptionalContentConfig() {
                      return this._transport.getOptionalContentConfig();
                    }
                    getPermissions() {
                      return this._transport.getPermissions();
                    }
                    getMetadata() {
                      return this._transport.getMetadata();
                    }
                    getMarkInfo() {
                      return this._transport.getMarkInfo();
                    }
                    getData() {
                      return this._transport.getData();
                    }
                    saveDocument() {
                      return this._transport.saveDocument();
                    }
                    getDownloadInfo() {
                      return this._transport.downloadInfoCapability.promise;
                    }
                    cleanup() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      return this._transport.startCleanup(t || this.isPureXfa);
                    }
                    destroy() {
                      return this.loadingTask.destroy();
                    }
                    get loadingParams() {
                      return this._transport.loadingParams;
                    }
                    get loadingTask() {
                      return this._transport.loadingTask;
                    }
                    getFieldObjects() {
                      return this._transport.getFieldObjects();
                    }
                    hasJSActions() {
                      return this._transport.hasJSActions();
                    }
                    getCalculationOrderIds() {
                      return this._transport.getCalculationOrderIds();
                    }
                  }
                  exports.PDFDocumentProxy = PDFDocumentProxy;
                  var _delayedCleanupTimeout = new WeakMap(),
                    _pendingCleanup = new WeakMap(),
                    _PDFPageProxy_brand = new WeakSet();
                  class PDFPageProxy {
                    constructor(t, e, s) {
                      let i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3];
                      _classPrivateMethodInitSpec(this, _PDFPageProxy_brand),
                        _classPrivateFieldInitSpec(
                          this,
                          _delayedCleanupTimeout,
                          null
                        ),
                        _classPrivateFieldInitSpec(this, _pendingCleanup, !1),
                        (this._pageIndex = t),
                        (this._pageInfo = e),
                        (this._transport = s),
                        (this._stats = i
                          ? new _display_utils.StatTimer()
                          : null),
                        (this._pdfBug = i),
                        (this.commonObjs = s.commonObjs),
                        (this.objs = new PDFObjects()),
                        (this._maybeCleanupAfterRender = !1),
                        (this._intentStates = new Map()),
                        (this.destroyed = !1);
                    }
                    get pageNumber() {
                      return this._pageIndex + 1;
                    }
                    get rotate() {
                      return this._pageInfo.rotate;
                    }
                    get ref() {
                      return this._pageInfo.ref;
                    }
                    get userUnit() {
                      return this._pageInfo.userUnit;
                    }
                    get view() {
                      return this._pageInfo.view;
                    }
                    getViewport() {
                      let {
                        scale: t,
                        rotation: e = this.rotate,
                        offsetX: s = 0,
                        offsetY: i = 0,
                        dontFlip: a = !1
                      } = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                      return new _display_utils.PageViewport({
                        viewBox: this.view,
                        scale: t,
                        rotation: e,
                        offsetX: s,
                        offsetY: i,
                        dontFlip: a
                      });
                    }
                    getAnnotations() {
                      let { intent: t = 'display' } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      const e = this._transport.getRenderingIntent(t);
                      return this._transport.getAnnotations(
                        this._pageIndex,
                        e.renderingIntent
                      );
                    }
                    getJSActions() {
                      return this._transport.getPageJSActions(this._pageIndex);
                    }
                    get filterFactory() {
                      return this._transport.filterFactory;
                    }
                    get isPureXfa() {
                      return (0, _util.shadow)(
                        this,
                        'isPureXfa',
                        !!this._transport._htmlForXfa
                      );
                    }
                    async getXfa() {
                      var t;
                      return (
                        (null === (t = this._transport._htmlForXfa) ||
                        void 0 === t
                          ? void 0
                          : t.children[this._pageIndex]) || null
                      );
                    }
                    render(t) {
                      var e, s;
                      let {
                        canvasContext: i,
                        viewport: a,
                        intent: n = 'display',
                        annotationMode: r = _util.AnnotationMode.ENABLE,
                        transform: o = null,
                        background: l = null,
                        optionalContentConfigPromise: c = null,
                        annotationCanvasMap: d = null,
                        pageColors: h = null,
                        printAnnotationStorage: u = null
                      } = t;
                      null === (e = this._stats) ||
                        void 0 === e ||
                        e.time('Overall');
                      const p = this._transport.getRenderingIntent(n, r, u);
                      _classPrivateFieldSet(_pendingCleanup, this, !1),
                        _assertClassBrand(
                          _PDFPageProxy_brand,
                          this,
                          _abortDelayedCleanup
                        ).call(this),
                        c || (c = this._transport.getOptionalContentConfig());
                      let _ = this._intentStates.get(p.cacheKey);
                      _ ||
                        ((_ = Object.create(null)),
                        this._intentStates.set(p.cacheKey, _)),
                        _.streamReaderCancelTimeout &&
                          (clearTimeout(_.streamReaderCancelTimeout),
                          (_.streamReaderCancelTimeout = null));
                      const g = !!(
                        p.renderingIntent & _util.RenderingIntentFlag.PRINT
                      );
                      var v;
                      _.displayReadyCapability ||
                        ((_.displayReadyCapability =
                          new _util.PromiseCapability()),
                        (_.operatorList = {
                          fnArray: [],
                          argsArray: [],
                          lastChunk: !1,
                          separateAnnots: null
                        }),
                        null === (v = this._stats) ||
                          void 0 === v ||
                          v.time('Page Request'),
                        this._pumpOperatorList(p));
                      const f = (t) => {
                          var e, s;
                          _.renderTasks.delete(m),
                            (this._maybeCleanupAfterRender || g) &&
                              _classPrivateFieldSet(_pendingCleanup, this, !0),
                            _assertClassBrand(
                              _PDFPageProxy_brand,
                              this,
                              _tryCleanup
                            ).call(this, !g),
                            t
                              ? (m.capability.reject(t),
                                this._abortOperatorList({
                                  intentState: _,
                                  reason: t instanceof Error ? t : new Error(t)
                                }))
                              : m.capability.resolve(),
                            null === (e = this._stats) ||
                              void 0 === e ||
                              e.timeEnd('Rendering'),
                            null === (s = this._stats) ||
                              void 0 === s ||
                              s.timeEnd('Overall');
                        },
                        m = new InternalRenderTask({
                          callback: f,
                          params: {
                            canvasContext: i,
                            viewport: a,
                            transform: o,
                            background: l
                          },
                          objs: this.objs,
                          commonObjs: this.commonObjs,
                          annotationCanvasMap: d,
                          operatorList: _.operatorList,
                          pageIndex: this._pageIndex,
                          canvasFactory: this._transport.canvasFactory,
                          filterFactory: this._transport.filterFactory,
                          useRequestAnimationFrame: !g,
                          pdfBug: this._pdfBug,
                          pageColors: h
                        });
                      ((s = _).renderTasks || (s.renderTasks = new Set())).add(
                        m
                      );
                      const b = m.task;
                      return (
                        Promise.all([_.displayReadyCapability.promise, c])
                          .then((t) => {
                            var e;
                            let [s, i] = t;
                            this.destroyed
                              ? f()
                              : (null === (e = this._stats) ||
                                  void 0 === e ||
                                  e.time('Rendering'),
                                m.initializeGraphics({
                                  transparency: s,
                                  optionalContentConfig: i
                                }),
                                m.operatorListChanged());
                          })
                          .catch(f),
                        b
                      );
                    }
                    getOperatorList() {
                      let {
                        intent: t = 'display',
                        annotationMode: e = _util.AnnotationMode.ENABLE,
                        printAnnotationStorage: s = null
                      } = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                      const i = this._transport.getRenderingIntent(t, e, s, !0);
                      let a,
                        n = this._intentStates.get(i.cacheKey);
                      var r, o;
                      return (
                        n ||
                          ((n = Object.create(null)),
                          this._intentStates.set(i.cacheKey, n)),
                        n.opListReadCapability ||
                          ((a = Object.create(null)),
                          (a.operatorListChanged = function () {
                            n.operatorList.lastChunk &&
                              (n.opListReadCapability.resolve(n.operatorList),
                              n.renderTasks.delete(a));
                          }),
                          (n.opListReadCapability =
                            new _util.PromiseCapability()),
                          (
                            (r = n).renderTasks || (r.renderTasks = new Set())
                          ).add(a),
                          (n.operatorList = {
                            fnArray: [],
                            argsArray: [],
                            lastChunk: !1,
                            separateAnnots: null
                          }),
                          null === (o = this._stats) ||
                            void 0 === o ||
                            o.time('Page Request'),
                          this._pumpOperatorList(i)),
                        n.opListReadCapability.promise
                      );
                    }
                    streamTextContent() {
                      let {
                        includeMarkedContent: t = !1,
                        disableNormalization: e = !1
                      } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return this._transport.messageHandler.sendWithStream(
                        'GetTextContent',
                        {
                          pageIndex: this._pageIndex,
                          includeMarkedContent: !0 === t,
                          disableNormalization: !0 === e
                        },
                        { highWaterMark: 100, size: (t) => t.items.length }
                      );
                    }
                    getTextContent() {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      if (this._transport._htmlForXfa)
                        return this.getXfa().then((t) =>
                          _xfa_text.XfaText.textContent(t)
                        );
                      const e = this.streamTextContent(t);
                      return new Promise(function (t, s) {
                        const i = e.getReader(),
                          a = { items: [], styles: Object.create(null) };
                        !(function e() {
                          i.read().then(function (s) {
                            let { value: i, done: n } = s;
                            n
                              ? t(a)
                              : (Object.assign(a.styles, i.styles),
                                a.items.push(...i.items),
                                e());
                          }, s);
                        })();
                      });
                    }
                    getStructTree() {
                      return this._transport.getStructTree(this._pageIndex);
                    }
                    _destroy() {
                      this.destroyed = !0;
                      const t = [];
                      for (const e of this._intentStates.values())
                        if (
                          (this._abortOperatorList({
                            intentState: e,
                            reason: new Error('Page was destroyed.'),
                            force: !0
                          }),
                          !e.opListReadCapability)
                        )
                          for (const s of e.renderTasks)
                            t.push(s.completed), s.cancel();
                      return (
                        this.objs.clear(),
                        _classPrivateFieldSet(_pendingCleanup, this, !1),
                        _assertClassBrand(
                          _PDFPageProxy_brand,
                          this,
                          _abortDelayedCleanup
                        ).call(this),
                        Promise.all(t)
                      );
                    }
                    cleanup() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      _classPrivateFieldSet(_pendingCleanup, this, !0);
                      const e = _assertClassBrand(
                        _PDFPageProxy_brand,
                        this,
                        _tryCleanup
                      ).call(this, !1);
                      return (
                        t &&
                          e &&
                          this._stats &&
                          (this._stats = new _display_utils.StatTimer()),
                        e
                      );
                    }
                    _startRenderPage(t, e) {
                      var s, i;
                      const a = this._intentStates.get(e);
                      a &&
                        (null === (s = this._stats) ||
                          void 0 === s ||
                          s.timeEnd('Page Request'),
                        null === (i = a.displayReadyCapability) ||
                          void 0 === i ||
                          i.resolve(t));
                    }
                    _renderPageChunk(t, e) {
                      for (let s = 0, i = t.length; s < i; s++)
                        e.operatorList.fnArray.push(t.fnArray[s]),
                          e.operatorList.argsArray.push(t.argsArray[s]);
                      (e.operatorList.lastChunk = t.lastChunk),
                        (e.operatorList.separateAnnots = t.separateAnnots);
                      for (const s of e.renderTasks) s.operatorListChanged();
                      t.lastChunk &&
                        _assertClassBrand(
                          _PDFPageProxy_brand,
                          this,
                          _tryCleanup
                        ).call(this, !0);
                    }
                    _pumpOperatorList(t) {
                      let {
                        renderingIntent: e,
                        cacheKey: s,
                        annotationStorageSerializable: i
                      } = t;
                      const { map: a, transfers: n } = i,
                        r = this._transport.messageHandler
                          .sendWithStream(
                            'GetOperatorList',
                            {
                              pageIndex: this._pageIndex,
                              intent: e,
                              cacheKey: s,
                              annotationStorage: a
                            },
                            n
                          )
                          .getReader(),
                        o = this._intentStates.get(s);
                      o.streamReader = r;
                      const l = () => {
                        r.read().then(
                          (t) => {
                            let { value: e, done: s } = t;
                            s
                              ? (o.streamReader = null)
                              : this._transport.destroyed ||
                                (this._renderPageChunk(e, o), l());
                          },
                          (t) => {
                            if (
                              ((o.streamReader = null),
                              !this._transport.destroyed)
                            ) {
                              if (o.operatorList) {
                                o.operatorList.lastChunk = !0;
                                for (const t of o.renderTasks)
                                  t.operatorListChanged();
                                _assertClassBrand(
                                  _PDFPageProxy_brand,
                                  this,
                                  _tryCleanup
                                ).call(this, !0);
                              }
                              if (o.displayReadyCapability)
                                o.displayReadyCapability.reject(t);
                              else {
                                if (!o.opListReadCapability) throw t;
                                o.opListReadCapability.reject(t);
                              }
                            }
                          }
                        );
                      };
                      l();
                    }
                    _abortOperatorList(t) {
                      let { intentState: e, reason: s, force: i = !1 } = t;
                      if (e.streamReader) {
                        if (
                          (e.streamReaderCancelTimeout &&
                            (clearTimeout(e.streamReaderCancelTimeout),
                            (e.streamReaderCancelTimeout = null)),
                          !i)
                        ) {
                          if (e.renderTasks.size > 0) return;
                          if (
                            s instanceof
                            _display_utils.RenderingCancelledException
                          ) {
                            let t = RENDERING_CANCELLED_TIMEOUT;
                            return (
                              s.extraDelay > 0 &&
                                s.extraDelay < 1e3 &&
                                (t += s.extraDelay),
                              void (e.streamReaderCancelTimeout = setTimeout(
                                () => {
                                  (e.streamReaderCancelTimeout = null),
                                    this._abortOperatorList({
                                      intentState: e,
                                      reason: s,
                                      force: !0
                                    });
                                },
                                t
                              ))
                            );
                          }
                        }
                        if (
                          (e.streamReader
                            .cancel(new _util.AbortException(s.message))
                            .catch(() => {}),
                          (e.streamReader = null),
                          !this._transport.destroyed)
                        ) {
                          for (const [t, s] of this._intentStates)
                            if (s === e) {
                              this._intentStates.delete(t);
                              break;
                            }
                          this.cleanup();
                        }
                      }
                    }
                    get stats() {
                      return this._stats;
                    }
                  }
                  function _tryCleanup() {
                    let t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (
                      (_assertClassBrand(
                        _PDFPageProxy_brand,
                        this,
                        _abortDelayedCleanup
                      ).call(this),
                      !_classPrivateFieldGet(_pendingCleanup, this) ||
                        this.destroyed)
                    )
                      return !1;
                    if (t)
                      return (
                        _classPrivateFieldSet(
                          _delayedCleanupTimeout,
                          this,
                          setTimeout(() => {
                            _classPrivateFieldSet(
                              _delayedCleanupTimeout,
                              this,
                              null
                            ),
                              _assertClassBrand(
                                _PDFPageProxy_brand,
                                this,
                                _tryCleanup
                              ).call(this, !1);
                          }, DELAYED_CLEANUP_TIMEOUT)
                        ),
                        !1
                      );
                    for (const {
                      renderTasks: e,
                      operatorList: s
                    } of this._intentStates.values())
                      if (e.size > 0 || !s.lastChunk) return !1;
                    return (
                      this._intentStates.clear(),
                      this.objs.clear(),
                      _classPrivateFieldSet(_pendingCleanup, this, !1),
                      !0
                    );
                  }
                  function _abortDelayedCleanup() {
                    _classPrivateFieldGet(_delayedCleanupTimeout, this) &&
                      (clearTimeout(
                        _classPrivateFieldGet(_delayedCleanupTimeout, this)
                      ),
                      _classPrivateFieldSet(
                        _delayedCleanupTimeout,
                        this,
                        null
                      ));
                  }
                  exports.PDFPageProxy = PDFPageProxy;
                  var _listeners = new WeakMap(),
                    _deferred = new WeakMap();
                  class LoopbackPort {
                    constructor() {
                      _classPrivateFieldInitSpec(this, _listeners, new Set()),
                        _classPrivateFieldInitSpec(
                          this,
                          _deferred,
                          Promise.resolve()
                        );
                    }
                    postMessage(t, e) {
                      const s = {
                        data: structuredClone(t, e ? { transfer: e } : null)
                      };
                      _classPrivateFieldGet(_deferred, this).then(() => {
                        for (const t of _classPrivateFieldGet(_listeners, this))
                          t.call(this, s);
                      });
                    }
                    addEventListener(t, e) {
                      _classPrivateFieldGet(_listeners, this).add(e);
                    }
                    removeEventListener(t, e) {
                      _classPrivateFieldGet(_listeners, this).delete(e);
                    }
                    terminate() {
                      _classPrivateFieldGet(_listeners, this).clear();
                    }
                  }
                  exports.LoopbackPort = LoopbackPort;
                  const PDFWorkerUtil = {
                    isWorkerDisabled: !1,
                    fallbackWorkerSrc: null,
                    fakeWorkerId: 0
                  };
                  if (((exports.PDFWorkerUtil = PDFWorkerUtil), _util.isNodeJS))
                    (PDFWorkerUtil.isWorkerDisabled = !0),
                      (PDFWorkerUtil.fallbackWorkerSrc = './pdf.worker.js');
                  else if ('object' === typeof document) {
                    var _document;
                    const t =
                      null === (_document = document) ||
                      void 0 === _document ||
                      null === (_document = _document.currentScript) ||
                      void 0 === _document
                        ? void 0
                        : _document.src;
                    t &&
                      (PDFWorkerUtil.fallbackWorkerSrc = t.replace(
                        /(\.(?:min\.)?js)(\?.*)?$/i,
                        '.worker$1$2'
                      ));
                  }
                  (PDFWorkerUtil.isSameOrigin = function (t, e) {
                    let s;
                    try {
                      if (((s = new URL(t)), !s.origin || 'null' === s.origin))
                        return !1;
                    } catch {
                      return !1;
                    }
                    const i = new URL(e, s);
                    return s.origin === i.origin;
                  }),
                    (PDFWorkerUtil.createCDNWrapper = function (t) {
                      const e = 'importScripts("'.concat(t, '");');
                      return URL.createObjectURL(new Blob([e]));
                    });
                  class PDFWorker {
                    constructor() {
                      let {
                        name: t = null,
                        port: e = null,
                        verbosity: s = (0, _util.getVerbosityLevel)()
                      } = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                      if (
                        ((this.name = t),
                        (this.destroyed = !1),
                        (this.verbosity = s),
                        (this._readyCapability = new _util.PromiseCapability()),
                        (this._port = null),
                        (this._webWorker = null),
                        (this._messageHandler = null),
                        e)
                      ) {
                        var i;
                        if (
                          null !== (i = _workerPorts._) &&
                          void 0 !== i &&
                          i.has(e)
                        )
                          throw new Error(
                            'Cannot use more than one PDFWorker per port.'
                          );
                        return (
                          (
                            _workerPorts._ || (_workerPorts._ = new WeakMap())
                          ).set(e, this),
                          void this._initializeFromPort(e)
                        );
                      }
                      this._initialize();
                    }
                    get promise() {
                      return this._readyCapability.promise;
                    }
                    get port() {
                      return this._port;
                    }
                    get messageHandler() {
                      return this._messageHandler;
                    }
                    _initializeFromPort(t) {
                      (this._port = t),
                        (this._messageHandler =
                          new _message_handler.MessageHandler(
                            'main',
                            'worker',
                            t
                          )),
                        this._messageHandler.on('ready', function () {}),
                        this._readyCapability.resolve(),
                        this._messageHandler.send('configure', {
                          verbosity: this.verbosity
                        });
                    }
                    _initialize() {
                      if (
                        !PDFWorkerUtil.isWorkerDisabled &&
                        !PDFWorker._mainThreadWorkerMessageHandler
                      ) {
                        let { workerSrc: t } = PDFWorker;
                        try {
                          PDFWorkerUtil.isSameOrigin(window.location.href, t) ||
                            (t = PDFWorkerUtil.createCDNWrapper(
                              new URL(t, window.location).href
                            ));
                          const e = new Worker(t),
                            s = new _message_handler.MessageHandler(
                              'main',
                              'worker',
                              e
                            ),
                            i = () => {
                              e.removeEventListener('error', a),
                                s.destroy(),
                                e.terminate(),
                                this.destroyed
                                  ? this._readyCapability.reject(
                                      new Error('Worker was destroyed')
                                    )
                                  : this._setupFakeWorker();
                            },
                            a = () => {
                              this._webWorker || i();
                            };
                          e.addEventListener('error', a),
                            s.on('test', (t) => {
                              e.removeEventListener('error', a),
                                this.destroyed
                                  ? i()
                                  : t
                                  ? ((this._messageHandler = s),
                                    (this._port = e),
                                    (this._webWorker = e),
                                    this._readyCapability.resolve(),
                                    s.send('configure', {
                                      verbosity: this.verbosity
                                    }))
                                  : (this._setupFakeWorker(),
                                    s.destroy(),
                                    e.terminate());
                            }),
                            s.on('ready', (t) => {
                              if (
                                (e.removeEventListener('error', a),
                                this.destroyed)
                              )
                                i();
                              else
                                try {
                                  n();
                                } catch {
                                  this._setupFakeWorker();
                                }
                            });
                          const n = () => {
                            const t = new Uint8Array();
                            s.send('test', t, [t.buffer]);
                          };
                          return void n();
                        } catch {
                          (0, _util.info)('The worker has been disabled.');
                        }
                      }
                      this._setupFakeWorker();
                    }
                    _setupFakeWorker() {
                      PDFWorkerUtil.isWorkerDisabled ||
                        ((0, _util.warn)('Setting up fake worker.'),
                        (PDFWorkerUtil.isWorkerDisabled = !0)),
                        PDFWorker._setupFakeWorkerGlobal
                          .then((t) => {
                            if (this.destroyed)
                              return void this._readyCapability.reject(
                                new Error('Worker was destroyed')
                              );
                            const e = new LoopbackPort();
                            this._port = e;
                            const s = 'fake'.concat(
                                PDFWorkerUtil.fakeWorkerId++
                              ),
                              i = new _message_handler.MessageHandler(
                                s + '_worker',
                                s,
                                e
                              );
                            t.setup(i, e);
                            const a = new _message_handler.MessageHandler(
                              s,
                              s + '_worker',
                              e
                            );
                            (this._messageHandler = a),
                              this._readyCapability.resolve(),
                              a.send('configure', {
                                verbosity: this.verbosity
                              });
                          })
                          .catch((t) => {
                            this._readyCapability.reject(
                              new Error(
                                'Setting up fake worker failed: "'.concat(
                                  t.message,
                                  '".'
                                )
                              )
                            );
                          });
                    }
                    destroy() {
                      var t;
                      (this.destroyed = !0),
                        this._webWorker &&
                          (this._webWorker.terminate(),
                          (this._webWorker = null)),
                        null === (t = _workerPorts._) ||
                          void 0 === t ||
                          t.delete(this._port),
                        (this._port = null),
                        this._messageHandler &&
                          (this._messageHandler.destroy(),
                          (this._messageHandler = null));
                    }
                    static fromPort(t) {
                      var e;
                      if (null === t || void 0 === t || !t.port)
                        throw new Error(
                          'PDFWorker.fromPort - invalid method signature.'
                        );
                      const s =
                        null ===
                          (e = _assertClassBrand(
                            PDFWorker,
                            this,
                            _workerPorts
                          )._) || void 0 === e
                          ? void 0
                          : e.get(t.port);
                      if (s) {
                        if (s._pendingDestroy)
                          throw new Error(
                            'PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.'
                          );
                        return s;
                      }
                      return new PDFWorker(t);
                    }
                    static get workerSrc() {
                      if (_worker_options.GlobalWorkerOptions.workerSrc)
                        return _worker_options.GlobalWorkerOptions.workerSrc;
                      if (null !== PDFWorkerUtil.fallbackWorkerSrc)
                        return (
                          _util.isNodeJS ||
                            (0, _display_utils.deprecated)(
                              'No "GlobalWorkerOptions.workerSrc" specified.'
                            ),
                          PDFWorkerUtil.fallbackWorkerSrc
                        );
                      throw new Error(
                        'No "GlobalWorkerOptions.workerSrc" specified.'
                      );
                    }
                    static get _mainThreadWorkerMessageHandler() {
                      try {
                        var t;
                        return (
                          (null === (t = globalThis.pdfjsWorker) || void 0 === t
                            ? void 0
                            : t.WorkerMessageHandler) || null
                        );
                      } catch {
                        return null;
                      }
                    }
                    static get _setupFakeWorkerGlobal() {
                      const loader = async () => {
                        const mainWorkerMessageHandler =
                          this._mainThreadWorkerMessageHandler;
                        if (mainWorkerMessageHandler)
                          return mainWorkerMessageHandler;
                        if (_util.isNodeJS) {
                          const worker = eval('require')(this.workerSrc);
                          return worker.WorkerMessageHandler;
                        }
                        return (
                          await (0, _display_utils.loadScript)(this.workerSrc),
                          window.pdfjsWorker.WorkerMessageHandler
                        );
                      };
                      return (0, _util.shadow)(
                        this,
                        '_setupFakeWorkerGlobal',
                        loader()
                      );
                    }
                  }
                  var _workerPorts = { _: void 0 };
                  exports.PDFWorker = PDFWorker;
                  var _methodPromises = new WeakMap(),
                    _pageCache = new WeakMap(),
                    _pagePromises = new WeakMap(),
                    _passwordCapability = new WeakMap(),
                    _WorkerTransport_brand = new WeakSet();
                  class WorkerTransport {
                    constructor(t, e, s, i, a) {
                      _classPrivateMethodInitSpec(this, _WorkerTransport_brand),
                        _classPrivateFieldInitSpec(
                          this,
                          _methodPromises,
                          new Map()
                        ),
                        _classPrivateFieldInitSpec(this, _pageCache, new Map()),
                        _classPrivateFieldInitSpec(
                          this,
                          _pagePromises,
                          new Map()
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          _passwordCapability,
                          null
                        ),
                        (this.messageHandler = t),
                        (this.loadingTask = e),
                        (this.commonObjs = new PDFObjects()),
                        (this.fontLoader = new _font_loader.FontLoader({
                          ownerDocument: i.ownerDocument,
                          styleElement: i.styleElement
                        })),
                        (this._params = i),
                        (this.canvasFactory = a.canvasFactory),
                        (this.filterFactory = a.filterFactory),
                        (this.cMapReaderFactory = a.cMapReaderFactory),
                        (this.standardFontDataFactory =
                          a.standardFontDataFactory),
                        (this.destroyed = !1),
                        (this.destroyCapability = null),
                        (this._networkStream = s),
                        (this._fullReader = null),
                        (this._lastProgress = null),
                        (this.downloadInfoCapability =
                          new _util.PromiseCapability()),
                        this.setupMessageHandler();
                    }
                    get annotationStorage() {
                      return (0, _util.shadow)(
                        this,
                        'annotationStorage',
                        new _annotation_storage.AnnotationStorage()
                      );
                    }
                    getRenderingIntent(t) {
                      let e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : _util.AnnotationMode.ENABLE,
                        s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null,
                        i =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3],
                        a = _util.RenderingIntentFlag.DISPLAY,
                        n = _annotation_storage.SerializableEmpty;
                      switch (t) {
                        case 'any':
                          a = _util.RenderingIntentFlag.ANY;
                          break;
                        case 'display':
                          break;
                        case 'print':
                          a = _util.RenderingIntentFlag.PRINT;
                          break;
                        default:
                          (0, _util.warn)(
                            'getRenderingIntent - invalid intent: '.concat(t)
                          );
                      }
                      switch (e) {
                        case _util.AnnotationMode.DISABLE:
                          a += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                          break;
                        case _util.AnnotationMode.ENABLE:
                          break;
                        case _util.AnnotationMode.ENABLE_FORMS:
                          a += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                          break;
                        case _util.AnnotationMode.ENABLE_STORAGE:
                          (a += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE),
                            (n = (
                              a & _util.RenderingIntentFlag.PRINT &&
                              s instanceof
                                _annotation_storage.PrintAnnotationStorage
                                ? s
                                : this.annotationStorage
                            ).serializable);
                          break;
                        default:
                          (0, _util.warn)(
                            'getRenderingIntent - invalid annotationMode: '.concat(
                              e
                            )
                          );
                      }
                      return (
                        i && (a += _util.RenderingIntentFlag.OPLIST),
                        {
                          renderingIntent: a,
                          cacheKey: ''.concat(a, '_').concat(n.hash),
                          annotationStorageSerializable: n
                        }
                      );
                    }
                    destroy() {
                      var t;
                      if (this.destroyCapability)
                        return this.destroyCapability.promise;
                      (this.destroyed = !0),
                        (this.destroyCapability =
                          new _util.PromiseCapability()),
                        null ===
                          (t = _classPrivateFieldGet(
                            _passwordCapability,
                            this
                          )) ||
                          void 0 === t ||
                          t.reject(
                            new Error(
                              'Worker was destroyed during onPassword callback'
                            )
                          );
                      const e = [];
                      for (const i of _classPrivateFieldGet(
                        _pageCache,
                        this
                      ).values())
                        e.push(i._destroy());
                      _classPrivateFieldGet(_pageCache, this).clear(),
                        _classPrivateFieldGet(_pagePromises, this).clear(),
                        this.hasOwnProperty('annotationStorage') &&
                          this.annotationStorage.resetModified();
                      const s = this.messageHandler.sendWithPromise(
                        'Terminate',
                        null
                      );
                      return (
                        e.push(s),
                        Promise.all(e).then(() => {
                          var t;
                          this.commonObjs.clear(),
                            this.fontLoader.clear(),
                            _classPrivateFieldGet(
                              _methodPromises,
                              this
                            ).clear(),
                            this.filterFactory.destroy(),
                            null === (t = this._networkStream) ||
                              void 0 === t ||
                              t.cancelAllRequests(
                                new _util.AbortException(
                                  'Worker was terminated.'
                                )
                              ),
                            this.messageHandler &&
                              (this.messageHandler.destroy(),
                              (this.messageHandler = null)),
                            this.destroyCapability.resolve();
                        }, this.destroyCapability.reject),
                        this.destroyCapability.promise
                      );
                    }
                    setupMessageHandler() {
                      const { messageHandler: t, loadingTask: e } = this;
                      t.on('GetReader', (t, e) => {
                        (0, _util.assert)(
                          this._networkStream,
                          'GetReader - no `IPDFStream` instance available.'
                        ),
                          (this._fullReader =
                            this._networkStream.getFullReader()),
                          (this._fullReader.onProgress = (t) => {
                            this._lastProgress = {
                              loaded: t.loaded,
                              total: t.total
                            };
                          }),
                          (e.onPull = () => {
                            this._fullReader
                              .read()
                              .then(function (t) {
                                let { value: s, done: i } = t;
                                i
                                  ? e.close()
                                  : ((0, _util.assert)(
                                      s instanceof ArrayBuffer,
                                      'GetReader - expected an ArrayBuffer.'
                                    ),
                                    e.enqueue(new Uint8Array(s), 1, [s]));
                              })
                              .catch((t) => {
                                e.error(t);
                              });
                          }),
                          (e.onCancel = (t) => {
                            this._fullReader.cancel(t),
                              e.ready.catch((t) => {
                                if (!this.destroyed) throw t;
                              });
                          });
                      }),
                        t.on('ReaderHeadersReady', (t) => {
                          const s = new _util.PromiseCapability(),
                            i = this._fullReader;
                          return (
                            i.headersReady.then(() => {
                              var t;
                              (i.isStreamingSupported && i.isRangeSupported) ||
                                (this._lastProgress &&
                                  (null === (t = e.onProgress) ||
                                    void 0 === t ||
                                    t.call(e, this._lastProgress)),
                                (i.onProgress = (t) => {
                                  var s;
                                  null === (s = e.onProgress) ||
                                    void 0 === s ||
                                    s.call(e, {
                                      loaded: t.loaded,
                                      total: t.total
                                    });
                                }));
                              s.resolve({
                                isStreamingSupported: i.isStreamingSupported,
                                isRangeSupported: i.isRangeSupported,
                                contentLength: i.contentLength
                              });
                            }, s.reject),
                            s.promise
                          );
                        }),
                        t.on('GetRangeReader', (t, e) => {
                          (0, _util.assert)(
                            this._networkStream,
                            'GetRangeReader - no `IPDFStream` instance available.'
                          );
                          const s = this._networkStream.getRangeReader(
                            t.begin,
                            t.end
                          );
                          s
                            ? ((e.onPull = () => {
                                s.read()
                                  .then(function (t) {
                                    let { value: s, done: i } = t;
                                    i
                                      ? e.close()
                                      : ((0, _util.assert)(
                                          s instanceof ArrayBuffer,
                                          'GetRangeReader - expected an ArrayBuffer.'
                                        ),
                                        e.enqueue(new Uint8Array(s), 1, [s]));
                                  })
                                  .catch((t) => {
                                    e.error(t);
                                  });
                              }),
                              (e.onCancel = (t) => {
                                s.cancel(t),
                                  e.ready.catch((t) => {
                                    if (!this.destroyed) throw t;
                                  });
                              }))
                            : e.close();
                        }),
                        t.on('GetDoc', (t) => {
                          let { pdfInfo: s } = t;
                          (this._numPages = s.numPages),
                            (this._htmlForXfa = s.htmlForXfa),
                            delete s.htmlForXfa,
                            e._capability.resolve(
                              new PDFDocumentProxy(s, this)
                            );
                        }),
                        t.on('DocException', function (t) {
                          let s;
                          switch (t.name) {
                            case 'PasswordException':
                              s = new _util.PasswordException(
                                t.message,
                                t.code
                              );
                              break;
                            case 'InvalidPDFException':
                              s = new _util.InvalidPDFException(t.message);
                              break;
                            case 'MissingPDFException':
                              s = new _util.MissingPDFException(t.message);
                              break;
                            case 'UnexpectedResponseException':
                              s = new _util.UnexpectedResponseException(
                                t.message,
                                t.status
                              );
                              break;
                            case 'UnknownErrorException':
                              s = new _util.UnknownErrorException(
                                t.message,
                                t.details
                              );
                              break;
                            default:
                              (0,
                              _util.unreachable)('DocException - expected a valid Error.');
                          }
                          e._capability.reject(s);
                        }),
                        t.on('PasswordRequest', (t) => {
                          if (
                            (_classPrivateFieldSet(
                              _passwordCapability,
                              this,
                              new _util.PromiseCapability()
                            ),
                            e.onPassword)
                          ) {
                            const i = (t) => {
                              t instanceof Error
                                ? _classPrivateFieldGet(
                                    _passwordCapability,
                                    this
                                  ).reject(t)
                                : _classPrivateFieldGet(
                                    _passwordCapability,
                                    this
                                  ).resolve({ password: t });
                            };
                            try {
                              e.onPassword(i, t.code);
                            } catch (s) {
                              _classPrivateFieldGet(
                                _passwordCapability,
                                this
                              ).reject(s);
                            }
                          } else
                            _classPrivateFieldGet(
                              _passwordCapability,
                              this
                            ).reject(
                              new _util.PasswordException(t.message, t.code)
                            );
                          return _classPrivateFieldGet(
                            _passwordCapability,
                            this
                          ).promise;
                        }),
                        t.on('DataLoaded', (t) => {
                          var s;
                          null === (s = e.onProgress) ||
                            void 0 === s ||
                            s.call(e, { loaded: t.length, total: t.length }),
                            this.downloadInfoCapability.resolve(t);
                        }),
                        t.on('StartRenderPage', (t) => {
                          this.destroyed ||
                            _classPrivateFieldGet(_pageCache, this)
                              .get(t.pageIndex)
                              ._startRenderPage(t.transparency, t.cacheKey);
                        }),
                        t.on('commonobj', (e) => {
                          var s;
                          let [i, a, n] = e;
                          if (!this.destroyed && !this.commonObjs.has(i))
                            switch (a) {
                              case 'Font':
                                const e = this._params;
                                if ('error' in n) {
                                  const t = n.error;
                                  (0, _util.warn)(
                                    'Error during font loading: '.concat(t)
                                  ),
                                    this.commonObjs.resolve(i, t);
                                  break;
                                }
                                const r =
                                    e.pdfBug &&
                                    null !== (s = globalThis.FontInspector) &&
                                    void 0 !== s &&
                                    s.enabled
                                      ? (t, e) =>
                                          globalThis.FontInspector.fontAdded(
                                            t,
                                            e
                                          )
                                      : null,
                                  o = new _font_loader.FontFaceObject(n, {
                                    isEvalSupported: e.isEvalSupported,
                                    disableFontFace: e.disableFontFace,
                                    ignoreErrors: e.ignoreErrors,
                                    inspectFont: r
                                  });
                                this.fontLoader
                                  .bind(o)
                                  .catch((e) =>
                                    t.sendWithPromise('FontFallback', { id: i })
                                  )
                                  .finally(() => {
                                    !e.fontExtraProperties &&
                                      o.data &&
                                      (o.data = null),
                                      this.commonObjs.resolve(i, o);
                                  });
                                break;
                              case 'FontPath':
                              case 'Image':
                              case 'Pattern':
                                this.commonObjs.resolve(i, n);
                                break;
                              default:
                                throw new Error(
                                  'Got unknown common object type '.concat(a)
                                );
                            }
                        }),
                        t.on('obj', (t) => {
                          let [e, s, i, a] = t;
                          if (this.destroyed) return;
                          const n = _classPrivateFieldGet(_pageCache, this).get(
                            s
                          );
                          if (!n.objs.has(e))
                            switch (i) {
                              case 'Image':
                                if ((n.objs.resolve(e, a), a)) {
                                  let t;
                                  if (a.bitmap) {
                                    const { width: e, height: s } = a;
                                    t = e * s * 4;
                                  } else {
                                    var r;
                                    t =
                                      (null === (r = a.data) || void 0 === r
                                        ? void 0
                                        : r.length) || 0;
                                  }
                                  t > _util.MAX_IMAGE_SIZE_TO_CACHE &&
                                    (n._maybeCleanupAfterRender = !0);
                                }
                                break;
                              case 'Pattern':
                                n.objs.resolve(e, a);
                                break;
                              default:
                                throw new Error(
                                  'Got unknown object type '.concat(i)
                                );
                            }
                        }),
                        t.on('DocProgress', (t) => {
                          var s;
                          this.destroyed ||
                            null === (s = e.onProgress) ||
                            void 0 === s ||
                            s.call(e, { loaded: t.loaded, total: t.total });
                        }),
                        t.on('FetchBuiltInCMap', (t) =>
                          this.destroyed
                            ? Promise.reject(new Error('Worker was destroyed.'))
                            : this.cMapReaderFactory
                            ? this.cMapReaderFactory.fetch(t)
                            : Promise.reject(
                                new Error(
                                  'CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.'
                                )
                              )
                        ),
                        t.on('FetchStandardFontData', (t) =>
                          this.destroyed
                            ? Promise.reject(new Error('Worker was destroyed.'))
                            : this.standardFontDataFactory
                            ? this.standardFontDataFactory.fetch(t)
                            : Promise.reject(
                                new Error(
                                  'StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.'
                                )
                              )
                        );
                    }
                    getData() {
                      return this.messageHandler.sendWithPromise(
                        'GetData',
                        null
                      );
                    }
                    saveDocument() {
                      var t, e;
                      this.annotationStorage.size <= 0 &&
                        (0, _util.warn)(
                          'saveDocument called while `annotationStorage` is empty, please use the getData-method instead.'
                        );
                      const { map: s, transfers: i } =
                        this.annotationStorage.serializable;
                      return this.messageHandler
                        .sendWithPromise(
                          'SaveDocument',
                          {
                            isPureXfa: !!this._htmlForXfa,
                            numPages: this._numPages,
                            annotationStorage: s,
                            filename:
                              null !==
                                (t =
                                  null === (e = this._fullReader) ||
                                  void 0 === e
                                    ? void 0
                                    : e.filename) && void 0 !== t
                                ? t
                                : null
                          },
                          i
                        )
                        .finally(() => {
                          this.annotationStorage.resetModified();
                        });
                    }
                    getPage(t) {
                      if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
                        return Promise.reject(
                          new Error('Invalid page request.')
                        );
                      const e = t - 1,
                        s = _classPrivateFieldGet(_pagePromises, this).get(e);
                      if (s) return s;
                      const i = this.messageHandler
                        .sendWithPromise('GetPage', { pageIndex: e })
                        .then((t) => {
                          if (this.destroyed)
                            throw new Error('Transport destroyed');
                          const s = new PDFPageProxy(
                            e,
                            t,
                            this,
                            this._params.pdfBug
                          );
                          return (
                            _classPrivateFieldGet(_pageCache, this).set(e, s), s
                          );
                        });
                      return (
                        _classPrivateFieldGet(_pagePromises, this).set(e, i), i
                      );
                    }
                    getPageIndex(t) {
                      return 'object' !== typeof t ||
                        null === t ||
                        !Number.isInteger(t.num) ||
                        t.num < 0 ||
                        !Number.isInteger(t.gen) ||
                        t.gen < 0
                        ? Promise.reject(
                            new Error('Invalid pageIndex request.')
                          )
                        : this.messageHandler.sendWithPromise('GetPageIndex', {
                            num: t.num,
                            gen: t.gen
                          });
                    }
                    getAnnotations(t, e) {
                      return this.messageHandler.sendWithPromise(
                        'GetAnnotations',
                        { pageIndex: t, intent: e }
                      );
                    }
                    getFieldObjects() {
                      return _assertClassBrand(
                        _WorkerTransport_brand,
                        this,
                        _cacheSimpleMethod
                      ).call(this, 'GetFieldObjects');
                    }
                    hasJSActions() {
                      return _assertClassBrand(
                        _WorkerTransport_brand,
                        this,
                        _cacheSimpleMethod
                      ).call(this, 'HasJSActions');
                    }
                    getCalculationOrderIds() {
                      return this.messageHandler.sendWithPromise(
                        'GetCalculationOrderIds',
                        null
                      );
                    }
                    getDestinations() {
                      return this.messageHandler.sendWithPromise(
                        'GetDestinations',
                        null
                      );
                    }
                    getDestination(t) {
                      return 'string' !== typeof t
                        ? Promise.reject(
                            new Error('Invalid destination request.')
                          )
                        : this.messageHandler.sendWithPromise(
                            'GetDestination',
                            { id: t }
                          );
                    }
                    getPageLabels() {
                      return this.messageHandler.sendWithPromise(
                        'GetPageLabels',
                        null
                      );
                    }
                    getPageLayout() {
                      return this.messageHandler.sendWithPromise(
                        'GetPageLayout',
                        null
                      );
                    }
                    getPageMode() {
                      return this.messageHandler.sendWithPromise(
                        'GetPageMode',
                        null
                      );
                    }
                    getViewerPreferences() {
                      return this.messageHandler.sendWithPromise(
                        'GetViewerPreferences',
                        null
                      );
                    }
                    getOpenAction() {
                      return this.messageHandler.sendWithPromise(
                        'GetOpenAction',
                        null
                      );
                    }
                    getAttachments() {
                      return this.messageHandler.sendWithPromise(
                        'GetAttachments',
                        null
                      );
                    }
                    getDocJSActions() {
                      return _assertClassBrand(
                        _WorkerTransport_brand,
                        this,
                        _cacheSimpleMethod
                      ).call(this, 'GetDocJSActions');
                    }
                    getPageJSActions(t) {
                      return this.messageHandler.sendWithPromise(
                        'GetPageJSActions',
                        { pageIndex: t }
                      );
                    }
                    getStructTree(t) {
                      return this.messageHandler.sendWithPromise(
                        'GetStructTree',
                        { pageIndex: t }
                      );
                    }
                    getOutline() {
                      return this.messageHandler.sendWithPromise(
                        'GetOutline',
                        null
                      );
                    }
                    getOptionalContentConfig() {
                      return this.messageHandler
                        .sendWithPromise('GetOptionalContentConfig', null)
                        .then(
                          (t) =>
                            new _optional_content_config.OptionalContentConfig(
                              t
                            )
                        );
                    }
                    getPermissions() {
                      return this.messageHandler.sendWithPromise(
                        'GetPermissions',
                        null
                      );
                    }
                    getMetadata() {
                      const t = 'GetMetadata',
                        e = _classPrivateFieldGet(_methodPromises, this).get(t);
                      if (e) return e;
                      const s = this.messageHandler
                        .sendWithPromise(t, null)
                        .then((t) => {
                          var e, s, i, a;
                          return {
                            info: t[0],
                            metadata: t[1]
                              ? new _metadata.Metadata(t[1])
                              : null,
                            contentDispositionFilename:
                              null !==
                                (e =
                                  null === (s = this._fullReader) ||
                                  void 0 === s
                                    ? void 0
                                    : s.filename) && void 0 !== e
                                ? e
                                : null,
                            contentLength:
                              null !==
                                (i =
                                  null === (a = this._fullReader) ||
                                  void 0 === a
                                    ? void 0
                                    : a.contentLength) && void 0 !== i
                                ? i
                                : null
                          };
                        });
                      return (
                        _classPrivateFieldGet(_methodPromises, this).set(t, s),
                        s
                      );
                    }
                    getMarkInfo() {
                      return this.messageHandler.sendWithPromise(
                        'GetMarkInfo',
                        null
                      );
                    }
                    async startCleanup() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      if (!this.destroyed) {
                        await this.messageHandler.sendWithPromise(
                          'Cleanup',
                          null
                        );
                        for (const t of _classPrivateFieldGet(
                          _pageCache,
                          this
                        ).values())
                          if (!t.cleanup())
                            throw new Error(
                              'startCleanup: Page '.concat(
                                t.pageNumber,
                                ' is currently rendering.'
                              )
                            );
                        this.commonObjs.clear(),
                          t || this.fontLoader.clear(),
                          _classPrivateFieldGet(_methodPromises, this).clear(),
                          this.filterFactory.destroy(!0);
                      }
                    }
                    get loadingParams() {
                      const { disableAutoFetch: t, enableXfa: e } =
                        this._params;
                      return (0, _util.shadow)(this, 'loadingParams', {
                        disableAutoFetch: t,
                        enableXfa: e
                      });
                    }
                  }
                  function _cacheSimpleMethod(t) {
                    let e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    const s = _classPrivateFieldGet(_methodPromises, this).get(
                      t
                    );
                    if (s) return s;
                    const i = this.messageHandler.sendWithPromise(t, e);
                    return (
                      _classPrivateFieldGet(_methodPromises, this).set(t, i), i
                    );
                  }
                  var _objs = new WeakMap(),
                    _PDFObjects_brand = new WeakSet();
                  class PDFObjects {
                    constructor() {
                      _classPrivateMethodInitSpec(this, _PDFObjects_brand),
                        _classPrivateFieldInitSpec(
                          this,
                          _objs,
                          Object.create(null)
                        );
                    }
                    get(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (e) {
                        const s = _assertClassBrand(
                          _PDFObjects_brand,
                          this,
                          _ensureObj
                        ).call(this, t);
                        return s.capability.promise.then(() => e(s.data)), null;
                      }
                      const s = _classPrivateFieldGet(_objs, this)[t];
                      if (null === s || void 0 === s || !s.capability.settled)
                        throw new Error(
                          "Requesting object that isn't resolved yet ".concat(
                            t,
                            '.'
                          )
                        );
                      return s.data;
                    }
                    has(t) {
                      const e = _classPrivateFieldGet(_objs, this)[t];
                      return (
                        (null === e || void 0 === e
                          ? void 0
                          : e.capability.settled) || !1
                      );
                    }
                    resolve(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      const s = _assertClassBrand(
                        _PDFObjects_brand,
                        this,
                        _ensureObj
                      ).call(this, t);
                      (s.data = e), s.capability.resolve();
                    }
                    clear() {
                      for (const e in _classPrivateFieldGet(_objs, this)) {
                        var t;
                        const { data: s } = _classPrivateFieldGet(_objs, this)[
                          e
                        ];
                        null === s ||
                          void 0 === s ||
                          null === (t = s.bitmap) ||
                          void 0 === t ||
                          t.close();
                      }
                      _classPrivateFieldSet(_objs, this, Object.create(null));
                    }
                  }
                  function _ensureObj(t) {
                    var e;
                    return (
                      (e = _classPrivateFieldGet(_objs, this))[t] ||
                      (e[t] = {
                        capability: new _util.PromiseCapability(),
                        data: null
                      })
                    );
                  }
                  var _internalRenderTask = new WeakMap();
                  class RenderTask {
                    constructor(t) {
                      _classPrivateFieldInitSpec(
                        this,
                        _internalRenderTask,
                        null
                      ),
                        _classPrivateFieldSet(_internalRenderTask, this, t),
                        (this.onContinue = null);
                    }
                    get promise() {
                      return _classPrivateFieldGet(_internalRenderTask, this)
                        .capability.promise;
                    }
                    cancel() {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0;
                      _classPrivateFieldGet(_internalRenderTask, this).cancel(
                        null,
                        t
                      );
                    }
                    get separateAnnots() {
                      const { separateAnnots: t } = _classPrivateFieldGet(
                        _internalRenderTask,
                        this
                      ).operatorList;
                      if (!t) return !1;
                      const { annotationCanvasMap: e } = _classPrivateFieldGet(
                        _internalRenderTask,
                        this
                      );
                      return (
                        t.form ||
                        (t.canvas &&
                          (null === e || void 0 === e ? void 0 : e.size) > 0)
                      );
                    }
                  }
                  exports.RenderTask = RenderTask;
                  class InternalRenderTask {
                    constructor(t) {
                      let {
                        callback: e,
                        params: s,
                        objs: i,
                        commonObjs: a,
                        annotationCanvasMap: n,
                        operatorList: r,
                        pageIndex: o,
                        canvasFactory: l,
                        filterFactory: c,
                        useRequestAnimationFrame: d = !1,
                        pdfBug: h = !1,
                        pageColors: u = null
                      } = t;
                      (this.callback = e),
                        (this.params = s),
                        (this.objs = i),
                        (this.commonObjs = a),
                        (this.annotationCanvasMap = n),
                        (this.operatorListIdx = null),
                        (this.operatorList = r),
                        (this._pageIndex = o),
                        (this.canvasFactory = l),
                        (this.filterFactory = c),
                        (this._pdfBug = h),
                        (this.pageColors = u),
                        (this.running = !1),
                        (this.graphicsReadyCallback = null),
                        (this.graphicsReady = !1),
                        (this._useRequestAnimationFrame =
                          !0 === d && 'undefined' !== typeof window),
                        (this.cancelled = !1),
                        (this.capability = new _util.PromiseCapability()),
                        (this.task = new RenderTask(this)),
                        (this._cancelBound = this.cancel.bind(this)),
                        (this._continueBound = this._continue.bind(this)),
                        (this._scheduleNextBound =
                          this._scheduleNext.bind(this)),
                        (this._nextBound = this._next.bind(this)),
                        (this._canvas = s.canvasContext.canvas);
                    }
                    get completed() {
                      return this.capability.promise.catch(function () {});
                    }
                    initializeGraphics(t) {
                      var e, s;
                      let { transparency: i = !1, optionalContentConfig: a } =
                        t;
                      if (this.cancelled) return;
                      if (this._canvas) {
                        if (_canvasInUse._.has(this._canvas))
                          throw new Error(
                            'Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.'
                          );
                        _canvasInUse._.add(this._canvas);
                      }
                      this._pdfBug &&
                        null !== (e = globalThis.StepperManager) &&
                        void 0 !== e &&
                        e.enabled &&
                        ((this.stepper = globalThis.StepperManager.create(
                          this._pageIndex
                        )),
                        this.stepper.init(this.operatorList),
                        (this.stepper.nextBreakPoint =
                          this.stepper.getNextBreakPoint()));
                      const {
                        canvasContext: n,
                        viewport: r,
                        transform: o,
                        background: l
                      } = this.params;
                      (this.gfx = new _canvas.CanvasGraphics(
                        n,
                        this.commonObjs,
                        this.objs,
                        this.canvasFactory,
                        this.filterFactory,
                        { optionalContentConfig: a },
                        this.annotationCanvasMap,
                        this.pageColors
                      )),
                        this.gfx.beginDrawing({
                          transform: o,
                          viewport: r,
                          transparency: i,
                          background: l
                        }),
                        (this.operatorListIdx = 0),
                        (this.graphicsReady = !0),
                        null === (s = this.graphicsReadyCallback) ||
                          void 0 === s ||
                          s.call(this);
                    }
                    cancel() {
                      var t;
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : null,
                        s =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0;
                      (this.running = !1),
                        (this.cancelled = !0),
                        null === (t = this.gfx) ||
                          void 0 === t ||
                          t.endDrawing(),
                        _canvasInUse._.delete(this._canvas),
                        this.callback(
                          e ||
                            new _display_utils.RenderingCancelledException(
                              'Rendering cancelled, page '.concat(
                                this._pageIndex + 1
                              ),
                              s
                            )
                        );
                    }
                    operatorListChanged() {
                      var t;
                      this.graphicsReady
                        ? (null === (t = this.stepper) ||
                            void 0 === t ||
                            t.updateOperatorList(this.operatorList),
                          this.running || this._continue())
                        : this.graphicsReadyCallback ||
                          (this.graphicsReadyCallback = this._continueBound);
                    }
                    _continue() {
                      (this.running = !0),
                        this.cancelled ||
                          (this.task.onContinue
                            ? this.task.onContinue(this._scheduleNextBound)
                            : this._scheduleNext());
                    }
                    _scheduleNext() {
                      this._useRequestAnimationFrame
                        ? window.requestAnimationFrame(() => {
                            this._nextBound().catch(this._cancelBound);
                          })
                        : Promise.resolve()
                            .then(this._nextBound)
                            .catch(this._cancelBound);
                    }
                    async _next() {
                      this.cancelled ||
                        ((this.operatorListIdx = this.gfx.executeOperatorList(
                          this.operatorList,
                          this.operatorListIdx,
                          this._continueBound,
                          this.stepper
                        )),
                        this.operatorListIdx ===
                          this.operatorList.argsArray.length &&
                          ((this.running = !1),
                          this.operatorList.lastChunk &&
                            (this.gfx.endDrawing(),
                            _canvasInUse._.delete(this._canvas),
                            this.callback())));
                    }
                  }
                  var _canvasInUse = { _: new WeakSet() };
                  const version = '3.11.174';
                  exports.version = version;
                  const build = 'ce8716743';
                  exports.build = build;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.SerializableEmpty =
                      e.PrintAnnotationStorage =
                      e.AnnotationStorage =
                        void 0);
                  var i = s(1),
                    a = s(4),
                    n = s(8);
                  const r = Object.freeze({
                    map: null,
                    hash: '',
                    transfers: void 0
                  });
                  e.SerializableEmpty = r;
                  var o = new WeakMap(),
                    l = new WeakMap(),
                    c = new WeakSet();
                  class d {
                    constructor() {
                      _classPrivateMethodInitSpec(this, c),
                        _classPrivateFieldInitSpec(this, o, !1),
                        _classPrivateFieldInitSpec(this, l, new Map()),
                        (this.onSetModified = null),
                        (this.onResetModified = null),
                        (this.onAnnotationEditor = null);
                    }
                    getValue(t, e) {
                      const s = _classPrivateFieldGet(l, this).get(t);
                      return void 0 === s ? e : Object.assign(e, s);
                    }
                    getRawValue(t) {
                      return _classPrivateFieldGet(l, this).get(t);
                    }
                    remove(t) {
                      if (
                        (_classPrivateFieldGet(l, this).delete(t),
                        0 === _classPrivateFieldGet(l, this).size &&
                          this.resetModified(),
                        'function' === typeof this.onAnnotationEditor)
                      ) {
                        for (const t of _classPrivateFieldGet(l, this).values())
                          if (t instanceof a.AnnotationEditor) return;
                        this.onAnnotationEditor(null);
                      }
                    }
                    setValue(t, e) {
                      const s = _classPrivateFieldGet(l, this).get(t);
                      let i = !1;
                      if (void 0 !== s)
                        for (const [a, n] of Object.entries(e))
                          s[a] !== n && ((i = !0), (s[a] = n));
                      else (i = !0), _classPrivateFieldGet(l, this).set(t, e);
                      i && _assertClassBrand(c, this, h).call(this),
                        e instanceof a.AnnotationEditor &&
                          'function' === typeof this.onAnnotationEditor &&
                          this.onAnnotationEditor(e.constructor._type);
                    }
                    has(t) {
                      return _classPrivateFieldGet(l, this).has(t);
                    }
                    getAll() {
                      return _classPrivateFieldGet(l, this).size > 0
                        ? (0, i.objectFromMap)(_classPrivateFieldGet(l, this))
                        : null;
                    }
                    setAll(t) {
                      for (const [e, s] of Object.entries(t))
                        this.setValue(e, s);
                    }
                    get size() {
                      return _classPrivateFieldGet(l, this).size;
                    }
                    resetModified() {
                      _classPrivateFieldGet(o, this) &&
                        (_classPrivateFieldSet(o, this, !1),
                        'function' === typeof this.onResetModified &&
                          this.onResetModified());
                    }
                    get print() {
                      return new p(this);
                    }
                    get serializable() {
                      if (0 === _classPrivateFieldGet(l, this).size) return r;
                      const t = new Map(),
                        e = new n.MurmurHash3_64(),
                        s = [],
                        i = Object.create(null);
                      let o = !1;
                      for (const [n, r] of _classPrivateFieldGet(l, this)) {
                        const s =
                          r instanceof a.AnnotationEditor
                            ? r.serialize(!1, i)
                            : r;
                        s &&
                          (t.set(n, s),
                          e.update(''.concat(n, ':').concat(JSON.stringify(s))),
                          o || (o = !!s.bitmap));
                      }
                      if (o)
                        for (const a of t.values())
                          a.bitmap && s.push(a.bitmap);
                      return t.size > 0
                        ? { map: t, hash: e.hexdigest(), transfers: s }
                        : r;
                    }
                  }
                  function h() {
                    _classPrivateFieldGet(o, this) ||
                      (_classPrivateFieldSet(o, this, !0),
                      'function' === typeof this.onSetModified &&
                        this.onSetModified());
                  }
                  e.AnnotationStorage = d;
                  var u = new WeakMap();
                  class p extends d {
                    constructor(t) {
                      super(), _classPrivateFieldInitSpec(this, u, void 0);
                      const { map: e, hash: s, transfers: i } = t.serializable,
                        a = structuredClone(e, i ? { transfer: i } : null);
                      _classPrivateFieldSet(u, this, {
                        map: a,
                        hash: s,
                        transfers: i
                      });
                    }
                    get print() {
                      (0, i.unreachable)(
                        'Should not call PrintAnnotationStorage.print'
                      );
                    }
                    get serializable() {
                      return _classPrivateFieldGet(u, this);
                    }
                  }
                  e.PrintAnnotationStorage = p;
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.AnnotationEditor = void 0);
                  var a = s(5),
                    n = s(1),
                    r = s(6),
                    o = new WeakMap(),
                    l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap(),
                    m = new WeakMap(),
                    b = new WeakMap(),
                    P = new WeakMap(),
                    A = new WeakSet();
                  class F {
                    constructor(t) {
                      _classPrivateMethodInitSpec(this, A),
                        _classPrivateFieldInitSpec(this, o, ''),
                        _classPrivateFieldInitSpec(this, l, !1),
                        _classPrivateFieldInitSpec(this, c, null),
                        _classPrivateFieldInitSpec(this, d, null),
                        _classPrivateFieldInitSpec(this, h, null),
                        _classPrivateFieldInitSpec(this, u, !1),
                        _classPrivateFieldInitSpec(this, p, null),
                        _classPrivateFieldInitSpec(
                          this,
                          _,
                          this.focusin.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          g,
                          this.focusout.bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, v, !1),
                        _classPrivateFieldInitSpec(this, f, !1),
                        _classPrivateFieldInitSpec(this, m, !1),
                        _defineProperty(
                          this,
                          '_initialOptions',
                          Object.create(null)
                        ),
                        _defineProperty(this, '_uiManager', null),
                        _defineProperty(this, '_focusEventsAllowed', !0),
                        _defineProperty(this, '_l10nPromise', null),
                        _classPrivateFieldInitSpec(this, b, !1),
                        _classPrivateFieldInitSpec(this, P, F._zIndex++),
                        this.constructor === F &&
                          (0, n.unreachable)(
                            'Cannot initialize AnnotationEditor.'
                          ),
                        (this.parent = t.parent),
                        (this.id = t.id),
                        (this.width = this.height = null),
                        (this.pageIndex = t.parent.pageIndex),
                        (this.name = t.name),
                        (this.div = null),
                        (this._uiManager = t.uiManager),
                        (this.annotationElementId = null),
                        (this._willKeepAspectRatio = !1),
                        (this._initialOptions.isCentered = t.isCentered),
                        (this._structTreeParentId = null);
                      const {
                        rotation: e,
                        rawDims: {
                          pageWidth: s,
                          pageHeight: i,
                          pageX: a,
                          pageY: r
                        }
                      } = this.parent.viewport;
                      (this.rotation = e),
                        (this.pageRotation =
                          (360 + e - this._uiManager.viewParameters.rotation) %
                          360),
                        (this.pageDimensions = [s, i]),
                        (this.pageTranslation = [a, r]);
                      const [S, y] = this.parentDimensions;
                      (this.x = t.x / S),
                        (this.y = t.y / y),
                        (this.isAttachedToDOM = !1),
                        (this.deleted = !1);
                    }
                    get editorType() {
                      return Object.getPrototypeOf(this).constructor._type;
                    }
                    static get _defaultLineColor() {
                      return (0, n.shadow)(
                        this,
                        '_defaultLineColor',
                        this._colorManager.getHexCode('CanvasText')
                      );
                    }
                    static deleteAnnotationElement(t) {
                      const e = new I({
                        id: t.parent.getNextId(),
                        parent: t.parent,
                        uiManager: t._uiManager
                      });
                      (e.annotationElementId = t.annotationElementId),
                        (e.deleted = !0),
                        e._uiManager.addToAnnotationStorage(e);
                    }
                    static initialize(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (
                        (F._l10nPromise ||
                          (F._l10nPromise = new Map(
                            [
                              'editor_alt_text_button_label',
                              'editor_alt_text_edit_button_label',
                              'editor_alt_text_decorative_tooltip'
                            ].map((e) => [e, t.get(e)])
                          )),
                        null !== e && void 0 !== e && e.strings)
                      )
                        for (const i of e.strings)
                          F._l10nPromise.set(i, t.get(i));
                      if (-1 !== F._borderLineWidth) return;
                      const s = getComputedStyle(document.documentElement);
                      F._borderLineWidth =
                        parseFloat(s.getPropertyValue('--outline-width')) || 0;
                    }
                    static updateDefaultParams(t, e) {}
                    static get defaultPropertiesToUpdate() {
                      return [];
                    }
                    static isHandlingMimeForPasting(t) {
                      return !1;
                    }
                    static paste(t, e) {
                      (0, n.unreachable)('Not implemented');
                    }
                    get propertiesToUpdate() {
                      return [];
                    }
                    get _isDraggable() {
                      return _classPrivateFieldGet(b, this);
                    }
                    set _isDraggable(t) {
                      var e;
                      _classPrivateFieldSet(b, this, t),
                        null === (e = this.div) ||
                          void 0 === e ||
                          e.classList.toggle('draggable', t);
                    }
                    center() {
                      const [t, e] = this.pageDimensions;
                      switch (this.parentRotation) {
                        case 90:
                          (this.x -= (this.height * e) / (2 * t)),
                            (this.y += (this.width * t) / (2 * e));
                          break;
                        case 180:
                          (this.x += this.width / 2),
                            (this.y += this.height / 2);
                          break;
                        case 270:
                          (this.x += (this.height * e) / (2 * t)),
                            (this.y -= (this.width * t) / (2 * e));
                          break;
                        default:
                          (this.x -= this.width / 2),
                            (this.y -= this.height / 2);
                      }
                      this.fixAndSetPosition();
                    }
                    addCommands(t) {
                      this._uiManager.addCommands(t);
                    }
                    get currentLayer() {
                      return this._uiManager.currentLayer;
                    }
                    setInBackground() {
                      this.div.style.zIndex = 0;
                    }
                    setInForeground() {
                      this.div.style.zIndex = _classPrivateFieldGet(P, this);
                    }
                    setParent(t) {
                      null !== t &&
                        ((this.pageIndex = t.pageIndex),
                        (this.pageDimensions = t.pageDimensions)),
                        (this.parent = t);
                    }
                    focusin(t) {
                      this._focusEventsAllowed &&
                        (_classPrivateFieldGet(v, this)
                          ? _classPrivateFieldSet(v, this, !1)
                          : this.parent.setSelected(this));
                    }
                    focusout(t) {
                      var e;
                      if (!this._focusEventsAllowed) return;
                      if (!this.isAttachedToDOM) return;
                      const s = t.relatedTarget;
                      (null !== s &&
                        void 0 !== s &&
                        s.closest('#'.concat(this.id))) ||
                        (t.preventDefault(),
                        (null !== (e = this.parent) &&
                          void 0 !== e &&
                          e.isMultipleSelection) ||
                          this.commitOrRemove());
                    }
                    commitOrRemove() {
                      this.isEmpty() ? this.remove() : this.commit();
                    }
                    commit() {
                      this.addToAnnotationStorage();
                    }
                    addToAnnotationStorage() {
                      this._uiManager.addToAnnotationStorage(this);
                    }
                    setAt(t, e, s, i) {
                      const [a, n] = this.parentDimensions;
                      ([s, i] = this.screenToPageTranslation(s, i)),
                        (this.x = (t + s) / a),
                        (this.y = (e + i) / n),
                        this.fixAndSetPosition();
                    }
                    translate(t, e) {
                      _assertClassBrand(A, this, S).call(
                        this,
                        this.parentDimensions,
                        t,
                        e
                      );
                    }
                    translateInPage(t, e) {
                      _assertClassBrand(A, this, S).call(
                        this,
                        this.pageDimensions,
                        t,
                        e
                      ),
                        this.div.scrollIntoView({ block: 'nearest' });
                    }
                    drag(t, e) {
                      const [s, i] = this.parentDimensions;
                      if (
                        ((this.x += t / s),
                        (this.y += e / i),
                        this.parent &&
                          (this.x < 0 ||
                            this.x > 1 ||
                            this.y < 0 ||
                            this.y > 1))
                      ) {
                        const { x: t, y: e } = this.div.getBoundingClientRect();
                        this.parent.findNewParent(this, t, e) &&
                          ((this.x -= Math.floor(this.x)),
                          (this.y -= Math.floor(this.y)));
                      }
                      let { x: a, y: n } = this;
                      const [r, o] = _assertClassBrand(A, this, y).call(this);
                      (a += r),
                        (n += o),
                        (this.div.style.left = ''.concat(
                          (100 * a).toFixed(2),
                          '%'
                        )),
                        (this.div.style.top = ''.concat(
                          (100 * n).toFixed(2),
                          '%'
                        )),
                        this.div.scrollIntoView({ block: 'nearest' });
                    }
                    fixAndSetPosition() {
                      const [t, e] = this.pageDimensions;
                      let { x: s, y: i, width: a, height: n } = this;
                      switch (
                        ((a *= t), (n *= e), (s *= t), (i *= e), this.rotation)
                      ) {
                        case 0:
                          (s = Math.max(0, Math.min(t - a, s))),
                            (i = Math.max(0, Math.min(e - n, i)));
                          break;
                        case 90:
                          (s = Math.max(0, Math.min(t - n, s))),
                            (i = Math.min(e, Math.max(a, i)));
                          break;
                        case 180:
                          (s = Math.min(t, Math.max(a, s))),
                            (i = Math.min(e, Math.max(n, i)));
                          break;
                        case 270:
                          (s = Math.min(t, Math.max(n, s))),
                            (i = Math.max(0, Math.min(e - a, i)));
                      }
                      (this.x = s /= t), (this.y = i /= e);
                      const [r, o] = _assertClassBrand(A, this, y).call(this);
                      (s += r), (i += o);
                      const { style: l } = this.div;
                      (l.left = ''.concat((100 * s).toFixed(2), '%')),
                        (l.top = ''.concat((100 * i).toFixed(2), '%')),
                        this.moveInDOM();
                    }
                    screenToPageTranslation(t, e) {
                      return w.call(F, t, e, this.parentRotation);
                    }
                    pageTranslationToScreen(t, e) {
                      return w.call(F, t, e, 360 - this.parentRotation);
                    }
                    get parentScale() {
                      return this._uiManager.viewParameters.realScale;
                    }
                    get parentRotation() {
                      return (
                        (this._uiManager.viewParameters.rotation +
                          this.pageRotation) %
                        360
                      );
                    }
                    get parentDimensions() {
                      const {
                          parentScale: t,
                          pageDimensions: [e, s]
                        } = this,
                        i = e * t,
                        a = s * t;
                      return n.FeatureTest.isCSSRoundSupported
                        ? [Math.round(i), Math.round(a)]
                        : [i, a];
                    }
                    setDims(t, e) {
                      var s;
                      const [i, a] = this.parentDimensions;
                      (this.div.style.width = ''.concat(
                        ((100 * t) / i).toFixed(2),
                        '%'
                      )),
                        _classPrivateFieldGet(u, this) ||
                          (this.div.style.height = ''.concat(
                            ((100 * e) / a).toFixed(2),
                            '%'
                          )),
                        null === (s = _classPrivateFieldGet(c, this)) ||
                          void 0 === s ||
                          s.classList.toggle(
                            'small',
                            t < F.SMALL_EDITOR_SIZE || e < F.SMALL_EDITOR_SIZE
                          );
                    }
                    fixDims() {
                      const { style: t } = this.div,
                        { height: e, width: s } = t,
                        i = s.endsWith('%'),
                        a = !_classPrivateFieldGet(u, this) && e.endsWith('%');
                      if (i && a) return;
                      const [n, r] = this.parentDimensions;
                      i ||
                        (t.width = ''.concat(
                          ((100 * parseFloat(s)) / n).toFixed(2),
                          '%'
                        )),
                        _classPrivateFieldGet(u, this) ||
                          a ||
                          (t.height = ''.concat(
                            ((100 * parseFloat(e)) / r).toFixed(2),
                            '%'
                          ));
                    }
                    getInitialTranslation() {
                      return [0, 0];
                    }
                    async addAltTextButton() {
                      if (_classPrivateFieldGet(c, this)) return;
                      const t = _classPrivateFieldSet(
                        c,
                        this,
                        document.createElement('button')
                      );
                      t.className = 'altText';
                      const e = await F._l10nPromise.get(
                        'editor_alt_text_button_label'
                      );
                      if (
                        ((t.textContent = e),
                        t.setAttribute('aria-label', e),
                        (t.tabIndex = '0'),
                        t.addEventListener('contextmenu', r.noContextMenu),
                        t.addEventListener('pointerdown', (t) =>
                          t.stopPropagation()
                        ),
                        t.addEventListener(
                          'click',
                          (t) => {
                            t.preventDefault(),
                              this._uiManager.editAltText(this);
                          },
                          { capture: !0 }
                        ),
                        t.addEventListener('keydown', (e) => {
                          e.target === t &&
                            'Enter' === e.key &&
                            (e.preventDefault(),
                            this._uiManager.editAltText(this));
                        }),
                        _assertClassBrand(A, this, M).call(this),
                        this.div.append(t),
                        !F.SMALL_EDITOR_SIZE)
                      ) {
                        const e = 40;
                        F.SMALL_EDITOR_SIZE = Math.min(
                          128,
                          Math.round(
                            t.getBoundingClientRect().width * (1 + e / 100)
                          )
                        );
                      }
                    }
                    getClientDimensions() {
                      return this.div.getBoundingClientRect();
                    }
                    get altTextData() {
                      return {
                        altText: _classPrivateFieldGet(o, this),
                        decorative: _classPrivateFieldGet(l, this)
                      };
                    }
                    set altTextData(t) {
                      let { altText: e, decorative: s } = t;
                      (_classPrivateFieldGet(o, this) === e &&
                        _classPrivateFieldGet(l, this) === s) ||
                        (_classPrivateFieldSet(o, this, e),
                        _classPrivateFieldSet(l, this, s),
                        _assertClassBrand(A, this, M).call(this));
                    }
                    render() {
                      (this.div = document.createElement('div')),
                        this.div.setAttribute(
                          'data-editor-rotation',
                          (360 - this.rotation) % 360
                        ),
                        (this.div.className = this.name),
                        this.div.setAttribute('id', this.id),
                        this.div.setAttribute('tabIndex', 0),
                        this.setInForeground(),
                        this.div.addEventListener(
                          'focusin',
                          _classPrivateFieldGet(_, this)
                        ),
                        this.div.addEventListener(
                          'focusout',
                          _classPrivateFieldGet(g, this)
                        );
                      const [t, e] = this.parentDimensions;
                      this.parentRotation % 180 !== 0 &&
                        ((this.div.style.maxWidth = ''.concat(
                          ((100 * e) / t).toFixed(2),
                          '%'
                        )),
                        (this.div.style.maxHeight = ''.concat(
                          ((100 * t) / e).toFixed(2),
                          '%'
                        )));
                      const [s, i] = this.getInitialTranslation();
                      return (
                        this.translate(s, i),
                        (0, a.bindEvents)(this, this.div, ['pointerdown']),
                        this.div
                      );
                    }
                    pointerdown(t) {
                      const { isMac: e } = n.FeatureTest.platform;
                      0 !== t.button || (t.ctrlKey && e)
                        ? t.preventDefault()
                        : (_classPrivateFieldSet(v, this, !0),
                          _assertClassBrand(A, this, T).call(this, t));
                    }
                    moveInDOM() {
                      var t;
                      null === (t = this.parent) ||
                        void 0 === t ||
                        t.moveEditorInDOM(this);
                    }
                    _setParentAndPosition(t, e, s) {
                      t.changeParent(this),
                        (this.x = e),
                        (this.y = s),
                        this.fixAndSetPosition();
                    }
                    getRect(t, e) {
                      const s = this.parentScale,
                        [i, a] = this.pageDimensions,
                        [n, r] = this.pageTranslation,
                        o = t / s,
                        l = e / s,
                        c = this.x * i,
                        d = this.y * a,
                        h = this.width * i,
                        u = this.height * a;
                      switch (this.rotation) {
                        case 0:
                          return [
                            c + o + n,
                            a - d - l - u + r,
                            c + o + h + n,
                            a - d - l + r
                          ];
                        case 90:
                          return [
                            c + l + n,
                            a - d + o + r,
                            c + l + u + n,
                            a - d + o + h + r
                          ];
                        case 180:
                          return [
                            c - o - h + n,
                            a - d + l + r,
                            c - o + n,
                            a - d + l + u + r
                          ];
                        case 270:
                          return [
                            c - l - u + n,
                            a - d - o - h + r,
                            c - l + n,
                            a - d - o + r
                          ];
                        default:
                          throw new Error('Invalid rotation');
                      }
                    }
                    getRectInCurrentCoords(t, e) {
                      const [s, i, a, n] = t,
                        r = a - s,
                        o = n - i;
                      switch (this.rotation) {
                        case 0:
                          return [s, e - n, r, o];
                        case 90:
                          return [s, e - i, o, r];
                        case 180:
                          return [a, e - i, r, o];
                        case 270:
                          return [a, e - n, o, r];
                        default:
                          throw new Error('Invalid rotation');
                      }
                    }
                    onceAdded() {}
                    isEmpty() {
                      return !1;
                    }
                    enableEditMode() {
                      _classPrivateFieldSet(m, this, !0);
                    }
                    disableEditMode() {
                      _classPrivateFieldSet(m, this, !1);
                    }
                    isInEditMode() {
                      return _classPrivateFieldGet(m, this);
                    }
                    shouldGetKeyboardEvents() {
                      return !1;
                    }
                    needsToBeRebuilt() {
                      return this.div && !this.isAttachedToDOM;
                    }
                    rebuild() {
                      var t, e;
                      null === (t = this.div) ||
                        void 0 === t ||
                        t.addEventListener(
                          'focusin',
                          _classPrivateFieldGet(_, this)
                        ),
                        null === (e = this.div) ||
                          void 0 === e ||
                          e.addEventListener(
                            'focusout',
                            _classPrivateFieldGet(g, this)
                          );
                    }
                    serialize() {
                      (0, n.unreachable)('An editor must be serializable');
                    }
                    static deserialize(t, e, s) {
                      const i = new this.prototype.constructor({
                        parent: e,
                        id: e.getNextId(),
                        uiManager: s
                      });
                      i.rotation = t.rotation;
                      const [a, n] = i.pageDimensions,
                        [r, o, l, c] = i.getRectInCurrentCoords(t.rect, n);
                      return (
                        (i.x = r / a),
                        (i.y = o / n),
                        (i.width = l / a),
                        (i.height = c / n),
                        i
                      );
                    }
                    remove() {
                      var t;
                      this.div.removeEventListener(
                        'focusin',
                        _classPrivateFieldGet(_, this)
                      ),
                        this.div.removeEventListener(
                          'focusout',
                          _classPrivateFieldGet(g, this)
                        ),
                        this.isEmpty() || this.commit(),
                        this.parent
                          ? this.parent.remove(this)
                          : this._uiManager.removeEditor(this),
                        null === (t = _classPrivateFieldGet(c, this)) ||
                          void 0 === t ||
                          t.remove(),
                        _classPrivateFieldSet(c, this, null),
                        _classPrivateFieldSet(d, this, null);
                    }
                    get isResizable() {
                      return !1;
                    }
                    makeResizable() {
                      this.isResizable &&
                        (_assertClassBrand(A, this, C).call(this),
                        _classPrivateFieldGet(p, this).classList.remove(
                          'hidden'
                        ));
                    }
                    select() {
                      var t;
                      this.makeResizable(),
                        null === (t = this.div) ||
                          void 0 === t ||
                          t.classList.add('selectedEditor');
                    }
                    unselect() {
                      var t, e, s;
                      null === (t = _classPrivateFieldGet(p, this)) ||
                        void 0 === t ||
                        t.classList.add('hidden'),
                        null === (e = this.div) ||
                          void 0 === e ||
                          e.classList.remove('selectedEditor'),
                        null !== (s = this.div) &&
                          void 0 !== s &&
                          s.contains(document.activeElement) &&
                          this._uiManager.currentLayer.div.focus();
                    }
                    updateParams(t, e) {}
                    disableEditing() {
                      _classPrivateFieldGet(c, this) &&
                        (_classPrivateFieldGet(c, this).hidden = !0);
                    }
                    enableEditing() {
                      _classPrivateFieldGet(c, this) &&
                        (_classPrivateFieldGet(c, this).hidden = !1);
                    }
                    enterInEditMode() {}
                    get contentDiv() {
                      return this.div;
                    }
                    get isEditing() {
                      return _classPrivateFieldGet(f, this);
                    }
                    set isEditing(t) {
                      _classPrivateFieldSet(f, this, t),
                        this.parent &&
                          (t
                            ? (this.parent.setSelected(this),
                              this.parent.setActiveEditor(this))
                            : this.parent.setActiveEditor(null));
                    }
                    setAspectRatio(t, e) {
                      _classPrivateFieldSet(u, this, !0);
                      const s = t / e,
                        { style: i } = this.div;
                      (i.aspectRatio = s), (i.height = 'auto');
                    }
                    static get MIN_SIZE() {
                      return 16;
                    }
                  }
                  function S(t, e, s) {
                    let [i, a] = t;
                    ([e, s] = this.screenToPageTranslation(e, s)),
                      (this.x += e / i),
                      (this.y += s / a),
                      this.fixAndSetPosition();
                  }
                  function y() {
                    const [t, e] = this.parentDimensions,
                      { _borderLineWidth: s } = i,
                      a = s / t,
                      n = s / e;
                    switch (this.rotation) {
                      case 90:
                        return [-a, n];
                      case 180:
                        return [a, n];
                      case 270:
                        return [a, -n];
                      default:
                        return [-a, -n];
                    }
                  }
                  function w(t, e, s) {
                    switch (s) {
                      case 90:
                        return [e, -t];
                      case 180:
                        return [-t, -e];
                      case 270:
                        return [-e, t];
                      default:
                        return [t, e];
                    }
                  }
                  function x(t) {
                    switch (t) {
                      case 90: {
                        const [t, e] = this.pageDimensions;
                        return [0, -t / e, e / t, 0];
                      }
                      case 180:
                        return [-1, 0, 0, -1];
                      case 270: {
                        const [t, e] = this.pageDimensions;
                        return [0, t / e, -e / t, 0];
                      }
                      default:
                        return [1, 0, 0, 1];
                    }
                  }
                  function C() {
                    if (_classPrivateFieldGet(p, this)) return;
                    _classPrivateFieldSet(
                      p,
                      this,
                      document.createElement('div')
                    ),
                      _classPrivateFieldGet(p, this).classList.add('resizers');
                    const t = [
                      'topLeft',
                      'topRight',
                      'bottomRight',
                      'bottomLeft'
                    ];
                    this._willKeepAspectRatio ||
                      t.push(
                        'topMiddle',
                        'middleRight',
                        'bottomMiddle',
                        'middleLeft'
                      );
                    for (const e of t) {
                      const t = document.createElement('div');
                      _classPrivateFieldGet(p, this).append(t),
                        t.classList.add('resizer', e),
                        t.addEventListener(
                          'pointerdown',
                          _assertClassBrand(A, this, E).bind(this, e)
                        ),
                        t.addEventListener('contextmenu', r.noContextMenu);
                    }
                    this.div.prepend(_classPrivateFieldGet(p, this));
                  }
                  function E(t, e) {
                    e.preventDefault();
                    const { isMac: s } = n.FeatureTest.platform;
                    if (0 !== e.button || (e.ctrlKey && s)) return;
                    const i = _assertClassBrand(A, this, k).bind(this, t),
                      a = this._isDraggable;
                    this._isDraggable = !1;
                    const r = { passive: !0, capture: !0 };
                    window.addEventListener('pointermove', i, r);
                    const o = this.x,
                      l = this.y,
                      c = this.width,
                      d = this.height,
                      h = this.parent.div.style.cursor,
                      u = this.div.style.cursor;
                    this.div.style.cursor = this.parent.div.style.cursor =
                      window.getComputedStyle(e.target).cursor;
                    const p = () => {
                      (this._isDraggable = a),
                        window.removeEventListener('pointerup', p),
                        window.removeEventListener('blur', p),
                        window.removeEventListener('pointermove', i, r),
                        (this.parent.div.style.cursor = h),
                        (this.div.style.cursor = u);
                      const t = this.x,
                        e = this.y,
                        s = this.width,
                        n = this.height;
                      (t === o && e === l && s === c && n === d) ||
                        this.addCommands({
                          cmd: () => {
                            (this.width = s),
                              (this.height = n),
                              (this.x = t),
                              (this.y = e);
                            const [i, a] = this.parentDimensions;
                            this.setDims(i * s, a * n),
                              this.fixAndSetPosition();
                          },
                          undo: () => {
                            (this.width = c),
                              (this.height = d),
                              (this.x = o),
                              (this.y = l);
                            const [t, e] = this.parentDimensions;
                            this.setDims(t * c, e * d),
                              this.fixAndSetPosition();
                          },
                          mustExec: !0
                        });
                    };
                    window.addEventListener('pointerup', p),
                      window.addEventListener('blur', p);
                  }
                  function k(t, e) {
                    const [s, a] = this.parentDimensions,
                      n = this.x,
                      r = this.y,
                      o = this.width,
                      l = this.height,
                      c = i.MIN_SIZE / s,
                      d = i.MIN_SIZE / a,
                      h = (t) => Math.round(1e4 * t) / 1e4,
                      u = _assertClassBrand(A, this, x).call(
                        this,
                        this.rotation
                      ),
                      p = (t, e) => [u[0] * t + u[2] * e, u[1] * t + u[3] * e],
                      _ = _assertClassBrand(A, this, x).call(
                        this,
                        360 - this.rotation
                      );
                    let g,
                      v,
                      f = !1,
                      m = !1;
                    switch (t) {
                      case 'topLeft':
                        (f = !0),
                          (g = (t, e) => [0, 0]),
                          (v = (t, e) => [t, e]);
                        break;
                      case 'topMiddle':
                        (g = (t, e) => [t / 2, 0]), (v = (t, e) => [t / 2, e]);
                        break;
                      case 'topRight':
                        (f = !0),
                          (g = (t, e) => [t, 0]),
                          (v = (t, e) => [0, e]);
                        break;
                      case 'middleRight':
                        (m = !0),
                          (g = (t, e) => [t, e / 2]),
                          (v = (t, e) => [0, e / 2]);
                        break;
                      case 'bottomRight':
                        (f = !0),
                          (g = (t, e) => [t, e]),
                          (v = (t, e) => [0, 0]);
                        break;
                      case 'bottomMiddle':
                        (g = (t, e) => [t / 2, e]), (v = (t, e) => [t / 2, 0]);
                        break;
                      case 'bottomLeft':
                        (f = !0),
                          (g = (t, e) => [0, e]),
                          (v = (t, e) => [t, 0]);
                        break;
                      case 'middleLeft':
                        (m = !0),
                          (g = (t, e) => [0, e / 2]),
                          (v = (t, e) => [t, e / 2]);
                    }
                    const b = g(o, l),
                      P = v(o, l);
                    let F = p(...P);
                    const S = h(n + F[0]),
                      y = h(r + F[1]);
                    let w = 1,
                      C = 1,
                      [E, k] = this.screenToPageTranslation(
                        e.movementX,
                        e.movementY
                      );
                    var M, T;
                    if (
                      (([E, k] =
                        ((M = E / s),
                        (T = k / a),
                        [_[0] * M + _[2] * T, _[1] * M + _[3] * T])),
                      f)
                    ) {
                      const t = Math.hypot(o, l);
                      w = C = Math.max(
                        Math.min(
                          Math.hypot(P[0] - b[0] - E, P[1] - b[1] - k) / t,
                          1 / o,
                          1 / l
                        ),
                        c / o,
                        d / l
                      );
                    } else
                      m
                        ? (w =
                            Math.max(
                              c,
                              Math.min(1, Math.abs(P[0] - b[0] - E))
                            ) / o)
                        : (C =
                            Math.max(
                              d,
                              Math.min(1, Math.abs(P[1] - b[1] - k))
                            ) / l);
                    const I = h(o * w),
                      R = h(l * C);
                    F = p(...v(I, R));
                    const D = S - F[0],
                      G = y - F[1];
                    (this.width = I),
                      (this.height = R),
                      (this.x = D),
                      (this.y = G),
                      this.setDims(s * I, a * R),
                      this.fixAndSetPosition();
                  }
                  async function M() {
                    const t = _classPrivateFieldGet(c, this);
                    if (!t) return;
                    var e;
                    if (
                      !_classPrivateFieldGet(o, this) &&
                      !_classPrivateFieldGet(l, this)
                    )
                      return (
                        t.classList.remove('done'),
                        void (
                          null === (e = _classPrivateFieldGet(d, this)) ||
                          void 0 === e ||
                          e.remove()
                        )
                      );
                    i._l10nPromise
                      .get('editor_alt_text_edit_button_label')
                      .then((e) => {
                        t.setAttribute('aria-label', e);
                      });
                    let s = _classPrivateFieldGet(d, this);
                    if (!s) {
                      _classPrivateFieldSet(
                        d,
                        this,
                        (s = document.createElement('span'))
                      ),
                        (s.className = 'tooltip'),
                        s.setAttribute('role', 'tooltip');
                      const e = (s.id = 'alt-text-tooltip-'.concat(this.id));
                      t.setAttribute('aria-describedby', e);
                      const i = 100;
                      t.addEventListener('mouseenter', () => {
                        _classPrivateFieldSet(
                          h,
                          this,
                          setTimeout(() => {
                            _classPrivateFieldSet(h, this, null),
                              _classPrivateFieldGet(d, this).classList.add(
                                'show'
                              ),
                              this._uiManager._eventBus.dispatch(
                                'reporttelemetry',
                                {
                                  source: this,
                                  details: {
                                    type: 'editing',
                                    subtype: this.editorType,
                                    data: { action: 'alt_text_tooltip' }
                                  }
                                }
                              );
                          }, i)
                        );
                      }),
                        t.addEventListener('mouseleave', () => {
                          var t;
                          clearTimeout(_classPrivateFieldGet(h, this)),
                            _classPrivateFieldSet(h, this, null),
                            null === (t = _classPrivateFieldGet(d, this)) ||
                              void 0 === t ||
                              t.classList.remove('show');
                        });
                    }
                    t.classList.add('done'),
                      (s.innerText = _classPrivateFieldGet(l, this)
                        ? await i._l10nPromise.get(
                            'editor_alt_text_decorative_tooltip'
                          )
                        : _classPrivateFieldGet(o, this)),
                      s.parentNode || t.append(s);
                  }
                  function T(t) {
                    if (!this._isDraggable) return;
                    const e = this._uiManager.isSelected(this);
                    let s, i;
                    this._uiManager.setUpDragSession(),
                      e &&
                        ((s = { passive: !0, capture: !0 }),
                        (i = (t) => {
                          const [e, s] = this.screenToPageTranslation(
                            t.movementX,
                            t.movementY
                          );
                          this._uiManager.dragSelectedEditors(e, s);
                        }),
                        window.addEventListener('pointermove', i, s));
                    const a = () => {
                      if (
                        (window.removeEventListener('pointerup', a),
                        window.removeEventListener('blur', a),
                        e && window.removeEventListener('pointermove', i, s),
                        _classPrivateFieldSet(v, this, !1),
                        !this._uiManager.endDragSession())
                      ) {
                        const { isMac: e } = n.FeatureTest.platform;
                        (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e)
                          ? this.parent.toggleSelected(this)
                          : this.parent.setSelected(this);
                      }
                    };
                    window.addEventListener('pointerup', a),
                      window.addEventListener('blur', a);
                  }
                  (i = F),
                    _defineProperty(F, '_borderLineWidth', -1),
                    _defineProperty(F, '_colorManager', new a.ColorManager()),
                    _defineProperty(F, '_zIndex', 1),
                    _defineProperty(F, 'SMALL_EDITOR_SIZE', 0),
                    (e.AnnotationEditor = F);
                  class I extends F {
                    constructor(t) {
                      super(t),
                        (this.annotationElementId = t.annotationElementId),
                        (this.deleted = !0);
                    }
                    serialize() {
                      return {
                        id: this.annotationElementId,
                        deleted: !0,
                        pageIndex: this.pageIndex
                      };
                    }
                  }
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.KeyboardManager =
                      e.CommandManager =
                      e.ColorManager =
                      e.AnnotationEditorUIManager =
                        void 0),
                    (e.bindEvents = function (t, e, s) {
                      for (const i of s) e.addEventListener(i, t[i].bind(t));
                    }),
                    (e.opacityToHex = function (t) {
                      return Math.round(Math.min(255, Math.max(1, 255 * t)))
                        .toString(16)
                        .padStart(2, '0');
                    });
                  var a = s(1),
                    n = s(6),
                    r = new WeakMap();
                  class o {
                    constructor() {
                      _classPrivateFieldInitSpec(this, r, 0);
                    }
                    getId() {
                      var t, e;
                      return ''
                        .concat(a.AnnotationEditorPrefix)
                        .concat(
                          (_classPrivateFieldSet(
                            r,
                            this,
                            ((t = _classPrivateFieldGet(r, this)), (e = t++), t)
                          ),
                          e)
                        );
                    }
                  }
                  var l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakSet();
                  class u {
                    constructor() {
                      _classPrivateMethodInitSpec(this, h),
                        _classPrivateFieldInitSpec(this, l, (0, a.getUuid)()),
                        _classPrivateFieldInitSpec(this, c, 0),
                        _classPrivateFieldInitSpec(this, d, null);
                    }
                    static get _isSVGFittingCanvas() {
                      const t = new OffscreenCanvas(1, 3).getContext('2d'),
                        e = new Image();
                      e.src =
                        'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
                      const s = e
                        .decode()
                        .then(
                          () => (
                            t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3),
                            0 ===
                              new Uint32Array(
                                t.getImageData(0, 0, 1, 1).data.buffer
                              )[0]
                          )
                        );
                      return (0, a.shadow)(this, '_isSVGFittingCanvas', s);
                    }
                    async getFromFile(t) {
                      const { lastModified: e, name: s, size: i, type: a } = t;
                      return _assertClassBrand(h, this, p).call(
                        this,
                        ''
                          .concat(e, '_')
                          .concat(s, '_')
                          .concat(i, '_')
                          .concat(a),
                        t
                      );
                    }
                    async getFromUrl(t) {
                      return _assertClassBrand(h, this, p).call(this, t, t);
                    }
                    async getFromId(t) {
                      _classPrivateFieldGet(d, this) ||
                        _classPrivateFieldSet(d, this, new Map());
                      const e = _classPrivateFieldGet(d, this).get(t);
                      return e
                        ? e.bitmap
                          ? ((e.refCounter += 1), e)
                          : e.file
                          ? this.getFromFile(e.file)
                          : this.getFromUrl(e.url)
                        : null;
                    }
                    getSvgUrl(t) {
                      const e = _classPrivateFieldGet(d, this).get(t);
                      return null !== e && void 0 !== e && e.isSvg
                        ? e.svgUrl
                        : null;
                    }
                    deleteId(t) {
                      _classPrivateFieldGet(d, this) ||
                        _classPrivateFieldSet(d, this, new Map());
                      const e = _classPrivateFieldGet(d, this).get(t);
                      e &&
                        ((e.refCounter -= 1),
                        0 === e.refCounter && (e.bitmap = null));
                    }
                    isValidId(t) {
                      return t.startsWith(
                        'image_'.concat(_classPrivateFieldGet(l, this), '_')
                      );
                    }
                  }
                  async function p(t, e) {
                    var s;
                    _classPrivateFieldGet(d, this) ||
                      _classPrivateFieldSet(d, this, new Map());
                    let a = _classPrivateFieldGet(d, this).get(t);
                    if (null === a) return null;
                    if (null !== (s = a) && void 0 !== s && s.bitmap)
                      return (a.refCounter += 1), a;
                    try {
                      var n, r;
                      let t;
                      if (
                        (a ||
                          (a = {
                            bitmap: null,
                            id: 'image_'
                              .concat(_classPrivateFieldGet(l, this), '_')
                              .concat(
                                (_classPrivateFieldSet(
                                  c,
                                  this,
                                  ((n = _classPrivateFieldGet(c, this)),
                                  (r = n++),
                                  n)
                                ),
                                r)
                              ),
                            refCounter: 0,
                            isSvg: !1
                          }),
                        'string' === typeof e)
                      ) {
                        a.url = e;
                        const s = await fetch(e);
                        if (!s.ok) throw new Error(s.statusText);
                        t = await s.blob();
                      } else t = a.file = e;
                      if ('image/svg+xml' === t.type) {
                        const e = i._isSVGFittingCanvas,
                          s = new FileReader(),
                          n = new Image(),
                          r = new Promise((t, i) => {
                            (n.onload = () => {
                              (a.bitmap = n), (a.isSvg = !0), t();
                            }),
                              (s.onload = async () => {
                                const t = (a.svgUrl = s.result);
                                n.src = (await e)
                                  ? ''.concat(
                                      t,
                                      '#svgView(preserveAspectRatio(none))'
                                    )
                                  : t;
                              }),
                              (n.onerror = s.onerror = i);
                          });
                        s.readAsDataURL(t), await r;
                      } else a.bitmap = await createImageBitmap(t);
                      a.refCounter = 1;
                    } catch (o) {
                      console.error(o), (a = null);
                    }
                    return (
                      _classPrivateFieldGet(d, this).set(t, a),
                      a && _classPrivateFieldGet(d, this).set(a.id, a),
                      a
                    );
                  }
                  i = u;
                  var _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap();
                  class m {
                    constructor() {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 128;
                      _classPrivateFieldInitSpec(this, _, []),
                        _classPrivateFieldInitSpec(this, g, !1),
                        _classPrivateFieldInitSpec(this, v, void 0),
                        _classPrivateFieldInitSpec(this, f, -1),
                        _classPrivateFieldSet(v, this, t);
                    }
                    add(t) {
                      let {
                        cmd: e,
                        undo: s,
                        mustExec: i,
                        type: a = NaN,
                        overwriteIfSameType: n = !1,
                        keepUndo: r = !1
                      } = t;
                      if ((i && e(), _classPrivateFieldGet(g, this))) return;
                      const o = { cmd: e, undo: s, type: a };
                      if (-1 === _classPrivateFieldGet(f, this))
                        return (
                          _classPrivateFieldGet(_, this).length > 0 &&
                            (_classPrivateFieldGet(_, this).length = 0),
                          _classPrivateFieldSet(f, this, 0),
                          void _classPrivateFieldGet(_, this).push(o)
                        );
                      if (
                        n &&
                        _classPrivateFieldGet(_, this)[
                          _classPrivateFieldGet(f, this)
                        ].type === a
                      )
                        return (
                          r &&
                            (o.undo = _classPrivateFieldGet(_, this)[
                              _classPrivateFieldGet(f, this)
                            ].undo),
                          void (_classPrivateFieldGet(_, this)[
                            _classPrivateFieldGet(f, this)
                          ] = o)
                        );
                      const l = _classPrivateFieldGet(f, this) + 1;
                      l === _classPrivateFieldGet(v, this)
                        ? _classPrivateFieldGet(_, this).splice(0, 1)
                        : (_classPrivateFieldSet(f, this, l),
                          l < _classPrivateFieldGet(_, this).length &&
                            _classPrivateFieldGet(_, this).splice(l)),
                        _classPrivateFieldGet(_, this).push(o);
                    }
                    undo() {
                      -1 !== _classPrivateFieldGet(f, this) &&
                        (_classPrivateFieldSet(g, this, !0),
                        _classPrivateFieldGet(_, this)[
                          _classPrivateFieldGet(f, this)
                        ].undo(),
                        _classPrivateFieldSet(g, this, !1),
                        _classPrivateFieldSet(
                          f,
                          this,
                          _classPrivateFieldGet(f, this) - 1
                        ));
                    }
                    redo() {
                      _classPrivateFieldGet(f, this) <
                        _classPrivateFieldGet(_, this).length - 1 &&
                        (_classPrivateFieldSet(
                          f,
                          this,
                          _classPrivateFieldGet(f, this) + 1
                        ),
                        _classPrivateFieldSet(g, this, !0),
                        _classPrivateFieldGet(_, this)[
                          _classPrivateFieldGet(f, this)
                        ].cmd(),
                        _classPrivateFieldSet(g, this, !1));
                    }
                    hasSomethingToUndo() {
                      return -1 !== _classPrivateFieldGet(f, this);
                    }
                    hasSomethingToRedo() {
                      return (
                        _classPrivateFieldGet(f, this) <
                        _classPrivateFieldGet(_, this).length - 1
                      );
                    }
                    destroy() {
                      _classPrivateFieldSet(_, this, null);
                    }
                  }
                  e.CommandManager = m;
                  var b = new WeakSet();
                  class P {
                    constructor(t) {
                      _classPrivateMethodInitSpec(this, b),
                        (this.buffer = []),
                        (this.callbacks = new Map()),
                        (this.allKeys = new Set());
                      const { isMac: e } = a.FeatureTest.platform;
                      for (const [s, i, a = {}] of t)
                        for (const t of s) {
                          const s = t.startsWith('mac+');
                          e && s
                            ? (this.callbacks.set(t.slice(4), {
                                callback: i,
                                options: a
                              }),
                              this.allKeys.add(t.split('+').at(-1)))
                            : e ||
                              s ||
                              (this.callbacks.set(t, {
                                callback: i,
                                options: a
                              }),
                              this.allKeys.add(t.split('+').at(-1)));
                        }
                    }
                    exec(t, e) {
                      if (!this.allKeys.has(e.key)) return;
                      const s = this.callbacks.get(
                        _assertClassBrand(b, this, A).call(this, e)
                      );
                      if (!s) return;
                      const {
                        callback: i,
                        options: {
                          bubbles: a = !1,
                          args: n = [],
                          checker: r = null
                        }
                      } = s;
                      (r && !r(t, e)) ||
                        (i.bind(t, ...n)(),
                        a || (e.stopPropagation(), e.preventDefault()));
                    }
                  }
                  function A(t) {
                    t.altKey && this.buffer.push('alt'),
                      t.ctrlKey && this.buffer.push('ctrl'),
                      t.metaKey && this.buffer.push('meta'),
                      t.shiftKey && this.buffer.push('shift'),
                      this.buffer.push(t.key);
                    const e = this.buffer.join('+');
                    return (this.buffer.length = 0), e;
                  }
                  e.KeyboardManager = P;
                  class F {
                    get _colors() {
                      const t = new Map([
                        ['CanvasText', null],
                        ['Canvas', null]
                      ]);
                      return (
                        (0, n.getColorValues)(t),
                        (0, a.shadow)(this, '_colors', t)
                      );
                    }
                    convert(t) {
                      const e = (0, n.getRGB)(t);
                      if (!window.matchMedia('(forced-colors: active)').matches)
                        return e;
                      for (const [s, i] of this._colors)
                        if (i.every((t, s) => t === e[s]))
                          return F._colorsMapping.get(s);
                      return e;
                    }
                    getHexCode(t) {
                      const e = this._colors.get(t);
                      return e ? a.Util.makeHexColor(...e) : t;
                    }
                  }
                  _defineProperty(
                    F,
                    '_colorsMapping',
                    new Map([
                      ['CanvasText', [0, 0, 0]],
                      ['Canvas', [255, 255, 255]]
                    ])
                  ),
                    (e.ColorManager = F);
                  var S = new WeakMap(),
                    y = new WeakMap(),
                    w = new WeakMap(),
                    x = new WeakMap(),
                    C = new WeakMap(),
                    E = new WeakMap(),
                    k = new WeakMap(),
                    M = new WeakMap(),
                    T = new WeakMap(),
                    I = new WeakMap(),
                    R = new WeakMap(),
                    D = new WeakMap(),
                    G = new WeakMap(),
                    L = new WeakMap(),
                    O = new WeakMap(),
                    B = new WeakMap(),
                    N = new WeakMap(),
                    W = new WeakMap(),
                    j = new WeakMap(),
                    U = new WeakMap(),
                    H = new WeakMap(),
                    z = new WeakMap(),
                    q = new WeakMap(),
                    V = new WeakMap(),
                    X = new WeakMap(),
                    Y = new WeakMap(),
                    K = new WeakMap(),
                    J = new WeakMap(),
                    Q = new WeakMap(),
                    Z = new WeakMap(),
                    $ = new WeakMap(),
                    tt = new WeakMap(),
                    et = new WeakMap(),
                    st = new WeakMap(),
                    it = new WeakSet();
                  class at {
                    static get _keyboardManager() {
                      const t = at.prototype,
                        e = (t) => {
                          const { activeElement: e } = document;
                          return (
                            e &&
                            _classPrivateFieldGet(et, t).contains(e) &&
                            t.hasSomethingToControl()
                          );
                        },
                        s = this.TRANSLATE_SMALL,
                        i = this.TRANSLATE_BIG;
                      return (0, a.shadow)(
                        this,
                        '_keyboardManager',
                        new P([
                          [['ctrl+a', 'mac+meta+a'], t.selectAll],
                          [['ctrl+z', 'mac+meta+z'], t.undo],
                          [
                            [
                              'ctrl+y',
                              'ctrl+shift+z',
                              'mac+meta+shift+z',
                              'ctrl+shift+Z',
                              'mac+meta+shift+Z'
                            ],
                            t.redo
                          ],
                          [
                            [
                              'Backspace',
                              'alt+Backspace',
                              'ctrl+Backspace',
                              'shift+Backspace',
                              'mac+Backspace',
                              'mac+alt+Backspace',
                              'mac+ctrl+Backspace',
                              'Delete',
                              'ctrl+Delete',
                              'shift+Delete',
                              'mac+Delete'
                            ],
                            t.delete
                          ],
                          [['Escape', 'mac+Escape'], t.unselectAll],
                          [
                            ['ArrowLeft', 'mac+ArrowLeft'],
                            t.translateSelectedEditors,
                            { args: [-s, 0], checker: e }
                          ],
                          [
                            ['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'],
                            t.translateSelectedEditors,
                            { args: [-i, 0], checker: e }
                          ],
                          [
                            ['ArrowRight', 'mac+ArrowRight'],
                            t.translateSelectedEditors,
                            { args: [s, 0], checker: e }
                          ],
                          [
                            ['ctrl+ArrowRight', 'mac+shift+ArrowRight'],
                            t.translateSelectedEditors,
                            { args: [i, 0], checker: e }
                          ],
                          [
                            ['ArrowUp', 'mac+ArrowUp'],
                            t.translateSelectedEditors,
                            { args: [0, -s], checker: e }
                          ],
                          [
                            ['ctrl+ArrowUp', 'mac+shift+ArrowUp'],
                            t.translateSelectedEditors,
                            { args: [0, -i], checker: e }
                          ],
                          [
                            ['ArrowDown', 'mac+ArrowDown'],
                            t.translateSelectedEditors,
                            { args: [0, s], checker: e }
                          ],
                          [
                            ['ctrl+ArrowDown', 'mac+shift+ArrowDown'],
                            t.translateSelectedEditors,
                            { args: [0, i], checker: e }
                          ]
                        ])
                      );
                    }
                    constructor(t, e, s, i, r, l) {
                      _classPrivateMethodInitSpec(this, it),
                        _classPrivateFieldInitSpec(this, S, null),
                        _classPrivateFieldInitSpec(this, y, new Map()),
                        _classPrivateFieldInitSpec(this, w, new Map()),
                        _classPrivateFieldInitSpec(this, x, null),
                        _classPrivateFieldInitSpec(this, C, null),
                        _classPrivateFieldInitSpec(this, E, new m()),
                        _classPrivateFieldInitSpec(this, k, 0),
                        _classPrivateFieldInitSpec(this, M, new Set()),
                        _classPrivateFieldInitSpec(this, T, null),
                        _classPrivateFieldInitSpec(this, I, null),
                        _classPrivateFieldInitSpec(this, R, new Set()),
                        _classPrivateFieldInitSpec(this, D, null),
                        _classPrivateFieldInitSpec(this, G, new o()),
                        _classPrivateFieldInitSpec(this, L, !1),
                        _classPrivateFieldInitSpec(this, O, !1),
                        _classPrivateFieldInitSpec(this, B, null),
                        _classPrivateFieldInitSpec(
                          this,
                          N,
                          a.AnnotationEditorType.NONE
                        ),
                        _classPrivateFieldInitSpec(this, W, new Set()),
                        _classPrivateFieldInitSpec(this, j, null),
                        _classPrivateFieldInitSpec(
                          this,
                          U,
                          this.blur.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          H,
                          this.focus.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          z,
                          this.copy.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          q,
                          this.cut.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          V,
                          this.paste.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          X,
                          this.keydown.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          Y,
                          this.onEditingAction.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          K,
                          this.onPageChanging.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          J,
                          this.onScaleChanging.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          Q,
                          this.onRotationChanging.bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, Z, {
                          isEditing: !1,
                          isEmpty: !0,
                          hasSomethingToUndo: !1,
                          hasSomethingToRedo: !1,
                          hasSelectedEditor: !1
                        }),
                        _classPrivateFieldInitSpec(this, $, [0, 0]),
                        _classPrivateFieldInitSpec(this, tt, null),
                        _classPrivateFieldInitSpec(this, et, null),
                        _classPrivateFieldInitSpec(this, st, null),
                        _classPrivateFieldSet(et, this, t),
                        _classPrivateFieldSet(st, this, e),
                        _classPrivateFieldSet(x, this, s),
                        (this._eventBus = i),
                        this._eventBus._on(
                          'editingaction',
                          _classPrivateFieldGet(Y, this)
                        ),
                        this._eventBus._on(
                          'pagechanging',
                          _classPrivateFieldGet(K, this)
                        ),
                        this._eventBus._on(
                          'scalechanging',
                          _classPrivateFieldGet(J, this)
                        ),
                        this._eventBus._on(
                          'rotationchanging',
                          _classPrivateFieldGet(Q, this)
                        ),
                        _classPrivateFieldSet(C, this, r.annotationStorage),
                        _classPrivateFieldSet(D, this, r.filterFactory),
                        _classPrivateFieldSet(j, this, l),
                        (this.viewParameters = {
                          realScale: n.PixelsPerInch.PDF_TO_CSS_UNITS,
                          rotation: 0
                        });
                    }
                    destroy() {
                      _assertClassBrand(it, this, lt).call(this),
                        _assertClassBrand(it, this, rt).call(this),
                        this._eventBus._off(
                          'editingaction',
                          _classPrivateFieldGet(Y, this)
                        ),
                        this._eventBus._off(
                          'pagechanging',
                          _classPrivateFieldGet(K, this)
                        ),
                        this._eventBus._off(
                          'scalechanging',
                          _classPrivateFieldGet(J, this)
                        ),
                        this._eventBus._off(
                          'rotationchanging',
                          _classPrivateFieldGet(Q, this)
                        );
                      for (const t of _classPrivateFieldGet(w, this).values())
                        t.destroy();
                      _classPrivateFieldGet(w, this).clear(),
                        _classPrivateFieldGet(y, this).clear(),
                        _classPrivateFieldGet(R, this).clear(),
                        _classPrivateFieldSet(S, this, null),
                        _classPrivateFieldGet(W, this).clear(),
                        _classPrivateFieldGet(E, this).destroy(),
                        _classPrivateFieldGet(x, this).destroy();
                    }
                    get hcmFilter() {
                      return (0, a.shadow)(
                        this,
                        'hcmFilter',
                        _classPrivateFieldGet(j, this)
                          ? _classPrivateFieldGet(D, this).addHCMFilter(
                              _classPrivateFieldGet(j, this).foreground,
                              _classPrivateFieldGet(j, this).background
                            )
                          : 'none'
                      );
                    }
                    get direction() {
                      return (0, a.shadow)(
                        this,
                        'direction',
                        getComputedStyle(_classPrivateFieldGet(et, this))
                          .direction
                      );
                    }
                    editAltText(t) {
                      var e;
                      null === (e = _classPrivateFieldGet(x, this)) ||
                        void 0 === e ||
                        e.editAltText(this, t);
                    }
                    onPageChanging(t) {
                      let { pageNumber: e } = t;
                      _classPrivateFieldSet(k, this, e - 1);
                    }
                    focusMainContainer() {
                      _classPrivateFieldGet(et, this).focus();
                    }
                    findParent(t, e) {
                      for (const s of _classPrivateFieldGet(w, this).values()) {
                        const {
                          x: i,
                          y: a,
                          width: n,
                          height: r
                        } = s.div.getBoundingClientRect();
                        if (t >= i && t <= i + n && e >= a && e <= a + r)
                          return s;
                      }
                      return null;
                    }
                    disableUserSelect() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      _classPrivateFieldGet(st, this).classList.toggle(
                        'noUserSelect',
                        t
                      );
                    }
                    addShouldRescale(t) {
                      _classPrivateFieldGet(R, this).add(t);
                    }
                    removeShouldRescale(t) {
                      _classPrivateFieldGet(R, this).delete(t);
                    }
                    onScaleChanging(t) {
                      let { scale: e } = t;
                      this.commitOrRemove(),
                        (this.viewParameters.realScale =
                          e * n.PixelsPerInch.PDF_TO_CSS_UNITS);
                      for (const s of _classPrivateFieldGet(R, this))
                        s.onScaleChanging();
                    }
                    onRotationChanging(t) {
                      let { pagesRotation: e } = t;
                      this.commitOrRemove(), (this.viewParameters.rotation = e);
                    }
                    addToAnnotationStorage(t) {
                      t.isEmpty() ||
                        !_classPrivateFieldGet(C, this) ||
                        _classPrivateFieldGet(C, this).has(t.id) ||
                        _classPrivateFieldGet(C, this).setValue(t.id, t);
                    }
                    blur() {
                      if (!this.hasSelection) return;
                      const { activeElement: t } = document;
                      for (const e of _classPrivateFieldGet(W, this))
                        if (e.div.contains(t)) {
                          _classPrivateFieldSet(B, this, [e, t]),
                            (e._focusEventsAllowed = !1);
                          break;
                        }
                    }
                    focus() {
                      if (!_classPrivateFieldGet(B, this)) return;
                      const [t, e] = _classPrivateFieldGet(B, this);
                      _classPrivateFieldSet(B, this, null),
                        e.addEventListener(
                          'focusin',
                          () => {
                            t._focusEventsAllowed = !0;
                          },
                          { once: !0 }
                        ),
                        e.focus();
                    }
                    addEditListeners() {
                      _assertClassBrand(it, this, ot).call(this),
                        _assertClassBrand(it, this, ct).call(this);
                    }
                    removeEditListeners() {
                      _assertClassBrand(it, this, lt).call(this),
                        _assertClassBrand(it, this, dt).call(this);
                    }
                    copy(t) {
                      var e;
                      if (
                        (t.preventDefault(),
                        null === (e = _classPrivateFieldGet(S, this)) ||
                          void 0 === e ||
                          e.commitOrRemove(),
                        !this.hasSelection)
                      )
                        return;
                      const s = [];
                      for (const i of _classPrivateFieldGet(W, this)) {
                        const t = i.serialize(!0);
                        t && s.push(t);
                      }
                      0 !== s.length &&
                        t.clipboardData.setData(
                          'application/pdfjs',
                          JSON.stringify(s)
                        );
                    }
                    cut(t) {
                      this.copy(t), this.delete();
                    }
                    paste(t) {
                      t.preventDefault();
                      const { clipboardData: e } = t;
                      for (const a of e.items)
                        for (const t of _classPrivateFieldGet(I, this))
                          if (t.isHandlingMimeForPasting(a.type))
                            return void t.paste(a, this.currentLayer);
                      let s = e.getData('application/pdfjs');
                      if (!s) return;
                      try {
                        s = JSON.parse(s);
                      } catch (n) {
                        return void (0, a.warn)(
                          'paste: "'.concat(n.message, '".')
                        );
                      }
                      if (!Array.isArray(s)) return;
                      this.unselectAll();
                      const i = this.currentLayer;
                      try {
                        const t = [];
                        for (const n of s) {
                          const e = i.deserialize(n);
                          if (!e) return;
                          t.push(e);
                        }
                        const e = () => {
                            for (const e of t)
                              _assertClassBrand(it, this, gt).call(this, e);
                            _assertClassBrand(it, this, ft).call(this, t);
                          },
                          a = () => {
                            for (const e of t) e.remove();
                          };
                        this.addCommands({ cmd: e, undo: a, mustExec: !0 });
                      } catch (n) {
                        (0, a.warn)('paste: "'.concat(n.message, '".'));
                      }
                    }
                    keydown(t) {
                      var e;
                      (null !== (e = this.getActive()) &&
                        void 0 !== e &&
                        e.shouldGetKeyboardEvents()) ||
                        at._keyboardManager.exec(this, t);
                    }
                    onEditingAction(t) {
                      ['undo', 'redo', 'delete', 'selectAll'].includes(
                        t.name
                      ) && this[t.name]();
                    }
                    setEditingState(t) {
                      t
                        ? (_assertClassBrand(it, this, nt).call(this),
                          _assertClassBrand(it, this, ot).call(this),
                          _assertClassBrand(it, this, ct).call(this),
                          _assertClassBrand(it, this, ht).call(this, {
                            isEditing:
                              _classPrivateFieldGet(N, this) !==
                              a.AnnotationEditorType.NONE,
                            isEmpty: _assertClassBrand(it, this, vt).call(this),
                            hasSomethingToUndo: _classPrivateFieldGet(
                              E,
                              this
                            ).hasSomethingToUndo(),
                            hasSomethingToRedo: _classPrivateFieldGet(
                              E,
                              this
                            ).hasSomethingToRedo(),
                            hasSelectedEditor: !1
                          }))
                        : (_assertClassBrand(it, this, rt).call(this),
                          _assertClassBrand(it, this, lt).call(this),
                          _assertClassBrand(it, this, dt).call(this),
                          _assertClassBrand(it, this, ht).call(this, {
                            isEditing: !1
                          }),
                          this.disableUserSelect(!1));
                    }
                    registerEditorTypes(t) {
                      if (!_classPrivateFieldGet(I, this)) {
                        _classPrivateFieldSet(I, this, t);
                        for (const t of _classPrivateFieldGet(I, this))
                          _assertClassBrand(it, this, ut).call(
                            this,
                            t.defaultPropertiesToUpdate
                          );
                      }
                    }
                    getId() {
                      return _classPrivateFieldGet(G, this).getId();
                    }
                    get currentLayer() {
                      return _classPrivateFieldGet(w, this).get(
                        _classPrivateFieldGet(k, this)
                      );
                    }
                    getLayer(t) {
                      return _classPrivateFieldGet(w, this).get(t);
                    }
                    get currentPageIndex() {
                      return _classPrivateFieldGet(k, this);
                    }
                    addLayer(t) {
                      _classPrivateFieldGet(w, this).set(t.pageIndex, t),
                        _classPrivateFieldGet(L, this)
                          ? t.enable()
                          : t.disable();
                    }
                    removeLayer(t) {
                      _classPrivateFieldGet(w, this).delete(t.pageIndex);
                    }
                    updateMode(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      if (_classPrivateFieldGet(N, this) !== t) {
                        if (
                          (_classPrivateFieldSet(N, this, t),
                          t === a.AnnotationEditorType.NONE)
                        )
                          return (
                            this.setEditingState(!1),
                            void _assertClassBrand(it, this, _t).call(this)
                          );
                        this.setEditingState(!0),
                          _assertClassBrand(it, this, pt).call(this),
                          this.unselectAll();
                        for (const e of _classPrivateFieldGet(w, this).values())
                          e.updateMode(t);
                        if (e)
                          for (const t of _classPrivateFieldGet(
                            y,
                            this
                          ).values())
                            if (t.annotationElementId === e) {
                              this.setSelected(t), t.enterInEditMode();
                              break;
                            }
                      }
                    }
                    updateToolbar(t) {
                      t !== _classPrivateFieldGet(N, this) &&
                        this._eventBus.dispatch('switchannotationeditormode', {
                          source: this,
                          mode: t
                        });
                    }
                    updateParams(t, e) {
                      if (_classPrivateFieldGet(I, this))
                        if (t !== a.AnnotationEditorParamsType.CREATE) {
                          for (const s of _classPrivateFieldGet(W, this))
                            s.updateParams(t, e);
                          for (const s of _classPrivateFieldGet(I, this))
                            s.updateDefaultParams(t, e);
                        } else this.currentLayer.addNewEditor(t);
                    }
                    enableWaiting() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      if (_classPrivateFieldGet(O, this) !== t) {
                        _classPrivateFieldSet(O, this, t);
                        for (const e of _classPrivateFieldGet(w, this).values())
                          t ? e.disableClick() : e.enableClick(),
                            e.div.classList.toggle('waiting', t);
                      }
                    }
                    getEditors(t) {
                      const e = [];
                      for (const s of _classPrivateFieldGet(y, this).values())
                        s.pageIndex === t && e.push(s);
                      return e;
                    }
                    getEditor(t) {
                      return _classPrivateFieldGet(y, this).get(t);
                    }
                    addEditor(t) {
                      _classPrivateFieldGet(y, this).set(t.id, t);
                    }
                    removeEditor(t) {
                      var e;
                      _classPrivateFieldGet(y, this).delete(t.id),
                        this.unselect(t),
                        (t.annotationElementId &&
                          _classPrivateFieldGet(M, this).has(
                            t.annotationElementId
                          )) ||
                          null === (e = _classPrivateFieldGet(C, this)) ||
                          void 0 === e ||
                          e.remove(t.id);
                    }
                    addDeletedAnnotationElement(t) {
                      _classPrivateFieldGet(M, this).add(t.annotationElementId),
                        (t.deleted = !0);
                    }
                    isDeletedAnnotationElement(t) {
                      return _classPrivateFieldGet(M, this).has(t);
                    }
                    removeDeletedAnnotationElement(t) {
                      _classPrivateFieldGet(M, this).delete(
                        t.annotationElementId
                      ),
                        (t.deleted = !1);
                    }
                    setActiveEditor(t) {
                      _classPrivateFieldGet(S, this) !== t &&
                        (_classPrivateFieldSet(S, this, t),
                        t &&
                          _assertClassBrand(it, this, ut).call(
                            this,
                            t.propertiesToUpdate
                          ));
                    }
                    toggleSelected(t) {
                      if (_classPrivateFieldGet(W, this).has(t))
                        return (
                          _classPrivateFieldGet(W, this).delete(t),
                          t.unselect(),
                          void _assertClassBrand(it, this, ht).call(this, {
                            hasSelectedEditor: this.hasSelection
                          })
                        );
                      _classPrivateFieldGet(W, this).add(t),
                        t.select(),
                        _assertClassBrand(it, this, ut).call(
                          this,
                          t.propertiesToUpdate
                        ),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSelectedEditor: !0
                        });
                    }
                    setSelected(t) {
                      for (const e of _classPrivateFieldGet(W, this))
                        e !== t && e.unselect();
                      _classPrivateFieldGet(W, this).clear(),
                        _classPrivateFieldGet(W, this).add(t),
                        t.select(),
                        _assertClassBrand(it, this, ut).call(
                          this,
                          t.propertiesToUpdate
                        ),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSelectedEditor: !0
                        });
                    }
                    isSelected(t) {
                      return _classPrivateFieldGet(W, this).has(t);
                    }
                    unselect(t) {
                      t.unselect(),
                        _classPrivateFieldGet(W, this).delete(t),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSelectedEditor: this.hasSelection
                        });
                    }
                    get hasSelection() {
                      return 0 !== _classPrivateFieldGet(W, this).size;
                    }
                    undo() {
                      _classPrivateFieldGet(E, this).undo(),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSomethingToUndo: _classPrivateFieldGet(
                            E,
                            this
                          ).hasSomethingToUndo(),
                          hasSomethingToRedo: !0,
                          isEmpty: _assertClassBrand(it, this, vt).call(this)
                        });
                    }
                    redo() {
                      _classPrivateFieldGet(E, this).redo(),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSomethingToUndo: !0,
                          hasSomethingToRedo: _classPrivateFieldGet(
                            E,
                            this
                          ).hasSomethingToRedo(),
                          isEmpty: _assertClassBrand(it, this, vt).call(this)
                        });
                    }
                    addCommands(t) {
                      _classPrivateFieldGet(E, this).add(t),
                        _assertClassBrand(it, this, ht).call(this, {
                          hasSomethingToUndo: !0,
                          hasSomethingToRedo: !1,
                          isEmpty: _assertClassBrand(it, this, vt).call(this)
                        });
                    }
                    delete() {
                      if ((this.commitOrRemove(), !this.hasSelection)) return;
                      const t = [..._classPrivateFieldGet(W, this)];
                      this.addCommands({
                        cmd: () => {
                          for (const e of t) e.remove();
                        },
                        undo: () => {
                          for (const e of t)
                            _assertClassBrand(it, this, gt).call(this, e);
                        },
                        mustExec: !0
                      });
                    }
                    commitOrRemove() {
                      var t;
                      null === (t = _classPrivateFieldGet(S, this)) ||
                        void 0 === t ||
                        t.commitOrRemove();
                    }
                    hasSomethingToControl() {
                      return (
                        _classPrivateFieldGet(S, this) || this.hasSelection
                      );
                    }
                    selectAll() {
                      for (const t of _classPrivateFieldGet(W, this))
                        t.commit();
                      _assertClassBrand(it, this, ft).call(
                        this,
                        _classPrivateFieldGet(y, this).values()
                      );
                    }
                    unselectAll() {
                      if (_classPrivateFieldGet(S, this))
                        _classPrivateFieldGet(S, this).commitOrRemove();
                      else if (this.hasSelection) {
                        for (const t of _classPrivateFieldGet(W, this))
                          t.unselect();
                        _classPrivateFieldGet(W, this).clear(),
                          _assertClassBrand(it, this, ht).call(this, {
                            hasSelectedEditor: !1
                          });
                      }
                    }
                    translateSelectedEditors(t, e) {
                      if (
                        ((arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2]) ||
                          this.commitOrRemove(),
                        !this.hasSelection)
                      )
                        return;
                      (_classPrivateFieldGet($, this)[0] += t),
                        (_classPrivateFieldGet($, this)[1] += e);
                      const [s, i] = _classPrivateFieldGet($, this),
                        a = [..._classPrivateFieldGet(W, this)];
                      _classPrivateFieldGet(tt, this) &&
                        clearTimeout(_classPrivateFieldGet(tt, this)),
                        _classPrivateFieldSet(
                          tt,
                          this,
                          setTimeout(() => {
                            _classPrivateFieldSet(tt, this, null),
                              (_classPrivateFieldGet($, this)[0] =
                                _classPrivateFieldGet($, this)[1] =
                                  0),
                              this.addCommands({
                                cmd: () => {
                                  for (const t of a)
                                    _classPrivateFieldGet(y, this).has(t.id) &&
                                      t.translateInPage(s, i);
                                },
                                undo: () => {
                                  for (const t of a)
                                    _classPrivateFieldGet(y, this).has(t.id) &&
                                      t.translateInPage(-s, -i);
                                },
                                mustExec: !1
                              });
                          }, 1e3)
                        );
                      for (const n of a) n.translateInPage(t, e);
                    }
                    setUpDragSession() {
                      if (this.hasSelection) {
                        this.disableUserSelect(!0),
                          _classPrivateFieldSet(T, this, new Map());
                        for (const t of _classPrivateFieldGet(W, this))
                          _classPrivateFieldGet(T, this).set(t, {
                            savedX: t.x,
                            savedY: t.y,
                            savedPageIndex: t.pageIndex,
                            newX: 0,
                            newY: 0,
                            newPageIndex: -1
                          });
                      }
                    }
                    endDragSession() {
                      if (!_classPrivateFieldGet(T, this)) return !1;
                      this.disableUserSelect(!1);
                      const t = _classPrivateFieldGet(T, this);
                      _classPrivateFieldSet(T, this, null);
                      let e = !1;
                      for (const [{ x: i, y: a, pageIndex: n }, r] of t)
                        (r.newX = i),
                          (r.newY = a),
                          (r.newPageIndex = n),
                          e ||
                            (e =
                              i !== r.savedX ||
                              a !== r.savedY ||
                              n !== r.savedPageIndex);
                      if (!e) return !1;
                      const s = (t, e, s, i) => {
                        if (_classPrivateFieldGet(y, this).has(t.id)) {
                          const a = _classPrivateFieldGet(w, this).get(i);
                          a
                            ? t._setParentAndPosition(a, e, s)
                            : ((t.pageIndex = i), (t.x = e), (t.y = s));
                        }
                      };
                      return (
                        this.addCommands({
                          cmd: () => {
                            for (const [
                              e,
                              { newX: i, newY: a, newPageIndex: n }
                            ] of t)
                              s(e, i, a, n);
                          },
                          undo: () => {
                            for (const [
                              e,
                              { savedX: i, savedY: a, savedPageIndex: n }
                            ] of t)
                              s(e, i, a, n);
                          },
                          mustExec: !0
                        }),
                        !0
                      );
                    }
                    dragSelectedEditors(t, e) {
                      if (_classPrivateFieldGet(T, this))
                        for (const s of _classPrivateFieldGet(T, this).keys())
                          s.drag(t, e);
                    }
                    rebuild(t) {
                      if (null === t.parent) {
                        const e = this.getLayer(t.pageIndex);
                        e
                          ? (e.changeParent(t), e.addOrRebuild(t))
                          : (this.addEditor(t),
                            this.addToAnnotationStorage(t),
                            t.rebuild());
                      } else t.parent.addOrRebuild(t);
                    }
                    isActive(t) {
                      return _classPrivateFieldGet(S, this) === t;
                    }
                    getActive() {
                      return _classPrivateFieldGet(S, this);
                    }
                    getMode() {
                      return _classPrivateFieldGet(N, this);
                    }
                    get imageManager() {
                      return (0, a.shadow)(this, 'imageManager', new u());
                    }
                  }
                  function nt() {
                    window.addEventListener(
                      'focus',
                      _classPrivateFieldGet(H, this)
                    ),
                      window.addEventListener(
                        'blur',
                        _classPrivateFieldGet(U, this)
                      );
                  }
                  function rt() {
                    window.removeEventListener(
                      'focus',
                      _classPrivateFieldGet(H, this)
                    ),
                      window.removeEventListener(
                        'blur',
                        _classPrivateFieldGet(U, this)
                      );
                  }
                  function ot() {
                    window.addEventListener(
                      'keydown',
                      _classPrivateFieldGet(X, this),
                      { capture: !0 }
                    );
                  }
                  function lt() {
                    window.removeEventListener(
                      'keydown',
                      _classPrivateFieldGet(X, this),
                      { capture: !0 }
                    );
                  }
                  function ct() {
                    document.addEventListener(
                      'copy',
                      _classPrivateFieldGet(z, this)
                    ),
                      document.addEventListener(
                        'cut',
                        _classPrivateFieldGet(q, this)
                      ),
                      document.addEventListener(
                        'paste',
                        _classPrivateFieldGet(V, this)
                      );
                  }
                  function dt() {
                    document.removeEventListener(
                      'copy',
                      _classPrivateFieldGet(z, this)
                    ),
                      document.removeEventListener(
                        'cut',
                        _classPrivateFieldGet(q, this)
                      ),
                      document.removeEventListener(
                        'paste',
                        _classPrivateFieldGet(V, this)
                      );
                  }
                  function ht(t) {
                    Object.entries(t).some((t) => {
                      let [e, s] = t;
                      return _classPrivateFieldGet(Z, this)[e] !== s;
                    }) &&
                      this._eventBus.dispatch('annotationeditorstateschanged', {
                        source: this,
                        details: Object.assign(
                          _classPrivateFieldGet(Z, this),
                          t
                        )
                      });
                  }
                  function ut(t) {
                    this._eventBus.dispatch('annotationeditorparamschanged', {
                      source: this,
                      details: t
                    });
                  }
                  function pt() {
                    if (!_classPrivateFieldGet(L, this)) {
                      _classPrivateFieldSet(L, this, !0);
                      for (const t of _classPrivateFieldGet(w, this).values())
                        t.enable();
                    }
                  }
                  function _t() {
                    if ((this.unselectAll(), _classPrivateFieldGet(L, this))) {
                      _classPrivateFieldSet(L, this, !1);
                      for (const t of _classPrivateFieldGet(w, this).values())
                        t.disable();
                    }
                  }
                  function gt(t) {
                    const e = _classPrivateFieldGet(w, this).get(t.pageIndex);
                    e ? e.addOrRebuild(t) : this.addEditor(t);
                  }
                  function vt() {
                    if (0 === _classPrivateFieldGet(y, this).size) return !0;
                    if (1 === _classPrivateFieldGet(y, this).size)
                      for (const t of _classPrivateFieldGet(y, this).values())
                        return t.isEmpty();
                    return !1;
                  }
                  function ft(t) {
                    _classPrivateFieldGet(W, this).clear();
                    for (const e of t)
                      e.isEmpty() ||
                        (_classPrivateFieldGet(W, this).add(e), e.select());
                    _assertClassBrand(it, this, ht).call(this, {
                      hasSelectedEditor: !0
                    });
                  }
                  _defineProperty(at, 'TRANSLATE_SMALL', 1),
                    _defineProperty(at, 'TRANSLATE_BIG', 10),
                    (e.AnnotationEditorUIManager = at);
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.StatTimer =
                      e.RenderingCancelledException =
                      e.PixelsPerInch =
                      e.PageViewport =
                      e.PDFDateString =
                      e.DOMStandardFontDataFactory =
                      e.DOMSVGFactory =
                      e.DOMFilterFactory =
                      e.DOMCanvasFactory =
                      e.DOMCMapReaderFactory =
                        void 0),
                    (e.deprecated = function (t) {
                      console.log('Deprecated API usage: ' + t);
                    }),
                    (e.getColorValues = function (t) {
                      const e = document.createElement('span');
                      (e.style.visibility = 'hidden'), document.body.append(e);
                      for (const s of t.keys()) {
                        e.style.color = s;
                        const i = window.getComputedStyle(e).color;
                        t.set(s, B(i));
                      }
                      e.remove();
                    }),
                    (e.getCurrentTransform = function (t) {
                      const {
                        a: e,
                        b: s,
                        c: i,
                        d: a,
                        e: n,
                        f: r
                      } = t.getTransform();
                      return [e, s, i, a, n, r];
                    }),
                    (e.getCurrentTransformInverse = function (t) {
                      const {
                        a: e,
                        b: s,
                        c: i,
                        d: a,
                        e: n,
                        f: r
                      } = t.getTransform().invertSelf();
                      return [e, s, i, a, n, r];
                    }),
                    (e.getFilenameFromUrl = function (t) {
                      return (
                        (arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1]) ||
                          ([t] = t.split(/[#?]/, 1)),
                        t.substring(t.lastIndexOf('/') + 1)
                      );
                    }),
                    (e.getPdfFilenameFromUrl = function (t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 'document.pdf';
                      if ('string' !== typeof t) return e;
                      if (G(t))
                        return (
                          (0, n.warn)(
                            'getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'
                          ),
                          e
                        );
                      const s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                        i =
                          /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(
                            t
                          );
                      let a = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
                      if (a && ((a = a[0]), a.includes('%')))
                        try {
                          a = s.exec(decodeURIComponent(a))[0];
                        } catch {}
                      return a || e;
                    }),
                    (e.getRGB = B),
                    (e.getXfaPageViewport = function (t, e) {
                      let { scale: s = 1, rotation: i = 0 } = e;
                      const { width: a, height: n } = t.attributes.style,
                        r = [0, 0, parseInt(a), parseInt(n)];
                      return new R({ viewBox: r, scale: s, rotation: i });
                    }),
                    (e.isDataScheme = G),
                    (e.isPdfFile = function (t) {
                      return 'string' === typeof t && /\.pdf$/i.test(t);
                    }),
                    (e.isValidFetchUrl = L),
                    (e.loadScript = function (t) {
                      let e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      return new Promise((s, i) => {
                        const a = document.createElement('script');
                        (a.src = t),
                          (a.onload = function (t) {
                            e && a.remove(), s(t);
                          }),
                          (a.onerror = function () {
                            i(
                              new Error('Cannot load script at: '.concat(a.src))
                            );
                          }),
                          (document.head || document.documentElement).append(a);
                      });
                    }),
                    (e.noContextMenu = function (t) {
                      t.preventDefault();
                    }),
                    (e.setLayerDimensions = function (t, e) {
                      let s =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        i =
                          !(arguments.length > 3 && void 0 !== arguments[3]) ||
                          arguments[3];
                      if (e instanceof R) {
                        const { pageWidth: i, pageHeight: a } = e.rawDims,
                          { style: r } = t,
                          o = n.FeatureTest.isCSSRoundSupported,
                          l = 'var(--scale-factor) * '.concat(i, 'px'),
                          c = 'var(--scale-factor) * '.concat(a, 'px'),
                          d = o
                            ? 'round('.concat(l, ', 1px)')
                            : 'calc('.concat(l, ')'),
                          h = o
                            ? 'round('.concat(c, ', 1px)')
                            : 'calc('.concat(c, ')');
                        s && e.rotation % 180 !== 0
                          ? ((r.width = h), (r.height = d))
                          : ((r.width = d), (r.height = h));
                      }
                      i && t.setAttribute('data-main-rotation', e.rotation);
                    });
                  var a = s(7),
                    n = s(1);
                  const r = 'http://www.w3.org/2000/svg';
                  class o {}
                  (i = o),
                    _defineProperty(o, 'CSS', 96),
                    _defineProperty(o, 'PDF', 72),
                    _defineProperty(o, 'PDF_TO_CSS_UNITS', i.CSS / i.PDF),
                    (e.PixelsPerInch = o);
                  var l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap(),
                    m = new WeakMap(),
                    b = new WeakSet();
                  class P extends a.BaseFilterFactory {
                    constructor() {
                      let { docId: t, ownerDocument: e = globalThis.document } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      super(),
                        _classPrivateMethodInitSpec(this, b),
                        _classPrivateFieldInitSpec(this, l, void 0),
                        _classPrivateFieldInitSpec(this, c, void 0),
                        _classPrivateFieldInitSpec(this, d, void 0),
                        _classPrivateFieldInitSpec(this, h, void 0),
                        _classPrivateFieldInitSpec(this, u, void 0),
                        _classPrivateFieldInitSpec(this, p, void 0),
                        _classPrivateFieldInitSpec(this, _, void 0),
                        _classPrivateFieldInitSpec(this, g, void 0),
                        _classPrivateFieldInitSpec(this, v, void 0),
                        _classPrivateFieldInitSpec(this, f, void 0),
                        _classPrivateFieldInitSpec(this, m, 0),
                        _classPrivateFieldSet(d, this, t),
                        _classPrivateFieldSet(h, this, e);
                    }
                    addFilter(t) {
                      var e, s;
                      if (!t) return 'none';
                      let i,
                        a,
                        n,
                        r,
                        o = _classPrivateGetter(b, this, A).get(t);
                      if (o) return o;
                      if (1 === t.length) {
                        const e = t[0],
                          s = new Array(256);
                        for (let t = 0; t < 256; t++) s[t] = e[t] / 255;
                        r = i = a = n = s.join(',');
                      } else {
                        const [e, s, o] = t,
                          l = new Array(256),
                          c = new Array(256),
                          d = new Array(256);
                        for (let t = 0; t < 256; t++)
                          (l[t] = e[t] / 255),
                            (c[t] = s[t] / 255),
                            (d[t] = o[t] / 255);
                        (i = l.join(',')),
                          (a = c.join(',')),
                          (n = d.join(',')),
                          (r = ''.concat(i).concat(a).concat(n));
                      }
                      if (((o = _classPrivateGetter(b, this, A).get(r)), o))
                        return _classPrivateGetter(b, this, A).set(t, o), o;
                      const l = 'g_'
                          .concat(
                            _classPrivateFieldGet(d, this),
                            '_transfer_map_'
                          )
                          .concat(
                            (_classPrivateFieldSet(
                              m,
                              this,
                              ((e = _classPrivateFieldGet(m, this)),
                              (s = e++),
                              e)
                            ),
                            s)
                          ),
                        c = 'url(#'.concat(l, ')');
                      _classPrivateGetter(b, this, A).set(t, c),
                        _classPrivateGetter(b, this, A).set(r, c);
                      const h = _assertClassBrand(b, this, y).call(this, l);
                      return (
                        _assertClassBrand(b, this, x).call(this, i, a, n, h), c
                      );
                    }
                    addHCMFilter(t, e) {
                      var s;
                      const i = ''.concat(t, '-').concat(e);
                      if (_classPrivateFieldGet(p, this) === i)
                        return _classPrivateFieldGet(_, this);
                      if (
                        (_classPrivateFieldSet(p, this, i),
                        _classPrivateFieldSet(_, this, 'none'),
                        null === (s = _classPrivateFieldGet(u, this)) ||
                          void 0 === s ||
                          s.remove(),
                        !t || !e)
                      )
                        return _classPrivateFieldGet(_, this);
                      const a = _assertClassBrand(b, this, C).call(this, t);
                      t = n.Util.makeHexColor(...a);
                      const r = _assertClassBrand(b, this, C).call(this, e);
                      if (
                        ((e = n.Util.makeHexColor(...r)),
                        (_classPrivateGetter(b, this, F).style.color = ''),
                        ('#000000' === t && '#ffffff' === e) || t === e)
                      )
                        return _classPrivateFieldGet(_, this);
                      const o = new Array(256);
                      for (let n = 0; n <= 255; n++) {
                        const t = n / 255;
                        o[n] =
                          t <= 0.03928
                            ? t / 12.92
                            : ((t + 0.055) / 1.055) ** 2.4;
                      }
                      const l = o.join(','),
                        c = 'g_'.concat(
                          _classPrivateFieldGet(d, this),
                          '_hcm_filter'
                        ),
                        h = _classPrivateFieldSet(
                          g,
                          this,
                          _assertClassBrand(b, this, y).call(this, c)
                        );
                      _assertClassBrand(b, this, x).call(this, l, l, l, h),
                        _assertClassBrand(b, this, S).call(this, h);
                      const v = (t, e) => {
                        const s = a[t] / 255,
                          i = r[t] / 255,
                          n = new Array(e + 1);
                        for (let a = 0; a <= e; a++)
                          n[a] = s + (a / e) * (i - s);
                        return n.join(',');
                      };
                      return (
                        _assertClassBrand(b, this, x).call(
                          this,
                          v(0, 5),
                          v(1, 5),
                          v(2, 5),
                          h
                        ),
                        _classPrivateFieldSet(_, this, 'url(#'.concat(c, ')')),
                        _classPrivateFieldGet(_, this)
                      );
                    }
                    addHighlightHCMFilter(t, e, s, i) {
                      var a;
                      const n = ''
                        .concat(t, '-')
                        .concat(e, '-')
                        .concat(s, '-')
                        .concat(i);
                      if (_classPrivateFieldGet(v, this) === n)
                        return _classPrivateFieldGet(f, this);
                      if (
                        (_classPrivateFieldSet(v, this, n),
                        _classPrivateFieldSet(f, this, 'none'),
                        null === (a = _classPrivateFieldGet(g, this)) ||
                          void 0 === a ||
                          a.remove(),
                        !t || !e)
                      )
                        return _classPrivateFieldGet(f, this);
                      const [r, o] = [t, e].map(
                        _assertClassBrand(b, this, C).bind(this)
                      );
                      let l = Math.round(
                          0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]
                        ),
                        c = Math.round(
                          0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]
                        ),
                        [h, u] = [s, i].map(
                          _assertClassBrand(b, this, C).bind(this)
                        );
                      c < l && ([l, c, h, u] = [c, l, u, h]),
                        (_classPrivateGetter(b, this, F).style.color = '');
                      const p = (t, e, s) => {
                          const i = new Array(256),
                            a = (c - l) / s,
                            n = t / 255,
                            r = (e - t) / (255 * s);
                          let o = 0;
                          for (let c = 0; c <= s; c++) {
                            const t = Math.round(l + c * a),
                              e = n + c * r;
                            for (let s = o; s <= t; s++) i[s] = e;
                            o = t + 1;
                          }
                          for (let l = o; l < 256; l++) i[l] = i[o - 1];
                          return i.join(',');
                        },
                        _ = 'g_'.concat(
                          _classPrivateFieldGet(d, this),
                          '_hcm_highlight_filter'
                        ),
                        m = _classPrivateFieldSet(
                          g,
                          this,
                          _assertClassBrand(b, this, y).call(this, _)
                        );
                      return (
                        _assertClassBrand(b, this, S).call(this, m),
                        _assertClassBrand(b, this, x).call(
                          this,
                          p(h[0], u[0], 5),
                          p(h[1], u[1], 5),
                          p(h[2], u[2], 5),
                          m
                        ),
                        _classPrivateFieldSet(f, this, 'url(#'.concat(_, ')')),
                        _classPrivateFieldGet(f, this)
                      );
                    }
                    destroy() {
                      (arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0] &&
                        (_classPrivateFieldGet(_, this) ||
                          _classPrivateFieldGet(f, this))) ||
                        (_classPrivateFieldGet(c, this) &&
                          (_classPrivateFieldGet(
                            c,
                            this
                          ).parentNode.parentNode.remove(),
                          _classPrivateFieldSet(c, this, null)),
                        _classPrivateFieldGet(l, this) &&
                          (_classPrivateFieldGet(l, this).clear(),
                          _classPrivateFieldSet(l, this, null)),
                        _classPrivateFieldSet(m, this, 0));
                    }
                  }
                  function A(t) {
                    return (
                      _classPrivateFieldGet(l, t) ||
                      _classPrivateFieldSet(l, t, new Map())
                    );
                  }
                  function F(t) {
                    if (!_classPrivateFieldGet(c, t)) {
                      const e = _classPrivateFieldGet(h, t).createElement(
                          'div'
                        ),
                        { style: s } = e;
                      (s.visibility = 'hidden'),
                        (s.contain = 'strict'),
                        (s.width = s.height = 0),
                        (s.position = 'absolute'),
                        (s.top = s.left = 0),
                        (s.zIndex = -1);
                      const i = _classPrivateFieldGet(h, t).createElementNS(
                        r,
                        'svg'
                      );
                      i.setAttribute('width', 0),
                        i.setAttribute('height', 0),
                        _classPrivateFieldSet(
                          c,
                          t,
                          _classPrivateFieldGet(h, t).createElementNS(r, 'defs')
                        ),
                        e.append(i),
                        i.append(_classPrivateFieldGet(c, t)),
                        _classPrivateFieldGet(h, t).body.append(e);
                    }
                    return _classPrivateFieldGet(c, t);
                  }
                  function S(t) {
                    const e = _classPrivateFieldGet(h, this).createElementNS(
                      r,
                      'feColorMatrix'
                    );
                    e.setAttribute('type', 'matrix'),
                      e.setAttribute(
                        'values',
                        '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'
                      ),
                      t.append(e);
                  }
                  function y(t) {
                    const e = _classPrivateFieldGet(h, this).createElementNS(
                      r,
                      'filter'
                    );
                    return (
                      e.setAttribute('color-interpolation-filters', 'sRGB'),
                      e.setAttribute('id', t),
                      _classPrivateGetter(b, this, F).append(e),
                      e
                    );
                  }
                  function w(t, e, s) {
                    const i = _classPrivateFieldGet(h, this).createElementNS(
                      r,
                      e
                    );
                    i.setAttribute('type', 'discrete'),
                      i.setAttribute('tableValues', s),
                      t.append(i);
                  }
                  function x(t, e, s, i) {
                    const a = _classPrivateFieldGet(h, this).createElementNS(
                      r,
                      'feComponentTransfer'
                    );
                    i.append(a),
                      _assertClassBrand(b, this, w).call(this, a, 'feFuncR', t),
                      _assertClassBrand(b, this, w).call(this, a, 'feFuncG', e),
                      _assertClassBrand(b, this, w).call(this, a, 'feFuncB', s);
                  }
                  function C(t) {
                    return (
                      (_classPrivateGetter(b, this, F).style.color = t),
                      B(
                        getComputedStyle(
                          _classPrivateGetter(b, this, F)
                        ).getPropertyValue('color')
                      )
                    );
                  }
                  e.DOMFilterFactory = P;
                  class E extends a.BaseCanvasFactory {
                    constructor() {
                      let { ownerDocument: t = globalThis.document } =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      super(), (this._document = t);
                    }
                    _createCanvas(t, e) {
                      const s = this._document.createElement('canvas');
                      return (s.width = t), (s.height = e), s;
                    }
                  }
                  async function k(t) {
                    let e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (L(t, document.baseURI)) {
                      const s = await fetch(t);
                      if (!s.ok) throw new Error(s.statusText);
                      return e
                        ? new Uint8Array(await s.arrayBuffer())
                        : (0, n.stringToBytes)(await s.text());
                    }
                    return new Promise((s, i) => {
                      const a = new XMLHttpRequest();
                      a.open('GET', t, !0),
                        e && (a.responseType = 'arraybuffer'),
                        (a.onreadystatechange = () => {
                          if (a.readyState === XMLHttpRequest.DONE) {
                            if (200 === a.status || 0 === a.status) {
                              let t;
                              if (
                                (e && a.response
                                  ? (t = new Uint8Array(a.response))
                                  : !e &&
                                    a.responseText &&
                                    (t = (0, n.stringToBytes)(a.responseText)),
                                t)
                              )
                                return void s(t);
                            }
                            i(new Error(a.statusText));
                          }
                        }),
                        a.send(null);
                    });
                  }
                  e.DOMCanvasFactory = E;
                  class M extends a.BaseCMapReaderFactory {
                    _fetchData(t, e) {
                      return k(t, this.isCompressed).then((t) => ({
                        cMapData: t,
                        compressionType: e
                      }));
                    }
                  }
                  e.DOMCMapReaderFactory = M;
                  class T extends a.BaseStandardFontDataFactory {
                    _fetchData(t) {
                      return k(t, !0);
                    }
                  }
                  e.DOMStandardFontDataFactory = T;
                  class I extends a.BaseSVGFactory {
                    _createSVG(t) {
                      return document.createElementNS(r, t);
                    }
                  }
                  e.DOMSVGFactory = I;
                  class R {
                    constructor(t) {
                      let {
                        viewBox: e,
                        scale: s,
                        rotation: i,
                        offsetX: a = 0,
                        offsetY: n = 0,
                        dontFlip: r = !1
                      } = t;
                      (this.viewBox = e),
                        (this.scale = s),
                        (this.rotation = i),
                        (this.offsetX = a),
                        (this.offsetY = n);
                      const o = (e[2] + e[0]) / 2,
                        l = (e[3] + e[1]) / 2;
                      let c, d, h, u, p, _, g, v;
                      switch (((i %= 360), i < 0 && (i += 360), i)) {
                        case 180:
                          (c = -1), (d = 0), (h = 0), (u = 1);
                          break;
                        case 90:
                          (c = 0), (d = 1), (h = 1), (u = 0);
                          break;
                        case 270:
                          (c = 0), (d = -1), (h = -1), (u = 0);
                          break;
                        case 0:
                          (c = 1), (d = 0), (h = 0), (u = -1);
                          break;
                        default:
                          throw new Error(
                            'PageViewport: Invalid rotation, must be a multiple of 90 degrees.'
                          );
                      }
                      r && ((h = -h), (u = -u)),
                        0 === c
                          ? ((p = Math.abs(l - e[1]) * s + a),
                            (_ = Math.abs(o - e[0]) * s + n),
                            (g = (e[3] - e[1]) * s),
                            (v = (e[2] - e[0]) * s))
                          : ((p = Math.abs(o - e[0]) * s + a),
                            (_ = Math.abs(l - e[1]) * s + n),
                            (g = (e[2] - e[0]) * s),
                            (v = (e[3] - e[1]) * s)),
                        (this.transform = [
                          c * s,
                          d * s,
                          h * s,
                          u * s,
                          p - c * s * o - h * s * l,
                          _ - d * s * o - u * s * l
                        ]),
                        (this.width = g),
                        (this.height = v);
                    }
                    get rawDims() {
                      const { viewBox: t } = this;
                      return (0, n.shadow)(this, 'rawDims', {
                        pageWidth: t[2] - t[0],
                        pageHeight: t[3] - t[1],
                        pageX: t[0],
                        pageY: t[1]
                      });
                    }
                    clone() {
                      let {
                        scale: t = this.scale,
                        rotation: e = this.rotation,
                        offsetX: s = this.offsetX,
                        offsetY: i = this.offsetY,
                        dontFlip: a = !1
                      } = arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                      return new R({
                        viewBox: this.viewBox.slice(),
                        scale: t,
                        rotation: e,
                        offsetX: s,
                        offsetY: i,
                        dontFlip: a
                      });
                    }
                    convertToViewportPoint(t, e) {
                      return n.Util.applyTransform([t, e], this.transform);
                    }
                    convertToViewportRectangle(t) {
                      const e = n.Util.applyTransform(
                          [t[0], t[1]],
                          this.transform
                        ),
                        s = n.Util.applyTransform([t[2], t[3]], this.transform);
                      return [e[0], e[1], s[0], s[1]];
                    }
                    convertToPdfPoint(t, e) {
                      return n.Util.applyInverseTransform(
                        [t, e],
                        this.transform
                      );
                    }
                  }
                  e.PageViewport = R;
                  class D extends n.BaseException {
                    constructor(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      super(t, 'RenderingCancelledException'),
                        (this.extraDelay = e);
                    }
                  }
                  function G(t) {
                    const e = t.length;
                    let s = 0;
                    for (; s < e && '' === t[s].trim(); ) s++;
                    return 'data:' === t.substring(s, s + 5).toLowerCase();
                  }
                  function L(t, e) {
                    try {
                      const { protocol: s } = e ? new URL(t, e) : new URL(t);
                      return 'http:' === s || 'https:' === s;
                    } catch {
                      return !1;
                    }
                  }
                  let O;
                  function B(t) {
                    if (t.startsWith('#')) {
                      const e = parseInt(t.slice(1), 16);
                      return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
                    }
                    return t.startsWith('rgb(')
                      ? t
                          .slice(4, -1)
                          .split(',')
                          .map((t) => parseInt(t))
                      : t.startsWith('rgba(')
                      ? t
                          .slice(5, -1)
                          .split(',')
                          .map((t) => parseInt(t))
                          .slice(0, 3)
                      : ((0, n.warn)(
                          'Not a valid color format: "'.concat(t, '"')
                        ),
                        [0, 0, 0]);
                  }
                  (e.RenderingCancelledException = D),
                    (e.StatTimer = class {
                      constructor() {
                        _defineProperty(this, 'started', Object.create(null)),
                          _defineProperty(this, 'times', []);
                      }
                      time(t) {
                        t in this.started &&
                          (0, n.warn)(
                            'Timer is already running for '.concat(t)
                          ),
                          (this.started[t] = Date.now());
                      }
                      timeEnd(t) {
                        t in this.started ||
                          (0, n.warn)(
                            'Timer has not been started for '.concat(t)
                          ),
                          this.times.push({
                            name: t,
                            start: this.started[t],
                            end: Date.now()
                          }),
                          delete this.started[t];
                      }
                      toString() {
                        const t = [];
                        let e = 0;
                        for (const { name: s } of this.times)
                          e = Math.max(s.length, e);
                        for (const { name: s, start: i, end: a } of this.times)
                          t.push(
                            ''.concat(s.padEnd(e), ' ').concat(a - i, 'ms\n')
                          );
                        return t.join('');
                      }
                    }),
                    (e.PDFDateString = class {
                      static toDateObject(t) {
                        if (!t || 'string' !== typeof t) return null;
                        O ||
                          (O = new RegExp(
                            "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                          ));
                        const e = O.exec(t);
                        if (!e) return null;
                        const s = parseInt(e[1], 10);
                        let i = parseInt(e[2], 10);
                        i = i >= 1 && i <= 12 ? i - 1 : 0;
                        let a = parseInt(e[3], 10);
                        a = a >= 1 && a <= 31 ? a : 1;
                        let n = parseInt(e[4], 10);
                        n = n >= 0 && n <= 23 ? n : 0;
                        let r = parseInt(e[5], 10);
                        r = r >= 0 && r <= 59 ? r : 0;
                        let o = parseInt(e[6], 10);
                        o = o >= 0 && o <= 59 ? o : 0;
                        const l = e[7] || 'Z';
                        let c = parseInt(e[8], 10);
                        c = c >= 0 && c <= 23 ? c : 0;
                        let d = parseInt(e[9], 10) || 0;
                        return (
                          (d = d >= 0 && d <= 59 ? d : 0),
                          '-' === l
                            ? ((n += c), (r += d))
                            : '+' === l && ((n -= c), (r -= d)),
                          new Date(Date.UTC(s, i, a, n, r, o))
                        );
                      }
                    });
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.BaseStandardFontDataFactory =
                      e.BaseSVGFactory =
                      e.BaseFilterFactory =
                      e.BaseCanvasFactory =
                      e.BaseCMapReaderFactory =
                        void 0);
                  var i = s(1);
                  class a {
                    constructor() {
                      this.constructor === a &&
                        (0, i.unreachable)(
                          'Cannot initialize BaseFilterFactory.'
                        );
                    }
                    addFilter(t) {
                      return 'none';
                    }
                    addHCMFilter(t, e) {
                      return 'none';
                    }
                    addHighlightHCMFilter(t, e, s, i) {
                      return 'none';
                    }
                    destroy() {}
                  }
                  e.BaseFilterFactory = a;
                  class n {
                    constructor() {
                      this.constructor === n &&
                        (0, i.unreachable)(
                          'Cannot initialize BaseCanvasFactory.'
                        );
                    }
                    create(t, e) {
                      if (t <= 0 || e <= 0)
                        throw new Error('Invalid canvas size');
                      const s = this._createCanvas(t, e);
                      return { canvas: s, context: s.getContext('2d') };
                    }
                    reset(t, e, s) {
                      if (!t.canvas) throw new Error('Canvas is not specified');
                      if (e <= 0 || s <= 0)
                        throw new Error('Invalid canvas size');
                      (t.canvas.width = e), (t.canvas.height = s);
                    }
                    destroy(t) {
                      if (!t.canvas) throw new Error('Canvas is not specified');
                      (t.canvas.width = 0),
                        (t.canvas.height = 0),
                        (t.canvas = null),
                        (t.context = null);
                    }
                    _createCanvas(t, e) {
                      (0, i.unreachable)(
                        'Abstract method `_createCanvas` called.'
                      );
                    }
                  }
                  e.BaseCanvasFactory = n;
                  class r {
                    constructor(t) {
                      let { baseUrl: e = null, isCompressed: s = !0 } = t;
                      this.constructor === r &&
                        (0, i.unreachable)(
                          'Cannot initialize BaseCMapReaderFactory.'
                        ),
                        (this.baseUrl = e),
                        (this.isCompressed = s);
                    }
                    async fetch(t) {
                      let { name: e } = t;
                      if (!this.baseUrl)
                        throw new Error(
                          'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                        );
                      if (!e) throw new Error('CMap name must be specified.');
                      const s =
                          this.baseUrl +
                          e +
                          (this.isCompressed ? '.bcmap' : ''),
                        a = this.isCompressed
                          ? i.CMapCompressionType.BINARY
                          : i.CMapCompressionType.NONE;
                      return this._fetchData(s, a).catch((t) => {
                        throw new Error(
                          'Unable to load '
                            .concat(
                              this.isCompressed ? 'binary ' : '',
                              'CMap at: '
                            )
                            .concat(s)
                        );
                      });
                    }
                    _fetchData(t, e) {
                      (0, i.unreachable)(
                        'Abstract method `_fetchData` called.'
                      );
                    }
                  }
                  e.BaseCMapReaderFactory = r;
                  class o {
                    constructor(t) {
                      let { baseUrl: e = null } = t;
                      this.constructor === o &&
                        (0, i.unreachable)(
                          'Cannot initialize BaseStandardFontDataFactory.'
                        ),
                        (this.baseUrl = e);
                    }
                    async fetch(t) {
                      let { filename: e } = t;
                      if (!this.baseUrl)
                        throw new Error(
                          'The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.'
                        );
                      if (!e)
                        throw new Error('Font filename must be specified.');
                      const s = ''.concat(this.baseUrl).concat(e);
                      return this._fetchData(s).catch((t) => {
                        throw new Error(
                          'Unable to load font data at: '.concat(s)
                        );
                      });
                    }
                    _fetchData(t) {
                      (0, i.unreachable)(
                        'Abstract method `_fetchData` called.'
                      );
                    }
                  }
                  e.BaseStandardFontDataFactory = o;
                  class l {
                    constructor() {
                      this.constructor === l &&
                        (0, i.unreachable)('Cannot initialize BaseSVGFactory.');
                    }
                    create(t, e) {
                      let s =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (t <= 0 || e <= 0)
                        throw new Error('Invalid SVG dimensions');
                      const i = this._createSVG('svg:svg');
                      return (
                        i.setAttribute('version', '1.1'),
                        s ||
                          (i.setAttribute('width', ''.concat(t, 'px')),
                          i.setAttribute('height', ''.concat(e, 'px'))),
                        i.setAttribute('preserveAspectRatio', 'none'),
                        i.setAttribute(
                          'viewBox',
                          '0 0 '.concat(t, ' ').concat(e)
                        ),
                        i
                      );
                    }
                    createElement(t) {
                      if ('string' !== typeof t)
                        throw new Error('Invalid SVG element type');
                      return this._createSVG(t);
                    }
                    _createSVG(t) {
                      (0, i.unreachable)(
                        'Abstract method `_createSVG` called.'
                      );
                    }
                  }
                  e.BaseSVGFactory = l;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.MurmurHash3_64 = void 0);
                  var i = s(1);
                  const a = 3285377520,
                    n = 4294901760,
                    r = 65535;
                  e.MurmurHash3_64 = class {
                    constructor(t) {
                      (this.h1 = t ? 4294967295 & t : a),
                        (this.h2 = t ? 4294967295 & t : a);
                    }
                    update(t) {
                      let e, s;
                      if ('string' === typeof t) {
                        (e = new Uint8Array(2 * t.length)), (s = 0);
                        for (let i = 0, a = t.length; i < a; i++) {
                          const a = t.charCodeAt(i);
                          a <= 255
                            ? (e[s++] = a)
                            : ((e[s++] = a >>> 8), (e[s++] = 255 & a));
                        }
                      } else {
                        if (!(0, i.isArrayBuffer)(t))
                          throw new Error(
                            'Wrong data format in MurmurHash3_64_update. Input must be a string or array.'
                          );
                        (e = t.slice()), (s = e.byteLength);
                      }
                      const a = s >> 2,
                        o = s - 4 * a,
                        l = new Uint32Array(e.buffer, 0, a);
                      let c = 0,
                        d = 0,
                        h = this.h1,
                        u = this.h2;
                      const p = 3432918353,
                        _ = 461845907,
                        g = 11601,
                        v = 13715;
                      for (let i = 0; i < a; i++)
                        1 & i
                          ? ((c = l[i]),
                            (c = ((c * p) & n) | ((c * g) & r)),
                            (c = (c << 15) | (c >>> 17)),
                            (c = ((c * _) & n) | ((c * v) & r)),
                            (h ^= c),
                            (h = (h << 13) | (h >>> 19)),
                            (h = 5 * h + 3864292196))
                          : ((d = l[i]),
                            (d = ((d * p) & n) | ((d * g) & r)),
                            (d = (d << 15) | (d >>> 17)),
                            (d = ((d * _) & n) | ((d * v) & r)),
                            (u ^= d),
                            (u = (u << 13) | (u >>> 19)),
                            (u = 5 * u + 3864292196));
                      switch (((c = 0), o)) {
                        case 3:
                          c ^= e[4 * a + 2] << 16;
                        case 2:
                          c ^= e[4 * a + 1] << 8;
                        case 1:
                          (c ^= e[4 * a]),
                            (c = ((c * p) & n) | ((c * g) & r)),
                            (c = (c << 15) | (c >>> 17)),
                            (c = ((c * _) & n) | ((c * v) & r)),
                            1 & a ? (h ^= c) : (u ^= c);
                      }
                      (this.h1 = h), (this.h2 = u);
                    }
                    hexdigest() {
                      let t = this.h1,
                        e = this.h2;
                      return (
                        (t ^= e >>> 1),
                        (t = ((3981806797 * t) & n) | ((36045 * t) & r)),
                        (e =
                          ((4283543511 * e) & n) |
                          (((2950163797 * ((e << 16) | (t >>> 16))) & n) >>>
                            16)),
                        (t ^= e >>> 1),
                        (t = ((444984403 * t) & n) | ((60499 * t) & r)),
                        (e =
                          ((3301882366 * e) & n) |
                          (((3120437893 * ((e << 16) | (t >>> 16))) & n) >>>
                            16)),
                        (t ^= e >>> 1),
                        (t >>> 0).toString(16).padStart(8, '0') +
                          (e >>> 0).toString(16).padStart(8, '0')
                      );
                    }
                  };
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.FontLoader = e.FontFaceObject = void 0);
                  var i = s(1),
                    a = new WeakMap();
                  (e.FontLoader = class {
                    constructor(t) {
                      let {
                        ownerDocument: e = globalThis.document,
                        styleElement: s = null
                      } = t;
                      _classPrivateFieldInitSpec(this, a, new Set()),
                        (this._document = e),
                        (this.nativeFontFaces = new Set()),
                        (this.styleElement = null),
                        (this.loadingRequests = []),
                        (this.loadTestFontId = 0);
                    }
                    addNativeFontFace(t) {
                      this.nativeFontFaces.add(t), this._document.fonts.add(t);
                    }
                    removeNativeFontFace(t) {
                      this.nativeFontFaces.delete(t),
                        this._document.fonts.delete(t);
                    }
                    insertRule(t) {
                      this.styleElement ||
                        ((this.styleElement =
                          this._document.createElement('style')),
                        this._document.documentElement
                          .getElementsByTagName('head')[0]
                          .append(this.styleElement));
                      const e = this.styleElement.sheet;
                      e.insertRule(t, e.cssRules.length);
                    }
                    clear() {
                      for (const t of this.nativeFontFaces)
                        this._document.fonts.delete(t);
                      this.nativeFontFaces.clear(),
                        _classPrivateFieldGet(a, this).clear(),
                        this.styleElement &&
                          (this.styleElement.remove(),
                          (this.styleElement = null));
                    }
                    async loadSystemFont(t) {
                      if (
                        t &&
                        !_classPrivateFieldGet(a, this).has(t.loadedName)
                      )
                        if (
                          ((0, i.assert)(
                            !this.disableFontFace,
                            "loadSystemFont shouldn't be called when `disableFontFace` is set."
                          ),
                          this.isFontLoadingAPISupported)
                        ) {
                          const { loadedName: e, src: s, style: n } = t,
                            r = new FontFace(e, s, n);
                          this.addNativeFontFace(r);
                          try {
                            await r.load(),
                              _classPrivateFieldGet(a, this).add(e);
                          } catch {
                            (0, i.warn)(
                              'Cannot load system font: '.concat(
                                t.baseFontName,
                                ', installing it could help to improve PDF rendering.'
                              )
                            ),
                              this.removeNativeFontFace(r);
                          }
                        } else
                          (0, i.unreachable)(
                            'Not implemented: loadSystemFont without the Font Loading API.'
                          );
                    }
                    async bind(t) {
                      if (t.attached || (t.missingFile && !t.systemFontInfo))
                        return;
                      if (((t.attached = !0), t.systemFontInfo))
                        return void (await this.loadSystemFont(
                          t.systemFontInfo
                        ));
                      if (this.isFontLoadingAPISupported) {
                        const e = t.createNativeFontFace();
                        if (e) {
                          this.addNativeFontFace(e);
                          try {
                            await e.loaded;
                          } catch (s) {
                            throw (
                              ((0, i.warn)(
                                "Failed to load font '"
                                  .concat(e.family, "': '")
                                  .concat(s, "'.")
                              ),
                              (t.disableFontFace = !0),
                              s)
                            );
                          }
                        }
                        return;
                      }
                      const e = t.createFontFaceRule();
                      if (e) {
                        if (
                          (this.insertRule(e), this.isSyncFontLoadingSupported)
                        )
                          return;
                        await new Promise((e) => {
                          const s = this._queueLoadingCallback(e);
                          this._prepareFontLoadEvent(t, s);
                        });
                      }
                    }
                    get isFontLoadingAPISupported() {
                      var t;
                      const e = !(
                        null === (t = this._document) ||
                        void 0 === t ||
                        !t.fonts
                      );
                      return (0, i.shadow)(
                        this,
                        'isFontLoadingAPISupported',
                        e
                      );
                    }
                    get isSyncFontLoadingSupported() {
                      let t = !1;
                      return (
                        (i.isNodeJS ||
                          ('undefined' !== typeof navigator &&
                            /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(
                              navigator.userAgent
                            ))) &&
                          (t = !0),
                        (0, i.shadow)(this, 'isSyncFontLoadingSupported', t)
                      );
                    }
                    _queueLoadingCallback(t) {
                      const { loadingRequests: e } = this,
                        s = {
                          done: !1,
                          complete: function () {
                            for (
                              (0, i.assert)(
                                !s.done,
                                'completeRequest() cannot be called twice.'
                              ),
                                s.done = !0;
                              e.length > 0 && e[0].done;

                            ) {
                              const t = e.shift();
                              setTimeout(t.callback, 0);
                            }
                          },
                          callback: t
                        };
                      return e.push(s), s;
                    }
                    get _loadTestFont() {
                      const t = atob(
                        'T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=='
                      );
                      return (0, i.shadow)(this, '_loadTestFont', t);
                    }
                    _prepareFontLoadEvent(t, e) {
                      function s(t, e) {
                        return (
                          (t.charCodeAt(e) << 24) |
                          (t.charCodeAt(e + 1) << 16) |
                          (t.charCodeAt(e + 2) << 8) |
                          (255 & t.charCodeAt(e + 3))
                        );
                      }
                      function a(t, e, s, i) {
                        return t.substring(0, e) + i + t.substring(e + s);
                      }
                      let n, r;
                      const o = this._document.createElement('canvas');
                      (o.width = 1), (o.height = 1);
                      const l = o.getContext('2d');
                      let c = 0;
                      const d = 'lt'
                        .concat(Date.now())
                        .concat(this.loadTestFontId++);
                      let h = this._loadTestFont;
                      h = a(h, 976, d.length, d);
                      const u = 1482184792;
                      let p = s(h, 16);
                      for (n = 0, r = d.length - 3; n < r; n += 4)
                        p = (p - u + s(d, n)) | 0;
                      n < d.length && (p = (p - u + s(d + 'XXX', n)) | 0),
                        (h = a(h, 16, 4, (0, i.string32)(p)));
                      const _ = 'url(data:font/opentype;base64,'.concat(
                          btoa(h),
                          ');'
                        ),
                        g = '@font-face {font-family:"'
                          .concat(d, '";src:')
                          .concat(_, '}');
                      this.insertRule(g);
                      const v = this._document.createElement('div');
                      (v.style.visibility = 'hidden'),
                        (v.style.width = v.style.height = '10px'),
                        (v.style.position = 'absolute'),
                        (v.style.top = v.style.left = '0px');
                      for (const i of [t.loadedName, d]) {
                        const t = this._document.createElement('span');
                        (t.textContent = 'Hi'),
                          (t.style.fontFamily = i),
                          v.append(t);
                      }
                      this._document.body.append(v),
                        (function t(e, s) {
                          if (++c > 30)
                            return (
                              (0, i.warn)('Load test font never loaded.'),
                              void s()
                            );
                          (l.font = '30px ' + e),
                            l.fillText('.', 0, 20),
                            l.getImageData(0, 0, 1, 1).data[3] > 0
                              ? s()
                              : setTimeout(t.bind(null, e, s));
                        })(d, () => {
                          v.remove(), e.complete();
                        });
                    }
                  }),
                    (e.FontFaceObject = class {
                      constructor(t, e) {
                        let {
                          isEvalSupported: s = !0,
                          disableFontFace: i = !1,
                          ignoreErrors: a = !1,
                          inspectFont: n = null
                        } = e;
                        this.compiledGlyphs = Object.create(null);
                        for (const r in t) this[r] = t[r];
                        (this.isEvalSupported = !1 !== s),
                          (this.disableFontFace = !0 === i),
                          (this.ignoreErrors = !0 === a),
                          (this._inspectFont = n);
                      }
                      createNativeFontFace() {
                        var t;
                        if (!this.data || this.disableFontFace) return null;
                        let e;
                        if (this.cssFontInfo) {
                          const t = { weight: this.cssFontInfo.fontWeight };
                          this.cssFontInfo.italicAngle &&
                            (t.style = 'oblique '.concat(
                              this.cssFontInfo.italicAngle,
                              'deg'
                            )),
                            (e = new FontFace(
                              this.cssFontInfo.fontFamily,
                              this.data,
                              t
                            ));
                        } else e = new FontFace(this.loadedName, this.data, {});
                        return (
                          null === (t = this._inspectFont) ||
                            void 0 === t ||
                            t.call(this, this),
                          e
                        );
                      }
                      createFontFaceRule() {
                        var t;
                        if (!this.data || this.disableFontFace) return null;
                        const e = (0, i.bytesToString)(this.data),
                          s = 'url(data:'
                            .concat(this.mimetype, ';base64,')
                            .concat(btoa(e), ');');
                        let a;
                        if (this.cssFontInfo) {
                          let t = 'font-weight: '.concat(
                            this.cssFontInfo.fontWeight,
                            ';'
                          );
                          this.cssFontInfo.italicAngle &&
                            (t += 'font-style: oblique '.concat(
                              this.cssFontInfo.italicAngle,
                              'deg;'
                            )),
                            (a = '@font-face {font-family:"'
                              .concat(this.cssFontInfo.fontFamily, '";')
                              .concat(t, 'src:')
                              .concat(s, '}'));
                        } else
                          a = '@font-face {font-family:"'
                            .concat(this.loadedName, '";src:')
                            .concat(s, '}');
                        return (
                          null === (t = this._inspectFont) ||
                            void 0 === t ||
                            t.call(this, this, s),
                          a
                        );
                      }
                      getPathGenerator(t, e) {
                        if (void 0 !== this.compiledGlyphs[e])
                          return this.compiledGlyphs[e];
                        let s;
                        try {
                          s = t.get(this.loadedName + '_path_' + e);
                        } catch (a) {
                          if (!this.ignoreErrors) throw a;
                          return (
                            (0, i.warn)(
                              'getPathGenerator - ignoring character: "'.concat(
                                a,
                                '".'
                              )
                            ),
                            (this.compiledGlyphs[e] = function (t, e) {})
                          );
                        }
                        if (
                          this.isEvalSupported &&
                          i.FeatureTest.isEvalSupported
                        ) {
                          const t = [];
                          for (const e of s) {
                            const s = void 0 !== e.args ? e.args.join(',') : '';
                            t.push('c.', e.cmd, '(', s, ');\n');
                          }
                          return (this.compiledGlyphs[e] = new Function(
                            'c',
                            'size',
                            t.join('')
                          ));
                        }
                        return (this.compiledGlyphs[e] = function (t, e) {
                          for (const i of s)
                            'scale' === i.cmd && (i.args = [e, -e]),
                              t[i.cmd].apply(t, i.args);
                        });
                      }
                    });
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.NodeStandardFontDataFactory =
                      e.NodeFilterFactory =
                      e.NodeCanvasFactory =
                      e.NodeCMapReaderFactory =
                        void 0);
                  var i = s(7);
                  s(1);
                  const a = function (t) {
                    return new Promise((e, s) => {
                      __webpack_require__(69851).readFile(t, (t, i) => {
                        !t && i ? e(new Uint8Array(i)) : s(new Error(t));
                      });
                    });
                  };
                  class n extends i.BaseFilterFactory {}
                  e.NodeFilterFactory = n;
                  class r extends i.BaseCanvasFactory {
                    _createCanvas(t, e) {
                      return __webpack_require__(17406).createCanvas(t, e);
                    }
                  }
                  e.NodeCanvasFactory = r;
                  class o extends i.BaseCMapReaderFactory {
                    _fetchData(t, e) {
                      return a(t).then((t) => ({
                        cMapData: t,
                        compressionType: e
                      }));
                    }
                  }
                  e.NodeCMapReaderFactory = o;
                  class l extends i.BaseStandardFontDataFactory {
                    _fetchData(t) {
                      return a(t);
                    }
                  }
                  e.NodeStandardFontDataFactory = l;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.CanvasGraphics = void 0);
                  var i = s(1),
                    a = s(6),
                    n = s(12),
                    r = s(13);
                  const o = 4096,
                    l = 16;
                  class c {
                    constructor(t) {
                      (this.canvasFactory = t),
                        (this.cache = Object.create(null));
                    }
                    getCanvas(t, e, s) {
                      let i;
                      return (
                        void 0 !== this.cache[t]
                          ? ((i = this.cache[t]),
                            this.canvasFactory.reset(i, e, s))
                          : ((i = this.canvasFactory.create(e, s)),
                            (this.cache[t] = i)),
                        i
                      );
                    }
                    delete(t) {
                      delete this.cache[t];
                    }
                    clear() {
                      for (const t in this.cache) {
                        const e = this.cache[t];
                        this.canvasFactory.destroy(e), delete this.cache[t];
                      }
                    }
                  }
                  function d(t, e, s, i, n, r, o, l, c, d) {
                    const [h, u, p, _, g, v] = (0, a.getCurrentTransform)(t);
                    if (0 === u && 0 === p) {
                      const a = o * h + g,
                        f = Math.round(a),
                        m = l * _ + v,
                        b = Math.round(m),
                        P = (o + c) * h + g,
                        A = Math.abs(Math.round(P) - f) || 1,
                        F = (l + d) * _ + v,
                        S = Math.abs(Math.round(F) - b) || 1;
                      return (
                        t.setTransform(Math.sign(h), 0, 0, Math.sign(_), f, b),
                        t.drawImage(e, s, i, n, r, 0, 0, A, S),
                        t.setTransform(h, u, p, _, g, v),
                        [A, S]
                      );
                    }
                    if (0 === h && 0 === _) {
                      const a = l * p + g,
                        f = Math.round(a),
                        m = o * u + v,
                        b = Math.round(m),
                        P = (l + d) * p + g,
                        A = Math.abs(Math.round(P) - f) || 1,
                        F = (o + c) * u + v,
                        S = Math.abs(Math.round(F) - b) || 1;
                      return (
                        t.setTransform(0, Math.sign(u), Math.sign(p), 0, f, b),
                        t.drawImage(e, s, i, n, r, 0, 0, S, A),
                        t.setTransform(h, u, p, _, g, v),
                        [S, A]
                      );
                    }
                    return (
                      t.drawImage(e, s, i, n, r, o, l, c, d),
                      [Math.hypot(h, u) * c, Math.hypot(p, _) * d]
                    );
                  }
                  class h {
                    constructor(t, e) {
                      (this.alphaIsShape = !1),
                        (this.fontSize = 0),
                        (this.fontSizeScale = 1),
                        (this.textMatrix = i.IDENTITY_MATRIX),
                        (this.textMatrixScale = 1),
                        (this.fontMatrix = i.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRenderingMode = i.TextRenderingMode.FILL),
                        (this.textRise = 0),
                        (this.fillColor = '#000000'),
                        (this.strokeColor = '#000000'),
                        (this.patternFill = !1),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.activeSMask = null),
                        (this.transferMaps = 'none'),
                        this.startNewPathAndClipBox([0, 0, t, e]);
                    }
                    clone() {
                      const t = Object.create(this);
                      return (t.clipBox = this.clipBox.slice()), t;
                    }
                    setCurrentPoint(t, e) {
                      (this.x = t), (this.y = e);
                    }
                    updatePathMinMax(t, e, s) {
                      ([e, s] = i.Util.applyTransform([e, s], t)),
                        (this.minX = Math.min(this.minX, e)),
                        (this.minY = Math.min(this.minY, s)),
                        (this.maxX = Math.max(this.maxX, e)),
                        (this.maxY = Math.max(this.maxY, s));
                    }
                    updateRectMinMax(t, e) {
                      const s = i.Util.applyTransform(e, t),
                        a = i.Util.applyTransform(e.slice(2), t);
                      (this.minX = Math.min(this.minX, s[0], a[0])),
                        (this.minY = Math.min(this.minY, s[1], a[1])),
                        (this.maxX = Math.max(this.maxX, s[0], a[0])),
                        (this.maxY = Math.max(this.maxY, s[1], a[1]));
                    }
                    updateScalingPathMinMax(t, e) {
                      i.Util.scaleMinMax(t, e),
                        (this.minX = Math.min(this.minX, e[0])),
                        (this.maxX = Math.max(this.maxX, e[1])),
                        (this.minY = Math.min(this.minY, e[2])),
                        (this.maxY = Math.max(this.maxY, e[3]));
                    }
                    updateCurvePathMinMax(t, e, s, a, n, r, o, l, c, d) {
                      const h = i.Util.bezierBoundingBox(
                        e,
                        s,
                        a,
                        n,
                        r,
                        o,
                        l,
                        c
                      );
                      if (d)
                        return (
                          (d[0] = Math.min(d[0], h[0], h[2])),
                          (d[1] = Math.max(d[1], h[0], h[2])),
                          (d[2] = Math.min(d[2], h[1], h[3])),
                          void (d[3] = Math.max(d[3], h[1], h[3]))
                        );
                      this.updateRectMinMax(t, h);
                    }
                    getPathBoundingBox() {
                      let t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : n.PathType.FILL,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      const s = [this.minX, this.minY, this.maxX, this.maxY];
                      if (t === n.PathType.STROKE) {
                        e ||
                          (0, i.unreachable)(
                            'Stroke bounding box must include transform.'
                          );
                        const t = i.Util.singularValueDecompose2dScale(e),
                          a = (t[0] * this.lineWidth) / 2,
                          n = (t[1] * this.lineWidth) / 2;
                        (s[0] -= a), (s[1] -= n), (s[2] += a), (s[3] += n);
                      }
                      return s;
                    }
                    updateClipFromPath() {
                      const t = i.Util.intersect(
                        this.clipBox,
                        this.getPathBoundingBox()
                      );
                      this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
                    }
                    isEmptyClip() {
                      return this.minX === 1 / 0;
                    }
                    startNewPathAndClipBox(t) {
                      (this.clipBox = t),
                        (this.minX = 1 / 0),
                        (this.minY = 1 / 0),
                        (this.maxX = 0),
                        (this.maxY = 0);
                    }
                    getClippedPathBoundingBox() {
                      let t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : n.PathType.FILL,
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      return i.Util.intersect(
                        this.clipBox,
                        this.getPathBoundingBox(t, e)
                      );
                    }
                  }
                  function u(t, e) {
                    if (
                      'undefined' !== typeof ImageData &&
                      e instanceof ImageData
                    )
                      return void t.putImageData(e, 0, 0);
                    const s = e.height,
                      a = e.width,
                      n = s % l,
                      r = (s - n) / l,
                      o = 0 === n ? r : r + 1,
                      c = t.createImageData(a, l);
                    let d,
                      h = 0;
                    const u = e.data,
                      p = c.data;
                    let _, g, v, f;
                    if (e.kind === i.ImageKind.GRAYSCALE_1BPP) {
                      const e = u.byteLength,
                        s = new Uint32Array(p.buffer, 0, p.byteLength >> 2),
                        f = s.length,
                        m = (a + 7) >> 3,
                        b = 4294967295,
                        P = i.FeatureTest.isLittleEndian ? 4278190080 : 255;
                      for (_ = 0; _ < o; _++) {
                        for (v = _ < r ? l : n, d = 0, g = 0; g < v; g++) {
                          const t = e - h;
                          let i = 0;
                          const n = t > m ? a : 8 * t - 7,
                            r = -8 & n;
                          let o = 0,
                            l = 0;
                          for (; i < r; i += 8)
                            (l = u[h++]),
                              (s[d++] = 128 & l ? b : P),
                              (s[d++] = 64 & l ? b : P),
                              (s[d++] = 32 & l ? b : P),
                              (s[d++] = 16 & l ? b : P),
                              (s[d++] = 8 & l ? b : P),
                              (s[d++] = 4 & l ? b : P),
                              (s[d++] = 2 & l ? b : P),
                              (s[d++] = 1 & l ? b : P);
                          for (; i < n; i++)
                            0 === o && ((l = u[h++]), (o = 128)),
                              (s[d++] = l & o ? b : P),
                              (o >>= 1);
                        }
                        for (; d < f; ) s[d++] = 0;
                        t.putImageData(c, 0, _ * l);
                      }
                    } else if (e.kind === i.ImageKind.RGBA_32BPP) {
                      for (g = 0, f = a * l * 4, _ = 0; _ < r; _++)
                        p.set(u.subarray(h, h + f)),
                          (h += f),
                          t.putImageData(c, 0, g),
                          (g += l);
                      _ < o &&
                        ((f = a * n * 4),
                        p.set(u.subarray(h, h + f)),
                        t.putImageData(c, 0, g));
                    } else {
                      if (e.kind !== i.ImageKind.RGB_24BPP)
                        throw new Error('bad image kind: '.concat(e.kind));
                      for (v = l, f = a * v, _ = 0; _ < o; _++) {
                        for (
                          _ >= r && ((v = n), (f = a * v)), d = 0, g = f;
                          g--;

                        )
                          (p[d++] = u[h++]),
                            (p[d++] = u[h++]),
                            (p[d++] = u[h++]),
                            (p[d++] = 255);
                        t.putImageData(c, 0, _ * l);
                      }
                    }
                  }
                  function p(t, e) {
                    if (e.bitmap) return void t.drawImage(e.bitmap, 0, 0);
                    const s = e.height,
                      i = e.width,
                      a = s % l,
                      n = (s - a) / l,
                      o = 0 === a ? n : n + 1,
                      c = t.createImageData(i, l);
                    let d = 0;
                    const h = e.data,
                      u = c.data;
                    for (let p = 0; p < o; p++) {
                      const e = p < n ? l : a;
                      ({ srcPos: d } = (0, r.convertBlackAndWhiteToRGBA)({
                        src: h,
                        srcPos: d,
                        dest: u,
                        width: i,
                        height: e,
                        nonBlackColor: 0
                      })),
                        t.putImageData(c, 0, p * l);
                    }
                  }
                  function _(t, e) {
                    const s = [
                      'strokeStyle',
                      'fillStyle',
                      'fillRule',
                      'globalAlpha',
                      'lineWidth',
                      'lineCap',
                      'lineJoin',
                      'miterLimit',
                      'globalCompositeOperation',
                      'font',
                      'filter'
                    ];
                    for (const i of s) void 0 !== t[i] && (e[i] = t[i]);
                    void 0 !== t.setLineDash &&
                      (e.setLineDash(t.getLineDash()),
                      (e.lineDashOffset = t.lineDashOffset));
                  }
                  function g(t) {
                    if (
                      ((t.strokeStyle = t.fillStyle = '#000000'),
                      (t.fillRule = 'nonzero'),
                      (t.globalAlpha = 1),
                      (t.lineWidth = 1),
                      (t.lineCap = 'butt'),
                      (t.lineJoin = 'miter'),
                      (t.miterLimit = 10),
                      (t.globalCompositeOperation = 'source-over'),
                      (t.font = '10px sans-serif'),
                      void 0 !== t.setLineDash &&
                        (t.setLineDash([]), (t.lineDashOffset = 0)),
                      !i.isNodeJS)
                    ) {
                      const { filter: e } = t;
                      'none' !== e && '' !== e && (t.filter = 'none');
                    }
                  }
                  function v(t, e, s, i) {
                    const a = t.length;
                    for (let n = 3; n < a; n += 4) {
                      const a = t[n];
                      if (0 === a)
                        (t[n - 3] = e), (t[n - 2] = s), (t[n - 1] = i);
                      else if (a < 255) {
                        const r = 255 - a;
                        (t[n - 3] = (t[n - 3] * a + e * r) >> 8),
                          (t[n - 2] = (t[n - 2] * a + s * r) >> 8),
                          (t[n - 1] = (t[n - 1] * a + i * r) >> 8);
                      }
                    }
                  }
                  function f(t, e, s) {
                    const i = t.length,
                      a = 1 / 255;
                    for (let n = 3; n < i; n += 4) {
                      const i = s ? s[t[n]] : t[n];
                      e[n] = (e[n] * i * a) | 0;
                    }
                  }
                  function m(t, e, s) {
                    const i = t.length;
                    for (let a = 3; a < i; a += 4) {
                      const i = 77 * t[a - 3] + 152 * t[a - 2] + 28 * t[a - 1];
                      e[a] = s ? (e[a] * s[i >> 8]) >> 8 : (e[a] * i) >> 16;
                    }
                  }
                  function b(t, e, s, i) {
                    const a = i[0],
                      n = i[1],
                      r = i[2] - a,
                      o = i[3] - n;
                    0 !== r &&
                      0 !== o &&
                      ((function (t, e, s, i, a, n, r, o, l, c, d) {
                        const h = !!n,
                          u = h ? n[0] : 0,
                          p = h ? n[1] : 0,
                          _ = h ? n[2] : 0,
                          g = 'Luminosity' === a ? m : f,
                          b = Math.min(i, Math.ceil(1048576 / s));
                        for (let f = 0; f < i; f += b) {
                          const a = Math.min(b, i - f),
                            n = t.getImageData(o - c, f + (l - d), s, a),
                            m = e.getImageData(o, f + l, s, a);
                          h && v(n.data, u, p, _),
                            g(n.data, m.data, r),
                            e.putImageData(m, o, f + l);
                        }
                      })(
                        e.context,
                        s,
                        r,
                        o,
                        e.subtype,
                        e.backdrop,
                        e.transferMap,
                        a,
                        n,
                        e.offsetX,
                        e.offsetY
                      ),
                      t.save(),
                      (t.globalAlpha = 1),
                      (t.globalCompositeOperation = 'source-over'),
                      t.setTransform(1, 0, 0, 1, 0, 0),
                      t.drawImage(s.canvas, 0, 0),
                      t.restore());
                  }
                  function P(t, e) {
                    const s = i.Util.singularValueDecompose2dScale(t);
                    (s[0] = Math.fround(s[0])), (s[1] = Math.fround(s[1]));
                    const n = Math.fround(
                      (globalThis.devicePixelRatio || 1) *
                        a.PixelsPerInch.PDF_TO_CSS_UNITS
                    );
                    return void 0 !== e ? e : s[0] <= n || s[1] <= n;
                  }
                  const A = ['butt', 'round', 'square'],
                    F = ['miter', 'round', 'bevel'],
                    S = {},
                    y = {};
                  var w = new WeakSet();
                  class x {
                    constructor(t, e, s, i, a, n, r, o) {
                      let {
                        optionalContentConfig: l,
                        markedContentStack: d = null
                      } = n;
                      _classPrivateMethodInitSpec(this, w),
                        (this.ctx = t),
                        (this.current = new h(
                          this.ctx.canvas.width,
                          this.ctx.canvas.height
                        )),
                        (this.stateStack = []),
                        (this.pendingClip = null),
                        (this.pendingEOFill = !1),
                        (this.res = null),
                        (this.xobjs = null),
                        (this.commonObjs = e),
                        (this.objs = s),
                        (this.canvasFactory = i),
                        (this.filterFactory = a),
                        (this.groupStack = []),
                        (this.processingType3 = null),
                        (this.baseTransform = null),
                        (this.baseTransformStack = []),
                        (this.groupLevel = 0),
                        (this.smaskStack = []),
                        (this.smaskCounter = 0),
                        (this.tempSMask = null),
                        (this.suspendedCtx = null),
                        (this.contentVisible = !0),
                        (this.markedContentStack = d || []),
                        (this.optionalContentConfig = l),
                        (this.cachedCanvases = new c(this.canvasFactory)),
                        (this.cachedPatterns = new Map()),
                        (this.annotationCanvasMap = r),
                        (this.viewportScale = 1),
                        (this.outputScaleX = 1),
                        (this.outputScaleY = 1),
                        (this.pageColors = o),
                        (this._cachedScaleForStroking = [-1, 0]),
                        (this._cachedGetSinglePixelWidth = null),
                        (this._cachedBitmapsMap = new Map());
                    }
                    getObject(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      return 'string' === typeof t
                        ? t.startsWith('g_')
                          ? this.commonObjs.get(t)
                          : this.objs.get(t)
                        : e;
                    }
                    beginDrawing(t) {
                      let {
                        transform: e,
                        viewport: s,
                        transparency: i = !1,
                        background: n = null
                      } = t;
                      const r = this.ctx.canvas.width,
                        o = this.ctx.canvas.height,
                        l = this.ctx.fillStyle;
                      if (
                        ((this.ctx.fillStyle = n || '#ffffff'),
                        this.ctx.fillRect(0, 0, r, o),
                        (this.ctx.fillStyle = l),
                        i)
                      ) {
                        const t = this.cachedCanvases.getCanvas(
                          'transparent',
                          r,
                          o
                        );
                        (this.compositeCtx = this.ctx),
                          (this.transparentCanvas = t.canvas),
                          (this.ctx = t.context),
                          this.ctx.save(),
                          this.ctx.transform(
                            ...(0, a.getCurrentTransform)(this.compositeCtx)
                          );
                      }
                      this.ctx.save(),
                        g(this.ctx),
                        e &&
                          (this.ctx.transform(...e),
                          (this.outputScaleX = e[0]),
                          (this.outputScaleY = e[0])),
                        this.ctx.transform(...s.transform),
                        (this.viewportScale = s.scale),
                        (this.baseTransform = (0, a.getCurrentTransform)(
                          this.ctx
                        ));
                    }
                    executeOperatorList(t, e, s, a) {
                      const n = t.argsArray,
                        r = t.fnArray;
                      let o = e || 0;
                      const l = n.length;
                      if (l === o) return o;
                      const c = l - o > 10 && 'function' === typeof s,
                        d = c ? Date.now() + 15 : 0;
                      let h = 0;
                      const u = this.commonObjs,
                        p = this.objs;
                      let _;
                      for (;;) {
                        if (void 0 !== a && o === a.nextBreakPoint)
                          return a.breakIt(o, s), o;
                        if (((_ = r[o]), _ !== i.OPS.dependency))
                          this[_].apply(this, n[o]);
                        else
                          for (const t of n[o]) {
                            const e = t.startsWith('g_') ? u : p;
                            if (!e.has(t)) return e.get(t, s), o;
                          }
                        if ((o++, o === l)) return o;
                        if (c && ++h > 10) {
                          if (Date.now() > d) return s(), o;
                          h = 0;
                        }
                      }
                    }
                    endDrawing() {
                      _assertClassBrand(w, this, C).call(this),
                        this.cachedCanvases.clear(),
                        this.cachedPatterns.clear();
                      for (const t of this._cachedBitmapsMap.values()) {
                        for (const e of t.values())
                          'undefined' !== typeof HTMLCanvasElement &&
                            e instanceof HTMLCanvasElement &&
                            (e.width = e.height = 0);
                        t.clear();
                      }
                      this._cachedBitmapsMap.clear(),
                        _assertClassBrand(w, this, E).call(this);
                    }
                    _scaleImage(t, e) {
                      const s = t.width,
                        i = t.height;
                      let a,
                        n,
                        r = Math.max(Math.hypot(e[0], e[1]), 1),
                        o = Math.max(Math.hypot(e[2], e[3]), 1),
                        l = s,
                        c = i,
                        d = 'prescale1';
                      for (; (r > 2 && l > 1) || (o > 2 && c > 1); ) {
                        let e = l,
                          s = c;
                        r > 2 &&
                          l > 1 &&
                          ((e =
                            l >= 16384
                              ? Math.floor(l / 2) - 1 || 1
                              : Math.ceil(l / 2)),
                          (r /= l / e)),
                          o > 2 &&
                            c > 1 &&
                            ((s =
                              c >= 16384
                                ? Math.floor(c / 2) - 1 || 1
                                : Math.ceil(c) / 2),
                            (o /= c / s)),
                          (a = this.cachedCanvases.getCanvas(d, e, s)),
                          (n = a.context),
                          n.clearRect(0, 0, e, s),
                          n.drawImage(t, 0, 0, l, c, 0, 0, e, s),
                          (t = a.canvas),
                          (l = e),
                          (c = s),
                          (d = 'prescale1' === d ? 'prescale2' : 'prescale1');
                      }
                      return { img: t, paintWidth: l, paintHeight: c };
                    }
                    _createMaskCanvas(t) {
                      const e = this.ctx,
                        { width: s, height: r } = t,
                        o = this.current.fillColor,
                        l = this.current.patternFill,
                        c = (0, a.getCurrentTransform)(e);
                      let h, u, _, g;
                      if ((t.bitmap || t.data) && t.count > 1) {
                        const e = t.bitmap || t.data.buffer;
                        (u = JSON.stringify(l ? c : [c.slice(0, 4), o])),
                          (h = this._cachedBitmapsMap.get(e)),
                          h ||
                            ((h = new Map()), this._cachedBitmapsMap.set(e, h));
                        const s = h.get(u);
                        if (s && !l)
                          return {
                            canvas: s,
                            offsetX: Math.round(Math.min(c[0], c[2]) + c[4]),
                            offsetY: Math.round(Math.min(c[1], c[3]) + c[5])
                          };
                        _ = s;
                      }
                      _ ||
                        ((g = this.cachedCanvases.getCanvas(
                          'maskCanvas',
                          s,
                          r
                        )),
                        p(g.context, t));
                      let v = i.Util.transform(c, [1 / s, 0, 0, -1 / r, 0, 0]);
                      v = i.Util.transform(v, [1, 0, 0, 1, 0, -r]);
                      const f = i.Util.applyTransform([0, 0], v),
                        m = i.Util.applyTransform([s, r], v),
                        b = i.Util.normalizeRect([f[0], f[1], m[0], m[1]]),
                        A = Math.round(b[2] - b[0]) || 1,
                        F = Math.round(b[3] - b[1]) || 1,
                        S = this.cachedCanvases.getCanvas('fillCanvas', A, F),
                        y = S.context,
                        w = Math.min(f[0], m[0]),
                        x = Math.min(f[1], m[1]);
                      y.translate(-w, -x),
                        y.transform(...v),
                        _ ||
                          ((_ = this._scaleImage(
                            g.canvas,
                            (0, a.getCurrentTransformInverse)(y)
                          )),
                          (_ = _.img),
                          h && l && h.set(u, _)),
                        (y.imageSmoothingEnabled = P(
                          (0, a.getCurrentTransform)(y),
                          t.interpolate
                        )),
                        d(y, _, 0, 0, _.width, _.height, 0, 0, s, r),
                        (y.globalCompositeOperation = 'source-in');
                      const C = i.Util.transform(
                        (0, a.getCurrentTransformInverse)(y),
                        [1, 0, 0, 1, -w, -x]
                      );
                      return (
                        (y.fillStyle = l
                          ? o.getPattern(e, this, C, n.PathType.FILL)
                          : o),
                        y.fillRect(0, 0, s, r),
                        h &&
                          !l &&
                          (this.cachedCanvases.delete('fillCanvas'),
                          h.set(u, S.canvas)),
                        {
                          canvas: S.canvas,
                          offsetX: Math.round(w),
                          offsetY: Math.round(x)
                        }
                      );
                    }
                    setLineWidth(t) {
                      t !== this.current.lineWidth &&
                        (this._cachedScaleForStroking[0] = -1),
                        (this.current.lineWidth = t),
                        (this.ctx.lineWidth = t);
                    }
                    setLineCap(t) {
                      this.ctx.lineCap = A[t];
                    }
                    setLineJoin(t) {
                      this.ctx.lineJoin = F[t];
                    }
                    setMiterLimit(t) {
                      this.ctx.miterLimit = t;
                    }
                    setDash(t, e) {
                      const s = this.ctx;
                      void 0 !== s.setLineDash &&
                        (s.setLineDash(t), (s.lineDashOffset = e));
                    }
                    setRenderingIntent(t) {}
                    setFlatness(t) {}
                    setGState(t) {
                      for (const [e, s] of t)
                        switch (e) {
                          case 'LW':
                            this.setLineWidth(s);
                            break;
                          case 'LC':
                            this.setLineCap(s);
                            break;
                          case 'LJ':
                            this.setLineJoin(s);
                            break;
                          case 'ML':
                            this.setMiterLimit(s);
                            break;
                          case 'D':
                            this.setDash(s[0], s[1]);
                            break;
                          case 'RI':
                            this.setRenderingIntent(s);
                            break;
                          case 'FL':
                            this.setFlatness(s);
                            break;
                          case 'Font':
                            this.setFont(s[0], s[1]);
                            break;
                          case 'CA':
                            this.current.strokeAlpha = s;
                            break;
                          case 'ca':
                            (this.current.fillAlpha = s),
                              (this.ctx.globalAlpha = s);
                            break;
                          case 'BM':
                            this.ctx.globalCompositeOperation = s;
                            break;
                          case 'SMask':
                            (this.current.activeSMask = s
                              ? this.tempSMask
                              : null),
                              (this.tempSMask = null),
                              this.checkSMaskState();
                            break;
                          case 'TR':
                            this.ctx.filter = this.current.transferMaps =
                              this.filterFactory.addFilter(s);
                        }
                    }
                    get inSMaskMode() {
                      return !!this.suspendedCtx;
                    }
                    checkSMaskState() {
                      const t = this.inSMaskMode;
                      this.current.activeSMask && !t
                        ? this.beginSMaskMode()
                        : !this.current.activeSMask && t && this.endSMaskMode();
                    }
                    beginSMaskMode() {
                      if (this.inSMaskMode)
                        throw new Error(
                          'beginSMaskMode called while already in smask mode'
                        );
                      const t = this.ctx.canvas.width,
                        e = this.ctx.canvas.height,
                        s = 'smaskGroupAt' + this.groupLevel,
                        i = this.cachedCanvases.getCanvas(s, t, e);
                      (this.suspendedCtx = this.ctx), (this.ctx = i.context);
                      const n = this.ctx;
                      n.setTransform(
                        ...(0, a.getCurrentTransform)(this.suspendedCtx)
                      ),
                        _(this.suspendedCtx, n),
                        (function (t, e) {
                          if (t._removeMirroring)
                            throw new Error(
                              'Context is already forwarding operations.'
                            );
                          (t.__originalSave = t.save),
                            (t.__originalRestore = t.restore),
                            (t.__originalRotate = t.rotate),
                            (t.__originalScale = t.scale),
                            (t.__originalTranslate = t.translate),
                            (t.__originalTransform = t.transform),
                            (t.__originalSetTransform = t.setTransform),
                            (t.__originalResetTransform = t.resetTransform),
                            (t.__originalClip = t.clip),
                            (t.__originalMoveTo = t.moveTo),
                            (t.__originalLineTo = t.lineTo),
                            (t.__originalBezierCurveTo = t.bezierCurveTo),
                            (t.__originalRect = t.rect),
                            (t.__originalClosePath = t.closePath),
                            (t.__originalBeginPath = t.beginPath),
                            (t._removeMirroring = () => {
                              (t.save = t.__originalSave),
                                (t.restore = t.__originalRestore),
                                (t.rotate = t.__originalRotate),
                                (t.scale = t.__originalScale),
                                (t.translate = t.__originalTranslate),
                                (t.transform = t.__originalTransform),
                                (t.setTransform = t.__originalSetTransform),
                                (t.resetTransform = t.__originalResetTransform),
                                (t.clip = t.__originalClip),
                                (t.moveTo = t.__originalMoveTo),
                                (t.lineTo = t.__originalLineTo),
                                (t.bezierCurveTo = t.__originalBezierCurveTo),
                                (t.rect = t.__originalRect),
                                (t.closePath = t.__originalClosePath),
                                (t.beginPath = t.__originalBeginPath),
                                delete t._removeMirroring;
                            }),
                            (t.save = function () {
                              e.save(), this.__originalSave();
                            }),
                            (t.restore = function () {
                              e.restore(), this.__originalRestore();
                            }),
                            (t.translate = function (t, s) {
                              e.translate(t, s), this.__originalTranslate(t, s);
                            }),
                            (t.scale = function (t, s) {
                              e.scale(t, s), this.__originalScale(t, s);
                            }),
                            (t.transform = function (t, s, i, a, n, r) {
                              e.transform(t, s, i, a, n, r),
                                this.__originalTransform(t, s, i, a, n, r);
                            }),
                            (t.setTransform = function (t, s, i, a, n, r) {
                              e.setTransform(t, s, i, a, n, r),
                                this.__originalSetTransform(t, s, i, a, n, r);
                            }),
                            (t.resetTransform = function () {
                              e.resetTransform(),
                                this.__originalResetTransform();
                            }),
                            (t.rotate = function (t) {
                              e.rotate(t), this.__originalRotate(t);
                            }),
                            (t.clip = function (t) {
                              e.clip(t), this.__originalClip(t);
                            }),
                            (t.moveTo = function (t, s) {
                              e.moveTo(t, s), this.__originalMoveTo(t, s);
                            }),
                            (t.lineTo = function (t, s) {
                              e.lineTo(t, s), this.__originalLineTo(t, s);
                            }),
                            (t.bezierCurveTo = function (t, s, i, a, n, r) {
                              e.bezierCurveTo(t, s, i, a, n, r),
                                this.__originalBezierCurveTo(t, s, i, a, n, r);
                            }),
                            (t.rect = function (t, s, i, a) {
                              e.rect(t, s, i, a),
                                this.__originalRect(t, s, i, a);
                            }),
                            (t.closePath = function () {
                              e.closePath(), this.__originalClosePath();
                            }),
                            (t.beginPath = function () {
                              e.beginPath(), this.__originalBeginPath();
                            });
                        })(n, this.suspendedCtx),
                        this.setGState([
                          ['BM', 'source-over'],
                          ['ca', 1],
                          ['CA', 1]
                        ]);
                    }
                    endSMaskMode() {
                      if (!this.inSMaskMode)
                        throw new Error(
                          'endSMaskMode called while not in smask mode'
                        );
                      this.ctx._removeMirroring(),
                        _(this.ctx, this.suspendedCtx),
                        (this.ctx = this.suspendedCtx),
                        (this.suspendedCtx = null);
                    }
                    compose(t) {
                      if (!this.current.activeSMask) return;
                      t
                        ? ((t[0] = Math.floor(t[0])),
                          (t[1] = Math.floor(t[1])),
                          (t[2] = Math.ceil(t[2])),
                          (t[3] = Math.ceil(t[3])))
                        : (t = [
                            0,
                            0,
                            this.ctx.canvas.width,
                            this.ctx.canvas.height
                          ]);
                      const e = this.current.activeSMask;
                      b(this.suspendedCtx, e, this.ctx, t),
                        this.ctx.save(),
                        this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                        this.ctx.clearRect(
                          0,
                          0,
                          this.ctx.canvas.width,
                          this.ctx.canvas.height
                        ),
                        this.ctx.restore();
                    }
                    save() {
                      this.inSMaskMode
                        ? (_(this.ctx, this.suspendedCtx),
                          this.suspendedCtx.save())
                        : this.ctx.save();
                      const t = this.current;
                      this.stateStack.push(t), (this.current = t.clone());
                    }
                    restore() {
                      0 === this.stateStack.length &&
                        this.inSMaskMode &&
                        this.endSMaskMode(),
                        0 !== this.stateStack.length &&
                          ((this.current = this.stateStack.pop()),
                          this.inSMaskMode
                            ? (this.suspendedCtx.restore(),
                              _(this.suspendedCtx, this.ctx))
                            : this.ctx.restore(),
                          this.checkSMaskState(),
                          (this.pendingClip = null),
                          (this._cachedScaleForStroking[0] = -1),
                          (this._cachedGetSinglePixelWidth = null));
                    }
                    transform(t, e, s, i, a, n) {
                      this.ctx.transform(t, e, s, i, a, n),
                        (this._cachedScaleForStroking[0] = -1),
                        (this._cachedGetSinglePixelWidth = null);
                    }
                    constructPath(t, e, s) {
                      const n = this.ctx,
                        r = this.current;
                      let o,
                        l,
                        c = r.x,
                        d = r.y;
                      const h = (0, a.getCurrentTransform)(n),
                        u =
                          (0 === h[0] && 0 === h[3]) ||
                          (0 === h[1] && 0 === h[2]),
                        p = u ? s.slice(0) : null;
                      for (let a = 0, _ = 0, g = t.length; a < g; a++)
                        switch (0 | t[a]) {
                          case i.OPS.rectangle:
                            (c = e[_++]), (d = e[_++]);
                            const t = e[_++],
                              s = e[_++],
                              a = c + t,
                              g = d + s;
                            n.moveTo(c, d),
                              0 === t || 0 === s
                                ? n.lineTo(a, g)
                                : (n.lineTo(a, d),
                                  n.lineTo(a, g),
                                  n.lineTo(c, g)),
                              u || r.updateRectMinMax(h, [c, d, a, g]),
                              n.closePath();
                            break;
                          case i.OPS.moveTo:
                            (c = e[_++]),
                              (d = e[_++]),
                              n.moveTo(c, d),
                              u || r.updatePathMinMax(h, c, d);
                            break;
                          case i.OPS.lineTo:
                            (c = e[_++]),
                              (d = e[_++]),
                              n.lineTo(c, d),
                              u || r.updatePathMinMax(h, c, d);
                            break;
                          case i.OPS.curveTo:
                            (o = c),
                              (l = d),
                              (c = e[_ + 4]),
                              (d = e[_ + 5]),
                              n.bezierCurveTo(
                                e[_],
                                e[_ + 1],
                                e[_ + 2],
                                e[_ + 3],
                                c,
                                d
                              ),
                              r.updateCurvePathMinMax(
                                h,
                                o,
                                l,
                                e[_],
                                e[_ + 1],
                                e[_ + 2],
                                e[_ + 3],
                                c,
                                d,
                                p
                              ),
                              (_ += 6);
                            break;
                          case i.OPS.curveTo2:
                            (o = c),
                              (l = d),
                              n.bezierCurveTo(
                                c,
                                d,
                                e[_],
                                e[_ + 1],
                                e[_ + 2],
                                e[_ + 3]
                              ),
                              r.updateCurvePathMinMax(
                                h,
                                o,
                                l,
                                c,
                                d,
                                e[_],
                                e[_ + 1],
                                e[_ + 2],
                                e[_ + 3],
                                p
                              ),
                              (c = e[_ + 2]),
                              (d = e[_ + 3]),
                              (_ += 4);
                            break;
                          case i.OPS.curveTo3:
                            (o = c),
                              (l = d),
                              (c = e[_ + 2]),
                              (d = e[_ + 3]),
                              n.bezierCurveTo(e[_], e[_ + 1], c, d, c, d),
                              r.updateCurvePathMinMax(
                                h,
                                o,
                                l,
                                e[_],
                                e[_ + 1],
                                c,
                                d,
                                c,
                                d,
                                p
                              ),
                              (_ += 4);
                            break;
                          case i.OPS.closePath:
                            n.closePath();
                        }
                      u && r.updateScalingPathMinMax(h, p),
                        r.setCurrentPoint(c, d);
                    }
                    closePath() {
                      this.ctx.closePath();
                    }
                    stroke() {
                      let t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      const e = this.ctx,
                        s = this.current.strokeColor;
                      (e.globalAlpha = this.current.strokeAlpha),
                        this.contentVisible &&
                          ('object' === typeof s &&
                          null !== s &&
                          void 0 !== s &&
                          s.getPattern
                            ? (e.save(),
                              (e.strokeStyle = s.getPattern(
                                e,
                                this,
                                (0, a.getCurrentTransformInverse)(e),
                                n.PathType.STROKE
                              )),
                              this.rescaleAndStroke(!1),
                              e.restore())
                            : this.rescaleAndStroke(!0)),
                        t &&
                          this.consumePath(
                            this.current.getClippedPathBoundingBox()
                          ),
                        (e.globalAlpha = this.current.fillAlpha);
                    }
                    closeStroke() {
                      this.closePath(), this.stroke();
                    }
                    fill() {
                      let t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      const e = this.ctx,
                        s = this.current.fillColor;
                      let i = !1;
                      this.current.patternFill &&
                        (e.save(),
                        (e.fillStyle = s.getPattern(
                          e,
                          this,
                          (0, a.getCurrentTransformInverse)(e),
                          n.PathType.FILL
                        )),
                        (i = !0));
                      const r = this.current.getClippedPathBoundingBox();
                      this.contentVisible &&
                        null !== r &&
                        (this.pendingEOFill
                          ? (e.fill('evenodd'), (this.pendingEOFill = !1))
                          : e.fill()),
                        i && e.restore(),
                        t && this.consumePath(r);
                    }
                    eoFill() {
                      (this.pendingEOFill = !0), this.fill();
                    }
                    fillStroke() {
                      this.fill(!1), this.stroke(!1), this.consumePath();
                    }
                    eoFillStroke() {
                      (this.pendingEOFill = !0), this.fillStroke();
                    }
                    closeFillStroke() {
                      this.closePath(), this.fillStroke();
                    }
                    closeEOFillStroke() {
                      (this.pendingEOFill = !0),
                        this.closePath(),
                        this.fillStroke();
                    }
                    endPath() {
                      this.consumePath();
                    }
                    clip() {
                      this.pendingClip = S;
                    }
                    eoClip() {
                      this.pendingClip = y;
                    }
                    beginText() {
                      (this.current.textMatrix = i.IDENTITY_MATRIX),
                        (this.current.textMatrixScale = 1),
                        (this.current.x = this.current.lineX = 0),
                        (this.current.y = this.current.lineY = 0);
                    }
                    endText() {
                      const t = this.pendingTextPaths,
                        e = this.ctx;
                      if (void 0 !== t) {
                        e.save(), e.beginPath();
                        for (const s of t)
                          e.setTransform(...s.transform),
                            e.translate(s.x, s.y),
                            s.addToPath(e, s.fontSize);
                        e.restore(),
                          e.clip(),
                          e.beginPath(),
                          delete this.pendingTextPaths;
                      } else e.beginPath();
                    }
                    setCharSpacing(t) {
                      this.current.charSpacing = t;
                    }
                    setWordSpacing(t) {
                      this.current.wordSpacing = t;
                    }
                    setHScale(t) {
                      this.current.textHScale = t / 100;
                    }
                    setLeading(t) {
                      this.current.leading = -t;
                    }
                    setFont(t, e) {
                      var s;
                      const a = this.commonObjs.get(t),
                        n = this.current;
                      if (!a) throw new Error("Can't find font for ".concat(t));
                      if (
                        ((n.fontMatrix =
                          a.fontMatrix || i.FONT_IDENTITY_MATRIX),
                        (0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3]) ||
                          (0, i.warn)('Invalid font matrix for font ' + t),
                        e < 0
                          ? ((e = -e), (n.fontDirection = -1))
                          : (n.fontDirection = 1),
                        (this.current.font = a),
                        (this.current.fontSize = e),
                        a.isType3Font)
                      )
                        return;
                      const r = a.loadedName || 'sans-serif',
                        o =
                          (null === (s = a.systemFontInfo) || void 0 === s
                            ? void 0
                            : s.css) ||
                          '"'.concat(r, '", ').concat(a.fallbackName);
                      let l = 'normal';
                      a.black ? (l = '900') : a.bold && (l = 'bold');
                      const c = a.italic ? 'italic' : 'normal';
                      let d = e;
                      e < 16 ? (d = 16) : e > 100 && (d = 100),
                        (this.current.fontSizeScale = e / d),
                        (this.ctx.font = ''
                          .concat(c, ' ')
                          .concat(l, ' ')
                          .concat(d, 'px ')
                          .concat(o));
                    }
                    setTextRenderingMode(t) {
                      this.current.textRenderingMode = t;
                    }
                    setTextRise(t) {
                      this.current.textRise = t;
                    }
                    moveText(t, e) {
                      (this.current.x = this.current.lineX += t),
                        (this.current.y = this.current.lineY += e);
                    }
                    setLeadingMoveText(t, e) {
                      this.setLeading(-e), this.moveText(t, e);
                    }
                    setTextMatrix(t, e, s, i, a, n) {
                      (this.current.textMatrix = [t, e, s, i, a, n]),
                        (this.current.textMatrixScale = Math.hypot(t, e)),
                        (this.current.x = this.current.lineX = 0),
                        (this.current.y = this.current.lineY = 0);
                    }
                    nextLine() {
                      this.moveText(0, this.current.leading);
                    }
                    paintChar(t, e, s, n) {
                      const r = this.ctx,
                        o = this.current,
                        l = o.font,
                        c = o.textRenderingMode,
                        d = o.fontSize / o.fontSizeScale,
                        h = c & i.TextRenderingMode.FILL_STROKE_MASK,
                        u = !!(c & i.TextRenderingMode.ADD_TO_PATH_FLAG),
                        p = o.patternFill && !l.missingFile;
                      let _;
                      (l.disableFontFace || u || p) &&
                        (_ = l.getPathGenerator(this.commonObjs, t)),
                        l.disableFontFace || p
                          ? (r.save(),
                            r.translate(e, s),
                            r.beginPath(),
                            _(r, d),
                            n && r.setTransform(...n),
                            (h !== i.TextRenderingMode.FILL &&
                              h !== i.TextRenderingMode.FILL_STROKE) ||
                              r.fill(),
                            (h !== i.TextRenderingMode.STROKE &&
                              h !== i.TextRenderingMode.FILL_STROKE) ||
                              r.stroke(),
                            r.restore())
                          : ((h !== i.TextRenderingMode.FILL &&
                              h !== i.TextRenderingMode.FILL_STROKE) ||
                              r.fillText(t, e, s),
                            (h !== i.TextRenderingMode.STROKE &&
                              h !== i.TextRenderingMode.FILL_STROKE) ||
                              r.strokeText(t, e, s)),
                        u &&
                          (
                            this.pendingTextPaths ||
                            (this.pendingTextPaths = [])
                          ).push({
                            transform: (0, a.getCurrentTransform)(r),
                            x: e,
                            y: s,
                            fontSize: d,
                            addToPath: _
                          });
                    }
                    get isFontSubpixelAAEnabled() {
                      const { context: t } = this.cachedCanvases.getCanvas(
                        'isFontSubpixelAAEnabled',
                        10,
                        10
                      );
                      t.scale(1.5, 1), t.fillText('I', 0, 10);
                      const e = t.getImageData(0, 0, 10, 10).data;
                      let s = !1;
                      for (let i = 3; i < e.length; i += 4)
                        if (e[i] > 0 && e[i] < 255) {
                          s = !0;
                          break;
                        }
                      return (0, i.shadow)(this, 'isFontSubpixelAAEnabled', s);
                    }
                    showText(t) {
                      const e = this.current,
                        s = e.font;
                      if (s.isType3Font) return this.showType3Text(t);
                      const r = e.fontSize;
                      if (0 === r) return;
                      const o = this.ctx,
                        l = e.fontSizeScale,
                        c = e.charSpacing,
                        d = e.wordSpacing,
                        h = e.fontDirection,
                        u = e.textHScale * h,
                        p = t.length,
                        _ = s.vertical,
                        g = _ ? 1 : -1,
                        v = s.defaultVMetrics,
                        f = r * e.fontMatrix[0],
                        m =
                          e.textRenderingMode === i.TextRenderingMode.FILL &&
                          !s.disableFontFace &&
                          !e.patternFill;
                      let b;
                      if (
                        (o.save(),
                        o.transform(...e.textMatrix),
                        o.translate(e.x, e.y + e.textRise),
                        h > 0 ? o.scale(u, -1) : o.scale(u, 1),
                        e.patternFill)
                      ) {
                        o.save();
                        const t = e.fillColor.getPattern(
                          o,
                          this,
                          (0, a.getCurrentTransformInverse)(o),
                          n.PathType.FILL
                        );
                        (b = (0, a.getCurrentTransform)(o)),
                          o.restore(),
                          (o.fillStyle = t);
                      }
                      let P = e.lineWidth;
                      const A = e.textMatrixScale;
                      if (0 === A || 0 === P) {
                        const t =
                          e.textRenderingMode &
                          i.TextRenderingMode.FILL_STROKE_MASK;
                        (t !== i.TextRenderingMode.STROKE &&
                          t !== i.TextRenderingMode.FILL_STROKE) ||
                          (P = this.getSinglePixelWidth());
                      } else P /= A;
                      if (
                        (1 !== l && (o.scale(l, l), (P /= l)),
                        (o.lineWidth = P),
                        s.isInvalidPDFjsFont)
                      ) {
                        const s = [];
                        let i = 0;
                        for (const e of t) s.push(e.unicode), (i += e.width);
                        return (
                          o.fillText(s.join(''), 0, 0),
                          (e.x += i * f * u),
                          o.restore(),
                          void this.compose()
                        );
                      }
                      let F,
                        S = 0;
                      for (F = 0; F < p; ++F) {
                        const e = t[F];
                        if ('number' === typeof e) {
                          S += (g * e * r) / 1e3;
                          continue;
                        }
                        let i = !1;
                        const a = (e.isSpace ? d : 0) + c,
                          n = e.fontChar,
                          u = e.accent;
                        let p,
                          P,
                          A = e.width;
                        if (_) {
                          const t = e.vmetric || v,
                            s = -(e.vmetric ? t[1] : 0.5 * A) * f,
                            i = t[2] * f;
                          (A = t ? -t[0] : A), (p = s / l), (P = (S + i) / l);
                        } else (p = S / l), (P = 0);
                        if (s.remeasure && A > 0) {
                          const t = ((1e3 * o.measureText(n).width) / r) * l;
                          if (A < t && this.isFontSubpixelAAEnabled) {
                            const e = A / t;
                            (i = !0), o.save(), o.scale(e, 1), (p /= e);
                          } else A !== t && (p += (((A - t) / 2e3) * r) / l);
                        }
                        if (
                          this.contentVisible &&
                          (e.isInFont || s.missingFile)
                        )
                          if (m && !u) o.fillText(n, p, P);
                          else if ((this.paintChar(n, p, P, b), u)) {
                            const t = p + (r * u.offset.x) / l,
                              e = P - (r * u.offset.y) / l;
                            this.paintChar(u.fontChar, t, e, b);
                          }
                        (S += _ ? A * f - a * h : A * f + a * h),
                          i && o.restore();
                      }
                      _ ? (e.y -= S) : (e.x += S * u),
                        o.restore(),
                        this.compose();
                    }
                    showType3Text(t) {
                      const e = this.ctx,
                        s = this.current,
                        a = s.font,
                        n = s.fontSize,
                        r = s.fontDirection,
                        o = a.vertical ? 1 : -1,
                        l = s.charSpacing,
                        c = s.wordSpacing,
                        d = s.textHScale * r,
                        h = s.fontMatrix || i.FONT_IDENTITY_MATRIX,
                        u = t.length;
                      let p, _, g, v;
                      if (
                        s.textRenderingMode !== i.TextRenderingMode.INVISIBLE &&
                        0 !== n
                      ) {
                        for (
                          this._cachedScaleForStroking[0] = -1,
                            this._cachedGetSinglePixelWidth = null,
                            e.save(),
                            e.transform(...s.textMatrix),
                            e.translate(s.x, s.y),
                            e.scale(d, r),
                            p = 0;
                          p < u;
                          ++p
                        ) {
                          if (((_ = t[p]), 'number' === typeof _)) {
                            (v = (o * _ * n) / 1e3),
                              this.ctx.translate(v, 0),
                              (s.x += v * d);
                            continue;
                          }
                          const r = (_.isSpace ? c : 0) + l,
                            u = a.charProcOperatorList[_.operatorListId];
                          u
                            ? (this.contentVisible &&
                                ((this.processingType3 = _),
                                this.save(),
                                e.scale(n, n),
                                e.transform(...h),
                                this.executeOperatorList(u),
                                this.restore()),
                              (g =
                                i.Util.applyTransform([_.width, 0], h)[0] * n +
                                r),
                              e.translate(g, 0),
                              (s.x += g * d))
                            : (0, i.warn)(
                                'Type3 character "'.concat(
                                  _.operatorListId,
                                  '" is not available.'
                                )
                              );
                        }
                        e.restore(), (this.processingType3 = null);
                      }
                    }
                    setCharWidth(t, e) {}
                    setCharWidthAndBounds(t, e, s, i, a, n) {
                      this.ctx.rect(s, i, a - s, n - i),
                        this.ctx.clip(),
                        this.endPath();
                    }
                    getColorN_Pattern(t) {
                      let e;
                      if ('TilingPattern' === t[0]) {
                        const s = t[1],
                          i =
                            this.baseTransform ||
                            (0, a.getCurrentTransform)(this.ctx),
                          r = {
                            createCanvasGraphics: (t) =>
                              new x(
                                t,
                                this.commonObjs,
                                this.objs,
                                this.canvasFactory,
                                this.filterFactory,
                                {
                                  optionalContentConfig:
                                    this.optionalContentConfig,
                                  markedContentStack: this.markedContentStack
                                }
                              )
                          };
                        e = new n.TilingPattern(t, s, this.ctx, r, i);
                      } else e = this._getPattern(t[1], t[2]);
                      return e;
                    }
                    setStrokeColorN() {
                      this.current.strokeColor =
                        this.getColorN_Pattern(arguments);
                    }
                    setFillColorN() {
                      (this.current.fillColor =
                        this.getColorN_Pattern(arguments)),
                        (this.current.patternFill = !0);
                    }
                    setStrokeRGBColor(t, e, s) {
                      const a = i.Util.makeHexColor(t, e, s);
                      (this.ctx.strokeStyle = a),
                        (this.current.strokeColor = a);
                    }
                    setFillRGBColor(t, e, s) {
                      const a = i.Util.makeHexColor(t, e, s);
                      (this.ctx.fillStyle = a),
                        (this.current.fillColor = a),
                        (this.current.patternFill = !1);
                    }
                    _getPattern(t) {
                      let e,
                        s =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      return (
                        this.cachedPatterns.has(t)
                          ? (e = this.cachedPatterns.get(t))
                          : ((e = (0, n.getShadingPattern)(this.getObject(t))),
                            this.cachedPatterns.set(t, e)),
                        s && (e.matrix = s),
                        e
                      );
                    }
                    shadingFill(t) {
                      if (!this.contentVisible) return;
                      const e = this.ctx;
                      this.save();
                      const s = this._getPattern(t);
                      e.fillStyle = s.getPattern(
                        e,
                        this,
                        (0, a.getCurrentTransformInverse)(e),
                        n.PathType.SHADING
                      );
                      const r = (0, a.getCurrentTransformInverse)(e);
                      if (r) {
                        const { width: t, height: s } = e.canvas,
                          [a, n, o, l] = i.Util.getAxialAlignedBoundingBox(
                            [0, 0, t, s],
                            r
                          );
                        this.ctx.fillRect(a, n, o - a, l - n);
                      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                      this.compose(this.current.getClippedPathBoundingBox()),
                        this.restore();
                    }
                    beginInlineImage() {
                      (0, i.unreachable)('Should not call beginInlineImage');
                    }
                    beginImageData() {
                      (0, i.unreachable)('Should not call beginImageData');
                    }
                    paintFormXObjectBegin(t, e) {
                      if (
                        this.contentVisible &&
                        (this.save(),
                        this.baseTransformStack.push(this.baseTransform),
                        Array.isArray(t) &&
                          6 === t.length &&
                          this.transform(...t),
                        (this.baseTransform = (0, a.getCurrentTransform)(
                          this.ctx
                        )),
                        e)
                      ) {
                        const t = e[2] - e[0],
                          s = e[3] - e[1];
                        this.ctx.rect(e[0], e[1], t, s),
                          this.current.updateRectMinMax(
                            (0, a.getCurrentTransform)(this.ctx),
                            e
                          ),
                          this.clip(),
                          this.endPath();
                      }
                    }
                    paintFormXObjectEnd() {
                      this.contentVisible &&
                        (this.restore(),
                        (this.baseTransform = this.baseTransformStack.pop()));
                    }
                    beginGroup(t) {
                      if (!this.contentVisible) return;
                      this.save(),
                        this.inSMaskMode &&
                          (this.endSMaskMode(),
                          (this.current.activeSMask = null));
                      const e = this.ctx;
                      t.isolated ||
                        (0, i.info)('TODO: Support non-isolated groups.'),
                        t.knockout &&
                          (0, i.warn)('Knockout groups not supported.');
                      const s = (0, a.getCurrentTransform)(e);
                      if ((t.matrix && e.transform(...t.matrix), !t.bbox))
                        throw new Error('Bounding box is required.');
                      let n = i.Util.getAxialAlignedBoundingBox(
                        t.bbox,
                        (0, a.getCurrentTransform)(e)
                      );
                      const r = [0, 0, e.canvas.width, e.canvas.height];
                      n = i.Util.intersect(n, r) || [0, 0, 0, 0];
                      const l = Math.floor(n[0]),
                        c = Math.floor(n[1]);
                      let d = Math.max(Math.ceil(n[2]) - l, 1),
                        h = Math.max(Math.ceil(n[3]) - c, 1),
                        u = 1,
                        p = 1;
                      d > o && ((u = d / o), (d = o)),
                        h > o && ((p = h / o), (h = o)),
                        this.current.startNewPathAndClipBox([0, 0, d, h]);
                      let g = 'groupAt' + this.groupLevel;
                      t.smask && (g += '_smask_' + (this.smaskCounter++ % 2));
                      const v = this.cachedCanvases.getCanvas(g, d, h),
                        f = v.context;
                      f.scale(1 / u, 1 / p),
                        f.translate(-l, -c),
                        f.transform(...s),
                        t.smask
                          ? this.smaskStack.push({
                              canvas: v.canvas,
                              context: f,
                              offsetX: l,
                              offsetY: c,
                              scaleX: u,
                              scaleY: p,
                              subtype: t.smask.subtype,
                              backdrop: t.smask.backdrop,
                              transferMap: t.smask.transferMap || null,
                              startTransformInverse: null
                            })
                          : (e.setTransform(1, 0, 0, 1, 0, 0),
                            e.translate(l, c),
                            e.scale(u, p),
                            e.save()),
                        _(e, f),
                        (this.ctx = f),
                        this.setGState([
                          ['BM', 'source-over'],
                          ['ca', 1],
                          ['CA', 1]
                        ]),
                        this.groupStack.push(e),
                        this.groupLevel++;
                    }
                    endGroup(t) {
                      if (!this.contentVisible) return;
                      this.groupLevel--;
                      const e = this.ctx,
                        s = this.groupStack.pop();
                      if (
                        ((this.ctx = s),
                        (this.ctx.imageSmoothingEnabled = !1),
                        t.smask)
                      )
                        (this.tempSMask = this.smaskStack.pop()),
                          this.restore();
                      else {
                        this.ctx.restore();
                        const t = (0, a.getCurrentTransform)(this.ctx);
                        this.restore(),
                          this.ctx.save(),
                          this.ctx.setTransform(...t);
                        const s = i.Util.getAxialAlignedBoundingBox(
                          [0, 0, e.canvas.width, e.canvas.height],
                          t
                        );
                        this.ctx.drawImage(e.canvas, 0, 0),
                          this.ctx.restore(),
                          this.compose(s);
                      }
                    }
                    beginAnnotation(t, e, s, n, r) {
                      if (
                        (_assertClassBrand(w, this, C).call(this),
                        g(this.ctx),
                        this.ctx.save(),
                        this.save(),
                        this.baseTransform &&
                          this.ctx.setTransform(...this.baseTransform),
                        Array.isArray(e) && 4 === e.length)
                      ) {
                        const n = e[2] - e[0],
                          o = e[3] - e[1];
                        if (r && this.annotationCanvasMap) {
                          ((s = s.slice())[4] -= e[0]),
                            (s[5] -= e[1]),
                            ((e = e.slice())[0] = e[1] = 0),
                            (e[2] = n),
                            (e[3] = o);
                          const [r, l] = i.Util.singularValueDecompose2dScale(
                              (0, a.getCurrentTransform)(this.ctx)
                            ),
                            { viewportScale: c } = this,
                            d = Math.ceil(n * this.outputScaleX * c),
                            h = Math.ceil(o * this.outputScaleY * c);
                          this.annotationCanvas = this.canvasFactory.create(
                            d,
                            h
                          );
                          const { canvas: u, context: p } =
                            this.annotationCanvas;
                          this.annotationCanvasMap.set(t, u),
                            (this.annotationCanvas.savedCtx = this.ctx),
                            (this.ctx = p),
                            this.ctx.save(),
                            this.ctx.setTransform(r, 0, 0, -l, 0, o * l),
                            g(this.ctx);
                        } else
                          g(this.ctx),
                            this.ctx.rect(e[0], e[1], n, o),
                            this.ctx.clip(),
                            this.endPath();
                      }
                      (this.current = new h(
                        this.ctx.canvas.width,
                        this.ctx.canvas.height
                      )),
                        this.transform(...s),
                        this.transform(...n);
                    }
                    endAnnotation() {
                      this.annotationCanvas &&
                        (this.ctx.restore(),
                        _assertClassBrand(w, this, E).call(this),
                        (this.ctx = this.annotationCanvas.savedCtx),
                        delete this.annotationCanvas.savedCtx,
                        delete this.annotationCanvas);
                    }
                    paintImageMaskXObject(t) {
                      if (!this.contentVisible) return;
                      const e = t.count;
                      (t = this.getObject(t.data, t)).count = e;
                      const s = this.ctx,
                        i = this.processingType3;
                      if (
                        i &&
                        (void 0 === i.compiled &&
                          (i.compiled = (function (t) {
                            const { width: e, height: s } = t;
                            if (e > 1e3 || s > 1e3) return null;
                            const i = new Uint8Array([
                                0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0
                              ]),
                              a = e + 1;
                            let n,
                              r,
                              o,
                              l = new Uint8Array(a * (s + 1));
                            const c = (e + 7) & -8;
                            let d = new Uint8Array(c * s),
                              h = 0;
                            for (const g of t.data) {
                              let t = 128;
                              for (; t > 0; )
                                (d[h++] = g & t ? 0 : 255), (t >>= 1);
                            }
                            let u = 0;
                            for (
                              h = 0, 0 !== d[h] && ((l[0] = 1), ++u), r = 1;
                              r < e;
                              r++
                            )
                              d[h] !== d[h + 1] && ((l[r] = d[h] ? 2 : 1), ++u),
                                h++;
                            for (
                              0 !== d[h] && ((l[r] = 2), ++u), n = 1;
                              n < s;
                              n++
                            ) {
                              (h = n * c),
                                (o = n * a),
                                d[h - c] !== d[h] &&
                                  ((l[o] = d[h] ? 1 : 8), ++u);
                              let t = (d[h] ? 4 : 0) + (d[h - c] ? 8 : 0);
                              for (r = 1; r < e; r++)
                                (t =
                                  (t >> 2) +
                                  (d[h + 1] ? 4 : 0) +
                                  (d[h - c + 1] ? 8 : 0)),
                                  i[t] && ((l[o + r] = i[t]), ++u),
                                  h++;
                              if (
                                (d[h - c] !== d[h] &&
                                  ((l[o + r] = d[h] ? 2 : 4), ++u),
                                u > 1e3)
                              )
                                return null;
                            }
                            for (
                              h = c * (s - 1),
                                o = n * a,
                                0 !== d[h] && ((l[o] = 8), ++u),
                                r = 1;
                              r < e;
                              r++
                            )
                              d[h] !== d[h + 1] &&
                                ((l[o + r] = d[h] ? 4 : 8), ++u),
                                h++;
                            if ((0 !== d[h] && ((l[o + r] = 4), ++u), u > 1e3))
                              return null;
                            const p = new Int32Array([
                                0,
                                a,
                                -1,
                                0,
                                -a,
                                0,
                                0,
                                0,
                                1
                              ]),
                              _ = new Path2D();
                            for (n = 0; u && n <= s; n++) {
                              let t = n * a;
                              const s = t + e;
                              for (; t < s && !l[t]; ) t++;
                              if (t === s) continue;
                              _.moveTo(t % a, n);
                              const i = t;
                              let r = l[t];
                              do {
                                const e = p[r];
                                do {
                                  t += e;
                                } while (!l[t]);
                                const s = l[t];
                                5 !== s && 10 !== s
                                  ? ((r = s), (l[t] = 0))
                                  : ((r = s & ((51 * r) >> 4)),
                                    (l[t] &= (r >> 2) | (r << 2))),
                                  _.lineTo(t % a, (t / a) | 0),
                                  l[t] || --u;
                              } while (i !== t);
                              --n;
                            }
                            return (
                              (d = null),
                              (l = null),
                              function (t) {
                                t.save(),
                                  t.scale(1 / e, -1 / s),
                                  t.translate(0, -s),
                                  t.fill(_),
                                  t.beginPath(),
                                  t.restore();
                              }
                            );
                          })(t)),
                        i.compiled)
                      )
                        return void i.compiled(s);
                      const a = this._createMaskCanvas(t),
                        n = a.canvas;
                      s.save(),
                        s.setTransform(1, 0, 0, 1, 0, 0),
                        s.drawImage(n, a.offsetX, a.offsetY),
                        s.restore(),
                        this.compose();
                    }
                    paintImageMaskXObjectRepeat(t, e) {
                      let s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        n =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 0,
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        o = arguments.length > 5 ? arguments[5] : void 0;
                      if (!this.contentVisible) return;
                      t = this.getObject(t.data, t);
                      const l = this.ctx;
                      l.save();
                      const c = (0, a.getCurrentTransform)(l);
                      l.transform(e, s, n, r, 0, 0);
                      const d = this._createMaskCanvas(t);
                      l.setTransform(
                        1,
                        0,
                        0,
                        1,
                        d.offsetX - c[4],
                        d.offsetY - c[5]
                      );
                      for (let a = 0, h = o.length; a < h; a += 2) {
                        const t = i.Util.transform(c, [
                            e,
                            s,
                            n,
                            r,
                            o[a],
                            o[a + 1]
                          ]),
                          [h, u] = i.Util.applyTransform([0, 0], t);
                        l.drawImage(d.canvas, h, u);
                      }
                      l.restore(), this.compose();
                    }
                    paintImageMaskXObjectGroup(t) {
                      if (!this.contentVisible) return;
                      const e = this.ctx,
                        s = this.current.fillColor,
                        i = this.current.patternFill;
                      for (const r of t) {
                        const {
                            data: t,
                            width: o,
                            height: l,
                            transform: c
                          } = r,
                          h = this.cachedCanvases.getCanvas('maskCanvas', o, l),
                          u = h.context;
                        u.save(),
                          p(u, this.getObject(t, r)),
                          (u.globalCompositeOperation = 'source-in'),
                          (u.fillStyle = i
                            ? s.getPattern(
                                u,
                                this,
                                (0, a.getCurrentTransformInverse)(e),
                                n.PathType.FILL
                              )
                            : s),
                          u.fillRect(0, 0, o, l),
                          u.restore(),
                          e.save(),
                          e.transform(...c),
                          e.scale(1, -1),
                          d(e, h.canvas, 0, 0, o, l, 0, -1, 1, 1),
                          e.restore();
                      }
                      this.compose();
                    }
                    paintImageXObject(t) {
                      if (!this.contentVisible) return;
                      const e = this.getObject(t);
                      e
                        ? this.paintInlineImageXObject(e)
                        : (0, i.warn)("Dependent image isn't ready yet");
                    }
                    paintImageXObjectRepeat(t, e, s, a) {
                      if (!this.contentVisible) return;
                      const n = this.getObject(t);
                      if (!n)
                        return void (0, i.warn)(
                          "Dependent image isn't ready yet"
                        );
                      const r = n.width,
                        o = n.height,
                        l = [];
                      for (let i = 0, c = a.length; i < c; i += 2)
                        l.push({
                          transform: [e, 0, 0, s, a[i], a[i + 1]],
                          x: 0,
                          y: 0,
                          w: r,
                          h: o
                        });
                      this.paintInlineImageXObjectGroup(n, l);
                    }
                    applyTransferMapsToCanvas(t) {
                      return (
                        'none' !== this.current.transferMaps &&
                          ((t.filter = this.current.transferMaps),
                          t.drawImage(t.canvas, 0, 0),
                          (t.filter = 'none')),
                        t.canvas
                      );
                    }
                    applyTransferMapsToBitmap(t) {
                      if ('none' === this.current.transferMaps) return t.bitmap;
                      const { bitmap: e, width: s, height: i } = t,
                        a = this.cachedCanvases.getCanvas('inlineImage', s, i),
                        n = a.context;
                      return (
                        (n.filter = this.current.transferMaps),
                        n.drawImage(e, 0, 0),
                        (n.filter = 'none'),
                        a.canvas
                      );
                    }
                    paintInlineImageXObject(t) {
                      if (!this.contentVisible) return;
                      const e = t.width,
                        s = t.height,
                        n = this.ctx;
                      if ((this.save(), !i.isNodeJS)) {
                        const { filter: t } = n;
                        'none' !== t && '' !== t && (n.filter = 'none');
                      }
                      let r;
                      if ((n.scale(1 / e, -1 / s), t.bitmap))
                        r = this.applyTransferMapsToBitmap(t);
                      else if (
                        ('function' === typeof HTMLElement &&
                          t instanceof HTMLElement) ||
                        !t.data
                      )
                        r = t;
                      else {
                        const i = this.cachedCanvases.getCanvas(
                          'inlineImage',
                          e,
                          s
                        ).context;
                        u(i, t), (r = this.applyTransferMapsToCanvas(i));
                      }
                      const o = this._scaleImage(
                        r,
                        (0, a.getCurrentTransformInverse)(n)
                      );
                      (n.imageSmoothingEnabled = P(
                        (0, a.getCurrentTransform)(n),
                        t.interpolate
                      )),
                        d(
                          n,
                          o.img,
                          0,
                          0,
                          o.paintWidth,
                          o.paintHeight,
                          0,
                          -s,
                          e,
                          s
                        ),
                        this.compose(),
                        this.restore();
                    }
                    paintInlineImageXObjectGroup(t, e) {
                      if (!this.contentVisible) return;
                      const s = this.ctx;
                      let i;
                      if (t.bitmap) i = t.bitmap;
                      else {
                        const e = t.width,
                          s = t.height,
                          a = this.cachedCanvases.getCanvas(
                            'inlineImage',
                            e,
                            s
                          ).context;
                        u(a, t), (i = this.applyTransferMapsToCanvas(a));
                      }
                      for (const a of e)
                        s.save(),
                          s.transform(...a.transform),
                          s.scale(1, -1),
                          d(s, i, a.x, a.y, a.w, a.h, 0, -1, 1, 1),
                          s.restore();
                      this.compose();
                    }
                    paintSolidColorImageMask() {
                      this.contentVisible &&
                        (this.ctx.fillRect(0, 0, 1, 1), this.compose());
                    }
                    markPoint(t) {}
                    markPointProps(t, e) {}
                    beginMarkedContent(t) {
                      this.markedContentStack.push({ visible: !0 });
                    }
                    beginMarkedContentProps(t, e) {
                      'OC' === t
                        ? this.markedContentStack.push({
                            visible: this.optionalContentConfig.isVisible(e)
                          })
                        : this.markedContentStack.push({ visible: !0 }),
                        (this.contentVisible = this.isContentVisible());
                    }
                    endMarkedContent() {
                      this.markedContentStack.pop(),
                        (this.contentVisible = this.isContentVisible());
                    }
                    beginCompat() {}
                    endCompat() {}
                    consumePath(t) {
                      const e = this.current.isEmptyClip();
                      this.pendingClip && this.current.updateClipFromPath(),
                        this.pendingClip || this.compose(t);
                      const s = this.ctx;
                      this.pendingClip &&
                        (e ||
                          (this.pendingClip === y
                            ? s.clip('evenodd')
                            : s.clip()),
                        (this.pendingClip = null)),
                        this.current.startNewPathAndClipBox(
                          this.current.clipBox
                        ),
                        s.beginPath();
                    }
                    getSinglePixelWidth() {
                      if (!this._cachedGetSinglePixelWidth) {
                        const t = (0, a.getCurrentTransform)(this.ctx);
                        if (0 === t[1] && 0 === t[2])
                          this._cachedGetSinglePixelWidth =
                            1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
                        else {
                          const e = Math.abs(t[0] * t[3] - t[2] * t[1]),
                            s = Math.hypot(t[0], t[2]),
                            i = Math.hypot(t[1], t[3]);
                          this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
                        }
                      }
                      return this._cachedGetSinglePixelWidth;
                    }
                    getScaleForStroking() {
                      if (-1 === this._cachedScaleForStroking[0]) {
                        const { lineWidth: t } = this.current,
                          { a: e, b: s, c: i, d: a } = this.ctx.getTransform();
                        let n, r;
                        if (0 === s && 0 === i) {
                          const s = Math.abs(e),
                            i = Math.abs(a);
                          if (s === i)
                            if (0 === t) n = r = 1 / s;
                            else {
                              const e = s * t;
                              n = r = e < 1 ? 1 / e : 1;
                            }
                          else if (0 === t) (n = 1 / s), (r = 1 / i);
                          else {
                            const e = s * t,
                              a = i * t;
                            (n = e < 1 ? 1 / e : 1), (r = a < 1 ? 1 / a : 1);
                          }
                        } else {
                          const o = Math.abs(e * a - s * i),
                            l = Math.hypot(e, s),
                            c = Math.hypot(i, a);
                          if (0 === t) (n = c / o), (r = l / o);
                          else {
                            const e = t * o;
                            (n = c > e ? c / e : 1), (r = l > e ? l / e : 1);
                          }
                        }
                        (this._cachedScaleForStroking[0] = n),
                          (this._cachedScaleForStroking[1] = r);
                      }
                      return this._cachedScaleForStroking;
                    }
                    rescaleAndStroke(t) {
                      const { ctx: e } = this,
                        { lineWidth: s } = this.current,
                        [i, a] = this.getScaleForStroking();
                      if (((e.lineWidth = s || 1), 1 === i && 1 === a))
                        return void e.stroke();
                      const n = e.getLineDash();
                      if ((t && e.save(), e.scale(i, a), n.length > 0)) {
                        const t = Math.max(i, a);
                        e.setLineDash(n.map((e) => e / t)),
                          (e.lineDashOffset /= t);
                      }
                      e.stroke(), t && e.restore();
                    }
                    isContentVisible() {
                      for (
                        let t = this.markedContentStack.length - 1;
                        t >= 0;
                        t--
                      )
                        if (!this.markedContentStack[t].visible) return !1;
                      return !0;
                    }
                  }
                  function C() {
                    for (; this.stateStack.length || this.inSMaskMode; )
                      this.restore();
                    this.ctx.restore(),
                      this.transparentCanvas &&
                        ((this.ctx = this.compositeCtx),
                        this.ctx.save(),
                        this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                        this.ctx.drawImage(this.transparentCanvas, 0, 0),
                        this.ctx.restore(),
                        (this.transparentCanvas = null));
                  }
                  function E() {
                    if (this.pageColors) {
                      const t = this.filterFactory.addHCMFilter(
                        this.pageColors.foreground,
                        this.pageColors.background
                      );
                      if ('none' !== t) {
                        const e = this.ctx.filter;
                        (this.ctx.filter = t),
                          this.ctx.drawImage(this.ctx.canvas, 0, 0),
                          (this.ctx.filter = e);
                      }
                    }
                  }
                  e.CanvasGraphics = x;
                  for (const k in i.OPS)
                    void 0 !== x.prototype[k] &&
                      (x.prototype[i.OPS[k]] = x.prototype[k]);
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.TilingPattern = e.PathType = void 0),
                    (e.getShadingPattern = function (t) {
                      switch (t[0]) {
                        case 'RadialAxial':
                          return new l(t);
                        case 'Mesh':
                          return new h(t);
                        case 'Dummy':
                          return new u();
                      }
                      throw new Error('Unknown IR type: '.concat(t[0]));
                    });
                  var i = s(1),
                    a = s(6);
                  const n = {
                    FILL: 'Fill',
                    STROKE: 'Stroke',
                    SHADING: 'Shading'
                  };
                  function r(t, e) {
                    if (!e) return;
                    const s = e[2] - e[0],
                      i = e[3] - e[1],
                      a = new Path2D();
                    a.rect(e[0], e[1], s, i), t.clip(a);
                  }
                  e.PathType = n;
                  class o {
                    constructor() {
                      this.constructor === o &&
                        (0, i.unreachable)(
                          'Cannot initialize BaseShadingPattern.'
                        );
                    }
                    getPattern() {
                      (0, i.unreachable)(
                        'Abstract method `getPattern` called.'
                      );
                    }
                  }
                  class l extends o {
                    constructor(t) {
                      super(),
                        (this._type = t[1]),
                        (this._bbox = t[2]),
                        (this._colorStops = t[3]),
                        (this._p0 = t[4]),
                        (this._p1 = t[5]),
                        (this._r0 = t[6]),
                        (this._r1 = t[7]),
                        (this.matrix = null);
                    }
                    _createGradient(t) {
                      let e;
                      'axial' === this._type
                        ? (e = t.createLinearGradient(
                            this._p0[0],
                            this._p0[1],
                            this._p1[0],
                            this._p1[1]
                          ))
                        : 'radial' === this._type &&
                          (e = t.createRadialGradient(
                            this._p0[0],
                            this._p0[1],
                            this._r0,
                            this._p1[0],
                            this._p1[1],
                            this._r1
                          ));
                      for (const s of this._colorStops)
                        e.addColorStop(s[0], s[1]);
                      return e;
                    }
                    getPattern(t, e, s, o) {
                      let l;
                      if (o === n.STROKE || o === n.FILL) {
                        const n = e.current.getClippedPathBoundingBox(
                            o,
                            (0, a.getCurrentTransform)(t)
                          ) || [0, 0, 0, 0],
                          c = Math.ceil(n[2] - n[0]) || 1,
                          d = Math.ceil(n[3] - n[1]) || 1,
                          h = e.cachedCanvases.getCanvas('pattern', c, d, !0),
                          u = h.context;
                        u.clearRect(0, 0, u.canvas.width, u.canvas.height),
                          u.beginPath(),
                          u.rect(0, 0, u.canvas.width, u.canvas.height),
                          u.translate(-n[0], -n[1]),
                          (s = i.Util.transform(s, [1, 0, 0, 1, n[0], n[1]])),
                          u.transform(...e.baseTransform),
                          this.matrix && u.transform(...this.matrix),
                          r(u, this._bbox),
                          (u.fillStyle = this._createGradient(u)),
                          u.fill(),
                          (l = t.createPattern(h.canvas, 'no-repeat'));
                        const p = new DOMMatrix(s);
                        l.setTransform(p);
                      } else r(t, this._bbox), (l = this._createGradient(t));
                      return l;
                    }
                  }
                  function c(t, e, s, i, a, n, r, o) {
                    const l = e.coords,
                      c = e.colors,
                      d = t.data,
                      h = 4 * t.width;
                    let u;
                    l[s + 1] > l[i + 1] &&
                      ((u = s), (s = i), (i = u), (u = n), (n = r), (r = u)),
                      l[i + 1] > l[a + 1] &&
                        ((u = i), (i = a), (a = u), (u = r), (r = o), (o = u)),
                      l[s + 1] > l[i + 1] &&
                        ((u = s), (s = i), (i = u), (u = n), (n = r), (r = u));
                    const p = (l[s] + e.offsetX) * e.scaleX,
                      _ = (l[s + 1] + e.offsetY) * e.scaleY,
                      g = (l[i] + e.offsetX) * e.scaleX,
                      v = (l[i + 1] + e.offsetY) * e.scaleY,
                      f = (l[a] + e.offsetX) * e.scaleX,
                      m = (l[a + 1] + e.offsetY) * e.scaleY;
                    if (_ >= m) return;
                    const b = c[n],
                      P = c[n + 1],
                      A = c[n + 2],
                      F = c[r],
                      S = c[r + 1],
                      y = c[r + 2],
                      w = c[o],
                      x = c[o + 1],
                      C = c[o + 2],
                      E = Math.round(_),
                      k = Math.round(m);
                    let M, T, I, R, D, G, L, O;
                    for (let B = E; B <= k; B++) {
                      if (B < v) {
                        const t = B < _ ? 0 : (_ - B) / (_ - v);
                        (M = p - (p - g) * t),
                          (T = b - (b - F) * t),
                          (I = P - (P - S) * t),
                          (R = A - (A - y) * t);
                      } else {
                        let t;
                        (t = B > m ? 1 : v === m ? 0 : (v - B) / (v - m)),
                          (M = g - (g - f) * t),
                          (T = F - (F - w) * t),
                          (I = S - (S - x) * t),
                          (R = y - (y - C) * t);
                      }
                      let t;
                      (t = B < _ ? 0 : B > m ? 1 : (_ - B) / (_ - m)),
                        (D = p - (p - f) * t),
                        (G = b - (b - w) * t),
                        (L = P - (P - x) * t),
                        (O = A - (A - C) * t);
                      const e = Math.round(Math.min(M, D)),
                        s = Math.round(Math.max(M, D));
                      let i = h * B + 4 * e;
                      for (let a = e; a <= s; a++)
                        (t = (M - a) / (M - D)),
                          t < 0 ? (t = 0) : t > 1 && (t = 1),
                          (d[i++] = (T - (T - G) * t) | 0),
                          (d[i++] = (I - (I - L) * t) | 0),
                          (d[i++] = (R - (R - O) * t) | 0),
                          (d[i++] = 255);
                    }
                  }
                  function d(t, e, s) {
                    const i = e.coords,
                      a = e.colors;
                    let n, r;
                    switch (e.type) {
                      case 'lattice':
                        const o = e.verticesPerRow,
                          l = Math.floor(i.length / o) - 1,
                          d = o - 1;
                        for (n = 0; n < l; n++) {
                          let e = n * o;
                          for (let n = 0; n < d; n++, e++)
                            c(
                              t,
                              s,
                              i[e],
                              i[e + 1],
                              i[e + o],
                              a[e],
                              a[e + 1],
                              a[e + o]
                            ),
                              c(
                                t,
                                s,
                                i[e + o + 1],
                                i[e + 1],
                                i[e + o],
                                a[e + o + 1],
                                a[e + 1],
                                a[e + o]
                              );
                        }
                        break;
                      case 'triangles':
                        for (n = 0, r = i.length; n < r; n += 3)
                          c(
                            t,
                            s,
                            i[n],
                            i[n + 1],
                            i[n + 2],
                            a[n],
                            a[n + 1],
                            a[n + 2]
                          );
                        break;
                      default:
                        throw new Error('illegal figure');
                    }
                  }
                  class h extends o {
                    constructor(t) {
                      super(),
                        (this._coords = t[2]),
                        (this._colors = t[3]),
                        (this._figures = t[4]),
                        (this._bounds = t[5]),
                        (this._bbox = t[7]),
                        (this._background = t[8]),
                        (this.matrix = null);
                    }
                    _createMeshCanvas(t, e, s) {
                      const i = Math.floor(this._bounds[0]),
                        a = Math.floor(this._bounds[1]),
                        n = Math.ceil(this._bounds[2]) - i,
                        r = Math.ceil(this._bounds[3]) - a,
                        o = Math.min(Math.ceil(Math.abs(n * t[0] * 1.1)), 3e3),
                        l = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
                        c = n / o,
                        h = r / l,
                        u = {
                          coords: this._coords,
                          colors: this._colors,
                          offsetX: -i,
                          offsetY: -a,
                          scaleX: 1 / c,
                          scaleY: 1 / h
                        },
                        p = o + 4,
                        _ = l + 4,
                        g = s.getCanvas('mesh', p, _, !1),
                        v = g.context,
                        f = v.createImageData(o, l);
                      if (e) {
                        const t = f.data;
                        for (let s = 0, i = t.length; s < i; s += 4)
                          (t[s] = e[0]),
                            (t[s + 1] = e[1]),
                            (t[s + 2] = e[2]),
                            (t[s + 3] = 255);
                      }
                      for (const m of this._figures) d(f, m, u);
                      return (
                        v.putImageData(f, 2, 2),
                        {
                          canvas: g.canvas,
                          offsetX: i - 2 * c,
                          offsetY: a - 2 * h,
                          scaleX: c,
                          scaleY: h
                        }
                      );
                    }
                    getPattern(t, e, s, o) {
                      let l;
                      if ((r(t, this._bbox), o === n.SHADING))
                        l = i.Util.singularValueDecompose2dScale(
                          (0, a.getCurrentTransform)(t)
                        );
                      else if (
                        ((l = i.Util.singularValueDecompose2dScale(
                          e.baseTransform
                        )),
                        this.matrix)
                      ) {
                        const t = i.Util.singularValueDecompose2dScale(
                          this.matrix
                        );
                        l = [l[0] * t[0], l[1] * t[1]];
                      }
                      const c = this._createMeshCanvas(
                        l,
                        o === n.SHADING ? null : this._background,
                        e.cachedCanvases
                      );
                      return (
                        o !== n.SHADING &&
                          (t.setTransform(...e.baseTransform),
                          this.matrix && t.transform(...this.matrix)),
                        t.translate(c.offsetX, c.offsetY),
                        t.scale(c.scaleX, c.scaleY),
                        t.createPattern(c.canvas, 'no-repeat')
                      );
                    }
                  }
                  class u extends o {
                    getPattern() {
                      return 'hotpink';
                    }
                  }
                  const p = 1,
                    _ = 2;
                  class g {
                    constructor(t, e, s, i, a) {
                      (this.operatorList = t[2]),
                        (this.matrix = t[3] || [1, 0, 0, 1, 0, 0]),
                        (this.bbox = t[4]),
                        (this.xstep = t[5]),
                        (this.ystep = t[6]),
                        (this.paintType = t[7]),
                        (this.tilingType = t[8]),
                        (this.color = e),
                        (this.ctx = s),
                        (this.canvasGraphicsFactory = i),
                        (this.baseTransform = a);
                    }
                    createPatternCanvas(t) {
                      const e = this.operatorList,
                        s = this.bbox,
                        n = this.xstep,
                        r = this.ystep,
                        o = this.paintType,
                        l = this.tilingType,
                        c = this.color,
                        d = this.canvasGraphicsFactory;
                      (0, i.info)('TilingType: ' + l);
                      const h = s[0],
                        u = s[1],
                        p = s[2],
                        _ = s[3],
                        g = i.Util.singularValueDecompose2dScale(this.matrix),
                        v = i.Util.singularValueDecompose2dScale(
                          this.baseTransform
                        ),
                        f = [g[0] * v[0], g[1] * v[1]],
                        m = this.getSizeAndScale(
                          n,
                          this.ctx.canvas.width,
                          f[0]
                        ),
                        b = this.getSizeAndScale(
                          r,
                          this.ctx.canvas.height,
                          f[1]
                        ),
                        P = t.cachedCanvases.getCanvas(
                          'pattern',
                          m.size,
                          b.size,
                          !0
                        ),
                        A = P.context,
                        F = d.createCanvasGraphics(A);
                      (F.groupLevel = t.groupLevel),
                        this.setFillAndStrokeStyleToContext(F, o, c);
                      let S = h,
                        y = u,
                        w = p,
                        x = _;
                      return (
                        h < 0 && ((S = 0), (w += Math.abs(h))),
                        u < 0 && ((y = 0), (x += Math.abs(u))),
                        A.translate(-m.scale * S, -b.scale * y),
                        F.transform(m.scale, 0, 0, b.scale, 0, 0),
                        A.save(),
                        this.clipBbox(F, S, y, w, x),
                        (F.baseTransform = (0, a.getCurrentTransform)(F.ctx)),
                        F.executeOperatorList(e),
                        F.endDrawing(),
                        {
                          canvas: P.canvas,
                          scaleX: m.scale,
                          scaleY: b.scale,
                          offsetX: S,
                          offsetY: y
                        }
                      );
                    }
                    getSizeAndScale(t, e, s) {
                      t = Math.abs(t);
                      const i = Math.max(g.MAX_PATTERN_SIZE, e);
                      let a = Math.ceil(t * s);
                      return (
                        a >= i ? (a = i) : (s = a / t), { scale: s, size: a }
                      );
                    }
                    clipBbox(t, e, s, i, n) {
                      const r = i - e,
                        o = n - s;
                      t.ctx.rect(e, s, r, o),
                        t.current.updateRectMinMax(
                          (0, a.getCurrentTransform)(t.ctx),
                          [e, s, i, n]
                        ),
                        t.clip(),
                        t.endPath();
                    }
                    setFillAndStrokeStyleToContext(t, e, s) {
                      const a = t.ctx,
                        n = t.current;
                      switch (e) {
                        case p:
                          const t = this.ctx;
                          (a.fillStyle = t.fillStyle),
                            (a.strokeStyle = t.strokeStyle),
                            (n.fillColor = t.fillStyle),
                            (n.strokeColor = t.strokeStyle);
                          break;
                        case _:
                          const r = i.Util.makeHexColor(s[0], s[1], s[2]);
                          (a.fillStyle = r),
                            (a.strokeStyle = r),
                            (n.fillColor = r),
                            (n.strokeColor = r);
                          break;
                        default:
                          throw new i.FormatError(
                            'Unsupported paint type: '.concat(e)
                          );
                      }
                    }
                    getPattern(t, e, s, a) {
                      let r = s;
                      a !== n.SHADING &&
                        ((r = i.Util.transform(r, e.baseTransform)),
                        this.matrix && (r = i.Util.transform(r, this.matrix)));
                      const o = this.createPatternCanvas(e);
                      let l = new DOMMatrix(r);
                      (l = l.translate(o.offsetX, o.offsetY)),
                        (l = l.scale(1 / o.scaleX, 1 / o.scaleY));
                      const c = t.createPattern(o.canvas, 'repeat');
                      return c.setTransform(l), c;
                    }
                  }
                  _defineProperty(g, 'MAX_PATTERN_SIZE', 3e3),
                    (e.TilingPattern = g);
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.convertBlackAndWhiteToRGBA = a),
                    (e.convertToRGBA = function (t) {
                      switch (t.kind) {
                        case i.ImageKind.GRAYSCALE_1BPP:
                          return a(t);
                        case i.ImageKind.RGB_24BPP:
                          return (function (t) {
                            let {
                                src: e,
                                srcPos: s = 0,
                                dest: a,
                                destPos: n = 0,
                                width: r,
                                height: o
                              } = t,
                              l = 0;
                            const c = e.length >> 2,
                              d = new Uint32Array(e.buffer, s, c);
                            if (i.FeatureTest.isLittleEndian) {
                              for (; l < c - 2; l += 3, n += 4) {
                                const t = d[l],
                                  e = d[l + 1],
                                  s = d[l + 2];
                                (a[n] = 4278190080 | t),
                                  (a[n + 1] =
                                    (t >>> 24) | (e << 8) | 4278190080),
                                  (a[n + 2] =
                                    (e >>> 16) | (s << 16) | 4278190080),
                                  (a[n + 3] = (s >>> 8) | 4278190080);
                              }
                              for (let t = 4 * l, s = e.length; t < s; t += 3)
                                a[n++] =
                                  e[t] |
                                  (e[t + 1] << 8) |
                                  (e[t + 2] << 16) |
                                  4278190080;
                            } else {
                              for (; l < c - 2; l += 3, n += 4) {
                                const t = d[l],
                                  e = d[l + 1],
                                  s = d[l + 2];
                                (a[n] = 255 | t),
                                  (a[n + 1] = (t << 24) | (e >>> 8) | 255),
                                  (a[n + 2] = (e << 16) | (s >>> 16) | 255),
                                  (a[n + 3] = (s << 8) | 255);
                              }
                              for (let t = 4 * l, s = e.length; t < s; t += 3)
                                a[n++] =
                                  (e[t] << 24) |
                                  (e[t + 1] << 16) |
                                  (e[t + 2] << 8) |
                                  255;
                            }
                            return { srcPos: s, destPos: n };
                          })(t);
                      }
                      return null;
                    }),
                    (e.grayToRGBA = function (t, e) {
                      if (i.FeatureTest.isLittleEndian)
                        for (let s = 0, i = t.length; s < i; s++)
                          e[s] = (65793 * t[s]) | 4278190080;
                      else
                        for (let s = 0, i = t.length; s < i; s++)
                          e[s] = (16843008 * t[s]) | 255;
                    });
                  var i = s(1);
                  function a(t) {
                    let {
                      src: e,
                      srcPos: s = 0,
                      dest: a,
                      width: n,
                      height: r,
                      nonBlackColor: o = 4294967295,
                      inverseDecode: l = !1
                    } = t;
                    const c = i.FeatureTest.isLittleEndian ? 4278190080 : 255,
                      [d, h] = l ? [o, c] : [c, o],
                      u = n >> 3,
                      p = 7 & n,
                      _ = e.length;
                    a = new Uint32Array(a.buffer);
                    let g = 0;
                    for (let i = 0; i < r; i++) {
                      for (const i = s + u; s < i; s++) {
                        const t = s < _ ? e[s] : 255;
                        (a[g++] = 128 & t ? h : d),
                          (a[g++] = 64 & t ? h : d),
                          (a[g++] = 32 & t ? h : d),
                          (a[g++] = 16 & t ? h : d),
                          (a[g++] = 8 & t ? h : d),
                          (a[g++] = 4 & t ? h : d),
                          (a[g++] = 2 & t ? h : d),
                          (a[g++] = 1 & t ? h : d);
                      }
                      if (0 === p) continue;
                      const t = s < _ ? e[s++] : 255;
                      for (let e = 0; e < p; e++)
                        a[g++] = t & (1 << (7 - e)) ? h : d;
                    }
                    return { srcPos: s, destPos: g };
                  }
                },
                (t, e) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.GlobalWorkerOptions = void 0);
                  const s = Object.create(null);
                  (e.GlobalWorkerOptions = s),
                    (s.workerPort = null),
                    (s.workerSrc = '');
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.MessageHandler = void 0);
                  var i = s(1);
                  const a = 1,
                    n = 2,
                    r = 1,
                    o = 2,
                    l = 3,
                    c = 4,
                    d = 5,
                    h = 6,
                    u = 7,
                    p = 8;
                  function _(t) {
                    switch (
                      (t instanceof Error ||
                        ('object' === typeof t && null !== t) ||
                        (0, i.unreachable)(
                          'wrapReason: Expected "reason" to be a (possibly cloned) Error.'
                        ),
                      t.name)
                    ) {
                      case 'AbortException':
                        return new i.AbortException(t.message);
                      case 'MissingPDFException':
                        return new i.MissingPDFException(t.message);
                      case 'PasswordException':
                        return new i.PasswordException(t.message, t.code);
                      case 'UnexpectedResponseException':
                        return new i.UnexpectedResponseException(
                          t.message,
                          t.status
                        );
                      case 'UnknownErrorException':
                        return new i.UnknownErrorException(
                          t.message,
                          t.details
                        );
                      default:
                        return new i.UnknownErrorException(
                          t.message,
                          t.toString()
                        );
                    }
                  }
                  var g = new WeakSet();
                  function v(t) {
                    const e = t.streamId,
                      s = this.sourceName,
                      a = t.sourceName,
                      n = this.comObj,
                      r = this,
                      o = this.actionHandler[t.action],
                      h = {
                        enqueue(t) {
                          let r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1,
                            o = arguments.length > 2 ? arguments[2] : void 0;
                          if (this.isCancelled) return;
                          const l = this.desiredSize;
                          (this.desiredSize -= r),
                            l > 0 &&
                              this.desiredSize <= 0 &&
                              ((this.sinkCapability =
                                new i.PromiseCapability()),
                              (this.ready = this.sinkCapability.promise)),
                            n.postMessage(
                              {
                                sourceName: s,
                                targetName: a,
                                stream: c,
                                streamId: e,
                                chunk: t
                              },
                              o
                            );
                        },
                        close() {
                          this.isCancelled ||
                            ((this.isCancelled = !0),
                            n.postMessage({
                              sourceName: s,
                              targetName: a,
                              stream: l,
                              streamId: e
                            }),
                            delete r.streamSinks[e]);
                        },
                        error(t) {
                          (0, i.assert)(
                            t instanceof Error,
                            'error must have a valid reason'
                          ),
                            this.isCancelled ||
                              ((this.isCancelled = !0),
                              n.postMessage({
                                sourceName: s,
                                targetName: a,
                                stream: d,
                                streamId: e,
                                reason: _(t)
                              }));
                        },
                        sinkCapability: new i.PromiseCapability(),
                        onPull: null,
                        onCancel: null,
                        isCancelled: !1,
                        desiredSize: t.desiredSize,
                        ready: null
                      };
                    h.sinkCapability.resolve(),
                      (h.ready = h.sinkCapability.promise),
                      (this.streamSinks[e] = h),
                      new Promise(function (e) {
                        e(o(t.data, h));
                      }).then(
                        function () {
                          n.postMessage({
                            sourceName: s,
                            targetName: a,
                            stream: p,
                            streamId: e,
                            success: !0
                          });
                        },
                        function (t) {
                          n.postMessage({
                            sourceName: s,
                            targetName: a,
                            stream: p,
                            streamId: e,
                            reason: _(t)
                          });
                        }
                      );
                  }
                  function f(t) {
                    const e = t.streamId,
                      s = this.sourceName,
                      a = t.sourceName,
                      n = this.comObj,
                      v = this.streamControllers[e],
                      f = this.streamSinks[e];
                    switch (t.stream) {
                      case p:
                        t.success
                          ? v.startCall.resolve()
                          : v.startCall.reject(_(t.reason));
                        break;
                      case u:
                        t.success
                          ? v.pullCall.resolve()
                          : v.pullCall.reject(_(t.reason));
                        break;
                      case h:
                        if (!f) {
                          n.postMessage({
                            sourceName: s,
                            targetName: a,
                            stream: u,
                            streamId: e,
                            success: !0
                          });
                          break;
                        }
                        f.desiredSize <= 0 &&
                          t.desiredSize > 0 &&
                          f.sinkCapability.resolve(),
                          (f.desiredSize = t.desiredSize),
                          new Promise(function (t) {
                            var e;
                            t(
                              null === (e = f.onPull) || void 0 === e
                                ? void 0
                                : e.call(f)
                            );
                          }).then(
                            function () {
                              n.postMessage({
                                sourceName: s,
                                targetName: a,
                                stream: u,
                                streamId: e,
                                success: !0
                              });
                            },
                            function (t) {
                              n.postMessage({
                                sourceName: s,
                                targetName: a,
                                stream: u,
                                streamId: e,
                                reason: _(t)
                              });
                            }
                          );
                        break;
                      case c:
                        if (
                          ((0, i.assert)(
                            v,
                            'enqueue should have stream controller'
                          ),
                          v.isClosed)
                        )
                          break;
                        v.controller.enqueue(t.chunk);
                        break;
                      case l:
                        if (
                          ((0, i.assert)(
                            v,
                            'close should have stream controller'
                          ),
                          v.isClosed)
                        )
                          break;
                        (v.isClosed = !0),
                          v.controller.close(),
                          _assertClassBrand(g, this, m).call(this, v, e);
                        break;
                      case d:
                        (0, i.assert)(v, 'error should have stream controller'),
                          v.controller.error(_(t.reason)),
                          _assertClassBrand(g, this, m).call(this, v, e);
                        break;
                      case o:
                        t.success
                          ? v.cancelCall.resolve()
                          : v.cancelCall.reject(_(t.reason)),
                          _assertClassBrand(g, this, m).call(this, v, e);
                        break;
                      case r:
                        if (!f) break;
                        new Promise(function (e) {
                          var s;
                          e(
                            null === (s = f.onCancel) || void 0 === s
                              ? void 0
                              : s.call(f, _(t.reason))
                          );
                        }).then(
                          function () {
                            n.postMessage({
                              sourceName: s,
                              targetName: a,
                              stream: o,
                              streamId: e,
                              success: !0
                            });
                          },
                          function (t) {
                            n.postMessage({
                              sourceName: s,
                              targetName: a,
                              stream: o,
                              streamId: e,
                              reason: _(t)
                            });
                          }
                        ),
                          f.sinkCapability.reject(_(t.reason)),
                          (f.isCancelled = !0),
                          delete this.streamSinks[e];
                        break;
                      default:
                        throw new Error('Unexpected stream case');
                    }
                  }
                  async function m(t, e) {
                    var s, i, a;
                    await Promise.allSettled([
                      null === (s = t.startCall) || void 0 === s
                        ? void 0
                        : s.promise,
                      null === (i = t.pullCall) || void 0 === i
                        ? void 0
                        : i.promise,
                      null === (a = t.cancelCall) || void 0 === a
                        ? void 0
                        : a.promise
                    ]),
                      delete this.streamControllers[e];
                  }
                  e.MessageHandler = class {
                    constructor(t, e, s) {
                      _classPrivateMethodInitSpec(this, g),
                        (this.sourceName = t),
                        (this.targetName = e),
                        (this.comObj = s),
                        (this.callbackId = 1),
                        (this.streamId = 1),
                        (this.streamSinks = Object.create(null)),
                        (this.streamControllers = Object.create(null)),
                        (this.callbackCapabilities = Object.create(null)),
                        (this.actionHandler = Object.create(null)),
                        (this._onComObjOnMessage = (t) => {
                          const e = t.data;
                          if (e.targetName !== this.sourceName) return;
                          if (e.stream)
                            return void _assertClassBrand(g, this, f).call(
                              this,
                              e
                            );
                          if (e.callback) {
                            const t = e.callbackId,
                              s = this.callbackCapabilities[t];
                            if (!s)
                              throw new Error(
                                'Cannot resolve callback '.concat(t)
                              );
                            if (
                              (delete this.callbackCapabilities[t],
                              e.callback === a)
                            )
                              s.resolve(e.data);
                            else {
                              if (e.callback !== n)
                                throw new Error('Unexpected callback case');
                              s.reject(_(e.reason));
                            }
                            return;
                          }
                          const i = this.actionHandler[e.action];
                          if (!i)
                            throw new Error(
                              'Unknown action from worker: '.concat(e.action)
                            );
                          if (e.callbackId) {
                            const t = this.sourceName,
                              r = e.sourceName;
                            new Promise(function (t) {
                              t(i(e.data));
                            }).then(
                              function (i) {
                                s.postMessage({
                                  sourceName: t,
                                  targetName: r,
                                  callback: a,
                                  callbackId: e.callbackId,
                                  data: i
                                });
                              },
                              function (i) {
                                s.postMessage({
                                  sourceName: t,
                                  targetName: r,
                                  callback: n,
                                  callbackId: e.callbackId,
                                  reason: _(i)
                                });
                              }
                            );
                          } else
                            e.streamId
                              ? _assertClassBrand(g, this, v).call(this, e)
                              : i(e.data);
                        }),
                        s.addEventListener('message', this._onComObjOnMessage);
                    }
                    on(t, e) {
                      const s = this.actionHandler;
                      if (s[t])
                        throw new Error(
                          'There is already an actionName called "'.concat(
                            t,
                            '"'
                          )
                        );
                      s[t] = e;
                    }
                    send(t, e, s) {
                      this.comObj.postMessage(
                        {
                          sourceName: this.sourceName,
                          targetName: this.targetName,
                          action: t,
                          data: e
                        },
                        s
                      );
                    }
                    sendWithPromise(t, e, s) {
                      const a = this.callbackId++,
                        n = new i.PromiseCapability();
                      this.callbackCapabilities[a] = n;
                      try {
                        this.comObj.postMessage(
                          {
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: t,
                            callbackId: a,
                            data: e
                          },
                          s
                        );
                      } catch (r) {
                        n.reject(r);
                      }
                      return n.promise;
                    }
                    sendWithStream(t, e, s, a) {
                      const n = this.streamId++,
                        o = this.sourceName,
                        l = this.targetName,
                        c = this.comObj;
                      return new ReadableStream(
                        {
                          start: (s) => {
                            const r = new i.PromiseCapability();
                            return (
                              (this.streamControllers[n] = {
                                controller: s,
                                startCall: r,
                                pullCall: null,
                                cancelCall: null,
                                isClosed: !1
                              }),
                              c.postMessage(
                                {
                                  sourceName: o,
                                  targetName: l,
                                  action: t,
                                  streamId: n,
                                  data: e,
                                  desiredSize: s.desiredSize
                                },
                                a
                              ),
                              r.promise
                            );
                          },
                          pull: (t) => {
                            const e = new i.PromiseCapability();
                            return (
                              (this.streamControllers[n].pullCall = e),
                              c.postMessage({
                                sourceName: o,
                                targetName: l,
                                stream: h,
                                streamId: n,
                                desiredSize: t.desiredSize
                              }),
                              e.promise
                            );
                          },
                          cancel: (t) => {
                            (0, i.assert)(
                              t instanceof Error,
                              'cancel must have a valid reason'
                            );
                            const e = new i.PromiseCapability();
                            return (
                              (this.streamControllers[n].cancelCall = e),
                              (this.streamControllers[n].isClosed = !0),
                              c.postMessage({
                                sourceName: o,
                                targetName: l,
                                stream: r,
                                streamId: n,
                                reason: _(t)
                              }),
                              e.promise
                            );
                          }
                        },
                        s
                      );
                    }
                    destroy() {
                      this.comObj.removeEventListener(
                        'message',
                        this._onComObjOnMessage
                      );
                    }
                  };
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.Metadata = void 0);
                  var i = s(1),
                    a = new WeakMap(),
                    n = new WeakMap();
                  e.Metadata = class {
                    constructor(t) {
                      let { parsedData: e, rawData: s } = t;
                      _classPrivateFieldInitSpec(this, a, void 0),
                        _classPrivateFieldInitSpec(this, n, void 0),
                        _classPrivateFieldSet(a, this, e),
                        _classPrivateFieldSet(n, this, s);
                    }
                    getRaw() {
                      return _classPrivateFieldGet(n, this);
                    }
                    get(t) {
                      var e;
                      return null !==
                        (e = _classPrivateFieldGet(a, this).get(t)) &&
                        void 0 !== e
                        ? e
                        : null;
                    }
                    getAll() {
                      return (0, i.objectFromMap)(
                        _classPrivateFieldGet(a, this)
                      );
                    }
                    has(t) {
                      return _classPrivateFieldGet(a, this).has(t);
                    }
                  };
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.OptionalContentConfig = void 0);
                  var i = s(1),
                    a = s(8);
                  const n = Symbol('INTERNAL');
                  var r = new WeakMap();
                  class o {
                    constructor(t, e) {
                      _classPrivateFieldInitSpec(this, r, !0),
                        (this.name = t),
                        (this.intent = e);
                    }
                    get visible() {
                      return _classPrivateFieldGet(r, this);
                    }
                    _setVisible(t, e) {
                      t !== n &&
                        (0, i.unreachable)(
                          'Internal method `_setVisible` called.'
                        ),
                        _classPrivateFieldSet(r, this, e);
                    }
                  }
                  var l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakSet();
                  function p(t) {
                    const e = t.length;
                    if (e < 2) return !0;
                    const s = t[0];
                    for (let a = 1; a < e; a++) {
                      const e = t[a];
                      let n;
                      if (Array.isArray(e))
                        n = _assertClassBrand(u, this, p).call(this, e);
                      else {
                        if (!_classPrivateFieldGet(c, this).has(e))
                          return (
                            (0, i.warn)(
                              'Optional content group not found: '.concat(e)
                            ),
                            !0
                          );
                        n = _classPrivateFieldGet(c, this).get(e).visible;
                      }
                      switch (s) {
                        case 'And':
                          if (!n) return !1;
                          break;
                        case 'Or':
                          if (n) return !0;
                          break;
                        case 'Not':
                          return !n;
                        default:
                          return !0;
                      }
                    }
                    return 'And' === s;
                  }
                  e.OptionalContentConfig = class {
                    constructor(t) {
                      if (
                        (_classPrivateMethodInitSpec(this, u),
                        _classPrivateFieldInitSpec(this, l, null),
                        _classPrivateFieldInitSpec(this, c, new Map()),
                        _classPrivateFieldInitSpec(this, d, null),
                        _classPrivateFieldInitSpec(this, h, null),
                        (this.name = null),
                        (this.creator = null),
                        null !== t)
                      ) {
                        (this.name = t.name),
                          (this.creator = t.creator),
                          _classPrivateFieldSet(h, this, t.order);
                        for (const e of t.groups)
                          _classPrivateFieldGet(c, this).set(
                            e.id,
                            new o(e.name, e.intent)
                          );
                        if ('OFF' === t.baseState)
                          for (const t of _classPrivateFieldGet(
                            c,
                            this
                          ).values())
                            t._setVisible(n, !1);
                        for (const e of t.on)
                          _classPrivateFieldGet(c, this)
                            .get(e)
                            ._setVisible(n, !0);
                        for (const e of t.off)
                          _classPrivateFieldGet(c, this)
                            .get(e)
                            ._setVisible(n, !1);
                        _classPrivateFieldSet(d, this, this.getHash());
                      }
                    }
                    isVisible(t) {
                      if (0 === _classPrivateFieldGet(c, this).size) return !0;
                      if (!t)
                        return (
                          (0, i.warn)('Optional content group not defined.'), !0
                        );
                      if ('OCG' === t.type)
                        return _classPrivateFieldGet(c, this).has(t.id)
                          ? _classPrivateFieldGet(c, this).get(t.id).visible
                          : ((0, i.warn)(
                              'Optional content group not found: '.concat(t.id)
                            ),
                            !0);
                      if ('OCMD' === t.type) {
                        if (t.expression)
                          return _assertClassBrand(u, this, p).call(
                            this,
                            t.expression
                          );
                        if (!t.policy || 'AnyOn' === t.policy) {
                          for (const e of t.ids) {
                            if (!_classPrivateFieldGet(c, this).has(e))
                              return (
                                (0, i.warn)(
                                  'Optional content group not found: '.concat(e)
                                ),
                                !0
                              );
                            if (_classPrivateFieldGet(c, this).get(e).visible)
                              return !0;
                          }
                          return !1;
                        }
                        if ('AllOn' === t.policy) {
                          for (const e of t.ids) {
                            if (!_classPrivateFieldGet(c, this).has(e))
                              return (
                                (0, i.warn)(
                                  'Optional content group not found: '.concat(e)
                                ),
                                !0
                              );
                            if (!_classPrivateFieldGet(c, this).get(e).visible)
                              return !1;
                          }
                          return !0;
                        }
                        if ('AnyOff' === t.policy) {
                          for (const e of t.ids) {
                            if (!_classPrivateFieldGet(c, this).has(e))
                              return (
                                (0, i.warn)(
                                  'Optional content group not found: '.concat(e)
                                ),
                                !0
                              );
                            if (!_classPrivateFieldGet(c, this).get(e).visible)
                              return !0;
                          }
                          return !1;
                        }
                        if ('AllOff' === t.policy) {
                          for (const e of t.ids) {
                            if (!_classPrivateFieldGet(c, this).has(e))
                              return (
                                (0, i.warn)(
                                  'Optional content group not found: '.concat(e)
                                ),
                                !0
                              );
                            if (_classPrivateFieldGet(c, this).get(e).visible)
                              return !1;
                          }
                          return !0;
                        }
                        return (
                          (0, i.warn)(
                            'Unknown optional content policy '.concat(
                              t.policy,
                              '.'
                            )
                          ),
                          !0
                        );
                      }
                      return (
                        (0, i.warn)('Unknown group type '.concat(t.type, '.')),
                        !0
                      );
                    }
                    setVisibility(t) {
                      let e =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      _classPrivateFieldGet(c, this).has(t)
                        ? (_classPrivateFieldGet(c, this)
                            .get(t)
                            ._setVisible(n, !!e),
                          _classPrivateFieldSet(l, this, null))
                        : (0, i.warn)(
                            'Optional content group not found: '.concat(t)
                          );
                    }
                    get hasInitialVisibility() {
                      return (
                        null === _classPrivateFieldGet(d, this) ||
                        this.getHash() === _classPrivateFieldGet(d, this)
                      );
                    }
                    getOrder() {
                      return _classPrivateFieldGet(c, this).size
                        ? _classPrivateFieldGet(h, this)
                          ? _classPrivateFieldGet(h, this).slice()
                          : [..._classPrivateFieldGet(c, this).keys()]
                        : null;
                    }
                    getGroups() {
                      return _classPrivateFieldGet(c, this).size > 0
                        ? (0, i.objectFromMap)(_classPrivateFieldGet(c, this))
                        : null;
                    }
                    getGroup(t) {
                      return _classPrivateFieldGet(c, this).get(t) || null;
                    }
                    getHash() {
                      if (null !== _classPrivateFieldGet(l, this))
                        return _classPrivateFieldGet(l, this);
                      const t = new a.MurmurHash3_64();
                      for (const [e, s] of _classPrivateFieldGet(c, this))
                        t.update(''.concat(e, ':').concat(s.visible));
                      return _classPrivateFieldSet(l, this, t.hexdigest());
                    }
                  };
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.PDFDataTransportStream = void 0);
                  var i = s(1),
                    a = s(6);
                  e.PDFDataTransportStream = class {
                    constructor(t, e) {
                      let {
                        length: s,
                        initialData: a,
                        progressiveDone: n = !1,
                        contentDispositionFilename: r = null,
                        disableRange: o = !1,
                        disableStream: l = !1
                      } = t;
                      if (
                        ((0, i.assert)(
                          e,
                          'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
                        ),
                        (this._queuedChunks = []),
                        (this._progressiveDone = n),
                        (this._contentDispositionFilename = r),
                        (null === a || void 0 === a ? void 0 : a.length) > 0)
                      ) {
                        const t =
                          a instanceof Uint8Array &&
                          a.byteLength === a.buffer.byteLength
                            ? a.buffer
                            : new Uint8Array(a).buffer;
                        this._queuedChunks.push(t);
                      }
                      (this._pdfDataRangeTransport = e),
                        (this._isStreamingSupported = !l),
                        (this._isRangeSupported = !o),
                        (this._contentLength = s),
                        (this._fullRequestReader = null),
                        (this._rangeReaders = []),
                        this._pdfDataRangeTransport.addRangeListener((t, e) => {
                          this._onReceiveData({ begin: t, chunk: e });
                        }),
                        this._pdfDataRangeTransport.addProgressListener(
                          (t, e) => {
                            this._onProgress({ loaded: t, total: e });
                          }
                        ),
                        this._pdfDataRangeTransport.addProgressiveReadListener(
                          (t) => {
                            this._onReceiveData({ chunk: t });
                          }
                        ),
                        this._pdfDataRangeTransport.addProgressiveDoneListener(
                          () => {
                            this._onProgressiveDone();
                          }
                        ),
                        this._pdfDataRangeTransport.transportReady();
                    }
                    _onReceiveData(t) {
                      let { begin: e, chunk: s } = t;
                      const a =
                        s instanceof Uint8Array &&
                        s.byteLength === s.buffer.byteLength
                          ? s.buffer
                          : new Uint8Array(s).buffer;
                      if (void 0 === e)
                        this._fullRequestReader
                          ? this._fullRequestReader._enqueue(a)
                          : this._queuedChunks.push(a);
                      else {
                        const t = this._rangeReaders.some(function (t) {
                          return t._begin === e && (t._enqueue(a), !0);
                        });
                        (0, i.assert)(
                          t,
                          '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.'
                        );
                      }
                    }
                    get _progressiveDataLength() {
                      var t, e;
                      return null !==
                        (t =
                          null === (e = this._fullRequestReader) || void 0 === e
                            ? void 0
                            : e._loaded) && void 0 !== t
                        ? t
                        : 0;
                    }
                    _onProgress(t) {
                      var e, s, i, a;
                      void 0 === t.total
                        ? null === (e = this._rangeReaders[0]) ||
                          void 0 === e ||
                          null === (s = e.onProgress) ||
                          void 0 === s ||
                          s.call(e, { loaded: t.loaded })
                        : null === (i = this._fullRequestReader) ||
                          void 0 === i ||
                          null === (a = i.onProgress) ||
                          void 0 === a ||
                          a.call(i, { loaded: t.loaded, total: t.total });
                    }
                    _onProgressiveDone() {
                      var t;
                      null === (t = this._fullRequestReader) ||
                        void 0 === t ||
                        t.progressiveDone(),
                        (this._progressiveDone = !0);
                    }
                    _removeRangeReader(t) {
                      const e = this._rangeReaders.indexOf(t);
                      e >= 0 && this._rangeReaders.splice(e, 1);
                    }
                    getFullReader() {
                      (0, i.assert)(
                        !this._fullRequestReader,
                        'PDFDataTransportStream.getFullReader can only be called once.'
                      );
                      const t = this._queuedChunks;
                      return (
                        (this._queuedChunks = null),
                        new n(
                          this,
                          t,
                          this._progressiveDone,
                          this._contentDispositionFilename
                        )
                      );
                    }
                    getRangeReader(t, e) {
                      if (e <= this._progressiveDataLength) return null;
                      const s = new r(this, t, e);
                      return (
                        this._pdfDataRangeTransport.requestDataRange(t, e),
                        this._rangeReaders.push(s),
                        s
                      );
                    }
                    cancelAllRequests(t) {
                      var e;
                      null === (e = this._fullRequestReader) ||
                        void 0 === e ||
                        e.cancel(t);
                      for (const s of this._rangeReaders.slice(0)) s.cancel(t);
                      this._pdfDataRangeTransport.abort();
                    }
                  };
                  class n {
                    constructor(t, e) {
                      let s =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : null;
                      (this._stream = t),
                        (this._done = s || !1),
                        (this._filename = (0, a.isPdfFile)(i) ? i : null),
                        (this._queuedChunks = e || []),
                        (this._loaded = 0);
                      for (const a of this._queuedChunks)
                        this._loaded += a.byteLength;
                      (this._requests = []),
                        (this._headersReady = Promise.resolve()),
                        (t._fullRequestReader = this),
                        (this.onProgress = null);
                    }
                    _enqueue(t) {
                      this._done ||
                        (this._requests.length > 0
                          ? this._requests
                              .shift()
                              .resolve({ value: t, done: !1 })
                          : this._queuedChunks.push(t),
                        (this._loaded += t.byteLength));
                    }
                    get headersReady() {
                      return this._headersReady;
                    }
                    get filename() {
                      return this._filename;
                    }
                    get isRangeSupported() {
                      return this._stream._isRangeSupported;
                    }
                    get isStreamingSupported() {
                      return this._stream._isStreamingSupported;
                    }
                    get contentLength() {
                      return this._stream._contentLength;
                    }
                    async read() {
                      if (this._queuedChunks.length > 0)
                        return { value: this._queuedChunks.shift(), done: !1 };
                      if (this._done) return { value: void 0, done: !0 };
                      const t = new i.PromiseCapability();
                      return this._requests.push(t), t.promise;
                    }
                    cancel(t) {
                      this._done = !0;
                      for (const e of this._requests)
                        e.resolve({ value: void 0, done: !0 });
                      this._requests.length = 0;
                    }
                    progressiveDone() {
                      this._done || (this._done = !0);
                    }
                  }
                  class r {
                    constructor(t, e, s) {
                      (this._stream = t),
                        (this._begin = e),
                        (this._end = s),
                        (this._queuedChunk = null),
                        (this._requests = []),
                        (this._done = !1),
                        (this.onProgress = null);
                    }
                    _enqueue(t) {
                      if (!this._done) {
                        if (0 === this._requests.length) this._queuedChunk = t;
                        else {
                          this._requests
                            .shift()
                            .resolve({ value: t, done: !1 });
                          for (const t of this._requests)
                            t.resolve({ value: void 0, done: !0 });
                          this._requests.length = 0;
                        }
                        (this._done = !0),
                          this._stream._removeRangeReader(this);
                      }
                    }
                    get isStreamingSupported() {
                      return !1;
                    }
                    async read() {
                      if (this._queuedChunk) {
                        const t = this._queuedChunk;
                        return (
                          (this._queuedChunk = null), { value: t, done: !1 }
                        );
                      }
                      if (this._done) return { value: void 0, done: !0 };
                      const t = new i.PromiseCapability();
                      return this._requests.push(t), t.promise;
                    }
                    cancel(t) {
                      this._done = !0;
                      for (const e of this._requests)
                        e.resolve({ value: void 0, done: !0 });
                      (this._requests.length = 0),
                        this._stream._removeRangeReader(this);
                    }
                  }
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.PDFFetchStream = void 0);
                  var i = s(1),
                    a = s(20);
                  function n(t, e, s) {
                    return {
                      method: 'GET',
                      headers: t,
                      signal: s.signal,
                      mode: 'cors',
                      credentials: e ? 'include' : 'same-origin',
                      redirect: 'follow'
                    };
                  }
                  function r(t) {
                    const e = new Headers();
                    for (const s in t) {
                      const i = t[s];
                      void 0 !== i && e.append(s, i);
                    }
                    return e;
                  }
                  function o(t) {
                    return t instanceof Uint8Array
                      ? t.buffer
                      : t instanceof ArrayBuffer
                      ? t
                      : ((0, i.warn)(
                          'getArrayBuffer - unexpected data format: '.concat(t)
                        ),
                        new Uint8Array(t).buffer);
                  }
                  e.PDFFetchStream = class {
                    constructor(t) {
                      (this.source = t),
                        (this.isHttp = /^https?:/i.test(t.url)),
                        (this.httpHeaders =
                          (this.isHttp && t.httpHeaders) || {}),
                        (this._fullRequestReader = null),
                        (this._rangeRequestReaders = []);
                    }
                    get _progressiveDataLength() {
                      var t, e;
                      return null !==
                        (t =
                          null === (e = this._fullRequestReader) || void 0 === e
                            ? void 0
                            : e._loaded) && void 0 !== t
                        ? t
                        : 0;
                    }
                    getFullReader() {
                      return (
                        (0, i.assert)(
                          !this._fullRequestReader,
                          'PDFFetchStream.getFullReader can only be called once.'
                        ),
                        (this._fullRequestReader = new l(this)),
                        this._fullRequestReader
                      );
                    }
                    getRangeReader(t, e) {
                      if (e <= this._progressiveDataLength) return null;
                      const s = new c(this, t, e);
                      return this._rangeRequestReaders.push(s), s;
                    }
                    cancelAllRequests(t) {
                      var e;
                      null === (e = this._fullRequestReader) ||
                        void 0 === e ||
                        e.cancel(t);
                      for (const s of this._rangeRequestReaders.slice(0))
                        s.cancel(t);
                    }
                  };
                  class l {
                    constructor(t) {
                      (this._stream = t),
                        (this._reader = null),
                        (this._loaded = 0),
                        (this._filename = null);
                      const e = t.source;
                      (this._withCredentials = e.withCredentials || !1),
                        (this._contentLength = e.length),
                        (this._headersCapability = new i.PromiseCapability()),
                        (this._disableRange = e.disableRange || !1),
                        (this._rangeChunkSize = e.rangeChunkSize),
                        this._rangeChunkSize ||
                          this._disableRange ||
                          (this._disableRange = !0),
                        (this._abortController = new AbortController()),
                        (this._isStreamingSupported = !e.disableStream),
                        (this._isRangeSupported = !e.disableRange),
                        (this._headers = r(this._stream.httpHeaders));
                      const s = e.url;
                      fetch(
                        s,
                        n(
                          this._headers,
                          this._withCredentials,
                          this._abortController
                        )
                      )
                        .then((t) => {
                          if (!(0, a.validateResponseStatus)(t.status))
                            throw (0, a.createResponseStatusError)(t.status, s);
                          (this._reader = t.body.getReader()),
                            this._headersCapability.resolve();
                          const e = (e) => t.headers.get(e),
                            { allowRangeRequests: n, suggestedLength: r } = (0,
                            a.validateRangeRequestCapabilities)({
                              getResponseHeader: e,
                              isHttp: this._stream.isHttp,
                              rangeChunkSize: this._rangeChunkSize,
                              disableRange: this._disableRange
                            });
                          (this._isRangeSupported = n),
                            (this._contentLength = r || this._contentLength),
                            (this._filename = (0, a.extractFilenameFromHeader)(
                              e
                            )),
                            !this._isStreamingSupported &&
                              this._isRangeSupported &&
                              this.cancel(
                                new i.AbortException('Streaming is disabled.')
                              );
                        })
                        .catch(this._headersCapability.reject),
                        (this.onProgress = null);
                    }
                    get headersReady() {
                      return this._headersCapability.promise;
                    }
                    get filename() {
                      return this._filename;
                    }
                    get contentLength() {
                      return this._contentLength;
                    }
                    get isRangeSupported() {
                      return this._isRangeSupported;
                    }
                    get isStreamingSupported() {
                      return this._isStreamingSupported;
                    }
                    async read() {
                      var t;
                      await this._headersCapability.promise;
                      const { value: e, done: s } = await this._reader.read();
                      return s
                        ? { value: e, done: s }
                        : ((this._loaded += e.byteLength),
                          null === (t = this.onProgress) ||
                            void 0 === t ||
                            t.call(this, {
                              loaded: this._loaded,
                              total: this._contentLength
                            }),
                          { value: o(e), done: !1 });
                    }
                    cancel(t) {
                      var e;
                      null === (e = this._reader) ||
                        void 0 === e ||
                        e.cancel(t),
                        this._abortController.abort();
                    }
                  }
                  class c {
                    constructor(t, e, s) {
                      (this._stream = t),
                        (this._reader = null),
                        (this._loaded = 0);
                      const o = t.source;
                      (this._withCredentials = o.withCredentials || !1),
                        (this._readCapability = new i.PromiseCapability()),
                        (this._isStreamingSupported = !o.disableStream),
                        (this._abortController = new AbortController()),
                        (this._headers = r(this._stream.httpHeaders)),
                        this._headers.append(
                          'Range',
                          'bytes='.concat(e, '-').concat(s - 1)
                        );
                      const l = o.url;
                      fetch(
                        l,
                        n(
                          this._headers,
                          this._withCredentials,
                          this._abortController
                        )
                      )
                        .then((t) => {
                          if (!(0, a.validateResponseStatus)(t.status))
                            throw (0, a.createResponseStatusError)(t.status, l);
                          this._readCapability.resolve(),
                            (this._reader = t.body.getReader());
                        })
                        .catch(this._readCapability.reject),
                        (this.onProgress = null);
                    }
                    get isStreamingSupported() {
                      return this._isStreamingSupported;
                    }
                    async read() {
                      var t;
                      await this._readCapability.promise;
                      const { value: e, done: s } = await this._reader.read();
                      return s
                        ? { value: e, done: s }
                        : ((this._loaded += e.byteLength),
                          null === (t = this.onProgress) ||
                            void 0 === t ||
                            t.call(this, { loaded: this._loaded }),
                          { value: o(e), done: !1 });
                    }
                    cancel(t) {
                      var e;
                      null === (e = this._reader) ||
                        void 0 === e ||
                        e.cancel(t),
                        this._abortController.abort();
                    }
                  }
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.createResponseStatusError = function (t, e) {
                      return 404 === t || (0 === t && e.startsWith('file:'))
                        ? new i.MissingPDFException('Missing PDF "' + e + '".')
                        : new i.UnexpectedResponseException(
                            'Unexpected server response ('
                              .concat(t, ') while retrieving PDF "')
                              .concat(e, '".'),
                            t
                          );
                    }),
                    (e.extractFilenameFromHeader = function (t) {
                      const e = t('Content-Disposition');
                      if (e) {
                        let t = (0, a.getFilenameFromContentDispositionHeader)(
                          e
                        );
                        if (t.includes('%'))
                          try {
                            t = decodeURIComponent(t);
                          } catch {}
                        if ((0, n.isPdfFile)(t)) return t;
                      }
                      return null;
                    }),
                    (e.validateRangeRequestCapabilities = function (t) {
                      let {
                        getResponseHeader: e,
                        isHttp: s,
                        rangeChunkSize: i,
                        disableRange: a
                      } = t;
                      const n = {
                          allowRangeRequests: !1,
                          suggestedLength: void 0
                        },
                        r = parseInt(e('Content-Length'), 10);
                      return Number.isInteger(r)
                        ? ((n.suggestedLength = r),
                          r <= 2 * i ||
                            a ||
                            !s ||
                            'bytes' !== e('Accept-Ranges') ||
                            'identity' !==
                              (e('Content-Encoding') || 'identity') ||
                            (n.allowRangeRequests = !0),
                          n)
                        : n;
                    }),
                    (e.validateResponseStatus = function (t) {
                      return 200 === t || 206 === t;
                    });
                  var i = s(1),
                    a = s(21),
                    n = s(6);
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.getFilenameFromContentDispositionHeader = function (t) {
                      let e = !0,
                        s = a('filename\\*', 'i').exec(t);
                      if (s) {
                        s = s[1];
                        let t = o(s);
                        return (t = unescape(t)), (t = l(t)), (t = c(t)), r(t);
                      }
                      if (
                        ((s = (function (t) {
                          const e = [];
                          let s;
                          const i = a('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
                          for (; null !== (s = i.exec(t)); ) {
                            let [, t, i, a] = s;
                            if (((t = parseInt(t, 10)), t in e)) {
                              if (0 === t) break;
                            } else e[t] = [i, a];
                          }
                          const n = [];
                          for (let a = 0; a < e.length && a in e; ++a) {
                            let [t, s] = e[a];
                            (s = o(s)),
                              t && ((s = unescape(s)), 0 === a && (s = l(s))),
                              n.push(s);
                          }
                          return n.join('');
                        })(t)),
                        s)
                      )
                        return r(c(s));
                      if (((s = a('filename', 'i').exec(t)), s)) {
                        s = s[1];
                        let t = o(s);
                        return (t = c(t)), r(t);
                      }
                      function a(t, e) {
                        return new RegExp(
                          '(?:^|;)\\s*' +
                            t +
                            '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
                          e
                        );
                      }
                      function n(t, s) {
                        if (t) {
                          if (!/^[\x00-\xFF]+$/.test(s)) return s;
                          try {
                            const a = new TextDecoder(t, { fatal: !0 }),
                              n = (0, i.stringToBytes)(s);
                            (s = a.decode(n)), (e = !1);
                          } catch {}
                        }
                        return s;
                      }
                      function r(t) {
                        return (
                          e &&
                            /[\x80-\xff]/.test(t) &&
                            ((t = n('utf-8', t)),
                            e && (t = n('iso-8859-1', t))),
                          t
                        );
                      }
                      function o(t) {
                        if (t.startsWith('"')) {
                          const e = t.slice(1).split('\\"');
                          for (let t = 0; t < e.length; ++t) {
                            const s = e[t].indexOf('"');
                            -1 !== s &&
                              ((e[t] = e[t].slice(0, s)), (e.length = t + 1)),
                              (e[t] = e[t].replaceAll(/\\(.)/g, '$1'));
                          }
                          t = e.join('"');
                        }
                        return t;
                      }
                      function l(t) {
                        const e = t.indexOf("'");
                        return -1 === e
                          ? t
                          : n(
                              t.slice(0, e),
                              t.slice(e + 1).replace(/^[^']*'/, '')
                            );
                      }
                      function c(t) {
                        return !t.startsWith('=?') ||
                          /[\x00-\x19\x80-\xff]/.test(t)
                          ? t
                          : t.replaceAll(
                              /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                              function (t, e, s, i) {
                                if ('q' === s || 'Q' === s)
                                  return n(
                                    e,
                                    (i = (i = i.replaceAll(
                                      '_',
                                      ' '
                                    )).replaceAll(
                                      /=([0-9a-fA-F]{2})/g,
                                      function (t, e) {
                                        return String.fromCharCode(
                                          parseInt(e, 16)
                                        );
                                      }
                                    ))
                                  );
                                try {
                                  i = atob(i);
                                } catch {}
                                return n(e, i);
                              }
                            );
                      }
                      return '';
                    });
                  var i = s(1);
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.PDFNetworkStream = void 0);
                  var i = s(1),
                    a = s(20);
                  class n {
                    constructor(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      (this.url = t),
                        (this.isHttp = /^https?:/i.test(t)),
                        (this.httpHeaders =
                          (this.isHttp && e.httpHeaders) ||
                          Object.create(null)),
                        (this.withCredentials = e.withCredentials || !1),
                        (this.currXhrId = 0),
                        (this.pendingRequests = Object.create(null));
                    }
                    requestRange(t, e, s) {
                      const i = { begin: t, end: e };
                      for (const a in s) i[a] = s[a];
                      return this.request(i);
                    }
                    requestFull(t) {
                      return this.request(t);
                    }
                    request(t) {
                      const e = new XMLHttpRequest(),
                        s = this.currXhrId++,
                        i = (this.pendingRequests[s] = { xhr: e });
                      e.open('GET', this.url),
                        (e.withCredentials = this.withCredentials);
                      for (const a in this.httpHeaders) {
                        const t = this.httpHeaders[a];
                        void 0 !== t && e.setRequestHeader(a, t);
                      }
                      return (
                        this.isHttp && 'begin' in t && 'end' in t
                          ? (e.setRequestHeader(
                              'Range',
                              'bytes='.concat(t.begin, '-').concat(t.end - 1)
                            ),
                            (i.expectedStatus = 206))
                          : (i.expectedStatus = 200),
                        (e.responseType = 'arraybuffer'),
                        t.onError &&
                          (e.onerror = function (s) {
                            t.onError(e.status);
                          }),
                        (e.onreadystatechange = this.onStateChange.bind(
                          this,
                          s
                        )),
                        (e.onprogress = this.onProgress.bind(this, s)),
                        (i.onHeadersReceived = t.onHeadersReceived),
                        (i.onDone = t.onDone),
                        (i.onError = t.onError),
                        (i.onProgress = t.onProgress),
                        e.send(null),
                        s
                      );
                    }
                    onProgress(t, e) {
                      var s;
                      const i = this.pendingRequests[t];
                      i &&
                        (null === (s = i.onProgress) ||
                          void 0 === s ||
                          s.call(i, e));
                    }
                    onStateChange(t, e) {
                      const s = this.pendingRequests[t];
                      if (!s) return;
                      const a = s.xhr;
                      if (
                        (a.readyState >= 2 &&
                          s.onHeadersReceived &&
                          (s.onHeadersReceived(), delete s.onHeadersReceived),
                        4 !== a.readyState)
                      )
                        return;
                      if (!(t in this.pendingRequests)) return;
                      var n;
                      if (
                        (delete this.pendingRequests[t],
                        0 === a.status && this.isHttp)
                      )
                        return void (
                          null === (n = s.onError) ||
                          void 0 === n ||
                          n.call(s, a.status)
                        );
                      const r = a.status || 200;
                      var o;
                      if (
                        (200 !== r || 206 !== s.expectedStatus) &&
                        r !== s.expectedStatus
                      )
                        return void (
                          null === (o = s.onError) ||
                          void 0 === o ||
                          o.call(s, a.status)
                        );
                      const l = (function (t) {
                        const e = t.response;
                        return 'string' !== typeof e
                          ? e
                          : (0, i.stringToBytes)(e).buffer;
                      })(a);
                      if (206 === r) {
                        const t = a.getResponseHeader('Content-Range'),
                          e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
                        s.onDone({ begin: parseInt(e[1], 10), chunk: l });
                      } else if (l) s.onDone({ begin: 0, chunk: l });
                      else {
                        var c;
                        null === (c = s.onError) ||
                          void 0 === c ||
                          c.call(s, a.status);
                      }
                    }
                    getRequestXhr(t) {
                      return this.pendingRequests[t].xhr;
                    }
                    isPendingRequest(t) {
                      return t in this.pendingRequests;
                    }
                    abortRequest(t) {
                      const e = this.pendingRequests[t].xhr;
                      delete this.pendingRequests[t], e.abort();
                    }
                  }
                  e.PDFNetworkStream = class {
                    constructor(t) {
                      (this._source = t),
                        (this._manager = new n(t.url, {
                          httpHeaders: t.httpHeaders,
                          withCredentials: t.withCredentials
                        })),
                        (this._rangeChunkSize = t.rangeChunkSize),
                        (this._fullRequestReader = null),
                        (this._rangeRequestReaders = []);
                    }
                    _onRangeRequestReaderClosed(t) {
                      const e = this._rangeRequestReaders.indexOf(t);
                      e >= 0 && this._rangeRequestReaders.splice(e, 1);
                    }
                    getFullReader() {
                      return (
                        (0, i.assert)(
                          !this._fullRequestReader,
                          'PDFNetworkStream.getFullReader can only be called once.'
                        ),
                        (this._fullRequestReader = new r(
                          this._manager,
                          this._source
                        )),
                        this._fullRequestReader
                      );
                    }
                    getRangeReader(t, e) {
                      const s = new o(this._manager, t, e);
                      return (
                        (s.onClosed =
                          this._onRangeRequestReaderClosed.bind(this)),
                        this._rangeRequestReaders.push(s),
                        s
                      );
                    }
                    cancelAllRequests(t) {
                      var e;
                      null === (e = this._fullRequestReader) ||
                        void 0 === e ||
                        e.cancel(t);
                      for (const s of this._rangeRequestReaders.slice(0))
                        s.cancel(t);
                    }
                  };
                  class r {
                    constructor(t, e) {
                      this._manager = t;
                      const s = {
                        onHeadersReceived: this._onHeadersReceived.bind(this),
                        onDone: this._onDone.bind(this),
                        onError: this._onError.bind(this),
                        onProgress: this._onProgress.bind(this)
                      };
                      (this._url = e.url),
                        (this._fullRequestId = t.requestFull(s)),
                        (this._headersReceivedCapability =
                          new i.PromiseCapability()),
                        (this._disableRange = e.disableRange || !1),
                        (this._contentLength = e.length),
                        (this._rangeChunkSize = e.rangeChunkSize),
                        this._rangeChunkSize ||
                          this._disableRange ||
                          (this._disableRange = !0),
                        (this._isStreamingSupported = !1),
                        (this._isRangeSupported = !1),
                        (this._cachedChunks = []),
                        (this._requests = []),
                        (this._done = !1),
                        (this._storedError = void 0),
                        (this._filename = null),
                        (this.onProgress = null);
                    }
                    _onHeadersReceived() {
                      const t = this._fullRequestId,
                        e = this._manager.getRequestXhr(t),
                        s = (t) => e.getResponseHeader(t),
                        { allowRangeRequests: i, suggestedLength: n } = (0,
                        a.validateRangeRequestCapabilities)({
                          getResponseHeader: s,
                          isHttp: this._manager.isHttp,
                          rangeChunkSize: this._rangeChunkSize,
                          disableRange: this._disableRange
                        });
                      i && (this._isRangeSupported = !0),
                        (this._contentLength = n || this._contentLength),
                        (this._filename = (0, a.extractFilenameFromHeader)(s)),
                        this._isRangeSupported && this._manager.abortRequest(t),
                        this._headersReceivedCapability.resolve();
                    }
                    _onDone(t) {
                      if (
                        (t &&
                          (this._requests.length > 0
                            ? this._requests
                                .shift()
                                .resolve({ value: t.chunk, done: !1 })
                            : this._cachedChunks.push(t.chunk)),
                        (this._done = !0),
                        !(this._cachedChunks.length > 0))
                      ) {
                        for (const t of this._requests)
                          t.resolve({ value: void 0, done: !0 });
                        this._requests.length = 0;
                      }
                    }
                    _onError(t) {
                      (this._storedError = (0, a.createResponseStatusError)(
                        t,
                        this._url
                      )),
                        this._headersReceivedCapability.reject(
                          this._storedError
                        );
                      for (const e of this._requests)
                        e.reject(this._storedError);
                      (this._requests.length = 0),
                        (this._cachedChunks.length = 0);
                    }
                    _onProgress(t) {
                      var e;
                      null === (e = this.onProgress) ||
                        void 0 === e ||
                        e.call(this, {
                          loaded: t.loaded,
                          total: t.lengthComputable
                            ? t.total
                            : this._contentLength
                        });
                    }
                    get filename() {
                      return this._filename;
                    }
                    get isRangeSupported() {
                      return this._isRangeSupported;
                    }
                    get isStreamingSupported() {
                      return this._isStreamingSupported;
                    }
                    get contentLength() {
                      return this._contentLength;
                    }
                    get headersReady() {
                      return this._headersReceivedCapability.promise;
                    }
                    async read() {
                      if (this._storedError) throw this._storedError;
                      if (this._cachedChunks.length > 0)
                        return { value: this._cachedChunks.shift(), done: !1 };
                      if (this._done) return { value: void 0, done: !0 };
                      const t = new i.PromiseCapability();
                      return this._requests.push(t), t.promise;
                    }
                    cancel(t) {
                      (this._done = !0),
                        this._headersReceivedCapability.reject(t);
                      for (const e of this._requests)
                        e.resolve({ value: void 0, done: !0 });
                      (this._requests.length = 0),
                        this._manager.isPendingRequest(this._fullRequestId) &&
                          this._manager.abortRequest(this._fullRequestId),
                        (this._fullRequestReader = null);
                    }
                  }
                  class o {
                    constructor(t, e, s) {
                      this._manager = t;
                      const i = {
                        onDone: this._onDone.bind(this),
                        onError: this._onError.bind(this),
                        onProgress: this._onProgress.bind(this)
                      };
                      (this._url = t.url),
                        (this._requestId = t.requestRange(e, s, i)),
                        (this._requests = []),
                        (this._queuedChunk = null),
                        (this._done = !1),
                        (this._storedError = void 0),
                        (this.onProgress = null),
                        (this.onClosed = null);
                    }
                    _close() {
                      var t;
                      null === (t = this.onClosed) ||
                        void 0 === t ||
                        t.call(this, this);
                    }
                    _onDone(t) {
                      const e = t.chunk;
                      this._requests.length > 0
                        ? this._requests.shift().resolve({ value: e, done: !1 })
                        : (this._queuedChunk = e),
                        (this._done = !0);
                      for (const s of this._requests)
                        s.resolve({ value: void 0, done: !0 });
                      (this._requests.length = 0), this._close();
                    }
                    _onError(t) {
                      this._storedError = (0, a.createResponseStatusError)(
                        t,
                        this._url
                      );
                      for (const e of this._requests)
                        e.reject(this._storedError);
                      (this._requests.length = 0), (this._queuedChunk = null);
                    }
                    _onProgress(t) {
                      var e;
                      this.isStreamingSupported ||
                        null === (e = this.onProgress) ||
                        void 0 === e ||
                        e.call(this, { loaded: t.loaded });
                    }
                    get isStreamingSupported() {
                      return !1;
                    }
                    async read() {
                      if (this._storedError) throw this._storedError;
                      if (null !== this._queuedChunk) {
                        const t = this._queuedChunk;
                        return (
                          (this._queuedChunk = null), { value: t, done: !1 }
                        );
                      }
                      if (this._done) return { value: void 0, done: !0 };
                      const t = new i.PromiseCapability();
                      return this._requests.push(t), t.promise;
                    }
                    cancel(t) {
                      this._done = !0;
                      for (const e of this._requests)
                        e.resolve({ value: void 0, done: !0 });
                      (this._requests.length = 0),
                        this._manager.isPendingRequest(this._requestId) &&
                          this._manager.abortRequest(this._requestId),
                        this._close();
                    }
                  }
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.PDFNodeStream = void 0);
                  var i = s(1),
                    a = s(20);
                  const n = /^file:\/\/\/[a-zA-Z]:\//;
                  e.PDFNodeStream = class {
                    constructor(t) {
                      (this.source = t),
                        (this.url = (function (t) {
                          const e = __webpack_require__(60933),
                            s = e.parse(t);
                          return 'file:' === s.protocol || s.host
                            ? s
                            : /^[a-z]:[/\\]/i.test(t)
                            ? e.parse('file:///'.concat(t))
                            : (s.host || (s.protocol = 'file:'), s);
                        })(t.url)),
                        (this.isHttp =
                          'http:' === this.url.protocol ||
                          'https:' === this.url.protocol),
                        (this.isFsUrl = 'file:' === this.url.protocol),
                        (this.httpHeaders =
                          (this.isHttp && t.httpHeaders) || {}),
                        (this._fullRequestReader = null),
                        (this._rangeRequestReaders = []);
                    }
                    get _progressiveDataLength() {
                      var t, e;
                      return null !==
                        (t =
                          null === (e = this._fullRequestReader) || void 0 === e
                            ? void 0
                            : e._loaded) && void 0 !== t
                        ? t
                        : 0;
                    }
                    getFullReader() {
                      return (
                        (0, i.assert)(
                          !this._fullRequestReader,
                          'PDFNodeStream.getFullReader can only be called once.'
                        ),
                        (this._fullRequestReader = this.isFsUrl
                          ? new h(this)
                          : new c(this)),
                        this._fullRequestReader
                      );
                    }
                    getRangeReader(t, e) {
                      if (e <= this._progressiveDataLength) return null;
                      const s = this.isFsUrl
                        ? new u(this, t, e)
                        : new d(this, t, e);
                      return this._rangeRequestReaders.push(s), s;
                    }
                    cancelAllRequests(t) {
                      var e;
                      null === (e = this._fullRequestReader) ||
                        void 0 === e ||
                        e.cancel(t);
                      for (const s of this._rangeRequestReaders.slice(0))
                        s.cancel(t);
                    }
                  };
                  class r {
                    constructor(t) {
                      (this._url = t.url),
                        (this._done = !1),
                        (this._storedError = null),
                        (this.onProgress = null);
                      const e = t.source;
                      (this._contentLength = e.length),
                        (this._loaded = 0),
                        (this._filename = null),
                        (this._disableRange = e.disableRange || !1),
                        (this._rangeChunkSize = e.rangeChunkSize),
                        this._rangeChunkSize ||
                          this._disableRange ||
                          (this._disableRange = !0),
                        (this._isStreamingSupported = !e.disableStream),
                        (this._isRangeSupported = !e.disableRange),
                        (this._readableStream = null),
                        (this._readCapability = new i.PromiseCapability()),
                        (this._headersCapability = new i.PromiseCapability());
                    }
                    get headersReady() {
                      return this._headersCapability.promise;
                    }
                    get filename() {
                      return this._filename;
                    }
                    get contentLength() {
                      return this._contentLength;
                    }
                    get isRangeSupported() {
                      return this._isRangeSupported;
                    }
                    get isStreamingSupported() {
                      return this._isStreamingSupported;
                    }
                    async read() {
                      var t;
                      if ((await this._readCapability.promise, this._done))
                        return { value: void 0, done: !0 };
                      if (this._storedError) throw this._storedError;
                      const e = this._readableStream.read();
                      return null === e
                        ? ((this._readCapability = new i.PromiseCapability()),
                          this.read())
                        : ((this._loaded += e.length),
                          null === (t = this.onProgress) ||
                            void 0 === t ||
                            t.call(this, {
                              loaded: this._loaded,
                              total: this._contentLength
                            }),
                          { value: new Uint8Array(e).buffer, done: !1 });
                    }
                    cancel(t) {
                      this._readableStream
                        ? this._readableStream.destroy(t)
                        : this._error(t);
                    }
                    _error(t) {
                      (this._storedError = t), this._readCapability.resolve();
                    }
                    _setReadableStream(t) {
                      (this._readableStream = t),
                        t.on('readable', () => {
                          this._readCapability.resolve();
                        }),
                        t.on('end', () => {
                          t.destroy(),
                            (this._done = !0),
                            this._readCapability.resolve();
                        }),
                        t.on('error', (t) => {
                          this._error(t);
                        }),
                        !this._isStreamingSupported &&
                          this._isRangeSupported &&
                          this._error(
                            new i.AbortException('streaming is disabled')
                          ),
                        this._storedError &&
                          this._readableStream.destroy(this._storedError);
                    }
                  }
                  class o {
                    constructor(t) {
                      (this._url = t.url),
                        (this._done = !1),
                        (this._storedError = null),
                        (this.onProgress = null),
                        (this._loaded = 0),
                        (this._readableStream = null),
                        (this._readCapability = new i.PromiseCapability());
                      const e = t.source;
                      this._isStreamingSupported = !e.disableStream;
                    }
                    get isStreamingSupported() {
                      return this._isStreamingSupported;
                    }
                    async read() {
                      var t;
                      if ((await this._readCapability.promise, this._done))
                        return { value: void 0, done: !0 };
                      if (this._storedError) throw this._storedError;
                      const e = this._readableStream.read();
                      return null === e
                        ? ((this._readCapability = new i.PromiseCapability()),
                          this.read())
                        : ((this._loaded += e.length),
                          null === (t = this.onProgress) ||
                            void 0 === t ||
                            t.call(this, { loaded: this._loaded }),
                          { value: new Uint8Array(e).buffer, done: !1 });
                    }
                    cancel(t) {
                      this._readableStream
                        ? this._readableStream.destroy(t)
                        : this._error(t);
                    }
                    _error(t) {
                      (this._storedError = t), this._readCapability.resolve();
                    }
                    _setReadableStream(t) {
                      (this._readableStream = t),
                        t.on('readable', () => {
                          this._readCapability.resolve();
                        }),
                        t.on('end', () => {
                          t.destroy(),
                            (this._done = !0),
                            this._readCapability.resolve();
                        }),
                        t.on('error', (t) => {
                          this._error(t);
                        }),
                        this._storedError &&
                          this._readableStream.destroy(this._storedError);
                    }
                  }
                  function l(t, e) {
                    return {
                      protocol: t.protocol,
                      auth: t.auth,
                      host: t.hostname,
                      port: t.port,
                      path: t.path,
                      method: 'GET',
                      headers: e
                    };
                  }
                  class c extends r {
                    constructor(t) {
                      super(t);
                      const e = (e) => {
                        if (404 === e.statusCode) {
                          const t = new i.MissingPDFException(
                            'Missing PDF "'.concat(this._url, '".')
                          );
                          return (
                            (this._storedError = t),
                            void this._headersCapability.reject(t)
                          );
                        }
                        this._headersCapability.resolve(),
                          this._setReadableStream(e);
                        const s = (t) =>
                            this._readableStream.headers[t.toLowerCase()],
                          { allowRangeRequests: n, suggestedLength: r } = (0,
                          a.validateRangeRequestCapabilities)({
                            getResponseHeader: s,
                            isHttp: t.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange
                          });
                        (this._isRangeSupported = n),
                          (this._contentLength = r || this._contentLength),
                          (this._filename = (0, a.extractFilenameFromHeader)(
                            s
                          ));
                      };
                      if (
                        ((this._request = null), 'http:' === this._url.protocol)
                      ) {
                        const s = __webpack_require__(38586);
                        this._request = s.request(
                          l(this._url, t.httpHeaders),
                          e
                        );
                      } else {
                        const s = __webpack_require__(76149);
                        this._request = s.request(
                          l(this._url, t.httpHeaders),
                          e
                        );
                      }
                      this._request.on('error', (t) => {
                        (this._storedError = t),
                          this._headersCapability.reject(t);
                      }),
                        this._request.end();
                    }
                  }
                  class d extends o {
                    constructor(t, e, s) {
                      super(t), (this._httpHeaders = {});
                      for (const i in t.httpHeaders) {
                        const e = t.httpHeaders[i];
                        void 0 !== e && (this._httpHeaders[i] = e);
                      }
                      this._httpHeaders.Range = 'bytes='
                        .concat(e, '-')
                        .concat(s - 1);
                      const a = (t) => {
                        if (404 !== t.statusCode) this._setReadableStream(t);
                        else {
                          const t = new i.MissingPDFException(
                            'Missing PDF "'.concat(this._url, '".')
                          );
                          this._storedError = t;
                        }
                      };
                      if (
                        ((this._request = null), 'http:' === this._url.protocol)
                      ) {
                        const t = __webpack_require__(38586);
                        this._request = t.request(
                          l(this._url, this._httpHeaders),
                          a
                        );
                      } else {
                        const t = __webpack_require__(76149);
                        this._request = t.request(
                          l(this._url, this._httpHeaders),
                          a
                        );
                      }
                      this._request.on('error', (t) => {
                        this._storedError = t;
                      }),
                        this._request.end();
                    }
                  }
                  class h extends r {
                    constructor(t) {
                      super(t);
                      let e = decodeURIComponent(this._url.path);
                      n.test(this._url.href) && (e = e.replace(/^\//, ''));
                      const s = __webpack_require__(69851);
                      s.lstat(e, (t, a) => {
                        if (t)
                          return (
                            'ENOENT' === t.code &&
                              (t = new i.MissingPDFException(
                                'Missing PDF "'.concat(e, '".')
                              )),
                            (this._storedError = t),
                            void this._headersCapability.reject(t)
                          );
                        (this._contentLength = a.size),
                          this._setReadableStream(s.createReadStream(e)),
                          this._headersCapability.resolve();
                      });
                    }
                  }
                  class u extends o {
                    constructor(t, e, s) {
                      super(t);
                      let i = decodeURIComponent(this._url.path);
                      n.test(this._url.href) && (i = i.replace(/^\//, ''));
                      const a = __webpack_require__(69851);
                      this._setReadableStream(
                        a.createReadStream(i, { start: e, end: s - 1 })
                      );
                    }
                  }
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.SVGGraphics = void 0);
                  var i = s(6),
                    a = s(1);
                  const n = 'normal',
                    r = 'normal',
                    o = '#000000',
                    l = ['butt', 'round', 'square'],
                    c = ['miter', 'round', 'bevel'],
                    d = function (t) {
                      let e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : '',
                        s =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2];
                      if (
                        URL.createObjectURL &&
                        'undefined' !== typeof Blob &&
                        !s
                      )
                        return URL.createObjectURL(new Blob([t], { type: e }));
                      const i =
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                      let a = 'data:'.concat(e, ';base64,');
                      for (let n = 0, r = t.length; n < r; n += 3) {
                        const e = 255 & t[n],
                          s = 255 & t[n + 1],
                          o = 255 & t[n + 2];
                        a +=
                          i[e >> 2] +
                          i[((3 & e) << 4) | (s >> 4)] +
                          i[n + 1 < r ? ((15 & s) << 2) | (o >> 6) : 64] +
                          i[n + 2 < r ? 63 & o : 64];
                      }
                      return a;
                    },
                    h = (function () {
                      const t = new Uint8Array([
                          137, 80, 78, 71, 13, 10, 26, 10
                        ]),
                        e = new Int32Array(256);
                      for (let a = 0; a < 256; a++) {
                        let t = a;
                        for (let e = 0; e < 8; e++)
                          t =
                            1 & t
                              ? 3988292384 ^ ((t >> 1) & 2147483647)
                              : (t >> 1) & 2147483647;
                        e[a] = t;
                      }
                      function s(t, s, i, a) {
                        let n = a;
                        const r = s.length;
                        (i[n] = (r >> 24) & 255),
                          (i[n + 1] = (r >> 16) & 255),
                          (i[n + 2] = (r >> 8) & 255),
                          (i[n + 3] = 255 & r),
                          (n += 4),
                          (i[n] = 255 & t.charCodeAt(0)),
                          (i[n + 1] = 255 & t.charCodeAt(1)),
                          (i[n + 2] = 255 & t.charCodeAt(2)),
                          (i[n + 3] = 255 & t.charCodeAt(3)),
                          (n += 4),
                          i.set(s, n),
                          (n += s.length);
                        const o = (function (t, s, i) {
                          let a = -1;
                          for (let n = s; n < i; n++) {
                            const s = 255 & (a ^ t[n]);
                            a = (a >>> 8) ^ e[s];
                          }
                          return ~a;
                        })(i, a + 4, n);
                        (i[n] = (o >> 24) & 255),
                          (i[n + 1] = (o >> 16) & 255),
                          (i[n + 2] = (o >> 8) & 255),
                          (i[n + 3] = 255 & o);
                      }
                      function i(t) {
                        let e = t.length;
                        const s = 65535,
                          i = Math.ceil(e / s),
                          a = new Uint8Array(2 + e + 5 * i + 4);
                        let n = 0;
                        (a[n++] = 120), (a[n++] = 156);
                        let r = 0;
                        for (; e > s; )
                          (a[n++] = 0),
                            (a[n++] = 255),
                            (a[n++] = 255),
                            (a[n++] = 0),
                            (a[n++] = 0),
                            a.set(t.subarray(r, r + s), n),
                            (n += s),
                            (r += s),
                            (e -= s);
                        (a[n++] = 1),
                          (a[n++] = 255 & e),
                          (a[n++] = (e >> 8) & 255),
                          (a[n++] = 255 & ~e),
                          (a[n++] = ((65535 & ~e) >> 8) & 255),
                          a.set(t.subarray(r), n),
                          (n += t.length - r);
                        const o = (function (t, e, s) {
                          let i = 1,
                            a = 0;
                          for (let n = e; n < s; ++n)
                            (i = (i + (255 & t[n])) % 65521),
                              (a = (a + i) % 65521);
                          return (a << 16) | i;
                        })(t, 0, t.length);
                        return (
                          (a[n++] = (o >> 24) & 255),
                          (a[n++] = (o >> 16) & 255),
                          (a[n++] = (o >> 8) & 255),
                          (a[n++] = 255 & o),
                          a
                        );
                      }
                      function n(e, n, r, o) {
                        const l = e.width,
                          c = e.height;
                        let h, u, p;
                        const _ = e.data;
                        switch (n) {
                          case a.ImageKind.GRAYSCALE_1BPP:
                            (u = 0), (h = 1), (p = (l + 7) >> 3);
                            break;
                          case a.ImageKind.RGB_24BPP:
                            (u = 2), (h = 8), (p = 3 * l);
                            break;
                          case a.ImageKind.RGBA_32BPP:
                            (u = 6), (h = 8), (p = 4 * l);
                            break;
                          default:
                            throw new Error('invalid format');
                        }
                        const g = new Uint8Array((1 + p) * c);
                        let v = 0,
                          f = 0;
                        for (let t = 0; t < c; ++t)
                          (g[v++] = 0),
                            g.set(_.subarray(f, f + p), v),
                            (f += p),
                            (v += p);
                        if (n === a.ImageKind.GRAYSCALE_1BPP && o) {
                          v = 0;
                          for (let t = 0; t < c; t++) {
                            v++;
                            for (let t = 0; t < p; t++) g[v++] ^= 255;
                          }
                        }
                        const m = new Uint8Array([
                            (l >> 24) & 255,
                            (l >> 16) & 255,
                            (l >> 8) & 255,
                            255 & l,
                            (c >> 24) & 255,
                            (c >> 16) & 255,
                            (c >> 8) & 255,
                            255 & c,
                            h,
                            u,
                            0,
                            0,
                            0
                          ]),
                          b = (function (t) {
                            if (!a.isNodeJS) return i(t);
                            try {
                              const e =
                                  parseInt(process.versions.node) >= 8
                                    ? t
                                    : Buffer.from(t),
                                s = __webpack_require__(9193).deflateSync(e, {
                                  level: 9
                                });
                              return s instanceof Uint8Array
                                ? s
                                : new Uint8Array(s);
                            } catch (e) {
                              (0, a.warn)(
                                'Not compressing PNG because zlib.deflateSync is unavailable: ' +
                                  e
                              );
                            }
                            return i(t);
                          })(g),
                          P = t.length + 36 + m.length + b.length,
                          A = new Uint8Array(P);
                        let F = 0;
                        return (
                          A.set(t, F),
                          (F += t.length),
                          s('IHDR', m, A, F),
                          (F += 12 + m.length),
                          s('IDATA', b, A, F),
                          (F += 12 + b.length),
                          s('IEND', new Uint8Array(0), A, F),
                          d(A, 'image/png', r)
                        );
                      }
                      return function (t, e, s) {
                        return n(
                          t,
                          void 0 === t.kind
                            ? a.ImageKind.GRAYSCALE_1BPP
                            : t.kind,
                          e,
                          s
                        );
                      };
                    })();
                  class u {
                    constructor() {
                      (this.fontSizeScale = 1),
                        (this.fontWeight = r),
                        (this.fontSize = 0),
                        (this.textMatrix = a.IDENTITY_MATRIX),
                        (this.fontMatrix = a.FONT_IDENTITY_MATRIX),
                        (this.leading = 0),
                        (this.textRenderingMode = a.TextRenderingMode.FILL),
                        (this.textMatrixScale = 1),
                        (this.x = 0),
                        (this.y = 0),
                        (this.lineX = 0),
                        (this.lineY = 0),
                        (this.charSpacing = 0),
                        (this.wordSpacing = 0),
                        (this.textHScale = 1),
                        (this.textRise = 0),
                        (this.fillColor = o),
                        (this.strokeColor = '#000000'),
                        (this.fillAlpha = 1),
                        (this.strokeAlpha = 1),
                        (this.lineWidth = 1),
                        (this.lineJoin = ''),
                        (this.lineCap = ''),
                        (this.miterLimit = 0),
                        (this.dashArray = []),
                        (this.dashPhase = 0),
                        (this.dependencies = []),
                        (this.activeClipUrl = null),
                        (this.clipGroup = null),
                        (this.maskId = '');
                    }
                    clone() {
                      return Object.create(this);
                    }
                    setCurrentPoint(t, e) {
                      (this.x = t), (this.y = e);
                    }
                  }
                  function p(t) {
                    if (Number.isInteger(t)) return t.toString();
                    const e = t.toFixed(10);
                    let s = e.length - 1;
                    if ('0' !== e[s]) return e;
                    do {
                      s--;
                    } while ('0' === e[s]);
                    return e.substring(0, '.' === e[s] ? s : s + 1);
                  }
                  function _(t) {
                    if (0 === t[4] && 0 === t[5]) {
                      if (0 === t[1] && 0 === t[2])
                        return 1 === t[0] && 1 === t[3]
                          ? ''
                          : 'scale('.concat(p(t[0]), ' ').concat(p(t[3]), ')');
                      if (t[0] === t[3] && t[1] === -t[2]) {
                        const e = (180 * Math.acos(t[0])) / Math.PI;
                        return 'rotate('.concat(p(e), ')');
                      }
                    } else if (
                      1 === t[0] &&
                      0 === t[1] &&
                      0 === t[2] &&
                      1 === t[3]
                    )
                      return 'translate('
                        .concat(p(t[4]), ' ')
                        .concat(p(t[5]), ')');
                    return (
                      'matrix('
                        .concat(p(t[0]), ' ')
                        .concat(p(t[1]), ' ')
                        .concat(p(t[2]), ' ')
                        .concat(p(t[3]), ' ')
                        .concat(p(t[4]), ' ') + ''.concat(p(t[5]), ')')
                    );
                  }
                  let g = 0,
                    v = 0,
                    f = 0;
                  e.SVGGraphics = class {
                    constructor(t, e) {
                      let s =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      (0, i.deprecated)(
                        'The SVG back-end is no longer maintained and *may* be removed in the future.'
                      ),
                        (this.svgFactory = new i.DOMSVGFactory()),
                        (this.current = new u()),
                        (this.transformMatrix = a.IDENTITY_MATRIX),
                        (this.transformStack = []),
                        (this.extraStack = []),
                        (this.commonObjs = t),
                        (this.objs = e),
                        (this.pendingClip = null),
                        (this.pendingEOFill = !1),
                        (this.embedFonts = !1),
                        (this.embeddedFonts = Object.create(null)),
                        (this.cssStyle = null),
                        (this.forceDataSchema = !!s),
                        (this._operatorIdMapping = []);
                      for (const i in a.OPS)
                        this._operatorIdMapping[a.OPS[i]] = i;
                    }
                    getObject(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      return 'string' === typeof t
                        ? t.startsWith('g_')
                          ? this.commonObjs.get(t)
                          : this.objs.get(t)
                        : e;
                    }
                    save() {
                      this.transformStack.push(this.transformMatrix);
                      const t = this.current;
                      this.extraStack.push(t), (this.current = t.clone());
                    }
                    restore() {
                      (this.transformMatrix = this.transformStack.pop()),
                        (this.current = this.extraStack.pop()),
                        (this.pendingClip = null),
                        (this.tgrp = null);
                    }
                    group(t) {
                      this.save(), this.executeOpTree(t), this.restore();
                    }
                    loadDependencies(t) {
                      const e = t.fnArray,
                        s = t.argsArray;
                      for (let i = 0, n = e.length; i < n; i++)
                        if (e[i] === a.OPS.dependency)
                          for (const t of s[i]) {
                            const e = t.startsWith('g_')
                                ? this.commonObjs
                                : this.objs,
                              s = new Promise((s) => {
                                e.get(t, s);
                              });
                            this.current.dependencies.push(s);
                          }
                      return Promise.all(this.current.dependencies);
                    }
                    transform(t, e, s, i, n, r) {
                      const o = [t, e, s, i, n, r];
                      (this.transformMatrix = a.Util.transform(
                        this.transformMatrix,
                        o
                      )),
                        (this.tgrp = null);
                    }
                    getSVG(t, e) {
                      this.viewport = e;
                      const s = this._initialize(e);
                      return this.loadDependencies(t).then(
                        () => (
                          (this.transformMatrix = a.IDENTITY_MATRIX),
                          this.executeOpTree(this.convertOpList(t)),
                          s
                        )
                      );
                    }
                    convertOpList(t) {
                      const e = this._operatorIdMapping,
                        s = t.argsArray,
                        i = t.fnArray,
                        a = [];
                      for (let n = 0, r = i.length; n < r; n++) {
                        const t = i[n];
                        a.push({ fnId: t, fn: e[t], args: s[n] });
                      }
                      return (function (t) {
                        let e = [];
                        const s = [];
                        for (const i of t)
                          'save' !== i.fn
                            ? 'restore' === i.fn
                              ? (e = s.pop())
                              : e.push(i)
                            : (e.push({ fnId: 92, fn: 'group', items: [] }),
                              s.push(e),
                              (e = e.at(-1).items));
                        return e;
                      })(a);
                    }
                    executeOpTree(t) {
                      for (const e of t) {
                        const t = e.fn,
                          s = e.fnId,
                          i = e.args;
                        switch (0 | s) {
                          case a.OPS.beginText:
                            this.beginText();
                            break;
                          case a.OPS.dependency:
                            break;
                          case a.OPS.setLeading:
                            this.setLeading(i);
                            break;
                          case a.OPS.setLeadingMoveText:
                            this.setLeadingMoveText(i[0], i[1]);
                            break;
                          case a.OPS.setFont:
                            this.setFont(i);
                            break;
                          case a.OPS.showText:
                          case a.OPS.showSpacedText:
                            this.showText(i[0]);
                            break;
                          case a.OPS.endText:
                            this.endText();
                            break;
                          case a.OPS.moveText:
                            this.moveText(i[0], i[1]);
                            break;
                          case a.OPS.setCharSpacing:
                            this.setCharSpacing(i[0]);
                            break;
                          case a.OPS.setWordSpacing:
                            this.setWordSpacing(i[0]);
                            break;
                          case a.OPS.setHScale:
                            this.setHScale(i[0]);
                            break;
                          case a.OPS.setTextMatrix:
                            this.setTextMatrix(
                              i[0],
                              i[1],
                              i[2],
                              i[3],
                              i[4],
                              i[5]
                            );
                            break;
                          case a.OPS.setTextRise:
                            this.setTextRise(i[0]);
                            break;
                          case a.OPS.setTextRenderingMode:
                            this.setTextRenderingMode(i[0]);
                            break;
                          case a.OPS.setLineWidth:
                            this.setLineWidth(i[0]);
                            break;
                          case a.OPS.setLineJoin:
                            this.setLineJoin(i[0]);
                            break;
                          case a.OPS.setLineCap:
                            this.setLineCap(i[0]);
                            break;
                          case a.OPS.setMiterLimit:
                            this.setMiterLimit(i[0]);
                            break;
                          case a.OPS.setFillRGBColor:
                            this.setFillRGBColor(i[0], i[1], i[2]);
                            break;
                          case a.OPS.setStrokeRGBColor:
                            this.setStrokeRGBColor(i[0], i[1], i[2]);
                            break;
                          case a.OPS.setStrokeColorN:
                            this.setStrokeColorN(i);
                            break;
                          case a.OPS.setFillColorN:
                            this.setFillColorN(i);
                            break;
                          case a.OPS.shadingFill:
                            this.shadingFill(i[0]);
                            break;
                          case a.OPS.setDash:
                            this.setDash(i[0], i[1]);
                            break;
                          case a.OPS.setRenderingIntent:
                            this.setRenderingIntent(i[0]);
                            break;
                          case a.OPS.setFlatness:
                            this.setFlatness(i[0]);
                            break;
                          case a.OPS.setGState:
                            this.setGState(i[0]);
                            break;
                          case a.OPS.fill:
                            this.fill();
                            break;
                          case a.OPS.eoFill:
                            this.eoFill();
                            break;
                          case a.OPS.stroke:
                            this.stroke();
                            break;
                          case a.OPS.fillStroke:
                            this.fillStroke();
                            break;
                          case a.OPS.eoFillStroke:
                            this.eoFillStroke();
                            break;
                          case a.OPS.clip:
                            this.clip('nonzero');
                            break;
                          case a.OPS.eoClip:
                            this.clip('evenodd');
                            break;
                          case a.OPS.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;
                          case a.OPS.paintImageXObject:
                            this.paintImageXObject(i[0]);
                            break;
                          case a.OPS.paintInlineImageXObject:
                            this.paintInlineImageXObject(i[0]);
                            break;
                          case a.OPS.paintImageMaskXObject:
                            this.paintImageMaskXObject(i[0]);
                            break;
                          case a.OPS.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(i[0], i[1]);
                            break;
                          case a.OPS.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;
                          case a.OPS.closePath:
                            this.closePath();
                            break;
                          case a.OPS.closeStroke:
                            this.closeStroke();
                            break;
                          case a.OPS.closeFillStroke:
                            this.closeFillStroke();
                            break;
                          case a.OPS.closeEOFillStroke:
                            this.closeEOFillStroke();
                            break;
                          case a.OPS.nextLine:
                            this.nextLine();
                            break;
                          case a.OPS.transform:
                            this.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
                            break;
                          case a.OPS.constructPath:
                            this.constructPath(i[0], i[1]);
                            break;
                          case a.OPS.endPath:
                            this.endPath();
                            break;
                          case 92:
                            this.group(e.items);
                            break;
                          default:
                            (0, a.warn)('Unimplemented operator '.concat(t));
                        }
                      }
                    }
                    setWordSpacing(t) {
                      this.current.wordSpacing = t;
                    }
                    setCharSpacing(t) {
                      this.current.charSpacing = t;
                    }
                    nextLine() {
                      this.moveText(0, this.current.leading);
                    }
                    setTextMatrix(t, e, s, i, a, n) {
                      const r = this.current;
                      (r.textMatrix = r.lineMatrix = [t, e, s, i, a, n]),
                        (r.textMatrixScale = Math.hypot(t, e)),
                        (r.x = r.lineX = 0),
                        (r.y = r.lineY = 0),
                        (r.xcoords = []),
                        (r.ycoords = []),
                        (r.tspan = this.svgFactory.createElement('svg:tspan')),
                        r.tspan.setAttributeNS(
                          null,
                          'font-family',
                          r.fontFamily
                        ),
                        r.tspan.setAttributeNS(
                          null,
                          'font-size',
                          ''.concat(p(r.fontSize), 'px')
                        ),
                        r.tspan.setAttributeNS(null, 'y', p(-r.y)),
                        (r.txtElement =
                          this.svgFactory.createElement('svg:text')),
                        r.txtElement.append(r.tspan);
                    }
                    beginText() {
                      const t = this.current;
                      (t.x = t.lineX = 0),
                        (t.y = t.lineY = 0),
                        (t.textMatrix = a.IDENTITY_MATRIX),
                        (t.lineMatrix = a.IDENTITY_MATRIX),
                        (t.textMatrixScale = 1),
                        (t.tspan = this.svgFactory.createElement('svg:tspan')),
                        (t.txtElement =
                          this.svgFactory.createElement('svg:text')),
                        (t.txtgrp = this.svgFactory.createElement('svg:g')),
                        (t.xcoords = []),
                        (t.ycoords = []);
                    }
                    moveText(t, e) {
                      const s = this.current;
                      (s.x = s.lineX += t),
                        (s.y = s.lineY += e),
                        (s.xcoords = []),
                        (s.ycoords = []),
                        (s.tspan = this.svgFactory.createElement('svg:tspan')),
                        s.tspan.setAttributeNS(
                          null,
                          'font-family',
                          s.fontFamily
                        ),
                        s.tspan.setAttributeNS(
                          null,
                          'font-size',
                          ''.concat(p(s.fontSize), 'px')
                        ),
                        s.tspan.setAttributeNS(null, 'y', p(-s.y));
                    }
                    showText(t) {
                      const e = this.current,
                        s = e.font,
                        i = e.fontSize;
                      if (0 === i) return;
                      const l = e.fontSizeScale,
                        c = e.charSpacing,
                        d = e.wordSpacing,
                        h = e.fontDirection,
                        u = e.textHScale * h,
                        g = s.vertical,
                        v = g ? 1 : -1,
                        f = s.defaultVMetrics,
                        m = i * e.fontMatrix[0];
                      let b = 0;
                      for (const a of t) {
                        if (null === a) {
                          b += h * d;
                          continue;
                        }
                        if ('number' === typeof a) {
                          b += (v * a * i) / 1e3;
                          continue;
                        }
                        const t = (a.isSpace ? d : 0) + c,
                          n = a.fontChar;
                        let r,
                          o,
                          u = a.width;
                        if (g) {
                          let t;
                          const e = a.vmetric || f;
                          (t = a.vmetric ? e[1] : 0.5 * u), (t = -t * m);
                          const s = e[2] * m;
                          (u = e ? -e[0] : u), (r = t / l), (o = (b + s) / l);
                        } else (r = b / l), (o = 0);
                        (a.isInFont || s.missingFile) &&
                          (e.xcoords.push(e.x + r),
                          g && e.ycoords.push(-e.y + o),
                          (e.tspan.textContent += n)),
                          (b += g ? u * m - t * h : u * m + t * h);
                      }
                      e.tspan.setAttributeNS(
                        null,
                        'x',
                        e.xcoords.map(p).join(' ')
                      ),
                        g
                          ? e.tspan.setAttributeNS(
                              null,
                              'y',
                              e.ycoords.map(p).join(' ')
                            )
                          : e.tspan.setAttributeNS(null, 'y', p(-e.y)),
                        g ? (e.y -= b) : (e.x += b * u),
                        e.tspan.setAttributeNS(
                          null,
                          'font-family',
                          e.fontFamily
                        ),
                        e.tspan.setAttributeNS(
                          null,
                          'font-size',
                          ''.concat(p(e.fontSize), 'px')
                        ),
                        e.fontStyle !== n &&
                          e.tspan.setAttributeNS(
                            null,
                            'font-style',
                            e.fontStyle
                          ),
                        e.fontWeight !== r &&
                          e.tspan.setAttributeNS(
                            null,
                            'font-weight',
                            e.fontWeight
                          );
                      const P =
                        e.textRenderingMode &
                        a.TextRenderingMode.FILL_STROKE_MASK;
                      if (
                        (P === a.TextRenderingMode.FILL ||
                        P === a.TextRenderingMode.FILL_STROKE
                          ? (e.fillColor !== o &&
                              e.tspan.setAttributeNS(null, 'fill', e.fillColor),
                            e.fillAlpha < 1 &&
                              e.tspan.setAttributeNS(
                                null,
                                'fill-opacity',
                                e.fillAlpha
                              ))
                          : e.textRenderingMode ===
                            a.TextRenderingMode.ADD_TO_PATH
                          ? e.tspan.setAttributeNS(null, 'fill', 'transparent')
                          : e.tspan.setAttributeNS(null, 'fill', 'none'),
                        P === a.TextRenderingMode.STROKE ||
                          P === a.TextRenderingMode.FILL_STROKE)
                      ) {
                        const t = 1 / (e.textMatrixScale || 1);
                        this._setStrokeAttributes(e.tspan, t);
                      }
                      let A = e.textMatrix;
                      0 !== e.textRise &&
                        ((A = A.slice()), (A[5] += e.textRise)),
                        e.txtElement.setAttributeNS(
                          null,
                          'transform',
                          ''.concat(_(A), ' scale(').concat(p(u), ', -1)')
                        ),
                        e.txtElement.setAttributeNS(
                          'http://www.w3.org/XML/1998/namespace',
                          'xml:space',
                          'preserve'
                        ),
                        e.txtElement.append(e.tspan),
                        e.txtgrp.append(e.txtElement),
                        this._ensureTransformGroup().append(e.txtElement);
                    }
                    setLeadingMoveText(t, e) {
                      this.setLeading(-e), this.moveText(t, e);
                    }
                    addFontStyle(t) {
                      if (!t.data)
                        throw new Error(
                          'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
                        );
                      this.cssStyle ||
                        ((this.cssStyle =
                          this.svgFactory.createElement('svg:style')),
                        this.cssStyle.setAttributeNS(null, 'type', 'text/css'),
                        this.defs.append(this.cssStyle));
                      const e = d(t.data, t.mimetype, this.forceDataSchema);
                      this.cssStyle.textContent +=
                        '@font-face { font-family: "'.concat(
                          t.loadedName,
                          '";'
                        ) + ' src: url('.concat(e, '); }\n');
                    }
                    setFont(t) {
                      const e = this.current,
                        s = this.commonObjs.get(t[0]);
                      let i = t[1];
                      (e.font = s),
                        !this.embedFonts ||
                          s.missingFile ||
                          this.embeddedFonts[s.loadedName] ||
                          (this.addFontStyle(s),
                          (this.embeddedFonts[s.loadedName] = s)),
                        (e.fontMatrix = s.fontMatrix || a.FONT_IDENTITY_MATRIX);
                      let n = 'normal';
                      s.black ? (n = '900') : s.bold && (n = 'bold');
                      const r = s.italic ? 'italic' : 'normal';
                      i < 0
                        ? ((i = -i), (e.fontDirection = -1))
                        : (e.fontDirection = 1),
                        (e.fontSize = i),
                        (e.fontFamily = s.loadedName),
                        (e.fontWeight = n),
                        (e.fontStyle = r),
                        (e.tspan = this.svgFactory.createElement('svg:tspan')),
                        e.tspan.setAttributeNS(null, 'y', p(-e.y)),
                        (e.xcoords = []),
                        (e.ycoords = []);
                    }
                    endText() {
                      var t;
                      const e = this.current;
                      e.textRenderingMode &
                        a.TextRenderingMode.ADD_TO_PATH_FLAG &&
                        null !== (t = e.txtElement) &&
                        void 0 !== t &&
                        t.hasChildNodes() &&
                        ((e.element = e.txtElement),
                        this.clip('nonzero'),
                        this.endPath());
                    }
                    setLineWidth(t) {
                      t > 0 && (this.current.lineWidth = t);
                    }
                    setLineCap(t) {
                      this.current.lineCap = l[t];
                    }
                    setLineJoin(t) {
                      this.current.lineJoin = c[t];
                    }
                    setMiterLimit(t) {
                      this.current.miterLimit = t;
                    }
                    setStrokeAlpha(t) {
                      this.current.strokeAlpha = t;
                    }
                    setStrokeRGBColor(t, e, s) {
                      this.current.strokeColor = a.Util.makeHexColor(t, e, s);
                    }
                    setFillAlpha(t) {
                      this.current.fillAlpha = t;
                    }
                    setFillRGBColor(t, e, s) {
                      (this.current.fillColor = a.Util.makeHexColor(t, e, s)),
                        (this.current.tspan =
                          this.svgFactory.createElement('svg:tspan')),
                        (this.current.xcoords = []),
                        (this.current.ycoords = []);
                    }
                    setStrokeColorN(t) {
                      this.current.strokeColor = this._makeColorN_Pattern(t);
                    }
                    setFillColorN(t) {
                      this.current.fillColor = this._makeColorN_Pattern(t);
                    }
                    shadingFill(t) {
                      const { width: e, height: s } = this.viewport,
                        i = a.Util.inverseTransform(this.transformMatrix),
                        [n, r, o, l] = a.Util.getAxialAlignedBoundingBox(
                          [0, 0, e, s],
                          i
                        ),
                        c = this.svgFactory.createElement('svg:rect');
                      c.setAttributeNS(null, 'x', n),
                        c.setAttributeNS(null, 'y', r),
                        c.setAttributeNS(null, 'width', o - n),
                        c.setAttributeNS(null, 'height', l - r),
                        c.setAttributeNS(
                          null,
                          'fill',
                          this._makeShadingPattern(t)
                        ),
                        this.current.fillAlpha < 1 &&
                          c.setAttributeNS(
                            null,
                            'fill-opacity',
                            this.current.fillAlpha
                          ),
                        this._ensureTransformGroup().append(c);
                    }
                    _makeColorN_Pattern(t) {
                      return 'TilingPattern' === t[0]
                        ? this._makeTilingPattern(t)
                        : this._makeShadingPattern(t);
                    }
                    _makeTilingPattern(t) {
                      const e = t[1],
                        s = t[2],
                        i = t[3] || a.IDENTITY_MATRIX,
                        [n, r, o, l] = t[4],
                        c = t[5],
                        d = t[6],
                        h = t[7],
                        u = 'shading'.concat(f++),
                        [p, _, g, v] = a.Util.normalizeRect([
                          ...a.Util.applyTransform([n, r], i),
                          ...a.Util.applyTransform([o, l], i)
                        ]),
                        [m, b] = a.Util.singularValueDecompose2dScale(i),
                        P = c * m,
                        A = d * b,
                        F = this.svgFactory.createElement('svg:pattern');
                      F.setAttributeNS(null, 'id', u),
                        F.setAttributeNS(
                          null,
                          'patternUnits',
                          'userSpaceOnUse'
                        ),
                        F.setAttributeNS(null, 'width', P),
                        F.setAttributeNS(null, 'height', A),
                        F.setAttributeNS(null, 'x', ''.concat(p)),
                        F.setAttributeNS(null, 'y', ''.concat(_));
                      const S = this.svg,
                        y = this.transformMatrix,
                        w = this.current.fillColor,
                        x = this.current.strokeColor,
                        C = this.svgFactory.create(g - p, v - _);
                      if (
                        ((this.svg = C), (this.transformMatrix = i), 2 === h)
                      ) {
                        const t = a.Util.makeHexColor(...e);
                        (this.current.fillColor = t),
                          (this.current.strokeColor = t);
                      }
                      return (
                        this.executeOpTree(this.convertOpList(s)),
                        (this.svg = S),
                        (this.transformMatrix = y),
                        (this.current.fillColor = w),
                        (this.current.strokeColor = x),
                        F.append(C.childNodes[0]),
                        this.defs.append(F),
                        'url(#'.concat(u, ')')
                      );
                    }
                    _makeShadingPattern(t) {
                      switch (
                        ('string' === typeof t && (t = this.objs.get(t)), t[0])
                      ) {
                        case 'RadialAxial':
                          const e = 'shading'.concat(f++),
                            s = t[3];
                          let i;
                          switch (t[1]) {
                            case 'axial':
                              const s = t[4],
                                a = t[5];
                              (i =
                                this.svgFactory.createElement(
                                  'svg:linearGradient'
                                )),
                                i.setAttributeNS(null, 'id', e),
                                i.setAttributeNS(
                                  null,
                                  'gradientUnits',
                                  'userSpaceOnUse'
                                ),
                                i.setAttributeNS(null, 'x1', s[0]),
                                i.setAttributeNS(null, 'y1', s[1]),
                                i.setAttributeNS(null, 'x2', a[0]),
                                i.setAttributeNS(null, 'y2', a[1]);
                              break;
                            case 'radial':
                              const n = t[4],
                                r = t[5],
                                o = t[6],
                                l = t[7];
                              (i =
                                this.svgFactory.createElement(
                                  'svg:radialGradient'
                                )),
                                i.setAttributeNS(null, 'id', e),
                                i.setAttributeNS(
                                  null,
                                  'gradientUnits',
                                  'userSpaceOnUse'
                                ),
                                i.setAttributeNS(null, 'cx', r[0]),
                                i.setAttributeNS(null, 'cy', r[1]),
                                i.setAttributeNS(null, 'r', l),
                                i.setAttributeNS(null, 'fx', n[0]),
                                i.setAttributeNS(null, 'fy', n[1]),
                                i.setAttributeNS(null, 'fr', o);
                              break;
                            default:
                              throw new Error(
                                'Unknown RadialAxial type: '.concat(t[1])
                              );
                          }
                          for (const t of s) {
                            const e = this.svgFactory.createElement('svg:stop');
                            e.setAttributeNS(null, 'offset', t[0]),
                              e.setAttributeNS(null, 'stop-color', t[1]),
                              i.append(e);
                          }
                          return this.defs.append(i), 'url(#'.concat(e, ')');
                        case 'Mesh':
                          return (
                            (0, a.warn)('Unimplemented pattern Mesh'), null
                          );
                        case 'Dummy':
                          return 'hotpink';
                        default:
                          throw new Error('Unknown IR type: '.concat(t[0]));
                      }
                    }
                    setDash(t, e) {
                      (this.current.dashArray = t),
                        (this.current.dashPhase = e);
                    }
                    constructPath(t, e) {
                      const s = this.current;
                      let i = s.x,
                        n = s.y,
                        r = [],
                        o = 0;
                      for (const l of t)
                        switch (0 | l) {
                          case a.OPS.rectangle:
                            (i = e[o++]), (n = e[o++]);
                            const t = i + e[o++],
                              s = n + e[o++];
                            r.push(
                              'M',
                              p(i),
                              p(n),
                              'L',
                              p(t),
                              p(n),
                              'L',
                              p(t),
                              p(s),
                              'L',
                              p(i),
                              p(s),
                              'Z'
                            );
                            break;
                          case a.OPS.moveTo:
                            (i = e[o++]), (n = e[o++]), r.push('M', p(i), p(n));
                            break;
                          case a.OPS.lineTo:
                            (i = e[o++]), (n = e[o++]), r.push('L', p(i), p(n));
                            break;
                          case a.OPS.curveTo:
                            (i = e[o + 4]),
                              (n = e[o + 5]),
                              r.push(
                                'C',
                                p(e[o]),
                                p(e[o + 1]),
                                p(e[o + 2]),
                                p(e[o + 3]),
                                p(i),
                                p(n)
                              ),
                              (o += 6);
                            break;
                          case a.OPS.curveTo2:
                            r.push(
                              'C',
                              p(i),
                              p(n),
                              p(e[o]),
                              p(e[o + 1]),
                              p(e[o + 2]),
                              p(e[o + 3])
                            ),
                              (i = e[o + 2]),
                              (n = e[o + 3]),
                              (o += 4);
                            break;
                          case a.OPS.curveTo3:
                            (i = e[o + 2]),
                              (n = e[o + 3]),
                              r.push(
                                'C',
                                p(e[o]),
                                p(e[o + 1]),
                                p(i),
                                p(n),
                                p(i),
                                p(n)
                              ),
                              (o += 4);
                            break;
                          case a.OPS.closePath:
                            r.push('Z');
                        }
                      (r = r.join(' ')),
                        s.path &&
                        t.length > 0 &&
                        t[0] !== a.OPS.rectangle &&
                        t[0] !== a.OPS.moveTo
                          ? (r = s.path.getAttributeNS(null, 'd') + r)
                          : ((s.path =
                              this.svgFactory.createElement('svg:path')),
                            this._ensureTransformGroup().append(s.path)),
                        s.path.setAttributeNS(null, 'd', r),
                        s.path.setAttributeNS(null, 'fill', 'none'),
                        (s.element = s.path),
                        s.setCurrentPoint(i, n);
                    }
                    endPath() {
                      const t = this.current;
                      if (((t.path = null), !this.pendingClip)) return;
                      if (!t.element) return void (this.pendingClip = null);
                      const e = 'clippath'.concat(g++),
                        s = this.svgFactory.createElement('svg:clipPath');
                      s.setAttributeNS(null, 'id', e),
                        s.setAttributeNS(
                          null,
                          'transform',
                          _(this.transformMatrix)
                        );
                      const i = t.element.cloneNode(!0);
                      if (
                        ('evenodd' === this.pendingClip
                          ? i.setAttributeNS(null, 'clip-rule', 'evenodd')
                          : i.setAttributeNS(null, 'clip-rule', 'nonzero'),
                        (this.pendingClip = null),
                        s.append(i),
                        this.defs.append(s),
                        t.activeClipUrl)
                      ) {
                        t.clipGroup = null;
                        for (const t of this.extraStack) t.clipGroup = null;
                        s.setAttributeNS(null, 'clip-path', t.activeClipUrl);
                      }
                      (t.activeClipUrl = 'url(#'.concat(e, ')')),
                        (this.tgrp = null);
                    }
                    clip(t) {
                      this.pendingClip = t;
                    }
                    closePath() {
                      const t = this.current;
                      if (t.path) {
                        const e = ''.concat(
                          t.path.getAttributeNS(null, 'd'),
                          'Z'
                        );
                        t.path.setAttributeNS(null, 'd', e);
                      }
                    }
                    setLeading(t) {
                      this.current.leading = -t;
                    }
                    setTextRise(t) {
                      this.current.textRise = t;
                    }
                    setTextRenderingMode(t) {
                      this.current.textRenderingMode = t;
                    }
                    setHScale(t) {
                      this.current.textHScale = t / 100;
                    }
                    setRenderingIntent(t) {}
                    setFlatness(t) {}
                    setGState(t) {
                      for (const [e, s] of t)
                        switch (e) {
                          case 'LW':
                            this.setLineWidth(s);
                            break;
                          case 'LC':
                            this.setLineCap(s);
                            break;
                          case 'LJ':
                            this.setLineJoin(s);
                            break;
                          case 'ML':
                            this.setMiterLimit(s);
                            break;
                          case 'D':
                            this.setDash(s[0], s[1]);
                            break;
                          case 'RI':
                            this.setRenderingIntent(s);
                            break;
                          case 'FL':
                            this.setFlatness(s);
                            break;
                          case 'Font':
                            this.setFont(s);
                            break;
                          case 'CA':
                            this.setStrokeAlpha(s);
                            break;
                          case 'ca':
                            this.setFillAlpha(s);
                            break;
                          default:
                            (0, a.warn)(
                              'Unimplemented graphic state operator '.concat(e)
                            );
                        }
                    }
                    fill() {
                      const t = this.current;
                      t.element &&
                        (t.element.setAttributeNS(null, 'fill', t.fillColor),
                        t.element.setAttributeNS(
                          null,
                          'fill-opacity',
                          t.fillAlpha
                        ),
                        this.endPath());
                    }
                    stroke() {
                      const t = this.current;
                      t.element &&
                        (this._setStrokeAttributes(t.element),
                        t.element.setAttributeNS(null, 'fill', 'none'),
                        this.endPath());
                    }
                    _setStrokeAttributes(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                      const s = this.current;
                      let i = s.dashArray;
                      1 !== e &&
                        i.length > 0 &&
                        (i = i.map(function (t) {
                          return e * t;
                        })),
                        t.setAttributeNS(null, 'stroke', s.strokeColor),
                        t.setAttributeNS(null, 'stroke-opacity', s.strokeAlpha),
                        t.setAttributeNS(
                          null,
                          'stroke-miterlimit',
                          p(s.miterLimit)
                        ),
                        t.setAttributeNS(null, 'stroke-linecap', s.lineCap),
                        t.setAttributeNS(null, 'stroke-linejoin', s.lineJoin),
                        t.setAttributeNS(
                          null,
                          'stroke-width',
                          p(e * s.lineWidth) + 'px'
                        ),
                        t.setAttributeNS(
                          null,
                          'stroke-dasharray',
                          i.map(p).join(' ')
                        ),
                        t.setAttributeNS(
                          null,
                          'stroke-dashoffset',
                          p(e * s.dashPhase) + 'px'
                        );
                    }
                    eoFill() {
                      var t;
                      null === (t = this.current.element) ||
                        void 0 === t ||
                        t.setAttributeNS(null, 'fill-rule', 'evenodd'),
                        this.fill();
                    }
                    fillStroke() {
                      this.stroke(), this.fill();
                    }
                    eoFillStroke() {
                      var t;
                      null === (t = this.current.element) ||
                        void 0 === t ||
                        t.setAttributeNS(null, 'fill-rule', 'evenodd'),
                        this.fillStroke();
                    }
                    closeStroke() {
                      this.closePath(), this.stroke();
                    }
                    closeFillStroke() {
                      this.closePath(), this.fillStroke();
                    }
                    closeEOFillStroke() {
                      this.closePath(), this.eoFillStroke();
                    }
                    paintSolidColorImageMask() {
                      const t = this.svgFactory.createElement('svg:rect');
                      t.setAttributeNS(null, 'x', '0'),
                        t.setAttributeNS(null, 'y', '0'),
                        t.setAttributeNS(null, 'width', '1px'),
                        t.setAttributeNS(null, 'height', '1px'),
                        t.setAttributeNS(null, 'fill', this.current.fillColor),
                        this._ensureTransformGroup().append(t);
                    }
                    paintImageXObject(t) {
                      const e = this.getObject(t);
                      e
                        ? this.paintInlineImageXObject(e)
                        : (0, a.warn)(
                            'Dependent image with object ID '.concat(
                              t,
                              ' is not ready yet'
                            )
                          );
                    }
                    paintInlineImageXObject(t, e) {
                      const s = t.width,
                        i = t.height,
                        a = h(t, this.forceDataSchema, !!e),
                        n = this.svgFactory.createElement('svg:rect');
                      n.setAttributeNS(null, 'x', '0'),
                        n.setAttributeNS(null, 'y', '0'),
                        n.setAttributeNS(null, 'width', p(s)),
                        n.setAttributeNS(null, 'height', p(i)),
                        (this.current.element = n),
                        this.clip('nonzero');
                      const r = this.svgFactory.createElement('svg:image');
                      r.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'xlink:href',
                        a
                      ),
                        r.setAttributeNS(null, 'x', '0'),
                        r.setAttributeNS(null, 'y', p(-i)),
                        r.setAttributeNS(null, 'width', p(s) + 'px'),
                        r.setAttributeNS(null, 'height', p(i) + 'px'),
                        r.setAttributeNS(
                          null,
                          'transform',
                          'scale('.concat(p(1 / s), ' ').concat(p(-1 / i), ')')
                        ),
                        e
                          ? e.append(r)
                          : this._ensureTransformGroup().append(r);
                    }
                    paintImageMaskXObject(t) {
                      const e = this.getObject(t.data, t);
                      if (e.bitmap)
                        return void (0, a.warn)(
                          'paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.'
                        );
                      const s = this.current,
                        i = e.width,
                        n = e.height,
                        r = s.fillColor;
                      s.maskId = 'mask'.concat(v++);
                      const o = this.svgFactory.createElement('svg:mask');
                      o.setAttributeNS(null, 'id', s.maskId);
                      const l = this.svgFactory.createElement('svg:rect');
                      l.setAttributeNS(null, 'x', '0'),
                        l.setAttributeNS(null, 'y', '0'),
                        l.setAttributeNS(null, 'width', p(i)),
                        l.setAttributeNS(null, 'height', p(n)),
                        l.setAttributeNS(null, 'fill', r),
                        l.setAttributeNS(
                          null,
                          'mask',
                          'url(#'.concat(s.maskId, ')')
                        ),
                        this.defs.append(o),
                        this._ensureTransformGroup().append(l),
                        this.paintInlineImageXObject(e, o);
                    }
                    paintFormXObjectBegin(t, e) {
                      if (
                        (Array.isArray(t) &&
                          6 === t.length &&
                          this.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
                        e)
                      ) {
                        const t = e[2] - e[0],
                          s = e[3] - e[1],
                          i = this.svgFactory.createElement('svg:rect');
                        i.setAttributeNS(null, 'x', e[0]),
                          i.setAttributeNS(null, 'y', e[1]),
                          i.setAttributeNS(null, 'width', p(t)),
                          i.setAttributeNS(null, 'height', p(s)),
                          (this.current.element = i),
                          this.clip('nonzero'),
                          this.endPath();
                      }
                    }
                    paintFormXObjectEnd() {}
                    _initialize(t) {
                      const e = this.svgFactory.create(t.width, t.height),
                        s = this.svgFactory.createElement('svg:defs');
                      e.append(s), (this.defs = s);
                      const i = this.svgFactory.createElement('svg:g');
                      return (
                        i.setAttributeNS(null, 'transform', _(t.transform)),
                        e.append(i),
                        (this.svg = i),
                        e
                      );
                    }
                    _ensureClipGroup() {
                      if (!this.current.clipGroup) {
                        const t = this.svgFactory.createElement('svg:g');
                        t.setAttributeNS(
                          null,
                          'clip-path',
                          this.current.activeClipUrl
                        ),
                          this.svg.append(t),
                          (this.current.clipGroup = t);
                      }
                      return this.current.clipGroup;
                    }
                    _ensureTransformGroup() {
                      return (
                        this.tgrp ||
                          ((this.tgrp = this.svgFactory.createElement('svg:g')),
                          this.tgrp.setAttributeNS(
                            null,
                            'transform',
                            _(this.transformMatrix)
                          ),
                          this.current.activeClipUrl
                            ? this._ensureClipGroup().append(this.tgrp)
                            : this.svg.append(this.tgrp)),
                        this.tgrp
                      );
                    }
                  };
                },
                (t, e) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.XfaText = void 0);
                  class s {
                    static textContent(t) {
                      const e = [],
                        i = { items: e, styles: Object.create(null) };
                      return (
                        (function t(i) {
                          var a;
                          if (!i) return;
                          let n = null;
                          const r = i.name;
                          if ('#text' === r) n = i.value;
                          else {
                            if (!s.shouldBuildText(r)) return;
                            null !== i &&
                            void 0 !== i &&
                            null !== (a = i.attributes) &&
                            void 0 !== a &&
                            a.textContent
                              ? (n = i.attributes.textContent)
                              : i.value && (n = i.value);
                          }
                          if ((null !== n && e.push({ str: n }), i.children))
                            for (const e of i.children) t(e);
                        })(t),
                        i
                      );
                    }
                    static shouldBuildText(t) {
                      return !(
                        'textarea' === t ||
                        'input' === t ||
                        'option' === t ||
                        'select' === t
                      );
                    }
                  }
                  e.XfaText = s;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.TextLayerRenderTask = void 0),
                    (e.renderTextLayer = function (t) {
                      t.textContentSource ||
                        (!t.textContent && !t.textContentStream) ||
                        ((0, a.deprecated)(
                          'The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead.'
                        ),
                        (t.textContentSource =
                          t.textContent || t.textContentStream));
                      const { container: e, viewport: s } = t,
                        i = getComputedStyle(e),
                        n = i.getPropertyValue('visibility'),
                        r = parseFloat(i.getPropertyValue('--scale-factor'));
                      'visible' === n &&
                        (!r || Math.abs(r - s.scale) > 1e-5) &&
                        console.error(
                          'The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.'
                        );
                      const o = new h(t);
                      return o._render(), o;
                    }),
                    (e.updateTextLayer = function (t) {
                      let {
                        container: e,
                        viewport: s,
                        textDivs: i,
                        textDivProperties: n,
                        isOffscreenCanvasSupported: r,
                        mustRotate: o = !0,
                        mustRescale: c = !0
                      } = t;
                      if (
                        (o &&
                          (0, a.setLayerDimensions)(e, {
                            rotation: s.rotation
                          }),
                        c)
                      ) {
                        const t = l(0, r),
                          e = {
                            prevFontSize: null,
                            prevFontFamily: null,
                            div: null,
                            scale: s.scale * (globalThis.devicePixelRatio || 1),
                            properties: null,
                            ctx: t
                          };
                        for (const s of i)
                          (e.properties = n.get(s)), (e.div = s), d(e);
                      }
                    });
                  var i = s(1),
                    a = s(6);
                  const n = 30,
                    r = 0.8,
                    o = new Map();
                  function l(t, e) {
                    let s;
                    if (e && i.FeatureTest.isOffscreenCanvasSupported)
                      s = new OffscreenCanvas(t, t).getContext('2d', {
                        alpha: !1
                      });
                    else {
                      const e = document.createElement('canvas');
                      (e.width = e.height = t),
                        (s = e.getContext('2d', { alpha: !1 }));
                    }
                    return s;
                  }
                  function c(t, e, s) {
                    const a = document.createElement('span'),
                      c = {
                        angle: 0,
                        canvasWidth: 0,
                        hasText: '' !== e.str,
                        hasEOL: e.hasEOL,
                        fontSize: 0
                      };
                    t._textDivs.push(a);
                    const d = i.Util.transform(t._transform, e.transform);
                    let h = Math.atan2(d[1], d[0]);
                    const u = s[e.fontName];
                    u.vertical && (h += Math.PI / 2);
                    const p = Math.hypot(d[2], d[3]),
                      _ =
                        p *
                        (function (t, e) {
                          const s = o.get(t);
                          if (s) return s;
                          const i = l(n, e);
                          i.font = ''.concat(n, 'px ').concat(t);
                          const a = i.measureText('');
                          let c = a.fontBoundingBoxAscent,
                            d = Math.abs(a.fontBoundingBoxDescent);
                          if (c) {
                            const e = c / (c + d);
                            return (
                              o.set(t, e),
                              (i.canvas.width = i.canvas.height = 0),
                              e
                            );
                          }
                          (i.strokeStyle = 'red'),
                            i.clearRect(0, 0, n, n),
                            i.strokeText('g', 0, 0);
                          let h = i.getImageData(0, 0, n, n).data;
                          d = 0;
                          for (let r = h.length - 1 - 3; r >= 0; r -= 4)
                            if (h[r] > 0) {
                              d = Math.ceil(r / 4 / n);
                              break;
                            }
                          i.clearRect(0, 0, n, n),
                            i.strokeText('A', 0, n),
                            (h = i.getImageData(0, 0, n, n).data),
                            (c = 0);
                          for (let r = 0, o = h.length; r < o; r += 4)
                            if (h[r] > 0) {
                              c = n - Math.floor(r / 4 / n);
                              break;
                            }
                          if (((i.canvas.width = i.canvas.height = 0), c)) {
                            const e = c / (c + d);
                            return o.set(t, e), e;
                          }
                          return o.set(t, r), r;
                        })(u.fontFamily, t._isOffscreenCanvasSupported);
                    let g, v;
                    0 === h
                      ? ((g = d[4]), (v = d[5] - _))
                      : ((g = d[4] + _ * Math.sin(h)),
                        (v = d[5] - _ * Math.cos(h)));
                    const f = 'calc(var(--scale-factor)*',
                      m = a.style;
                    t._container === t._rootContainer
                      ? ((m.left = ''.concat(
                          ((100 * g) / t._pageWidth).toFixed(2),
                          '%'
                        )),
                        (m.top = ''.concat(
                          ((100 * v) / t._pageHeight).toFixed(2),
                          '%'
                        )))
                      : ((m.left = ''.concat(f).concat(g.toFixed(2), 'px)')),
                        (m.top = ''.concat(f).concat(v.toFixed(2), 'px)'))),
                      (m.fontSize = ''.concat(f).concat(p.toFixed(2), 'px)')),
                      (m.fontFamily = u.fontFamily),
                      (c.fontSize = p),
                      a.setAttribute('role', 'presentation'),
                      (a.textContent = e.str),
                      (a.dir = e.dir),
                      t._fontInspectorEnabled &&
                        (a.dataset.fontName = e.fontName),
                      0 !== h && (c.angle = h * (180 / Math.PI));
                    let b = !1;
                    if (e.str.length > 1) b = !0;
                    else if (
                      ' ' !== e.str &&
                      e.transform[0] !== e.transform[3]
                    ) {
                      const t = Math.abs(e.transform[0]),
                        s = Math.abs(e.transform[3]);
                      t !== s &&
                        Math.max(t, s) / Math.min(t, s) > 1.5 &&
                        (b = !0);
                    }
                    b && (c.canvasWidth = u.vertical ? e.height : e.width),
                      t._textDivProperties.set(a, c),
                      t._isReadableStream && t._layoutText(a);
                  }
                  function d(t) {
                    const {
                        div: e,
                        scale: s,
                        properties: i,
                        ctx: a,
                        prevFontSize: n,
                        prevFontFamily: r
                      } = t,
                      { style: o } = e;
                    let l = '';
                    if (0 !== i.canvasWidth && i.hasText) {
                      const { fontFamily: c } = o,
                        { canvasWidth: d, fontSize: h } = i;
                      (n === h && r === c) ||
                        ((a.font = ''.concat(h * s, 'px ').concat(c)),
                        (t.prevFontSize = h),
                        (t.prevFontFamily = c));
                      const { width: u } = a.measureText(e.textContent);
                      u > 0 && (l = 'scaleX('.concat((d * s) / u, ')'));
                    }
                    0 !== i.angle &&
                      (l = 'rotate('.concat(i.angle, 'deg) ').concat(l)),
                      l.length > 0 && (o.transform = l);
                  }
                  class h {
                    constructor(t) {
                      var e;
                      let {
                        textContentSource: s,
                        container: n,
                        viewport: r,
                        textDivs: o,
                        textDivProperties: c,
                        textContentItemsStr: d,
                        isOffscreenCanvasSupported: h
                      } = t;
                      (this._textContentSource = s),
                        (this._isReadableStream = s instanceof ReadableStream),
                        (this._container = this._rootContainer = n),
                        (this._textDivs = o || []),
                        (this._textContentItemsStr = d || []),
                        (this._isOffscreenCanvasSupported = h),
                        (this._fontInspectorEnabled = !(
                          null === (e = globalThis.FontInspector) ||
                          void 0 === e ||
                          !e.enabled
                        )),
                        (this._reader = null),
                        (this._textDivProperties = c || new WeakMap()),
                        (this._canceled = !1),
                        (this._capability = new i.PromiseCapability()),
                        (this._layoutTextParams = {
                          prevFontSize: null,
                          prevFontFamily: null,
                          div: null,
                          scale: r.scale * (globalThis.devicePixelRatio || 1),
                          properties: null,
                          ctx: l(0, h)
                        });
                      const {
                        pageWidth: u,
                        pageHeight: p,
                        pageX: _,
                        pageY: g
                      } = r.rawDims;
                      (this._transform = [1, 0, 0, -1, -_, g + p]),
                        (this._pageWidth = u),
                        (this._pageHeight = p),
                        (0, a.setLayerDimensions)(n, r),
                        this._capability.promise
                          .finally(() => {
                            this._layoutTextParams = null;
                          })
                          .catch(() => {});
                    }
                    get promise() {
                      return this._capability.promise;
                    }
                    cancel() {
                      (this._canceled = !0),
                        this._reader &&
                          (this._reader
                            .cancel(
                              new i.AbortException('TextLayer task cancelled.')
                            )
                            .catch(() => {}),
                          (this._reader = null)),
                        this._capability.reject(
                          new i.AbortException('TextLayer task cancelled.')
                        );
                    }
                    _processItems(t, e) {
                      for (const s of t)
                        if (void 0 !== s.str)
                          this._textContentItemsStr.push(s.str), c(this, s, e);
                        else if (
                          'beginMarkedContentProps' === s.type ||
                          'beginMarkedContent' === s.type
                        ) {
                          const t = this._container;
                          (this._container = document.createElement('span')),
                            this._container.classList.add('markedContent'),
                            null !== s.id &&
                              this._container.setAttribute(
                                'id',
                                ''.concat(s.id)
                              ),
                            t.append(this._container);
                        } else
                          'endMarkedContent' === s.type &&
                            (this._container = this._container.parentNode);
                    }
                    _layoutText(t) {
                      const e = (this._layoutTextParams.properties =
                        this._textDivProperties.get(t));
                      if (
                        ((this._layoutTextParams.div = t),
                        d(this._layoutTextParams),
                        e.hasText && this._container.append(t),
                        e.hasEOL)
                      ) {
                        const t = document.createElement('br');
                        t.setAttribute('role', 'presentation'),
                          this._container.append(t);
                      }
                    }
                    _render() {
                      const t = new i.PromiseCapability();
                      let e = Object.create(null);
                      if (this._isReadableStream) {
                        const s = () => {
                          this._reader.read().then((i) => {
                            let { value: a, done: n } = i;
                            n
                              ? t.resolve()
                              : (Object.assign(e, a.styles),
                                this._processItems(a.items, e),
                                s());
                          }, t.reject);
                        };
                        (this._reader = this._textContentSource.getReader()),
                          s();
                      } else {
                        if (!this._textContentSource)
                          throw new Error(
                            'No "textContentSource" parameter specified.'
                          );
                        {
                          const { items: e, styles: s } =
                            this._textContentSource;
                          this._processItems(e, s), t.resolve();
                        }
                      }
                      t.promise.then(() => {
                        (e = null),
                          (function (t) {
                            if (t._canceled) return;
                            const e = t._textDivs,
                              s = t._capability;
                            if (e.length > 1e5) s.resolve();
                            else {
                              if (!t._isReadableStream)
                                for (const s of e) t._layoutText(s);
                              s.resolve();
                            }
                          })(this);
                      }, this._capability.reject);
                    }
                  }
                  e.TextLayerRenderTask = h;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.AnnotationEditorLayer = void 0);
                  var i = s(1),
                    a = s(4),
                    n = s(28),
                    r = s(33),
                    o = s(6),
                    l = s(34),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap(),
                    m = new WeakMap(),
                    b = new WeakSet();
                  class P {
                    constructor(t) {
                      let {
                        uiManager: e,
                        pageIndex: s,
                        div: i,
                        accessibilityManager: a,
                        annotationLayer: o,
                        viewport: A,
                        l10n: F
                      } = t;
                      _classPrivateMethodInitSpec(this, b),
                        _classPrivateFieldInitSpec(this, c, void 0),
                        _classPrivateFieldInitSpec(this, d, !1),
                        _classPrivateFieldInitSpec(this, h, null),
                        _classPrivateFieldInitSpec(
                          this,
                          u,
                          this.pointerup.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          p,
                          this.pointerdown.bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, _, new Map()),
                        _classPrivateFieldInitSpec(this, g, !1),
                        _classPrivateFieldInitSpec(this, v, !1),
                        _classPrivateFieldInitSpec(this, f, !1),
                        _classPrivateFieldInitSpec(this, m, void 0);
                      const S = [n.FreeTextEditor, r.InkEditor, l.StampEditor];
                      if (!P._initialized) {
                        P._initialized = !0;
                        for (const t of S) t.initialize(F);
                      }
                      e.registerEditorTypes(S),
                        _classPrivateFieldSet(m, this, e),
                        (this.pageIndex = s),
                        (this.div = i),
                        _classPrivateFieldSet(c, this, a),
                        _classPrivateFieldSet(h, this, o),
                        (this.viewport = A),
                        _classPrivateFieldGet(m, this).addLayer(this);
                    }
                    get isEmpty() {
                      return 0 === _classPrivateFieldGet(_, this).size;
                    }
                    updateToolbar(t) {
                      _classPrivateFieldGet(m, this).updateToolbar(t);
                    }
                    updateMode() {
                      let t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : _classPrivateFieldGet(m, this).getMode();
                      _assertClassBrand(b, this, y).call(this),
                        t === i.AnnotationEditorType.INK
                          ? (this.addInkEditorIfNeeded(!1), this.disableClick())
                          : this.enableClick(),
                        t !== i.AnnotationEditorType.NONE &&
                          (this.div.classList.toggle(
                            'freeTextEditing',
                            t === i.AnnotationEditorType.FREETEXT
                          ),
                          this.div.classList.toggle(
                            'inkEditing',
                            t === i.AnnotationEditorType.INK
                          ),
                          this.div.classList.toggle(
                            'stampEditing',
                            t === i.AnnotationEditorType.STAMP
                          ),
                          (this.div.hidden = !1));
                    }
                    addInkEditorIfNeeded(t) {
                      if (
                        t ||
                        _classPrivateFieldGet(m, this).getMode() ===
                          i.AnnotationEditorType.INK
                      ) {
                        if (!t)
                          for (const t of _classPrivateFieldGet(
                            _,
                            this
                          ).values())
                            if (t.isEmpty()) return void t.setInBackground();
                        _assertClassBrand(b, this, F)
                          .call(this, { offsetX: 0, offsetY: 0 }, !1)
                          .setInBackground();
                      }
                    }
                    setEditingState(t) {
                      _classPrivateFieldGet(m, this).setEditingState(t);
                    }
                    addCommands(t) {
                      _classPrivateFieldGet(m, this).addCommands(t);
                    }
                    enable() {
                      this.div.style.pointerEvents = 'auto';
                      const t = new Set();
                      for (const s of _classPrivateFieldGet(_, this).values())
                        s.enableEditing(),
                          s.annotationElementId && t.add(s.annotationElementId);
                      if (!_classPrivateFieldGet(h, this)) return;
                      const e = _classPrivateFieldGet(
                        h,
                        this
                      ).getEditableAnnotations();
                      for (const s of e) {
                        if (
                          (s.hide(),
                          _classPrivateFieldGet(
                            m,
                            this
                          ).isDeletedAnnotationElement(s.data.id))
                        )
                          continue;
                        if (t.has(s.data.id)) continue;
                        const e = this.deserialize(s);
                        e && (this.addOrRebuild(e), e.enableEditing());
                      }
                    }
                    disable() {
                      _classPrivateFieldSet(f, this, !0),
                        (this.div.style.pointerEvents = 'none');
                      const t = new Set();
                      for (const s of _classPrivateFieldGet(_, this).values()) {
                        var e;
                        s.disableEditing(),
                          s.annotationElementId && null === s.serialize()
                            ? (null ===
                                (e = this.getEditableAnnotation(
                                  s.annotationElementId
                                )) ||
                                void 0 === e ||
                                e.show(),
                              s.remove())
                            : t.add(s.annotationElementId);
                      }
                      if (_classPrivateFieldGet(h, this)) {
                        const e = _classPrivateFieldGet(
                          h,
                          this
                        ).getEditableAnnotations();
                        for (const s of e) {
                          const { id: e } = s.data;
                          t.has(e) ||
                            _classPrivateFieldGet(
                              m,
                              this
                            ).isDeletedAnnotationElement(e) ||
                            s.show();
                        }
                      }
                      _assertClassBrand(b, this, y).call(this),
                        this.isEmpty && (this.div.hidden = !0),
                        _classPrivateFieldSet(f, this, !1);
                    }
                    getEditableAnnotation(t) {
                      var e;
                      return (
                        (null === (e = _classPrivateFieldGet(h, this)) ||
                        void 0 === e
                          ? void 0
                          : e.getEditableAnnotation(t)) || null
                      );
                    }
                    setActiveEditor(t) {
                      _classPrivateFieldGet(m, this).getActive() !== t &&
                        _classPrivateFieldGet(m, this).setActiveEditor(t);
                    }
                    enableClick() {
                      this.div.addEventListener(
                        'pointerdown',
                        _classPrivateFieldGet(p, this)
                      ),
                        this.div.addEventListener(
                          'pointerup',
                          _classPrivateFieldGet(u, this)
                        );
                    }
                    disableClick() {
                      this.div.removeEventListener(
                        'pointerdown',
                        _classPrivateFieldGet(p, this)
                      ),
                        this.div.removeEventListener(
                          'pointerup',
                          _classPrivateFieldGet(u, this)
                        );
                    }
                    attach(t) {
                      _classPrivateFieldGet(_, this).set(t.id, t);
                      const { annotationElementId: e } = t;
                      e &&
                        _classPrivateFieldGet(
                          m,
                          this
                        ).isDeletedAnnotationElement(e) &&
                        _classPrivateFieldGet(
                          m,
                          this
                        ).removeDeletedAnnotationElement(t);
                    }
                    detach(t) {
                      var e;
                      _classPrivateFieldGet(_, this).delete(t.id),
                        null === (e = _classPrivateFieldGet(c, this)) ||
                          void 0 === e ||
                          e.removePointerInTextLayer(t.contentDiv),
                        !_classPrivateFieldGet(f, this) &&
                          t.annotationElementId &&
                          _classPrivateFieldGet(
                            m,
                            this
                          ).addDeletedAnnotationElement(t);
                    }
                    remove(t) {
                      this.detach(t),
                        _classPrivateFieldGet(m, this).removeEditor(t),
                        t.div.contains(document.activeElement) &&
                          setTimeout(() => {
                            _classPrivateFieldGet(m, this).focusMainContainer();
                          }, 0),
                        t.div.remove(),
                        (t.isAttachedToDOM = !1),
                        _classPrivateFieldGet(v, this) ||
                          this.addInkEditorIfNeeded(!1);
                    }
                    changeParent(t) {
                      var e;
                      t.parent !== this &&
                        (t.annotationElementId &&
                          (_classPrivateFieldGet(
                            m,
                            this
                          ).addDeletedAnnotationElement(t.annotationElementId),
                          a.AnnotationEditor.deleteAnnotationElement(t),
                          (t.annotationElementId = null)),
                        this.attach(t),
                        null === (e = t.parent) || void 0 === e || e.detach(t),
                        t.setParent(this),
                        t.div &&
                          t.isAttachedToDOM &&
                          (t.div.remove(), this.div.append(t.div)));
                    }
                    add(t) {
                      if (
                        (this.changeParent(t),
                        _classPrivateFieldGet(m, this).addEditor(t),
                        this.attach(t),
                        !t.isAttachedToDOM)
                      ) {
                        const e = t.render();
                        this.div.append(e), (t.isAttachedToDOM = !0);
                      }
                      t.fixAndSetPosition(),
                        t.onceAdded(),
                        _classPrivateFieldGet(m, this).addToAnnotationStorage(
                          t
                        );
                    }
                    moveEditorInDOM(t) {
                      var e;
                      if (!t.isAttachedToDOM) return;
                      const { activeElement: s } = document;
                      t.div.contains(s) &&
                        ((t._focusEventsAllowed = !1),
                        setTimeout(() => {
                          t.div.contains(document.activeElement)
                            ? (t._focusEventsAllowed = !0)
                            : (t.div.addEventListener(
                                'focusin',
                                () => {
                                  t._focusEventsAllowed = !0;
                                },
                                { once: !0 }
                              ),
                              s.focus());
                        }, 0)),
                        (t._structTreeParentId =
                          null === (e = _classPrivateFieldGet(c, this)) ||
                          void 0 === e
                            ? void 0
                            : e.moveElementInDOM(
                                this.div,
                                t.div,
                                t.contentDiv,
                                !0
                              ));
                    }
                    addOrRebuild(t) {
                      t.needsToBeRebuilt() ? t.rebuild() : this.add(t);
                    }
                    addUndoableEditor(t) {
                      this.addCommands({
                        cmd: () => t._uiManager.rebuild(t),
                        undo: () => {
                          t.remove();
                        },
                        mustExec: !1
                      });
                    }
                    getNextId() {
                      return _classPrivateFieldGet(m, this).getId();
                    }
                    pasteEditor(t, e) {
                      _classPrivateFieldGet(m, this).updateToolbar(t),
                        _classPrivateFieldGet(m, this).updateMode(t);
                      const { offsetX: s, offsetY: i } = _assertClassBrand(
                          b,
                          this,
                          S
                        ).call(this),
                        a = this.getNextId(),
                        n = _assertClassBrand(b, this, A).call(this, {
                          parent: this,
                          id: a,
                          x: s,
                          y: i,
                          uiManager: _classPrivateFieldGet(m, this),
                          isCentered: !0,
                          ...e
                        });
                      n && this.add(n);
                    }
                    deserialize(t) {
                      var e;
                      switch (
                        null !== (e = t.annotationType) && void 0 !== e
                          ? e
                          : t.annotationEditorType
                      ) {
                        case i.AnnotationEditorType.FREETEXT:
                          return n.FreeTextEditor.deserialize(
                            t,
                            this,
                            _classPrivateFieldGet(m, this)
                          );
                        case i.AnnotationEditorType.INK:
                          return r.InkEditor.deserialize(
                            t,
                            this,
                            _classPrivateFieldGet(m, this)
                          );
                        case i.AnnotationEditorType.STAMP:
                          return l.StampEditor.deserialize(
                            t,
                            this,
                            _classPrivateFieldGet(m, this)
                          );
                      }
                      return null;
                    }
                    addNewEditor() {
                      _assertClassBrand(b, this, F).call(
                        this,
                        _assertClassBrand(b, this, S).call(this),
                        !0
                      );
                    }
                    setSelected(t) {
                      _classPrivateFieldGet(m, this).setSelected(t);
                    }
                    toggleSelected(t) {
                      _classPrivateFieldGet(m, this).toggleSelected(t);
                    }
                    isSelected(t) {
                      return _classPrivateFieldGet(m, this).isSelected(t);
                    }
                    unselect(t) {
                      _classPrivateFieldGet(m, this).unselect(t);
                    }
                    pointerup(t) {
                      const { isMac: e } = i.FeatureTest.platform;
                      0 !== t.button ||
                        (t.ctrlKey && e) ||
                        (t.target === this.div &&
                          _classPrivateFieldGet(g, this) &&
                          (_classPrivateFieldSet(g, this, !1),
                          _classPrivateFieldGet(d, this)
                            ? _classPrivateFieldGet(m, this).getMode() !==
                              i.AnnotationEditorType.STAMP
                              ? _assertClassBrand(b, this, F).call(this, t, !1)
                              : _classPrivateFieldGet(m, this).unselectAll()
                            : _classPrivateFieldSet(d, this, !0)));
                    }
                    pointerdown(t) {
                      if (_classPrivateFieldGet(g, this))
                        return void _classPrivateFieldSet(g, this, !1);
                      const { isMac: e } = i.FeatureTest.platform;
                      if (0 !== t.button || (t.ctrlKey && e)) return;
                      if (t.target !== this.div) return;
                      _classPrivateFieldSet(g, this, !0);
                      const s = _classPrivateFieldGet(m, this).getActive();
                      _classPrivateFieldSet(d, this, !s || s.isEmpty());
                    }
                    findNewParent(t, e, s) {
                      const i = _classPrivateFieldGet(m, this).findParent(e, s);
                      return (
                        null !== i && i !== this && (i.changeParent(t), !0)
                      );
                    }
                    destroy() {
                      var t;
                      (null ===
                        (t = _classPrivateFieldGet(m, this).getActive()) ||
                      void 0 === t
                        ? void 0
                        : t.parent) === this &&
                        (_classPrivateFieldGet(m, this).commitOrRemove(),
                        _classPrivateFieldGet(m, this).setActiveEditor(null));
                      for (const s of _classPrivateFieldGet(_, this).values()) {
                        var e;
                        null === (e = _classPrivateFieldGet(c, this)) ||
                          void 0 === e ||
                          e.removePointerInTextLayer(s.contentDiv),
                          s.setParent(null),
                          (s.isAttachedToDOM = !1),
                          s.div.remove();
                      }
                      (this.div = null),
                        _classPrivateFieldGet(_, this).clear(),
                        _classPrivateFieldGet(m, this).removeLayer(this);
                    }
                    render(t) {
                      let { viewport: e } = t;
                      (this.viewport = e),
                        (0, o.setLayerDimensions)(this.div, e);
                      for (const s of _classPrivateFieldGet(m, this).getEditors(
                        this.pageIndex
                      ))
                        this.add(s);
                      this.updateMode();
                    }
                    update(t) {
                      let { viewport: e } = t;
                      _classPrivateFieldGet(m, this).commitOrRemove(),
                        (this.viewport = e),
                        (0, o.setLayerDimensions)(this.div, {
                          rotation: e.rotation
                        }),
                        this.updateMode();
                    }
                    get pageDimensions() {
                      const { pageWidth: t, pageHeight: e } =
                        this.viewport.rawDims;
                      return [t, e];
                    }
                  }
                  function A(t) {
                    switch (_classPrivateFieldGet(m, this).getMode()) {
                      case i.AnnotationEditorType.FREETEXT:
                        return new n.FreeTextEditor(t);
                      case i.AnnotationEditorType.INK:
                        return new r.InkEditor(t);
                      case i.AnnotationEditorType.STAMP:
                        return new l.StampEditor(t);
                    }
                    return null;
                  }
                  function F(t, e) {
                    const s = this.getNextId(),
                      i = _assertClassBrand(b, this, A).call(this, {
                        parent: this,
                        id: s,
                        x: t.offsetX,
                        y: t.offsetY,
                        uiManager: _classPrivateFieldGet(m, this),
                        isCentered: e
                      });
                    return i && this.add(i), i;
                  }
                  function S() {
                    const {
                        x: t,
                        y: e,
                        width: s,
                        height: i
                      } = this.div.getBoundingClientRect(),
                      a = Math.max(0, t),
                      n = Math.max(0, e),
                      r = (a + Math.min(window.innerWidth, t + s)) / 2 - t,
                      o = (n + Math.min(window.innerHeight, e + i)) / 2 - e,
                      [l, c] =
                        this.viewport.rotation % 180 === 0 ? [r, o] : [o, r];
                    return { offsetX: l, offsetY: c };
                  }
                  function y() {
                    _classPrivateFieldSet(v, this, !0);
                    for (const t of _classPrivateFieldGet(_, this).values())
                      t.isEmpty() && t.remove();
                    _classPrivateFieldSet(v, this, !1);
                  }
                  _defineProperty(P, '_initialized', !1),
                    (e.AnnotationEditorLayer = P);
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.FreeTextEditor = void 0);
                  var a = s(1),
                    n = s(5),
                    r = s(4),
                    o = s(29),
                    l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakSet();
                  class m extends r.AnnotationEditor {
                    static get _keyboardManager() {
                      const t = m.prototype,
                        e = (t) => t.isEmpty(),
                        s = n.AnnotationEditorUIManager.TRANSLATE_SMALL,
                        i = n.AnnotationEditorUIManager.TRANSLATE_BIG;
                      return (0, a.shadow)(
                        this,
                        '_keyboardManager',
                        new n.KeyboardManager([
                          [
                            ['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'],
                            t.commitOrRemove,
                            { bubbles: !0 }
                          ],
                          [
                            [
                              'ctrl+Enter',
                              'mac+meta+Enter',
                              'Escape',
                              'mac+Escape'
                            ],
                            t.commitOrRemove
                          ],
                          [
                            ['ArrowLeft', 'mac+ArrowLeft'],
                            t._translateEmpty,
                            { args: [-s, 0], checker: e }
                          ],
                          [
                            ['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'],
                            t._translateEmpty,
                            { args: [-i, 0], checker: e }
                          ],
                          [
                            ['ArrowRight', 'mac+ArrowRight'],
                            t._translateEmpty,
                            { args: [s, 0], checker: e }
                          ],
                          [
                            ['ctrl+ArrowRight', 'mac+shift+ArrowRight'],
                            t._translateEmpty,
                            { args: [i, 0], checker: e }
                          ],
                          [
                            ['ArrowUp', 'mac+ArrowUp'],
                            t._translateEmpty,
                            { args: [0, -s], checker: e }
                          ],
                          [
                            ['ctrl+ArrowUp', 'mac+shift+ArrowUp'],
                            t._translateEmpty,
                            { args: [0, -i], checker: e }
                          ],
                          [
                            ['ArrowDown', 'mac+ArrowDown'],
                            t._translateEmpty,
                            { args: [0, s], checker: e }
                          ],
                          [
                            ['ctrl+ArrowDown', 'mac+shift+ArrowDown'],
                            t._translateEmpty,
                            { args: [0, i], checker: e }
                          ]
                        ])
                      );
                    }
                    constructor(t) {
                      super({ ...t, name: 'freeTextEditor' }),
                        _classPrivateMethodInitSpec(this, f),
                        _classPrivateFieldInitSpec(
                          this,
                          l,
                          this.editorDivBlur.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          c,
                          this.editorDivFocus.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          d,
                          this.editorDivInput.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          h,
                          this.editorDivKeydown.bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, u, void 0),
                        _classPrivateFieldInitSpec(this, p, ''),
                        _classPrivateFieldInitSpec(
                          this,
                          _,
                          ''.concat(this.id, '-editor')
                        ),
                        _classPrivateFieldInitSpec(this, g, void 0),
                        _classPrivateFieldInitSpec(this, v, null),
                        _classPrivateFieldSet(
                          u,
                          this,
                          t.color ||
                            m._defaultColor ||
                            r.AnnotationEditor._defaultLineColor
                        ),
                        _classPrivateFieldSet(
                          g,
                          this,
                          t.fontSize || m._defaultFontSize
                        );
                    }
                    static initialize(t) {
                      r.AnnotationEditor.initialize(t, {
                        strings: [
                          'free_text2_default_content',
                          'editor_free_text2_aria_label'
                        ]
                      });
                      const e = getComputedStyle(document.documentElement);
                      this._internalPadding = parseFloat(
                        e.getPropertyValue('--freetext-padding')
                      );
                    }
                    static updateDefaultParams(t, e) {
                      switch (t) {
                        case a.AnnotationEditorParamsType.FREETEXT_SIZE:
                          m._defaultFontSize = e;
                          break;
                        case a.AnnotationEditorParamsType.FREETEXT_COLOR:
                          m._defaultColor = e;
                      }
                    }
                    updateParams(t, e) {
                      switch (t) {
                        case a.AnnotationEditorParamsType.FREETEXT_SIZE:
                          _assertClassBrand(f, this, b).call(this, e);
                          break;
                        case a.AnnotationEditorParamsType.FREETEXT_COLOR:
                          _assertClassBrand(f, this, P).call(this, e);
                      }
                    }
                    static get defaultPropertiesToUpdate() {
                      return [
                        [
                          a.AnnotationEditorParamsType.FREETEXT_SIZE,
                          m._defaultFontSize
                        ],
                        [
                          a.AnnotationEditorParamsType.FREETEXT_COLOR,
                          m._defaultColor ||
                            r.AnnotationEditor._defaultLineColor
                        ]
                      ];
                    }
                    get propertiesToUpdate() {
                      return [
                        [
                          a.AnnotationEditorParamsType.FREETEXT_SIZE,
                          _classPrivateFieldGet(g, this)
                        ],
                        [
                          a.AnnotationEditorParamsType.FREETEXT_COLOR,
                          _classPrivateFieldGet(u, this)
                        ]
                      ];
                    }
                    _translateEmpty(t, e) {
                      this._uiManager.translateSelectedEditors(t, e, !0);
                    }
                    getInitialTranslation() {
                      const t = this.parentScale;
                      return [
                        -m._internalPadding * t,
                        -(m._internalPadding + _classPrivateFieldGet(g, this)) *
                          t
                      ];
                    }
                    rebuild() {
                      this.parent &&
                        (super.rebuild(),
                        null !== this.div &&
                          (this.isAttachedToDOM || this.parent.add(this)));
                    }
                    enableEditMode() {
                      this.isInEditMode() ||
                        (this.parent.setEditingState(!1),
                        this.parent.updateToolbar(
                          a.AnnotationEditorType.FREETEXT
                        ),
                        super.enableEditMode(),
                        this.overlayDiv.classList.remove('enabled'),
                        (this.editorDiv.contentEditable = !0),
                        (this._isDraggable = !1),
                        this.div.removeAttribute('aria-activedescendant'),
                        this.editorDiv.addEventListener(
                          'keydown',
                          _classPrivateFieldGet(h, this)
                        ),
                        this.editorDiv.addEventListener(
                          'focus',
                          _classPrivateFieldGet(c, this)
                        ),
                        this.editorDiv.addEventListener(
                          'blur',
                          _classPrivateFieldGet(l, this)
                        ),
                        this.editorDiv.addEventListener(
                          'input',
                          _classPrivateFieldGet(d, this)
                        ));
                    }
                    disableEditMode() {
                      this.isInEditMode() &&
                        (this.parent.setEditingState(!0),
                        super.disableEditMode(),
                        this.overlayDiv.classList.add('enabled'),
                        (this.editorDiv.contentEditable = !1),
                        this.div.setAttribute(
                          'aria-activedescendant',
                          _classPrivateFieldGet(_, this)
                        ),
                        (this._isDraggable = !0),
                        this.editorDiv.removeEventListener(
                          'keydown',
                          _classPrivateFieldGet(h, this)
                        ),
                        this.editorDiv.removeEventListener(
                          'focus',
                          _classPrivateFieldGet(c, this)
                        ),
                        this.editorDiv.removeEventListener(
                          'blur',
                          _classPrivateFieldGet(l, this)
                        ),
                        this.editorDiv.removeEventListener(
                          'input',
                          _classPrivateFieldGet(d, this)
                        ),
                        this.div.focus({ preventScroll: !0 }),
                        (this.isEditing = !1),
                        this.parent.div.classList.add('freeTextEditing'));
                    }
                    focusin(t) {
                      this._focusEventsAllowed &&
                        (super.focusin(t),
                        t.target !== this.editorDiv && this.editorDiv.focus());
                    }
                    onceAdded() {
                      var t;
                      this.width
                        ? _assertClassBrand(f, this, w).call(this)
                        : (this.enableEditMode(),
                          this.editorDiv.focus(),
                          null !== (t = this._initialOptions) &&
                            void 0 !== t &&
                            t.isCentered &&
                            this.center(),
                          (this._initialOptions = null));
                    }
                    isEmpty() {
                      return (
                        !this.editorDiv ||
                        '' === this.editorDiv.innerText.trim()
                      );
                    }
                    remove() {
                      (this.isEditing = !1),
                        this.parent &&
                          (this.parent.setEditingState(!0),
                          this.parent.div.classList.add('freeTextEditing')),
                        super.remove();
                    }
                    commit() {
                      if (!this.isInEditMode()) return;
                      super.commit(), this.disableEditMode();
                      const t = _classPrivateFieldGet(p, this),
                        e = _classPrivateFieldSet(
                          p,
                          this,
                          _assertClassBrand(f, this, A).call(this).trimEnd()
                        );
                      if (t === e) return;
                      const s = (t) => {
                        _classPrivateFieldSet(p, this, t),
                          t
                            ? (_assertClassBrand(f, this, S).call(this),
                              this._uiManager.rebuild(this),
                              _assertClassBrand(f, this, F).call(this))
                            : this.remove();
                      };
                      this.addCommands({
                        cmd: () => {
                          s(e);
                        },
                        undo: () => {
                          s(t);
                        },
                        mustExec: !1
                      }),
                        _assertClassBrand(f, this, F).call(this);
                    }
                    shouldGetKeyboardEvents() {
                      return this.isInEditMode();
                    }
                    enterInEditMode() {
                      this.enableEditMode(), this.editorDiv.focus();
                    }
                    dblclick(t) {
                      this.enterInEditMode();
                    }
                    keydown(t) {
                      t.target === this.div &&
                        'Enter' === t.key &&
                        (this.enterInEditMode(), t.preventDefault());
                    }
                    editorDivKeydown(t) {
                      m._keyboardManager.exec(this, t);
                    }
                    editorDivFocus(t) {
                      this.isEditing = !0;
                    }
                    editorDivBlur(t) {
                      this.isEditing = !1;
                    }
                    editorDivInput(t) {
                      this.parent.div.classList.toggle(
                        'freeTextEditing',
                        this.isEmpty()
                      );
                    }
                    disableEditing() {
                      this.editorDiv.setAttribute('role', 'comment'),
                        this.editorDiv.removeAttribute('aria-multiline');
                    }
                    enableEditing() {
                      this.editorDiv.setAttribute('role', 'textbox'),
                        this.editorDiv.setAttribute('aria-multiline', !0);
                    }
                    render() {
                      if (this.div) return this.div;
                      let t, e;
                      this.width && ((t = this.x), (e = this.y)),
                        super.render(),
                        (this.editorDiv = document.createElement('div')),
                        (this.editorDiv.className = 'internal'),
                        this.editorDiv.setAttribute(
                          'id',
                          _classPrivateFieldGet(_, this)
                        ),
                        this.enableEditing(),
                        r.AnnotationEditor._l10nPromise
                          .get('editor_free_text2_aria_label')
                          .then((t) => {
                            var e;
                            return null === (e = this.editorDiv) || void 0 === e
                              ? void 0
                              : e.setAttribute('aria-label', t);
                          }),
                        r.AnnotationEditor._l10nPromise
                          .get('free_text2_default_content')
                          .then((t) => {
                            var e;
                            return null === (e = this.editorDiv) || void 0 === e
                              ? void 0
                              : e.setAttribute('default-content', t);
                          }),
                        (this.editorDiv.contentEditable = !0);
                      const { style: s } = this.editorDiv;
                      if (
                        ((s.fontSize = 'calc('.concat(
                          _classPrivateFieldGet(g, this),
                          'px * var(--scale-factor))'
                        )),
                        (s.color = _classPrivateFieldGet(u, this)),
                        this.div.append(this.editorDiv),
                        (this.overlayDiv = document.createElement('div')),
                        this.overlayDiv.classList.add('overlay', 'enabled'),
                        this.div.append(this.overlayDiv),
                        (0, n.bindEvents)(this, this.div, [
                          'dblclick',
                          'keydown'
                        ]),
                        this.width)
                      ) {
                        const [s, i] = this.parentDimensions;
                        if (this.annotationElementId) {
                          const { position: a } = _classPrivateFieldGet(
                            v,
                            this
                          );
                          let [n, r] = this.getInitialTranslation();
                          [n, r] = this.pageTranslationToScreen(n, r);
                          const [o, l] = this.pageDimensions,
                            [c, d] = this.pageTranslation;
                          let h, u;
                          switch (this.rotation) {
                            case 0:
                              (h = t + (a[0] - c) / o),
                                (u = e + this.height - (a[1] - d) / l);
                              break;
                            case 90:
                              (h = t + (a[0] - c) / o),
                                (u = e - (a[1] - d) / l),
                                ([n, r] = [r, -n]);
                              break;
                            case 180:
                              (h = t - this.width + (a[0] - c) / o),
                                (u = e - (a[1] - d) / l),
                                ([n, r] = [-n, -r]);
                              break;
                            case 270:
                              (h = t + (a[0] - c - this.height * l) / o),
                                (u = e + (a[1] - d - this.width * o) / l),
                                ([n, r] = [-r, n]);
                          }
                          this.setAt(h * s, u * i, n, r);
                        } else
                          this.setAt(
                            t * s,
                            e * i,
                            this.width * s,
                            this.height * i
                          );
                        _assertClassBrand(f, this, S).call(this),
                          (this._isDraggable = !0),
                          (this.editorDiv.contentEditable = !1);
                      } else
                        (this._isDraggable = !1),
                          (this.editorDiv.contentEditable = !0);
                      return this.div;
                    }
                    get contentDiv() {
                      return this.editorDiv;
                    }
                    static deserialize(t, e, s) {
                      let i = null;
                      if (t instanceof o.FreeTextAnnotationElement) {
                        const {
                          data: {
                            defaultAppearanceData: {
                              fontSize: e,
                              fontColor: s
                            },
                            rect: n,
                            rotation: r,
                            id: o
                          },
                          textContent: l,
                          textPosition: c,
                          parent: {
                            page: { pageNumber: d }
                          }
                        } = t;
                        if (!l || 0 === l.length) return null;
                        i = t = {
                          annotationType: a.AnnotationEditorType.FREETEXT,
                          color: Array.from(s),
                          fontSize: e,
                          value: l.join('\n'),
                          position: c,
                          pageIndex: d - 1,
                          rect: n,
                          rotation: r,
                          id: o,
                          deleted: !1
                        };
                      }
                      const n = super.deserialize(t, e, s);
                      return (
                        _classPrivateFieldSet(g, n, t.fontSize),
                        _classPrivateFieldSet(
                          u,
                          n,
                          a.Util.makeHexColor(...t.color)
                        ),
                        _classPrivateFieldSet(p, n, t.value),
                        (n.annotationElementId = t.id || null),
                        _classPrivateFieldSet(v, n, i),
                        n
                      );
                    }
                    serialize() {
                      let t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      if (this.isEmpty()) return null;
                      if (this.deleted)
                        return {
                          pageIndex: this.pageIndex,
                          id: this.annotationElementId,
                          deleted: !0
                        };
                      const e = m._internalPadding * this.parentScale,
                        s = this.getRect(e, e),
                        i = r.AnnotationEditor._colorManager.convert(
                          this.isAttachedToDOM
                            ? getComputedStyle(this.editorDiv).color
                            : _classPrivateFieldGet(u, this)
                        ),
                        n = {
                          annotationType: a.AnnotationEditorType.FREETEXT,
                          color: i,
                          fontSize: _classPrivateFieldGet(g, this),
                          value: _classPrivateFieldGet(p, this),
                          pageIndex: this.pageIndex,
                          rect: s,
                          rotation: this.rotation,
                          structTreeParentId: this._structTreeParentId
                        };
                      return t
                        ? n
                        : this.annotationElementId &&
                          !_assertClassBrand(f, this, y).call(this, n)
                        ? null
                        : ((n.id = this.annotationElementId), n);
                    }
                  }
                  function b(t) {
                    const e = (t) => {
                        (this.editorDiv.style.fontSize = 'calc('.concat(
                          t,
                          'px * var(--scale-factor))'
                        )),
                          this.translate(
                            0,
                            -(t - _classPrivateFieldGet(g, this)) *
                              this.parentScale
                          ),
                          _classPrivateFieldSet(g, this, t),
                          _assertClassBrand(f, this, F).call(this);
                      },
                      s = _classPrivateFieldGet(g, this);
                    this.addCommands({
                      cmd: () => {
                        e(t);
                      },
                      undo: () => {
                        e(s);
                      },
                      mustExec: !0,
                      type: a.AnnotationEditorParamsType.FREETEXT_SIZE,
                      overwriteIfSameType: !0,
                      keepUndo: !0
                    });
                  }
                  function P(t) {
                    const e = _classPrivateFieldGet(u, this);
                    this.addCommands({
                      cmd: () => {
                        _classPrivateFieldSet(
                          u,
                          this,
                          (this.editorDiv.style.color = t)
                        );
                      },
                      undo: () => {
                        _classPrivateFieldSet(
                          u,
                          this,
                          (this.editorDiv.style.color = e)
                        );
                      },
                      mustExec: !0,
                      type: a.AnnotationEditorParamsType.FREETEXT_COLOR,
                      overwriteIfSameType: !0,
                      keepUndo: !0
                    });
                  }
                  function A() {
                    const t = this.editorDiv.getElementsByTagName('div');
                    if (0 === t.length) return this.editorDiv.innerText;
                    const e = [];
                    for (const s of t)
                      e.push(s.innerText.replace(/\r\n?|\n/, ''));
                    return e.join('\n');
                  }
                  function F() {
                    const [t, e] = this.parentDimensions;
                    let s;
                    if (this.isAttachedToDOM)
                      s = this.div.getBoundingClientRect();
                    else {
                      const { currentLayer: t, div: e } = this,
                        i = e.style.display;
                      (e.style.display = 'hidden'),
                        t.div.append(this.div),
                        (s = e.getBoundingClientRect()),
                        e.remove(),
                        (e.style.display = i);
                    }
                    this.rotation % 180 === this.parentRotation % 180
                      ? ((this.width = s.width / t),
                        (this.height = s.height / e))
                      : ((this.width = s.height / t),
                        (this.height = s.width / e)),
                      this.fixAndSetPosition();
                  }
                  function S() {
                    if (
                      (this.editorDiv.replaceChildren(),
                      _classPrivateFieldGet(p, this))
                    )
                      for (const t of _classPrivateFieldGet(p, this).split(
                        '\n'
                      )) {
                        const e = document.createElement('div');
                        e.append(
                          t
                            ? document.createTextNode(t)
                            : document.createElement('br')
                        ),
                          this.editorDiv.append(e);
                      }
                  }
                  function y(t) {
                    const {
                      value: e,
                      fontSize: s,
                      color: i,
                      rect: a,
                      pageIndex: n
                    } = _classPrivateFieldGet(v, this);
                    return (
                      t.value !== e ||
                      t.fontSize !== s ||
                      t.rect.some((t, e) => Math.abs(t - a[e]) >= 1) ||
                      t.color.some((t, e) => t !== i[e]) ||
                      t.pageIndex !== n
                    );
                  }
                  function w() {
                    let t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (!this.annotationElementId) return;
                    if (
                      (_assertClassBrand(f, this, F).call(this),
                      !t && (0 === this.width || 0 === this.height))
                    )
                      return void setTimeout(
                        () => _assertClassBrand(f, this, w).call(this, !0),
                        0
                      );
                    const e = i._internalPadding * this.parentScale;
                    _classPrivateFieldGet(v, this).rect = this.getRect(e, e);
                  }
                  (i = m),
                    _defineProperty(m, '_freeTextDefaultContent', ''),
                    _defineProperty(m, '_internalPadding', 0),
                    _defineProperty(m, '_defaultColor', null),
                    _defineProperty(m, '_defaultFontSize', 10),
                    _defineProperty(m, '_type', 'freetext'),
                    (e.FreeTextEditor = m);
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.StampAnnotationElement =
                      e.InkAnnotationElement =
                      e.FreeTextAnnotationElement =
                      e.AnnotationLayer =
                        void 0);
                  var i = s(1),
                    a = s(6),
                    n = s(3),
                    r = s(30),
                    o = s(31),
                    l = s(32);
                  const c = 1e3,
                    d = new WeakSet();
                  function h(t) {
                    return { width: t[2] - t[0], height: t[3] - t[1] };
                  }
                  class u {
                    static create(t) {
                      switch (t.data.annotationType) {
                        case i.AnnotationType.LINK:
                          return new v(t);
                        case i.AnnotationType.TEXT:
                          return new b(t);
                        case i.AnnotationType.WIDGET:
                          switch (t.data.fieldType) {
                            case 'Tx':
                              return new A(t);
                            case 'Btn':
                              return t.data.radioButton
                                ? new y(t)
                                : t.data.checkBox
                                ? new S(t)
                                : new w(t);
                            case 'Ch':
                              return new x(t);
                            case 'Sig':
                              return new F(t);
                          }
                          return new P(t);
                        case i.AnnotationType.POPUP:
                          return new C(t);
                        case i.AnnotationType.FREETEXT:
                          return new Q(t);
                        case i.AnnotationType.LINE:
                          return new $(t);
                        case i.AnnotationType.SQUARE:
                          return new et(t);
                        case i.AnnotationType.CIRCLE:
                          return new it(t);
                        case i.AnnotationType.POLYLINE:
                          return new nt(t);
                        case i.AnnotationType.CARET:
                          return new ot(t);
                        case i.AnnotationType.INK:
                          return new ct(t);
                        case i.AnnotationType.POLYGON:
                          return new rt(t);
                        case i.AnnotationType.HIGHLIGHT:
                          return new dt(t);
                        case i.AnnotationType.UNDERLINE:
                          return new ht(t);
                        case i.AnnotationType.SQUIGGLY:
                          return new ut(t);
                        case i.AnnotationType.STRIKEOUT:
                          return new pt(t);
                        case i.AnnotationType.STAMP:
                          return new _t(t);
                        case i.AnnotationType.FILEATTACHMENT:
                          return new ft(t);
                        default:
                          return new _(t);
                      }
                    }
                  }
                  var p = new WeakMap();
                  class _ {
                    constructor(t) {
                      let {
                        isRenderable: e = !1,
                        ignoreBorder: s = !1,
                        createQuadrilaterals: i = !1
                      } = arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                      _classPrivateFieldInitSpec(this, p, !1),
                        (this.isRenderable = e),
                        (this.data = t.data),
                        (this.layer = t.layer),
                        (this.linkService = t.linkService),
                        (this.downloadManager = t.downloadManager),
                        (this.imageResourcesPath = t.imageResourcesPath),
                        (this.renderForms = t.renderForms),
                        (this.svgFactory = t.svgFactory),
                        (this.annotationStorage = t.annotationStorage),
                        (this.enableScripting = t.enableScripting),
                        (this.hasJSActions = t.hasJSActions),
                        (this._fieldObjects = t.fieldObjects),
                        (this.parent = t.parent),
                        e && (this.container = this._createContainer(s)),
                        i && this._createQuadrilaterals();
                    }
                    static _hasPopupData(t) {
                      let { titleObj: e, contentsObj: s, richText: i } = t;
                      return !!(
                        (null !== e && void 0 !== e && e.str) ||
                        (null !== s && void 0 !== s && s.str) ||
                        (null !== i && void 0 !== i && i.str)
                      );
                    }
                    get hasPopupData() {
                      return _._hasPopupData(this.data);
                    }
                    _createContainer(t) {
                      const {
                          data: e,
                          parent: { page: s, viewport: a }
                        } = this,
                        n = document.createElement('section');
                      n.setAttribute('data-annotation-id', e.id),
                        this instanceof P || (n.tabIndex = c),
                        (n.style.zIndex = this.parent.zIndex++),
                        this.data.popupRef &&
                          n.setAttribute('aria-haspopup', 'dialog'),
                        e.noRotate && n.classList.add('norotate');
                      const {
                        pageWidth: r,
                        pageHeight: o,
                        pageX: l,
                        pageY: d
                      } = a.rawDims;
                      if (!e.rect || this instanceof C) {
                        const { rotation: t } = e;
                        return (
                          e.hasOwnCanvas || 0 === t || this.setRotation(t, n), n
                        );
                      }
                      const { width: u, height: _ } = h(e.rect),
                        g = i.Util.normalizeRect([
                          e.rect[0],
                          s.view[3] - e.rect[1] + s.view[1],
                          e.rect[2],
                          s.view[3] - e.rect[3] + s.view[1]
                        ]);
                      if (!t && e.borderStyle.width > 0) {
                        n.style.borderWidth = ''.concat(
                          e.borderStyle.width,
                          'px'
                        );
                        const t = e.borderStyle.horizontalCornerRadius,
                          s = e.borderStyle.verticalCornerRadius;
                        if (t > 0 || s > 0) {
                          const e = 'calc('
                            .concat(t, 'px * var(--scale-factor)) / calc(')
                            .concat(s, 'px * var(--scale-factor))');
                          n.style.borderRadius = e;
                        } else if (this instanceof y) {
                          const t = 'calc('
                            .concat(u, 'px * var(--scale-factor)) / calc(')
                            .concat(_, 'px * var(--scale-factor))');
                          n.style.borderRadius = t;
                        }
                        switch (e.borderStyle.style) {
                          case i.AnnotationBorderStyleType.SOLID:
                            n.style.borderStyle = 'solid';
                            break;
                          case i.AnnotationBorderStyleType.DASHED:
                            n.style.borderStyle = 'dashed';
                            break;
                          case i.AnnotationBorderStyleType.BEVELED:
                            (0, i.warn)('Unimplemented border style: beveled');
                            break;
                          case i.AnnotationBorderStyleType.INSET:
                            (0, i.warn)('Unimplemented border style: inset');
                            break;
                          case i.AnnotationBorderStyleType.UNDERLINE:
                            n.style.borderBottomStyle = 'solid';
                        }
                        const a = e.borderColor || null;
                        a
                          ? (_classPrivateFieldSet(p, this, !0),
                            (n.style.borderColor = i.Util.makeHexColor(
                              0 | a[0],
                              0 | a[1],
                              0 | a[2]
                            )))
                          : (n.style.borderWidth = 0);
                      }
                      (n.style.left = ''.concat((100 * (g[0] - l)) / r, '%')),
                        (n.style.top = ''.concat((100 * (g[1] - d)) / o, '%'));
                      const { rotation: v } = e;
                      return (
                        e.hasOwnCanvas || 0 === v
                          ? ((n.style.width = ''.concat((100 * u) / r, '%')),
                            (n.style.height = ''.concat((100 * _) / o, '%')))
                          : this.setRotation(v, n),
                        n
                      );
                    }
                    setRotation(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : this.container;
                      if (!this.data.rect) return;
                      const { pageWidth: s, pageHeight: i } =
                          this.parent.viewport.rawDims,
                        { width: a, height: n } = h(this.data.rect);
                      let r, o;
                      t % 180 === 0
                        ? ((r = (100 * a) / s), (o = (100 * n) / i))
                        : ((r = (100 * n) / s), (o = (100 * a) / i)),
                        (e.style.width = ''.concat(r, '%')),
                        (e.style.height = ''.concat(o, '%')),
                        e.setAttribute('data-main-rotation', (360 - t) % 360);
                    }
                    get _commonActions() {
                      const t = (t, e, s) => {
                        const i = s.detail[t],
                          a = i[0],
                          n = i.slice(1);
                        (s.target.style[e] =
                          r.ColorConverters[''.concat(a, '_HTML')](n)),
                          this.annotationStorage.setValue(this.data.id, {
                            [e]: r.ColorConverters[''.concat(a, '_rgb')](n)
                          });
                      };
                      return (0, i.shadow)(this, '_commonActions', {
                        display: (t) => {
                          const { display: e } = t.detail,
                            s = e % 2 === 1;
                          (this.container.style.visibility = s
                            ? 'hidden'
                            : 'visible'),
                            this.annotationStorage.setValue(this.data.id, {
                              noView: s,
                              noPrint: 1 === e || 2 === e
                            });
                        },
                        print: (t) => {
                          this.annotationStorage.setValue(this.data.id, {
                            noPrint: !t.detail.print
                          });
                        },
                        hidden: (t) => {
                          const { hidden: e } = t.detail;
                          (this.container.style.visibility = e
                            ? 'hidden'
                            : 'visible'),
                            this.annotationStorage.setValue(this.data.id, {
                              noPrint: e,
                              noView: e
                            });
                        },
                        focus: (t) => {
                          setTimeout(
                            () => t.target.focus({ preventScroll: !1 }),
                            0
                          );
                        },
                        userName: (t) => {
                          t.target.title = t.detail.userName;
                        },
                        readonly: (t) => {
                          t.target.disabled = t.detail.readonly;
                        },
                        required: (t) => {
                          this._setRequired(t.target, t.detail.required);
                        },
                        bgColor: (e) => {
                          t('bgColor', 'backgroundColor', e);
                        },
                        fillColor: (e) => {
                          t('fillColor', 'backgroundColor', e);
                        },
                        fgColor: (e) => {
                          t('fgColor', 'color', e);
                        },
                        textColor: (e) => {
                          t('textColor', 'color', e);
                        },
                        borderColor: (e) => {
                          t('borderColor', 'borderColor', e);
                        },
                        strokeColor: (e) => {
                          t('strokeColor', 'borderColor', e);
                        },
                        rotation: (t) => {
                          const e = t.detail.rotation;
                          this.setRotation(e),
                            this.annotationStorage.setValue(this.data.id, {
                              rotation: e
                            });
                        }
                      });
                    }
                    _dispatchEventFromSandbox(t, e) {
                      const s = this._commonActions;
                      for (const i of Object.keys(e.detail)) {
                        const a = t[i] || s[i];
                        null === a || void 0 === a || a(e);
                      }
                    }
                    _setDefaultPropertiesFromJS(t) {
                      if (!this.enableScripting) return;
                      const e = this.annotationStorage.getRawValue(
                        this.data.id
                      );
                      if (!e) return;
                      const s = this._commonActions;
                      for (const [i, a] of Object.entries(e)) {
                        const n = s[i];
                        n &&
                          (n({ detail: { [i]: a }, target: t }), delete e[i]);
                      }
                    }
                    _createQuadrilaterals() {
                      if (!this.container) return;
                      const { quadPoints: t } = this.data;
                      if (!t) return;
                      const [e, s, i, a] = this.data.rect;
                      if (1 === t.length) {
                        const [, { x: n, y: r }, { x: o, y: l }] = t[0];
                        if (i === n && a === r && e === o && s === l) return;
                      }
                      const { style: n } = this.container;
                      let r;
                      if (_classPrivateFieldGet(p, this)) {
                        const { borderColor: t, borderWidth: e } = n;
                        (n.borderWidth = 0),
                          (r = [
                            "url('data:image/svg+xml;utf8,",
                            '<svg xmlns="http://www.w3.org/2000/svg"',
                            ' preserveAspectRatio="none" viewBox="0 0 1 1">',
                            '<g fill="transparent" stroke="'
                              .concat(t, '" stroke-width="')
                              .concat(e, '">')
                          ]),
                          this.container.classList.add('hasBorder');
                      }
                      const o = i - e,
                        l = a - s,
                        { svgFactory: c } = this,
                        d = c.createElement('svg');
                      d.classList.add('quadrilateralsContainer'),
                        d.setAttribute('width', 0),
                        d.setAttribute('height', 0);
                      const h = c.createElement('defs');
                      d.append(h);
                      const u = c.createElement('clipPath'),
                        _ = 'clippath_'.concat(this.data.id);
                      u.setAttribute('id', _),
                        u.setAttribute('clipPathUnits', 'objectBoundingBox'),
                        h.append(u);
                      for (const [, { x: p, y: v }, { x: f, y: m }] of t) {
                        var g;
                        const t = c.createElement('rect'),
                          s = (f - e) / o,
                          i = (a - v) / l,
                          n = (p - f) / o,
                          d = (v - m) / l;
                        t.setAttribute('x', s),
                          t.setAttribute('y', i),
                          t.setAttribute('width', n),
                          t.setAttribute('height', d),
                          u.append(t),
                          null === (g = r) ||
                            void 0 === g ||
                            g.push(
                              '<rect vector-effect="non-scaling-stroke" x="'
                                .concat(s, '" y="')
                                .concat(i, '" width="')
                                .concat(n, '" height="')
                                .concat(d, '"/>')
                            );
                      }
                      _classPrivateFieldGet(p, this) &&
                        (r.push("</g></svg>')"),
                        (n.backgroundImage = r.join(''))),
                        this.container.append(d),
                        (this.container.style.clipPath = 'url(#'.concat(
                          _,
                          ')'
                        ));
                    }
                    _createPopup() {
                      const { container: t, data: e } = this;
                      t.setAttribute('aria-haspopup', 'dialog');
                      const s = new C({
                        data: {
                          color: e.color,
                          titleObj: e.titleObj,
                          modificationDate: e.modificationDate,
                          contentsObj: e.contentsObj,
                          richText: e.richText,
                          parentRect: e.rect,
                          borderStyle: 0,
                          id: 'popup_'.concat(e.id),
                          rotation: e.rotation
                        },
                        parent: this.parent,
                        elements: [this]
                      });
                      this.parent.div.append(s.render());
                    }
                    render() {
                      (0, i.unreachable)(
                        'Abstract method `AnnotationElement.render` called'
                      );
                    }
                    _getElementsByName(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      const s = [];
                      if (this._fieldObjects) {
                        const a = this._fieldObjects[t];
                        if (a)
                          for (const { page: t, id: n, exportValues: r } of a) {
                            if (-1 === t) continue;
                            if (n === e) continue;
                            const a = 'string' === typeof r ? r : null,
                              o = document.querySelector(
                                '[data-element-id="'.concat(n, '"]')
                              );
                            !o || d.has(o)
                              ? s.push({ id: n, exportValue: a, domElement: o })
                              : (0, i.warn)(
                                  '_getElementsByName - element not allowed: '.concat(
                                    n
                                  )
                                );
                          }
                        return s;
                      }
                      for (const i of document.getElementsByName(t)) {
                        const { exportValue: t } = i,
                          a = i.getAttribute('data-element-id');
                        a !== e &&
                          d.has(i) &&
                          s.push({ id: a, exportValue: t, domElement: i });
                      }
                      return s;
                    }
                    show() {
                      var t;
                      this.container && (this.container.hidden = !1),
                        null === (t = this.popup) ||
                          void 0 === t ||
                          t.maybeShow();
                    }
                    hide() {
                      var t;
                      this.container && (this.container.hidden = !0),
                        null === (t = this.popup) ||
                          void 0 === t ||
                          t.forceHide();
                    }
                    getElementsToTriggerPopup() {
                      return this.container;
                    }
                    addHighlightArea() {
                      const t = this.getElementsToTriggerPopup();
                      if (Array.isArray(t))
                        for (const e of t) e.classList.add('highlightArea');
                      else t.classList.add('highlightArea');
                    }
                    _editOnDoubleClick() {
                      const {
                        annotationEditorType: t,
                        data: { id: e }
                      } = this;
                      this.container.addEventListener('dblclick', () => {
                        var s;
                        null === (s = this.linkService.eventBus) ||
                          void 0 === s ||
                          s.dispatch('switchannotationeditormode', {
                            source: this,
                            mode: t,
                            editId: e
                          });
                      });
                    }
                  }
                  var g = new WeakSet();
                  class v extends _ {
                    constructor(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      super(t, {
                        isRenderable: !0,
                        ignoreBorder: !(
                          null === e ||
                          void 0 === e ||
                          !e.ignoreBorder
                        ),
                        createQuadrilaterals: !0
                      }),
                        _classPrivateMethodInitSpec(this, g),
                        (this.isTooltipOnly = t.data.isTooltipOnly);
                    }
                    render() {
                      const { data: t, linkService: e } = this,
                        s = document.createElement('a');
                      s.setAttribute('data-element-id', t.id);
                      let i = !1;
                      return (
                        t.url
                          ? (e.addLinkAttributes(s, t.url, t.newWindow),
                            (i = !0))
                          : t.action
                          ? (this._bindNamedAction(s, t.action), (i = !0))
                          : t.attachment
                          ? (this._bindAttachment(s, t.attachment), (i = !0))
                          : t.setOCGState
                          ? (_assertClassBrand(g, this, m).call(
                              this,
                              s,
                              t.setOCGState
                            ),
                            (i = !0))
                          : t.dest
                          ? (this._bindLink(s, t.dest), (i = !0))
                          : (t.actions &&
                              (t.actions.Action ||
                                t.actions['Mouse Up'] ||
                                t.actions['Mouse Down']) &&
                              this.enableScripting &&
                              this.hasJSActions &&
                              (this._bindJSAction(s, t), (i = !0)),
                            t.resetForm
                              ? (this._bindResetFormAction(s, t.resetForm),
                                (i = !0))
                              : this.isTooltipOnly &&
                                !i &&
                                (this._bindLink(s, ''), (i = !0))),
                        this.container.classList.add('linkAnnotation'),
                        i && this.container.append(s),
                        this.container
                      );
                    }
                    _bindLink(t, e) {
                      (t.href = this.linkService.getDestinationHash(e)),
                        (t.onclick = () => (
                          e && this.linkService.goToDestination(e), !1
                        )),
                        (e || '' === e) &&
                          _assertClassBrand(g, this, f).call(this);
                    }
                    _bindNamedAction(t, e) {
                      (t.href = this.linkService.getAnchorUrl('')),
                        (t.onclick = () => (
                          this.linkService.executeNamedAction(e), !1
                        )),
                        _assertClassBrand(g, this, f).call(this);
                    }
                    _bindAttachment(t, e) {
                      (t.href = this.linkService.getAnchorUrl('')),
                        (t.onclick = () => {
                          var t;
                          return (
                            null === (t = this.downloadManager) ||
                              void 0 === t ||
                              t.openOrDownloadData(
                                this.container,
                                e.content,
                                e.filename
                              ),
                            !1
                          );
                        }),
                        _assertClassBrand(g, this, f).call(this);
                    }
                    _bindJSAction(t, e) {
                      t.href = this.linkService.getAnchorUrl('');
                      const s = new Map([
                        ['Action', 'onclick'],
                        ['Mouse Up', 'onmouseup'],
                        ['Mouse Down', 'onmousedown']
                      ]);
                      for (const i of Object.keys(e.actions)) {
                        const a = s.get(i);
                        a &&
                          (t[a] = () => {
                            var t;
                            return (
                              null === (t = this.linkService.eventBus) ||
                                void 0 === t ||
                                t.dispatch('dispatcheventinsandbox', {
                                  source: this,
                                  detail: { id: e.id, name: i }
                                }),
                              !1
                            );
                          });
                      }
                      t.onclick || (t.onclick = () => !1),
                        _assertClassBrand(g, this, f).call(this);
                    }
                    _bindResetFormAction(t, e) {
                      const s = t.onclick;
                      if (
                        (s || (t.href = this.linkService.getAnchorUrl('')),
                        _assertClassBrand(g, this, f).call(this),
                        !this._fieldObjects)
                      )
                        return (
                          (0, i.warn)(
                            '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'
                          ),
                          void (s || (t.onclick = () => !1))
                        );
                      t.onclick = () => {
                        null === s || void 0 === s || s();
                        const { fields: t, refs: a, include: n } = e,
                          r = [];
                        if (0 !== t.length || 0 !== a.length) {
                          const e = new Set(a);
                          for (const s of t) {
                            const t = this._fieldObjects[s] || [];
                            for (const { id: s } of t) e.add(s);
                          }
                          for (const t of Object.values(this._fieldObjects))
                            for (const s of t) e.has(s.id) === n && r.push(s);
                        } else
                          for (const e of Object.values(this._fieldObjects))
                            r.push(...e);
                        const o = this.annotationStorage,
                          l = [];
                        for (const e of r) {
                          const { id: t } = e;
                          switch ((l.push(t), e.type)) {
                            case 'text': {
                              const s = e.defaultValue || '';
                              o.setValue(t, { value: s });
                              break;
                            }
                            case 'checkbox':
                            case 'radiobutton': {
                              const s = e.defaultValue === e.exportValues;
                              o.setValue(t, { value: s });
                              break;
                            }
                            case 'combobox':
                            case 'listbox': {
                              const s = e.defaultValue || '';
                              o.setValue(t, { value: s });
                              break;
                            }
                            default:
                              continue;
                          }
                          const s = document.querySelector(
                            '[data-element-id="'.concat(t, '"]')
                          );
                          s &&
                            (d.has(s)
                              ? s.dispatchEvent(new Event('resetform'))
                              : (0, i.warn)(
                                  '_bindResetFormAction - element not allowed: '.concat(
                                    t
                                  )
                                ));
                        }
                        var c;
                        return (
                          this.enableScripting &&
                            (null === (c = this.linkService.eventBus) ||
                              void 0 === c ||
                              c.dispatch('dispatcheventinsandbox', {
                                source: this,
                                detail: { id: 'app', ids: l, name: 'ResetForm' }
                              })),
                          !1
                        );
                      };
                    }
                  }
                  function f() {
                    this.container.setAttribute('data-internal-link', '');
                  }
                  function m(t, e) {
                    (t.href = this.linkService.getAnchorUrl('')),
                      (t.onclick = () => (
                        this.linkService.executeSetOCGState(e), !1
                      )),
                      _assertClassBrand(g, this, f).call(this);
                  }
                  class b extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0 });
                    }
                    render() {
                      this.container.classList.add('textAnnotation');
                      const t = document.createElement('img');
                      return (
                        (t.src =
                          this.imageResourcesPath +
                          'annotation-' +
                          this.data.name.toLowerCase() +
                          '.svg'),
                        (t.alt = '[{{type}} Annotation]'),
                        (t.dataset.l10nId = 'text_annotation_type'),
                        (t.dataset.l10nArgs = JSON.stringify({
                          type: this.data.name
                        })),
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container.append(t),
                        this.container
                      );
                    }
                  }
                  class P extends _ {
                    render() {
                      return (
                        this.data.alternativeText &&
                          (this.container.title = this.data.alternativeText),
                        this.container
                      );
                    }
                    showElementAndHideCanvas(t) {
                      var e;
                      this.data.hasOwnCanvas &&
                        ('CANVAS' ===
                          (null === (e = t.previousSibling) || void 0 === e
                            ? void 0
                            : e.nodeName) && (t.previousSibling.hidden = !0),
                        (t.hidden = !1));
                    }
                    _getKeyModifier(t) {
                      const { isWin: e, isMac: s } = i.FeatureTest.platform;
                      return (e && t.ctrlKey) || (s && t.metaKey);
                    }
                    _setEventListener(t, e, s, i, a) {
                      s.includes('mouse')
                        ? t.addEventListener(s, (t) => {
                            var e;
                            null === (e = this.linkService.eventBus) ||
                              void 0 === e ||
                              e.dispatch('dispatcheventinsandbox', {
                                source: this,
                                detail: {
                                  id: this.data.id,
                                  name: i,
                                  value: a(t),
                                  shift: t.shiftKey,
                                  modifier: this._getKeyModifier(t)
                                }
                              });
                          })
                        : t.addEventListener(s, (t) => {
                            var n;
                            if ('blur' === s) {
                              if (!e.focused || !t.relatedTarget) return;
                              e.focused = !1;
                            } else if ('focus' === s) {
                              if (e.focused) return;
                              e.focused = !0;
                            }
                            a &&
                              (null === (n = this.linkService.eventBus) ||
                                void 0 === n ||
                                n.dispatch('dispatcheventinsandbox', {
                                  source: this,
                                  detail: {
                                    id: this.data.id,
                                    name: i,
                                    value: a(t)
                                  }
                                }));
                          });
                    }
                    _setEventListeners(t, e, s, i) {
                      for (const [o, l] of s) {
                        var a, n, r;
                        ('Action' === l ||
                          (null !== (a = this.data.actions) &&
                            void 0 !== a &&
                            a[l])) &&
                          (('Focus' !== l && 'Blur' !== l) ||
                            e ||
                            (e = { focused: !1 }),
                          this._setEventListener(t, e, o, l, i),
                          'Focus' !== l ||
                          (null !== (n = this.data.actions) &&
                            void 0 !== n &&
                            n.Blur)
                            ? 'Blur' !== l ||
                              (null !== (r = this.data.actions) &&
                                void 0 !== r &&
                                r.Focus) ||
                              this._setEventListener(
                                t,
                                e,
                                'focus',
                                'Focus',
                                null
                              )
                            : this._setEventListener(
                                t,
                                e,
                                'blur',
                                'Blur',
                                null
                              ));
                      }
                    }
                    _setBackgroundColor(t) {
                      const e = this.data.backgroundColor || null;
                      t.style.backgroundColor =
                        null === e
                          ? 'transparent'
                          : i.Util.makeHexColor(e[0], e[1], e[2]);
                    }
                    _setTextStyle(t) {
                      const e = ['left', 'center', 'right'],
                        { fontColor: s } = this.data.defaultAppearanceData,
                        a = this.data.defaultAppearanceData.fontSize || 9,
                        n = t.style;
                      let r;
                      const o = (t) => Math.round(10 * t) / 10;
                      if (this.data.multiLine) {
                        const t = Math.abs(
                            this.data.rect[3] - this.data.rect[1] - 2
                          ),
                          e = t / (Math.round(t / (i.LINE_FACTOR * a)) || 1);
                        r = Math.min(a, o(e / i.LINE_FACTOR));
                      } else {
                        const t = Math.abs(
                          this.data.rect[3] - this.data.rect[1] - 2
                        );
                        r = Math.min(a, o(t / i.LINE_FACTOR));
                      }
                      (n.fontSize = 'calc('.concat(
                        r,
                        'px * var(--scale-factor))'
                      )),
                        (n.color = i.Util.makeHexColor(s[0], s[1], s[2])),
                        null !== this.data.textAlignment &&
                          (n.textAlign = e[this.data.textAlignment]);
                    }
                    _setRequired(t, e) {
                      e
                        ? t.setAttribute('required', !0)
                        : t.removeAttribute('required'),
                        t.setAttribute('aria-required', e);
                    }
                  }
                  class A extends P {
                    constructor(t) {
                      super(t, {
                        isRenderable:
                          t.renderForms ||
                          (!t.data.hasAppearance && !!t.data.fieldValue)
                      });
                    }
                    setPropertyOnSiblings(t, e, s, i) {
                      const a = this.annotationStorage;
                      for (const n of this._getElementsByName(t.name, t.id))
                        n.domElement && (n.domElement[e] = s),
                          a.setValue(n.id, { [i]: s });
                    }
                    render() {
                      const t = this.annotationStorage,
                        e = this.data.id;
                      this.container.classList.add('textWidgetAnnotation');
                      let s = null;
                      if (this.renderForms) {
                        var i;
                        const o = t.getValue(e, {
                          value: this.data.fieldValue
                        });
                        let l = o.value || '';
                        const h = t.getValue(e, {
                          charLimit: this.data.maxLen
                        }).charLimit;
                        h && l.length > h && (l = l.slice(0, h));
                        let u =
                          o.formattedValue ||
                          (null === (i = this.data.textContent) || void 0 === i
                            ? void 0
                            : i.join('\n')) ||
                          null;
                        u && this.data.comb && (u = u.replaceAll(/\s+/g, ''));
                        const p = {
                          userValue: l,
                          formattedValue: u,
                          lastCommittedValue: null,
                          commitKey: 1,
                          focused: !1
                        };
                        var a, n;
                        this.data.multiLine
                          ? ((s = document.createElement('textarea')),
                            (s.textContent =
                              null !== (a = u) && void 0 !== a ? a : l),
                            this.data.doNotScroll &&
                              (s.style.overflowY = 'hidden'))
                          : ((s = document.createElement('input')),
                            (s.type = 'text'),
                            s.setAttribute(
                              'value',
                              null !== (n = u) && void 0 !== n ? n : l
                            ),
                            this.data.doNotScroll &&
                              (s.style.overflowX = 'hidden')),
                          this.data.hasOwnCanvas && (s.hidden = !0),
                          d.add(s),
                          s.setAttribute('data-element-id', e),
                          (s.disabled = this.data.readOnly),
                          (s.name = this.data.fieldName),
                          (s.tabIndex = c),
                          this._setRequired(s, this.data.required),
                          h && (s.maxLength = h),
                          s.addEventListener('input', (i) => {
                            t.setValue(e, { value: i.target.value }),
                              this.setPropertyOnSiblings(
                                s,
                                'value',
                                i.target.value,
                                'value'
                              ),
                              (p.formattedValue = null);
                          }),
                          s.addEventListener('resetform', (t) => {
                            var e;
                            const i =
                              null !== (e = this.data.defaultFieldValue) &&
                              void 0 !== e
                                ? e
                                : '';
                            (s.value = p.userValue = i),
                              (p.formattedValue = null);
                          });
                        let _ = (t) => {
                          const { formattedValue: e } = p;
                          null !== e && void 0 !== e && (t.target.value = e),
                            (t.target.scrollLeft = 0);
                        };
                        if (this.enableScripting && this.hasJSActions) {
                          var r;
                          s.addEventListener('focus', (t) => {
                            if (p.focused) return;
                            const { target: e } = t;
                            p.userValue && (e.value = p.userValue),
                              (p.lastCommittedValue = e.value),
                              (p.commitKey = 1),
                              (p.focused = !0);
                          }),
                            s.addEventListener('updatefromsandbox', (s) => {
                              this.showElementAndHideCanvas(s.target);
                              const i = {
                                value(s) {
                                  var i;
                                  (p.userValue =
                                    null !== (i = s.detail.value) &&
                                    void 0 !== i
                                      ? i
                                      : ''),
                                    t.setValue(e, {
                                      value: p.userValue.toString()
                                    }),
                                    (s.target.value = p.userValue);
                                },
                                formattedValue(s) {
                                  const { formattedValue: i } = s.detail;
                                  (p.formattedValue = i),
                                    null !== i &&
                                      void 0 !== i &&
                                      s.target !== document.activeElement &&
                                      (s.target.value = i),
                                    t.setValue(e, { formattedValue: i });
                                },
                                selRange(t) {
                                  t.target.setSelectionRange(
                                    ...t.detail.selRange
                                  );
                                },
                                charLimit: (s) => {
                                  var i;
                                  const { charLimit: a } = s.detail,
                                    { target: n } = s;
                                  if (0 === a)
                                    return void n.removeAttribute('maxLength');
                                  n.setAttribute('maxLength', a);
                                  let r = p.userValue;
                                  !r ||
                                    r.length <= a ||
                                    ((r = r.slice(0, a)),
                                    (n.value = p.userValue = r),
                                    t.setValue(e, { value: r }),
                                    null === (i = this.linkService.eventBus) ||
                                      void 0 === i ||
                                      i.dispatch('dispatcheventinsandbox', {
                                        source: this,
                                        detail: {
                                          id: e,
                                          name: 'Keystroke',
                                          value: r,
                                          willCommit: !0,
                                          commitKey: 1,
                                          selStart: n.selectionStart,
                                          selEnd: n.selectionEnd
                                        }
                                      }));
                                }
                              };
                              this._dispatchEventFromSandbox(i, s);
                            }),
                            s.addEventListener('keydown', (t) => {
                              var s;
                              p.commitKey = 1;
                              let i = -1;
                              if (
                                ('Escape' === t.key
                                  ? (i = 0)
                                  : 'Enter' !== t.key || this.data.multiLine
                                  ? 'Tab' === t.key && (p.commitKey = 3)
                                  : (i = 2),
                                -1 === i)
                              )
                                return;
                              const { value: a } = t.target;
                              p.lastCommittedValue !== a &&
                                ((p.lastCommittedValue = a),
                                (p.userValue = a),
                                null === (s = this.linkService.eventBus) ||
                                  void 0 === s ||
                                  s.dispatch('dispatcheventinsandbox', {
                                    source: this,
                                    detail: {
                                      id: e,
                                      name: 'Keystroke',
                                      value: a,
                                      willCommit: !0,
                                      commitKey: i,
                                      selStart: t.target.selectionStart,
                                      selEnd: t.target.selectionEnd
                                    }
                                  }));
                            });
                          const i = _;
                          (_ = null),
                            s.addEventListener('blur', (t) => {
                              if (!p.focused || !t.relatedTarget) return;
                              p.focused = !1;
                              const { value: s } = t.target;
                              var a;
                              (p.userValue = s),
                                p.lastCommittedValue !== s &&
                                  (null === (a = this.linkService.eventBus) ||
                                    void 0 === a ||
                                    a.dispatch('dispatcheventinsandbox', {
                                      source: this,
                                      detail: {
                                        id: e,
                                        name: 'Keystroke',
                                        value: s,
                                        willCommit: !0,
                                        commitKey: p.commitKey,
                                        selStart: t.target.selectionStart,
                                        selEnd: t.target.selectionEnd
                                      }
                                    })),
                                i(t);
                            }),
                            null !== (r = this.data.actions) &&
                              void 0 !== r &&
                              r.Keystroke &&
                              s.addEventListener('beforeinput', (t) => {
                                var s;
                                p.lastCommittedValue = null;
                                const { data: i, target: a } = t,
                                  {
                                    value: n,
                                    selectionStart: r,
                                    selectionEnd: o
                                  } = a;
                                let l = r,
                                  c = o;
                                switch (t.inputType) {
                                  case 'deleteWordBackward': {
                                    const t = n
                                      .substring(0, r)
                                      .match(/\w*[^\w]*$/);
                                    t && (l -= t[0].length);
                                    break;
                                  }
                                  case 'deleteWordForward': {
                                    const t = n
                                      .substring(r)
                                      .match(/^[^\w]*\w*/);
                                    t && (c += t[0].length);
                                    break;
                                  }
                                  case 'deleteContentBackward':
                                    r === o && (l -= 1);
                                    break;
                                  case 'deleteContentForward':
                                    r === o && (c += 1);
                                }
                                t.preventDefault(),
                                  null === (s = this.linkService.eventBus) ||
                                    void 0 === s ||
                                    s.dispatch('dispatcheventinsandbox', {
                                      source: this,
                                      detail: {
                                        id: e,
                                        name: 'Keystroke',
                                        value: n,
                                        change: i || '',
                                        willCommit: !1,
                                        selStart: l,
                                        selEnd: c
                                      }
                                    });
                              }),
                            this._setEventListeners(
                              s,
                              p,
                              [
                                ['focus', 'Focus'],
                                ['blur', 'Blur'],
                                ['mousedown', 'Mouse Down'],
                                ['mouseenter', 'Mouse Enter'],
                                ['mouseleave', 'Mouse Exit'],
                                ['mouseup', 'Mouse Up']
                              ],
                              (t) => t.target.value
                            );
                        }
                        if (
                          (_ && s.addEventListener('blur', _), this.data.comb)
                        ) {
                          const t = (this.data.rect[2] - this.data.rect[0]) / h;
                          s.classList.add('comb'),
                            (s.style.letterSpacing = 'calc('.concat(
                              t,
                              'px * var(--scale-factor) - 1ch)'
                            ));
                        }
                      } else
                        (s = document.createElement('div')),
                          (s.textContent = this.data.fieldValue),
                          (s.style.verticalAlign = 'middle'),
                          (s.style.display = 'table-cell');
                      return (
                        this._setTextStyle(s),
                        this._setBackgroundColor(s),
                        this._setDefaultPropertiesFromJS(s),
                        this.container.append(s),
                        this.container
                      );
                    }
                  }
                  class F extends P {
                    constructor(t) {
                      super(t, { isRenderable: !!t.data.hasOwnCanvas });
                    }
                  }
                  class S extends P {
                    constructor(t) {
                      super(t, { isRenderable: t.renderForms });
                    }
                    render() {
                      const t = this.annotationStorage,
                        e = this.data,
                        s = e.id;
                      let i = t.getValue(s, {
                        value: e.exportValue === e.fieldValue
                      }).value;
                      'string' === typeof i &&
                        ((i = 'Off' !== i), t.setValue(s, { value: i })),
                        this.container.classList.add(
                          'buttonWidgetAnnotation',
                          'checkBox'
                        );
                      const a = document.createElement('input');
                      return (
                        d.add(a),
                        a.setAttribute('data-element-id', s),
                        (a.disabled = e.readOnly),
                        this._setRequired(a, this.data.required),
                        (a.type = 'checkbox'),
                        (a.name = e.fieldName),
                        i && a.setAttribute('checked', !0),
                        a.setAttribute('exportValue', e.exportValue),
                        (a.tabIndex = c),
                        a.addEventListener('change', (i) => {
                          const { name: a, checked: n } = i.target;
                          for (const r of this._getElementsByName(a, s)) {
                            const s = n && r.exportValue === e.exportValue;
                            r.domElement && (r.domElement.checked = s),
                              t.setValue(r.id, { value: s });
                          }
                          t.setValue(s, { value: n });
                        }),
                        a.addEventListener('resetform', (t) => {
                          const s = e.defaultFieldValue || 'Off';
                          t.target.checked = s === e.exportValue;
                        }),
                        this.enableScripting &&
                          this.hasJSActions &&
                          (a.addEventListener('updatefromsandbox', (e) => {
                            const i = {
                              value(e) {
                                (e.target.checked = 'Off' !== e.detail.value),
                                  t.setValue(s, { value: e.target.checked });
                              }
                            };
                            this._dispatchEventFromSandbox(i, e);
                          }),
                          this._setEventListeners(
                            a,
                            null,
                            [
                              ['change', 'Validate'],
                              ['change', 'Action'],
                              ['focus', 'Focus'],
                              ['blur', 'Blur'],
                              ['mousedown', 'Mouse Down'],
                              ['mouseenter', 'Mouse Enter'],
                              ['mouseleave', 'Mouse Exit'],
                              ['mouseup', 'Mouse Up']
                            ],
                            (t) => t.target.checked
                          )),
                        this._setBackgroundColor(a),
                        this._setDefaultPropertiesFromJS(a),
                        this.container.append(a),
                        this.container
                      );
                    }
                  }
                  class y extends P {
                    constructor(t) {
                      super(t, { isRenderable: t.renderForms });
                    }
                    render() {
                      this.container.classList.add(
                        'buttonWidgetAnnotation',
                        'radioButton'
                      );
                      const t = this.annotationStorage,
                        e = this.data,
                        s = e.id;
                      let i = t.getValue(s, {
                        value: e.fieldValue === e.buttonValue
                      }).value;
                      'string' === typeof i &&
                        ((i = i !== e.buttonValue),
                        t.setValue(s, { value: i }));
                      const a = document.createElement('input');
                      if (
                        (d.add(a),
                        a.setAttribute('data-element-id', s),
                        (a.disabled = e.readOnly),
                        this._setRequired(a, this.data.required),
                        (a.type = 'radio'),
                        (a.name = e.fieldName),
                        i && a.setAttribute('checked', !0),
                        (a.tabIndex = c),
                        a.addEventListener('change', (e) => {
                          const { name: i, checked: a } = e.target;
                          for (const n of this._getElementsByName(i, s))
                            t.setValue(n.id, { value: !1 });
                          t.setValue(s, { value: a });
                        }),
                        a.addEventListener('resetform', (t) => {
                          const s = e.defaultFieldValue;
                          t.target.checked =
                            null !== s && void 0 !== s && s === e.buttonValue;
                        }),
                        this.enableScripting && this.hasJSActions)
                      ) {
                        const i = e.buttonValue;
                        a.addEventListener('updatefromsandbox', (e) => {
                          const a = {
                            value: (e) => {
                              const a = i === e.detail.value;
                              for (const i of this._getElementsByName(
                                e.target.name
                              )) {
                                const e = a && i.id === s;
                                i.domElement && (i.domElement.checked = e),
                                  t.setValue(i.id, { value: e });
                              }
                            }
                          };
                          this._dispatchEventFromSandbox(a, e);
                        }),
                          this._setEventListeners(
                            a,
                            null,
                            [
                              ['change', 'Validate'],
                              ['change', 'Action'],
                              ['focus', 'Focus'],
                              ['blur', 'Blur'],
                              ['mousedown', 'Mouse Down'],
                              ['mouseenter', 'Mouse Enter'],
                              ['mouseleave', 'Mouse Exit'],
                              ['mouseup', 'Mouse Up']
                            ],
                            (t) => t.target.checked
                          );
                      }
                      return (
                        this._setBackgroundColor(a),
                        this._setDefaultPropertiesFromJS(a),
                        this.container.append(a),
                        this.container
                      );
                    }
                  }
                  class w extends v {
                    constructor(t) {
                      super(t, { ignoreBorder: t.data.hasAppearance });
                    }
                    render() {
                      const t = super.render();
                      t.classList.add('buttonWidgetAnnotation', 'pushButton'),
                        this.data.alternativeText &&
                          (t.title = this.data.alternativeText);
                      const e = t.lastChild;
                      return (
                        this.enableScripting &&
                          this.hasJSActions &&
                          e &&
                          (this._setDefaultPropertiesFromJS(e),
                          e.addEventListener('updatefromsandbox', (t) => {
                            this._dispatchEventFromSandbox({}, t);
                          })),
                        t
                      );
                    }
                  }
                  class x extends P {
                    constructor(t) {
                      super(t, { isRenderable: t.renderForms });
                    }
                    render() {
                      this.container.classList.add('choiceWidgetAnnotation');
                      const t = this.annotationStorage,
                        e = this.data.id,
                        s = t.getValue(e, { value: this.data.fieldValue }),
                        i = document.createElement('select');
                      d.add(i),
                        i.setAttribute('data-element-id', e),
                        (i.disabled = this.data.readOnly),
                        this._setRequired(i, this.data.required),
                        (i.name = this.data.fieldName),
                        (i.tabIndex = c);
                      let a = this.data.combo && this.data.options.length > 0;
                      this.data.combo ||
                        ((i.size = this.data.options.length),
                        this.data.multiSelect && (i.multiple = !0)),
                        i.addEventListener('resetform', (t) => {
                          const e = this.data.defaultFieldValue;
                          for (const s of i.options) s.selected = s.value === e;
                        });
                      for (const c of this.data.options) {
                        const t = document.createElement('option');
                        (t.textContent = c.displayValue),
                          (t.value = c.exportValue),
                          s.value.includes(c.exportValue) &&
                            (t.setAttribute('selected', !0), (a = !1)),
                          i.append(t);
                      }
                      let n = null;
                      if (a) {
                        const t = document.createElement('option');
                        (t.value = ' '),
                          t.setAttribute('hidden', !0),
                          t.setAttribute('selected', !0),
                          i.prepend(t),
                          (n = () => {
                            t.remove(),
                              i.removeEventListener('input', n),
                              (n = null);
                          }),
                          i.addEventListener('input', n);
                      }
                      const r = (t) => {
                        const e = t ? 'value' : 'textContent',
                          { options: s, multiple: a } = i;
                        return a
                          ? Array.prototype.filter
                              .call(s, (t) => t.selected)
                              .map((t) => t[e])
                          : -1 === s.selectedIndex
                          ? null
                          : s[s.selectedIndex][e];
                      };
                      let o = r(!1);
                      const l = (t) => {
                        const e = t.target.options;
                        return Array.prototype.map.call(e, (t) => ({
                          displayValue: t.textContent,
                          exportValue: t.value
                        }));
                      };
                      return (
                        this.enableScripting && this.hasJSActions
                          ? (i.addEventListener('updatefromsandbox', (s) => {
                              const a = {
                                value(s) {
                                  var a;
                                  null === (a = n) || void 0 === a || a();
                                  const l = s.detail.value,
                                    c = new Set(Array.isArray(l) ? l : [l]);
                                  for (const t of i.options)
                                    t.selected = c.has(t.value);
                                  t.setValue(e, { value: r(!0) }), (o = r(!1));
                                },
                                multipleSelection(t) {
                                  i.multiple = !0;
                                },
                                remove(s) {
                                  const a = i.options,
                                    n = s.detail.remove;
                                  (a[n].selected = !1),
                                    i.remove(n),
                                    a.length > 0 &&
                                      -1 ===
                                        Array.prototype.findIndex.call(
                                          a,
                                          (t) => t.selected
                                        ) &&
                                      (a[0].selected = !0),
                                    t.setValue(e, {
                                      value: r(!0),
                                      items: l(s)
                                    }),
                                    (o = r(!1));
                                },
                                clear(s) {
                                  for (; 0 !== i.length; ) i.remove(0);
                                  t.setValue(e, { value: null, items: [] }),
                                    (o = r(!1));
                                },
                                insert(s) {
                                  const {
                                      index: a,
                                      displayValue: n,
                                      exportValue: c
                                    } = s.detail.insert,
                                    d = i.children[a],
                                    h = document.createElement('option');
                                  (h.textContent = n),
                                    (h.value = c),
                                    d ? d.before(h) : i.append(h),
                                    t.setValue(e, {
                                      value: r(!0),
                                      items: l(s)
                                    }),
                                    (o = r(!1));
                                },
                                items(s) {
                                  const { items: a } = s.detail;
                                  for (; 0 !== i.length; ) i.remove(0);
                                  for (const t of a) {
                                    const { displayValue: e, exportValue: s } =
                                        t,
                                      a = document.createElement('option');
                                    (a.textContent = e),
                                      (a.value = s),
                                      i.append(a);
                                  }
                                  i.options.length > 0 &&
                                    (i.options[0].selected = !0),
                                    t.setValue(e, {
                                      value: r(!0),
                                      items: l(s)
                                    }),
                                    (o = r(!1));
                                },
                                indices(s) {
                                  const i = new Set(s.detail.indices);
                                  for (const t of s.target.options)
                                    t.selected = i.has(t.index);
                                  t.setValue(e, { value: r(!0) }), (o = r(!1));
                                },
                                editable(t) {
                                  t.target.disabled = !t.detail.editable;
                                }
                              };
                              this._dispatchEventFromSandbox(a, s);
                            }),
                            i.addEventListener('input', (s) => {
                              var i;
                              const a = r(!0);
                              t.setValue(e, { value: a }),
                                s.preventDefault(),
                                null === (i = this.linkService.eventBus) ||
                                  void 0 === i ||
                                  i.dispatch('dispatcheventinsandbox', {
                                    source: this,
                                    detail: {
                                      id: e,
                                      name: 'Keystroke',
                                      value: o,
                                      changeEx: a,
                                      willCommit: !1,
                                      commitKey: 1,
                                      keyDown: !1
                                    }
                                  });
                            }),
                            this._setEventListeners(
                              i,
                              null,
                              [
                                ['focus', 'Focus'],
                                ['blur', 'Blur'],
                                ['mousedown', 'Mouse Down'],
                                ['mouseenter', 'Mouse Enter'],
                                ['mouseleave', 'Mouse Exit'],
                                ['mouseup', 'Mouse Up'],
                                ['input', 'Action'],
                                ['input', 'Validate']
                              ],
                              (t) => t.target.value
                            ))
                          : i.addEventListener('input', function (s) {
                              t.setValue(e, { value: r(!0) });
                            }),
                        this.data.combo && this._setTextStyle(i),
                        this._setBackgroundColor(i),
                        this._setDefaultPropertiesFromJS(i),
                        this.container.append(i),
                        this.container
                      );
                    }
                  }
                  class C extends _ {
                    constructor(t) {
                      const { data: e, elements: s } = t;
                      super(t, { isRenderable: _._hasPopupData(e) }),
                        (this.elements = s);
                    }
                    render() {
                      this.container.classList.add('popupAnnotation');
                      const t = new V({
                          container: this.container,
                          color: this.data.color,
                          titleObj: this.data.titleObj,
                          modificationDate: this.data.modificationDate,
                          contentsObj: this.data.contentsObj,
                          richText: this.data.richText,
                          rect: this.data.rect,
                          parentRect: this.data.parentRect || null,
                          parent: this.parent,
                          elements: this.elements,
                          open: this.data.open
                        }),
                        e = [];
                      for (const s of this.elements)
                        (s.popup = t), e.push(s.data.id), s.addHighlightArea();
                      return (
                        this.container.setAttribute(
                          'aria-controls',
                          e
                            .map((t) => ''.concat(i.AnnotationPrefix).concat(t))
                            .join(',')
                        ),
                        this.container
                      );
                    }
                  }
                  var E = new WeakMap(),
                    k = new WeakMap(),
                    M = new WeakMap(),
                    T = new WeakMap(),
                    I = new WeakMap(),
                    R = new WeakMap(),
                    D = new WeakMap(),
                    G = new WeakMap(),
                    L = new WeakMap(),
                    O = new WeakMap(),
                    B = new WeakMap(),
                    N = new WeakMap(),
                    W = new WeakMap(),
                    j = new WeakMap(),
                    U = new WeakMap(),
                    H = new WeakMap(),
                    z = new WeakMap(),
                    q = new WeakSet();
                  class V {
                    constructor(t) {
                      let {
                        container: e,
                        color: s,
                        elements: i,
                        titleObj: n,
                        modificationDate: r,
                        contentsObj: o,
                        richText: l,
                        parent: c,
                        rect: d,
                        parentRect: h,
                        open: u
                      } = t;
                      _classPrivateMethodInitSpec(this, q),
                        _classPrivateFieldInitSpec(this, E, null),
                        _classPrivateFieldInitSpec(
                          this,
                          k,
                          _assertClassBrand(q, this, X).bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          M,
                          _assertClassBrand(q, this, J).bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          T,
                          _assertClassBrand(q, this, K).bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          I,
                          _assertClassBrand(q, this, Y).bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, R, null),
                        _classPrivateFieldInitSpec(this, D, null),
                        _classPrivateFieldInitSpec(this, G, null),
                        _classPrivateFieldInitSpec(this, L, null),
                        _classPrivateFieldInitSpec(this, O, null),
                        _classPrivateFieldInitSpec(this, B, null),
                        _classPrivateFieldInitSpec(this, N, !1),
                        _classPrivateFieldInitSpec(this, W, null),
                        _classPrivateFieldInitSpec(this, j, null),
                        _classPrivateFieldInitSpec(this, U, null),
                        _classPrivateFieldInitSpec(this, H, null),
                        _classPrivateFieldInitSpec(this, z, !1),
                        _classPrivateFieldSet(D, this, e),
                        _classPrivateFieldSet(H, this, n),
                        _classPrivateFieldSet(G, this, o),
                        _classPrivateFieldSet(U, this, l),
                        _classPrivateFieldSet(O, this, c),
                        _classPrivateFieldSet(R, this, s),
                        _classPrivateFieldSet(j, this, d),
                        _classPrivateFieldSet(B, this, h),
                        _classPrivateFieldSet(L, this, i);
                      const p = a.PDFDateString.toDateObject(r);
                      p &&
                        _classPrivateFieldSet(
                          E,
                          this,
                          c.l10n.get('annotation_date_string', {
                            date: p.toLocaleDateString(),
                            time: p.toLocaleTimeString()
                          })
                        ),
                        (this.trigger = i.flatMap((t) =>
                          t.getElementsToTriggerPopup()
                        ));
                      for (const a of this.trigger)
                        a.addEventListener(
                          'click',
                          _classPrivateFieldGet(I, this)
                        ),
                          a.addEventListener(
                            'mouseenter',
                            _classPrivateFieldGet(T, this)
                          ),
                          a.addEventListener(
                            'mouseleave',
                            _classPrivateFieldGet(M, this)
                          ),
                          a.classList.add('popupTriggerArea');
                      for (const a of i) {
                        var _;
                        null === (_ = a.container) ||
                          void 0 === _ ||
                          _.addEventListener(
                            'keydown',
                            _classPrivateFieldGet(k, this)
                          );
                      }
                      (_classPrivateFieldGet(D, this).hidden = !0),
                        u && _assertClassBrand(q, this, Y).call(this);
                    }
                    render() {
                      if (_classPrivateFieldGet(W, this)) return;
                      const {
                          page: { view: t },
                          viewport: {
                            rawDims: {
                              pageWidth: e,
                              pageHeight: s,
                              pageX: a,
                              pageY: n
                            }
                          }
                        } = _classPrivateFieldGet(O, this),
                        r = _classPrivateFieldSet(
                          W,
                          this,
                          document.createElement('div')
                        );
                      if (
                        ((r.className = 'popup'),
                        _classPrivateFieldGet(R, this))
                      ) {
                        const t = (r.style.outlineColor = i.Util.makeHexColor(
                          ..._classPrivateFieldGet(R, this)
                        ));
                        if (
                          CSS.supports(
                            'background-color',
                            'color-mix(in srgb, red 30%, white)'
                          )
                        )
                          r.style.backgroundColor =
                            'color-mix(in srgb, '.concat(t, ' 30%, white)');
                        else {
                          const t = 0.7;
                          r.style.backgroundColor = i.Util.makeHexColor(
                            ..._classPrivateFieldGet(R, this).map((e) =>
                              Math.floor(t * (255 - e) + e)
                            )
                          );
                        }
                      }
                      const o = document.createElement('span');
                      o.className = 'header';
                      const c = document.createElement('h1');
                      if (
                        (o.append(c),
                        ({ dir: c.dir, str: c.textContent } =
                          _classPrivateFieldGet(H, this)),
                        r.append(o),
                        _classPrivateFieldGet(E, this))
                      ) {
                        const t = document.createElement('span');
                        t.classList.add('popupDate'),
                          _classPrivateFieldGet(E, this).then((e) => {
                            t.textContent = e;
                          }),
                          o.append(t);
                      }
                      const d = _classPrivateFieldGet(G, this),
                        h = _classPrivateFieldGet(U, this);
                      if (
                        null === h ||
                        void 0 === h ||
                        !h.str ||
                        (null !== d && void 0 !== d && d.str && d.str !== h.str)
                      ) {
                        const t = this._formatContents(d);
                        r.append(t);
                      } else
                        l.XfaLayer.render({
                          xfaHtml: h.html,
                          intent: 'richText',
                          div: r
                        }),
                          r.lastChild.classList.add('richText', 'popupContent');
                      let u = !!_classPrivateFieldGet(B, this),
                        p = _classPrivateFieldGet(u ? B : j, this);
                      for (const l of _classPrivateFieldGet(L, this))
                        if (!p || null !== i.Util.intersect(l.data.rect, p)) {
                          (p = l.data.rect), (u = !0);
                          break;
                        }
                      const _ = i.Util.normalizeRect([
                          p[0],
                          t[3] - p[1] + t[1],
                          p[2],
                          t[3] - p[3] + t[1]
                        ]),
                        g = u ? p[2] - p[0] + 5 : 0,
                        v = _[0] + g,
                        f = _[1],
                        { style: m } = _classPrivateFieldGet(D, this);
                      (m.left = ''.concat((100 * (v - a)) / e, '%')),
                        (m.top = ''.concat((100 * (f - n)) / s, '%')),
                        _classPrivateFieldGet(D, this).append(r);
                    }
                    _formatContents(t) {
                      let { str: e, dir: s } = t;
                      const i = document.createElement('p');
                      i.classList.add('popupContent'), (i.dir = s);
                      const a = e.split(/(?:\r\n?|\n)/);
                      for (let n = 0, r = a.length; n < r; ++n) {
                        const t = a[n];
                        i.append(document.createTextNode(t)),
                          n < r - 1 && i.append(document.createElement('br'));
                      }
                      return i;
                    }
                    forceHide() {
                      _classPrivateFieldSet(z, this, this.isVisible),
                        _classPrivateFieldGet(z, this) &&
                          (_classPrivateFieldGet(D, this).hidden = !0);
                    }
                    maybeShow() {
                      _classPrivateFieldGet(z, this) &&
                        (_classPrivateFieldSet(z, this, !1),
                        (_classPrivateFieldGet(D, this).hidden = !1));
                    }
                    get isVisible() {
                      return !1 === _classPrivateFieldGet(D, this).hidden;
                    }
                  }
                  function X(t) {
                    t.altKey ||
                      t.shiftKey ||
                      t.ctrlKey ||
                      t.metaKey ||
                      (('Enter' === t.key ||
                        ('Escape' === t.key &&
                          _classPrivateFieldGet(N, this))) &&
                        _assertClassBrand(q, this, Y).call(this));
                  }
                  function Y() {
                    _classPrivateFieldSet(
                      N,
                      this,
                      !_classPrivateFieldGet(N, this)
                    ),
                      _classPrivateFieldGet(N, this)
                        ? (_assertClassBrand(q, this, K).call(this),
                          _classPrivateFieldGet(D, this).addEventListener(
                            'click',
                            _classPrivateFieldGet(I, this)
                          ),
                          _classPrivateFieldGet(D, this).addEventListener(
                            'keydown',
                            _classPrivateFieldGet(k, this)
                          ))
                        : (_assertClassBrand(q, this, J).call(this),
                          _classPrivateFieldGet(D, this).removeEventListener(
                            'click',
                            _classPrivateFieldGet(I, this)
                          ),
                          _classPrivateFieldGet(D, this).removeEventListener(
                            'keydown',
                            _classPrivateFieldGet(k, this)
                          ));
                  }
                  function K() {
                    _classPrivateFieldGet(W, this) || this.render(),
                      this.isVisible
                        ? _classPrivateFieldGet(N, this) &&
                          _classPrivateFieldGet(D, this).classList.add(
                            'focused'
                          )
                        : ((_classPrivateFieldGet(D, this).hidden = !1),
                          (_classPrivateFieldGet(D, this).style.zIndex =
                            parseInt(
                              _classPrivateFieldGet(D, this).style.zIndex
                            ) + 1e3));
                  }
                  function J() {
                    _classPrivateFieldGet(D, this).classList.remove('focused'),
                      !_classPrivateFieldGet(N, this) &&
                        this.isVisible &&
                        ((_classPrivateFieldGet(D, this).hidden = !0),
                        (_classPrivateFieldGet(D, this).style.zIndex =
                          parseInt(
                            _classPrivateFieldGet(D, this).style.zIndex
                          ) - 1e3));
                  }
                  class Q extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        (this.textContent = t.data.textContent),
                        (this.textPosition = t.data.textPosition),
                        (this.annotationEditorType =
                          i.AnnotationEditorType.FREETEXT);
                    }
                    render() {
                      if (
                        (this.container.classList.add('freeTextAnnotation'),
                        this.textContent)
                      ) {
                        const t = document.createElement('div');
                        t.classList.add('annotationTextContent'),
                          t.setAttribute('role', 'comment');
                        for (const e of this.textContent) {
                          const s = document.createElement('span');
                          (s.textContent = e), t.append(s);
                        }
                        this.container.append(t);
                      }
                      return (
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this._editOnDoubleClick(),
                        this.container
                      );
                    }
                  }
                  e.FreeTextAnnotationElement = Q;
                  var Z = new WeakMap();
                  class $ extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        _classPrivateFieldInitSpec(this, Z, null);
                    }
                    render() {
                      this.container.classList.add('lineAnnotation');
                      const t = this.data,
                        { width: e, height: s } = h(t.rect),
                        i = this.svgFactory.create(e, s, !0),
                        a = _classPrivateFieldSet(
                          Z,
                          this,
                          this.svgFactory.createElement('svg:line')
                        );
                      return (
                        a.setAttribute('x1', t.rect[2] - t.lineCoordinates[0]),
                        a.setAttribute('y1', t.rect[3] - t.lineCoordinates[1]),
                        a.setAttribute('x2', t.rect[2] - t.lineCoordinates[2]),
                        a.setAttribute('y2', t.rect[3] - t.lineCoordinates[3]),
                        a.setAttribute(
                          'stroke-width',
                          t.borderStyle.width || 1
                        ),
                        a.setAttribute('stroke', 'transparent'),
                        a.setAttribute('fill', 'transparent'),
                        i.append(a),
                        this.container.append(i),
                        !t.popupRef && this.hasPopupData && this._createPopup(),
                        this.container
                      );
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(Z, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  var tt = new WeakMap();
                  class et extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        _classPrivateFieldInitSpec(this, tt, null);
                    }
                    render() {
                      this.container.classList.add('squareAnnotation');
                      const t = this.data,
                        { width: e, height: s } = h(t.rect),
                        i = this.svgFactory.create(e, s, !0),
                        a = t.borderStyle.width,
                        n = _classPrivateFieldSet(
                          tt,
                          this,
                          this.svgFactory.createElement('svg:rect')
                        );
                      return (
                        n.setAttribute('x', a / 2),
                        n.setAttribute('y', a / 2),
                        n.setAttribute('width', e - a),
                        n.setAttribute('height', s - a),
                        n.setAttribute('stroke-width', a || 1),
                        n.setAttribute('stroke', 'transparent'),
                        n.setAttribute('fill', 'transparent'),
                        i.append(n),
                        this.container.append(i),
                        !t.popupRef && this.hasPopupData && this._createPopup(),
                        this.container
                      );
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(tt, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  var st = new WeakMap();
                  class it extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        _classPrivateFieldInitSpec(this, st, null);
                    }
                    render() {
                      this.container.classList.add('circleAnnotation');
                      const t = this.data,
                        { width: e, height: s } = h(t.rect),
                        i = this.svgFactory.create(e, s, !0),
                        a = t.borderStyle.width,
                        n = _classPrivateFieldSet(
                          st,
                          this,
                          this.svgFactory.createElement('svg:ellipse')
                        );
                      return (
                        n.setAttribute('cx', e / 2),
                        n.setAttribute('cy', s / 2),
                        n.setAttribute('rx', e / 2 - a / 2),
                        n.setAttribute('ry', s / 2 - a / 2),
                        n.setAttribute('stroke-width', a || 1),
                        n.setAttribute('stroke', 'transparent'),
                        n.setAttribute('fill', 'transparent'),
                        i.append(n),
                        this.container.append(i),
                        !t.popupRef && this.hasPopupData && this._createPopup(),
                        this.container
                      );
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(st, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  var at = new WeakMap();
                  class nt extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        _classPrivateFieldInitSpec(this, at, null),
                        (this.containerClassName = 'polylineAnnotation'),
                        (this.svgElementName = 'svg:polyline');
                    }
                    render() {
                      this.container.classList.add(this.containerClassName);
                      const t = this.data,
                        { width: e, height: s } = h(t.rect),
                        i = this.svgFactory.create(e, s, !0);
                      let a = [];
                      for (const r of t.vertices) {
                        const e = r.x - t.rect[0],
                          s = t.rect[3] - r.y;
                        a.push(e + ',' + s);
                      }
                      a = a.join(' ');
                      const n = _classPrivateFieldSet(
                        at,
                        this,
                        this.svgFactory.createElement(this.svgElementName)
                      );
                      return (
                        n.setAttribute('points', a),
                        n.setAttribute(
                          'stroke-width',
                          t.borderStyle.width || 1
                        ),
                        n.setAttribute('stroke', 'transparent'),
                        n.setAttribute('fill', 'transparent'),
                        i.append(n),
                        this.container.append(i),
                        !t.popupRef && this.hasPopupData && this._createPopup(),
                        this.container
                      );
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(at, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  class rt extends nt {
                    constructor(t) {
                      super(t),
                        (this.containerClassName = 'polygonAnnotation'),
                        (this.svgElementName = 'svg:polygon');
                    }
                  }
                  class ot extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 });
                    }
                    render() {
                      return (
                        this.container.classList.add('caretAnnotation'),
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container
                      );
                    }
                  }
                  var lt = new WeakMap();
                  class ct extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 }),
                        _classPrivateFieldInitSpec(this, lt, []),
                        (this.containerClassName = 'inkAnnotation'),
                        (this.svgElementName = 'svg:polyline'),
                        (this.annotationEditorType =
                          i.AnnotationEditorType.INK);
                    }
                    render() {
                      this.container.classList.add(this.containerClassName);
                      const t = this.data,
                        { width: e, height: s } = h(t.rect),
                        i = this.svgFactory.create(e, s, !0);
                      for (const a of t.inkLists) {
                        let e = [];
                        for (const i of a) {
                          const s = i.x - t.rect[0],
                            a = t.rect[3] - i.y;
                          e.push(''.concat(s, ',').concat(a));
                        }
                        e = e.join(' ');
                        const s = this.svgFactory.createElement(
                          this.svgElementName
                        );
                        _classPrivateFieldGet(lt, this).push(s),
                          s.setAttribute('points', e),
                          s.setAttribute(
                            'stroke-width',
                            t.borderStyle.width || 1
                          ),
                          s.setAttribute('stroke', 'transparent'),
                          s.setAttribute('fill', 'transparent'),
                          !t.popupRef &&
                            this.hasPopupData &&
                            this._createPopup(),
                          i.append(s);
                      }
                      return this.container.append(i), this.container;
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(lt, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  e.InkAnnotationElement = ct;
                  class dt extends _ {
                    constructor(t) {
                      super(t, {
                        isRenderable: !0,
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                      });
                    }
                    render() {
                      return (
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container.classList.add('highlightAnnotation'),
                        this.container
                      );
                    }
                  }
                  class ht extends _ {
                    constructor(t) {
                      super(t, {
                        isRenderable: !0,
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                      });
                    }
                    render() {
                      return (
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container.classList.add('underlineAnnotation'),
                        this.container
                      );
                    }
                  }
                  class ut extends _ {
                    constructor(t) {
                      super(t, {
                        isRenderable: !0,
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                      });
                    }
                    render() {
                      return (
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container.classList.add('squigglyAnnotation'),
                        this.container
                      );
                    }
                  }
                  class pt extends _ {
                    constructor(t) {
                      super(t, {
                        isRenderable: !0,
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                      });
                    }
                    render() {
                      return (
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container.classList.add('strikeoutAnnotation'),
                        this.container
                      );
                    }
                  }
                  class _t extends _ {
                    constructor(t) {
                      super(t, { isRenderable: !0, ignoreBorder: !0 });
                    }
                    render() {
                      return (
                        this.container.classList.add('stampAnnotation'),
                        !this.data.popupRef &&
                          this.hasPopupData &&
                          this._createPopup(),
                        this.container
                      );
                    }
                  }
                  e.StampAnnotationElement = _t;
                  var gt = new WeakMap(),
                    vt = new WeakSet();
                  class ft extends _ {
                    constructor(t) {
                      var e;
                      super(t, { isRenderable: !0 }),
                        _classPrivateMethodInitSpec(this, vt),
                        _classPrivateFieldInitSpec(this, gt, null);
                      const { filename: s, content: i } = this.data.file;
                      (this.filename = (0, a.getFilenameFromUrl)(s, !0)),
                        (this.content = i),
                        null === (e = this.linkService.eventBus) ||
                          void 0 === e ||
                          e.dispatch('fileattachmentannotation', {
                            source: this,
                            filename: s,
                            content: i
                          });
                    }
                    render() {
                      this.container.classList.add('fileAttachmentAnnotation');
                      const { container: t, data: e } = this;
                      let s;
                      e.hasAppearance || 0 === e.fillAlpha
                        ? (s = document.createElement('div'))
                        : ((s = document.createElement('img')),
                          (s.src = ''
                            .concat(this.imageResourcesPath, 'annotation-')
                            .concat(
                              /paperclip/i.test(e.name)
                                ? 'paperclip'
                                : 'pushpin',
                              '.svg'
                            )),
                          e.fillAlpha &&
                            e.fillAlpha < 1 &&
                            (s.style = 'filter: opacity('.concat(
                              Math.round(100 * e.fillAlpha),
                              '%);'
                            ))),
                        s.addEventListener(
                          'dblclick',
                          _assertClassBrand(vt, this, mt).bind(this)
                        ),
                        _classPrivateFieldSet(gt, this, s);
                      const { isMac: a } = i.FeatureTest.platform;
                      return (
                        t.addEventListener('keydown', (t) => {
                          'Enter' === t.key &&
                            (a ? t.metaKey : t.ctrlKey) &&
                            _assertClassBrand(vt, this, mt).call(this);
                        }),
                        !e.popupRef && this.hasPopupData
                          ? this._createPopup()
                          : s.classList.add('popupTriggerArea'),
                        t.append(s),
                        t
                      );
                    }
                    getElementsToTriggerPopup() {
                      return _classPrivateFieldGet(gt, this);
                    }
                    addHighlightArea() {
                      this.container.classList.add('highlightArea');
                    }
                  }
                  function mt() {
                    var t;
                    null === (t = this.downloadManager) ||
                      void 0 === t ||
                      t.openOrDownloadData(
                        this.container,
                        this.content,
                        this.filename
                      );
                  }
                  var bt = new WeakMap(),
                    Pt = new WeakMap(),
                    At = new WeakMap(),
                    Ft = new WeakSet();
                  function St(t, e) {
                    var s;
                    const a = t.firstChild || t;
                    (a.id = ''.concat(i.AnnotationPrefix).concat(e)),
                      this.div.append(t),
                      null === (s = _classPrivateFieldGet(bt, this)) ||
                        void 0 === s ||
                        s.moveElementInDOM(this.div, t, a, !1);
                  }
                  function yt() {
                    if (!_classPrivateFieldGet(Pt, this)) return;
                    const t = this.div;
                    for (const [e, s] of _classPrivateFieldGet(Pt, this)) {
                      const i = t.querySelector(
                        '[data-annotation-id="'.concat(e, '"]')
                      );
                      if (!i) continue;
                      const { firstChild: a } = i;
                      a
                        ? 'CANVAS' === a.nodeName
                          ? a.replaceWith(s)
                          : a.before(s)
                        : i.append(s);
                    }
                    _classPrivateFieldGet(Pt, this).clear();
                  }
                  e.AnnotationLayer = class {
                    constructor(t) {
                      let {
                        div: e,
                        accessibilityManager: s,
                        annotationCanvasMap: i,
                        l10n: a,
                        page: n,
                        viewport: r
                      } = t;
                      _classPrivateMethodInitSpec(this, Ft),
                        _classPrivateFieldInitSpec(this, bt, null),
                        _classPrivateFieldInitSpec(this, Pt, null),
                        _classPrivateFieldInitSpec(this, At, new Map()),
                        (this.div = e),
                        _classPrivateFieldSet(bt, this, s),
                        _classPrivateFieldSet(Pt, this, i),
                        (this.l10n = a),
                        (this.page = n),
                        (this.viewport = r),
                        (this.zIndex = 0),
                        this.l10n || (this.l10n = o.NullL10n);
                    }
                    async render(t) {
                      const { annotations: e } = t,
                        s = this.div;
                      (0, a.setLayerDimensions)(s, this.viewport);
                      const r = new Map(),
                        o = {
                          data: null,
                          layer: s,
                          linkService: t.linkService,
                          downloadManager: t.downloadManager,
                          imageResourcesPath: t.imageResourcesPath || '',
                          renderForms: !1 !== t.renderForms,
                          svgFactory: new a.DOMSVGFactory(),
                          annotationStorage:
                            t.annotationStorage || new n.AnnotationStorage(),
                          enableScripting: !0 === t.enableScripting,
                          hasJSActions: t.hasJSActions,
                          fieldObjects: t.fieldObjects,
                          parent: this,
                          elements: null
                        };
                      for (const a of e) {
                        if (a.noHTML) continue;
                        const t = a.annotationType === i.AnnotationType.POPUP;
                        if (t) {
                          const t = r.get(a.id);
                          if (!t) continue;
                          o.elements = t;
                        } else {
                          const { width: t, height: e } = h(a.rect);
                          if (t <= 0 || e <= 0) continue;
                        }
                        o.data = a;
                        const e = u.create(o);
                        if (!e.isRenderable) continue;
                        if (!t && a.popupRef) {
                          const t = r.get(a.popupRef);
                          t ? t.push(e) : r.set(a.popupRef, [e]);
                        }
                        e.annotationEditorType > 0 &&
                          _classPrivateFieldGet(At, this).set(e.data.id, e);
                        const s = e.render();
                        a.hidden && (s.style.visibility = 'hidden'),
                          _assertClassBrand(Ft, this, St).call(this, s, a.id);
                      }
                      _assertClassBrand(Ft, this, yt).call(this),
                        await this.l10n.translate(s);
                    }
                    update(t) {
                      let { viewport: e } = t;
                      const s = this.div;
                      (this.viewport = e),
                        (0, a.setLayerDimensions)(s, { rotation: e.rotation }),
                        _assertClassBrand(Ft, this, yt).call(this),
                        (s.hidden = !1);
                    }
                    getEditableAnnotations() {
                      return Array.from(
                        _classPrivateFieldGet(At, this).values()
                      );
                    }
                    getEditableAnnotation(t) {
                      return _classPrivateFieldGet(At, this).get(t);
                    }
                  };
                },
                (t, e) => {
                  function s(t) {
                    return Math.floor(255 * Math.max(0, Math.min(1, t)))
                      .toString(16)
                      .padStart(2, '0');
                  }
                  function i(t) {
                    return Math.max(0, Math.min(255, 255 * t));
                  }
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.ColorConverters = void 0),
                    (e.ColorConverters = class {
                      static CMYK_G(t) {
                        let [e, s, i, a] = t;
                        return [
                          'G',
                          1 - Math.min(1, 0.3 * e + 0.59 * i + 0.11 * s + a)
                        ];
                      }
                      static G_CMYK(t) {
                        let [e] = t;
                        return ['CMYK', 0, 0, 0, 1 - e];
                      }
                      static G_RGB(t) {
                        let [e] = t;
                        return ['RGB', e, e, e];
                      }
                      static G_rgb(t) {
                        let [e] = t;
                        return (e = i(e)), [e, e, e];
                      }
                      static G_HTML(t) {
                        let [e] = t;
                        const i = s(e);
                        return '#'.concat(i).concat(i).concat(i);
                      }
                      static RGB_G(t) {
                        let [e, s, i] = t;
                        return ['G', 0.3 * e + 0.59 * s + 0.11 * i];
                      }
                      static RGB_rgb(t) {
                        return t.map(i);
                      }
                      static RGB_HTML(t) {
                        return '#'.concat(t.map(s).join(''));
                      }
                      static T_HTML() {
                        return '#00000000';
                      }
                      static T_rgb() {
                        return [null];
                      }
                      static CMYK_RGB(t) {
                        let [e, s, i, a] = t;
                        return [
                          'RGB',
                          1 - Math.min(1, e + a),
                          1 - Math.min(1, i + a),
                          1 - Math.min(1, s + a)
                        ];
                      }
                      static CMYK_rgb(t) {
                        let [e, s, a, n] = t;
                        return [
                          i(1 - Math.min(1, e + n)),
                          i(1 - Math.min(1, a + n)),
                          i(1 - Math.min(1, s + n))
                        ];
                      }
                      static CMYK_HTML(t) {
                        const e = this.CMYK_RGB(t).slice(1);
                        return this.RGB_HTML(e);
                      }
                      static RGB_CMYK(t) {
                        let [e, s, i] = t;
                        const a = 1 - e,
                          n = 1 - s,
                          r = 1 - i;
                        return ['CMYK', a, n, r, Math.min(a, n, r)];
                      }
                    });
                },
                (t, e) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.NullL10n = void 0),
                    (e.getL10nFallback = i);
                  const s = {
                    of_pages: 'of {{pagesCount}}',
                    page_of_pages: '({{pageNumber}} of {{pagesCount}})',
                    document_properties_kb: '{{size_kb}} KB ({{size_b}} bytes)',
                    document_properties_mb: '{{size_mb}} MB ({{size_b}} bytes)',
                    document_properties_date_string: '{{date}}, {{time}}',
                    document_properties_page_size_unit_inches: 'in',
                    document_properties_page_size_unit_millimeters: 'mm',
                    document_properties_page_size_orientation_portrait:
                      'portrait',
                    document_properties_page_size_orientation_landscape:
                      'landscape',
                    document_properties_page_size_name_a3: 'A3',
                    document_properties_page_size_name_a4: 'A4',
                    document_properties_page_size_name_letter: 'Letter',
                    document_properties_page_size_name_legal: 'Legal',
                    document_properties_page_size_dimension_string:
                      '{{width}} \xd7 {{height}} {{unit}} ({{orientation}})',
                    document_properties_page_size_dimension_name_string:
                      '{{width}} \xd7 {{height}} {{unit}} ({{name}}, {{orientation}})',
                    document_properties_linearized_yes: 'Yes',
                    document_properties_linearized_no: 'No',
                    additional_layers: 'Additional Layers',
                    page_landmark: 'Page {{page}}',
                    thumb_page_title: 'Page {{page}}',
                    thumb_page_canvas: 'Thumbnail of Page {{page}}',
                    find_reached_top:
                      'Reached top of document, continued from bottom',
                    find_reached_bottom:
                      'Reached end of document, continued from top',
                    'find_match_count[one]': '{{current}} of {{total}} match',
                    'find_match_count[other]':
                      '{{current}} of {{total}} matches',
                    'find_match_count_limit[one]': 'More than {{limit}} match',
                    'find_match_count_limit[other]':
                      'More than {{limit}} matches',
                    find_not_found: 'Phrase not found',
                    page_scale_width: 'Page Width',
                    page_scale_fit: 'Page Fit',
                    page_scale_auto: 'Automatic Zoom',
                    page_scale_actual: 'Actual Size',
                    page_scale_percent: '{{scale}}%',
                    loading_error: 'An error occurred while loading the PDF.',
                    invalid_file_error: 'Invalid or corrupted PDF file.',
                    missing_file_error: 'Missing PDF file.',
                    unexpected_response_error: 'Unexpected server response.',
                    rendering_error:
                      'An error occurred while rendering the page.',
                    annotation_date_string: '{{date}}, {{time}}',
                    printing_not_supported:
                      'Warning: Printing is not fully supported by this browser.',
                    printing_not_ready:
                      'Warning: The PDF is not fully loaded for printing.',
                    web_fonts_disabled:
                      'Web fonts are disabled: unable to use embedded PDF fonts.',
                    free_text2_default_content: 'Start typing\u2026',
                    editor_free_text2_aria_label: 'Text Editor',
                    editor_ink2_aria_label: 'Draw Editor',
                    editor_ink_canvas_aria_label: 'User-created image',
                    editor_alt_text_button_label: 'Alt text',
                    editor_alt_text_edit_button_label: 'Edit alt text',
                    editor_alt_text_decorative_tooltip: 'Marked as decorative'
                  };
                  function i(t, e) {
                    switch (t) {
                      case 'find_match_count':
                        t = 'find_match_count['.concat(
                          1 === e.total ? 'one' : 'other',
                          ']'
                        );
                        break;
                      case 'find_match_count_limit':
                        t = 'find_match_count_limit['.concat(
                          1 === e.limit ? 'one' : 'other',
                          ']'
                        );
                    }
                    return s[t] || '';
                  }
                  s.print_progress_percent = '{{progress}}%';
                  const a = {
                    getLanguage: async () => 'en-us',
                    getDirection: async () => 'ltr',
                    async get(t) {
                      let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                      return (function (t, e) {
                        return e
                          ? t.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (t, s) =>
                              s in e ? e[s] : '{{' + s + '}}'
                            )
                          : t;
                      })(
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : i(t, e),
                        e
                      );
                    },
                    async translate(t) {}
                  };
                  e.NullL10n = a;
                },
                (t, e, s) => {
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.XfaLayer = void 0);
                  var i = s(25);
                  e.XfaLayer = class {
                    static setupStorage(t, e, s, i, a) {
                      const n = i.getValue(e, { value: null });
                      switch (s.name) {
                        case 'textarea':
                          if (
                            (null !== n.value && (t.textContent = n.value),
                            'print' === a)
                          )
                            break;
                          t.addEventListener('input', (t) => {
                            i.setValue(e, { value: t.target.value });
                          });
                          break;
                        case 'input':
                          if (
                            'radio' === s.attributes.type ||
                            'checkbox' === s.attributes.type
                          ) {
                            if (
                              (n.value === s.attributes.xfaOn
                                ? t.setAttribute('checked', !0)
                                : n.value === s.attributes.xfaOff &&
                                  t.removeAttribute('checked'),
                              'print' === a)
                            )
                              break;
                            t.addEventListener('change', (t) => {
                              i.setValue(e, {
                                value: t.target.checked
                                  ? t.target.getAttribute('xfaOn')
                                  : t.target.getAttribute('xfaOff')
                              });
                            });
                          } else {
                            if (
                              (null !== n.value &&
                                t.setAttribute('value', n.value),
                              'print' === a)
                            )
                              break;
                            t.addEventListener('input', (t) => {
                              i.setValue(e, { value: t.target.value });
                            });
                          }
                          break;
                        case 'select':
                          if (null !== n.value) {
                            t.setAttribute('value', n.value);
                            for (const t of s.children)
                              t.attributes.value === n.value
                                ? (t.attributes.selected = !0)
                                : t.attributes.hasOwnProperty('selected') &&
                                  delete t.attributes.selected;
                          }
                          t.addEventListener('input', (t) => {
                            const s = t.target.options,
                              a =
                                -1 === s.selectedIndex
                                  ? ''
                                  : s[s.selectedIndex].value;
                            i.setValue(e, { value: a });
                          });
                      }
                    }
                    static setAttributes(t) {
                      let {
                        html: e,
                        element: s,
                        storage: i = null,
                        intent: a,
                        linkService: n
                      } = t;
                      const { attributes: r } = s,
                        o = e instanceof HTMLAnchorElement;
                      'radio' === r.type &&
                        (r.name = ''.concat(r.name, '-').concat(a));
                      for (const [l, c] of Object.entries(r))
                        if (null !== c && void 0 !== c)
                          switch (l) {
                            case 'class':
                              c.length && e.setAttribute(l, c.join(' '));
                              break;
                            case 'dataId':
                              break;
                            case 'id':
                              e.setAttribute('data-element-id', c);
                              break;
                            case 'style':
                              Object.assign(e.style, c);
                              break;
                            case 'textContent':
                              e.textContent = c;
                              break;
                            default:
                              (!o || ('href' !== l && 'newWindow' !== l)) &&
                                e.setAttribute(l, c);
                          }
                      o && n.addLinkAttributes(e, r.href, r.newWindow),
                        i && r.dataId && this.setupStorage(e, r.dataId, s, i);
                    }
                    static render(t) {
                      const e = t.annotationStorage,
                        s = t.linkService,
                        a = t.xfaHtml,
                        n = t.intent || 'display',
                        r = document.createElement(a.name);
                      a.attributes &&
                        this.setAttributes({
                          html: r,
                          element: a,
                          intent: n,
                          linkService: s
                        });
                      const o = [[a, -1, r]],
                        l = t.div;
                      if ((l.append(r), t.viewport)) {
                        const e = 'matrix('.concat(
                          t.viewport.transform.join(','),
                          ')'
                        );
                        l.style.transform = e;
                      }
                      'richText' !== n &&
                        l.setAttribute('class', 'xfaLayer xfaFont');
                      const c = [];
                      for (; o.length > 0; ) {
                        var d;
                        const [t, a, r] = o.at(-1);
                        if (a + 1 === t.children.length) {
                          o.pop();
                          continue;
                        }
                        const l = t.children[++o.at(-1)[1]];
                        if (null === l) continue;
                        const { name: h } = l;
                        if ('#text' === h) {
                          const t = document.createTextNode(l.value);
                          c.push(t), r.append(t);
                          continue;
                        }
                        const u =
                          null !== l &&
                          void 0 !== l &&
                          null !== (d = l.attributes) &&
                          void 0 !== d &&
                          d.xmlns
                            ? document.createElementNS(l.attributes.xmlns, h)
                            : document.createElement(h);
                        if (
                          (r.append(u),
                          l.attributes &&
                            this.setAttributes({
                              html: u,
                              element: l,
                              storage: e,
                              intent: n,
                              linkService: s
                            }),
                          l.children && l.children.length > 0)
                        )
                          o.push([l, -1, u]);
                        else if (l.value) {
                          const t = document.createTextNode(l.value);
                          i.XfaText.shouldBuildText(h) && c.push(t),
                            u.append(t);
                        }
                      }
                      for (const i of l.querySelectorAll(
                        '.xfaNonInteractive input, .xfaNonInteractive textarea'
                      ))
                        i.setAttribute('readOnly', !0);
                      return { textDivs: c };
                    }
                    static update(t) {
                      const e = 'matrix('.concat(
                        t.viewport.transform.join(','),
                        ')'
                      );
                      (t.div.style.transform = e), (t.div.hidden = !1);
                    }
                  };
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.InkEditor = void 0);
                  var a = s(1),
                    n = s(4),
                    r = s(29),
                    o = s(6),
                    l = s(5),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap(),
                    m = new WeakMap(),
                    b = new WeakMap(),
                    P = new WeakMap(),
                    A = new WeakMap(),
                    F = new WeakMap(),
                    S = new WeakSet();
                  class y extends n.AnnotationEditor {
                    constructor(t) {
                      super({ ...t, name: 'inkEditor' }),
                        _classPrivateMethodInitSpec(this, S),
                        _classPrivateFieldInitSpec(this, c, 0),
                        _classPrivateFieldInitSpec(this, d, 0),
                        _classPrivateFieldInitSpec(
                          this,
                          h,
                          this.canvasPointermove.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          u,
                          this.canvasPointerleave.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          p,
                          this.canvasPointerup.bind(this)
                        ),
                        _classPrivateFieldInitSpec(
                          this,
                          _,
                          this.canvasPointerdown.bind(this)
                        ),
                        _classPrivateFieldInitSpec(this, g, new Path2D()),
                        _classPrivateFieldInitSpec(this, v, !1),
                        _classPrivateFieldInitSpec(this, f, !1),
                        _classPrivateFieldInitSpec(this, m, !1),
                        _classPrivateFieldInitSpec(this, b, null),
                        _classPrivateFieldInitSpec(this, P, 0),
                        _classPrivateFieldInitSpec(this, A, 0),
                        _classPrivateFieldInitSpec(this, F, null),
                        (this.color = t.color || null),
                        (this.thickness = t.thickness || null),
                        (this.opacity = t.opacity || null),
                        (this.paths = []),
                        (this.bezierPath2D = []),
                        (this.allRawPaths = []),
                        (this.currentPath = []),
                        (this.scaleFactor = 1),
                        (this.translationX = this.translationY = 0),
                        (this.x = 0),
                        (this.y = 0),
                        (this._willKeepAspectRatio = !0);
                    }
                    static initialize(t) {
                      n.AnnotationEditor.initialize(t, {
                        strings: [
                          'editor_ink_canvas_aria_label',
                          'editor_ink2_aria_label'
                        ]
                      });
                    }
                    static updateDefaultParams(t, e) {
                      switch (t) {
                        case a.AnnotationEditorParamsType.INK_THICKNESS:
                          y._defaultThickness = e;
                          break;
                        case a.AnnotationEditorParamsType.INK_COLOR:
                          y._defaultColor = e;
                          break;
                        case a.AnnotationEditorParamsType.INK_OPACITY:
                          y._defaultOpacity = e / 100;
                      }
                    }
                    updateParams(t, e) {
                      switch (t) {
                        case a.AnnotationEditorParamsType.INK_THICKNESS:
                          _assertClassBrand(S, this, w).call(this, e);
                          break;
                        case a.AnnotationEditorParamsType.INK_COLOR:
                          _assertClassBrand(S, this, x).call(this, e);
                          break;
                        case a.AnnotationEditorParamsType.INK_OPACITY:
                          _assertClassBrand(S, this, C).call(this, e);
                      }
                    }
                    static get defaultPropertiesToUpdate() {
                      return [
                        [
                          a.AnnotationEditorParamsType.INK_THICKNESS,
                          y._defaultThickness
                        ],
                        [
                          a.AnnotationEditorParamsType.INK_COLOR,
                          y._defaultColor ||
                            n.AnnotationEditor._defaultLineColor
                        ],
                        [
                          a.AnnotationEditorParamsType.INK_OPACITY,
                          Math.round(100 * y._defaultOpacity)
                        ]
                      ];
                    }
                    get propertiesToUpdate() {
                      var t;
                      return [
                        [
                          a.AnnotationEditorParamsType.INK_THICKNESS,
                          this.thickness || y._defaultThickness
                        ],
                        [
                          a.AnnotationEditorParamsType.INK_COLOR,
                          this.color ||
                            y._defaultColor ||
                            n.AnnotationEditor._defaultLineColor
                        ],
                        [
                          a.AnnotationEditorParamsType.INK_OPACITY,
                          Math.round(
                            100 *
                              (null !== (t = this.opacity) && void 0 !== t
                                ? t
                                : y._defaultOpacity)
                          )
                        ]
                      ];
                    }
                    rebuild() {
                      this.parent &&
                        (super.rebuild(),
                        null !== this.div &&
                          (this.canvas ||
                            (_assertClassBrand(S, this, N).call(this),
                            _assertClassBrand(S, this, W).call(this)),
                          this.isAttachedToDOM ||
                            (this.parent.add(this),
                            _assertClassBrand(S, this, j).call(this)),
                          _assertClassBrand(S, this, J).call(this)));
                    }
                    remove() {
                      null !== this.canvas &&
                        (this.isEmpty() || this.commit(),
                        (this.canvas.width = this.canvas.height = 0),
                        this.canvas.remove(),
                        (this.canvas = null),
                        _classPrivateFieldGet(b, this).disconnect(),
                        _classPrivateFieldSet(b, this, null),
                        super.remove());
                    }
                    setParent(t) {
                      !this.parent && t
                        ? this._uiManager.removeShouldRescale(this)
                        : this.parent &&
                          null === t &&
                          this._uiManager.addShouldRescale(this),
                        super.setParent(t);
                    }
                    onScaleChanging() {
                      const [t, e] = this.parentDimensions,
                        s = this.width * t,
                        i = this.height * e;
                      this.setDimensions(s, i);
                    }
                    enableEditMode() {
                      _classPrivateFieldGet(v, this) ||
                        null === this.canvas ||
                        (super.enableEditMode(),
                        (this._isDraggable = !1),
                        this.canvas.addEventListener(
                          'pointerdown',
                          _classPrivateFieldGet(_, this)
                        ));
                    }
                    disableEditMode() {
                      this.isInEditMode() &&
                        null !== this.canvas &&
                        (super.disableEditMode(),
                        (this._isDraggable = !this.isEmpty()),
                        this.div.classList.remove('editing'),
                        this.canvas.removeEventListener(
                          'pointerdown',
                          _classPrivateFieldGet(_, this)
                        ));
                    }
                    onceAdded() {
                      this._isDraggable = !this.isEmpty();
                    }
                    isEmpty() {
                      return (
                        0 === this.paths.length ||
                        (1 === this.paths.length && 0 === this.paths[0].length)
                      );
                    }
                    commit() {
                      _classPrivateFieldGet(v, this) ||
                        (super.commit(),
                        (this.isEditing = !1),
                        this.disableEditMode(),
                        this.setInForeground(),
                        _classPrivateFieldSet(v, this, !0),
                        this.div.classList.add('disabled'),
                        _assertClassBrand(S, this, J).call(this, !0),
                        this.makeResizable(),
                        this.parent.addInkEditorIfNeeded(!0),
                        this.moveInDOM(),
                        this.div.focus({ preventScroll: !0 }));
                    }
                    focusin(t) {
                      this._focusEventsAllowed &&
                        (super.focusin(t), this.enableEditMode());
                    }
                    canvasPointerdown(t) {
                      0 === t.button &&
                        this.isInEditMode() &&
                        !_classPrivateFieldGet(v, this) &&
                        (this.setInForeground(),
                        t.preventDefault(),
                        'mouse' !== t.type && this.div.focus(),
                        _assertClassBrand(S, this, M).call(
                          this,
                          t.offsetX,
                          t.offsetY
                        ));
                    }
                    canvasPointermove(t) {
                      t.preventDefault(),
                        _assertClassBrand(S, this, T).call(
                          this,
                          t.offsetX,
                          t.offsetY
                        );
                    }
                    canvasPointerup(t) {
                      t.preventDefault(),
                        _assertClassBrand(S, this, B).call(this, t);
                    }
                    canvasPointerleave(t) {
                      _assertClassBrand(S, this, B).call(this, t);
                    }
                    get isResizable() {
                      return !this.isEmpty() && _classPrivateFieldGet(v, this);
                    }
                    render() {
                      if (this.div) return this.div;
                      let t, e;
                      this.width && ((t = this.x), (e = this.y)),
                        super.render(),
                        n.AnnotationEditor._l10nPromise
                          .get('editor_ink2_aria_label')
                          .then((t) => {
                            var e;
                            return null === (e = this.div) || void 0 === e
                              ? void 0
                              : e.setAttribute('aria-label', t);
                          });
                      const [s, i, a, r] = _assertClassBrand(S, this, E).call(
                        this
                      );
                      if (
                        (this.setAt(s, i, 0, 0),
                        this.setDims(a, r),
                        _assertClassBrand(S, this, N).call(this),
                        this.width)
                      ) {
                        const [s, i] = this.parentDimensions;
                        this.setAspectRatio(this.width * s, this.height * i),
                          this.setAt(
                            t * s,
                            e * i,
                            this.width * s,
                            this.height * i
                          ),
                          _classPrivateFieldSet(m, this, !0),
                          _assertClassBrand(S, this, j).call(this),
                          this.setDims(this.width * s, this.height * i),
                          _assertClassBrand(S, this, O).call(this),
                          this.div.classList.add('disabled');
                      } else
                        this.div.classList.add('editing'),
                          this.enableEditMode();
                      return _assertClassBrand(S, this, W).call(this), this.div;
                    }
                    setDimensions(t, e) {
                      const s = Math.round(t),
                        i = Math.round(e);
                      if (
                        _classPrivateFieldGet(P, this) === s &&
                        _classPrivateFieldGet(A, this) === i
                      )
                        return;
                      _classPrivateFieldSet(P, this, s),
                        _classPrivateFieldSet(A, this, i),
                        (this.canvas.style.visibility = 'hidden');
                      const [a, n] = this.parentDimensions;
                      (this.width = t / a),
                        (this.height = e / n),
                        this.fixAndSetPosition(),
                        _classPrivateFieldGet(v, this) &&
                          _assertClassBrand(S, this, U).call(this, t, e),
                        _assertClassBrand(S, this, j).call(this),
                        _assertClassBrand(S, this, O).call(this),
                        (this.canvas.style.visibility = 'visible'),
                        this.fixDims();
                    }
                    static deserialize(t, e, s) {
                      if (t instanceof r.InkAnnotationElement) return null;
                      const i = super.deserialize(t, e, s);
                      (i.thickness = t.thickness),
                        (i.color = a.Util.makeHexColor(...t.color)),
                        (i.opacity = t.opacity);
                      const [o, l] = i.pageDimensions,
                        h = i.width * o,
                        u = i.height * l,
                        p = i.parentScale,
                        _ = t.thickness / 2;
                      _classPrivateFieldSet(v, i, !0),
                        _classPrivateFieldSet(P, i, Math.round(h)),
                        _classPrivateFieldSet(A, i, Math.round(u));
                      const { paths: g, rect: f, rotation: m } = t;
                      for (let { bezier: a } of g) {
                        a = V.call(y, a, f, m);
                        const t = [];
                        i.paths.push(t);
                        let e = p * (a[0] - _),
                          s = p * (a[1] - _);
                        for (let i = 2, r = a.length; i < r; i += 6) {
                          const n = p * (a[i] - _),
                            r = p * (a[i + 1] - _),
                            o = p * (a[i + 2] - _),
                            l = p * (a[i + 3] - _),
                            c = p * (a[i + 4] - _),
                            d = p * (a[i + 5] - _);
                          t.push([
                            [e, s],
                            [n, r],
                            [o, l],
                            [c, d]
                          ]),
                            (e = c),
                            (s = d);
                        }
                        const n = _assertClassBrand(y, this, z).call(this, t);
                        i.bezierPath2D.push(n);
                      }
                      const b = _assertClassBrand(S, i, Y).call(i);
                      return (
                        _classPrivateFieldSet(
                          d,
                          i,
                          Math.max(n.AnnotationEditor.MIN_SIZE, b[2] - b[0])
                        ),
                        _classPrivateFieldSet(
                          c,
                          i,
                          Math.max(n.AnnotationEditor.MIN_SIZE, b[3] - b[1])
                        ),
                        _assertClassBrand(S, i, U).call(i, h, u),
                        i
                      );
                    }
                    serialize() {
                      if (this.isEmpty()) return null;
                      const t = this.getRect(0, 0),
                        e = n.AnnotationEditor._colorManager.convert(
                          this.ctx.strokeStyle
                        );
                      return {
                        annotationType: a.AnnotationEditorType.INK,
                        color: e,
                        thickness: this.thickness,
                        opacity: this.opacity,
                        paths: _assertClassBrand(S, this, X).call(
                          this,
                          this.scaleFactor / this.parentScale,
                          this.translationX,
                          this.translationY,
                          t
                        ),
                        pageIndex: this.pageIndex,
                        rect: t,
                        rotation: this.rotation,
                        structTreeParentId: this._structTreeParentId
                      };
                    }
                  }
                  function w(t) {
                    const e = this.thickness;
                    this.addCommands({
                      cmd: () => {
                        (this.thickness = t),
                          _assertClassBrand(S, this, J).call(this);
                      },
                      undo: () => {
                        (this.thickness = e),
                          _assertClassBrand(S, this, J).call(this);
                      },
                      mustExec: !0,
                      type: a.AnnotationEditorParamsType.INK_THICKNESS,
                      overwriteIfSameType: !0,
                      keepUndo: !0
                    });
                  }
                  function x(t) {
                    const e = this.color;
                    this.addCommands({
                      cmd: () => {
                        (this.color = t),
                          _assertClassBrand(S, this, O).call(this);
                      },
                      undo: () => {
                        (this.color = e),
                          _assertClassBrand(S, this, O).call(this);
                      },
                      mustExec: !0,
                      type: a.AnnotationEditorParamsType.INK_COLOR,
                      overwriteIfSameType: !0,
                      keepUndo: !0
                    });
                  }
                  function C(t) {
                    t /= 100;
                    const e = this.opacity;
                    this.addCommands({
                      cmd: () => {
                        (this.opacity = t),
                          _assertClassBrand(S, this, O).call(this);
                      },
                      undo: () => {
                        (this.opacity = e),
                          _assertClassBrand(S, this, O).call(this);
                      },
                      mustExec: !0,
                      type: a.AnnotationEditorParamsType.INK_OPACITY,
                      overwriteIfSameType: !0,
                      keepUndo: !0
                    });
                  }
                  function E() {
                    const {
                      parentRotation: t,
                      parentDimensions: [e, s]
                    } = this;
                    switch (t) {
                      case 90:
                        return [0, s, s, e];
                      case 180:
                        return [e, s, e, s];
                      case 270:
                        return [e, 0, s, e];
                      default:
                        return [0, 0, e, s];
                    }
                  }
                  function k() {
                    const {
                      ctx: t,
                      color: e,
                      opacity: s,
                      thickness: i,
                      parentScale: a,
                      scaleFactor: n
                    } = this;
                    (t.lineWidth = (i * a) / n),
                      (t.lineCap = 'round'),
                      (t.lineJoin = 'round'),
                      (t.miterLimit = 10),
                      (t.strokeStyle = ''
                        .concat(e)
                        .concat((0, l.opacityToHex)(s)));
                  }
                  function M(t, e) {
                    var s;
                    this.canvas.addEventListener(
                      'contextmenu',
                      o.noContextMenu
                    ),
                      this.canvas.addEventListener(
                        'pointerleave',
                        _classPrivateFieldGet(u, this)
                      ),
                      this.canvas.addEventListener(
                        'pointermove',
                        _classPrivateFieldGet(h, this)
                      ),
                      this.canvas.addEventListener(
                        'pointerup',
                        _classPrivateFieldGet(p, this)
                      ),
                      this.canvas.removeEventListener(
                        'pointerdown',
                        _classPrivateFieldGet(_, this)
                      ),
                      (this.isEditing = !0),
                      _classPrivateFieldGet(m, this) ||
                        (_classPrivateFieldSet(m, this, !0),
                        _assertClassBrand(S, this, j).call(this),
                        this.thickness ||
                          (this.thickness = i._defaultThickness),
                        this.color ||
                          (this.color =
                            i._defaultColor ||
                            n.AnnotationEditor._defaultLineColor),
                        (null !== (s = this.opacity) && void 0 !== s) ||
                          (this.opacity = i._defaultOpacity)),
                      this.currentPath.push([t, e]),
                      _classPrivateFieldSet(f, this, !1),
                      _assertClassBrand(S, this, k).call(this),
                      _classPrivateFieldSet(F, this, () => {
                        _assertClassBrand(S, this, D).call(this),
                          _classPrivateFieldGet(F, this) &&
                            window.requestAnimationFrame(
                              _classPrivateFieldGet(F, this)
                            );
                      }),
                      window.requestAnimationFrame(
                        _classPrivateFieldGet(F, this)
                      );
                  }
                  function T(t, e) {
                    const [s, i] = this.currentPath.at(-1);
                    if (this.currentPath.length > 1 && t === s && e === i)
                      return;
                    const a = this.currentPath;
                    let n = _classPrivateFieldGet(g, this);
                    if (
                      (a.push([t, e]),
                      _classPrivateFieldSet(f, this, !0),
                      a.length <= 2)
                    )
                      return n.moveTo(...a[0]), void n.lineTo(t, e);
                    3 === a.length &&
                      (_classPrivateFieldSet(g, this, (n = new Path2D())),
                      n.moveTo(...a[0])),
                      _assertClassBrand(S, this, G).call(
                        this,
                        n,
                        ...a.at(-3),
                        ...a.at(-2),
                        t,
                        e
                      );
                  }
                  function I() {
                    if (0 === this.currentPath.length) return;
                    const t = this.currentPath.at(-1);
                    _classPrivateFieldGet(g, this).lineTo(...t);
                  }
                  function R(t, e) {
                    let s;
                    if (
                      (_classPrivateFieldSet(F, this, null),
                      (t = Math.min(Math.max(t, 0), this.canvas.width)),
                      (e = Math.min(Math.max(e, 0), this.canvas.height)),
                      _assertClassBrand(S, this, T).call(this, t, e),
                      _assertClassBrand(S, this, I).call(this),
                      1 !== this.currentPath.length)
                    )
                      s = _assertClassBrand(S, this, L).call(this);
                    else {
                      const i = [t, e];
                      s = [[i, i.slice(), i.slice(), i]];
                    }
                    const i = _classPrivateFieldGet(g, this),
                      a = this.currentPath;
                    (this.currentPath = []),
                      _classPrivateFieldSet(g, this, new Path2D()),
                      this.addCommands({
                        cmd: () => {
                          this.allRawPaths.push(a),
                            this.paths.push(s),
                            this.bezierPath2D.push(i),
                            this.rebuild();
                        },
                        undo: () => {
                          this.allRawPaths.pop(),
                            this.paths.pop(),
                            this.bezierPath2D.pop(),
                            0 === this.paths.length
                              ? this.remove()
                              : (this.canvas ||
                                  (_assertClassBrand(S, this, N).call(this),
                                  _assertClassBrand(S, this, W).call(this)),
                                _assertClassBrand(S, this, J).call(this));
                        },
                        mustExec: !0
                      });
                  }
                  function D() {
                    if (!_classPrivateFieldGet(f, this)) return;
                    _classPrivateFieldSet(f, this, !1);
                    Math.ceil(this.thickness * this.parentScale);
                    const t = this.currentPath.slice(-3),
                      e = t.map((t) => t[0]),
                      s = t.map((t) => t[1]),
                      { ctx: i } =
                        (Math.min(...e),
                        Math.max(...e),
                        Math.min(...s),
                        Math.max(...s),
                        this);
                    i.save(),
                      i.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    for (const a of this.bezierPath2D) i.stroke(a);
                    i.stroke(_classPrivateFieldGet(g, this)), i.restore();
                  }
                  function G(t, e, s, i, a, n, r) {
                    const o = (e + i) / 2,
                      l = (s + a) / 2,
                      c = (i + n) / 2,
                      d = (a + r) / 2;
                    t.bezierCurveTo(
                      o + (2 * (i - o)) / 3,
                      l + (2 * (a - l)) / 3,
                      c + (2 * (i - c)) / 3,
                      d + (2 * (a - d)) / 3,
                      c,
                      d
                    );
                  }
                  function L() {
                    const t = this.currentPath;
                    if (t.length <= 2)
                      return [[t[0], t[0], t.at(-1), t.at(-1)]];
                    const e = [];
                    let s,
                      [i, a] = t[0];
                    for (s = 1; s < t.length - 2; s++) {
                      const [n, r] = t[s],
                        [o, l] = t[s + 1],
                        c = (n + o) / 2,
                        d = (r + l) / 2,
                        h = [i + (2 * (n - i)) / 3, a + (2 * (r - a)) / 3],
                        u = [c + (2 * (n - c)) / 3, d + (2 * (r - d)) / 3];
                      e.push([[i, a], h, u, [c, d]]), ([i, a] = [c, d]);
                    }
                    const [n, r] = t[s],
                      [o, l] = t[s + 1],
                      c = [i + (2 * (n - i)) / 3, a + (2 * (r - a)) / 3],
                      d = [o + (2 * (n - o)) / 3, l + (2 * (r - l)) / 3];
                    return e.push([[i, a], c, d, [o, l]]), e;
                  }
                  function O() {
                    if (this.isEmpty())
                      return void _assertClassBrand(S, this, H).call(this);
                    _assertClassBrand(S, this, k).call(this);
                    const { canvas: t, ctx: e } = this;
                    e.setTransform(1, 0, 0, 1, 0, 0),
                      e.clearRect(0, 0, t.width, t.height),
                      _assertClassBrand(S, this, H).call(this);
                    for (const s of this.bezierPath2D) e.stroke(s);
                  }
                  function B(t) {
                    this.canvas.removeEventListener(
                      'pointerleave',
                      _classPrivateFieldGet(u, this)
                    ),
                      this.canvas.removeEventListener(
                        'pointermove',
                        _classPrivateFieldGet(h, this)
                      ),
                      this.canvas.removeEventListener(
                        'pointerup',
                        _classPrivateFieldGet(p, this)
                      ),
                      this.canvas.addEventListener(
                        'pointerdown',
                        _classPrivateFieldGet(_, this)
                      ),
                      setTimeout(() => {
                        this.canvas.removeEventListener(
                          'contextmenu',
                          o.noContextMenu
                        );
                      }, 10),
                      _assertClassBrand(S, this, R).call(
                        this,
                        t.offsetX,
                        t.offsetY
                      ),
                      this.addToAnnotationStorage(),
                      this.setInBackground();
                  }
                  function N() {
                    (this.canvas = document.createElement('canvas')),
                      (this.canvas.width = this.canvas.height = 0),
                      (this.canvas.className = 'inkEditorCanvas'),
                      n.AnnotationEditor._l10nPromise
                        .get('editor_ink_canvas_aria_label')
                        .then((t) => {
                          var e;
                          return null === (e = this.canvas) || void 0 === e
                            ? void 0
                            : e.setAttribute('aria-label', t);
                        }),
                      this.div.append(this.canvas),
                      (this.ctx = this.canvas.getContext('2d'));
                  }
                  function W() {
                    _classPrivateFieldSet(
                      b,
                      this,
                      new ResizeObserver((t) => {
                        const e = t[0].contentRect;
                        e.width &&
                          e.height &&
                          this.setDimensions(e.width, e.height);
                      })
                    ),
                      _classPrivateFieldGet(b, this).observe(this.div);
                  }
                  function j() {
                    if (!_classPrivateFieldGet(m, this)) return;
                    const [t, e] = this.parentDimensions;
                    (this.canvas.width = Math.ceil(this.width * t)),
                      (this.canvas.height = Math.ceil(this.height * e)),
                      _assertClassBrand(S, this, H).call(this);
                  }
                  function U(t, e) {
                    const s = _assertClassBrand(S, this, K).call(this),
                      i = (t - s) / _classPrivateFieldGet(d, this),
                      a = (e - s) / _classPrivateFieldGet(c, this);
                    this.scaleFactor = Math.min(i, a);
                  }
                  function H() {
                    const t = _assertClassBrand(S, this, K).call(this) / 2;
                    this.ctx.setTransform(
                      this.scaleFactor,
                      0,
                      0,
                      this.scaleFactor,
                      this.translationX * this.scaleFactor + t,
                      this.translationY * this.scaleFactor + t
                    );
                  }
                  function z(t) {
                    const e = new Path2D();
                    for (let s = 0, i = t.length; s < i; s++) {
                      const [i, a, n, r] = t[s];
                      0 === s && e.moveTo(...i),
                        e.bezierCurveTo(a[0], a[1], n[0], n[1], r[0], r[1]);
                    }
                    return e;
                  }
                  function q(t, e, s) {
                    const [i, a, n, r] = e;
                    switch (s) {
                      case 0:
                        for (let e = 0, s = t.length; e < s; e += 2)
                          (t[e] += i), (t[e + 1] = r - t[e + 1]);
                        break;
                      case 90:
                        for (let e = 0, s = t.length; e < s; e += 2) {
                          const s = t[e];
                          (t[e] = t[e + 1] + i), (t[e + 1] = s + a);
                        }
                        break;
                      case 180:
                        for (let e = 0, s = t.length; e < s; e += 2)
                          (t[e] = n - t[e]), (t[e + 1] += a);
                        break;
                      case 270:
                        for (let e = 0, s = t.length; e < s; e += 2) {
                          const s = t[e];
                          (t[e] = n - t[e + 1]), (t[e + 1] = r - s);
                        }
                        break;
                      default:
                        throw new Error('Invalid rotation');
                    }
                    return t;
                  }
                  function V(t, e, s) {
                    const [i, a, n, r] = e;
                    switch (s) {
                      case 0:
                        for (let e = 0, s = t.length; e < s; e += 2)
                          (t[e] -= i), (t[e + 1] = r - t[e + 1]);
                        break;
                      case 90:
                        for (let e = 0, s = t.length; e < s; e += 2) {
                          const s = t[e];
                          (t[e] = t[e + 1] - a), (t[e + 1] = s - i);
                        }
                        break;
                      case 180:
                        for (let e = 0, s = t.length; e < s; e += 2)
                          (t[e] = n - t[e]), (t[e + 1] -= a);
                        break;
                      case 270:
                        for (let e = 0, s = t.length; e < s; e += 2) {
                          const s = t[e];
                          (t[e] = r - t[e + 1]), (t[e + 1] = n - s);
                        }
                        break;
                      default:
                        throw new Error('Invalid rotation');
                    }
                    return t;
                  }
                  function X(t, e, s, a) {
                    const n = [],
                      r = this.thickness / 2,
                      o = t * e + r,
                      l = t * s + r;
                    for (const c of this.paths) {
                      const e = [],
                        s = [];
                      for (let i = 0, a = c.length; i < a; i++) {
                        const [n, r, d, h] = c[i],
                          u = t * n[0] + o,
                          p = t * n[1] + l,
                          _ = t * r[0] + o,
                          g = t * r[1] + l,
                          v = t * d[0] + o,
                          f = t * d[1] + l,
                          m = t * h[0] + o,
                          b = t * h[1] + l;
                        0 === i && (e.push(u, p), s.push(u, p)),
                          e.push(_, g, v, f, m, b),
                          s.push(_, g),
                          i === a - 1 && s.push(m, b);
                      }
                      n.push({
                        bezier: q.call(i, e, a, this.rotation),
                        points: q.call(i, s, a, this.rotation)
                      });
                    }
                    return n;
                  }
                  function Y() {
                    let t = 1 / 0,
                      e = -1 / 0,
                      s = 1 / 0,
                      i = -1 / 0;
                    for (const n of this.paths)
                      for (const [r, o, l, c] of n) {
                        const n = a.Util.bezierBoundingBox(
                          ...r,
                          ...o,
                          ...l,
                          ...c
                        );
                        (t = Math.min(t, n[0])),
                          (s = Math.min(s, n[1])),
                          (e = Math.max(e, n[2])),
                          (i = Math.max(i, n[3]));
                      }
                    return [t, s, e, i];
                  }
                  function K() {
                    return _classPrivateFieldGet(v, this)
                      ? Math.ceil(this.thickness * this.parentScale)
                      : 0;
                  }
                  function J() {
                    let t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (this.isEmpty()) return;
                    if (!_classPrivateFieldGet(v, this))
                      return void _assertClassBrand(S, this, O).call(this);
                    const e = _assertClassBrand(S, this, Y).call(this),
                      s = _assertClassBrand(S, this, K).call(this);
                    _classPrivateFieldSet(
                      d,
                      this,
                      Math.max(n.AnnotationEditor.MIN_SIZE, e[2] - e[0])
                    ),
                      _classPrivateFieldSet(
                        c,
                        this,
                        Math.max(n.AnnotationEditor.MIN_SIZE, e[3] - e[1])
                      );
                    const i = Math.ceil(
                        s + _classPrivateFieldGet(d, this) * this.scaleFactor
                      ),
                      a = Math.ceil(
                        s + _classPrivateFieldGet(c, this) * this.scaleFactor
                      ),
                      [r, o] = this.parentDimensions;
                    (this.width = i / r),
                      (this.height = a / o),
                      this.setAspectRatio(i, a);
                    const l = this.translationX,
                      h = this.translationY;
                    (this.translationX = -e[0]),
                      (this.translationY = -e[1]),
                      _assertClassBrand(S, this, j).call(this),
                      _assertClassBrand(S, this, O).call(this),
                      _classPrivateFieldSet(P, this, i),
                      _classPrivateFieldSet(A, this, a),
                      this.setDims(i, a);
                    const u = t ? s / this.scaleFactor / 2 : 0;
                    this.translate(
                      l - this.translationX - u,
                      h - this.translationY - u
                    );
                  }
                  (i = y),
                    _defineProperty(y, '_defaultColor', null),
                    _defineProperty(y, '_defaultOpacity', 1),
                    _defineProperty(y, '_defaultThickness', 1),
                    _defineProperty(y, '_type', 'ink'),
                    (e.InkEditor = y);
                },
                (t, e, s) => {
                  var i;
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.StampEditor = void 0);
                  var a = s(1),
                    n = s(4),
                    r = s(6),
                    o = s(29),
                    l = new WeakMap(),
                    c = new WeakMap(),
                    d = new WeakMap(),
                    h = new WeakMap(),
                    u = new WeakMap(),
                    p = new WeakMap(),
                    _ = new WeakMap(),
                    g = new WeakMap(),
                    v = new WeakMap(),
                    f = new WeakMap(),
                    m = new WeakSet();
                  class b extends n.AnnotationEditor {
                    constructor(t) {
                      super({ ...t, name: 'stampEditor' }),
                        _classPrivateMethodInitSpec(this, m),
                        _classPrivateFieldInitSpec(this, l, null),
                        _classPrivateFieldInitSpec(this, c, null),
                        _classPrivateFieldInitSpec(this, d, null),
                        _classPrivateFieldInitSpec(this, h, null),
                        _classPrivateFieldInitSpec(this, u, null),
                        _classPrivateFieldInitSpec(this, p, null),
                        _classPrivateFieldInitSpec(this, _, null),
                        _classPrivateFieldInitSpec(this, g, null),
                        _classPrivateFieldInitSpec(this, v, !1),
                        _classPrivateFieldInitSpec(this, f, !1),
                        _classPrivateFieldSet(h, this, t.bitmapUrl),
                        _classPrivateFieldSet(u, this, t.bitmapFile);
                    }
                    static initialize(t) {
                      n.AnnotationEditor.initialize(t);
                    }
                    static get supportedTypes() {
                      return (0, a.shadow)(
                        this,
                        'supportedTypes',
                        [
                          'apng',
                          'avif',
                          'bmp',
                          'gif',
                          'jpeg',
                          'png',
                          'svg+xml',
                          'webp',
                          'x-icon'
                        ].map((t) => 'image/'.concat(t))
                      );
                    }
                    static get supportedTypesStr() {
                      return (0, a.shadow)(
                        this,
                        'supportedTypesStr',
                        this.supportedTypes.join(',')
                      );
                    }
                    static isHandlingMimeForPasting(t) {
                      return this.supportedTypes.includes(t);
                    }
                    static paste(t, e) {
                      e.pasteEditor(a.AnnotationEditorType.STAMP, {
                        bitmapFile: t.getAsFile()
                      });
                    }
                    remove() {
                      var t, e;
                      _classPrivateFieldGet(c, this) &&
                        (_classPrivateFieldSet(l, this, null),
                        this._uiManager.imageManager.deleteId(
                          _classPrivateFieldGet(c, this)
                        ),
                        null === (t = _classPrivateFieldGet(p, this)) ||
                          void 0 === t ||
                          t.remove(),
                        _classPrivateFieldSet(p, this, null),
                        null === (e = _classPrivateFieldGet(_, this)) ||
                          void 0 === e ||
                          e.disconnect(),
                        _classPrivateFieldSet(_, this, null)),
                        super.remove();
                    }
                    rebuild() {
                      this.parent
                        ? (super.rebuild(),
                          null !== this.div &&
                            (_classPrivateFieldGet(c, this) &&
                              _assertClassBrand(m, this, F).call(this),
                            this.isAttachedToDOM || this.parent.add(this)))
                        : _classPrivateFieldGet(c, this) &&
                          _assertClassBrand(m, this, F).call(this);
                    }
                    onceAdded() {
                      (this._isDraggable = !0), this.div.focus();
                    }
                    isEmpty() {
                      return !(
                        _classPrivateFieldGet(d, this) ||
                        _classPrivateFieldGet(l, this) ||
                        _classPrivateFieldGet(h, this) ||
                        _classPrivateFieldGet(u, this)
                      );
                    }
                    get isResizable() {
                      return !0;
                    }
                    render() {
                      if (this.div) return this.div;
                      let t, e;
                      if (
                        (this.width && ((t = this.x), (e = this.y)),
                        super.render(),
                        (this.div.hidden = !0),
                        _classPrivateFieldGet(l, this)
                          ? _assertClassBrand(m, this, S).call(this)
                          : _assertClassBrand(m, this, F).call(this),
                        this.width)
                      ) {
                        const [s, i] = this.parentDimensions;
                        this.setAt(
                          t * s,
                          e * i,
                          this.width * s,
                          this.height * i
                        );
                      }
                      return this.div;
                    }
                    static deserialize(t, e, s) {
                      if (t instanceof o.StampAnnotationElement) return null;
                      const i = super.deserialize(t, e, s),
                        {
                          rect: a,
                          bitmapUrl: n,
                          bitmapId: r,
                          isSvg: l,
                          accessibilityData: d
                        } = t;
                      r && s.imageManager.isValidId(r)
                        ? _classPrivateFieldSet(c, i, r)
                        : _classPrivateFieldSet(h, i, n),
                        _classPrivateFieldSet(v, i, l);
                      const [u, p] = i.pageDimensions;
                      return (
                        (i.width = (a[2] - a[0]) / u),
                        (i.height = (a[3] - a[1]) / p),
                        d && (i.altTextData = d),
                        i
                      );
                    }
                    serialize() {
                      let t =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      if (this.isEmpty()) return null;
                      const s = {
                        annotationType: a.AnnotationEditorType.STAMP,
                        bitmapId: _classPrivateFieldGet(c, this),
                        pageIndex: this.pageIndex,
                        rect: this.getRect(0, 0),
                        rotation: this.rotation,
                        isSvg: _classPrivateFieldGet(v, this),
                        structTreeParentId: this._structTreeParentId
                      };
                      if (t)
                        return (
                          (s.bitmapUrl = _assertClassBrand(m, this, C).call(
                            this,
                            !0
                          )),
                          (s.accessibilityData = this.altTextData),
                          s
                        );
                      const { decorative: i, altText: n } = this.altTextData;
                      if (
                        (!i &&
                          n &&
                          (s.accessibilityData = { type: 'Figure', alt: n }),
                        null === e)
                      )
                        return s;
                      e.stamps || (e.stamps = new Map());
                      const r = _classPrivateFieldGet(v, this)
                        ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1])
                        : null;
                      if (e.stamps.has(_classPrivateFieldGet(c, this))) {
                        if (_classPrivateFieldGet(v, this)) {
                          const t = e.stamps.get(
                            _classPrivateFieldGet(c, this)
                          );
                          r > t.area &&
                            ((t.area = r),
                            t.serialized.bitmap.close(),
                            (t.serialized.bitmap = _assertClassBrand(
                              m,
                              this,
                              C
                            ).call(this, !1)));
                        }
                      } else
                        e.stamps.set(_classPrivateFieldGet(c, this), {
                          area: r,
                          serialized: s
                        }),
                          (s.bitmap = _assertClassBrand(m, this, C).call(
                            this,
                            !1
                          ));
                      return s;
                    }
                  }
                  function P(t) {
                    let e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    t
                      ? (_classPrivateFieldSet(l, this, t.bitmap),
                        e ||
                          (_classPrivateFieldSet(c, this, t.id),
                          _classPrivateFieldSet(v, this, t.isSvg)),
                        _assertClassBrand(m, this, S).call(this))
                      : this.remove();
                  }
                  function A() {
                    _classPrivateFieldSet(d, this, null),
                      this._uiManager.enableWaiting(!1),
                      _classPrivateFieldGet(p, this) && this.div.focus();
                  }
                  function F() {
                    if (_classPrivateFieldGet(c, this))
                      return (
                        this._uiManager.enableWaiting(!0),
                        void this._uiManager.imageManager
                          .getFromId(_classPrivateFieldGet(c, this))
                          .then((t) =>
                            _assertClassBrand(m, this, P).call(this, t, !0)
                          )
                          .finally(() =>
                            _assertClassBrand(m, this, A).call(this)
                          )
                      );
                    if (_classPrivateFieldGet(h, this)) {
                      const t = _classPrivateFieldGet(h, this);
                      return (
                        _classPrivateFieldSet(h, this, null),
                        this._uiManager.enableWaiting(!0),
                        void _classPrivateFieldSet(
                          d,
                          this,
                          this._uiManager.imageManager
                            .getFromUrl(t)
                            .then((t) =>
                              _assertClassBrand(m, this, P).call(this, t)
                            )
                            .finally(() =>
                              _assertClassBrand(m, this, A).call(this)
                            )
                        )
                      );
                    }
                    if (_classPrivateFieldGet(u, this)) {
                      const t = _classPrivateFieldGet(u, this);
                      return (
                        _classPrivateFieldSet(u, this, null),
                        this._uiManager.enableWaiting(!0),
                        void _classPrivateFieldSet(
                          d,
                          this,
                          this._uiManager.imageManager
                            .getFromFile(t)
                            .then((t) =>
                              _assertClassBrand(m, this, P).call(this, t)
                            )
                            .finally(() =>
                              _assertClassBrand(m, this, A).call(this)
                            )
                        )
                      );
                    }
                    const t = document.createElement('input');
                    (t.type = 'file'),
                      (t.accept = i.supportedTypesStr),
                      _classPrivateFieldSet(
                        d,
                        this,
                        new Promise((e) => {
                          t.addEventListener('change', async () => {
                            if (t.files && 0 !== t.files.length) {
                              this._uiManager.enableWaiting(!0);
                              const e =
                                await this._uiManager.imageManager.getFromFile(
                                  t.files[0]
                                );
                              _assertClassBrand(m, this, P).call(this, e);
                            } else this.remove();
                            e();
                          }),
                            t.addEventListener('cancel', () => {
                              this.remove(), e();
                            });
                        }).finally(() =>
                          _assertClassBrand(m, this, A).call(this)
                        )
                      ),
                      t.click();
                  }
                  function S() {
                    const { div: t } = this;
                    let { width: e, height: s } = _classPrivateFieldGet(
                      l,
                      this
                    );
                    const [i, a] = this.pageDimensions,
                      n = 0.75;
                    if (this.width) (e = this.width * i), (s = this.height * a);
                    else if (e > n * i || s > n * a) {
                      const t = Math.min((n * i) / e, (n * a) / s);
                      (e *= t), (s *= t);
                    }
                    const [r, o] = this.parentDimensions;
                    this.setDims((e * r) / i, (s * o) / a),
                      this._uiManager.enableWaiting(!1);
                    const c = _classPrivateFieldSet(
                      p,
                      this,
                      document.createElement('canvas')
                    );
                    t.append(c),
                      (t.hidden = !1),
                      _assertClassBrand(m, this, x).call(this, e, s),
                      _assertClassBrand(m, this, E).call(this),
                      _classPrivateFieldGet(f, this) ||
                        (this.parent.addUndoableEditor(this),
                        _classPrivateFieldSet(f, this, !0)),
                      this._uiManager._eventBus.dispatch('reporttelemetry', {
                        source: this,
                        details: {
                          type: 'editing',
                          subtype: this.editorType,
                          data: { action: 'inserted_image' }
                        }
                      }),
                      this.addAltTextButton();
                  }
                  function y(t, e) {
                    var s;
                    const [i, a] = this.parentDimensions;
                    (this.width = t / i),
                      (this.height = e / a),
                      this.setDims(t, e),
                      null !== (s = this._initialOptions) &&
                      void 0 !== s &&
                      s.isCentered
                        ? this.center()
                        : this.fixAndSetPosition(),
                      (this._initialOptions = null),
                      null !== _classPrivateFieldGet(g, this) &&
                        clearTimeout(_classPrivateFieldGet(g, this)),
                      _classPrivateFieldSet(
                        g,
                        this,
                        setTimeout(() => {
                          _classPrivateFieldSet(g, this, null),
                            _assertClassBrand(m, this, x).call(this, t, e);
                        }, 200)
                      );
                  }
                  function w(t, e) {
                    const { width: s, height: i } = _classPrivateFieldGet(
                      l,
                      this
                    );
                    let a = s,
                      n = i,
                      r = _classPrivateFieldGet(l, this);
                    for (; a > 2 * t || n > 2 * e; ) {
                      const s = a,
                        i = n;
                      a > 2 * t &&
                        (a =
                          a >= 16384
                            ? Math.floor(a / 2) - 1
                            : Math.ceil(a / 2)),
                        n > 2 * e &&
                          (n =
                            n >= 16384
                              ? Math.floor(n / 2) - 1
                              : Math.ceil(n / 2));
                      const o = new OffscreenCanvas(a, n);
                      o.getContext('2d').drawImage(r, 0, 0, s, i, 0, 0, a, n),
                        (r = o.transferToImageBitmap());
                    }
                    return r;
                  }
                  function x(t, e) {
                    (t = Math.ceil(t)), (e = Math.ceil(e));
                    const s = _classPrivateFieldGet(p, this);
                    if (!s || (s.width === t && s.height === e)) return;
                    (s.width = t), (s.height = e);
                    const i = _classPrivateFieldGet(v, this)
                        ? _classPrivateFieldGet(l, this)
                        : _assertClassBrand(m, this, w).call(this, t, e),
                      a = s.getContext('2d');
                    (a.filter = this._uiManager.hcmFilter),
                      a.drawImage(i, 0, 0, i.width, i.height, 0, 0, t, e);
                  }
                  function C(t) {
                    if (t) {
                      if (_classPrivateFieldGet(v, this)) {
                        const t = this._uiManager.imageManager.getSvgUrl(
                          _classPrivateFieldGet(c, this)
                        );
                        if (t) return t;
                      }
                      const t = document.createElement('canvas');
                      return (
                        ({ width: t.width, height: t.height } =
                          _classPrivateFieldGet(l, this)),
                        t
                          .getContext('2d')
                          .drawImage(_classPrivateFieldGet(l, this), 0, 0),
                        t.toDataURL()
                      );
                    }
                    if (_classPrivateFieldGet(v, this)) {
                      const [t, e] = this.pageDimensions,
                        s = Math.round(
                          this.width * t * r.PixelsPerInch.PDF_TO_CSS_UNITS
                        ),
                        i = Math.round(
                          this.height * e * r.PixelsPerInch.PDF_TO_CSS_UNITS
                        ),
                        a = new OffscreenCanvas(s, i);
                      return (
                        a
                          .getContext('2d')
                          .drawImage(
                            _classPrivateFieldGet(l, this),
                            0,
                            0,
                            _classPrivateFieldGet(l, this).width,
                            _classPrivateFieldGet(l, this).height,
                            0,
                            0,
                            s,
                            i
                          ),
                        a.transferToImageBitmap()
                      );
                    }
                    return structuredClone(_classPrivateFieldGet(l, this));
                  }
                  function E() {
                    _classPrivateFieldSet(
                      _,
                      this,
                      new ResizeObserver((t) => {
                        const e = t[0].contentRect;
                        e.width &&
                          e.height &&
                          _assertClassBrand(m, this, y).call(
                            this,
                            e.width,
                            e.height
                          );
                      })
                    ),
                      _classPrivateFieldGet(_, this).observe(this.div);
                  }
                  (i = b),
                    _defineProperty(b, '_type', 'stamp'),
                    (e.StampEditor = b);
                }
              ],
              __webpack_module_cache__ = {};
            function __w_pdfjs_require__(t) {
              var e = __webpack_module_cache__[t];
              if (void 0 !== e) return e.exports;
              var s = (__webpack_module_cache__[t] = { exports: {} });
              return (
                __webpack_modules__[t](s, s.exports, __w_pdfjs_require__),
                s.exports
              );
            }
            var __nested_webpack_exports__ = {};
            return (
              (() => {
                var t = __nested_webpack_exports__;
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  Object.defineProperty(t, 'AbortException', {
                    enumerable: !0,
                    get: function () {
                      return e.AbortException;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationEditorLayer', {
                    enumerable: !0,
                    get: function () {
                      return n.AnnotationEditorLayer;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationEditorParamsType', {
                    enumerable: !0,
                    get: function () {
                      return e.AnnotationEditorParamsType;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationEditorType', {
                    enumerable: !0,
                    get: function () {
                      return e.AnnotationEditorType;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationEditorUIManager', {
                    enumerable: !0,
                    get: function () {
                      return r.AnnotationEditorUIManager;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationLayer', {
                    enumerable: !0,
                    get: function () {
                      return o.AnnotationLayer;
                    }
                  }),
                  Object.defineProperty(t, 'AnnotationMode', {
                    enumerable: !0,
                    get: function () {
                      return e.AnnotationMode;
                    }
                  }),
                  Object.defineProperty(t, 'CMapCompressionType', {
                    enumerable: !0,
                    get: function () {
                      return e.CMapCompressionType;
                    }
                  }),
                  Object.defineProperty(t, 'DOMSVGFactory', {
                    enumerable: !0,
                    get: function () {
                      return i.DOMSVGFactory;
                    }
                  }),
                  Object.defineProperty(t, 'FeatureTest', {
                    enumerable: !0,
                    get: function () {
                      return e.FeatureTest;
                    }
                  }),
                  Object.defineProperty(t, 'GlobalWorkerOptions', {
                    enumerable: !0,
                    get: function () {
                      return l.GlobalWorkerOptions;
                    }
                  }),
                  Object.defineProperty(t, 'ImageKind', {
                    enumerable: !0,
                    get: function () {
                      return e.ImageKind;
                    }
                  }),
                  Object.defineProperty(t, 'InvalidPDFException', {
                    enumerable: !0,
                    get: function () {
                      return e.InvalidPDFException;
                    }
                  }),
                  Object.defineProperty(t, 'MissingPDFException', {
                    enumerable: !0,
                    get: function () {
                      return e.MissingPDFException;
                    }
                  }),
                  Object.defineProperty(t, 'OPS', {
                    enumerable: !0,
                    get: function () {
                      return e.OPS;
                    }
                  }),
                  Object.defineProperty(t, 'PDFDataRangeTransport', {
                    enumerable: !0,
                    get: function () {
                      return s.PDFDataRangeTransport;
                    }
                  }),
                  Object.defineProperty(t, 'PDFDateString', {
                    enumerable: !0,
                    get: function () {
                      return i.PDFDateString;
                    }
                  }),
                  Object.defineProperty(t, 'PDFWorker', {
                    enumerable: !0,
                    get: function () {
                      return s.PDFWorker;
                    }
                  }),
                  Object.defineProperty(t, 'PasswordResponses', {
                    enumerable: !0,
                    get: function () {
                      return e.PasswordResponses;
                    }
                  }),
                  Object.defineProperty(t, 'PermissionFlag', {
                    enumerable: !0,
                    get: function () {
                      return e.PermissionFlag;
                    }
                  }),
                  Object.defineProperty(t, 'PixelsPerInch', {
                    enumerable: !0,
                    get: function () {
                      return i.PixelsPerInch;
                    }
                  }),
                  Object.defineProperty(t, 'PromiseCapability', {
                    enumerable: !0,
                    get: function () {
                      return e.PromiseCapability;
                    }
                  }),
                  Object.defineProperty(t, 'RenderingCancelledException', {
                    enumerable: !0,
                    get: function () {
                      return i.RenderingCancelledException;
                    }
                  }),
                  Object.defineProperty(t, 'SVGGraphics', {
                    enumerable: !0,
                    get: function () {
                      return s.SVGGraphics;
                    }
                  }),
                  Object.defineProperty(t, 'UnexpectedResponseException', {
                    enumerable: !0,
                    get: function () {
                      return e.UnexpectedResponseException;
                    }
                  }),
                  Object.defineProperty(t, 'Util', {
                    enumerable: !0,
                    get: function () {
                      return e.Util;
                    }
                  }),
                  Object.defineProperty(t, 'VerbosityLevel', {
                    enumerable: !0,
                    get: function () {
                      return e.VerbosityLevel;
                    }
                  }),
                  Object.defineProperty(t, 'XfaLayer', {
                    enumerable: !0,
                    get: function () {
                      return c.XfaLayer;
                    }
                  }),
                  Object.defineProperty(t, 'build', {
                    enumerable: !0,
                    get: function () {
                      return s.build;
                    }
                  }),
                  Object.defineProperty(t, 'createValidAbsoluteUrl', {
                    enumerable: !0,
                    get: function () {
                      return e.createValidAbsoluteUrl;
                    }
                  }),
                  Object.defineProperty(t, 'getDocument', {
                    enumerable: !0,
                    get: function () {
                      return s.getDocument;
                    }
                  }),
                  Object.defineProperty(t, 'getFilenameFromUrl', {
                    enumerable: !0,
                    get: function () {
                      return i.getFilenameFromUrl;
                    }
                  }),
                  Object.defineProperty(t, 'getPdfFilenameFromUrl', {
                    enumerable: !0,
                    get: function () {
                      return i.getPdfFilenameFromUrl;
                    }
                  }),
                  Object.defineProperty(t, 'getXfaPageViewport', {
                    enumerable: !0,
                    get: function () {
                      return i.getXfaPageViewport;
                    }
                  }),
                  Object.defineProperty(t, 'isDataScheme', {
                    enumerable: !0,
                    get: function () {
                      return i.isDataScheme;
                    }
                  }),
                  Object.defineProperty(t, 'isPdfFile', {
                    enumerable: !0,
                    get: function () {
                      return i.isPdfFile;
                    }
                  }),
                  Object.defineProperty(t, 'loadScript', {
                    enumerable: !0,
                    get: function () {
                      return i.loadScript;
                    }
                  }),
                  Object.defineProperty(t, 'noContextMenu', {
                    enumerable: !0,
                    get: function () {
                      return i.noContextMenu;
                    }
                  }),
                  Object.defineProperty(t, 'normalizeUnicode', {
                    enumerable: !0,
                    get: function () {
                      return e.normalizeUnicode;
                    }
                  }),
                  Object.defineProperty(t, 'renderTextLayer', {
                    enumerable: !0,
                    get: function () {
                      return a.renderTextLayer;
                    }
                  }),
                  Object.defineProperty(t, 'setLayerDimensions', {
                    enumerable: !0,
                    get: function () {
                      return i.setLayerDimensions;
                    }
                  }),
                  Object.defineProperty(t, 'shadow', {
                    enumerable: !0,
                    get: function () {
                      return e.shadow;
                    }
                  }),
                  Object.defineProperty(t, 'updateTextLayer', {
                    enumerable: !0,
                    get: function () {
                      return a.updateTextLayer;
                    }
                  }),
                  Object.defineProperty(t, 'version', {
                    enumerable: !0,
                    get: function () {
                      return s.version;
                    }
                  });
                var e = __w_pdfjs_require__(1),
                  s = __w_pdfjs_require__(2),
                  i = __w_pdfjs_require__(6),
                  a = __w_pdfjs_require__(26),
                  n = __w_pdfjs_require__(27),
                  r = __w_pdfjs_require__(5),
                  o = __w_pdfjs_require__(29),
                  l = __w_pdfjs_require__(14),
                  c = __w_pdfjs_require__(32);
              })(),
              __nested_webpack_exports__
            );
          })()),
        (module.exports = root.pdfjsLib = factory());
    },
    60386: (t, e, s) => {
      'use strict';
      s.d(e, { A: () => a });
      var i = s(72809);
      i.A.GlobalWorkerOptions.workerSrc =
        '//cdnjs.cloudflare.com/ajax/libs/pdf.js/'.concat(
          i.A.version,
          '/pdf.worker.js'
        );
      const a = async (t) => {
        try {
          const e = URL.createObjectURL(t),
            s = i.A.getDocument(e),
            a = await s.promise,
            n = a.numPages;
          let r = '';
          for (let t = 1; t <= n; t++) {
            const e = await a.getPage(t),
              s = await e.getTextContent();
            r += s.items.map((t) => t.str).join(' ');
          }
          if (r.length > 0) return r;
          console.error('Error extracting text from PDF:', error),
            URL.revokeObjectURL(e);
        } catch (error) {
          console.error('Error extracting text from PDF:', error);
        }
      };
    },
    81756: (t) => {
      (t.exports = function (t, e, s) {
        if ('function' == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : s;
        throw new TypeError('Private element is not present on this object');
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    97101: (t) => {
      (t.exports = function (t, e) {
        if (e.has(t))
          throw new TypeError(
            'Cannot initialize the same private elements twice on an object'
          );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    16668: (t, e, s) => {
      var i = s(81756);
      (t.exports = function (t, e) {
        return t.get(i(t, e));
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    42459: (t, e, s) => {
      var i = s(97101);
      (t.exports = function (t, e, s) {
        i(t, e), e.set(t, s);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    37088: (t, e, s) => {
      var i = s(81756);
      (t.exports = function (t, e, s) {
        return t.set(i(t, e), s), s;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    183: (t, e, s) => {
      var i = s(81756);
      (t.exports = function (t, e, s) {
        return s(i(t, e));
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    93312: (t, e, s) => {
      var i = s(97101);
      (t.exports = function (t, e) {
        i(t, e), e.add(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    43693: (t, e, s) => {
      var i = s(77736);
      (t.exports = function (t, e, s) {
        return (
          (e = i(e)) in t
            ? Object.defineProperty(t, e, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[e] = s),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    89045: (t, e, s) => {
      var i = s(73738).default;
      (t.exports = function (t, e) {
        if ('object' != i(t) || !t) return t;
        var s = t[Symbol.toPrimitive];
        if (void 0 !== s) {
          var a = s.call(t, e || 'default');
          if ('object' != i(a)) return a;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    77736: (t, e, s) => {
      var i = s(73738).default,
        a = s(89045);
      (t.exports = function (t) {
        var e = a(t, 'string');
        return 'symbol' == i(e) ? e : e + '';
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    73738: (t) => {
      function e(s) {
        return (
          (t.exports = e =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          e(s)
        );
      }
      (t.exports = e),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    72809: (t, e, s) => {
      'use strict';
      s.d(e, { A: () => a });
      var i = s(56165);
      const a = i;
    }
  }
]);
//# sourceMappingURL=386.85fefa09.chunk.js.map
