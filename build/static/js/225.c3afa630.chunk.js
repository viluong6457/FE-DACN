'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [225],
  {
    80881: (e, n, s) => {
      s.d(n, { A: () => r });
      var t = s(19464),
        l = s(11906),
        i = s(70579);
      function r(e) {
        const { handleSubmit: n, handleCancel: s } = e;
        return (0, i.jsxs)(t.A, {
          display: 'flex',
          justifyContent: 'center',
          sx: { gap: 3 },
          children: [
            (0, i.jsx)(l.A, {
              onClick: s,
              variant: 'outlined',
              color: 'secondary',
              sx: { width: 120 },
              children: 'H\u1ee7y'
            }),
            (0, i.jsx)(l.A, {
              color: 'success',
              onClick: n,
              variant: 'contained',
              sx: { width: 120 },
              children: 'X\xe1c nh\u1eadn'
            })
          ]
        });
      }
    },
    67002: (e, n, s) => {
      s.d(n, { A: () => d });
      var t = s(89302),
        l = s(898),
        i = s(58390),
        r = s(60446),
        o = s.n(r),
        a = s(70579);
      function d(e) {
        return (0, a.jsx)(i.$, {
          dateAdapter: t.R,
          children: (0, a.jsx)(l.l, {
            format: 'DD/MM/YYYY',
            ...e,
            value: e.value ? o()(e.value) : null,
            slotProps: { textField: { size: 'small', fullWidth: !0 } }
          })
        });
      }
    },
    63656: (e, n, s) => {
      s.d(n, { A: () => o });
      s(65043);
      var t = s(11906),
        l = s(85865),
        i = s(36134),
        r = s(70579);
      function o(e) {
        return (0, r.jsx)(t.A, {
          ...e,
          variant: 'outlined',
          color: 'secondary',
          startIcon: (0, r.jsx)(i.A, { fontSize: 'large' }),
          sx: { borderRadius: 5 },
          children: (0, r.jsx)(l.A, {
            textTransform: 'none',
            children: 'Ch\u1ec9nh s\u1eeda'
          })
        });
      }
    },
    30604: (e, n, s) => {
      s.d(n, { A: () => a });
      var t = s(65043),
        l = s(51318),
        i = s(70579);
      const r = { textDecoration: 'none', color: '#551a8b' },
        o = (e) => {
          e.currentTarget.style.color = '#FF7D55';
        },
        a = (0, t.forwardRef)((e, n) => {
          const { to: s, children: t, sx: a } = e;
          return (0, i.jsx)(l.N_, {
            ...e,
            to: s,
            style: { ...r, ...a },
            onMouseEnter: o,
            onMouseLeave: (e) =>
              ((e, n) => {
                e.currentTarget.style.color = n || '#551a8b';
              })(e, null === a || void 0 === a ? void 0 : a.color),
            children: t
          });
        });
    },
    95851: (e, n, s) => {
      s.d(n, { A: () => i });
      var t = s(67784),
        l = s(70579);
      const i = (e) => (0, l.jsx)(t.A, { size: 'small', fullWidth: !0, ...e });
    },
    82656: (e, n, s) => {
      s.d(n, { C: () => l, c: () => i });
      var t = s(22626);
      const l = new t.A('get-information-company-by-user'),
        i = new t.A('employee/follow-company');
    },
    21430: (e, n, s) => {
      s.d(n, { A: () => x });
      var t = s(19464),
        l = s(85865),
        i = s(94074),
        r = s(6897),
        o = s(51726),
        a = s(54367),
        d = s(30604),
        c = s(70579);
      const m = (e) => [
        {
          label: 'T\xean c\xf4ng ty',
          value: null === e || void 0 === e ? void 0 : e.companyName
        },
        {
          label: '\u0110\u1ecba ch\u1ec9 c\xf4ng ty',
          value: null === e || void 0 === e ? void 0 : e.companyLocation
        },
        {
          label: 'L\u0129nh v\u1ef1c',
          value: null === e || void 0 === e ? void 0 : e.careerField
        },
        {
          label: 'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p',
          value: null === e || void 0 === e ? void 0 : e.description
        }
      ];
      function x(e) {
        var n;
        const { sx: s, company: x } = e;
        return (0, c.jsxs)(i.A, {
          sx: { px: 5, ...s },
          children: [
            (0, c.jsxs)(t.A, {
              display: 'flex',
              justifyContent: 'space-between',
              children: [
                (0, c.jsxs)(t.A, {
                  display: 'flex',
                  children: [
                    (0, c.jsx)(o.A, { color: 'primary', sx: { fontSize: 56 } }),
                    (0, c.jsx)(l.A, {
                      fontWeight: 700,
                      fontSize: 22,
                      lineHeight: 3,
                      children: 'Th\xf4ng tin c\xf4ng ty'
                    })
                  ]
                }),
                (0, c.jsx)(d.A, {
                  to: '/company/'
                    .concat(
                      (0, a.O)(
                        null === x || void 0 === x ? void 0 : x.companyName
                      ),
                      '?id='
                    )
                    .concat(
                      btoa(null === x || void 0 === x ? void 0 : x.userId)
                    ),
                  sx: {
                    textDecoration: 'none',
                    alignItems: 'center',
                    alignContent: 'center'
                  },
                  children: 'Xem trang c\xf4ng ty'
                })
              ]
            }),
            null === (n = m(x)) || void 0 === n
              ? void 0
              : n.map((e, n) => (0, c.jsx)(r.F_, { item: e }, n))
          ]
        });
      }
    },
    70737: (e, n, s) => {
      s.d(n, { A: () => r });
      var t = s(82907),
        l = s(36110),
        i = s(15001);
      const r = () => {
        const e = (0, t.useQueryClient)(),
          { toast: n } = (0, l.n)(),
          s = i.OY.create,
          { mutate: r, isLoading: o } = (0, t.useMutation)(s, {
            onSuccess: (s) => {
              200 === s.status
                ? (e.invalidateQueries('get-Profile'),
                  n.success({ massage: s.message }))
                : n.error({ massage: s.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: r, isLoading: o };
      };
    },
    6897: (e, n, s) => {
      s.d(n, { F_: () => T, Ay: () => H });
      var t = s(65043),
        l = s(34535),
        i = s(68903),
        r = s(85865),
        o = s(11906),
        a = s(19252),
        d = s(19464),
        c = s(83462),
        m = s(26600),
        x = s(35316),
        u = s(24858),
        h = s(67002),
        A = s(33173),
        j = s(49768),
        y = s(17913),
        p = s(60446),
        g = s.n(p),
        v = s(70737),
        f = s(82907),
        b = s(36110),
        C = s(15001);
      const S = () => {
        const e = (0, f.useQueryClient)(),
          { toast: n } = (0, b.n)(),
          s = C.ex.create,
          { mutate: t, isLoading: l } = (0, f.useMutation)(s, {
            onSuccess: (s) => {
              200 === s.status
                ? (e.invalidateQueries('get-Company'),
                  n.success({ massage: s.message }))
                : n.error({ massage: s.message });
            },
            onError: (e) => {
              n.error({ massage: e.response.data.message });
            }
          });
        return { onSaveData: t, isLoading: l };
      };
      var L = s(95851),
        W = s(25650),
        F = s(80881),
        M = s(65073),
        w = s(24524),
        D = s(70579);
      function z(e) {
        var n;
        const { isEmployee: s } = (0, b.n)(),
          { close: t, user: l } = e,
          { onSaveData: r } = (0, v.A)(),
          {
            control: o,
            handleSubmit: a,
            formState: { errors: c }
          } = (0, u.mN)({
            defaultValues: {
              ...l,
              dob: (0, W.vd)(l.dob, 'DD-MM-YYYY', 'DD-MM-YYYY'),
              sex:
                null === (n = y.im.find((e) => e.label === l.sex)) ||
                void 0 === n
                  ? void 0
                  : n.value,
              isMarried: l.isMarried
                ? '\u0110\xe3 k\u1ebft h\xf4n'
                : '\u0110\u1ed9c th\xe2n'
            }
          });
        return (0, D.jsxs)(d.A, {
          sx: { p: 3 },
          children: [
            (0, D.jsxs)(i.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: o,
                    errors: c,
                    fullWidth: !0,
                    id: 'name',
                    label: 'H\u1ecd v\xe0 t\xean',
                    name: 'name'
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: o,
                    errors: c,
                    disabled: !0,
                    fullWidth: !0,
                    id: 'email',
                    label: 'Email',
                    name: 'email'
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: o,
                    errors: c,
                    fullWidth: !0,
                    id: 'phone',
                    label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                    name: 'phone',
                    pattern: 'phone'
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: o,
                    errors: c,
                    fullWidth: !0,
                    id: 'address',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'address'
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(h.A, { maxDate: g()() }),
                    control: o,
                    errors: c,
                    fullWidth: !0,
                    id: 'dob',
                    label: 'Ng\xe0y sinh',
                    name: 'dob',
                    required: !0
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(j.A, {}),
                    options: y.im,
                    control: o,
                    errors: c,
                    fullWidth: !0,
                    id: 'sex',
                    label: 'Gi\u1edbi t\xednh',
                    name: 'sex'
                  })
                }),
                s &&
                  (0, D.jsx)(i.Ay, {
                    item: !0,
                    xs: 12,
                    sm: 6,
                    children: (0, D.jsx)(A.A, {
                      element: (0, D.jsx)(j.A, {}),
                      options: y.Fg,
                      control: o,
                      errors: c,
                      fullWidth: !0,
                      id: 'isMarried',
                      label: 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n',
                      name: 'isMarried'
                    })
                  })
              ]
            }),
            (0, D.jsx)(F.A, {
              handleSubmit: a(async (e) => {
                const n = (0, W._g)(e.dob),
                  s = '\u0110\xe3 k\u1ebft h\xf4n' === e.isMarried ? '1' : '0',
                  l = { ...e, dob: n, isMarried: s };
                r(l), (0, M.gV)(l), t();
              }),
              handleCancel: () => t()
            })
          ]
        });
      }
      function k(e) {
        const { close: n, user: s } = e,
          { onSaveData: t } = S(),
          {
            control: l,
            handleSubmit: r,
            formState: { errors: o }
          } = (0, u.mN)({ defaultValues: { ...s } });
        return (0, D.jsxs)(d.A, {
          sx: { p: 3 },
          children: [
            (0, D.jsxs)(i.Ay, {
              container: !0,
              spacing: 3,
              mb: 4,
              children: [
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: l,
                    errors: o,
                    fullWidth: !0,
                    id: 'companyName',
                    label: 'T\xean c\xf4ng ty',
                    name: 'companyName',
                    multiline: !0,
                    required: !0
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: l,
                    errors: o,
                    fullWidth: !0,
                    id: 'taxCode',
                    label: 'M\xe3 s\u1ed1 thu\u1ebf',
                    name: 'taxCode',
                    required: !0
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  sm: 6,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: l,
                    errors: o,
                    fullWidth: !0,
                    id: 'companyLocation',
                    label: '\u0110\u1ecba ch\u1ec9',
                    name: 'companyLocation',
                    required: !0
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(w.A, {
                      size: 'small',
                      freeSolo: !0,
                      options: y.Pd,
                      autoComplete: !0,
                      autoSelect: !0,
                      autoHighlight: !0,
                      multiple: !1,
                      defaultValue:
                        null === s || void 0 === s ? void 0 : s.careerField
                    }),
                    control: l,
                    errors: o,
                    fullWidth: !0,
                    name: 'careerField',
                    label: 'L\u0129nh v\u1ef1c'
                  })
                }),
                (0, D.jsx)(i.Ay, {
                  item: !0,
                  xs: 12,
                  children: (0, D.jsx)(A.A, {
                    element: (0, D.jsx)(L.A, {}),
                    control: l,
                    errors: o,
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 6,
                    minRows: 3,
                    id: 'description',
                    label: 'M\xf4 t\u1ea3 c\xf4ng ty',
                    name: 'description',
                    required: !0
                  })
                })
              ]
            }),
            (0, D.jsx)(F.A, {
              handleSubmit: r((e) => {
                console.log(e.careerField), t(e), n();
              }),
              handleCancel: () => n()
            })
          ]
        });
      }
      var I = s(63656);
      const Y = (0, l.Ay)(i.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            minHeight: 50
          };
        }),
        N = (0, l.Ay)(i.Ay)((e) => {
          let { theme: n } = e;
          return {
            fontFamily: n.typography.fontFamily,
            display: 'flex',
            alignItems: 'center'
          };
        }),
        T = (e) => {
          const { item: n } = e,
            [s, l] = (0, t.useState)(!1);
          return (0, D.jsxs)(i.Ay, {
            container: !0,
            sx: { borderTop: 1, borderColor: 'grey.300' },
            children: [
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' !== n.label &&
                (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsx)(Y, {
                      item: !0,
                      xs: 6,
                      md: 4,
                      children: n.label
                    }),
                    (0, D.jsx)(N, {
                      item: !0,
                      xs: 6,
                      md: 8,
                      children: (0, D.jsx)(r.A, {
                        lineHeight: 2,
                        children: n.value
                      })
                    })
                  ]
                }),
              'Gi\u1edbi thi\u1ec7u doanh nghi\u1ec7p' === n.label &&
                (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsx)(Y, { item: !0, xs: 12, children: n.label }),
                    (0, D.jsx)(N, {
                      item: !0,
                      xs: 12,
                      children: (0, D.jsx)(r.A, {
                        lineHeight: 2,
                        sx: {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: s ? 100 : 3,
                          WebkitBoxOrient: 'vertical'
                        },
                        children: n.value
                      })
                    }),
                    (0, D.jsx)(o.A, {
                      onClick: () => {
                        l((e) => !e);
                      },
                      sx: { mx: 'auto' },
                      color: 'secondary',
                      children: s ? 'Thu g\u1ecdn' : '\u0110\u1ecdc th\xeam'
                    })
                  ]
                })
            ]
          });
        };
      function H(e) {
        const { user: n, data: s, title: l, editIcon: i, openForm: o } = e,
          [u, h] = (0, t.useState)(!1),
          A = () => {
            h(!1);
          },
          j =
            'User' === o
              ? (0, D.jsx)(z, { close: A, user: n })
              : (0, D.jsx)(k, { close: A, user: n });
        return (0, D.jsxs)(a.A, {
          sx: { paddingX: 2 },
          children: [
            (0, D.jsxs)(d.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              children: [
                (0, D.jsxs)(d.A, {
                  display: 'flex',
                  children: [
                    i,
                    (0, D.jsx)(d.A, {
                      children: (0, D.jsx)(r.A, {
                        fontWeight: 700,
                        fontSize: 22,
                        lineHeight: 3,
                        children: l
                      })
                    })
                  ]
                }),
                (0, D.jsx)(I.A, { onClick: () => h(!0) }),
                (0, D.jsxs)(c.A, {
                  open: u,
                  fullWidth: !0,
                  maxWidth: 'md',
                  children: [
                    (0, D.jsx)(m.A, {
                      sx: {
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '1.3rem'
                      },
                      children: l
                    }),
                    (0, D.jsx)(x.A, { children: j })
                  ]
                })
              ]
            }),
            (0, D.jsx)(d.A, {
              sx: { mt: 1 },
              children: s.map((e, n) => (0, D.jsx)(T, { item: e }, n))
            })
          ]
        });
      }
    },
    39225: (e, n, s) => {
      s.r(n), s.d(n, { default: () => C });
      var t = s(34535),
        l = s(63336),
        i = s(81045),
        r = s(19252),
        o = s(85865),
        a = s(94074),
        d = s(65099),
        c = s(64188),
        m = s(54567),
        x = s(21430),
        u = s(82907),
        h = s(82656);
      const A = (e) => {
        const { data: n, isLoading: s } = (0, u.useQuery)(
          ['get-CompanyInfo', e.employerId],
          () => h.C.get({ params: e }),
          { retry: 1, refetchOnWindowFocus: !1 }
        );
        return {
          company: null === n || void 0 === n ? void 0 : n.data,
          isLoading: s
        };
      };
      var j = s(86971),
        y = s(51318),
        p = s(70579);
      const g = (0, t.Ay)('img')({
          width: '100%',
          height: '280px',
          objectFit: 'cover'
        }),
        v = (0, t.Ay)(l.A)({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }),
        f = (e) =>
          (0, p.jsx)(v, {
            elevation: 12,
            children: (0, p.jsx)(g, {
              src: e || d.XS.companyCover,
              alt: 'cover'
            })
          }),
        b = (e) =>
          (0, p.jsx)(i.A, {
            src: e || d.XS.companyAvatar,
            sx: {
              width: 120,
              height: 120,
              bgcolor: '#ffff',
              border: 2,
              borderColor: 'grey.300',
              mt: -5
            }
          });
      function C() {
        const [e, n] = (0, y.ok)(),
          s = atob(e.get('id')),
          { state: t } = (0, j.zy)(),
          { company: l, isLoading: i } = A({ employerId: s });
        return (0, p.jsxs)(r.A, {
          maxWidth: 'md',
          sx: { py: 2 },
          children: [
            f(null === l || void 0 === l ? void 0 : l.banner),
            (0, p.jsxs)(a.A, {
              sx: { flex: 1, display: 'flex', alignItems: 'center', px: 5 },
              children: [
                b(null === l || void 0 === l ? void 0 : l.logo),
                (0, p.jsx)(o.A, {
                  variant: 'h3',
                  ml: 2,
                  children: null === l || void 0 === l ? void 0 : l.companyName
                })
              ]
            }),
            (0, p.jsx)(x.A, { company: l }),
            (0, p.jsx)(c.A, {
              pageTitle: 'Vi\u1ec7c l\xe0m \u0111ang tuy\u1ec3n',
              profession: '',
              queryJobs: m.A,
              numOfJobPerPage: 5,
              employerId: s,
              sx: { p: 0 }
            })
          ]
        });
      }
    },
    36134: (e, n, s) => {
      var t = s(32392);
      n.A = void 0;
      var l = t(s(40039)),
        i = s(70579),
        r = (0, l.default)(
          (0, i.jsx)('path', {
            d: 'm20 7 .94-2.06L23 4l-2.06-.94L20 1l-.94 2.06L17 4l2.06.94zM8.5 7l.94-2.06L11.5 4l-2.06-.94L8.5 1l-.94 2.06L5.5 4l2.06.94zM20 12.5l-.94 2.06-2.06.94 2.06.94.94 2.06.94-2.06L23 15.5l-2.06-.94zm-2.29-3.38-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46c-.39.39-.39 1.02 0 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7 1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z'
          }),
          'AutoFixHighOutlined'
        );
      n.A = r;
    }
  }
]);
//# sourceMappingURL=225.c3afa630.chunk.js.map
