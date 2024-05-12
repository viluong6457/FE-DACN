/*! For license information please see 290.64555cc7.chunk.js.LICENSE.txt */
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [290],
  {
    47298: (e, t, r) => {
      'use strict';
      var n = r(32392);
      t.A = void 0;
      var o = n(r(40039)),
        i = r(70579),
        a = (0, o.default)(
          (0, i.jsx)('path', {
            d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7v-.24C8.42 17.62 10.16 17 12 17s3.58.62 5 1.76V19zm2-1.14C17.2 16.09 14.73 15 12 15s-5.2 1.09-7 2.86V5h14v12.86zM12 13c1.93 0 3.5-1.57 3.5-3.5S13.93 6 12 6 8.5 7.57 8.5 9.5 10.07 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z'
          }),
          'AccountBoxOutlined'
        );
      t.A = a;
    },
    91281: (e, t, r) => {
      'use strict';
      var n = r(32392);
      t.A = void 0;
      var o = n(r(40039)),
        i = r(70579),
        a = (0, o.default)(
          (0, i.jsx)('path', {
            d: 'M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z'
          }),
          'AddPhotoAlternateOutlined'
        );
      t.A = a;
    },
    36134: (e, t, r) => {
      'use strict';
      var n = r(32392);
      t.A = void 0;
      var o = n(r(40039)),
        i = r(70579),
        a = (0, o.default)(
          (0, i.jsx)('path', {
            d: 'm20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7 1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z'
          }),
          'AutoFixHighOutlined'
        );
      t.A = a;
    },
    44046: (e, t, r) => {
      'use strict';
      var n = r(32392);
      t.A = void 0;
      var o = n(r(40039)),
        i = r(70579),
        a = (0, o.default)(
          (0, i.jsx)('path', {
            d: 'M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
          }),
          'DoNotDisturbOnOutlined'
        );
      t.A = a;
    },
    76391: (e, t, r) => {
      'use strict';
      var n = r(32392);
      t.A = void 0;
      var o = n(r(40039)),
        i = r(70579),
        a = (0, o.default)(
          (0, i.jsx)('path', {
            fillRule: 'evenodd',
            d: 'M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z'
          }),
          'WorkOutline'
        );
      t.A = a;
    },
    122: (e) => {
      'use strict';
      e.exports = function e(t, r) {
        if (t === r) return !0;
        if (t && r && 'object' == typeof t && 'object' == typeof r) {
          if (t.constructor !== r.constructor) return !1;
          var n, o, i;
          if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1;
            for (o = n; 0 !== o--; ) if (!e(t[o], r[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if ((n = (i = Object.keys(t)).length) !== Object.keys(r).length)
            return !1;
          for (o = n; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
          for (o = n; 0 !== o--; ) {
            var a = i[o];
            if (!e(t[a], r[a])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      };
    },
    72037: (e) => {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    95694: (e, t, r) => {
      var n = r(72037)({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      });
      e.exports = n;
    },
    12358: (e, t, r) => {
      var n = r(95694),
        o = r(41069),
        i = /[&<>"']/g,
        a = RegExp(i.source);
      e.exports = function (e) {
        return (e = o(e)) && a.test(e) ? e.replace(i, n) : e;
      };
    },
    58127: (e, t, r) => {
      var n = r(41069),
        o = /[\\^$.*+?()[\]{}|]/g,
        i = RegExp(o.source);
      e.exports = function (e) {
        return (e = n(e)) && i.test(e) ? e.replace(o, '\\$&') : e;
      };
    },
    9376: (e, t, r) => {
      var n = r(64416);
      e.exports = function (e) {
        return e && e.length ? n(e) : [];
      };
    },
    6308: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          HTML5Backend: () => U,
          NativeTypes: () => n,
          getEmptyImage: () => F
        });
      var n = {};
      function o(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      r.r(n),
        r.d(n, { FILE: () => b, HTML: () => S, TEXT: () => O, URL: () => m });
      var u = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              a(this, 'entered', []),
              a(this, 'isNodeInDocument', void 0),
              (this.isNodeInDocument = t);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'enter',
                value: function (e) {
                  var t = this,
                    r = this.entered.length;
                  return (
                    (this.entered = (function (e, t) {
                      var r = new Set(),
                        n = function (e) {
                          return r.add(e);
                        };
                      e.forEach(n), t.forEach(n);
                      var o = [];
                      return (
                        r.forEach(function (e) {
                          return o.push(e);
                        }),
                        o
                      );
                    })(
                      this.entered.filter(function (r) {
                        return (
                          t.isNodeInDocument(r) &&
                          (!r.contains || r.contains(e))
                        );
                      }),
                      [e]
                    )),
                    0 === r && this.entered.length > 0
                  );
                }
              },
              {
                key: 'leave',
                value: function (e) {
                  var t,
                    r,
                    n = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      (r = e),
                      t.filter(function (e) {
                        return e !== r;
                      }))),
                    n > 0 && 0 === this.entered.length
                  );
                }
              },
              {
                key: 'reset',
                value: function () {
                  this.entered = [];
                }
              }
            ]) && i(t.prototype, r),
            n && i(t, n),
            e
          );
        })(),
        s = o(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        c = o(function () {
          return Boolean(window.safari);
        });
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var f = (function () {
          function e(t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              d(this, 'xs', void 0),
              d(this, 'ys', void 0),
              d(this, 'c1s', void 0),
              d(this, 'c2s', void 0),
              d(this, 'c3s', void 0);
            for (var n = t.length, o = [], i = 0; i < n; i++) o.push(i);
            o.sort(function (e, r) {
              return t[e] < t[r] ? -1 : 1;
            });
            for (var a, u, s = [], c = [], l = [], f = 0; f < n - 1; f++)
              (a = t[f + 1] - t[f]),
                (u = r[f + 1] - r[f]),
                c.push(a),
                s.push(u),
                l.push(u / a);
            for (var p = [l[0]], g = 0; g < c.length - 1; g++) {
              var h = l[g],
                v = l[g + 1];
              if (h * v <= 0) p.push(0);
              else {
                a = c[g];
                var y = c[g + 1],
                  b = a + y;
                p.push((3 * b) / ((b + y) / h + (b + a) / v));
              }
            }
            p.push(l[l.length - 1]);
            for (var m, O = [], S = [], D = 0; D < p.length - 1; D++) {
              m = l[D];
              var w = p[D],
                T = 1 / c[D],
                I = w + p[D + 1] - m - m;
              O.push((m - w - I) * T), S.push(I * T * T);
            }
            (this.xs = t),
              (this.ys = r),
              (this.c1s = p),
              (this.c2s = O),
              (this.c3s = S);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'interpolate',
                value: function (e) {
                  var t = this.xs,
                    r = this.ys,
                    n = this.c1s,
                    o = this.c2s,
                    i = this.c3s,
                    a = t.length - 1;
                  if (e === t[a]) return r[a];
                  for (var u, s = 0, c = i.length - 1; s <= c; ) {
                    var l = t[(u = Math.floor(0.5 * (s + c)))];
                    if (l < e) s = u + 1;
                    else {
                      if (!(l > e)) return r[u];
                      c = u - 1;
                    }
                  }
                  var d = e - t[(a = Math.max(0, c))],
                    f = d * d;
                  return r[a] + n[a] * d + o[a] * f + i[a] * d * f;
                }
              }
            ]) && l(t.prototype, r),
            n && l(t, n),
            e
          );
        })(),
        p = 1;
      function g(e) {
        var t = e.nodeType === p ? e : e.parentElement;
        if (!t) return null;
        var r = t.getBoundingClientRect(),
          n = r.top;
        return { x: r.left, y: n };
      }
      function h(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function v(e, t, r, n, o) {
        var i = (function (e) {
            var t;
            return (
              'IMG' === e.nodeName &&
              (s() ||
                !(
                  null !== (t = document.documentElement) &&
                  void 0 !== t &&
                  t.contains(e)
                ))
            );
          })(t),
          a = g(i ? e : t),
          u = { x: r.x - a.x, y: r.y - a.y },
          l = e.offsetWidth,
          d = e.offsetHeight,
          p = n.anchorX,
          h = n.anchorY,
          v = (function (e, t, r, n) {
            var o = e ? t.width : r,
              i = e ? t.height : n;
            return (
              c() &&
                e &&
                ((i /= window.devicePixelRatio),
                (o /= window.devicePixelRatio)),
              { dragPreviewWidth: o, dragPreviewHeight: i }
            );
          })(i, t, l, d),
          y = v.dragPreviewWidth,
          b = v.dragPreviewHeight,
          m = o.offsetX,
          O = o.offsetY,
          S = 0 === O || O;
        return {
          x:
            0 === m || m
              ? m
              : new f(
                  [0, 0.5, 1],
                  [u.x, (u.x / l) * y, u.x + y - l]
                ).interpolate(p),
          y: S
            ? O
            : (function () {
                var e = new f(
                  [0, 0.5, 1],
                  [u.y, (u.y / d) * b, u.y + b - d]
                ).interpolate(h);
                return c() && i && (e += (window.devicePixelRatio - 1) * b), e;
              })()
        };
      }
      var y,
        b = '__NATIVE_FILE__',
        m = '__NATIVE_URL__',
        O = '__NATIVE_TEXT__',
        S = '__NATIVE_HTML__';
      function D(e, t, r) {
        var n = t.reduce(function (t, r) {
          return t || e.getData(r);
        }, '');
        return null != n ? n : r;
      }
      function w(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var T =
        (w((y = {}), b, {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
            dataTransfer: function (e) {
              return e;
            }
          },
          matchesTypes: ['Files']
        }),
        w(y, S, {
          exposeProperties: {
            html: function (e, t) {
              return D(e, t, '');
            },
            dataTransfer: function (e) {
              return e;
            }
          },
          matchesTypes: ['Html', 'text/html']
        }),
        w(y, m, {
          exposeProperties: {
            urls: function (e, t) {
              return D(e, t, '').split('\n');
            },
            dataTransfer: function (e) {
              return e;
            }
          },
          matchesTypes: ['Url', 'text/uri-list']
        }),
        w(y, O, {
          exposeProperties: {
            text: function (e, t) {
              return D(e, t, '');
            },
            dataTransfer: function (e) {
              return e;
            }
          },
          matchesTypes: ['Text', 'text/plain']
        }),
        y);
      function I(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function E(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var C = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            E(this, 'item', void 0),
            E(this, 'config', void 0),
            (this.config = t),
            (this.item = {}),
            this.initializeExposedProperties();
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'initializeExposedProperties',
              value: function () {
                var e = this;
                Object.keys(this.config.exposeProperties).forEach(function (t) {
                  Object.defineProperty(e.item, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return (
                        console.warn(
                          'Browser doesn\'t allow reading "'.concat(
                            t,
                            '" until the drop event.'
                          )
                        ),
                        null
                      );
                    }
                  });
                });
              }
            },
            {
              key: 'loadDataTransfer',
              value: function (e) {
                var t = this;
                if (e) {
                  var r = {};
                  Object.keys(this.config.exposeProperties).forEach(function (
                    n
                  ) {
                    r[n] = {
                      value: t.config.exposeProperties[n](
                        e,
                        t.config.matchesTypes
                      ),
                      configurable: !0,
                      enumerable: !0
                    };
                  }),
                    Object.defineProperties(this.item, r);
                }
              }
            },
            {
              key: 'canDrag',
              value: function () {
                return !0;
              }
            },
            {
              key: 'beginDrag',
              value: function () {
                return this.item;
              }
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                return t === e.getSourceId();
              }
            },
            { key: 'endDrag', value: function () {} }
          ]) && I(t.prototype, r),
          n && I(t, n),
          e
        );
      })();
      function k(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(T).filter(function (e) {
            return T[e].matchesTypes.some(function (e) {
              return t.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      function P(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function j(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var A = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            j(this, 'ownerDocument', null),
            j(this, 'globalContext', void 0),
            j(this, 'optionsArgs', void 0),
            (this.globalContext = t),
            (this.optionsArgs = r);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'window',
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : 'undefined' !== typeof window
                  ? window
                  : void 0;
              }
            },
            {
              key: 'document',
              get: function () {
                var e;
                return null !== (e = this.globalContext) &&
                  void 0 !== e &&
                  e.document
                  ? this.globalContext.document
                  : this.window
                  ? this.window.document
                  : void 0;
              }
            },
            {
              key: 'rootElement',
              get: function () {
                var e;
                return (
                  (null === (e = this.optionsArgs) || void 0 === e
                    ? void 0
                    : e.rootElement) || this.window
                );
              }
            }
          ]) && P(t.prototype, r),
          n && P(t, n),
          e
        );
      })();
      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(r), !0).forEach(function (t) {
                N(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : R(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function N(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var M,
        L = (function () {
          function e(t, r, n) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              N(this, 'options', void 0),
              N(this, 'actions', void 0),
              N(this, 'monitor', void 0),
              N(this, 'registry', void 0),
              N(this, 'enterLeaveCounter', void 0),
              N(this, 'sourcePreviewNodes', new Map()),
              N(this, 'sourcePreviewNodeOptions', new Map()),
              N(this, 'sourceNodes', new Map()),
              N(this, 'sourceNodeOptions', new Map()),
              N(this, 'dragStartSourceIds', null),
              N(this, 'dropTargetIds', []),
              N(this, 'dragEnterTargetIds', []),
              N(this, 'currentNativeSource', null),
              N(this, 'currentNativeHandle', null),
              N(this, 'currentDragSourceNode', null),
              N(this, 'altKeyPressed', !1),
              N(this, 'mouseMoveTimeoutTimer', null),
              N(this, 'asyncEndDragFrameId', null),
              N(this, 'dragOverTargetIds', null),
              N(this, 'lastClientOffset', null),
              N(this, 'hoverRafId', null),
              N(this, 'getSourceClientOffset', function (e) {
                var t = o.sourceNodes.get(e);
                return (t && g(t)) || null;
              }),
              N(this, 'endDragNativeItem', function () {
                o.isDraggingNativeItem() &&
                  (o.actions.endDrag(),
                  o.currentNativeHandle &&
                    o.registry.removeSource(o.currentNativeHandle),
                  (o.currentNativeHandle = null),
                  (o.currentNativeSource = null));
              }),
              N(this, 'isNodeInDocument', function (e) {
                return Boolean(
                  e &&
                    o.document &&
                    o.document.body &&
                    o.document.body.contains(e)
                );
              }),
              N(this, 'endDragIfSourceWasRemovedFromDOM', function () {
                var e = o.currentDragSourceNode;
                null == e ||
                  o.isNodeInDocument(e) ||
                  (o.clearCurrentDragSourceNode() &&
                    o.monitor.isDragging() &&
                    o.actions.endDrag());
              }),
              N(this, 'handleTopDragStartCapture', function () {
                o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
              }),
              N(this, 'handleTopDragStart', function (e) {
                if (!e.defaultPrevented) {
                  var t = o.dragStartSourceIds;
                  o.dragStartSourceIds = null;
                  var r = h(e);
                  o.monitor.isDragging() && o.actions.endDrag(),
                    o.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: o.getSourceClientOffset,
                      clientOffset: r
                    });
                  var n = e.dataTransfer,
                    i = k(n);
                  if (o.monitor.isDragging()) {
                    if (n && 'function' === typeof n.setDragImage) {
                      var a = o.monitor.getSourceId(),
                        u = o.sourceNodes.get(a),
                        s = o.sourcePreviewNodes.get(a) || u;
                      if (s) {
                        var c = o.getCurrentSourcePreviewNodeOptions(),
                          l = v(
                            u,
                            s,
                            r,
                            { anchorX: c.anchorX, anchorY: c.anchorY },
                            { offsetX: c.offsetX, offsetY: c.offsetY }
                          );
                        n.setDragImage(s, l.x, l.y);
                      }
                    }
                    try {
                      null === n ||
                        void 0 === n ||
                        n.setData('application/json', {});
                    } catch (d) {}
                    o.setCurrentDragSourceNode(e.target),
                      o.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? o.actions.publishDragSource()
                        : setTimeout(function () {
                            return o.actions.publishDragSource();
                          }, 0);
                  } else if (i) o.beginDragNativeItem(i);
                  else {
                    if (
                      n &&
                      !n.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute('draggable'))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              N(this, 'handleTopDragEndCapture', function () {
                o.clearCurrentDragSourceNode() &&
                  o.monitor.isDragging() &&
                  o.actions.endDrag();
              }),
              N(this, 'handleTopDragEnterCapture', function (e) {
                if (
                  ((o.dragEnterTargetIds = []),
                  o.enterLeaveCounter.enter(e.target) &&
                    !o.monitor.isDragging())
                ) {
                  var t = e.dataTransfer,
                    r = k(t);
                  r && o.beginDragNativeItem(r, t);
                }
              }),
              N(this, 'handleTopDragEnter', function (e) {
                var t = o.dragEnterTargetIds;
                ((o.dragEnterTargetIds = []), o.monitor.isDragging()) &&
                  ((o.altKeyPressed = e.altKey),
                  t.length > 0 && o.actions.hover(t, { clientOffset: h(e) }),
                  t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  }) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect())));
              }),
              N(this, 'handleTopDragOverCapture', function () {
                o.dragOverTargetIds = [];
              }),
              N(this, 'handleTopDragOver', function (e) {
                var t = o.dragOverTargetIds;
                if (((o.dragOverTargetIds = []), !o.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none')
                    )
                  );
                (o.altKeyPressed = e.altKey),
                  (o.lastClientOffset = h(e)),
                  null === o.hoverRafId &&
                    'undefined' !== typeof requestAnimationFrame &&
                    (o.hoverRafId = requestAnimationFrame(function () {
                      o.monitor.isDragging() &&
                        o.actions.hover(t || [], {
                          clientOffset: o.lastClientOffset
                        }),
                        (o.hoverRafId = null);
                    })),
                  (t || []).some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = o.getCurrentDropEffect()))
                    : o.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = 'none'));
              }),
              N(this, 'handleTopDragLeaveCapture', function (e) {
                o.isDraggingNativeItem() && e.preventDefault(),
                  o.enterLeaveCounter.leave(e.target) &&
                    o.isDraggingNativeItem() &&
                    setTimeout(function () {
                      return o.endDragNativeItem();
                    }, 0);
              }),
              N(this, 'handleTopDropCapture', function (e) {
                var t;
                ((o.dropTargetIds = []), o.isDraggingNativeItem())
                  ? (e.preventDefault(),
                    null === (t = o.currentNativeSource) ||
                      void 0 === t ||
                      t.loadDataTransfer(e.dataTransfer))
                  : k(e.dataTransfer) && e.preventDefault();
                o.enterLeaveCounter.reset();
              }),
              N(this, 'handleTopDrop', function (e) {
                var t = o.dropTargetIds;
                (o.dropTargetIds = []),
                  o.actions.hover(t, { clientOffset: h(e) }),
                  o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
                  o.isDraggingNativeItem()
                    ? o.endDragNativeItem()
                    : o.monitor.isDragging() && o.actions.endDrag();
              }),
              N(this, 'handleSelectStart', function (e) {
                var t = e.target;
                'function' === typeof t.dragDrop &&
                  ('INPUT' === t.tagName ||
                    'SELECT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new A(r, n)),
              (this.actions = t.getActions()),
              (this.monitor = t.getMonitor()),
              (this.registry = t.getRegistry()),
              (this.enterLeaveCounter = new u(this.isNodeInDocument));
          }
          var t, r, o;
          return (
            (t = e),
            (r = [
              {
                key: 'profile',
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0
                  };
                }
              },
              {
                key: 'window',
                get: function () {
                  return this.options.window;
                }
              },
              {
                key: 'document',
                get: function () {
                  return this.options.document;
                }
              },
              {
                key: 'rootElement',
                get: function () {
                  return this.options.rootElement;
                }
              },
              {
                key: 'setup',
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw new Error(
                        'Cannot have two HTML5 backends at the same time.'
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                }
              },
              {
                key: 'teardown',
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                }
              },
              {
                key: 'connectDragPreview',
                value: function (e, t, r) {
                  var n = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, r),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      n.sourcePreviewNodes.delete(e),
                        n.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                }
              },
              {
                key: 'connectDragSource',
                value: function (e, t, r) {
                  var n = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
                  var o = function (t) {
                      return n.handleDragStart(t, e);
                    },
                    i = function (e) {
                      return n.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute('draggable', 'true'),
                    t.addEventListener('dragstart', o),
                    t.addEventListener('selectstart', i),
                    function () {
                      n.sourceNodes.delete(e),
                        n.sourceNodeOptions.delete(e),
                        t.removeEventListener('dragstart', o),
                        t.removeEventListener('selectstart', i),
                        t.setAttribute('draggable', 'false');
                    }
                  );
                }
              },
              {
                key: 'connectDropTarget',
                value: function (e, t) {
                  var r = this,
                    n = function (t) {
                      return r.handleDragEnter(t, e);
                    },
                    o = function (t) {
                      return r.handleDragOver(t, e);
                    },
                    i = function (t) {
                      return r.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener('dragenter', n),
                    t.addEventListener('dragover', o),
                    t.addEventListener('drop', i),
                    function () {
                      t.removeEventListener('dragenter', n),
                        t.removeEventListener('dragover', o),
                        t.removeEventListener('drop', i);
                    }
                  );
                }
              },
              {
                key: 'addEventListeners',
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener('dragstart', this.handleTopDragStart),
                    e.addEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.addEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.addEventListener('dragenter', this.handleTopDragEnter),
                    e.addEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.addEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.addEventListener('dragover', this.handleTopDragOver),
                    e.addEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.addEventListener('drop', this.handleTopDrop),
                    e.addEventListener('drop', this.handleTopDropCapture, !0));
                }
              },
              {
                key: 'removeEventListeners',
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStart
                    ),
                    e.removeEventListener(
                      'dragstart',
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.removeEventListener(
                      'dragend',
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.removeEventListener('dragenter', this.handleTopDragEnter),
                    e.removeEventListener(
                      'dragenter',
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.removeEventListener(
                      'dragleave',
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.removeEventListener('dragover', this.handleTopDragOver),
                    e.removeEventListener(
                      'dragover',
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.removeEventListener('drop', this.handleTopDrop),
                    e.removeEventListener(
                      'drop',
                      this.handleTopDropCapture,
                      !0
                    ));
                }
              },
              {
                key: 'getCurrentSourceNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return x(
                    { dropEffect: this.altKeyPressed ? 'copy' : 'move' },
                    t || {}
                  );
                }
              },
              {
                key: 'getCurrentDropEffect',
                value: function () {
                  return this.isDraggingNativeItem()
                    ? 'copy'
                    : this.getCurrentSourceNodeOptions().dropEffect;
                }
              },
              {
                key: 'getCurrentSourcePreviewNodeOptions',
                value: function () {
                  var e = this.monitor.getSourceId();
                  return x(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    this.sourcePreviewNodeOptions.get(e) || {}
                  );
                }
              },
              {
                key: 'isDraggingNativeItem',
                value: function () {
                  var e = this.monitor.getItemType();
                  return Object.keys(n).some(function (t) {
                    return n[t] === e;
                  });
                }
              },
              {
                key: 'beginDragNativeItem',
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = (function (e, t) {
                      var r = new C(T[e]);
                      return r.loadDataTransfer(t), r;
                    })(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                }
              },
              {
                key: 'setCurrentDragSourceNode',
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e),
                    (this.mouseMoveTimeoutTimer = setTimeout(function () {
                      var e;
                      return null === (e = t.rootElement) || void 0 === e
                        ? void 0
                        : e.addEventListener(
                            'mousemove',
                            t.endDragIfSourceWasRemovedFromDOM,
                            !0
                          );
                    }, 1e3));
                }
              },
              {
                key: 'clearCurrentDragSourceNode',
                value: function () {
                  var e;
                  return (
                    !!this.currentDragSourceNode &&
                    ((this.currentDragSourceNode = null),
                    this.rootElement &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                      this.rootElement.removeEventListener(
                        'mousemove',
                        this.endDragIfSourceWasRemovedFromDOM,
                        !0
                      )),
                    (this.mouseMoveTimeoutTimer = null),
                    !0)
                  );
                }
              },
              {
                key: 'handleDragStart',
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                }
              },
              {
                key: 'handleDragEnter',
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                }
              },
              {
                key: 'handleDragOver',
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                }
              },
              {
                key: 'handleDrop',
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                }
              }
            ]) && _(t.prototype, r),
            o && _(t, o),
            e
          );
        })();
      function F() {
        return (
          M ||
            ((M = new Image()).src =
              'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
          M
        );
      }
      var U = function (e, t, r) {
        return new L(e, t, r);
      };
    },
    79692: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          DndContext: () => o,
          DndProvider: () => je,
          DragLayer: () => Vt,
          DragPreviewImage: () => Re,
          DragSource: () => Et,
          DropTarget: () => Ft,
          useDrag: () => hr,
          useDragDropManager: () => Jt,
          useDragLayer: () => Er,
          useDrop: () => wr
        });
      var n = r(65043),
        o = (0, n.createContext)({ dragDropManager: void 0 }),
        i = r(70579);
      function a(e, t) {
        for (
          var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
        if (!e) {
          var i;
          if (void 0 === t)
            i = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var a = 0;
            (i = new Error(
              t.replace(/%s/g, function () {
                return n[a++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((i.framesToPop = 1), i);
        }
      }
      var u = 'dnd-core/INIT_COORDS',
        s = 'dnd-core/BEGIN_DRAG',
        c = 'dnd-core/PUBLISH_DRAG_SOURCE',
        l = 'dnd-core/HOVER',
        d = 'dnd-core/DROP',
        f = 'dnd-core/END_DRAG';
      function p(e, t) {
        return {
          type: u,
          payload: { sourceClientOffset: t || null, clientOffset: e || null }
        };
      }
      function g(e) {
        return (
          (g =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          g(e)
        );
      }
      function h(e) {
        return 'object' === g(e);
      }
      var v = {
        type: u,
        payload: { clientOffset: null, sourceClientOffset: null }
      };
      function y(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { publishSource: !0 },
            n = r.publishSource,
            o = void 0 === n || n,
            i = r.clientOffset,
            u = r.getSourceClientOffset,
            c = e.getMonitor(),
            l = e.getRegistry();
          e.dispatch(p(i)),
            (function (e, t, r) {
              a(!t.isDragging(), 'Cannot call beginDrag while dragging.'),
                e.forEach(function (e) {
                  a(r.getSource(e), 'Expected sourceIds to be registered.');
                });
            })(t, c, l);
          var d = (function (e, t) {
            for (var r = null, n = e.length - 1; n >= 0; n--)
              if (t.canDragSource(e[n])) {
                r = e[n];
                break;
              }
            return r;
          })(t, c);
          if (null !== d) {
            var f = null;
            if (i) {
              if (!u) throw new Error('getSourceClientOffset must be defined');
              !(function (e) {
                a(
                  'function' === typeof e,
                  'When clientOffset is provided, getSourceClientOffset must be a function.'
                );
              })(u),
                (f = u(d));
            }
            e.dispatch(p(i, f));
            var g = l.getSource(d).beginDrag(c, d);
            if (null != g) {
              !(function (e) {
                a(h(e), 'Item must be an object.');
              })(g),
                l.pinSource(d);
              var y = l.getSourceType(d);
              return {
                type: s,
                payload: {
                  itemType: y,
                  item: g,
                  sourceId: d,
                  clientOffset: i || null,
                  sourceClientOffset: f || null,
                  isSourcePublic: !!o
                }
              };
            }
          } else e.dispatch(v);
        };
      }
      function b(e) {
        return function () {
          if (e.getMonitor().isDragging()) return { type: c };
        };
      }
      function m(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }
      function O(e) {
        return function (t) {
          var r = (
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          ).clientOffset;
          !(function (e) {
            a(Array.isArray(e), 'Expected targetIds to be an array.');
          })(t);
          var n = t.slice(0),
            o = e.getMonitor(),
            i = e.getRegistry();
          return (
            (function (e, t, r) {
              a(t.isDragging(), 'Cannot call hover while not dragging.'),
                a(!t.didDrop(), 'Cannot call hover after drop.');
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                a(
                  e.lastIndexOf(o) === n,
                  'Expected targetIds to be unique in the passed array.'
                ),
                  a(r.getTarget(o), 'Expected targetIds to be registered.');
              }
            })(n, o, i),
            (function (e, t, r) {
              for (var n = e.length - 1; n >= 0; n--) {
                var o = e[n];
                m(t.getTargetType(o), r) || e.splice(n, 1);
              }
            })(n, i, o.getItemType()),
            (function (e, t, r) {
              e.forEach(function (e) {
                r.getTarget(e).hover(t, e);
              });
            })(n, o, i),
            { type: l, payload: { targetIds: n, clientOffset: r || null } }
          );
        };
      }
      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                w(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function w(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function T(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = e.getMonitor(),
            n = e.getRegistry();
          !(function (e) {
            a(e.isDragging(), 'Cannot call drop while not dragging.'),
              a(
                !e.didDrop(),
                'Cannot call drop twice during one drag operation.'
              );
          })(r);
          var o = (function (e) {
            var t = e.getTargetIds().filter(e.canDropOnTarget, e);
            return t.reverse(), t;
          })(r);
          o.forEach(function (o, i) {
            var u = (function (e, t, r, n) {
                var o = r.getTarget(e),
                  i = o ? o.drop(n, e) : void 0;
                (function (e) {
                  a(
                    'undefined' === typeof e || h(e),
                    'Drop result must either be an object or undefined.'
                  );
                })(i),
                  'undefined' === typeof i &&
                    (i = 0 === t ? {} : n.getDropResult());
                return i;
              })(o, i, n, r),
              s = { type: d, payload: { dropResult: D(D({}, t), u) } };
            e.dispatch(s);
          });
        };
      }
      function I(e) {
        return function () {
          var t = e.getMonitor(),
            r = e.getRegistry();
          !(function (e) {
            a(e.isDragging(), 'Cannot call endDrag while not dragging.');
          })(t);
          var n = t.getSourceId();
          null != n && (r.getSource(n, !0).endDrag(t, n), r.unpinSource());
          return { type: f };
        };
      }
      function E(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function C(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var k = (function () {
          function e(t, r) {
            var n = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              C(this, 'store', void 0),
              C(this, 'monitor', void 0),
              C(this, 'backend', void 0),
              C(this, 'isSetUp', !1),
              C(this, 'handleRefCountChange', function () {
                var e = n.store.getState().refCount > 0;
                n.backend &&
                  (e && !n.isSetUp
                    ? (n.backend.setup(), (n.isSetUp = !0))
                    : !e &&
                      n.isSetUp &&
                      (n.backend.teardown(), (n.isSetUp = !1)));
              }),
              (this.store = t),
              (this.monitor = r),
              t.subscribe(this.handleRefCountChange);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveBackend',
                value: function (e) {
                  this.backend = e;
                }
              },
              {
                key: 'getMonitor',
                value: function () {
                  return this.monitor;
                }
              },
              {
                key: 'getBackend',
                value: function () {
                  return this.backend;
                }
              },
              {
                key: 'getRegistry',
                value: function () {
                  return this.monitor.registry;
                }
              },
              {
                key: 'getActions',
                value: function () {
                  var e = this,
                    t = this.store.dispatch,
                    r = (function (e) {
                      return {
                        beginDrag: y(e),
                        publishDragSource: b(e),
                        hover: O(e),
                        drop: T(e),
                        endDrag: I(e)
                      };
                    })(this);
                  return Object.keys(r).reduce(function (n, o) {
                    var i,
                      a = r[o];
                    return (
                      (n[o] =
                        ((i = a),
                        function () {
                          for (
                            var r = arguments.length, n = new Array(r), o = 0;
                            o < r;
                            o++
                          )
                            n[o] = arguments[o];
                          var a = i.apply(e, n);
                          'undefined' !== typeof a && t(a);
                        })),
                      n
                    );
                  }, {});
                }
              },
              {
                key: 'dispatch',
                value: function (e) {
                  this.store.dispatch(e);
                }
              }
            ]),
            r && E(t.prototype, r),
            n && E(t, n),
            e
          );
        })(),
        P = r(16096),
        j = function (e, t) {
          return e === t;
        };
      function A(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : A(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function x(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var _ = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
      };
      function N() {
        var e,
          t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          n = arguments.length > 1 ? arguments[1] : void 0,
          o = n.payload;
        switch (n.type) {
          case u:
          case s:
            return {
              initialSourceClientOffset: o.sourceClientOffset,
              initialClientOffset: o.clientOffset,
              clientOffset: o.clientOffset
            };
          case l:
            return (
              (e = r.clientOffset),
              (t = o.clientOffset),
              (!e && !t) || (e && t && e.x === t.x && e.y === t.y)
                ? r
                : R(R({}, r), {}, { clientOffset: o.clientOffset })
            );
          case f:
          case d:
            return _;
          default:
            return r;
        }
      }
      var M = 'dnd-core/ADD_SOURCE',
        L = 'dnd-core/ADD_TARGET',
        F = 'dnd-core/REMOVE_SOURCE',
        U = 'dnd-core/REMOVE_TARGET';
      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                q(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function q(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var K = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null
      };
      function z() {
        var e,
          t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
          n = arguments.length > 1 ? arguments[1] : void 0,
          o = n.payload;
        switch (n.type) {
          case s:
            return B(
              B({}, r),
              {},
              {
                itemType: o.itemType,
                item: o.item,
                sourceId: o.sourceId,
                isSourcePublic: o.isSourcePublic,
                dropResult: null,
                didDrop: !1
              }
            );
          case c:
            return B(B({}, r), {}, { isSourcePublic: !0 });
          case l:
            return B(B({}, r), {}, { targetIds: o.targetIds });
          case U:
            return -1 === r.targetIds.indexOf(o.targetId)
              ? r
              : B(
                  B({}, r),
                  {},
                  {
                    targetIds:
                      ((e = r.targetIds),
                      (t = o.targetId),
                      e.filter(function (e) {
                        return e !== t;
                      }))
                  }
                );
          case d:
            return B(
              B({}, r),
              {},
              { dropResult: o.dropResult, didDrop: !0, targetIds: [] }
            );
          case f:
            return B(
              B({}, r),
              {},
              {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: []
              }
            );
          default:
            return r;
        }
      }
      function W() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
          case M:
          case L:
            return e + 1;
          case F:
          case U:
            return e - 1;
          default:
            return e;
        }
      }
      var V = [],
        Y = [];
      function G() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case l:
            break;
          case M:
          case L:
          case U:
          case F:
            return V;
          default:
            return Y;
        }
        var t = e.payload,
          r = t.targetIds,
          n = void 0 === r ? [] : r,
          o = t.prevTargetIds,
          i = void 0 === o ? [] : o,
          a = (function (e, t) {
            var r = new Map(),
              n = function (e) {
                r.set(e, r.has(e) ? r.get(e) + 1 : 1);
              };
            e.forEach(n), t.forEach(n);
            var o = [];
            return (
              r.forEach(function (e, t) {
                1 === e && o.push(t);
              }),
              o
            );
          })(n, i),
          u =
            a.length > 0 ||
            !(function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : j;
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; ++n) if (!r(e[n], t[n])) return !1;
              return !0;
            })(n, i);
        if (!u) return V;
        var s = i[i.length - 1],
          c = n[n.length - 1];
        return s !== c && (s && a.push(s), c && a.push(c)), a;
      }
      function $() {
        return (
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) +
          1
        );
      }
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                J(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function J(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function Z() {
        var e,
          t,
          r,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: G(n.dirtyHandlerIds, {
            type: o.type,
            payload: Q(
              Q({}, o.payload),
              {},
              {
                prevTargetIds:
                  ((e = n),
                  (t = 'dragOperation.targetIds'),
                  (r = []),
                  t.split('.').reduce(function (e, t) {
                    return e && e[t] ? e[t] : r || null;
                  }, e))
              }
            )
          }),
          dragOffset: N(n.dragOffset, o),
          refCount: W(n.refCount, o),
          dragOperation: z(n.dragOperation, o),
          stateId: $(n.stateId)
        };
      }
      function ee(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function te(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function re(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      (V.__IS_NONE__ = !0), (Y.__IS_ALL__ = !0);
      var ne,
        oe = (function () {
          function e(t, r) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              re(this, 'store', void 0),
              re(this, 'registry', void 0),
              (this.store = t),
              (this.registry = r);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'subscribeToStateChange',
                value: function (e) {
                  var t = this,
                    r = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { handlerIds: void 0 }
                    ).handlerIds;
                  a('function' === typeof e, 'listener must be a function.'),
                    a(
                      'undefined' === typeof r || Array.isArray(r),
                      'handlerIds, when specified, must be an array of strings.'
                    );
                  var n = this.store.getState().stateId;
                  return this.store.subscribe(function () {
                    var o = t.store.getState(),
                      i = o.stateId;
                    try {
                      var a =
                        i === n ||
                        (i === n + 1 &&
                          !(function (e, t) {
                            return (
                              e !== V &&
                              (e === Y ||
                                'undefined' === typeof t ||
                                ((r = e),
                                t.filter(function (e) {
                                  return r.indexOf(e) > -1;
                                })).length > 0)
                            );
                            var r;
                          })(o.dirtyHandlerIds, r));
                      a || e();
                    } finally {
                      n = i;
                    }
                  });
                }
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  var t = this;
                  a('function' === typeof e, 'listener must be a function.');
                  var r = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var n = t.store.getState().dragOffset;
                    n !== r && ((r = n), e());
                  });
                }
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    a(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e)
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                }
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    a(
                      t,
                      'Expected to find a valid target. targetId='.concat(e)
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      m(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                }
              },
              {
                key: 'isDragging',
                value: function () {
                  return Boolean(this.getItemType());
                }
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    a(
                      t,
                      'Expected to find a valid source. sourceId='.concat(e)
                    ),
                    !(!this.isDragging() || !this.isSourcePublic()) &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                }
              },
              {
                key: 'isOverTarget',
                value: function (e) {
                  if (!e) return !1;
                  var t = (
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 }
                  ).shallow;
                  if (!this.isDragging()) return !1;
                  var r = this.registry.getTargetType(e),
                    n = this.getItemType();
                  if (n && !m(r, n)) return !1;
                  var o = this.getTargetIds();
                  if (!o.length) return !1;
                  var i = o.indexOf(e);
                  return t ? i === o.length - 1 : i > -1;
                }
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                }
              },
              {
                key: 'getItem',
                value: function () {
                  return this.store.getState().dragOperation.item;
                }
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                }
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                }
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                }
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                }
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic
                  );
                }
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                }
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                }
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                }
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return (function (e) {
                    var t,
                      r,
                      n = e.clientOffset,
                      o = e.initialClientOffset,
                      i = e.initialSourceClientOffset;
                    return n && o && i
                      ? ee(((r = i), { x: (t = n).x + r.x, y: t.y + r.y }), o)
                      : null;
                  })(this.store.getState().dragOffset);
                }
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return (function (e) {
                    var t = e.clientOffset,
                      r = e.initialClientOffset;
                    return t && r ? ee(t, r) : null;
                  })(this.store.getState().dragOffset);
                }
              }
            ]),
            r && te(t.prototype, r),
            n && te(t, n),
            e
          );
        })(),
        ie = 0;
      function ae(e) {
        return (
          (ae =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ae(e)
        );
      }
      function ue(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return ue(e, !1);
            })
          : a(
              'string' === typeof e || 'symbol' === ae(e),
              t
                ? 'Type can only be a string, a symbol, or an array of either.'
                : 'Type can only be a string or a symbol.'
            );
      }
      !(function (e) {
        (e.SOURCE = 'SOURCE'), (e.TARGET = 'TARGET');
      })(ne || (ne = {}));
      const se = 'undefined' !== typeof global ? global : self,
        ce = se.MutationObserver || se.WebKitMutationObserver;
      function le(e) {
        return function () {
          const t = setTimeout(n, 0),
            r = setInterval(n, 50);
          function n() {
            clearTimeout(t), clearInterval(r), e();
          }
        };
      }
      const de =
        'function' === typeof ce
          ? function (e) {
              let t = 1;
              const r = new ce(e),
                n = document.createTextNode('');
              return (
                r.observe(n, { characterData: !0 }),
                function () {
                  (t = -t), (n.data = t);
                }
              );
            }
          : le;
      class fe {
        call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            (this.task = null), this.release(this);
          }
        }
        constructor(e, t) {
          (this.onError = e), (this.release = t), (this.task = null);
        }
      }
      const pe = new (class {
          enqueueTask(e) {
            const { queue: t, requestFlush: r } = this;
            t.length || (r(), (this.flushing = !0)), (t[t.length] = e);
          }
          constructor() {
            (this.queue = []),
              (this.pendingErrors = []),
              (this.flushing = !1),
              (this.index = 0),
              (this.capacity = 1024),
              (this.flush = () => {
                const { queue: e } = this;
                for (; this.index < e.length; ) {
                  const t = this.index;
                  if ((this.index++, e[t].call(), this.index > this.capacity)) {
                    for (let t = 0, r = e.length - this.index; t < r; t++)
                      e[t] = e[t + this.index];
                    (e.length -= this.index), (this.index = 0);
                  }
                }
                (e.length = 0), (this.index = 0), (this.flushing = !1);
              }),
              (this.registerPendingError = (e) => {
                this.pendingErrors.push(e), this.requestErrorThrow();
              }),
              (this.requestFlush = de(this.flush)),
              (this.requestErrorThrow = le(() => {
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
              }));
          }
        })(),
        ge = new (class {
          create(e) {
            const t = this.freeTasks,
              r = t.length
                ? t.pop()
                : new fe(this.onError, (e) => (t[t.length] = e));
            return (r.task = e), r;
          }
          constructor(e) {
            (this.onError = e), (this.freeTasks = []);
          }
        })(pe.registerPendingError);
      function he(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ve(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function ye(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return be(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return be(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function be(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function me(e) {
        var t = (ie++).toString();
        switch (e) {
          case ne.SOURCE:
            return 'S'.concat(t);
          case ne.TARGET:
            return 'T'.concat(t);
          default:
            throw new Error('Unknown Handler Role: '.concat(e));
        }
      }
      function Oe(e) {
        switch (e[0]) {
          case 'S':
            return ne.SOURCE;
          case 'T':
            return ne.TARGET;
          default:
            a(!1, 'Cannot parse handler ID: '.concat(e));
        }
      }
      function Se(e, t) {
        var r = e.entries(),
          n = !1;
        do {
          var o = r.next(),
            i = o.done;
          if (ye(o.value, 2)[1] === t) return !0;
          n = !!i;
        } while (!n);
        return !1;
      }
      var De = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            ve(this, 'types', new Map()),
            ve(this, 'dragSources', new Map()),
            ve(this, 'dropTargets', new Map()),
            ve(this, 'pinnedSourceId', null),
            ve(this, 'pinnedSource', null),
            ve(this, 'store', void 0),
            (this.store = t);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'addSource',
              value: function (e, t) {
                ue(e),
                  (function (e) {
                    a(
                      'function' === typeof e.canDrag,
                      'Expected canDrag to be a function.'
                    ),
                      a(
                        'function' === typeof e.beginDrag,
                        'Expected beginDrag to be a function.'
                      ),
                      a(
                        'function' === typeof e.endDrag,
                        'Expected endDrag to be a function.'
                      );
                  })(t);
                var r = this.addHandler(ne.SOURCE, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: M, payload: { sourceId: e } };
                    })(r)
                  ),
                  r
                );
              }
            },
            {
              key: 'addTarget',
              value: function (e, t) {
                ue(e, !0),
                  (function (e) {
                    a(
                      'function' === typeof e.canDrop,
                      'Expected canDrop to be a function.'
                    ),
                      a(
                        'function' === typeof e.hover,
                        'Expected hover to be a function.'
                      ),
                      a(
                        'function' === typeof e.drop,
                        'Expected beginDrag to be a function.'
                      );
                  })(t);
                var r = this.addHandler(ne.TARGET, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: L, payload: { targetId: e } };
                    })(r)
                  ),
                  r
                );
              }
            },
            {
              key: 'containsHandler',
              value: function (e) {
                return Se(this.dragSources, e) || Se(this.dropTargets, e);
              }
            },
            {
              key: 'getSource',
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return (
                  a(this.isSourceId(e), 'Expected a valid source ID.'),
                  t && e === this.pinnedSourceId
                    ? this.pinnedSource
                    : this.dragSources.get(e)
                );
              }
            },
            {
              key: 'getTarget',
              value: function (e) {
                return (
                  a(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.dropTargets.get(e)
                );
              }
            },
            {
              key: 'getSourceType',
              value: function (e) {
                return (
                  a(this.isSourceId(e), 'Expected a valid source ID.'),
                  this.types.get(e)
                );
              }
            },
            {
              key: 'getTargetType',
              value: function (e) {
                return (
                  a(this.isTargetId(e), 'Expected a valid target ID.'),
                  this.types.get(e)
                );
              }
            },
            {
              key: 'isSourceId',
              value: function (e) {
                return Oe(e) === ne.SOURCE;
              }
            },
            {
              key: 'isTargetId',
              value: function (e) {
                return Oe(e) === ne.TARGET;
              }
            },
            {
              key: 'removeSource',
              value: function (e) {
                var t,
                  r = this;
                a(this.getSource(e), 'Expected an existing source.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: F, payload: { sourceId: e } };
                    })(e)
                  ),
                  (t = function () {
                    r.dragSources.delete(e), r.types.delete(e);
                  }),
                  pe.enqueueTask(ge.create(t));
              }
            },
            {
              key: 'removeTarget',
              value: function (e) {
                a(this.getTarget(e), 'Expected an existing target.'),
                  this.store.dispatch(
                    (function (e) {
                      return { type: U, payload: { targetId: e } };
                    })(e)
                  ),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              }
            },
            {
              key: 'pinSource',
              value: function (e) {
                var t = this.getSource(e);
                a(t, 'Expected an existing source.'),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              }
            },
            {
              key: 'unpinSource',
              value: function () {
                a(this.pinnedSource, 'No source is pinned at the time.'),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              }
            },
            {
              key: 'addHandler',
              value: function (e, t, r) {
                var n = me(e);
                return (
                  this.types.set(n, t),
                  e === ne.SOURCE
                    ? this.dragSources.set(n, r)
                    : e === ne.TARGET && this.dropTargets.set(n, r),
                  n
                );
              }
            }
          ]),
          r && he(t.prototype, r),
          n && he(t, n),
          e
        );
      })();
      function we(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = (function (e) {
            var t =
              'undefined' !== typeof window &&
              window.__REDUX_DEVTOOLS_EXTENSION__;
            return (0, P.y$)(
              Z,
              e && t && t({ name: 'dnd-core', instanceId: 'dnd-core' })
            );
          })(arguments.length > 3 && void 0 !== arguments[3] && arguments[3]),
          o = new oe(n, new De(n)),
          i = new k(n, o),
          a = e(i, t, r);
        return i.receiveBackend(a), i;
      }
      var Te = ['children'];
      function Ie(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return Ee(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Ee(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ee(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Ce(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var ke = 0,
        Pe = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__'),
        je = (0, n.memo)(function (e) {
          var t = e.children,
            r = (function (e) {
              if ('manager' in e) {
                return [{ dragDropManager: e.manager }, !1];
              }
              var t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Ae(),
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    o = t;
                  o[Pe] || (o[Pe] = { dragDropManager: we(e, t, r, n) });
                  return o[Pe];
                })(e.backend, e.context, e.options, e.debugMode),
                r = !e.context;
              return [t, r];
            })(Ce(e, Te)),
            a = Ie(r, 2),
            u = a[0],
            s = a[1];
          return (
            (0, n.useEffect)(function () {
              if (s) {
                var e = Ae();
                return (
                  ++ke,
                  function () {
                    0 === --ke && (e[Pe] = null);
                  }
                );
              }
            }, []),
            (0, i.jsx)(
              o.Provider,
              Object.assign({ value: u }, { children: t }),
              void 0
            )
          );
        });
      function Ae() {
        return 'undefined' !== typeof r.g ? r.g : window;
      }
      var Re = (0, n.memo)(function (e) {
        var t = e.connect,
          r = e.src;
        return (
          (0, n.useEffect)(function () {
            if ('undefined' !== typeof Image) {
              var e = !1,
                n = new Image();
              return (
                (n.src = r),
                (n.onload = function () {
                  t(n), (e = !0);
                }),
                function () {
                  e && t(null);
                }
              );
            }
          }),
          null
        );
      });
      function xe(e, t, r) {
        var n = r.getRegistry(),
          o = n.addTarget(e, t);
        return [
          o,
          function () {
            return n.removeTarget(o);
          }
        ];
      }
      function _e(e, t, r) {
        var n = r.getRegistry(),
          o = n.addSource(e, t);
        return [
          o,
          function () {
            return n.removeSource(o);
          }
        ];
      }
      function Ne(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          if (!(0, n.isValidElement)(t)) {
            var o = t;
            return e(o, r), o;
          }
          var i = t;
          !(function (e) {
            if ('string' !== typeof e.type) {
              var t = e.type.displayName || e.type.name || 'the component';
              throw new Error(
                'Only native element nodes can now be passed to React DnD connectors.' +
                  'You can either wrap '.concat(
                    t,
                    ' into a <div>, or turn it into a '
                  ) +
                  'drag source or a drop target itself.'
              );
            }
          })(i);
          var u = r
            ? function (t) {
                return e(t, r);
              }
            : e;
          return (function (e, t) {
            var r = e.ref;
            return (
              a(
                'string' !== typeof r,
                'Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs'
              ),
              r
                ? (0, n.cloneElement)(e, {
                    ref: function (e) {
                      Le(r, e), Le(t, e);
                    }
                  })
                : (0, n.cloneElement)(e, { ref: t })
            );
          })(i, u);
        };
      }
      function Me(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (r) {
            var n = e[r];
            if (r.endsWith('Ref')) t[r] = e[r];
            else {
              var o = Ne(n);
              t[r] = function () {
                return o;
              };
            }
          }),
          t
        );
      }
      function Le(e, t) {
        'function' === typeof e ? e(t) : (e.current = t);
      }
      function Fe(e) {
        return (
          (Fe =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Fe(e)
        );
      }
      function Ue(e) {
        return (
          null !== e &&
          'object' === Fe(e) &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
      function He(e, t, r, n) {
        var o = r ? r.call(n, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), s = 0;
          s < i.length;
          s++
        ) {
          var c = i[s];
          if (!u(c)) return !1;
          var l = e[c],
            d = t[c];
          if (
            !1 === (o = r ? r.call(n, l, d, c) : void 0) ||
            (void 0 === o && l !== d)
          )
            return !1;
        }
        return !0;
      }
      function Be(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function qe(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var Ke = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            qe(
              this,
              'hooks',
              Me({
                dragSource: function (e, t) {
                  r.clearDragSource(),
                    (r.dragSourceOptions = t || null),
                    Ue(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
                    r.reconnectDragSource();
                },
                dragPreview: function (e, t) {
                  r.clearDragPreview(),
                    (r.dragPreviewOptions = t || null),
                    Ue(e) ? (r.dragPreviewRef = e) : (r.dragPreviewNode = e),
                    r.reconnectDragPreview();
                }
              })
            ),
            qe(this, 'handlerId', null),
            qe(this, 'dragSourceRef', null),
            qe(this, 'dragSourceNode', void 0),
            qe(this, 'dragSourceOptionsInternal', null),
            qe(this, 'dragSourceUnsubscribe', void 0),
            qe(this, 'dragPreviewRef', null),
            qe(this, 'dragPreviewNode', void 0),
            qe(this, 'dragPreviewOptionsInternal', null),
            qe(this, 'dragPreviewUnsubscribe', void 0),
            qe(this, 'lastConnectedHandlerId', null),
            qe(this, 'lastConnectedDragSource', null),
            qe(this, 'lastConnectedDragSourceOptions', null),
            qe(this, 'lastConnectedDragPreview', null),
            qe(this, 'lastConnectedDragPreviewOptions', null),
            qe(this, 'backend', void 0),
            (this.backend = t);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'receiveHandlerId',
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              }
            },
            {
              key: 'connectTarget',
              get: function () {
                return this.dragSource;
              }
            },
            {
              key: 'dragSourceOptions',
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              }
            },
            {
              key: 'dragPreviewOptions',
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              }
            },
            {
              key: 'reconnect',
              value: function () {
                this.reconnectDragSource(), this.reconnectDragPreview();
              }
            },
            {
              key: 'reconnectDragSource',
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                t && this.disconnectDragSource(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragSource = e),
                        (this.lastConnectedDragSourceOptions =
                          this.dragSourceOptions),
                        (this.dragSourceUnsubscribe =
                          this.backend.connectDragSource(
                            this.handlerId,
                            e,
                            this.dragSourceOptions
                          )))
                      : (this.lastConnectedDragSource = e));
              }
            },
            {
              key: 'reconnectDragPreview',
              value: function () {
                var e = this.dragPreview,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                t && this.disconnectDragPreview(),
                  this.handlerId &&
                    (e
                      ? t &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragPreview = e),
                        (this.lastConnectedDragPreviewOptions =
                          this.dragPreviewOptions),
                        (this.dragPreviewUnsubscribe =
                          this.backend.connectDragPreview(
                            this.handlerId,
                            e,
                            this.dragPreviewOptions
                          )))
                      : (this.lastConnectedDragPreview = e));
              }
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              }
            },
            {
              key: 'didConnectedDragSourceChange',
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              }
            },
            {
              key: 'didConnectedDragPreviewChange',
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              }
            },
            {
              key: 'didDragSourceOptionsChange',
              value: function () {
                return !He(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions
                );
              }
            },
            {
              key: 'didDragPreviewOptionsChange',
              value: function () {
                return !He(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions
                );
              }
            },
            {
              key: 'disconnectDragSource',
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              }
            },
            {
              key: 'disconnectDragPreview',
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              }
            },
            {
              key: 'dragSource',
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              }
            },
            {
              key: 'dragPreview',
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              }
            },
            {
              key: 'clearDragSource',
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              }
            },
            {
              key: 'clearDragPreview',
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              }
            }
          ]) && Be(t.prototype, r),
          n && Be(t, n),
          e
        );
      })();
      function ze(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function We(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var Ve = !1,
        Ye = !1,
        Ge = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              We(this, 'internalMonitor', void 0),
              We(this, 'sourceId', null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.sourceId = e;
                }
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.sourceId;
                }
              },
              {
                key: 'canDrag',
                value: function () {
                  a(
                    !Ve,
                    'You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor'
                  );
                  try {
                    return (
                      (Ve = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    Ve = !1;
                  }
                }
              },
              {
                key: 'isDragging',
                value: function () {
                  if (!this.sourceId) return !1;
                  a(
                    !Ye,
                    'You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor'
                  );
                  try {
                    return (
                      (Ye = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    Ye = !1;
                  }
                }
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                }
              },
              {
                key: 'isDraggingSource',
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                }
              },
              {
                key: 'isOverTarget',
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                }
              },
              {
                key: 'getTargetIds',
                value: function () {
                  return this.internalMonitor.getTargetIds();
                }
              },
              {
                key: 'isSourcePublic',
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                }
              },
              {
                key: 'getSourceId',
                value: function () {
                  return this.internalMonitor.getSourceId();
                }
              },
              {
                key: 'subscribeToOffsetChange',
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                }
              },
              {
                key: 'canDragSource',
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                }
              },
              {
                key: 'canDropOnTarget',
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                }
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                }
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                }
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                }
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                }
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                }
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                }
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                }
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                }
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                }
              }
            ]) && ze(t.prototype, r),
            n && ze(t, n),
            e
          );
        })();
      function $e(e) {
        return (
          ($e =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          $e(e)
        );
      }
      function Xe(e) {
        var t = e.current;
        return null == t ? null : t.decoratedRef ? t.decoratedRef.current : t;
      }
      function Qe(e) {
        return (
          ((t = e) &&
            t.prototype &&
            'function' === typeof t.prototype.render) ||
          (function (e) {
            var t;
            return (
              'Symbol(react.forward_ref)' ===
              (null === e ||
              void 0 === e ||
              null === (t = e.$$typeof) ||
              void 0 === t
                ? void 0
                : t.toString())
            );
          })(e)
        );
        var t;
      }
      function Je(e) {
        return 'function' === typeof e;
      }
      function Ze() {}
      function et(e) {
        if (
          !(function (e) {
            return 'object' === $e(e) && null !== e;
          })(e)
        )
          return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function tt(e, t) {
        return (
          'string' === typeof e ||
          'symbol' === $e(e) ||
          (!!t &&
            Array.isArray(e) &&
            e.every(function (e) {
              return tt(e, !1);
            }))
        );
      }
      function rt(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function nt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ot(e, t, r) {
        return t && nt(e.prototype, t), r && nt(e, r), e;
      }
      function it(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var at = (function () {
        function e(t) {
          rt(this, e),
            it(this, 'isDisposed', !1),
            it(this, 'action', void 0),
            (this.action = Je(t) ? t : Ze);
        }
        return (
          ot(
            e,
            [
              {
                key: 'dispose',
                value: function () {
                  this.isDisposed || (this.action(), (this.isDisposed = !0));
                }
              }
            ],
            [
              {
                key: 'isDisposable',
                value: function (e) {
                  return Boolean(e && Je(e.dispose));
                }
              },
              {
                key: '_fixup',
                value: function (t) {
                  return e.isDisposable(t) ? t : e.empty;
                }
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(t);
                }
              }
            ]
          ),
          e
        );
      })();
      it(at, 'empty', { dispose: Ze });
      var ut = (function () {
          function e() {
            rt(this, e),
              it(this, 'isDisposed', !1),
              it(this, 'disposables', void 0);
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            this.disposables = r;
          }
          return (
            ot(e, [
              {
                key: 'add',
                value: function (e) {
                  this.isDisposed ? e.dispose() : this.disposables.push(e);
                }
              },
              {
                key: 'remove',
                value: function (e) {
                  var t = !1;
                  if (!this.isDisposed) {
                    var r = this.disposables.indexOf(e);
                    -1 !== r &&
                      ((t = !0), this.disposables.splice(r, 1), e.dispose());
                  }
                  return t;
                }
              },
              {
                key: 'clear',
                value: function () {
                  if (!this.isDisposed) {
                    for (
                      var e = this.disposables.length, t = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = this.disposables[r];
                    this.disposables = [];
                    for (var n = 0; n < e; n++) t[n].dispose();
                  }
                }
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    for (
                      var e = this.disposables.length, t = new Array(e), r = 0;
                      r < e;
                      r++
                    )
                      t[r] = this.disposables[r];
                    this.disposables = [];
                    for (var n = 0; n < e; n++) t[n].dispose();
                  }
                }
              }
            ]),
            e
          );
        })(),
        st = (function () {
          function e() {
            rt(this, e),
              it(this, 'isDisposed', !1),
              it(this, 'current', void 0);
          }
          return (
            ot(e, [
              {
                key: 'getDisposable',
                value: function () {
                  return this.current;
                }
              },
              {
                key: 'setDisposable',
                value: function (e) {
                  var t = this.isDisposed;
                  if (!t) {
                    var r = this.current;
                    (this.current = e), r && r.dispose();
                  }
                  t && e && e.dispose();
                }
              },
              {
                key: 'dispose',
                value: function () {
                  if (!this.isDisposed) {
                    this.isDisposed = !0;
                    var e = this.current;
                    (this.current = void 0), e && e.dispose();
                  }
                }
              }
            ]),
            e
          );
        })(),
        ct = r(80219),
        lt = r.n(ct);
      function dt(e) {
        return (
          (dt =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          dt(e)
        );
      }
      function ft(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return pt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return pt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function gt(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ht(e, t) {
        return (
          (ht =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ht(e, t)
        );
      }
      function vt(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = bt(e);
          if (t) {
            var o = bt(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' === dt(t) || 'function' === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return yt(e);
          })(this, r);
        };
      }
      function yt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function bt(e) {
        return (
          (bt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          bt(e)
        );
      }
      function mt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function Ot(e) {
        var t = e.DecoratedComponent,
          r = e.createHandler,
          u = e.createMonitor,
          s = e.createConnector,
          c = e.registerHandler,
          l = e.containerDisplayName,
          d = e.getType,
          f = e.collect,
          p = e.options.arePropsEqual,
          g = void 0 === p ? He : p,
          h = t,
          v = t.displayName || t.name || 'Component',
          y = (function (e) {
            !(function (e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 }
              })),
                t && ht(e, t);
            })(b, e);
            var t,
              l,
              p,
              y = vt(b);
            function b(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, b),
                mt(
                  yt((t = y.call(this, e))),
                  'decoratedRef',
                  (0, n.createRef)()
                ),
                mt(yt(t), 'handlerId', void 0),
                mt(yt(t), 'manager', void 0),
                mt(yt(t), 'handlerMonitor', void 0),
                mt(yt(t), 'handlerConnector', void 0),
                mt(yt(t), 'handler', void 0),
                mt(yt(t), 'disposable', void 0),
                mt(yt(t), 'currentType', void 0),
                mt(yt(t), 'handleChange', function () {
                  var e = t.getCurrentState();
                  He(e, t.state) || t.setState(e);
                }),
                (t.disposable = new st()),
                t.receiveProps(e),
                t.dispose(),
                t
              );
            }
            return (
              (t = b),
              (l = [
                {
                  key: 'getHandlerId',
                  value: function () {
                    return this.handlerId;
                  }
                },
                {
                  key: 'getDecoratedComponentInstance',
                  value: function () {
                    return (
                      a(
                        this.decoratedRef.current,
                        'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'
                      ),
                      this.decoratedRef.current
                    );
                  }
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !g(e, this.props) || !He(t, this.state);
                  }
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.disposable = new st()),
                      (this.currentType = void 0),
                      this.receiveProps(this.props),
                      this.handleChange();
                  }
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    g(this.props, e) ||
                      (this.receiveProps(this.props), this.handleChange());
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.dispose();
                  }
                },
                {
                  key: 'receiveProps',
                  value: function (e) {
                    this.handler &&
                      (this.handler.receiveProps(e), this.receiveType(d(e)));
                  }
                },
                {
                  key: 'receiveType',
                  value: function (e) {
                    if (
                      this.handlerMonitor &&
                      this.manager &&
                      this.handlerConnector &&
                      e !== this.currentType
                    ) {
                      this.currentType = e;
                      var t = ft(c(e, this.handler, this.manager), 2),
                        r = t[0],
                        n = t[1];
                      (this.handlerId = r),
                        this.handlerMonitor.receiveHandlerId(r),
                        this.handlerConnector.receiveHandlerId(r);
                      var o = this.manager
                        .getMonitor()
                        .subscribeToStateChange(this.handleChange, {
                          handlerIds: [r]
                        });
                      this.disposable.setDisposable(
                        new ut(new at(o), new at(n))
                      );
                    }
                  }
                },
                {
                  key: 'dispose',
                  value: function () {
                    this.disposable.dispose(),
                      this.handlerConnector &&
                        this.handlerConnector.receiveHandlerId(null);
                  }
                },
                {
                  key: 'getCurrentState',
                  value: function () {
                    return this.handlerConnector
                      ? f(
                          this.handlerConnector.hooks,
                          this.handlerMonitor,
                          this.props
                        )
                      : {};
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this;
                    return (0, i.jsx)(
                      o.Consumer,
                      {
                        children: function (t) {
                          var r = t.dragDropManager;
                          return (
                            e.receiveDragDropManager(r),
                            'undefined' !== typeof requestAnimationFrame &&
                              requestAnimationFrame(function () {
                                var t;
                                return null === (t = e.handlerConnector) ||
                                  void 0 === t
                                  ? void 0
                                  : t.reconnect();
                              }),
                            (0, i.jsx)(
                              h,
                              Object.assign({}, e.props, e.getCurrentState(), {
                                ref: Qe(h) ? e.decoratedRef : null
                              }),
                              void 0
                            )
                          );
                        }
                      },
                      void 0
                    );
                  }
                },
                {
                  key: 'receiveDragDropManager',
                  value: function (e) {
                    void 0 === this.manager &&
                      (a(
                        void 0 !== e,
                        'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                        v,
                        v
                      ),
                      void 0 !== e &&
                        ((this.manager = e),
                        (this.handlerMonitor = u(e)),
                        (this.handlerConnector = s(e.getBackend())),
                        (this.handler = r(
                          this.handlerMonitor,
                          this.decoratedRef
                        ))));
                  }
                }
              ]) && gt(t.prototype, l),
              p && gt(t, p),
              b
            );
          })(n.Component);
        return (
          mt(y, 'DecoratedComponent', t),
          mt(y, 'displayName', ''.concat(l, '(').concat(v, ')')),
          lt()(y, t)
        );
      }
      function St(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Dt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var wt = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'],
        Tt = ['beginDrag'],
        It = (function () {
          function e(t, r, n) {
            var o = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              Dt(this, 'props', null),
              Dt(this, 'spec', void 0),
              Dt(this, 'monitor', void 0),
              Dt(this, 'ref', void 0),
              Dt(this, 'beginDrag', function () {
                if (o.props)
                  return o.spec.beginDrag(o.props, o.monitor, o.ref.current);
              }),
              (this.spec = t),
              (this.monitor = r),
              (this.ref = n);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                }
              },
              {
                key: 'canDrag',
                value: function () {
                  return (
                    !!this.props &&
                    (!this.spec.canDrag ||
                      this.spec.canDrag(this.props, this.monitor))
                  );
                }
              },
              {
                key: 'isDragging',
                value: function (e, t) {
                  return (
                    !!this.props &&
                    (this.spec.isDragging
                      ? this.spec.isDragging(this.props, this.monitor)
                      : t === e.getSourceId())
                  );
                }
              },
              {
                key: 'endDrag',
                value: function () {
                  this.props &&
                    this.spec.endDrag &&
                    this.spec.endDrag(this.props, this.monitor, Xe(this.ref));
                }
              }
            ]) && St(t.prototype, r),
            n && St(t, n),
            e
          );
        })();
      function Et(e, t, r) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = e;
        'function' !== typeof e &&
          (a(
            tt(e),
            'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            e
          ),
          (o = function () {
            return e;
          })),
          a(
            et(t),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            t
          );
        var i = (function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              a(
                wt.indexOf(t) > -1,
                'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                wt.join(', '),
                t
              ),
                a(
                  'function' === typeof e[t],
                  'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                  t,
                  t,
                  e[t]
                );
            }),
            Tt.forEach(function (t) {
              a(
                'function' === typeof e[t],
                'Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
                t,
                t,
                e[t]
              );
            }),
            function (t, r) {
              return new It(e, t, r);
            }
          );
        })(t);
        return (
          a(
            'function' === typeof r,
            'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r
          ),
          a(
            et(n),
            'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            r
          ),
          function (e) {
            return Ot({
              containerDisplayName: 'DragSource',
              createHandler: i,
              registerHandler: _e,
              createConnector: function (e) {
                return new Ke(e);
              },
              createMonitor: function (e) {
                return new Ge(e);
              },
              DecoratedComponent: e,
              getType: o,
              collect: r,
              options: n
            });
          }
        );
      }
      function Ct(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function kt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var Pt = !1,
        jt = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              kt(this, 'internalMonitor', void 0),
              kt(this, 'targetId', null),
              (this.internalMonitor = t.getMonitor());
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveHandlerId',
                value: function (e) {
                  this.targetId = e;
                }
              },
              {
                key: 'getHandlerId',
                value: function () {
                  return this.targetId;
                }
              },
              {
                key: 'subscribeToStateChange',
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                }
              },
              {
                key: 'canDrop',
                value: function () {
                  if (!this.targetId) return !1;
                  a(
                    !Pt,
                    'You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor'
                  );
                  try {
                    return (
                      (Pt = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    Pt = !1;
                  }
                }
              },
              {
                key: 'isOver',
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                }
              },
              {
                key: 'getItemType',
                value: function () {
                  return this.internalMonitor.getItemType();
                }
              },
              {
                key: 'getItem',
                value: function () {
                  return this.internalMonitor.getItem();
                }
              },
              {
                key: 'getDropResult',
                value: function () {
                  return this.internalMonitor.getDropResult();
                }
              },
              {
                key: 'didDrop',
                value: function () {
                  return this.internalMonitor.didDrop();
                }
              },
              {
                key: 'getInitialClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                }
              },
              {
                key: 'getInitialSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                }
              },
              {
                key: 'getSourceClientOffset',
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                }
              },
              {
                key: 'getClientOffset',
                value: function () {
                  return this.internalMonitor.getClientOffset();
                }
              },
              {
                key: 'getDifferenceFromInitialOffset',
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                }
              }
            ]) && Ct(t.prototype, r),
            n && Ct(t, n),
            e
          );
        })();
      function At(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Rt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var xt = (function () {
        function e(t) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            Rt(
              this,
              'hooks',
              Me({
                dropTarget: function (e, t) {
                  r.clearDropTarget(),
                    (r.dropTargetOptions = t),
                    Ue(e) ? (r.dropTargetRef = e) : (r.dropTargetNode = e),
                    r.reconnect();
                }
              })
            ),
            Rt(this, 'handlerId', null),
            Rt(this, 'dropTargetRef', null),
            Rt(this, 'dropTargetNode', void 0),
            Rt(this, 'dropTargetOptionsInternal', null),
            Rt(this, 'unsubscribeDropTarget', void 0),
            Rt(this, 'lastConnectedHandlerId', null),
            Rt(this, 'lastConnectedDropTarget', null),
            Rt(this, 'lastConnectedDropTargetOptions', null),
            Rt(this, 'backend', void 0),
            (this.backend = t);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'connectTarget',
              get: function () {
                return this.dropTarget;
              }
            },
            {
              key: 'reconnect',
              value: function () {
                var e =
                  this.didHandlerIdChange() ||
                  this.didDropTargetChange() ||
                  this.didOptionsChange();
                e && this.disconnectDropTarget();
                var t = this.dropTarget;
                this.handlerId &&
                  (t
                    ? e &&
                      ((this.lastConnectedHandlerId = this.handlerId),
                      (this.lastConnectedDropTarget = t),
                      (this.lastConnectedDropTargetOptions =
                        this.dropTargetOptions),
                      (this.unsubscribeDropTarget =
                        this.backend.connectDropTarget(
                          this.handlerId,
                          t,
                          this.dropTargetOptions
                        )))
                    : (this.lastConnectedDropTarget = t));
              }
            },
            {
              key: 'receiveHandlerId',
              value: function (e) {
                e !== this.handlerId &&
                  ((this.handlerId = e), this.reconnect());
              }
            },
            {
              key: 'dropTargetOptions',
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              }
            },
            {
              key: 'didHandlerIdChange',
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              }
            },
            {
              key: 'didDropTargetChange',
              value: function () {
                return this.lastConnectedDropTarget !== this.dropTarget;
              }
            },
            {
              key: 'didOptionsChange',
              value: function () {
                return !He(
                  this.lastConnectedDropTargetOptions,
                  this.dropTargetOptions
                );
              }
            },
            {
              key: 'disconnectDropTarget',
              value: function () {
                this.unsubscribeDropTarget &&
                  (this.unsubscribeDropTarget(),
                  (this.unsubscribeDropTarget = void 0));
              }
            },
            {
              key: 'dropTarget',
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              }
            },
            {
              key: 'clearDropTarget',
              value: function () {
                (this.dropTargetRef = null), (this.dropTargetNode = null);
              }
            }
          ]) && At(t.prototype, r),
          n && At(t, n),
          e
        );
      })();
      function _t(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Nt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var Mt = ['canDrop', 'hover', 'drop'],
        Lt = (function () {
          function e(t, r, n) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              Nt(this, 'props', null),
              Nt(this, 'spec', void 0),
              Nt(this, 'monitor', void 0),
              Nt(this, 'ref', void 0),
              (this.spec = t),
              (this.monitor = r),
              (this.ref = n);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'receiveProps',
                value: function (e) {
                  this.props = e;
                }
              },
              {
                key: 'receiveMonitor',
                value: function (e) {
                  this.monitor = e;
                }
              },
              {
                key: 'canDrop',
                value: function () {
                  return (
                    !this.spec.canDrop ||
                    this.spec.canDrop(this.props, this.monitor)
                  );
                }
              },
              {
                key: 'hover',
                value: function () {
                  this.spec.hover &&
                    this.props &&
                    this.spec.hover(this.props, this.monitor, Xe(this.ref));
                }
              },
              {
                key: 'drop',
                value: function () {
                  if (this.spec.drop)
                    return this.spec.drop(
                      this.props,
                      this.monitor,
                      this.ref.current
                    );
                }
              }
            ]) && _t(t.prototype, r),
            n && _t(t, n),
            e
          );
        })();
      function Ft(e, t, r) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = e;
        'function' !== typeof e &&
          (a(
            tt(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e
          ),
          (o = function () {
            return e;
          })),
          a(
            et(t),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            t
          );
        var i = (function (e) {
          return (
            Object.keys(e).forEach(function (t) {
              a(
                Mt.indexOf(t) > -1,
                'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                Mt.join(', '),
                t
              ),
                a(
                  'function' === typeof e[t],
                  'Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
                  t,
                  t,
                  e[t]
                );
            }),
            function (t, r) {
              return new Lt(e, t, r);
            }
          );
        })(t);
        return (
          a(
            'function' === typeof r,
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r
          ),
          a(
            et(n),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            r
          ),
          function (e) {
            return Ot({
              containerDisplayName: 'DropTarget',
              createHandler: i,
              registerHandler: xe,
              createMonitor: function (e) {
                return new jt(e);
              },
              createConnector: function (e) {
                return new xt(e);
              },
              DecoratedComponent: e,
              getType: o,
              collect: r,
              options: n
            });
          }
        );
      }
      function Ut(e) {
        return (
          (Ut =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Ut(e)
        );
      }
      function Ht(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Bt(e, t) {
        return (
          (Bt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          Bt(e, t)
        );
      }
      function qt(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = zt(e);
          if (t) {
            var o = zt(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' === Ut(t) || 'function' === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return Kt(e);
          })(this, r);
        };
      }
      function Kt(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function zt(e) {
        return (
          (zt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          zt(e)
        );
      }
      function Wt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function Vt(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          a(
            'function' === typeof e,
            'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
            'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            e
          ),
          a(
            et(t),
            'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            t
          ),
          function (r) {
            var u = r,
              s = t.arePropsEqual,
              c = void 0 === s ? He : s,
              l = u.displayName || u.name || 'Component',
              d = (function (t) {
                !(function (e, t) {
                  if ('function' !== typeof t && null !== t)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && Bt(e, t);
                })(p, t);
                var r,
                  s,
                  d,
                  f = qt(p);
                function p() {
                  var e;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, p);
                  for (
                    var t = arguments.length, r = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    Wt(
                      Kt((e = f.call.apply(f, [this].concat(r)))),
                      'manager',
                      void 0
                    ),
                    Wt(Kt(e), 'isCurrentlyMounted', !1),
                    Wt(Kt(e), 'unsubscribeFromOffsetChange', void 0),
                    Wt(Kt(e), 'unsubscribeFromStateChange', void 0),
                    Wt(Kt(e), 'ref', (0, n.createRef)()),
                    Wt(Kt(e), 'handleChange', function () {
                      if (e.isCurrentlyMounted) {
                        var t = e.getCurrentState();
                        He(t, e.state) || e.setState(t);
                      }
                    }),
                    e
                  );
                }
                return (
                  (r = p),
                  (s = [
                    {
                      key: 'getDecoratedComponentInstance',
                      value: function () {
                        return (
                          a(
                            this.ref.current,
                            'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()'
                          ),
                          this.ref.current
                        );
                      }
                    },
                    {
                      key: 'shouldComponentUpdate',
                      value: function (e, t) {
                        return !c(e, this.props) || !He(t, this.state);
                      }
                    },
                    {
                      key: 'componentDidMount',
                      value: function () {
                        (this.isCurrentlyMounted = !0), this.handleChange();
                      }
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        (this.isCurrentlyMounted = !1),
                          this.unsubscribeFromOffsetChange &&
                            (this.unsubscribeFromOffsetChange(),
                            (this.unsubscribeFromOffsetChange = void 0)),
                          this.unsubscribeFromStateChange &&
                            (this.unsubscribeFromStateChange(),
                            (this.unsubscribeFromStateChange = void 0));
                      }
                    },
                    {
                      key: 'render',
                      value: function () {
                        var e = this;
                        return (0, i.jsx)(
                          o.Consumer,
                          {
                            children: function (t) {
                              var r = t.dragDropManager;
                              return void 0 === r
                                ? null
                                : (e.receiveDragDropManager(r),
                                  e.isCurrentlyMounted
                                    ? (0, i.jsx)(
                                        u,
                                        Object.assign({}, e.props, e.state, {
                                          ref: Qe(u) ? e.ref : null
                                        }),
                                        void 0
                                      )
                                    : null);
                            }
                          },
                          void 0
                        );
                      }
                    },
                    {
                      key: 'receiveDragDropManager',
                      value: function (e) {
                        if (void 0 === this.manager) {
                          (this.manager = e),
                            a(
                              'object' === Ut(e),
                              'Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context',
                              l,
                              l
                            );
                          var t = this.manager.getMonitor();
                          (this.unsubscribeFromOffsetChange =
                            t.subscribeToOffsetChange(this.handleChange)),
                            (this.unsubscribeFromStateChange =
                              t.subscribeToStateChange(this.handleChange));
                        }
                      }
                    },
                    {
                      key: 'getCurrentState',
                      value: function () {
                        if (!this.manager) return {};
                        var t = this.manager.getMonitor();
                        return e(t, this.props);
                      }
                    }
                  ]) && Ht(r.prototype, s),
                  d && Ht(r, d),
                  p
                );
              })(n.Component);
            return (
              Wt(d, 'displayName', 'DragLayer('.concat(l, ')')),
              Wt(d, 'DecoratedComponent', r),
              lt()(d, r)
            );
          }
        );
      }
      var Yt = 'undefined' !== typeof window ? n.useLayoutEffect : n.useEffect;
      function Gt(e) {
        return (
          (Gt =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          Gt(e)
        );
      }
      function $t(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function Xt(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var Qt = (function () {
        function e(t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            Xt(this, 'spec', void 0),
            Xt(this, 'monitor', void 0),
            Xt(this, 'connector', void 0),
            (this.spec = t),
            (this.monitor = r),
            (this.connector = n);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'beginDrag',
              value: function () {
                var e,
                  t = this.spec,
                  r = this.monitor;
                return null !==
                  (e =
                    'object' === Gt(t.item)
                      ? t.item
                      : 'function' === typeof t.item
                      ? t.item(r)
                      : {}) && void 0 !== e
                  ? e
                  : null;
              }
            },
            {
              key: 'canDrag',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return 'boolean' === typeof e.canDrag
                  ? e.canDrag
                  : 'function' !== typeof e.canDrag || e.canDrag(t);
              }
            },
            {
              key: 'isDragging',
              value: function (e, t) {
                var r = this.spec,
                  n = this.monitor,
                  o = r.isDragging;
                return o ? o(n) : t === e.getSourceId();
              }
            },
            {
              key: 'endDrag',
              value: function () {
                var e = this.spec,
                  t = this.monitor,
                  r = this.connector,
                  n = e.end;
                n && n(t.getItem(), t), r.reconnect();
              }
            }
          ]) && $t(t.prototype, r),
          n && $t(t, n),
          e
        );
      })();
      function Jt() {
        var e = (0, n.useContext)(o).dragDropManager;
        return a(null != e, 'Expected drag drop context'), e;
      }
      function Zt(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return er(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return er(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function er(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function tr(e, t, r) {
        var o = Jt(),
          i = (function (e, t, r) {
            var o = (0, n.useMemo)(
              function () {
                return new Qt(e, t, r);
              },
              [t, r]
            );
            return (
              (0, n.useEffect)(
                function () {
                  o.spec = e;
                },
                [e]
              ),
              o
            );
          })(e, t, r),
          u = (function (e) {
            return (0, n.useMemo)(
              function () {
                var t = e.type;
                return a(null != t, 'spec.type must be defined'), t;
              },
              [e]
            );
          })(e);
        Yt(
          function () {
            if (null != u) {
              var e = Zt(_e(u, i, o), 2),
                n = e[0],
                a = e[1];
              return t.receiveHandlerId(n), r.receiveHandlerId(n), a;
            }
          },
          [o, t, r, i, u]
        );
      }
      function rr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return nr(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return nr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return nr(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function nr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function or(e, t) {
        var r = rr(t || []);
        return (
          null == t && 'function' !== typeof e && r.push(e),
          (0, n.useMemo)(function () {
            return 'function' === typeof e ? e() : e;
          }, r)
        );
      }
      var ir = r(122),
        ar = r.n(ir);
      function ur(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return sr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return sr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function sr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function cr(e, t, r) {
        var o = ur(
            (0, n.useState)(function () {
              return t(e);
            }),
            2
          ),
          i = o[0],
          a = o[1],
          u = (0, n.useCallback)(
            function () {
              var n = t(e);
              ar()(i, n) || (a(n), r && r());
            },
            [i, e, r]
          );
        return Yt(u), [i, u];
      }
      function lr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return dr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return dr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function dr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function fr(e, t, r) {
        return (function (e, t, r) {
          var n = lr(cr(e, t, r), 2),
            o = n[0],
            i = n[1];
          return (
            Yt(
              function () {
                var t = e.getHandlerId();
                if (null != t)
                  return e.subscribeToStateChange(i, { handlerIds: [t] });
              },
              [e, i]
            ),
            o
          );
        })(
          t,
          e ||
            function () {
              return {};
            },
          function () {
            return r.reconnect();
          }
        );
      }
      function pr(e) {
        return (0, n.useMemo)(
          function () {
            return e.hooks.dragSource();
          },
          [e]
        );
      }
      function gr(e) {
        return (0, n.useMemo)(
          function () {
            return e.hooks.dragPreview();
          },
          [e]
        );
      }
      function hr(e, t) {
        var r = or(e, t);
        a(
          !r.begin,
          'useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)'
        );
        var o = (function () {
            var e = Jt();
            return (0, n.useMemo)(
              function () {
                return new Ge(e);
              },
              [e]
            );
          })(),
          i = (function (e, t) {
            var r = Jt(),
              o = (0, n.useMemo)(
                function () {
                  return new Ke(r.getBackend());
                },
                [r]
              );
            return (
              Yt(
                function () {
                  return (
                    (o.dragSourceOptions = e || null),
                    o.reconnect(),
                    function () {
                      return o.disconnectDragSource();
                    }
                  );
                },
                [o, e]
              ),
              Yt(
                function () {
                  return (
                    (o.dragPreviewOptions = t || null),
                    o.reconnect(),
                    function () {
                      return o.disconnectDragPreview();
                    }
                  );
                },
                [o, t]
              ),
              o
            );
          })(r.options, r.previewOptions);
        return tr(r, o, i), [fr(r.collect, o, i), pr(i), gr(i)];
      }
      function vr(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function yr(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      var br = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, e),
            yr(this, 'spec', void 0),
            yr(this, 'monitor', void 0),
            (this.spec = t),
            (this.monitor = r);
        }
        var t, r, n;
        return (
          (t = e),
          (r = [
            {
              key: 'canDrop',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              }
            },
            {
              key: 'hover',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              }
            },
            {
              key: 'drop',
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              }
            }
          ]) && vr(t.prototype, r),
          n && vr(t, n),
          e
        );
      })();
      function mr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return Or(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Or(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Or(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Sr(e, t, r) {
        var o = Jt(),
          i = (function (e, t) {
            var r = (0, n.useMemo)(
              function () {
                return new br(e, t);
              },
              [t]
            );
            return (
              (0, n.useEffect)(
                function () {
                  r.spec = e;
                },
                [e]
              ),
              r
            );
          })(e, t),
          u = (function (e) {
            var t = e.accept;
            return (0, n.useMemo)(
              function () {
                return (
                  a(null != e.accept, 'accept must be defined'),
                  Array.isArray(t) ? t : [t]
                );
              },
              [t]
            );
          })(e);
        Yt(
          function () {
            var e = mr(xe(u, i, o), 2),
              n = e[0],
              a = e[1];
            return t.receiveHandlerId(n), r.receiveHandlerId(n), a;
          },
          [
            o,
            t,
            i,
            r,
            u
              .map(function (e) {
                return e.toString();
              })
              .join('|')
          ]
        );
      }
      function Dr(e) {
        return (0, n.useMemo)(
          function () {
            return e.hooks.dropTarget();
          },
          [e]
        );
      }
      function wr(e, t) {
        var r = or(e, t),
          o = (function () {
            var e = Jt();
            return (0, n.useMemo)(
              function () {
                return new jt(e);
              },
              [e]
            );
          })(),
          i = (function (e) {
            var t = Jt(),
              r = (0, n.useMemo)(
                function () {
                  return new xt(t.getBackend());
                },
                [t]
              );
            return (
              Yt(
                function () {
                  return (
                    (r.dropTargetOptions = e || null),
                    r.reconnect(),
                    function () {
                      return r.disconnectDropTarget();
                    }
                  );
                },
                [e]
              ),
              r
            );
          })(r.options);
        return Sr(r, o, i), [fr(r.collect, o, i), Dr(i)];
      }
      function Tr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null == r) return;
            var n,
              o,
              i = [],
              a = !0,
              u = !1;
            try {
              for (
                r = r.call(e);
                !(a = (n = r.next()).done) &&
                (i.push(n.value), !t || i.length !== t);
                a = !0
              );
            } catch (s) {
              (u = !0), (o = s);
            } finally {
              try {
                a || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            }
            return i;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return Ir(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Ir(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Ir(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Er(e) {
        var t = Jt().getMonitor(),
          r = Tr(cr(t, e), 2),
          o = r[0],
          i = r[1];
        return (
          (0, n.useEffect)(function () {
            return t.subscribeToOffsetChange(i);
          }),
          (0, n.useEffect)(function () {
            return t.subscribeToStateChange(i);
          }),
          o
        );
      }
    },
    74268: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n = i(r(65043)),
        o = i(r(65173));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = function (e) {
        return n.default.createElement(
          'button',
          { className: e.classNames.clearAll, onClick: e.onClick },
          'Clear all'
        );
      };
      a.propTypes = { classNames: o.default.object, onClick: o.default.func };
      t.default = a;
    },
    73815: (e, t, r) => {
      'use strict';
      t.ID = void 0;
      var n = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != m(e) && 'function' != typeof e))
            return { default: e };
          var r = y(t);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        })(r(65043)),
        o = r(79692),
        i = r(6308),
        a = v(r(19853)),
        u = v(r(75713)),
        s = v(r(9376)),
        c = v(r(74268)),
        l = v(r(75484)),
        d = v(r(65173)),
        f = v(r(15379)),
        p = v(r(45965)),
        g = r(54388),
        h = r(62464);
      function v(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function y(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (y = function (e) {
          return e ? r : t;
        })(e);
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function m(e) {
        return (
          (m =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          m(e)
        );
      }
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          O.apply(this, arguments)
        );
      }
      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                k(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function w(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, P(n.key), n);
        }
      }
      function T(e, t) {
        return (
          (T = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          T(e, t)
        );
      }
      function I(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = C(e);
          if (t) {
            var o = C(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' === m(t) || 'function' === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return E(e);
          })(this, r);
        };
      }
      function E(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function C(e) {
        return (
          (C = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          C(e)
        );
      }
      function k(e, t, r) {
        return (
          (t = P(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function P(e) {
        var t = (function (e, t) {
          if ('object' !== m(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' !== m(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === m(t) ? t : String(t);
      }
      var j,
        A = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && T(e, t);
          })(u, e);
          var t,
            r,
            o,
            i = I(u);
          function u(e) {
            var t;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, u),
              k(E((t = i.call(this, e))), 'filteredSuggestions', function (e) {
                var r = t.props.suggestions;
                if (t.props.allowUnique) {
                  var n = t.props.tags.map(function (e) {
                    return e.id.trim().toLowerCase();
                  });
                  r = r.filter(function (e) {
                    return !n.includes(e.id.toLowerCase());
                  });
                }
                if (t.props.handleFilterSuggestions)
                  return t.props.handleFilterSuggestions(e, r);
                var o = r.filter(function (r) {
                    return 0 === t.getQueryIndex(e, r);
                  }),
                  i = r.filter(function (r) {
                    return t.getQueryIndex(e, r) > 0;
                  });
                return o.concat(i);
              }),
              k(E(t), 'getQueryIndex', function (e, r) {
                return r[t.props.labelField]
                  .toLowerCase()
                  .indexOf(e.toLowerCase());
              }),
              k(E(t), 'resetAndFocusInput', function () {
                t.setState({ query: '' }),
                  t.textInput &&
                    ((t.textInput.value = ''), t.textInput.focus());
              }),
              k(E(t), 'updateSuggestions', function () {
                var e = t.state,
                  r = e.query,
                  n = e.selectedIndex,
                  o = t.filteredSuggestions(r);
                t.setState({
                  suggestions: o,
                  selectedIndex: n >= o.length ? o.length - 1 : n
                });
              }),
              k(E(t), 'addTag', function (e) {
                var r = t.props,
                  n = r.tags,
                  o = r.labelField,
                  i = r.allowUnique,
                  a = t.state.currentEditIndex;
                if (e.id && e[o]) {
                  if (-1 === a) {
                    if (t.tagLimitReached())
                      return (
                        t.setState({ error: h.ERRORS.TAG_LIMIT }),
                        void t.resetAndFocusInput()
                      );
                    t.setState({ error: '' });
                  }
                  var u = n.map(function (e) {
                    return e.id.toLowerCase();
                  });
                  if (!(i && u.indexOf(e.id.trim().toLowerCase()) >= 0)) {
                    if (t.props.autocomplete) {
                      var s = t.filteredSuggestions(e[o]);
                      ((1 === t.props.autocomplete && 1 === s.length) ||
                        (!0 === t.props.autocomplete && s.length)) &&
                        (e = s[0]);
                    }
                    -1 !== a && t.props.onTagUpdate
                      ? t.props.onTagUpdate(a, e)
                      : t.props.handleAddition(e),
                      t.setState({
                        query: '',
                        selectionMode: !1,
                        selectedIndex: -1,
                        currentEditIndex: -1
                      }),
                      t.resetAndFocusInput();
                  }
                }
              }),
              k(E(t), 'clearAll', function () {
                t.props.onClearAll && t.props.onClearAll(),
                  t.setState({ error: '' });
              }),
              k(E(t), 'getTagItems', function () {
                var e = t.props,
                  r = e.tags,
                  o = e.labelField,
                  i = e.removeComponent,
                  a = e.readOnly,
                  u = e.allowDragDrop,
                  s = D(D({}, h.DEFAULT_CLASSNAMES), t.props.classNames),
                  c = t.state,
                  l = c.currentEditIndex,
                  d = c.query,
                  f = u ? t.moveTag : null;
                return r.map(function (e, r) {
                  return n.default.createElement(
                    n.default.Fragment,
                    { key: r },
                    l === r
                      ? n.default.createElement(
                          'div',
                          { className: s.editTagInput },
                          n.default.createElement('input', {
                            ref: function (e) {
                              t.tagInput = e;
                            },
                            onFocus: t.handleFocus,
                            value: d,
                            onChange: t.handleChange,
                            onKeyDown: t.handleKeyDown,
                            onBlur: t.handleBlur,
                            className: s.editTagInputField,
                            onPaste: t.handlePaste,
                            'data-testid': 'tag-edit'
                          })
                        )
                      : n.default.createElement(p.default, {
                          index: r,
                          tag: e,
                          labelField: o,
                          onDelete: t.handleDelete.bind(E(t), r),
                          moveTag: f,
                          removeComponent: i,
                          onTagClicked: t.handleTagClick.bind(E(t), r, e),
                          readOnly: a,
                          classNames: s,
                          allowDragDrop: u
                        })
                  );
                });
              }),
              e.inline ||
                console.warn(
                  '[Deprecation] The inline attribute is deprecated and will be removed in v7.x.x, please use inputFieldPosition instead.'
                );
            var r = e.suggestions;
            return (
              (t.state = {
                suggestions: r,
                query: '',
                isFocused: !1,
                selectedIndex: -1,
                selectionMode: !1,
                ariaLiveStatus: '',
                currentEditIndex: -1,
                error: ''
              }),
              (t.reactTagsRef = (0, n.createRef)()),
              (t.handleFocus = t.handleFocus.bind(E(t))),
              (t.handleBlur = t.handleBlur.bind(E(t))),
              (t.handleKeyDown = t.handleKeyDown.bind(E(t))),
              (t.handleChange = t.handleChange.bind(E(t))),
              (t.moveTag = t.moveTag.bind(E(t))),
              (t.handlePaste = t.handlePaste.bind(E(t))),
              (t.handleSuggestionHover = t.handleSuggestionHover.bind(E(t))),
              (t.handleSuggestionClick = t.handleSuggestionClick.bind(E(t))),
              t
            );
          }
          return (
            (t = u),
            (r = [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    r = e.readOnly;
                  t && !r && this.resetAndFocusInput();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  (0, a.default)(e.suggestions, this.props.suggestions) ||
                    this.updateSuggestions();
                }
              },
              {
                key: 'handleDelete',
                value: function (e, t) {
                  t.preventDefault(), t.stopPropagation();
                  var r = this.props.tags.slice();
                  if (0 !== r.length) {
                    this.setState({ error: '' });
                    var n = 'Tag at index '
                      .concat(e, ' with value ')
                      .concat(r[e].id, ' deleted.');
                    this.props.handleDelete(e, t);
                    var o,
                      i,
                      a,
                      u =
                        this.reactTagsRef.current.querySelectorAll(
                          '.ReactTags__remove'
                        );
                    0 === e && r.length > 1
                      ? ((o = u[0]), (i = 0), (a = r[1]))
                      : ((o = u[e - 1]), (a = r[(i = e - 1)])),
                      o || ((i = -1), (o = this.textInput)),
                      (n +=
                        i >= 0
                          ? ' Tag at index '
                              .concat(i, ' with value ')
                              .concat(
                                a.id,
                                ' focussed. Press backspace to remove'
                              )
                          : 'Input focussed. Press enter to add a new tag'),
                      o.focus(),
                      this.setState({ ariaLiveStatus: n });
                  }
                }
              },
              {
                key: 'handleTagClick',
                value: function (e, t, r) {
                  var n = this,
                    o = this.props,
                    i = o.editable,
                    a = o.handleTagClick,
                    u = o.labelField;
                  i &&
                    this.setState(
                      { currentEditIndex: e, query: t[u] },
                      function () {
                        n.tagInput.focus();
                      }
                    ),
                    a && a(e, r);
                }
              },
              {
                key: 'handleChange',
                value: function (e) {
                  this.props.handleInputChange &&
                    this.props.handleInputChange(e.target.value, e);
                  var t = e.target.value.trim();
                  this.setState({ query: t }, this.updateSuggestions);
                }
              },
              {
                key: 'handleFocus',
                value: function (e) {
                  var t = e.target.value;
                  this.props.handleInputFocus &&
                    this.props.handleInputFocus(t, e),
                    this.setState({ isFocused: !0 });
                }
              },
              {
                key: 'handleBlur',
                value: function (e) {
                  var t = e.target.value;
                  this.props.handleInputBlur &&
                    (this.props.handleInputBlur(t, e),
                    this.textInput && (this.textInput.value = '')),
                    this.setState({ isFocused: !1, currentEditIndex: -1 });
                }
              },
              {
                key: 'handleKeyDown',
                value: function (e) {
                  var t = this.state,
                    r = t.query,
                    n = t.selectedIndex,
                    o = t.suggestions,
                    i = t.selectionMode;
                  if (
                    (e.keyCode === h.KEYS.ESCAPE &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      this.setState({
                        selectedIndex: -1,
                        selectionMode: !1,
                        suggestions: [],
                        currentEditIndex: -1
                      })),
                    -1 !== this.props.delimiters.indexOf(e.keyCode) &&
                      !e.shiftKey)
                  ) {
                    (e.keyCode === h.KEYS.TAB && '' === r) ||
                      e.preventDefault();
                    var a =
                      i && -1 !== n
                        ? o[n]
                        : k({ id: r.trim() }, this.props.labelField, r.trim());
                    Object.keys(a) && this.addTag(a);
                  }
                  e.keyCode === h.KEYS.BACKSPACE &&
                    '' === r &&
                    this.props.allowDeleteFromEmptyInput &&
                    this.handleDelete(this.props.tags.length - 1, e),
                    e.keyCode === h.KEYS.UP_ARROW &&
                      (e.preventDefault(),
                      this.setState({
                        selectedIndex: n <= 0 ? o.length - 1 : n - 1,
                        selectionMode: !0
                      })),
                    e.keyCode === h.KEYS.DOWN_ARROW &&
                      (e.preventDefault(),
                      this.setState({
                        selectedIndex: 0 === o.length ? -1 : (n + 1) % o.length,
                        selectionMode: !0
                      }));
                }
              },
              {
                key: 'tagLimitReached',
                value: function () {
                  var e = this.props,
                    t = e.tags,
                    r = e.maxTags;
                  return r && t.length >= r;
                }
              },
              {
                key: 'handlePaste',
                value: function (e) {
                  var t = this;
                  if (this.props.allowAdditionFromPaste) {
                    if (this.tagLimitReached())
                      return (
                        this.setState({ error: h.ERRORS.TAG_LIMIT }),
                        void this.resetAndFocusInput()
                      );
                    this.setState({ error: '' }), e.preventDefault();
                    var r = e.clipboardData || window.clipboardData,
                      n = r.getData('text'),
                      o = this.props.maxLength,
                      i = void 0 === o ? n.length : o,
                      a = Math.min(i, n.length),
                      u = r.getData('text').substr(0, a),
                      c = (0, g.buildRegExpFromDelimiters)(
                        this.props.delimiters
                      ),
                      l = u.split(c).map(function (e) {
                        return e.trim();
                      });
                    (0, s.default)(l).forEach(function (e) {
                      return t.addTag(
                        k({ id: e.trim() }, t.props.labelField, e.trim())
                      );
                    });
                  }
                }
              },
              {
                key: 'handleSuggestionClick',
                value: function (e) {
                  this.addTag(this.state.suggestions[e]);
                }
              },
              {
                key: 'handleSuggestionHover',
                value: function (e) {
                  this.setState({ selectedIndex: e, selectionMode: !0 });
                }
              },
              {
                key: 'moveTag',
                value: function (e, t) {
                  var r = this.props.tags[e];
                  this.props.handleDrag(r, e, t);
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.getTagItems(),
                    r = D(D({}, h.DEFAULT_CLASSNAMES), this.props.classNames),
                    o = this.state.query.trim(),
                    i = this.state.selectedIndex,
                    a = this.state.suggestions,
                    u = this.state.error,
                    s = this.props,
                    d = s.placeholder,
                    p = s.name,
                    g = s.id,
                    v = s.maxLength,
                    y = s.inline,
                    b = s.inputFieldPosition,
                    m = s.inputValue,
                    S = s.inputProps,
                    w = s.clearAll,
                    T = s.tags,
                    I = y ? b : h.INPUT_FIELD_POSITIONS.BOTTOM,
                    E = this.props.readOnly
                      ? null
                      : n.default.createElement(
                          'div',
                          { className: r.tagInput },
                          n.default.createElement(
                            'input',
                            O({}, S, {
                              ref: function (t) {
                                e.textInput = t;
                              },
                              className: r.tagInputField,
                              type: 'text',
                              placeholder: d,
                              'aria-label': d,
                              onFocus: this.handleFocus,
                              onBlur: this.handleBlur,
                              onChange: this.handleChange,
                              onKeyDown: this.handleKeyDown,
                              onPaste: this.handlePaste,
                              name: p,
                              id: g,
                              maxLength: v,
                              value: m,
                              'data-automation': 'input',
                              'data-testid': 'input'
                            })
                          ),
                          n.default.createElement(l.default, {
                            query: o,
                            suggestions: a,
                            labelField: this.props.labelField,
                            selectedIndex: i,
                            handleClick: this.handleSuggestionClick,
                            handleHover: this.handleSuggestionHover,
                            minQueryLength: this.props.minQueryLength,
                            shouldRenderSuggestions:
                              this.props.shouldRenderSuggestions,
                            isFocused: this.state.isFocused,
                            classNames: r,
                            renderSuggestion: this.props.renderSuggestion
                          }),
                          w &&
                            T.length > 0 &&
                            n.default.createElement(c.default, {
                              classNames: r,
                              onClick: this.clearAll
                            }),
                          u &&
                            n.default.createElement(
                              'div',
                              {
                                'data-testid': 'error',
                                className: 'ReactTags__error'
                              },
                              n.default.createElement(
                                'svg',
                                {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  viewBox: '0 0 512 512',
                                  height: '24',
                                  width: '24',
                                  fill: '#e03131'
                                },
                                n.default.createElement('path', {
                                  d: 'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z'
                                })
                              ),
                              u
                            )
                        );
                  return n.default.createElement(
                    'div',
                    {
                      className: (0, f.default)(r.tags, 'react-tags-wrapper'),
                      ref: this.reactTagsRef
                    },
                    n.default.createElement(
                      'p',
                      {
                        role: 'alert',
                        className: 'sr-only',
                        style: {
                          position: 'absolute',
                          overflow: 'hidden',
                          clip: 'rect(0 0 0 0)',
                          margin: '-1px',
                          padding: 0,
                          width: '1px',
                          height: '1px',
                          border: 0
                        }
                      },
                      this.state.ariaLiveStatus
                    ),
                    I === h.INPUT_FIELD_POSITIONS.TOP && E,
                    n.default.createElement(
                      'div',
                      { className: r.selected },
                      t,
                      I === h.INPUT_FIELD_POSITIONS.INLINE && E
                    ),
                    I === h.INPUT_FIELD_POSITIONS.BOTTOM && E
                  );
                }
              }
            ]) && w(t.prototype, r),
            o && w(t, o),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            u
          );
        })(n.Component);
      k(A, 'propTypes', {
        placeholder: d.default.string,
        labelField: d.default.string,
        suggestions: d.default.arrayOf(
          d.default.shape({ id: d.default.string.isRequired })
        ),
        delimiters: d.default.arrayOf(d.default.number),
        autofocus: d.default.bool,
        inline: d.default.bool,
        inputFieldPosition: d.default.oneOf([
          h.INPUT_FIELD_POSITIONS.INLINE,
          h.INPUT_FIELD_POSITIONS.TOP,
          h.INPUT_FIELD_POSITIONS.BOTTOM
        ]),
        handleDelete: d.default.func,
        handleAddition: d.default.func,
        onTagUpdate: d.default.func,
        handleDrag: d.default.func,
        handleFilterSuggestions: d.default.func,
        handleTagClick: d.default.func,
        allowDeleteFromEmptyInput: d.default.bool,
        allowAdditionFromPaste: d.default.bool,
        allowDragDrop: d.default.bool,
        handleInputChange: d.default.func,
        handleInputFocus: d.default.func,
        handleInputBlur: d.default.func,
        minQueryLength: d.default.number,
        shouldRenderSuggestions: d.default.func,
        removeComponent: d.default.func,
        autocomplete: d.default.oneOfType([d.default.bool, d.default.number]),
        readOnly: d.default.bool,
        classNames: d.default.object,
        name: d.default.string,
        id: d.default.string,
        maxLength: d.default.number,
        inputValue: d.default.string,
        maxTags: d.default.number,
        tags: d.default.arrayOf(
          d.default.shape({
            id: d.default.string.isRequired,
            className: d.default.string
          })
        ),
        allowUnique: d.default.bool,
        renderSuggestion: d.default.func,
        inputProps: d.default.object,
        editable: d.default.bool,
        clearAll: d.default.bool,
        onClearAll: d.default.func
      }),
        k(A, 'defaultProps', {
          placeholder: h.DEFAULT_PLACEHOLDER,
          labelField: h.DEFAULT_LABEL_FIELD,
          suggestions: [],
          delimiters: [].concat(
            ((j = h.KEYS.ENTER),
            (function (e) {
              if (Array.isArray(e)) return b(e);
            })(j) ||
              (function (e) {
                if (
                  ('undefined' !== typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e['@@iterator']
                )
                  return Array.from(e);
              })(j) ||
              (function (e, t) {
                if (e) {
                  if ('string' === typeof e) return b(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === r && e.constructor && (r = e.constructor.name),
                    'Map' === r || 'Set' === r
                      ? Array.from(e)
                      : 'Arguments' === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? b(e, t)
                      : void 0
                  );
                }
              })(j) ||
              (function () {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                );
              })()),
            [h.KEYS.TAB]
          ),
          autofocus: !0,
          inline: !0,
          inputFieldPosition: h.INPUT_FIELD_POSITIONS.INLINE,
          handleDelete: u.default,
          handleAddition: u.default,
          allowDeleteFromEmptyInput: !0,
          allowAdditionFromPaste: !0,
          autocomplete: !1,
          readOnly: !1,
          allowUnique: !0,
          allowDragDrop: !0,
          tags: [],
          inputProps: {},
          onTagUpdate: u.default,
          editable: !1,
          clearAll: !1,
          handleClearAll: u.default
        });
      t.ID = function (e) {
        var t = O(
          {},
          ((function (e) {
            if (null == e) throw new TypeError('Cannot destructure ' + e);
          })(e),
          e)
        );
        return n.default.createElement(
          o.DndProvider,
          { backend: i.HTML5Backend },
          n.default.createElement(A, t)
        );
      };
    },
    18342: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n = a(r(65043)),
        o = a(r(65173)),
        i = r(62464);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var u = String.fromCharCode(215),
        s = function (e) {
          var t = e.readOnly,
            r = e.removeComponent,
            o = e.onRemove,
            a = e.className,
            s = e.tag,
            c = e.index,
            l = function (e) {
              if (
                i.KEYS.ENTER.includes(e.keyCode) ||
                e.keyCode === i.KEYS.SPACE
              )
                return e.preventDefault(), void e.stopPropagation();
              e.keyCode === i.KEYS.BACKSPACE && o(e);
            };
          if (t) return n.default.createElement('span', null);
          var d = 'Tag at index '
            .concat(c, ' with value ')
            .concat(s.id, ' focussed. Press backspace to remove');
          if (r) {
            var f = r;
            return n.default.createElement(f, {
              onRemove: o,
              onKeyDown: l,
              className: a,
              'aria-label': d,
              tag: s,
              index: c
            });
          }
          return n.default.createElement(
            'button',
            {
              onClick: o,
              onKeyDown: l,
              className: a,
              type: 'button',
              'aria-label': d
            },
            u
          );
        };
      s.propTypes = {
        className: o.default.string,
        onRemove: o.default.func.isRequired,
        readOnly: o.default.bool,
        removeComponent: o.default.func,
        tag: o.default.shape({
          id: o.default.string.isRequired,
          className: o.default.string,
          key: o.default.string
        }),
        index: o.default.number.isRequired
      };
      t.default = s;
    },
    75484: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var n = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != c(e) && 'function' != typeof e))
            return { default: e };
          var r = s(t);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i]);
            }
          return (n.default = e), r && r.set(e, n), n;
        })(r(65043)),
        o = u(r(65173)),
        i = u(r(19853)),
        a = u(r(12358));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (s = function (e) {
          return e ? r : t;
        })(e);
      }
      function c(e) {
        return (
          (c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          c(e)
        );
      }
      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, v(n.key), n);
        }
      }
      function d(e, t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          d(e, t)
        );
      }
      function f(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(e);
          if (t) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' === c(t) || 'function' === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return p(e);
          })(this, r);
        };
      }
      function p(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function h(e, t, r) {
        return (
          (t = v(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = r),
          e
        );
      }
      function v(e) {
        var t = (function (e, t) {
          if ('object' !== c(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' !== c(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === c(t) ? t : String(t);
      }
      var y = (function (e) {
        !(function (e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && d(e, t);
        })(s, e);
        var t,
          r,
          o,
          u = f(s);
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, s);
          for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return (
            h(
              p((e = u.call.apply(u, [this].concat(r)))),
              'markIt',
              function (t, r) {
                var n = r.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
                return {
                  __html: t[e.props.labelField].replace(
                    RegExp(n, 'gi'),
                    function (e) {
                      return '<mark>'.concat((0, a.default)(e), '</mark>');
                    }
                  )
                };
              }
            ),
            h(p(e), 'shouldRenderSuggestions', function (t) {
              var r = e.props,
                n = r.minQueryLength,
                o = r.isFocused;
              return t.length >= n && o;
            }),
            h(p(e), 'renderSuggestion', function (t, r) {
              var o = e.props.renderSuggestion;
              return 'function' === typeof o
                ? o(t, r)
                : n.default.createElement('span', {
                    dangerouslySetInnerHTML: e.markIt(t, r)
                  });
            }),
            e
          );
        }
        return (
          (t = s),
          (r = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                var t = this.props,
                  r = t.shouldRenderSuggestions || this.shouldRenderSuggestions;
                return (
                  t.isFocused !== e.isFocused ||
                  !(0, i.default)(t.suggestions, e.suggestions) ||
                  r(e.query) ||
                  r(e.query) !== r(t.query)
                );
              }
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.props,
                  r = t.selectedIndex,
                  n = t.classNames;
                if (this.suggestionsContainer && e.selectedIndex !== r) {
                  var o = this.suggestionsContainer.querySelector(
                    '.'.concat(n.activeSuggestion)
                  );
                  o &&
                    (function (e, t) {
                      var r = t.offsetHeight,
                        n = e.offsetHeight,
                        o = e.offsetTop - t.scrollTop;
                      o + n >= r
                        ? (t.scrollTop += o - r + n)
                        : o < 0 && (t.scrollTop += o);
                    })(o, this.suggestionsContainer);
                }
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.suggestions.map(
                    function (e, r) {
                      return n.default.createElement(
                        'li',
                        {
                          key: r,
                          onMouseDown: t.handleClick.bind(null, r),
                          onTouchStart: t.handleClick.bind(null, r),
                          onMouseOver: t.handleHover.bind(null, r),
                          className:
                            r === t.selectedIndex
                              ? t.classNames.activeSuggestion
                              : ''
                        },
                        this.renderSuggestion(e, t.query)
                      );
                    }.bind(this)
                  ),
                  o = t.shouldRenderSuggestions || this.shouldRenderSuggestions;
                return 0 !== r.length && o(t.query)
                  ? n.default.createElement(
                      'div',
                      {
                        ref: function (t) {
                          e.suggestionsContainer = t;
                        },
                        className: this.props.classNames.suggestions
                      },
                      n.default.createElement('ul', null, ' ', r, ' ')
                    )
                  : null;
              }
            }
          ]) && l(t.prototype, r),
          o && l(t, o),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          s
        );
      })(n.Component);
      h(y, 'propTypes', {
        query: o.default.string.isRequired,
        selectedIndex: o.default.number.isRequired,
        suggestions: o.default.array.isRequired,
        handleClick: o.default.func.isRequired,
        handleHover: o.default.func.isRequired,
        minQueryLength: o.default.number,
        shouldRenderSuggestions: o.default.func,
        isFocused: o.default.bool.isRequired,
        classNames: o.default.object,
        labelField: o.default.string.isRequired,
        renderSuggestion: o.default.func
      }),
        h(y, 'defaultProps', { minQueryLength: 2 });
      t.default = y;
    },
    45965: (e, t, r) => {
      'use strict';
      function n(e) {
        return (
          (n =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          n(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != n(e) && 'function' != typeof e))
            return { default: e };
          var r = d(t);
          if (r && r.has(e)) return r.get(e);
          var o = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              u && (u.get || u.set)
                ? Object.defineProperty(o, a, u)
                : (o[a] = e[a]);
            }
          return (o.default = e), r && r.set(e, o), o;
        })(r(65043)),
        i = r(79692),
        a = l(r(65173)),
        u = l(r(15379)),
        s = r(54388),
        c = l(r(18342));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function d(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (d = function (e) {
          return e ? r : t;
        })(e);
      }
      function f(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i,
                a,
                u = [],
                s = !0,
                c = !1;
              try {
                if (((i = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (n = i.call(r)).done) &&
                    (u.push(n.value), u.length !== t);
                    s = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != r.return &&
                    ((a = r.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return u;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' === typeof e) return p(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return p(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var g = 'tag',
        h = function (e) {
          var t = (0, o.useRef)(null),
            r = e.readOnly,
            n = e.tag,
            a = e.classNames,
            l = e.index,
            d = f(
              (0, i.useDrag)(function () {
                return {
                  type: g,
                  collect: function (e) {
                    return { isDragging: !!e.isDragging() };
                  },
                  item: e,
                  canDrag: function () {
                    return (0, s.canDrag)(e);
                  }
                };
              }),
              2
            ),
            p = d[0].isDragging;
          (0, d[1])(
            (0,
            f(
              (0, i.useDrop)(function () {
                return {
                  accept: g,
                  drop: function (t, r) {
                    var n = t.index,
                      o = l;
                    n !== o && e.moveTag(n, o);
                  },
                  canDrop: function (e) {
                    return (0, s.canDrop)(e);
                  }
                };
              }),
              2
            )[1])(t)
          );
          var h = e.tag[e.labelField],
            v = n.className,
            y = void 0 === v ? '' : v,
            b = p ? 0 : 1;
          return o.default.createElement(
            'span',
            {
              ref: t,
              className: (0, u.default)('tag-wrapper', a.tag, y),
              style: {
                opacity: b,
                cursor: (0, s.canDrag)(e) ? 'move' : 'auto'
              },
              onClick: e.onTagClicked,
              onTouchStart: e.onTagClicked
            },
            h,
            o.default.createElement(c.default, {
              tag: e.tag,
              className: a.remove,
              removeComponent: e.removeComponent,
              onRemove: e.onDelete,
              readOnly: r,
              index: l
            })
          );
        };
      (h.propTypes = {
        labelField: a.default.string,
        onDelete: a.default.func.isRequired,
        tag: a.default.shape({
          id: a.default.string.isRequired,
          className: a.default.string,
          key: a.default.string
        }),
        moveTag: a.default.func,
        removeComponent: a.default.func,
        onTagClicked: a.default.func,
        classNames: a.default.object,
        readOnly: a.default.bool,
        index: a.default.number.isRequired
      }),
        (h.defaultProps = { labelField: 'text', readOnly: !1 });
      t.default = h;
    },
    62464: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.KEYS =
          t.INPUT_FIELD_POSITIONS =
          t.ERRORS =
          t.DEFAULT_PLACEHOLDER =
          t.DEFAULT_LABEL_FIELD =
          t.DEFAULT_CLASSNAMES =
            void 0);
      (t.KEYS = {
        ENTER: [10, 13],
        TAB: 9,
        BACKSPACE: 8,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        ESCAPE: 27,
        SPACE: 32,
        COMMA: 188
      }),
        (t.DEFAULT_PLACEHOLDER = 'Press enter to add new tag'),
        (t.DEFAULT_LABEL_FIELD = 'text'),
        (t.DEFAULT_CLASSNAMES = {
          tags: 'ReactTags__tags',
          tagInput: 'ReactTags__tagInput',
          tagInputField: 'ReactTags__tagInputField',
          selected: 'ReactTags__selected',
          tag: 'ReactTags__tag',
          remove: 'ReactTags__remove',
          suggestions: 'ReactTags__suggestions',
          activeSuggestion: 'ReactTags__activeSuggestion',
          editTagInput: 'ReactTags__editTagInput',
          editTagInputField: 'ReactTags__editTagInputField',
          clearAll: 'ReactTags__clearAll'
        }),
        (t.INPUT_FIELD_POSITIONS = {
          INLINE: 'inline',
          TOP: 'top',
          BOTTOM: 'bottom'
        }),
        (t.ERRORS = { TAG_LIMIT: 'Tag limit reached!' });
    },
    54388: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.buildRegExpFromDelimiters = function (e) {
          var t = e
              .map(function (e) {
                var t = e - 48 * Math.floor(e / 48);
                return String.fromCharCode(96 <= e ? t : e);
              })
              .join(''),
            r = (0, o.default)(t);
          return new RegExp('['.concat(r, ']+'));
        }),
        (t.canDrag = function (e) {
          var t = e.moveTag,
            r = e.readOnly,
            n = e.allowDragDrop;
          return void 0 !== t && !r && n;
        }),
        (t.canDrop = function (e) {
          var t = e.readOnly,
            r = e.allowDragDrop;
          return !t && r;
        });
      var n,
        o = (n = r(58127)) && n.__esModule ? n : { default: n };
    },
    15379: (e, t) => {
      var r;
      !(function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            if (r) {
              var i = typeof r;
              if ('string' === i || 'number' === i) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var a = o.apply(null, r);
                  a && e.push(a);
                }
              } else if ('object' === i) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes('[native code]')
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (var u in r) n.call(r, u) && r[u] && e.push(u);
              }
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function () {
                return o;
              }.apply(t, [])) || (e.exports = r);
      })();
    }
  }
]);
//# sourceMappingURL=290.64555cc7.chunk.js.map