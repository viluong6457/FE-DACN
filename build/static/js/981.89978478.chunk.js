'use strict';
(self.webpackChunkFE_DACN = self.webpackChunkFE_DACN || []).push([
  [981],
  {
    52404: (e, t, a) => {
      a.d(t, { D$: () => l, DG: () => o, mi: () => i, zP: () => s });
      var n = a(22626);
      const i = new n.A('employee/applications'),
        o = new n.A('employer/applications'),
        s = new n.A('employer/applications'),
        l = new n.A('employer/applications/totalResults');
    },
    94220: (e, t, a) => {
      a.d(t, { A: () => l, L: () => r });
      var n = a(82907),
        i = a(52404),
        o = a(65043),
        s = a(36110);
      function l(e) {
        const { isEmployer: t } = (0, s.n)();
        if (!e) return {};
        const { data: a, isLoading: o } = (0, n.useQuery)(
          ['application-getById', e],
          async () => i.DG.getById(e),
          {
            retry: 1,
            refetchOnWindowFocus: !1,
            keepPreviousData: !0,
            enabled: t
          }
        );
        return {
          data: null === a || void 0 === a ? void 0 : a.data,
          isLoading: o
        };
      }
      function r(e) {
        const [t, a] = (0, o.useState)([]),
          {
            data: s,
            isLoading: l,
            refetch: r
          } = (0, n.useQuery)(
            ['application-getByIdList', JSON.stringify(e)],
            async () => {
              if (!e.length) return [];
              Promise.allSettled(e.map((e) => i.DG.getById(e)))
                .then((e) => {
                  const t = e
                    .filter((e) => 'fulfilled' === e.status)
                    .map((e) => e.value);
                  a(t);
                })
                .catch((e) => console.log(e));
            },
            { retry: 1, refetchOnWindowFocus: !1, keepPreviousData: !0 }
          );
        return {
          data:
            null === t || void 0 === t
              ? void 0
              : t.map((e) => (null === e || void 0 === e ? void 0 : e.data)),
          isLoading: l,
          refetch: r
        };
      }
    },
    19981: (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var n = a(19193),
        i = a(94220),
        o = a(86971),
        s = a(70579);
      function l(e) {
        let { user: t } = e;
        const { state: a } = (0, o.zy)(),
          l = a,
          { applicationId: r } = l,
          { data: d } = (0, i.A)(r);
        return (0, s.jsx)(n.A, { user: d });
      }
    }
  }
]);
//# sourceMappingURL=981.89978478.chunk.js.map
