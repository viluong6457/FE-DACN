'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [308],
  {
    46783: (e, o, t) => {
      t.d(o, { A: () => a });
      var n = t(65043),
        i = t(16520),
        s = t(59454),
        l = t(19464),
        r = t(70579);
      function a(e) {
        const { isFollow: o } = e,
          [t, a] = (0, n.useState)(o);
        return (
          (0, n.useEffect)(() => {
            a(o);
          }, [o]),
          (0, r.jsx)(l.A, {
            onClick: (e) => {
              a((e) => !e);
            },
            sx: { display: 'flex', alignItem: 'center' },
            children: t
              ? (0, r.jsx)(i.A, {
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
      t.d(o, { A: () => r });
      var n = t(34535),
        i = (t(65043), t(51318)),
        s = t(70579);
      const l = (0, n.Ay)(i.N_)((e) => {
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
    30604: (e, o, t) => {
      t.d(o, { A: () => a });
      var n = t(65043),
        i = t(51318),
        s = t(70579);
      const l = { textDecoration: 'none', color: '#551a8b' },
        r = (e) => {
          e.currentTarget.style.color = '#FF7D55';
        },
        a = (0, n.forwardRef)((e, o) => {
          const { to: t, children: n, sx: a } = e;
          return (0, s.jsx)(i.N_, {
            ...e,
            to: t,
            style: { ...l, ...a },
            onMouseEnter: r,
            onMouseLeave: (e) =>
              ((e, o) => {
                e.currentTarget.style.color = o || '#551a8b';
              })(e, null === a || void 0 === a ? void 0 : a.color),
            children: n
          });
        });
    },
    20860: (e, o, t) => {
      t.d(o, { A: () => g });
      var n = t(68903),
        i = t(67784),
        s = t(51787),
        l = t(11906),
        r = t(65043),
        a = t(66360),
        c = t(30604),
        d = t(49768),
        x = t(59162),
        p = t(54367),
        u = t(70579);
      const h = [{ label: 'T\u1ea5t c\u1ea3', value: '' }, ...x.VL];
      function g(e) {
        let { to: o, sx: t } = e;
        const [x, g] = (0, r.useState)(''),
          [m, A] = (0, r.useState)('');
        return (0, u.jsxs)(n.Ay, {
          container: !0,
          display: 'flex',
          sx: { border: '1px solid #98E4FF', borderRadius: '5px', ...t },
          children: [
            (0, u.jsx)(n.Ay, {
              item: !0,
              xs: 8,
              children: (0, u.jsx)(i.A, {
                value: x,
                onChange: (e) => {
                  g(() => e.target.value);
                },
                InputProps: {
                  startAdornment: (0, u.jsx)(s.A, {
                    position: 'start',
                    children: (0, u.jsx)(a.A, {})
                  })
                },
                placeholder:
                  'Nh\u1eadp v\u1ecb tr\xed mu\u1ed1n \u1ee9ng tuy\u1ec3n',
                fullWidth: !0,
                sx: {
                  backgroundColor: 'white',
                  boxShadow: '2px 2px 6px #98E4FF'
                }
              })
            }),
            (0, u.jsx)(n.Ay, {
              item: !0,
              xs: 2,
              children: (0, u.jsx)(d.A, {
                options: h,
                onChange: (e) => {
                  A(() => e.target.value);
                },
                label: 'Ngh\u1ec1 nghi\u1ec7p',
                placeholder: 'Ngh\u1ec1 nghi\u1ec7p',
                fullWidth: !0,
                sx: {
                  backgroundColor: 'white',
                  boxShadow: '2px 2px 6px #98E4FF',
                  borderRadius: '0px'
                },
                labelmargintop: '5px',
                size: 'medium'
              })
            }),
            (0, u.jsx)(n.Ay, {
              item: !0,
              xs: 2,
              children: (0, u.jsx)(c.A, {
                to: x
                  ? ''
                      .concat(o, '/')
                      .concat((0, p.O)(m) || 'Tat-ca', '?search=')
                      .concat(x)
                  : '',
                sx: { color: '#000' },
                state: {
                  jobTitle: null === x || void 0 === x ? void 0 : x.trim(),
                  profession: m,
                  pageTitle: x
                },
                children: (0, u.jsxs)(l.A, {
                  variant: 'contained',
                  sx: { opacity: 0.8, height: '100%', borderRadius: '0px' },
                  fullWidth: !0,
                  children: [(0, u.jsx)(a.A, {}), 'T\xecm ki\u1ebfm']
                })
              })
            })
          ]
        });
      }
    },
    49768: (e, o, t) => {
      t.d(o, { A: () => a });
      t(65043);
      var n = t(79190),
        i = t(32143),
        s = t(53193),
        l = t(72221),
        r = t(70579);
      function a(e) {
        const { options: o = [], label: t, labelmargintop: a = 0 } = e;
        return (0, r.jsxs)(s.A, {
          fullWidth: !0,
          children: [
            (0, r.jsx)(n.A, { size: 'small', sx: { mt: a }, children: t }),
            (0, r.jsx)(l.A, {
              size: 'small',
              ...e,
              children: o.map((e, o) =>
                (0, r.jsx)(i.A, { value: e.value, children: e.label }, o)
              )
            })
          ]
        });
      }
    },
    65099: (e, o, t) => {
      t.d(o, { BZ: () => s, XS: () => n, YP: () => l, tR: () => i });
      const n = {
          companyAvatar:
            'https://th.bing.com/th/id/OIP.EK1rvrib-MWNflZRM2XiDQHaH_?pid=ImgDet&w=183&h=197&c=7&dpr=1.3',
          companyCover:
            'https://png.pngtree.com/background/20210706/original/pngtree-business-background-white-collar-jobs-picture-image_216619.jpg'
        },
        i = {
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
      t.d(o, { A: () => p });
      var n = t(65043),
        i = t(2384),
        s = t(19464),
        l = t(82907),
        r = t(36110),
        a = t(53679);
      const c = () => {
        const e = (0, l.useQueryClient)(),
          { toast: o } = (0, r.n)(),
          { mutate: t, isLoading: n } = (0, l.useMutation)(
            (e) => {
              let [o] = e;
              return a.Ew.create({ jobPosting: o });
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
        return { onFollowJobById: t, isLoading: n };
      };
      var d = t(46783),
        x = t(70579);
      function p(e) {
        const { job: o, sx: t } = e,
          { jobFollow: l } = (0, i.A)(),
          { onFollowJobById: a } = c(),
          { isEmployee: p } = (0, r.n)(),
          [u, h] = (0, n.useState)(!1);
        if (
          ((0, n.useEffect)(() => {
            (null === l || void 0 === l
              ? void 0
              : l.find(
                  (e) =>
                    e.postId ===
                    (null === o || void 0 === o ? void 0 : o.postId)
                )) && h(!0);
          }, [l, o]),
          o && p)
        )
          return (0, x.jsx)(s.A, {
            onClick: () => {
              return (
                (e = null === o || void 0 === o ? void 0 : o.postId),
                a([e]),
                void h((e) => !e)
              );
              var e;
            },
            sx: { display: 'flex', alignItem: 'center', ...t },
            children: (0, x.jsx)(d.A, { isFollow: u })
          });
      }
    },
    17796: (e, o, t) => {
      t.d(o, { A: () => v });
      var n = t(65043),
        i = t(12110),
        s = t(79958),
        l = t(19464),
        r = t(26494),
        a = t(68903),
        c = t(81045),
        d = t(85865),
        x = t(51726),
        p = t(15505),
        u = t(22200),
        h = t(29773),
        g = t(65099),
        m = t(55517),
        A = t(54367),
        f = t(70579);
      const v = function (e) {
        var o, t;
        let { job: v } = e;
        const [j, y] = (0, n.useState)(
          (null === v ||
          void 0 === v ||
          null === (o = v.employer) ||
          void 0 === o
            ? void 0
            : o.logo) || g.XS.companyAvatar
        );
        return (0, f.jsxs)(i.A, {
          sx: {
            border: 1,
            borderRadius: '3px',
            borderColor: '#98E4FF',
            height: 170
          },
          children: [
            (0, f.jsx)(s.A, {
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
              title: (0, f.jsxs)(l.A, {
                display: 'flex',
                children: [
                  (0, f.jsx)(l.A, {
                    component: h.A,
                    to: '/job/'
                      .concat(
                        (0, A.O)(
                          null === v || void 0 === v ? void 0 : v.jobTitle
                        ),
                        '?id='
                      )
                      .concat(
                        btoa(null === v || void 0 === v ? void 0 : v.postId)
                      ),
                    state: {
                      postId: null === v || void 0 === v ? void 0 : v.postId
                    },
                    flex: 1,
                    sx: { ':hover': { color: '#ce8b0e' } },
                    children: null === v || void 0 === v ? void 0 : v.jobTitle
                  }),
                  (0, f.jsx)(m.A, { job: v })
                ]
              })
            }),
            (0, f.jsx)(r.A, {
              sx: { display: 'flex', flexDirection: 'row', gap: 4, pt: 1 },
              children: (0, f.jsxs)(a.Ay, {
                container: !0,
                spacing: 2,
                children: [
                  (0, f.jsx)(a.Ay, {
                    item: !0,
                    md: 4,
                    sm: 6,
                    xs: 3,
                    children: (0, f.jsx)(c.A, {
                      src: j,
                      variant: 'rounded',
                      sx: { width: 100, height: 90, objectFit: 'cover' }
                    })
                  }),
                  (0, f.jsx)(a.Ay, {
                    item: !0,
                    md: 8,
                    sm: 6,
                    xs: 9,
                    children: (0, f.jsxs)(l.A, {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      children: [
                        (0, f.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, f.jsx)(x.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, f.jsx)(d.A, {
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
                                null === v ||
                                void 0 === v ||
                                null === (t = v.employer) ||
                                void 0 === t
                                  ? void 0
                                  : t.companyName
                            })
                          ]
                        }),
                        (0, f.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, f.jsx)(p.A, {
                              sx: { maxHeight: 20, color: 'grey.700' }
                            }),
                            (0, f.jsx)(d.A, {
                              color: 'secondary',
                              fontWeight: 700,
                              children:
                                (null !== v && void 0 !== v && v.minSalary) ||
                                (null !== v && void 0 !== v && v.maxSalary)
                                  ? ''
                                      .concat(
                                        (null === v || void 0 === v
                                          ? void 0
                                          : v.minSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' - '
                                      )
                                      .concat(
                                        (null === v || void 0 === v
                                          ? void 0
                                          : v.maxSalary) ||
                                          'Th\u01b0\u01a1ng l\u01b0\u1ee3ng',
                                        ' tri\u1ec7u'
                                      )
                                  : 'Th\u01b0\u01a1ng l\u01b0\u1ee3ng'
                            })
                          ]
                        }),
                        (0, f.jsxs)(l.A, {
                          display: 'flex',
                          children: [
                            (0, f.jsx)(u.A, {
                              sx: { maxHeight: 18, color: 'grey.700' }
                            }),
                            (0, f.jsx)(d.A, {
                              sx: {
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                maxWidth: '90%'
                              },
                              children:
                                null === v || void 0 === v
                                  ? void 0
                                  : v.workAddress
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
      t.d(o, { A: () => l });
      var n = t(82907),
        i = t(53679),
        s = t(36110);
      const l = (e) => {
        var o;
        const { isEmployee: t } = (0, s.n)(),
          {
            data: l,
            isLoading: r,
            refetch: a
          } = (0, n.useQuery)(
            ['get-FollowJobs', null === e || void 0 === e ? void 0 : e.page],
            () => i.Ew.get({ params: e }),
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
          refetch: a
        };
      };
    },
    57784: (e, o, t) => {
      t.d(o, { A: () => s });
      var n = t(82907),
        i = t(53679);
      const s = (e) => {
        const { data: o, isLoading: t } = (0, n.useQuery)(
          ['get-TotalResultsEachProfession'],
          () => i.Dm.get({ params: e }),
          { retry: 1, refetchOnWindowFocus: !1 }
        );
        return {
          dataList: null === o || void 0 === o ? void 0 : o.data,
          isLoading: t
        };
      };
    },
    74531: (e, o, t) => {
      t.d(o, { A: () => s });
      var n = t(82907),
        i = t(53679);
      const s = (e) => {
        var o;
        const {
          data: t,
          isLoading: s,
          refetch: l
        } = (0, n.useQuery)(
          ['get-TotalResultOfJobs'],
          () => {
            for (const o in e) 'T\u1ea5t c\u1ea3' === e[o] && (e[o] = '');
            return i.Dp.get({ params: e });
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
    94308: (e, o, t) => {
      t.r(o), t.d(o, { default: () => U });
      var n = t(65043),
        i = t(34535),
        s = t(19464),
        l = t(19252),
        r = t(12110),
        a = t(85865),
        c = t(68903),
        d = t(4245),
        x = t(17796),
        p = t(54567),
        u = t(74531),
        h = t(3553),
        g = t(30604),
        m = t(70579);
      const A = function () {
        const { totalResults: e } = (0, u.A)(),
          [o, t] = (0, n.useState)(1),
          i = Math.ceil(e / 9) || 1,
          { jobs: l } = (0, p.A)({ page: o, num: 9 });
        return (
          (0, n.useEffect)(() => {
            console.log(e, l);
          }, [e]),
          (0, m.jsxs)(r.A, {
            sx: { borderColor: '#98E4FF', borderRadius: '5px', mt: 2 },
            children: [
              (0, m.jsxs)(s.A, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                sx: { bgcolor: '#f0e9fe', borderTopRadius: 1, px: 3, py: 2 },
                children: [
                  (0, m.jsxs)(s.A, {
                    display: 'flex',
                    justifyContent: 'space-between',
                    children: [
                      (0, m.jsx)(d.A, {
                        color: 'secondary',
                        sx: { fontSize: 35 }
                      }),
                      (0, m.jsx)(a.A, {
                        fontWeight: 700,
                        fontSize: 20,
                        alignSelf: 'end',
                        children: 'Vi\u1ec7c l\xe0m tuy\u1ec3n g\u1ea5p'
                      })
                    ]
                  }),
                  (0, m.jsx)(g.A, {
                    to: '/urgent-hiring-job',
                    sx: { fontSize: 16, fontWeight: 700 },
                    children: 'Xem th\xeam'
                  })
                ]
              }),
              (0, m.jsxs)(s.A, {
                p: 3,
                children: [
                  (0, m.jsx)(c.Ay, {
                    container: !0,
                    mb: 3,
                    spacing: 1,
                    children: l.map((e, o) =>
                      (0, m.jsx)(
                        c.Ay,
                        {
                          item: !0,
                          xs: 12,
                          sm: 6,
                          md: 4,
                          children: (0, m.jsx)(x.A, { job: e }, o)
                        },
                        e.id
                      )
                    )
                  }),
                  (0, m.jsx)(h.A, {
                    totalPages: i,
                    currentPage: o,
                    handlePageChange: (e) => {
                      t(e);
                    }
                  })
                ]
              })
            ]
          })
        );
      };
      var f = t(39336),
        v = t(26755),
        j = t(83462),
        y = t(26600),
        b = t(17392),
        w = t(35316),
        F = t(74802),
        S = t(54367);
      const C = (0, i.Ay)(j.A)((e) => {
        let { theme: o } = e;
        return {
          '& .MuiDialogContent-root': { padding: o.spacing(2) },
          '& .MuiDialogActions-root': { padding: o.spacing(1) }
        };
      });
      const O = function (e) {
        const { open: o, handleClose: t, professionList: n } = e,
          i = [...n];
        return (
          i.sort((e, o) => e.name.localeCompare(o.name)),
          (0, m.jsxs)(C, {
            onClose: t,
            open: o,
            fullWidth: !0,
            maxWidth: 'lg',
            children: [
              (0, m.jsx)(y.A, {
                sx: {
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '1.3rem'
                },
                children: 'Danh s\xe1ch t\u1ea5t c\u1ea3 ngh\u1ec1 nghi\u1ec7p'
              }),
              (0, m.jsx)(b.A, {
                'aria-label': 'close',
                onClick: t,
                sx: {
                  position: 'absolute',
                  right: 14,
                  top: 14,
                  color: (e) => e.palette.grey[500]
                },
                children: (0, m.jsx)(F.A, {})
              }),
              (0, m.jsx)(f.A, { sx: { bgcolor: '#B6FFFA', height: 2 } }),
              (0, m.jsx)(w.A, {
                sx: { display: 'flex', flexWrap: 'wrap' },
                children:
                  null === i || void 0 === i
                    ? void 0
                    : i.map((e, o) =>
                        (0, m.jsxs)(
                          g.A,
                          {
                            to: '/profession/'.concat(
                              (0, S.O)(
                                null === e || void 0 === e ? void 0 : e.name
                              )
                            ),
                            state: {
                              profession:
                                null === e || void 0 === e ? void 0 : e.name,
                              pageTitle: e.name
                            },
                            sx: {
                              flexBasis: '33%',
                              padding: '10px',
                              fontSize: 14,
                              justifyContent: 'left',
                              color: 'black'
                            },
                            children: [e.name, ' (', e.count, ')']
                          },
                          null === e || void 0 === e ? void 0 : e.code
                        )
                      )
              })
            ]
          })
        );
      };
      var E = t(2635),
        k = t(57784);
      const W = function () {
        const [e, o] = n.useState(!1),
          { dataList: t } = (0, k.A)(),
          i = E.A.map((e) => {
            const o = Array.isArray(t)
              ? t.find((o) => o.profession_value === e.name)
              : null;
            return o ? { ...e, count: o.count } : { ...e, count: 0 };
          }).sort((e, o) => o.count - e.count),
          c = i.slice(0, 7);
        return (0, m.jsxs)(r.A, {
          sx: { borderColor: '#98E4FF', borderRadius: '5px', mt: 2 },
          children: [
            (0, m.jsxs)(s.A, {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              sx: { bgcolor: '#f0e9fe', borderTopRadius: 1, p: 2 },
              children: [
                (0, m.jsxs)(s.A, {
                  display: 'flex',
                  justifyContent: 'space-between',
                  children: [
                    (0, m.jsx)(v.A, {
                      color: 'secondary',
                      sx: { fontSize: 35 }
                    }),
                    (0, m.jsx)(a.A, {
                      fontWeight: 700,
                      fontSize: 18,
                      alignSelf: 'end',
                      children: 'Ngh\u1ec1 nghi\u1ec7p n\u1ed5i b\u1eadt'
                    })
                  ]
                }),
                (0, m.jsx)(f.A, {}),
                (0, m.jsx)(g.A, {
                  to: '#',
                  sx: { fontSize: 16, fontWeight: 700 },
                  onClick: () => o(!0),
                  children: 'Xem th\xeam'
                })
              ]
            }),
            (0, m.jsx)(O, {
              open: e,
              handleClose: () => {
                o(!1);
              },
              professionList: i
            }),
            (0, m.jsx)(l.A, {
              sx: {
                overflow: 'hidden',
                p: 2,
                display: 'flex',
                justifyContent: 'center'
              },
              children:
                null === c || void 0 === c
                  ? void 0
                  : c.map((e, o) =>
                      (0, m.jsxs)(
                        g.A,
                        {
                          to: '/profession/'.concat(
                            (0, S.O)(
                              null === e || void 0 === e ? void 0 : e.name
                            )
                          ),
                          state: { profession: e.name, pageTitle: e.name },
                          sx: {
                            width: 170,
                            height: 170,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginX: 2,
                            gap: '5px',
                            textDecoration: 'none',
                            '&:hover': { color: '#FF7D55' }
                          },
                          children: [
                            (0, m.jsx)('img', {
                              src: e.icon,
                              alt: 'shopping-bag',
                              style: {
                                objectFit: 'cover',
                                width: '90px',
                                height: '90px',
                                borderRadius: 2
                              }
                            }),
                            (0, m.jsxs)(s.A, {
                              display: 'flex',
                              columnGap: '2px',
                              alignItems: 'center',
                              children: [
                                (0, m.jsx)(a.A, {
                                  fontWeight: 700,
                                  fontSize: 16,
                                  color: '#379aff',
                                  textAlign: 'center',
                                  children: e.count
                                }),
                                (0, m.jsx)(a.A, {
                                  fontWeight: 700,
                                  color: '#939295',
                                  textAlign: 'center',
                                  fontSize: 13,
                                  children: 'vi\u1ec7c'
                                })
                              ]
                            }),
                            (0, m.jsx)(a.A, {
                              fontWeight: 700,
                              textAlign: 'center',
                              sx: { '&:hover': { color: '#FF7D55' } },
                              children: e.name
                            })
                          ]
                        },
                        o
                      )
                    )
            })
          ]
        });
      };
      var T = t(63336),
        I = t(70859),
        D = t(60151);
      const R = [
        {
          imgPath:
            'https://cdn.syncfusion.com/content/images/Careers/career-logo.png'
        },
        {
          imgPath:
            'https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2023%2F11%2F16%2FBanner-ThucTapSinh-Test-PC_170013022585.jpg&w=1920&q=75'
        },
        { imgPath: 'https://www.excelsecu.com.cn/upload/2015112117335170.jpg' },
        {
          imgPath:
            'https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/recruiter-using-social-strategy.jpg'
        }
      ];
      const z = function () {
        const e = (0, D.Cc)(I.Ay),
          [o, t] = n.useState(0);
        return (0, m.jsx)(T.A, {
          elevation: 12,
          children: (0, m.jsx)(e, {
            interval: 4e3,
            children: R.map((e, t) =>
              (0, m.jsx)(
                'div',
                {
                  children:
                    Math.abs(o - t) <= 3
                      ? (0, m.jsx)(s.A, {
                          component: 'img',
                          sx: {
                            display: 'block',
                            width: '100%',
                            height: '230px',
                            objectFit: 'cover'
                          },
                          src: e.imgPath
                        })
                      : null
                },
                t
              )
            )
          })
        });
      };
      var L = t(20860);
      const P = (0, i.Ay)(s.A)(
          () =>
            '\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    align-items: center;\n'
        ),
        U = () =>
          (0, m.jsxs)(P, {
            children: [
              (0, m.jsx)(z, {}),
              (0, m.jsxs)(l.A, {
                children: [
                  (0, m.jsx)(L.A, { to: 'profession' }),
                  (0, m.jsx)(W, {}),
                  (0, m.jsx)(A, {})
                ]
              })
            ]
          });
    },
    54367: (e, o, t) => {
      function n(e) {
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
        let n = '';
        for (
          var i = 0;
          i < (null === e || void 0 === e ? void 0 : e.length);
          i++
        )
          o[e[i]]
            ? (n += o[e[i]])
            : t.includes(e[i])
            ? n.endsWith('-') || (n += '-')
            : (n += e[i]);
        return n;
      }
      t.d(o, { O: () => n });
    }
  }
]);
//# sourceMappingURL=308.cb5cf3fc.chunk.js.map