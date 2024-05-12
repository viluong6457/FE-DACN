'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [166],
  {
    29773: (e, n, i) => {
      i.d(n, { A: () => o });
      var t = i(34535),
        a = (i(65043), i(51318)),
        l = i(70579);
      const r = (0, t.Ay)(a.N_)((e) => {
          let { theme: n } = e;
          return {
            textDecoration: 'none',
            color: n.colors.info.dark,
            '&:active': { color: n.colors.primary.light },
            '&:visited': { color: n.colors.info.dark }
          };
        }),
        o = (e) => (0, l.jsx)(r, { ...e });
    },
    65499: (e, n, i) => {
      i.d(n, { L: () => l });
      var t = i(34535),
        a = i(85865);
      const l = (0, t.Ay)(a.A)((e) => {
        let { theme: n } = e;
        return {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        };
      });
    },
    52404: (e, n, i) => {
      i.d(n, { D$: () => o, DG: () => l, mi: () => a, zP: () => r });
      var t = i(22626);
      const a = new t.A('employee/applications'),
        l = new t.A('employer/applications'),
        r = new t.A('employer/applications'),
        o = new t.A('employer/applications/totalResults');
    },
    70166: (e, n, i) => {
      i.r(n), i.d(n, { default: () => I });
      var t = i(19252),
        a = i(68903),
        l = i(12110),
        r = i(79958),
        o = i(39336),
        d = i(26494),
        c = i(82907),
        s = i(52404),
        h = i(36110);
      const u = () => {
        var e;
        const { isEmployee: n } = (0, h.n)(),
          { data: i, isLoading: t } = (0, c.useQuery)(
            'job-applied-getList',
            s.mi.get,
            {
              retry: 1,
              refetchOnWindowFocus: !1,
              enabled: n,
              keepPreviousData: !0
            }
          );
        return {
          data:
            (null === i || void 0 === i || null === (e = i.data) || void 0 === e
              ? void 0
              : e.map((e) => ({ ...e, id: e.application_id }))) || [],
          isLoading: t
        };
      };
      var A = i(19464),
        m = i(29773),
        p = i(28800),
        v = i(57796),
        g = i(43845),
        x = i(17392),
        j = i(77739),
        y = i(86971),
        f = i(59162),
        O = i(65499),
        w = i(60446),
        E = i.n(w),
        C = i(54367),
        b = i(70579);
      const D = (e) => {
          const n = E()(null === e || void 0 === e ? void 0 : e.value).format(
            'DD/MM/YYYY'
          );
          return (0, b.jsx)(b.Fragment, { children: n });
        },
        N = [
          {
            field: 'jobTitle',
            headerName: 'T\xean tin \u0111\u0103ng',
            minWidth: 400,
            headerAlign: 'center',
            renderCell: (e) => {
              var n, i;
              const t = (0, C.O)(
                  null === e ||
                    void 0 === e ||
                    null === (n = e.row) ||
                    void 0 === n
                    ? void 0
                    : n.jobTitle
                ),
                l = (0, y.Zp)();
              return (0, b.jsx)(b.Fragment, {
                children: (0, b.jsxs)(a.Ay, {
                  container: !0,
                  alignItems: 'center',
                  children: [
                    (0, b.jsx)(a.Ay, {
                      item: !0,
                      xs: 2,
                      children: (0, b.jsx)(j.A, {
                        title: 'Xem tr\u1ef1c ti\u1ebfp',
                        children: (0, b.jsx)(x.A, {
                          size: 'small',
                          onClick: () => {
                            var n;
                            l(
                              '/job/'
                                .concat(t, '?id=')
                                .concat(
                                  btoa(
                                    null === e ||
                                      void 0 === e ||
                                      null === (n = e.row) ||
                                      void 0 === n
                                      ? void 0
                                      : n.postId
                                  )
                                )
                            );
                          },
                          children: (0, b.jsx)(v.A, {
                            sx: { width: 18, height: 18, color: 'gray' }
                          })
                        })
                      })
                    }),
                    (0, b.jsx)(a.Ay, {
                      item: !0,
                      xs: 10,
                      children: (0, b.jsx)(m.A, {
                        to: '/job/'
                          .concat(t, '?id=')
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
                        children: (0, b.jsxs)(O.L, { children: [' ', e.value] })
                      })
                    })
                  ]
                })
              });
            }
          },
          {
            field: 'createAt',
            headerName: 'Ng\xe0y n\u1ed9p',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: D
          },
          {
            field: 'applicationDeadline',
            headerName: 'H\u1ea1n n\u1ed9p',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: D
          },
          {
            field: 'fullName',
            headerName: 'L\u01b0\u1ee3t n\u1ed9p',
            minWidth: 100,
            headerAlign: 'center',
            align: 'center',
            renderCell: () => (0, b.jsx)(b.Fragment, { children: '0' })
          },
          {
            field: 'ag2e',
            headerName: 'L\u01b0\u1ee3t xem',
            minWidth: 110,
            headerAlign: 'center',
            align: 'center',
            renderCell: () => (0, b.jsx)(b.Fragment, { children: '0' })
          },
          {
            field: 'status',
            headerName: 'Tr\u1ea1ng th\xe1i',
            minWidth: 150,
            headerAlign: 'center',
            align: 'center',
            renderCell: (e) => {
              const n = f.J2.find((n) => n.label === e.value).color;
              return (0, b.jsx)(g.A, {
                label: e.value,
                size: 'small',
                color: n,
                variant: 'outlined'
              });
            }
          }
        ];
      function U(e) {
        let { data: n } = e;
        return (0, b.jsx)(A.A, {
          sx: { height: '72.7vh', width: '100%' },
          children: (0, b.jsx)(p.A, {
            rows: n,
            columns: N,
            initialState: { pagination: { paginationModel: { pageSize: 8 } } }
          })
        });
      }
      const I = () => {
        const { data: e } = u();
        return (0, b.jsx)(t.A, {
          maxWidth: 'xl',
          children: (0, b.jsx)(a.Ay, {
            container: !0,
            direction: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            spacing: 3,
            marginTop: 0,
            children: (0, b.jsx)(a.Ay, {
              item: !0,
              xs: 12,
              children: (0, b.jsxs)(l.A, {
                children: [
                  (0, b.jsx)(r.A, {
                    title:
                      'Danh S\xe1ch Vi\u1ec7c \u0110\xe3 \u1ee8ng Tuy\u1ec3n'
                  }),
                  (0, b.jsx)(o.A, {}),
                  (0, b.jsx)(d.A, {
                    children: (0, b.jsx)(U, { data: e || [] })
                  })
                ]
              })
            })
          })
        });
      };
    },
    54367: (e, n, i) => {
      function t(e) {
        const n = {
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
          i = [
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
        let t = '';
        for (
          var a = 0;
          a < (null === e || void 0 === e ? void 0 : e.length);
          a++
        )
          n[e[a]]
            ? (t += n[e[a]])
            : i.includes(e[a])
            ? t.endsWith('-') || (t += '-')
            : (t += e[a]);
        return t;
      }
      i.d(n, { O: () => t });
    },
    57796: (e, n, i) => {
      var t = i(32392);
      n.A = void 0;
      var a = t(i(40039)),
        l = i(70579),
        r = (0, a.default)(
          (0, l.jsx)('path', {
            d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
          }),
          'RemoveRedEye'
        );
      n.A = r;
    }
  }
]);
//# sourceMappingURL=166.30572449.chunk.js.map