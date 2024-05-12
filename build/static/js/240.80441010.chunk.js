'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [240],
  {
    80881: (e, n, s) => {
      s.d(n, { A: () => l });
      var t = s(19464),
        i = s(11906),
        r = s(70579);
      function l(e) {
        const { handleSubmit: n, handleCancel: s } = e;
        return (0, r.jsxs)(t.A, {
          display: 'flex',
          justifyContent: 'center',
          sx: { gap: 3 },
          children: [
            (0, r.jsx)(i.A, {
              onClick: s,
              variant: 'outlined',
              color: 'secondary',
              sx: { width: 120 },
              children: 'H\u1ee7y'
            }),
            (0, r.jsx)(i.A, {
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
        i = s(898),
        r = s(58390),
        l = s(60446),
        a = s.n(l),
        o = s(70579);
      function d(e) {
        return (0, o.jsx)(r.$, {
          dateAdapter: t.R,
          children: (0, o.jsx)(i.l, {
            format: 'DD/MM/YYYY',
            ...e,
            value: e.value ? a()(e.value) : null,
            slotProps: { textField: { size: 'small', fullWidth: !0 } }
          })
        });
      }
    },
    63656: (e, n, s) => {
      s.d(n, { A: () => a });
      s(65043);
      var t = s(11906),
        i = s(85865),
        r = s(36134),
        l = s(70579);
      function a(e) {
        return (0, l.jsx)(t.A, {
          ...e,
          variant: 'outlined',
          color: 'secondary',
          startIcon: (0, l.jsx)(r.A, { fontSize: 'large' }),
          sx: { borderRadius: 5 },
          children: (0, l.jsx)(i.A, {
            textTransform: 'none',
            children: 'Ch\u1ec9nh s\u1eeda'
          })
        });
      }
    },
    58555: (e, n, s) => {
      s.d(n, { A: () => l });
      var t = s(65043),
        i = s(89577),
        r = s(70579);
      const l = t.forwardRef(function (e, n) {
        const { onChange: s, ...t } = e;
        return (0, r.jsx)(i.HG, {
          ...t,
          getInputRef: n,
          onValueChange: (n) => {
            s({ target: { name: e.name, value: n.value } });
          },
          thousandSeparator: !0,
          valueIsNumericString: !0
        });
      });
    },
    49768: (e, n, s) => {
      s.d(n, { A: () => o });
      s(65043);
      var t = s(79190),
        i = s(32143),
        r = s(53193),
        l = s(72221),
        a = s(70579);
      function o(e) {
        const { options: n = [], label: s, labelmargintop: o = 0 } = e;
        return (0, a.jsxs)(r.A, {
          fullWidth: !0,
          children: [
            (0, a.jsx)(t.A, { size: 'small', sx: { mt: o }, children: s }),
            (0, a.jsx)(l.A, {
              size: 'small',
              ...e,
              children: n.map((e, n) =>
                (0, a.jsx)(i.A, { value: e.value, children: e.label }, n)
              )
            })
          ]
        });
      }
    },
    95851: (e, n, s) => {
      s.d(n, { A: () => r });
      var t = s(67784),
        i = s(70579);
      const r = (e) => (0, i.jsx)(t.A, { size: 'small', fullWidth: !0, ...e });
    },
    52247: (e, n, s) => {
      s.d(n, {
        ZK: () => c,
        n7: () => o,
        nb: () => h,
        qz: () => d,
        rN: () => a
      });
      var t = s(85865),
        i = s(65099),
        r = s(70579);
      const l = (e, n, s, i) => {
          const l = new RegExp(''.concat(i, '/'), 'g');
          return (0, r.jsxs)(t.A, {
            color: 'error',
            my: 1,
            fontWeight: 700,
            fontSize: 13,
            children: [
              e,
              ' ph\u1ea3i c\xf3 \u0111\u1ecbnh d\u1ea1ng\xa0',
              n.join(', ').replace(l, '.'),
              ' v\xe0 dung l\u01b0\u1ee3ng',
              ' ',
              ' <='.concat(s / 1024 / 1024, 'MB')
            ]
          });
        },
        a = l(
          '\u1ea2nh \u0111\u1ea1i di\u1ec7n',
          i.tR.acceptTypes,
          i.tR.acceptSize,
          'image'
        ),
        o = l('\u1ea2nh b\xeca', i.YP.acceptTypes, i.YP.acceptSize, 'image'),
        d = l('CV', i.BZ.acceptTypes, i.BZ.acceptSize, 'application'),
        c = (0, r.jsx)(t.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'R\u1ea5t ti\u1ebfc, h\u1ec7 th\u1ed1ng ch\u1ec9 c\xf3 th\u1ec3 ph\xe2n t\xedch h\u1ed3 s\u01a1 ch\u1ee9a t\u1ed1i \u0111a 4000 t\u1eeb. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        }),
        h = (0, r.jsx)(t.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'Kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c n\u1ed9i dung trong file h\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        });
    },
    65099: (e, n, s) => {
      s.d(n, { BZ: () => r, XS: () => t, YP: () => l, tR: () => i });
      const t = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        i = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        r = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        l = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    37130: (e, n, s) => {
      s.d(n, { A: () => w });
      var t = s(65043),
        i = s(19252),
        r = s(19464),
        l = s(85865),
        a = s(39336),
        o = s(68903),
        d = s(51787),
        c = s(33173),
        h = s(49768),
        u = s(95851),
        x = s(24524),
        m = s(24858),
        p = s(25650),
        g = s(58555),
        A = s(63656),
        j = s(80881),
        f = s(56743),
        v = s(81670),
        y = s(73815),
        b = s(70579);
      const S = [188, 13];
      function k(e) {
        const {
            suggestions: n,
            onChange: s,
            forwardedRef: i,
            value: l,
            placeholder: a
          } = e,
          [o, d] = t.useState(l || []);
        return (
          (0, t.useEffect)(() => {
            (null === l || void 0 === l ? void 0 : l.length) && d(l);
          }, [l]),
          (0, b.jsx)(r.A, {
            ref: i,
            sx: {
              width: '100%',
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px'
            },
            children: (0, b.jsx)(y.ID, {
              tags: o,
              suggestions: n,
              delimiters: S,
              handleDelete: (e) => {
                const n =
                  null === o || void 0 === o
                    ? void 0
                    : o.filter((n, s) => s !== e);
                s(n), d(n);
              },
              handleAddition: (e) => {
                const n = [...o, e];
                s(n), d(n);
              },
              handleTagClick: (e) => {},
              maxTags: 5,
              maxLength: 25,
              allowDragDrop: !1,
              placeholder:
                a ||
                'Li\u1ec7t k\xea t\u1ed1i \u0111a '.concat(
                  5,
                  ' t\u1eeb kh\xf3a'
                )
            })
          })
        );
      }
      var C = s(51908);
      const w = (e) => {
        let { data: n, options: s, onSubmit: y } = e;
        const {
            control: S,
            reset: w,
            handleSubmit: z,
            formState: { errors: W }
          } = (0, m.mN)({
            defaultValues: {
              jobTitle: '',
              profession: '',
              currentPosition: '',
              desiredPosition: '',
              desiredSalary: null,
              degree: '',
              experience: '',
              workAddress: '',
              employmentType: '',
              careerGoal: '',
              skills: ''
            }
          }),
          T = t.useRef(null),
          [D, I] = (0, t.useState)(!1),
          [M, R] = (0, t.useState)(null),
          q = (e) => ({
            ...e,
            profession: (0, p.$6)(
              null === e || void 0 === e ? void 0 : e.profession
            ),
            workAddress: (0, p.$6)(
              null === e || void 0 === e ? void 0 : e.workAddress
            ),
            skills: (0, p.B3)(M)
          });
        return (
          (0, t.useEffect)(() => {
            w(n),
              (null === n || void 0 === n ? void 0 : n.skills) &&
                R((0, p.Bn)(null === n || void 0 === n ? void 0 : n.skills));
          }, [n]),
          (0, b.jsxs)(i.A, {
            id: 'general',
            children: [
              (0, b.jsxs)(r.A, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                  (0, b.jsx)(r.A, {
                    display: 'flex',
                    children: (0, b.jsx)(l.A, {
                      fontWeight: 700,
                      fontSize: 21,
                      lineHeight: 3,
                      children: 'Th\xf4ng tin chung'
                    })
                  }),
                  D && (0, b.jsx)(A.A, { onClick: () => I(!1) })
                ]
              }),
              (0, b.jsx)(a.A, {}),
              D
                ? (0, b.jsx)(v.A, {
                    user: {
                      ...n,
                      degree: f.Ry[n.degree] ? f.Ry[n.degree] : n.degree
                    }
                  })
                : (0, b.jsxs)(o.Ay, {
                    sx: { mt: 1 },
                    py: 2,
                    children: [
                      (0, b.jsxs)(o.Ay, {
                        container: !0,
                        mb: 4,
                        spacing: 3,
                        children: [
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(u.A, {}),
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'jobTitle',
                              label: 'V\u1ecb tr\xed mong mu\u1ed1n',
                              name: 'jobTitle',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(x.A, {}),
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'profession',
                              label: 'Ngh\u1ec1 nghi\u1ec7p',
                              name: 'profession',
                              options: s.profession,
                              required: !0,
                              disabled: D,
                              defaultValue:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.profession
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(h.A, {}),
                              options: s.positionLevel,
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'currentPosition',
                              label: 'C\u1ea5p b\u1eadc hi\u1ec7n t\u1ea1i',
                              name: 'currentPosition',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(h.A, {}),
                              options: s.positionLevel,
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'desiredPosition',
                              label: 'C\u1ea5p b\u1eadc mong mu\u1ed1n',
                              name: 'desiredPosition',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(u.A, {}),
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'desiredSalary',
                              label: 'M\u1ee9c l\u01b0\u01a1ng mong mu\u1ed1n',
                              name: 'desiredSalary',
                              pattern: 'integer',
                              required: !0,
                              disabled: D,
                              InputProps: {
                                inputComponent: g.A,
                                endAdornment: (0, b.jsx)(d.A, {
                                  position: 'end',
                                  children: 'tri\u1ec7u VN\u0110'
                                })
                              }
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(h.A, {}),
                              options: s.degree,
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'degree',
                              label: 'Tr\xecnh \u0111\u1ed9 h\u1ecdc v\u1ea5n',
                              name: 'degree',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(h.A, {}),
                              options: s.experience,
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'experience',
                              label: 'S\u1ed1 n\u0103m kinh nghi\u1ec7m',
                              name: 'experience',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(h.A, {}),
                              options: s.workingForm,
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'employmentType',
                              label: 'H\xecnh th\u1ee9c l\xe0m vi\u1ec7c',
                              name: 'employmentType',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(x.A, {}),
                              options: s.workAddress,
                              control: S,
                              errors: W,
                              defaultValue:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.workAddress,
                              fullWidth: !0,
                              id: 'workAddress',
                              label: '\u0110\u1ecba ch\u1ec9 l\xe0m vi\u1ec7c',
                              name: 'workAddress',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsx)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: (0, b.jsx)(c.A, {
                              element: (0, b.jsx)(u.A, {}),
                              control: S,
                              errors: W,
                              fullWidth: !0,
                              id: 'careerGoal',
                              label: 'M\u1ee5c ti\xeau ngh\u1ec1 nghi\u1ec7p',
                              name: 'careerGoal',
                              required: !0,
                              disabled: D
                            })
                          }),
                          (0, b.jsxs)(o.Ay, {
                            item: !0,
                            xs: 12,
                            children: [
                              (0, b.jsx)(k, {
                                suggestions: C.A,
                                forwardedRef: T,
                                value: M,
                                onChange: R
                              }),
                              (0, b.jsx)(l.A, {
                                fontSize: 12,
                                color: 'secondary',
                                fontStyle: 'italic',
                                sx: {
                                  display: 'flex',
                                  justifyContent: 'center'
                                },
                                children:
                                  'H\xe3y li\u1ec7t k\xea t\u1ed1i \u0111a 10 t\u1eeb kh\xf3a. V\xed d\u1ee5: Python, ReactJS, HTML, Go... S\u1ebd gi\xfap h\u1ec7 th\u1ed1ng t\xecm ki\u1ebfm \u0111\u01b0\u1ee3c doanh nghi\u1ec7p ph\xf9 h\u1ee3p v\u1edbi h\u1ed3 s\u01a1 b\u1ea1n nh\u1ea5t'
                              })
                            ]
                          })
                        ]
                      }),
                      !D &&
                        (0, b.jsx)(j.A, {
                          handleSubmit: z((e) => {
                            const n = q(e);
                            y(n), I(!0);
                          }),
                          handleCancel: () => {
                            w(n), I(!0);
                          }
                        })
                    ]
                  })
            ]
          })
        );
      };
    },
    52047: (e, n, s) => {
      s.d(n, { A: () => E });
      var t = s(65043),
        i = s(34535),
        r = s(19252),
        l = s(19464),
        a = s(85865),
        o = s(39336),
        d = s(68903),
        c = s(81045),
        h = s(11906),
        u = s(91281),
        x = s(44046),
        m = s(81637),
        p = s(33173),
        g = s(49768),
        A = s(67002),
        j = s(95851),
        f = s(63656),
        v = s(24858),
        y = s(60446),
        b = s.n(y),
        S = s(36110),
        k = s(70737),
        C = s(17913),
        w = s(69570),
        z = s(65099),
        W = s(25650),
        T = s(80881),
        D = s(52247),
        I = s(25172),
        M = s(40542),
        R = s(70579);
      const q = (0, i.Ay)('input')({ display: 'none' });
      function E() {
        var e;
        const [n, s] = (0, t.useState)({
            avatar: null,
            avatarError: !1,
            storageAvatar: null,
            uploadFile: null
          }),
          { user: i, setUserApp: y } = (0, S.n)(),
          { onSaveData: E } = (0, I.A)(),
          { onSaveData: P } = (0, k.A)(),
          { acceptTypes: V, acceptSize: L } = z.tR,
          [N, Y] = (0, t.useState)(!1),
          [_, H] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          K(G), F();
        }, [i]);
        const F = async () => {
            const e = await (0, w.TL)(
              null === i || void 0 === i ? void 0 : i.avatar
            ).catch(() => '');
            s({ ...n, avatar: e, storageAvatar: e });
          },
          B = (e) => {
            const t = e.target.files[0];
            if (!t) return;
            if (!V.includes(t.type) || t.size > L)
              return void s({ ...n, avatarError: !0 });
            const i = URL.createObjectURL(t);
            s({ ...n, avatar: i, uploadFile: t, avatarError: !1 });
          },
          G = {
            ...i,
            dob: (0, W.vd)(i.dob, 'DD-MM-YYYY'),
            sex:
              null === (e = C.im.find((e) => e.label === i.sex)) || void 0 === e
                ? void 0
                : e.value,
            isMarried: i.isMarried
              ? '\u0110\xe3 k\u1ebft h\xf4n'
              : '\u0110\u1ed9c th\xe2n'
          },
          {
            control: Z,
            reset: K,
            handleSubmit: O,
            formState: { errors: Q }
          } = (0, v.mN)({ defaultValues: G });
        return (0, R.jsxs)(r.A, {
          id: 'personal',
          children: [
            (0, R.jsxs)(l.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              children: [
                (0, R.jsx)(l.A, {
                  display: 'flex',
                  children: (0, R.jsx)(a.A, {
                    fontWeight: 700,
                    fontSize: 21,
                    lineHeight: 3,
                    children: 'Th\xf4ng tin c\xe1 nh\xe2n'
                  })
                }),
                N && (0, R.jsx)(f.A, { onClick: () => Y(!1) })
              ]
            }),
            (0, R.jsx)(o.A, {}),
            (0, R.jsxs)(d.Ay, {
              container: !0,
              sx: { mt: 1 },
              py: 2,
              children: [
                (0, R.jsx)(d.Ay, {
                  item: !0,
                  xs: 3,
                  pr: 2,
                  children: (0, R.jsxs)(l.A, {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: 2,
                    children: [
                      (0, R.jsx)(c.A, {
                        alt: i.name,
                        src: n.avatar,
                        sx: {
                          borderRadius: 2,
                          width: '75%',
                          height: 180,
                          bgcolor: '#a0b9cfc2'
                        }
                      }),
                      !n.avatar &&
                        !N &&
                        (0, R.jsx)('label', {
                          htmlFor: 'userAvatar',
                          children: (0, R.jsxs)(h.A, {
                            component: 'label',
                            size: 'small',
                            startIcon: (0, R.jsx)(u.A, {}),
                            variant: 'text',
                            color: 'secondary',
                            children: [
                              (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(q, {
                                  type: 'file',
                                  accept: 'image/*'
                                }),
                                control: Z,
                                name: 'userAvatar',
                                id: 'userAvatar',
                                label: '\u1ea2nh \u0111\u1ea1i di\u1ec7n',
                                onChange: B
                              }),
                              (0, R.jsx)(a.A, {
                                sx: { fontSize: 15, fontWeight: 700 },
                                children: 'T\u1ea3i l\xean'
                              })
                            ]
                          })
                        }),
                      n.avatar &&
                        !N &&
                        (0, R.jsxs)(l.A, {
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          children: [
                            (0, R.jsxs)(h.A, {
                              component: 'label',
                              size: 'small',
                              startIcon: (0, R.jsx)(u.A, {}),
                              variant: 'text',
                              color: 'secondary',
                              children: [
                                (0, R.jsx)(p.A, {
                                  element: (0, R.jsx)(q, {
                                    type: 'file',
                                    accept: 'image/*'
                                  }),
                                  control: Z,
                                  name: 'userAvatar',
                                  id: 'userAvatar',
                                  label: '\u1ea2nh \u0111\u1ea1i di\u1ec7n',
                                  onChange: B
                                }),
                                (0, R.jsx)(a.A, {
                                  sx: { fontSize: 15, fontWeight: 700 },
                                  children: 'Thay \u0111\u1ed5i'
                                })
                              ]
                            }),
                            (0, R.jsx)(h.A, {
                              component: 'label',
                              onClick: () => {
                                s({ ...n, avatar: null, avatarError: !1 });
                              },
                              size: 'small',
                              startIcon: (0, R.jsx)(x.A, {}),
                              variant: 'text',
                              color: 'secondary',
                              children: (0, R.jsx)(a.A, {
                                sx: { fontSize: 15, fontWeight: 700 },
                                children: 'X\xf3a'
                              })
                            })
                          ]
                        }),
                      n.avatarError && D.rN
                    ]
                  })
                }),
                (0, R.jsxs)(d.Ay, {
                  item: !0,
                  xs: 9,
                  children: [
                    N
                      ? (0, R.jsx)(M.A, { user: i })
                      : (0, R.jsxs)(d.Ay, {
                          container: !0,
                          mb: 4,
                          spacing: 3,
                          children: [
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(j.A, {}),
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'name',
                                label: 'H\u1ecd v\xe0 t\xean',
                                name: 'name',
                                required: !0,
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(j.A, {}),
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'email',
                                label: 'Email',
                                name: 'email',
                                pattern: 'email',
                                required: !0,
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(j.A, {}),
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'phone',
                                label: 'S\u1ed1 \u0111i\u1ec7n tho\u1ea1i',
                                name: 'phone',
                                pattern: 'phone',
                                required: !0,
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(A.A, { maxDate: b()() }),
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'dob',
                                label: 'Ng\xe0y sinh',
                                name: 'dob',
                                required: !0,
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(g.A, {}),
                                options: C.im,
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'sex',
                                label: 'Gi\u1edbi t\xednh',
                                name: 'sex',
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              sm: 6,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(g.A, {}),
                                options: C.Fg,
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'isMarried',
                                label: 'T\xecnh tr\u1ea1ng h\xf4n nh\xe2n',
                                name: 'isMarried',
                                disabled: N
                              })
                            }),
                            (0, R.jsx)(d.Ay, {
                              item: !0,
                              xs: 12,
                              children: (0, R.jsx)(p.A, {
                                element: (0, R.jsx)(j.A, {}),
                                control: Z,
                                errors: Q,
                                fullWidth: !0,
                                id: 'address',
                                label: '\u0110\u1ecba ch\u1ec9',
                                name: 'address',
                                required: !0,
                                disabled: N
                              })
                            })
                          ]
                        }),
                    !N &&
                      (0, R.jsx)(l.A, {
                        display: 'flex',
                        justifyContent: 'center',
                        sx: { gap: 3 },
                        children: _
                          ? (0, R.jsx)(m.A, { size: 20 })
                          : (0, R.jsx)(T.A, {
                              handleSubmit: O(async (e) => {
                                var s;
                                H(!0);
                                let t = i.avatar;
                                n.uploadFile &&
                                  (t = await (0, w.QM)(n.uploadFile).catch(
                                    () => ''
                                  )),
                                  n.avatar ||
                                    (await (0, w.Vr)(i.avatar), (t = ''));
                                const r = {
                                  ...e,
                                  dob: (0, W._g)(e.dob),
                                  isMarried:
                                    '\u0110\xe3 k\u1ebft h\xf4n' === e.isMarried
                                      ? '1'
                                      : '0',
                                  avatar: t
                                };
                                y({
                                  ...r,
                                  isMarried: '1' === r.isMarried,
                                  sex:
                                    null ===
                                      (s = C.im.find(
                                        (e) => e.value === r.sex
                                      )) || void 0 === s
                                      ? void 0
                                      : s.label,
                                  avatar: t
                                }),
                                  P(r),
                                  E(r),
                                  H(!1),
                                  Y(!0);
                              }),
                              handleCancel: () => {
                                K(G),
                                  s({ ...n, avatar: n.storageAvatar }),
                                  Y(!0);
                              }
                            })
                      })
                  ]
                })
              ]
            })
          ]
        });
      }
    },
    9052: (e, n, s) => {
      s.d(n, { A: () => r });
      var t = s(34535),
        i = s(19464);
      const r = (0, t.Ay)(i.A)((e) => {
        let { theme: n } = e;
        return {
          background: '#ffff',
          height: 70,
          width: '100%',
          boxShadow: '0px 0px 10px #aae2f7',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          position: 'sticky',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: n.spacing(4)
        };
      });
    },
    39045: (e, n, s) => {
      s.d(n, { A: () => d });
      var t = s(35721),
        i = s(71322),
        r = s(85865),
        l = s(11906),
        a = s(68903),
        o = s(70579);
      const d = (e) => {
        let { sections: n } = e;
        return (0, o.jsxs)(t.A, {
          component: 'nav',
          sx: { px: 0 },
          children: [
            (0, o.jsx)(i.Ay, {
              children: (0, o.jsx)(r.A, {
                fontSize: 14,
                fontWeight: 700,
                children:
                  'H\u1ed3 s\u01a1 tr\u1ef1c tuy\u1ebfn c\u1ee7a b\u1ea1n'
              })
            }),
            n.map((e) =>
              (0, o.jsx)(
                i.Ay,
                {
                  sx: { p: 0 },
                  children: (0, o.jsx)(l.A, {
                    sx: { py: 1 },
                    fullWidth: !0,
                    onClick: () =>
                      ((e) => {
                        const n = document.getElementById(e);
                        n && n.scrollIntoView({ behavior: 'smooth' });
                      })(e.id),
                    color: 'secondary',
                    children: (0, o.jsxs)(a.Ay, {
                      container: !0,
                      children: [
                        (0, o.jsx)(a.Ay, {
                          item: !0,
                          xs: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          children: e.icon
                        }),
                        (0, o.jsx)(a.Ay, {
                          item: !0,
                          xs: 10,
                          display: 'flex',
                          justifyContent: 'left',
                          alignItems: 'center',
                          children: (0, o.jsx)(r.A, {
                            fontSize: 13,
                            children: e.title
                          })
                        })
                      ]
                    })
                  })
                },
                e.id
              )
            )
          ]
        });
      };
    },
    25172: (e, n, s) => {
      s.d(n, { A: () => l });
      var t = s(82907),
        i = s(36110),
        r = s(15001);
      const l = () => {
        const { toast: e, setUserApp: n } = (0, i.n)(),
          s = r.nZ.create,
          { mutate: l, isLoading: a } = (0, t.useMutation)(s, {
            onSuccess: (s) => {
              200 === s.status
                ? (e.success({ massage: s.message }),
                  n({ avatar: s.data.avatar }))
                : e.error({ massage: s.message });
            },
            onError: (n) => {
              e.error({ massage: n.response.data.message });
            }
          });
        return { onSaveData: l, isLoading: a };
      };
    },
    70737: (e, n, s) => {
      s.d(n, { A: () => l });
      var t = s(82907),
        i = s(36110),
        r = s(15001);
      const l = () => {
        const e = (0, t.useQueryClient)(),
          { toast: n } = (0, i.n)(),
          s = r.OY.create,
          { mutate: l, isLoading: a } = (0, t.useMutation)(s, {
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
        return { onSaveData: l, isLoading: a };
      };
    },
    78910: (e, n, s) => {
      s.d(n, { V: () => r, Z: () => t });
      const t = (e, n) => {
        if (e.length <= 0 && !Boolean(e[0])) return;
        const s = e[0],
          t = s.indexOf('[');
        if (-1 === t)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 '['"
          );
        const i = s.lastIndexOf(']');
        if (-1 === i)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 ']'"
          );
        const r = s.substring(t + 1, i).replace(/["]/g, '');
        console.log('extractedString: ', r);
        const l = r.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g, '');
        console.log('jsonString: ', l);
        const a = l.split(',');
        console.log('keywordArray', a);
        const o = a.slice(0, 20);
        return (
          console.log(
            'keywordList?.join(',
            ')',
            null === o || void 0 === o ? void 0 : o.join(', ')
          ),
          null === o || void 0 === o ? void 0 : o.join(', ')
        );
      };
      const i = (e, n, s) => {
        if ('online' === n) {
          var t;
          const n = e;
          return {
            jobTitle: null === n || void 0 === n ? void 0 : n.jobTitle,
            profession: null === n || void 0 === n ? void 0 : n.profession,
            work_experiences:
              null === n || void 0 === n
                ? void 0
                : n.work_experiences.map((e) => ({
                    jobTitle: e.jobTitle,
                    jobDescription: e.jobDescription
                  })),
            education_informations:
              null === n || void 0 === n
                ? void 0
                : n.education_informations.map((e) => e.specialization),
            another_degrees:
              null === n ||
              void 0 === n ||
              null === (t = n.another_degrees) ||
              void 0 === t
                ? void 0
                : t.map((e) => e.degreeName)
          };
        }
        return {
          jobTitle: null === e || void 0 === e ? void 0 : e.jobTitle,
          profession: null === e || void 0 === e ? void 0 : e.profession,
          cvContent: s
        };
      };
      function r(e, n, s) {
        return i(e, n, s);
      }
    }
  }
]);
//# sourceMappingURL=240.80441010.chunk.js.map