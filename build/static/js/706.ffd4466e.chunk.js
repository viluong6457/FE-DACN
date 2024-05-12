'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [706],
  {
    29773: (e, i, n) => {
      n.d(i, { A: () => d });
      var t = n(34535),
        o = (n(65043), n(51318)),
        l = n(70579);
      const r = (0, t.Ay)(o.N_)((e) => {
          let { theme: i } = e;
          return {
            textDecoration: 'none',
            color: i.colors.info.dark,
            '&:active': { color: i.colors.primary.light },
            '&:visited': { color: i.colors.info.dark }
          };
        }),
        d = (e) => (0, l.jsx)(r, { ...e });
    },
    65499: (e, i, n) => {
      n.d(i, { L: () => l });
      var t = n(34535),
        o = n(85865);
      const l = (0, t.Ay)(o.A)((e) => {
        let { theme: i } = e;
        return {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        };
      });
    },
    1676: (e, i, n) => {
      n.d(i, { A: () => r });
      var t = n(82907),
        o = n(53679),
        l = n(36110);
      const r = (e) => {
        var i, n, r;
        const { isEmployer: d } = (0, l.n)(),
          { data: s, isLoading: a } = (0, t.useQuery)(
            [
              'jobOwner-getList',
              null === e || void 0 === e ? void 0 : e.status,
              null === e || void 0 === e ? void 0 : e.page
            ],
            () => o.L8.get({ params: e }),
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              keepPreviousData: !0,
              enabled: d
            }
          );
        return {
          jobs:
            (null === s ||
            void 0 === s ||
            null === (i = s.data) ||
            void 0 === i ||
            null === (n = i.result) ||
            void 0 === n
              ? void 0
              : n.map((e) => ({ ...e, id: e.postId }))) || [],
          totalResults:
            (null === s || void 0 === s || null === (r = s.data) || void 0 === r
              ? void 0
              : r.totalResults) || 0,
          isLoading: a
        };
      };
    },
    59706: (e, i, n) => {
      n.r(i), n.d(i, { default: () => k });
      var t = n(65043),
        o = n(11906),
        l = n(19252),
        r = n(85865),
        d = n(68903),
        s = n(12110),
        a = n(79958),
        c = n(39336),
        u = n(26494),
        v = n(81637),
        h = n(19464),
        m = n(14701),
        g = n(62237),
        x = n(1676),
        p = n(28800),
        f = n(57745),
        A = n(82907),
        j = n(36228),
        y = n(36110);
      const w = (e) => {
        var i, n;
        const { isEmployer: t } = (0, y.n)(),
          {
            data: o,
            isLoading: l,
            refetch: r
          } = (0, A.useQuery)(
            [
              'get-ProfileByKeywords',
              null === e || void 0 === e ? void 0 : e.keywords,
              null === e || void 0 === e ? void 0 : e.page,
              null === e || void 0 === e ? void 0 : e.profession,
              null === e || void 0 === e ? void 0 : e.experience,
              null === e || void 0 === e ? void 0 : e.degree,
              null === e || void 0 === e ? void 0 : e.employmentType,
              null === e || void 0 === e ? void 0 : e.sex,
              null === e || void 0 === e ? void 0 : e.jobTitle,
              null === e || void 0 === e ? void 0 : e.currentPosition,
              null === e || void 0 === e ? void 0 : e.positionLevel
            ],
            () => {
              for (const n in e)
                ('T\u1ea5t c\u1ea3' !== e[n] && void 0 !== e[n]) || (e[n] = '');
              const i = {
                ...e,
                currentPosition:
                  null === e || void 0 === e ? void 0 : e.positionLevel
              };
              return delete i.positionLevel, j.wF.get({ params: i });
            },
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled:
                t && Boolean(null === e || void 0 === e ? void 0 : e.keywords)
            }
          );
        return {
          profile:
            (null === o || void 0 === o || null === (i = o.data) || void 0 === i
              ? void 0
              : i.result) || [],
          totalResults:
            null === o || void 0 === o || null === (n = o.data) || void 0 === n
              ? void 0
              : n.totalCount,
          isLoading: l,
          refetch: r
        };
      };
      var b = n(3553),
        C = n(98785),
        L = n(70579);
      function S() {
        const [e, i] = (0, t.useState)(1),
          [n, A] = (0, t.useState)(1),
          [j, y] = (0, t.useState)(''),
          [S, k] = (0, t.useState)([]),
          [W, N] = (0, t.useState)(null),
          [T, z] = (0, t.useState)(null),
          {
            jobs: I,
            totalResults: F,
            isLoading: M
          } = (0, x.A)({ page: e, num: 9, status: '\u0110\xe3 duy\u1ec7t' }),
          {
            profile: O,
            totalResults: D,
            isLoading: P
          } = w({ page: n, num: 8, keywords: j, ...W, ...T }),
          E = Math.ceil(F / 9) || 1,
          B = Math.ceil(D / 8) || 1,
          H = [
            {
              field: 'jobTitle',
              headerName: 'T\xean tin \u0111\u0103ng',
              minWidth: 550,
              headerAlign: 'center',
              renderCell: f.O
            },
            {
              field: 'keywords',
              headerName: 'T\u1eeb kh\xf3a',
              minWidth: 400,
              headerAlign: 'center'
            },
            {
              field: 'action',
              headerName: 'T\xecm h\u1ed3 s\u01a1',
              minWidth: 150,
              headerAlign: 'center',
              align: 'center',
              renderCell: (e) =>
                (0, L.jsx)(o.A, {
                  onClick: () => {
                    var i, n;
                    y(
                      null === e ||
                        void 0 === e ||
                        null === (i = e.row) ||
                        void 0 === i
                        ? void 0
                        : i.keywords
                    ),
                      (n = null === e || void 0 === e ? void 0 : e.row),
                      N({
                        profession:
                          null === n || void 0 === n ? void 0 : n.profession
                      });
                  },
                  variant: 'contained',
                  children: 'B\u1eaft \u0111\u1ea7u'
                })
            }
          ];
        return (
          (0, t.useEffect)(() => {
            if (!O) return;
            null === O ||
              void 0 === O ||
              O.map((e) => {
                var i, n, t, o;
                return {
                  ...e,
                  personal_information: {
                    sex:
                      null === e ||
                      void 0 === e ||
                      null === (i = e.employee) ||
                      void 0 === i ||
                      null === (n = i.user) ||
                      void 0 === n
                        ? void 0
                        : n.sex,
                    dob:
                      null === e ||
                      void 0 === e ||
                      null === (t = e.employee) ||
                      void 0 === t ||
                      null === (o = t.user) ||
                      void 0 === o
                        ? void 0
                        : o.dob
                  },
                  online_profile: {
                    profession:
                      null === e || void 0 === e ? void 0 : e.profession,
                    degree: null === e || void 0 === e ? void 0 : e.degree,
                    experience:
                      null === e || void 0 === e ? void 0 : e.experience
                  }
                };
              });
            k(O);
            const e = document.getElementById('recommend-profile');
            null === e ||
              void 0 === e ||
              e.scrollIntoView({ behavior: 'smooth' });
          }, [JSON.stringify(O)]),
          M
            ? (0, L.jsx)(g.A, {})
            : (0, L.jsxs)(l.A, {
                maxWidth: 'xl',
                sx: { p: 3 },
                children: [
                  (0, L.jsx)(r.A, {
                    fontSize: 22,
                    fontWeight: 700,
                    children:
                      'G\u1ee3i \xfd h\u1ed3 s\u01a1 ti\u1ec1m n\u0103ng'
                  }),
                  (0, L.jsx)(d.Ay, {
                    container: !0,
                    direction: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    spacing: 3,
                    marginTop: 0,
                    children: (0, L.jsx)(d.Ay, {
                      item: !0,
                      xs: 12,
                      children: (0, L.jsxs)(s.A, {
                        children: [
                          (0, L.jsx)(a.A, {
                            title:
                              'T\xecm ki\u1ebfm theo tin tuy\u1ec3n d\u1ee5ng'
                          }),
                          (0, L.jsx)(c.A, {}),
                          (0, L.jsxs)(u.A, {
                            children: [
                              (0, L.jsx)(p.A, {
                                rows: I,
                                columns: H,
                                initialState: {
                                  pagination: {
                                    paginationModel: { pageSize: 9 }
                                  }
                                },
                                sx: {
                                  minHeight: '74vh',
                                  justifySelf: 'center',
                                  mx: 'auto'
                                },
                                hideFooter: !0
                              }),
                              (0, L.jsx)(b.A, {
                                currentPage: e,
                                totalPages: E,
                                handlePageChange: i
                              })
                            ]
                          })
                        ]
                      })
                    })
                  }),
                  (0, L.jsx)(r.A, {
                    id: 'recommend-profile',
                    fontWeight: 700,
                    fontSize: 22,
                    my: 3,
                    children: 'H\u1ed3 s\u01a1 g\u1ee3i \xfd'
                  }),
                  (0, L.jsx)(C.A, {
                    handleFilter: (e) => {
                      z((i) => ({ ...i, ...e }));
                    }
                  }),
                  (0, L.jsx)(d.Ay, {
                    container: !0,
                    xs: 12,
                    sx: { width: '100%' },
                    children: (0, L.jsx)(d.Ay, {
                      item: !0,
                      xs: 12,
                      children: (0, L.jsxs)(l.A, {
                        sx: {
                          mb: 3,
                          p: 3,
                          bgcolor: '#fbfeff',
                          minHeight: '72vh'
                        },
                        children: [
                          P && (0, L.jsx)(v.A, {}),
                          (0, L.jsx)(d.Ay, {
                            container: !0,
                            spacing: 1,
                            mb: 2,
                            children:
                              null === S || void 0 === S
                                ? void 0
                                : S.map((e, i) =>
                                    (0, L.jsx)(
                                      d.Ay,
                                      {
                                        item: !0,
                                        xs: 12,
                                        sm: 6,
                                        md: 3,
                                        children: (0, L.jsx)(h.A, {
                                          sx: {
                                            display: 'flex',
                                            justifyContent: 'center'
                                          },
                                          children: (0, L.jsx)(m.A, {
                                            profile: e
                                          })
                                        })
                                      },
                                      i
                                    )
                                  )
                          }),
                          Boolean(
                            null === S || void 0 === S ? void 0 : S.length
                          )
                            ? (0, L.jsx)(b.A, {
                                currentPage: n,
                                totalPages: B,
                                handlePageChange: A
                              })
                            : (0, L.jsx)(h.A, {
                                sx: {
                                  display: 'flex',
                                  justifyContent: 'center'
                                },
                                children: (0, L.jsx)(r.A, {
                                  mt: 10,
                                  textAlign: 'center',
                                  fontStyle: 'italic',
                                  color: '#9999',
                                  children:
                                    'Kh\xf4ng t\xecm \u0111\u01b0\u1ee3c h\u1ed3 s\u01a1 ph\xf9 h\u1ee3p'
                                })
                              })
                        ]
                      })
                    })
                  })
                ]
              })
        );
      }
      function k() {
        return (0, L.jsx)(S, {});
      }
    },
    57745: (e, i, n) => {
      n.d(i, { A: () => S, O: () => b });
      var t = n(29773),
        o = n(28800),
        l = n(57796),
        r = n(68903),
        d = n(43845),
        s = n(17392),
        a = n(77739),
        c = n(86971),
        u = n(59162),
        v = n(65499),
        h = n(60446),
        m = n.n(h),
        g = n(10697),
        x = n(82907),
        p = n(36110),
        f = n(53679);
      const A = () => {
        const e = (0, x.useQueryClient)(),
          { toast: i } = (0, p.n)(),
          { mutate: n, isLoading: t } = (0, x.useMutation)(
            (e) => {
              let [i] = e;
              return f.L8.remove(i);
            },
            {
              onSuccess: (n) => {
                200 === n.status
                  ? (e.invalidateQueries(['jobOwner-getList']),
                    i.success({ massage: n.message }))
                  : i.error({ massage: n.message });
              },
              onError: (e) => {
                i.error({ massage: e.response.data.message });
              }
            }
          );
        return { onDeleteById: n, isLoading: t };
      };
      var j = n(94006),
        y = n(54367),
        w = n(70579);
      const b = (e) => {
          var i, n, o;
          const d = (0, y.O)(
              null === e || void 0 === e || null === (i = e.row) || void 0 === i
                ? void 0
                : i.jobTitle
            ),
            u = (0, c.Zp)();
          return (0, w.jsx)(w.Fragment, {
            children: (0, w.jsxs)(r.Ay, {
              container: !0,
              alignItems: 'center',
              children: [
                (0, w.jsx)(r.Ay, {
                  item: !0,
                  xs: 1,
                  children: (0, w.jsx)(a.A, {
                    title: 'Xem tr\u1ef1c ti\u1ebfp',
                    children: (0, w.jsx)(s.A, {
                      size: 'small',
                      onClick: () => {
                        var i, n;
                        u(
                          '/job/'
                            .concat(d, '?id=')
                            .concat(
                              btoa(
                                null === e ||
                                  void 0 === e ||
                                  null === (i = e.row) ||
                                  void 0 === i
                                  ? void 0
                                  : i.postId
                              )
                            ),
                          {
                            state: {
                              postId:
                                null === e ||
                                void 0 === e ||
                                null === (n = e.row) ||
                                void 0 === n
                                  ? void 0
                                  : n.postId
                            }
                          }
                        );
                      },
                      children: (0, w.jsx)(l.A, {
                        sx: { width: 18, height: 18, color: 'gray' }
                      })
                    })
                  })
                }),
                (0, w.jsx)(r.Ay, {
                  item: !0,
                  xs: 11,
                  children: (0, w.jsx)(t.A, {
                    to: '/employer/recruitment/list/'.concat(
                      (0, y.O)(
                        null === e ||
                          void 0 === e ||
                          null === (n = e.row) ||
                          void 0 === n
                          ? void 0
                          : n.jobTitle
                      )
                    ),
                    state: {
                      postId:
                        null === e ||
                        void 0 === e ||
                        null === (o = e.row) ||
                        void 0 === o
                          ? void 0
                          : o.postId
                    },
                    children: (0, w.jsxs)(v.L, { children: [' ', e.value] })
                  })
                })
              ]
            })
          });
        },
        C = (e) => {
          const i = m()(null === e || void 0 === e ? void 0 : e.value).format(
            'DD/MM/YYYY'
          );
          return (0, w.jsx)(w.Fragment, { children: i });
        },
        L = [
          {
            field: 'jobTitle',
            headerName: 'T\xean tin \u0111\u0103ng',
            minWidth: 400,
            maxWidth: 450,
            headerAlign: 'center',
            renderCell: b
          },
          {
            field: 'createAt',
            headerName: 'Ng\xe0y \u0111\u0103ng tin',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: C,
            sortable: !0
          },
          {
            field: 'applicationDeadline',
            headerName: 'H\u1ea1n n\u1ed9p h\u1ed3 s\u01a1',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: C,
            sortable: !0
          },
          {
            field: 'submissionCount',
            headerName: 'L\u01b0\u1ee3t n\u1ed9p',
            minWidth: 100,
            headerAlign: 'center',
            align: 'center',
            sortable: !0
          },
          {
            field: 'view',
            headerName: 'L\u01b0\u1ee3t xem',
            minWidth: 100,
            headerAlign: 'center',
            align: 'center',
            sortable: !0
          },
          {
            field: 'status',
            headerName: 'Tr\u1ea1ng th\xe1i',
            minWidth: 120,
            headerAlign: 'center',
            align: 'center',
            renderCell: (e) => {
              const i = u.J2.find((i) => i.label === e.value).color;
              return (0, w.jsx)(d.A, {
                label: e.value,
                size: 'small',
                color: i,
                variant: 'outlined'
              });
            },
            sortable: !0
          },
          {
            field: 'action',
            headerName: 'X\xf3a tin \u0111\u0103ng',
            minWidth: 120,
            headerAlign: 'center',
            align: 'center',
            renderCell: (e) => {
              const { onDeleteById: i } = A(),
                n = (e) => {
                  i([e]);
                };
              return (0, w.jsx)(w.Fragment, {
                children: (0, w.jsx)(s.A, {
                  onClick: () =>
                    ((e) => {
                      (0, j.A)({ selectedId: e.id, handleConfirm: n });
                    })(e),
                  children: (0, w.jsx)(g.A, {})
                })
              });
            }
          }
        ];
      function S(e) {
        let { data: i, pageSize: n } = e;
        return (0, w.jsx)(o.A, {
          rows: i,
          columns: L,
          initialState: { pagination: { paginationModel: { pageSize: n } } },
          hideFooter: !0,
          sx: { height: '74vh', width: '100%' }
        });
      }
    },
    10697: (e, i, n) => {
      var t = n(32392);
      i.A = void 0;
      var o = t(n(40039)),
        l = n(70579),
        r = (0, o.default)(
          (0, l.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z'
          }),
          'DeleteOutline'
        );
      i.A = r;
    },
    57796: (e, i, n) => {
      var t = n(32392);
      i.A = void 0;
      var o = t(n(40039)),
        l = n(70579),
        r = (0, o.default)(
          (0, l.jsx)('path', {
            d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          }),
          'RemoveRedEye'
        );
      i.A = r;
    }
  }
]);
//# sourceMappingURL=706.ffd4466e.chunk.js.map
