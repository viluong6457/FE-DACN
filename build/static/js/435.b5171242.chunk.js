(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [435],
  {
    97691: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => s });
      t(65043);
      var i = t(85865),
        n = t(70579);
      const s = (e) => {
        let { acceptTypes: o, acceptSize_MB: t } = e;
        return (0, n.jsxs)(i.A, {
          fontSize: 13,
          color: 'grey.600',
          mt: 1,
          children: [
            '\u0110\u1ecbnh d\u1ea1ng file ',
            o.join(', ').replace(/application\//g, '.'),
            ' v\xe0 dung l\u01b0\u1ee3ng ',
            ' <= '.concat(t, ' MB')
          ]
        });
      };
    },
    46783: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => c });
      var i = t(65043),
        n = t(16520),
        s = t(59454),
        l = t(19464),
        r = t(70579);
      function c(e) {
        const { isFollow: o } = e,
          [t, c] = (0, i.useState)(o);
        return (
          (0, i.useEffect)(() => {
            c(o);
          }, [o]),
          (0, r.jsx)(l.A, {
            onClick: (e) => {
              c((e) => !e);
            },
            sx: { display: 'flex', alignItem: 'center' },
            children: t
              ? (0, r.jsx)(n.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
              : (0, r.jsx)(s.A, {
                  sx: {
                    display: 'flex',
                    color: 'red',
                    '&:hover': { color: 'darkred' }
                  }
                })
          })
        );
      }
    },
    29773: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => r });
      var i = t(34535),
        n = (t(65043), t(51318)),
        s = t(70579);
      const l = (0, i.Ay)(n.N_)((e) => {
          let { theme: o } = e;
          return {
            textDecoration: 'none',
            color: o.colors.info.dark,
            '&:active': { color: o.colors.primary.light },
            '&:visited': { color: o.colors.info.dark }
          };
        }),
        r = (e) => (0, s.jsx)(l, { ...e });
    },
    52247: (e, o, t) => {
      'use strict';
      t.d(o, {
        ZK: () => d,
        n7: () => c,
        nb: () => u,
        qz: () => a,
        rN: () => r
      });
      var i = t(85865),
        n = t(65099),
        s = t(70579);
      const l = (e, o, t, n) => {
          const l = new RegExp(''.concat(n, '/'), 'g');
          return (0, s.jsxs)(i.A, {
            color: 'error',
            my: 1,
            fontWeight: 700,
            fontSize: 13,
            children: [
              e,
              ' ph\u1ea3i c\xf3 \u0111\u1ecbnh d\u1ea1ng\xa0',
              o.join(', ').replace(l, '.'),
              ' v\xe0 dung l\u01b0\u1ee3ng',
              ' ',
              ' <='.concat(t / 1024 / 1024, 'MB')
            ]
          });
        },
        r = l(
          '\u1ea2nh \u0111\u1ea1i di\u1ec7n',
          n.tR.acceptTypes,
          n.tR.acceptSize,
          'image'
        ),
        c = l('\u1ea2nh b\xeca', n.YP.acceptTypes, n.YP.acceptSize, 'image'),
        a = l('CV', n.BZ.acceptTypes, n.BZ.acceptSize, 'application'),
        d = (0, s.jsx)(i.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'R\u1ea5t ti\u1ebfc, h\u1ec7 th\u1ed1ng ch\u1ec9 c\xf3 th\u1ec3 ph\xe2n t\xedch h\u1ed3 s\u01a1 ch\u1ee9a t\u1ed1i \u0111a 4000 t\u1eeb. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        }),
        u = (0, s.jsx)(i.A, {
          color: 'error',
          my: 1,
          fontWeight: 700,
          fontSize: 13,
          children:
            'Kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c n\u1ed9i dung trong file h\u1ed3 s\u01a1 c\u1ee7a b\u1ea1n. Vui l\xf2ng t\u1ea3i h\u1ed3 s\u01a1 kh\xe1c !'
        });
    },
    65099: (e, o, t) => {
      'use strict';
      t.d(o, { BZ: () => s, XS: () => i, YP: () => l, tR: () => n });
      const i = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        n = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 1048576
        },
        s = { acceptTypes: ['application/pdf'], acceptSize: 2097152 },
        l = {
          acceptTypes: ['image/jpeg', 'image/png', 'image/gif'],
          acceptSize: 4194304
        };
    },
    55517: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => p });
      var i = t(65043),
        n = t(2384),
        s = t(19464),
        l = t(82907),
        r = t(36110),
        c = t(53679);
      const a = () => {
        const e = (0, l.useQueryClient)(),
          { toast: o } = (0, r.n)(),
          { mutate: t, isLoading: i } = (0, l.useMutation)(
            (e) => {
              let [o] = e;
              return c.Ew.create({ jobPosting: o });
            },
            {
              onSuccess: (t) => {
                200 === t.status
                  ? (e.invalidateQueries(['get-FollowJobs']),
                    o.success({ massage: t.message }))
                  : o.error({ massage: t.message });
              },
              onError: (e) => {
                o.error({ massage: e.response.data.message });
              }
            }
          );
        return { onFollowJobById: t, isLoading: i };
      };
      var d = t(46783),
        u = t(70579);
      function p(e) {
        const { job: o, sx: t } = e,
          { jobFollow: l } = (0, n.A)(),
          { onFollowJobById: c } = a(),
          { isEmployee: p } = (0, r.n)(),
          [h, x] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(() => {
            (null === l || void 0 === l
              ? void 0
              : l.find(
                  (e) =>
                    e.postId ===
                    (null === o || void 0 === o ? void 0 : o.postId)
                )) && x(!0);
          }, [l, o]),
          o && p)
        )
          return (0, u.jsx)(s.A, {
            onClick: () => {
              return (
                (e = null === o || void 0 === o ? void 0 : o.postId),
                c([e]),
                void x((e) => !e)
              );
              var e;
            },
            sx: { display: 'flex', alignItem: 'center', ...t },
            children: (0, u.jsx)(d.A, { isFollow: h })
          });
      }
    },
    17796: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => j });
      var i = t(65043),
        n = t(12110),
        s = t(79958),
        l = t(19464),
        r = t(26494),
        c = t(68903),
        a = t(81045),
        d = t(85865),
        u = t(51726),
        p = t(15505),
        h = t(22200),
        x = t(29773),
        v = t(65099),
        g = t(55517),
        f = t(54367),
        m = t(70579);
      const j = function (e) {
        var o, t;
        let { job: j } = e;
        const [A, y] = (0, i.useState)(
          (null === j ||
          void 0 === j ||
          null === (o = j.employer) ||
          void 0 === o
            ? void 0
            : o.logo) || v.XS.companyAvatar
        );
        return (0, m.jsxs)(n.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: 170
          },
          children: [
            (0, m.jsx)(s.A, {
              sx: {
                py: 1,
                color: '#aa720a',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                whiteSpace: 'normal',
                height: '3.5em'
              },
              title: (0, m.jsxs)(l.A, {
                display: 'flex',
                children: [
                  (0, m.jsx)(l.A, {
                    component: x.A,
                    to: '/job/'
                      .concat(
                        (0, f.O)(
                          null === j || void 0 === j ? void 0 : j.jobTitle
                        ),
                        '?id='
                      )
                      .concat(
                        btoa(null === j || void 0 === j ? void 0 : j.postId)
                      ),
                    state: {
                      postId: null === j || void 0 === j ? void 0 : j.postId
                    },
                    flex: 1,
                    sx: { ':hover': { color: '#ce8b0e' } },
                    children: null === j || void 0 === j ? void 0 : j.jobTitle
                  }),
                  (0, m.jsx)(g.A, { job: j })
                ]
              })
            }),
            (0, m.jsx)(r.A, {
              sx: { display: 'flex', flexDirection: 'row', gap: 4, pt: 1 },
              children: (0, m.jsxs)(c.Ay, {
                container: !0,
                spacing: 2,
                children: [
                  (0, m.jsx)(c.Ay, {
                    item: !0,
                    md: 4,
                    sm: 6,
                    xs: 3,
                    children: (0, m.jsx)(a.A, {
                      src: A,
                      variant: 'rounded',
                      sx: { width: 100, height: 90, objectFit: 'cover' }
                    })
                  }),
                  (0, m.jsx)(c.Ay, {
                    item: !0,
                    md: 8,
                    sm: 6,
                    xs: 9,
                    children: (0, m.jsxs)(l.A, {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      children: [
                        (0, m.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, m.jsx)(u.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, m.jsx)(d.A, {
                              sx: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                whiteSpace: 'normal',
                                maxWidth: '90%'
                              },
                              children:
                                null === j ||
                                void 0 === j ||
                                null === (t = j.employer) ||
                                void 0 === t
                                  ? void 0
                                  : t.companyName
                            })
                          ]
                        }),
                        (0, m.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, m.jsx)(p.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, m.jsx)(d.A, {
                              color: 'secondary',
                              fontWeight: 700,
                              children:
                                (null !== j && void 0 !== j && j.minSalary) ||
                                (null !== j && void 0 !== j && j.maxSalary)
                                  ? ''
                                      .concat(
                                        (null === j || void 0 === j
                                          ? void 0
                                          : j.minSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' - '
                                      )
                                      .concat(
                                        (null === j || void 0 === j
                                          ? void 0
                                          : j.maxSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' tri\u1ec7u'
                                      )
                                  : 'Th\u01b0\u01a1ng l\u01b0\u1ee3ng'
                            })
                          ]
                        }),
                        (0, m.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, m.jsx)(h.A, {
                              sx: { maxHeight: 18, color: 'grey.700' }
                            }),
                            (0, m.jsx)(d.A, {
                              sx: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '90%'
                              },
                              children:
                                null === j || void 0 === j
                                  ? void 0
                                  : j.workAddress
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
        });
      };
    },
    2384: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => l });
      var i = t(82907),
        n = t(53679),
        s = t(36110);
      const l = (e) => {
        var o;
        const { isEmployee: t } = (0, s.n)(),
          {
            data: l,
            isLoading: r,
            refetch: c
          } = (0, i.useQuery)(
            ['get-FollowJobs', null === e || void 0 === e ? void 0 : e.page],
            () => n.Ew.get({ params: e }),
            {
              keepPreviousData: !0,
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: t
            }
          );
        return {
          jobFollow:
            null === l || void 0 === l || null === (o = l.data) || void 0 === o
              ? void 0
              : o.jobs,
          isLoading: r,
          refetch: c
        };
      };
    },
    74531: (e, o, t) => {
      'use strict';
      t.d(o, { A: () => s });
      var i = t(82907),
        n = t(53679);
      const s = (e) => {
        var o;
        const {
          data: t,
          isLoading: s,
          refetch: l
        } = (0, i.useQuery)(
          ['get-TotalResultOfJobs'],
          () => {
            for (const o in e) 'T\u1ea5t c\u1ea3' === e[o] && (e[o] = '');
            return n.Dp.get({ params: e });
          },
          { retry: 1, refetchOnWindowFocus: !1 }
        );
        return {
          totalResults:
            null === t || void 0 === t || null === (o = t.data) || void 0 === o
              ? void 0
              : o.totalResults,
          isLoading: s,
          refetch: l
        };
      };
    },
    68069: (e, o, t) => {
      'use strict';
      t.r(o), t.d(o, { default: () => D });
      var i = t(65043),
        n = t(19252),
        s = t(19464),
        l = t(85865),
        r = t(39336),
        c = t(11906),
        a = t(81637),
        d = t(68903),
        u = t(34233),
        p = t(94074),
        h = t(60386),
        x = t(12110),
        v = t(3553),
        g = t(17796),
        f = t(54567),
        m = t(74531),
        j = t(70579);
      function A(e) {
        const { id: o, profile: t } = e,
          { keywords: n, profession: r, degree: c, experience: a } = t,
          { totalResults: u } = (0, m.A)({ keywords: n }),
          [p, h] = (0, i.useState)(1),
          [A, y] = (0, i.useState)([]),
          b = Math.ceil(u / 4) || 1,
          { jobs: w } = (0, f.A)({ keywords: n, page: p, num: 4 });
        return (
          (0, i.useEffect)(() => {
            if (r && c && a) {
              w.filter((e) => r.includes(e.profession));
              y(w);
            } else y(w);
            document.getElementById(o);
          }, [JSON.stringify(w)]),
          (0, j.jsxs)(x.A, {
            sx: { borderRadius: 0, boxShadow: '2px 2px 6px #aae2f7' },
            children: [
              (0, j.jsx)(s.A, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                sx: { bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 },
                children: (0, j.jsx)(s.A, {
                  display: 'flex',
                  justifyContent: 'space-between',
                  children: (0, j.jsx)(l.A, {
                    fontWeight: 700,
                    fontSize: 20,
                    alignSelf: 'end',
                    children: 'Vi\u1ec7c l\xe0m ph\xf9 h\u1ee3p'
                  })
                })
              }),
              (0, j.jsxs)(s.A, {
                p: 3,
                children: [
                  (0, j.jsxs)(d.Ay, {
                    container: !0,
                    mb: 3,
                    spacing: 2,
                    children: [
                      A.map((e, o) =>
                        (0, j.jsx)(
                          d.Ay,
                          {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            children: (0, j.jsx)(g.A, { job: e }, o)
                          },
                          null === e || void 0 === e ? void 0 : e.postId
                        )
                      ),
                      0 === A.length &&
                        (0, j.jsx)(d.Ay, {
                          item: !0,
                          xs: 12,
                          children: (0, j.jsx)(l.A, {
                            fontSize: 16,
                            color: '#9999',
                            fontStyle: 'italic',
                            textAlign: 'center',
                            children:
                              'Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c vi\u1ec7c l\xe0m ph\xf9 h\u1ee3p'
                          })
                        })
                    ]
                  }),
                  (0, j.jsx)(v.A, {
                    totalPages: b,
                    currentPage: p,
                    handlePageChange: (e) => {
                      h(e);
                    }
                  })
                ]
              })
            ]
          })
        );
      }
      var y = t(19290),
        b = t(52247),
        w = t(65099),
        S = t(72809),
        k = t(35644),
        C = t(32109),
        z = t(69570),
        O = t(34535),
        E = t(24858),
        I = t(33173),
        T = t(62954);
      const V = (0, O.Ay)('input')({ display: 'none' }),
        F = (e) => {
          let { isLoading: o, handleUploadFile: t } = e;
          const { control: i } = (0, E.mN)({});
          return (0, j.jsx)(s.A, {
            children: (0, j.jsxs)(c.A, {
              component: 'label',
              startIcon: (0, j.jsx)(T.A, {}),
              variant: 'outlined',
              color: 'secondary',
              disabled: o,
              children: [
                (0, j.jsx)(I.A, {
                  element: (0, j.jsx)(V, { type: 'file', accept: '.pdf' }),
                  control: i,
                  name: 'CV',
                  id: 'CV',
                  label: 'CV \u0111\xednh k\xe8m',
                  onChange: t,
                  disabled: o
                }),
                'T\u1ea3i file'
              ]
            })
          });
        };
      var L = t(97691),
        W = t(88446);
      const B = (e) => {
        let { id: o, profile: t, uploadedCV: i } = e;
        const n = 'upload-cv' === o;
        return n || null === t || void 0 === t || !t.userId
          ? (0, j.jsxs)(s.A, {
              display: 'flex',
              children: [
                (0, j.jsx)(l.A, {
                  mb: 1,
                  color: 'grey.700',
                  mr: 2,
                  children: n
                    ? !i.url &&
                      (0, j.jsx)('em', {
                        children:
                          '* Vui l\xf2ng g\u1eedi l\xean CV xin vi\u1ec7c c\u1ee7a b\u1ea1n !'
                      })
                    : (0, j.jsx)('em', {
                        children:
                          '* Ch\u01b0a c\xf3 h\u1ed3 s\u01a1 trong h\u1ec7 th\u1ed1ng !'
                      })
                }),
                !n &&
                  (0, j.jsx)(W.A, {
                    href: '/employee/recruitment-profile',
                    children: (0, j.jsx)('em', {
                      children: '\u0110\u1ebfn t\u1ea1o h\u1ed3 s\u01a1'
                    })
                  })
              ]
            })
          : (0, j.jsxs)(s.A, {
              display: 'flex',
              alignItems: 'center',
              children: [
                (0, j.jsx)('img', {
                  src:
                    'online' === o
                      ? 'https://cdn-icons-png.flaticon.com/128/1309/1309245.png'
                      : 'https://cdn-icons-png.flaticon.com/512/3135/3135796.png',
                  width: 50,
                  color: 'secondary',
                  alt: 'Profile Image'
                }),
                (0, j.jsx)(l.A, {
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: 3,
                  ml: 2,
                  children: null === t || void 0 === t ? void 0 : t.jobTitle
                })
              ]
            });
      };
      var U = t(78910),
        R = t(91401);
      S.A.GlobalWorkerOptions.workerSrc =
        '//cdnjs.cloudflare.com/ajax/libs/pdf.js/'.concat(
          S.A.version,
          '/pdf.worker.js'
        );
      const _ = w.BZ.acceptTypes,
        H = w.BZ.acceptSize,
        M = w.BZ.acceptSize / 1024 / 1024,
        P = (e) => {
          const { id: o } = e,
            [t, n] = (0, i.useState)(!1),
            [x, v] = (0, i.useState)(!1),
            [g, f] = (0, i.useState)(!1),
            [m, w] = (0, i.useState)(!1),
            [S, O] = (0, i.useState)({ file: null, url: '' }),
            [E, I] = (0, i.useState)([]),
            [T, V] = (0, i.useState)(''),
            [W, P] = (0, i.useState)(null),
            [D, Z] = (0, i.useState)(!1),
            [N, Y] = (0, i.useState)([]),
            { profile: J } = (0, k.A)(),
            { profile: K } = (0, C.A)(),
            Q = (e) => _.includes(e.type) && e.size <= H,
            X = async (e) => {
              v(!1), w(!1), n(!0);
              const o = URL.createObjectURL(e);
              try {
                const t = await (0, h.A)(e),
                  i = t.split(/\s+/);
                i.length > 4e3 ? w(!0) : (O({ url: o, file: e }), Y(() => [t]));
              } catch (x) {
                console.error('Failed to extract text from pdf'), f(!0);
              } finally {
                n(!1);
              }
            };
          return (
            (0, i.useEffect)(() => {
              'online' === o ? P(J) : 'document' === o && P(K);
            }, [J, K]),
            (0, i.useEffect)(() => {
              const e = (0, U.Z)(E, JSON.stringify(N));
              V(e), Z(!1);
              const t = document.getElementById('recommend-'.concat(o));
              console.log(t), t && t.scrollIntoView({ behavior: 'smooth' });
            }, [E]),
            (0, j.jsxs)(s.A, {
              id: o,
              children: [
                (0, j.jsxs)(p.A, {
                  sx: { mb: 1, mt: 3 },
                  children: [
                    (0, j.jsx)(s.A, {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      children: (0, j.jsx)(s.A, {
                        display: 'flex',
                        children: (0, j.jsxs)(l.A, {
                          fontWeight: 700,
                          fontSize: 21,
                          lineHeight: 3,
                          children: [
                            'Ph\xe2n t\xedch H\u1ed3 s\u01a1',
                            ' ',
                            'online' === o
                              ? 'tr\u1ef1c tuy\u1ebfn'
                              : 'document' === o
                              ? '\u0111\xednh k\xe8m'
                              : 't\u1eeb m\xe1y t\xednh'
                          ]
                        })
                      })
                    }),
                    (0, j.jsx)(r.A, {}),
                    (0, j.jsxs)(s.A, {
                      py: 2,
                      children: [
                        (0, j.jsx)(B, { id: o, profile: W, uploadedCV: S }),
                        'upload-cv' === o &&
                          S.url &&
                          (0, j.jsxs)(s.A, {
                            display: 'flex',
                            children: [
                              (0, j.jsx)(u.A, {
                                sx: { width: 50, height: 50 },
                                color: 'info'
                              }),
                              (0, j.jsxs)(s.A, {
                                textAlign: 'left',
                                justifyContent: 'left',
                                component: c.A,
                                color: 'inherit',
                                width: '100%',
                                onClick: () => window.open(S.url, '_blank'),
                                children: [
                                  S.file.name,
                                  t && (0, j.jsx)(a.A, {})
                                ]
                              })
                            ]
                          }),
                        x && b.qz,
                        m && b.ZK,
                        g && b.nb,
                        (0, j.jsxs)(s.A, {
                          display: 'flex',
                          mt: 2,
                          children: [
                            (0, j.jsx)(c.A, {
                              variant: 'contained',
                              color: 'primary',
                              onClick: async () => {
                                var e;
                                if ('upload-cv' === o && !S.url) return;
                                if (
                                  'upload-cv' !== o &&
                                  (null === W || void 0 === W || !W.userId)
                                )
                                  return;
                                if (null !== W && void 0 !== W && W.keywords)
                                  return void V(
                                    null === W || void 0 === W
                                      ? void 0
                                      : W.keywords
                                  );
                                if ((Z(!0), 'upload-cv' === o)) {
                                  const e = await (0, R.A)(y.uz, N, null, {
                                    58: 5,
                                    60: 5
                                  });
                                  return void I(e);
                                }
                                const t = (0, U.V)(W, o),
                                  i =
                                    null === W ||
                                    void 0 === W ||
                                    null === (e = W.skills) ||
                                    void 0 === e
                                      ? void 0
                                      : e.split(', ');
                                if ('document' === o)
                                  try {
                                    const e = await (0, z.TL)(
                                        null === K || void 0 === K
                                          ? void 0
                                          : K.CV
                                      ),
                                      o = await fetch(e);
                                    if (!o.ok)
                                      throw new Error('Failed to fetch file');
                                    const n = await o.blob(),
                                      s = await (0, h.A)(n);
                                    Y((e) => [{ ...e, CV: s }]);
                                    const l = await (0, R.A)(
                                      y.uz,
                                      [{ ...t, CV: s }],
                                      null,
                                      { 58: 5, 60: 5 }
                                    );
                                    I([...i, ...l]);
                                  } catch (x) {
                                    console.error(
                                      'Error creating local URL:',
                                      x
                                    );
                                  }
                                else {
                                  Y(() => [t]);
                                  const e = await (0, R.A)(y.uz, [t], null, {
                                    58: 5,
                                    60: 5
                                  });
                                  I([...i, ...e]);
                                }
                              },
                              disabled:
                                D ||
                                (!(null !== W && void 0 !== W && W.userId) &&
                                  !(null !== S && void 0 !== S && S.url)),
                              sx: { mr: 2 },
                              children: 'Ph\xe2n t\xedch H\u1ed3 s\u01a1'
                            }),
                            'upload-cv' === o &&
                              (0, j.jsx)(F, {
                                isLoading: t,
                                handleUploadFile: async (e) => {
                                  f(!1);
                                  const o = e.target.files[0];
                                  o && (Q(o) ? X(o) : v(!0));
                                }
                              })
                          ]
                        }),
                        'upload-cv' === o &&
                          (0, j.jsx)(L.A, { acceptTypes: _, acceptSize_MB: M }),
                        D && (0, j.jsx)(a.A, { sx: { mx: '50%' } }),
                        T &&
                          (0, j.jsxs)(d.Ay, {
                            item: !0,
                            xs: 12,
                            children: [
                              (0, j.jsx)(r.A, {}),
                              (0, j.jsxs)(l.A, {
                                mt: 2,
                                children: [
                                  (0, j.jsx)('b', {
                                    children: 'T\u1eeb kh\xf3a:'
                                  }),
                                  ' ',
                                  (0, j.jsx)('em', { children: T })
                                ]
                              })
                            ]
                          })
                      ]
                    })
                  ]
                }),
                T && (0, j.jsx)(A, { id: o, profile: W || { keywords: T } })
              ]
            })
          );
        },
        D = () =>
          (0, j.jsxs)(n.A, {
            maxWidth: 'md',
            style: { marginTop: 30 },
            children: [
              (0, j.jsx)(P, { id: 'online' }),
              (0, j.jsx)(P, { id: 'document' }),
              (0, j.jsx)(P, { id: 'upload-cv' })
            ]
          });
    },
    78910: (e, o, t) => {
      'use strict';
      t.d(o, { V: () => s, Z: () => i });
      const i = (e, o) => {
        if (e.length <= 0 && !Boolean(e[0])) return;
        const t = e[0],
          i = t.indexOf('[');
        if (-1 === i)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 '['"
          );
        const n = t.lastIndexOf(']');
        if (-1 === n)
          return void console.log(
            "Kh\xf4ng t\xecm th\u1ea5y k\xfd t\u1ef1 ']'"
          );
        const s = t.substring(i + 1, n).replace(/["]/g, '');
        console.log('extractedString: ', s);
        const l = s.replace(/[_!@#$%^&*;|<>'"\n\t\r]/g, '');
        console.log('jsonString: ', l);
        const r = l.split(',');
        console.log('keywordArray', r);
        const c = r.slice(0, 20);
        return (
          console.log(
            'keywordList?.join(',
            ')',
            null === c || void 0 === c ? void 0 : c.join(', ')
          ),
          null === c || void 0 === c ? void 0 : c.join(', ')
        );
      };
      const n = (e, o, t) => {
        if ('online' === o) {
          var i;
          const o = e;
          return {
            jobTitle: null === o || void 0 === o ? void 0 : o.jobTitle,
            profession: null === o || void 0 === o ? void 0 : o.profession,
            work_experiences:
              null === o || void 0 === o
                ? void 0
                : o.work_experiences.map((e) => ({
                    jobTitle: e.jobTitle,
                    jobDescription: e.jobDescription
                  })),
            education_informations:
              null === o || void 0 === o
                ? void 0
                : o.education_informations.map((e) => e.specialization),
            another_degrees:
              null === o ||
              void 0 === o ||
              null === (i = o.another_degrees) ||
              void 0 === i
                ? void 0
                : i.map((e) => e.degreeName)
          };
        }
        return {
          jobTitle: null === e || void 0 === e ? void 0 : e.jobTitle,
          profession: null === e || void 0 === e ? void 0 : e.profession,
          cvContent: t
        };
      };
      function s(e, o, t) {
        return n(e, o, t);
      }
    },
    54367: (e, o, t) => {
      'use strict';
      function i(e) {
        const o = {
            '\xe0': 'a',
            '\xe1': 'a',
            '\u1ea3': 'a',
            '\xe3': 'a',
            '\u1ea1': 'a',
            '\u0103': 'a',
            '\u1eaf': 'a',
            '\u1eb1': 'a',
            '\u1eb3': 'a',
            '\u1eb5': 'a',
            '\u1eb7': 'a',
            '\xe2': 'a',
            '\u1ea5': 'a',
            '\u1ea7': 'a',
            '\u1ea9': 'a',
            '\u1eab': 'a',
            '\u1ead': 'a',
            '\u0111': 'd',
            '\xe8': 'e',
            '\xe9': 'e',
            '\u1ebb': 'e',
            '\u1ebd': 'e',
            '\u1eb9': 'e',
            '\xea': 'e',
            '\u1ebf': 'e',
            '\u1ec1': 'e',
            '\u1ec3': 'e',
            '\u1ec5': 'e',
            '\u1ec7': 'e',
            '\xec': 'i',
            '\xed': 'i',
            '\u1ec9': 'i',
            '\u0129': 'i',
            '\u1ecb': 'i',
            '\xf2': 'o',
            '\xf3': 'o',
            '\u1ecf': 'o',
            '\xf5': 'o',
            '\u1ecd': 'o',
            '\xf4': 'o',
            '\u1ed1': 'o',
            '\u1ed3': 'o',
            '\u1ed5': 'o',
            '\u1ed7': 'o',
            '\u1ed9': 'o',
            '\u01a1': 'o',
            '\u1edb': 'o',
            '\u1edd': 'o',
            '\u1edf': 'o',
            '\u1ee1': 'o',
            '\u1ee3': 'o',
            '\xf9': 'u',
            '\xfa': 'u',
            '\u1ee7': 'u',
            '\u0169': 'u',
            '\u1ee5': 'u',
            '\u01b0': 'u',
            '\u1ee9': 'u',
            '\u1eeb': 'u',
            '\u1eed': 'u',
            '\u1eef': 'u',
            '\u1ef1': 'u',
            '\u1ef3': 'y',
            '\xfd': 'y',
            '\u1ef7': 'y',
            '\u1ef9': 'y',
            '\u1ef5': 'y',
            '\xc0': 'A',
            '\xc1': 'A',
            '\u1ea2': 'A',
            '\xc3': 'A',
            '\u1ea0': 'A',
            '\u0102': 'A',
            '\u1eae': 'A',
            '\u1eb0': 'A',
            '\u1eb2': 'A',
            '\u1eb4': 'A',
            '\u1eb6': 'A',
            '\xc2': 'A',
            '\u1ea4': 'A',
            '\u1ea6': 'A',
            '\u1ea8': 'A',
            '\u1eaa': 'A',
            '\u1eac': 'A',
            '\u0110': 'D',
            '\xc8': 'E',
            '\xc9': 'E',
            '\u1eba': 'E',
            '\u1ebc': 'E',
            '\u1eb8': 'E',
            '\xca': 'E',
            '\u1ebe': 'E',
            '\u1ec0': 'E',
            '\u1ec2': 'E',
            '\u1ec4': 'E',
            '\u1ec6': 'E',
            '\xcc': 'I',
            '\xcd': 'I',
            '\u1ec8': 'I',
            '\u0128': 'I',
            '\u1eca': 'I',
            '\xd2': 'O',
            '\xd3': 'O',
            '\u1ece': 'O',
            '\xd5': 'O',
            '\u1ecc': 'O',
            '\xd4': 'O',
            '\u1ed0': 'O',
            '\u1ed2': 'O',
            '\u1ed4': 'O',
            '\u1ed6': 'O',
            '\u1ed8': 'O',
            '\u01a0': 'O',
            '\u1eda': 'O',
            '\u1edc': 'O',
            '\u1ede': 'O',
            '\u1ee0': 'O',
            '\u1ee2': 'O',
            '\xd9': 'U',
            '\xda': 'U',
            '\u1ee6': 'U',
            '\u0168': 'U',
            '\u1ee4': 'U',
            '\u01af': 'U',
            '\u1ee8': 'U',
            '\u1eea': 'U',
            '\u1eec': 'U',
            '\u1eee': 'U',
            '\u1ef0': 'U',
            '\u1ef2': 'Y',
            '\xdd': 'Y',
            '\u1ef6': 'Y',
            '\u1ef8': 'Y',
            '\u1ef4': 'Y'
          },
          t = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '_',
            '-',
            '+',
            '=',
            '{',
            '}',
            '[',
            ']',
            '|',
            '\\',
            ':',
            ';',
            '"',
            "'",
            '<',
            '>',
            ',',
            '.',
            '/',
            '?',
            ' '
          ];
        let i = '';
        for (
          var n = 0;
          n < (null === e || void 0 === e ? void 0 : e.length);
          n++
        )
          o[e[n]]
            ? (i += o[e[n]])
            : t.includes(e[n])
            ? i.endsWith('-') || (i += '-')
            : (i += e[n]);
        return i;
      }
      t.d(o, { O: () => i });
    },
    62954: (e, o, t) => {
      'use strict';
      var i = t(32392);
      o.A = void 0;
      var n = i(t(40039)),
        s = t(70579),
        l = (0, n.default)(
          (0, s.jsx)('path', {
            d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z'
          }),
          'CloudUpload'
        );
      o.A = l;
    },
    34233: (e, o, t) => {
      'use strict';
      var i = t(32392);
      o.A = void 0;
      var n = i(t(40039)),
        s = t(70579),
        l = (0, n.default)(
          (0, s.jsx)('path', {
            d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58.99 0 1.93.21 2.78.58.74.32 1.22 1.04 1.22 1.85V18z'
          }),
          'ContactPage'
        );
      o.A = l;
    },
    59454: (e, o, t) => {
      'use strict';
      var i = t(32392);
      o.A = void 0;
      var n = i(t(40039)),
        s = t(70579),
        l = (0, n.default)(
          (0, s.jsx)('path', {
            d: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
          }),
          'FavoriteBorder'
        );
      o.A = l;
    },
    15505: (e, o, t) => {
      'use strict';
      var i = t(32392);
      o.A = void 0;
      var n = i(t(40039)),
        s = t(70579),
        l = (0, n.default)(
          (0, s.jsx)('path', {
            d: 'M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z'
          }),
          'LocalAtm'
        );
      o.A = l;
    },
    22200: (e, o, t) => {
      'use strict';
      var i = t(32392);
      o.A = void 0;
      var n = i(t(40039)),
        s = t(70579),
        l = (0, n.default)(
          [
            (0, s.jsx)(
              'path',
              {
                d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z'
              },
              '0'
            ),
            (0, s.jsx)('circle', { cx: '12', cy: '9', r: '2.5' }, '1')
          ],
          'LocationOnOutlined'
        );
      o.A = l;
    },
    17406: () => {},
    69851: () => {},
    38586: () => {},
    76149: () => {},
    60933: () => {},
    9193: () => {}
  }
]);
//# sourceMappingURL=435.b5171242.chunk.js.map
