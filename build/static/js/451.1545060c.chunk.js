'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [451],
  {
    62482: (n, t, o) => {
      o.d(t, { H: () => e, h: () => i });
      var a = o(22626);
      const e = new a.A('login'),
        i = new a.A('register');
    },
    28451: (n, t, o) => {
      o.r(t), o.d(t, { default: () => S });
      var a = o(16325),
        e = o(70930),
        i = o(81045),
        r = o(19464),
        s = o(19252),
        d = o(55376),
        c = o(68903),
        l = o(88446),
        g = o(67784),
        u = o(85865),
        h = o(24858),
        m = o(33173),
        f = o(82907),
        p = o(86971),
        v = o(36110),
        A = o(35947),
        x = o(62482),
        b = o(3435),
        I = o(54262),
        y = o(72974);
      const L = () => {
        const { toast: n } = (0, v.n)(),
          {
            setUserApp: t,
            setAccessTokenApp: o,
            user: { userId: a }
          } = (0, v.n)(),
          { profile: e, refetch: i } = (0, b.A)(),
          { refetch: r } = (0, I.A)(),
          { refetch: s } = (0, y.A)(),
          d = (0, p.Zp)(),
          { state: c } = (0, p.zy)(),
          l = c;
        console.log(l),
          a &&
            d((null === l || void 0 === l ? void 0 : l.from) || '/', {
              state: c,
              replace: !0
            });
        const { mutate: g, isLoading: u } = (0, f.useMutation)(x.H.create, {
          onSuccess: (a) => {
            const { userData: e, access_token: i } = a.data;
            200 === a.status && null !== e && void 0 !== e && e.userId
              ? (n.success({ massage: a.message }),
                t(e),
                o(i),
                A.L.setAccessToken(i),
                d((null === l || void 0 === l ? void 0 : l.from) || '/', {
                  state: c,
                  replace: !0
                }))
              : n.error({ massage: a.message });
          },
          onError: (t) => {
            n.error({ massage: t.response.data.message });
          }
        });
        return { onLogin: g, isLoading: u };
      };
      var j = o(19185),
        w = o(73383),
        P = o(70579);
      function S() {
        const { isLoading: n, onLogin: t } = L(),
          {
            control: o,
            handleSubmit: f,
            formState: { errors: p }
          } = (0, h.mN)({});
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(r.A, {
              sx: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -1,
                backgroundImage: 'url('.concat(w, ')'),
                backgroundSize: 'cover'
              }
            }),
            (0, P.jsxs)(s.A, {
              component: 'main',
              maxWidth: 'xs',
              sx: { ml: 25, my: 15 },
              children: [
                (0, P.jsx)(d.Ay, {}),
                (0, P.jsxs)(r.A, {
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'white',
                    p: 3,
                    border: 1,
                    borderColor: '#79b6cc',
                    borderRadius: 2,
                    boxShadow: '2px 2px 6px #98E4FF'
                  },
                  children: [
                    (0, P.jsx)(i.A, {
                      sx: { m: 1, bgcolor: 'secondary.main' },
                      children: (0, P.jsx)(a.A, {})
                    }),
                    (0, P.jsx)(u.A, {
                      component: 'h1',
                      variant: 'h5',
                      children: '\u0110\u0103ng nh\u1eadp'
                    }),
                    (0, P.jsxs)(r.A, {
                      component: 'form',
                      noValidate: !0,
                      sx: { mt: 1 },
                      children: [
                        (0, P.jsx)(m.A, {
                          element: (0, P.jsx)(g.A, {}),
                          control: o,
                          errors: p,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          id: 'email',
                          label: '\u0110\u1ecba ch\u1ec9 email',
                          pattern: 'email',
                          name: 'email',
                          autoComplete: 'email',
                          autoFocus: !0
                        }),
                        (0, P.jsx)(m.A, {
                          element: (0, P.jsx)(g.A, {}),
                          control: o,
                          errors: p,
                          margin: 'normal',
                          required: !0,
                          fullWidth: !0,
                          name: 'password',
                          label: 'M\u1eadt kh\u1ea9u',
                          type: 'password',
                          id: 'password',
                          autoComplete: 'current-password'
                        }),
                        (0, P.jsx)(e.A, {
                          onClick: f((n) => {
                            t(n);
                          }),
                          loading: n,
                          fullWidth: !0,
                          variant: 'contained',
                          sx: { mt: 3, mb: 2 },
                          children: '\u0110\u0103ng nh\u1eadp'
                        }),
                        (0, P.jsxs)(c.Ay, {
                          container: !0,
                          mt: 2,
                          children: [
                            (0, P.jsx)(c.Ay, {
                              item: !0,
                              xs: !0,
                              children: (0, P.jsx)(l.A, {
                                href: '/register?role='.concat(j.X.EMPLOYER),
                                variant: 'body2',
                                fontWeight: 700,
                                color: 'secondary',
                                children: 'D\xe0nh cho NTD'
                              })
                            }),
                            (0, P.jsx)(c.Ay, {
                              item: !0,
                              children: (0, P.jsx)(l.A, {
                                href: '/register',
                                variant: 'body2',
                                fontWeight: 700,
                                color: 'secondary',
                                children:
                                  'Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? \u0110\u0103ng k\xfd'
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    72974: (n, t, o) => {
      o.d(t, { A: () => c });
      var a = o(82907),
        e = o(52105),
        i = o(65043),
        r = o(75614),
        s = o(36110),
        d = o(32109);
      const c = () => {
        const { isEmployee: n } = (0, s.n)(),
          { setProfile: t } = (0, d.A)(),
          o = Boolean((0, r.getAccessToken)()),
          {
            data: c,
            isLoading: l,
            isSuccess: g,
            refetch: u
          } = (0, a.useQuery)(['get-AttachedDocument'], e.hT.get, {
            retry: (n, t) => 400 !== t.response.status && n < 2,
            refetchOnWindowFocus: !1,
            enabled: o && n
          });
        return (
          (0, i.useEffect)(() => {
            c && t(c.data);
          }, [g]),
          {
            attachedDocument: null === c || void 0 === c ? void 0 : c.data,
            isLoading: l,
            refetch: u
          }
        );
      };
    },
    54262: (n, t, o) => {
      o.d(t, { A: () => c });
      var a = o(82907),
        e = o(52105),
        i = o(65043),
        r = o(75614),
        s = o(36110),
        d = o(35644);
      const c = () => {
        const { isEmployee: n } = (0, s.n)(),
          { setProfile: t } = (0, d.A)(),
          o = Boolean((0, r.getAccessToken)()),
          {
            data: c,
            isLoading: l,
            isSuccess: g,
            refetch: u
          } = (0, a.useQuery)(['get-OnlineProfile'], e.w0.get, {
            retry: (n, t) => 400 !== t.response.status && n < 2,
            refetchOnWindowFocus: !1,
            enabled: o && n
          });
        return (
          (0, i.useEffect)(() => {
            c && g && t(null === c || void 0 === c ? void 0 : c.data);
          }, [g]),
          {
            onlineProfile: null === c || void 0 === c ? void 0 : c.data,
            isLoading: l,
            refetch: u
          }
        );
      };
    },
    16325: (n, t, o) => {
      var a = o(32392);
      t.A = void 0;
      var e = a(o(40039)),
        i = o(70579),
        r = (0, e.default)(
          (0, i.jsx)('path', {
            d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
          }),
          'LockOutlined'
        );
      t.A = r;
    },
    70930: (n, t, o) => {
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var t = 1; t < arguments.length; t++) {
                  var o = arguments[t];
                  for (var a in o)
                    Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
                }
                return n;
              }),
          a.apply(this, arguments)
        );
      }
      o.d(t, { A: () => x });
      var e = o(65043),
        i = o(6803),
        r = o(45879),
        s = o(68606),
        d = o(34535),
        c = o(72876),
        l = o(11906),
        g = o(81637),
        u = o(32400);
      function h(n) {
        return (0, u.Ay)('MuiLoadingButton', n);
      }
      const m = (0, o(57056).A)('MuiLoadingButton', [
        'root',
        'loading',
        'loadingIndicator',
        'loadingIndicatorCenter',
        'loadingIndicatorStart',
        'loadingIndicatorEnd',
        'endIconLoadingEnd',
        'startIconLoadingStart'
      ]);
      var f = o(70579);
      const p = [
          'children',
          'disabled',
          'id',
          'loading',
          'loadingIndicator',
          'loadingPosition',
          'variant'
        ],
        v = (0, d.Ay)(l.A, {
          shouldForwardProp: (n) =>
            ((n) =>
              'ownerState' !== n &&
              'theme' !== n &&
              'sx' !== n &&
              'as' !== n &&
              'classes' !== n)(n) || 'classes' === n,
          name: 'MuiLoadingButton',
          slot: 'Root',
          overridesResolver: (n, t) => [
            t.root,
            t.startIconLoadingStart && {
              ['& .'.concat(m.startIconLoadingStart)]: t.startIconLoadingStart
            },
            t.endIconLoadingEnd && {
              ['& .'.concat(m.endIconLoadingEnd)]: t.endIconLoadingEnd
            }
          ]
        })((n) => {
          let { ownerState: t, theme: o } = n;
          return a(
            {
              ['& .'
                .concat(m.startIconLoadingStart, ', & .')
                .concat(m.endIconLoadingEnd)]: {
                transition: o.transitions.create(['opacity'], {
                  duration: o.transitions.duration.short
                }),
                opacity: 0
              }
            },
            'center' === t.loadingPosition && {
              transition: o.transitions.create(
                ['background-color', 'box-shadow', 'border-color'],
                { duration: o.transitions.duration.short }
              ),
              ['&.'.concat(m.loading)]: { color: 'transparent' }
            },
            'start' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: o.transitions.create(['opacity'], {
                    duration: o.transitions.duration.short
                  }),
                  opacity: 0,
                  marginRight: -8
                }
              },
            'end' === t.loadingPosition &&
              t.fullWidth && {
                ['& .'
                  .concat(m.startIconLoadingStart, ', & .')
                  .concat(m.endIconLoadingEnd)]: {
                  transition: o.transitions.create(['opacity'], {
                    duration: o.transitions.duration.short
                  }),
                  opacity: 0,
                  marginLeft: -8
                }
              }
          );
        }),
        A = (0, d.Ay)('div', {
          name: 'MuiLoadingButton',
          slot: 'LoadingIndicator',
          overridesResolver: (n, t) => {
            const { ownerState: o } = n;
            return [
              t.loadingIndicator,
              t['loadingIndicator'.concat((0, i.A)(o.loadingPosition))]
            ];
          }
        })((n) => {
          let { theme: t, ownerState: o } = n;
          return a(
            { position: 'absolute', visibility: 'visible', display: 'flex' },
            'start' === o.loadingPosition &&
              ('outlined' === o.variant || 'contained' === o.variant) && {
                left: 'small' === o.size ? 10 : 14
              },
            'start' === o.loadingPosition &&
              'text' === o.variant && { left: 6 },
            'center' === o.loadingPosition && {
              left: '50%',
              transform: 'translate(-50%)',
              color: t.palette.action.disabled
            },
            'end' === o.loadingPosition &&
              ('outlined' === o.variant || 'contained' === o.variant) && {
                right: 'small' === o.size ? 10 : 14
              },
            'end' === o.loadingPosition && 'text' === o.variant && { right: 6 },
            'start' === o.loadingPosition &&
              o.fullWidth && { position: 'relative', left: -10 },
            'end' === o.loadingPosition &&
              o.fullWidth && { position: 'relative', right: -10 }
          );
        }),
        x = e.forwardRef(function (n, t) {
          const o = (0, c.A)({ props: n, name: 'MuiLoadingButton' }),
            {
              children: d,
              disabled: l = !1,
              id: u,
              loading: m = !1,
              loadingIndicator: x,
              loadingPosition: b = 'center',
              variant: I = 'text'
            } = o,
            y = (function (n, t) {
              if (null == n) return {};
              var o = {};
              for (var a in n)
                if (Object.prototype.hasOwnProperty.call(n, a)) {
                  if (t.indexOf(a) >= 0) continue;
                  o[a] = n[a];
                }
              return o;
            })(o, p),
            L = (0, r.A)(u),
            j =
              null != x
                ? x
                : (0, f.jsx)(g.A, {
                    'aria-labelledby': L,
                    color: 'inherit',
                    size: 16
                  }),
            w = a({}, o, {
              disabled: l,
              loading: m,
              loadingIndicator: j,
              loadingPosition: b,
              variant: I
            }),
            P = ((n) => {
              const { loading: t, loadingPosition: o, classes: e } = n,
                r = {
                  root: ['root', t && 'loading'],
                  startIcon: [t && 'startIconLoading'.concat((0, i.A)(o))],
                  endIcon: [t && 'endIconLoading'.concat((0, i.A)(o))],
                  loadingIndicator: [
                    'loadingIndicator',
                    t && 'loadingIndicator'.concat((0, i.A)(o))
                  ]
                };
              return a({}, e, (0, s.A)(r, h, e));
            })(w);
          return (0,
          f.jsx)(v, a({ disabled: l || m, id: L, ref: t }, y, { variant: I, classes: P, ownerState: w, children: 'end' === w.loadingPosition ? (0, f.jsxs)(e.Fragment, { children: [d, m && (0, f.jsx)(A, { className: P.loadingIndicator, ownerState: w, children: j })] }) : (0, f.jsxs)(e.Fragment, { children: [m && (0, f.jsx)(A, { className: P.loadingIndicator, ownerState: w, children: j }), d] }) }));
        });
    },
    73383: (n, t, o) => {
      n.exports =
        o.p + 'static/media/background-image.e26997f9c2e3c3d03a8c.png';
    }
  }
]);
//# sourceMappingURL=451.1545060c.chunk.js.map
