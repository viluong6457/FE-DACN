'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [196],
  {
    81196: (e, t, r) => {
      r.r(t), r.d(t, { default: () => C });
      var n = r(65043),
        a = r(19464),
        o = r(85865),
        i = r(74050),
        c = r(11906),
        l = r(19252),
        s = r(53193),
        u = r(51787),
        h = r(81673),
        f = r(39336),
        d = r(77739),
        p = r(17392),
        j = r(29490),
        x = r(84210),
        A = r(34535),
        m = r(60348),
        v = r(53417),
        y = r(47734),
        g = r(88169),
        b = r(70579);
      const w = (0, A.Ay)(a.A)(
          () =>
            '\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n'
        ),
        M = (0, A.Ay)(o.A)((e) => {
          let { theme: t } = e;
          return '\n  font-size: '.concat(t.typography.pxToRem(75), ';\n');
        }),
        O = (0, A.Ay)(o.A)((e) => {
          let { theme: t } = e;
          return '\n  color: '.concat(t.colors.alpha.black[50], ';\n');
        }),
        k = (0, A.Ay)(i.A)((e) => {
          let { theme: t } = e;
          return '\n    background-color: '.concat(
            t.colors.alpha.white[100],
            ';\n'
          );
        }),
        W = (0, A.Ay)(c.A)((e) => {
          let { theme: t } = e;
          return '\n    margin-right: -'.concat(t.spacing(1), ';\n');
        });
      const C = function () {
        const e = () => {
            const e = +new Date('2023') - +new Date();
            let t = {};
            return (
              e > 0 &&
                (t = {
                  days: Math.floor(e / 864e5),
                  hours: Math.floor((e / 36e5) % 24),
                  minutes: Math.floor((e / 1e3 / 60) % 60),
                  seconds: Math.floor((e / 1e3) % 60)
                }),
              t
            );
          },
          [t, r] = (0, n.useState)(e());
        (0, n.useEffect)(() => {
          setTimeout(() => {
            r(e());
          }, 1e3);
        });
        const i = [];
        return (
          Object.keys(t).forEach((e) => {
            t[e] &&
              i.push(
                (0, b.jsxs)(a.A, {
                  textAlign: 'center',
                  px: 3,
                  children: [
                    (0, b.jsx)(M, { variant: 'h1', children: t[e] }),
                    (0, b.jsx)(O, { variant: 'h3', children: e })
                  ]
                })
              );
          }),
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)(j.mg, {
                children: (0, b.jsx)('title', {
                  children: 'Status - Coming Soon'
                })
              }),
              (0, b.jsx)(w, {
                children: (0, b.jsxs)(l.A, {
                  maxWidth: 'md',
                  children: [
                    (0, b.jsx)(x.A, {}),
                    (0, b.jsxs)(a.A, {
                      textAlign: 'center',
                      mb: 3,
                      children: [
                        (0, b.jsxs)(l.A, {
                          maxWidth: 'xs',
                          children: [
                            (0, b.jsx)(o.A, {
                              variant: 'h1',
                              sx: { mt: 4, mb: 2 },
                              children: 'Coming Soon'
                            }),
                            (0, b.jsx)(o.A, {
                              variant: 'h3',
                              color: 'text.secondary',
                              fontWeight: 'normal',
                              sx: { mb: 4 },
                              children:
                                "We're working on implementing the last features before our launch!"
                            })
                          ]
                        }),
                        (0, b.jsx)('img', {
                          alt: 'Coming Soon',
                          height: 200,
                          src: '/static/images/status/coming-soon.svg'
                        })
                      ]
                    }),
                    (0, b.jsx)(a.A, {
                      display: 'flex',
                      justifyContent: 'center',
                      children: i.length
                        ? i
                        : (0, b.jsx)(b.Fragment, { children: "Time's up!" })
                    }),
                    (0, b.jsx)(l.A, {
                      maxWidth: 'sm',
                      children: (0, b.jsxs)(a.A, {
                        sx: { textAlign: 'center', p: 4 },
                        children: [
                          (0, b.jsxs)(s.A, {
                            variant: 'outlined',
                            fullWidth: !0,
                            children: [
                              (0, b.jsx)(k, {
                                type: 'text',
                                placeholder: 'Enter your email address here...',
                                endAdornment: (0, b.jsx)(u.A, {
                                  position: 'end',
                                  children: (0, b.jsx)(W, {
                                    variant: 'contained',
                                    size: 'small',
                                    children: 'Notify Me'
                                  })
                                }),
                                startAdornment: (0, b.jsx)(u.A, {
                                  position: 'start',
                                  children: (0, b.jsx)(g.A, {})
                                })
                              }),
                              (0, b.jsx)(h.A, {
                                children:
                                  "We'll email you once our website is launched!"
                              })
                            ]
                          }),
                          (0, b.jsx)(f.A, { sx: { my: 4 } }),
                          (0, b.jsxs)(a.A, {
                            sx: { textAlign: 'center' },
                            children: [
                              (0, b.jsx)(d.A, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Facebook',
                                children: (0, b.jsx)(p.A, {
                                  color: 'primary',
                                  children: (0, b.jsx)(m.A, {})
                                })
                              }),
                              (0, b.jsx)(d.A, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Twitter',
                                children: (0, b.jsx)(p.A, {
                                  color: 'primary',
                                  children: (0, b.jsx)(v.A, {})
                                })
                              }),
                              (0, b.jsx)(d.A, {
                                arrow: !0,
                                placement: 'top',
                                title: 'Instagram',
                                children: (0, b.jsx)(p.A, {
                                  color: 'primary',
                                  children: (0, b.jsx)(y.A, {})
                                })
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            ]
          })
        );
      };
    },
    60348: (e, t, r) => {
      var n = r(32392);
      t.A = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var c = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            c && (c.get || c.set)
              ? Object.defineProperty(n, o, c)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(65043));
      var a = n(r(40039)),
        o = r(70579);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var c = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z'
        }),
        'Facebook'
      );
      t.A = c;
    },
    47734: (e, t, r) => {
      var n = r(32392);
      t.A = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var c = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            c && (c.get || c.set)
              ? Object.defineProperty(n, o, c)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(65043));
      var a = n(r(40039)),
        o = r(70579);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var c = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
        }),
        'Instagram'
      );
      t.A = c;
    },
    88169: (e, t, r) => {
      var n = r(32392);
      t.A = void 0;
      var a = n(r(40039)),
        o = r(70579),
        i = (0, a.default)(
          [
            (0, o.jsx)(
              'path',
              { d: 'M20 6H4l8 4.99zM4 8v10h16V8l-8 5z', opacity: '.3' },
              '0'
            ),
            (0, o.jsx)(
              'path',
              {
                d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z'
              },
              '1'
            )
          ],
          'MailTwoTone'
        );
      t.A = i;
    },
    53417: (e, t, r) => {
      var n = r(32392);
      t.A = void 0;
      !(function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== typeof e && 'function' !== typeof e))
          return { default: e };
        var r = i(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ('default' !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var c = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            c && (c.get || c.set)
              ? Object.defineProperty(n, o, c)
              : (n[o] = e[o]);
          }
        (n.default = e), r && r.set(e, n);
      })(r(65043));
      var a = n(r(40039)),
        o = r(70579);
      function i(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      var c = (0, a.default)(
        (0, o.jsx)('path', {
          d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'
        }),
        'Twitter'
      );
      t.A = c;
    }
  }
]);
//# sourceMappingURL=196.29b7c8e2.chunk.js.map
