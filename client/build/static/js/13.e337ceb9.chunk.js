
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [13],
  {
    243: function (t, i, e) {
      "use strict";
      e.r(i);
      e(1);
      var c = e(29),
        r = e(17),
        a = e(22),
        s = e(4),
        o = e(3),
        n = {
          cardTitle: {
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
          },
          cardBtn: { textAlign: "center" },
          card: { marginBottom: "20px" },
        },
        d = [
          {
            imgSrc:
              "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=717ae13fa0e515d1c7c9e92456439845&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Polos",
            linkCategory: "Polos",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Shirts",
            linkCategory: "Shirts",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1421986386270-978ed214ec60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f6cec57034960f50caf64c5af9c26d4&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Pants",
            linkCategory: "Pants",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1530856021941-02c71be5926f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d29673aa02db77423cf5ca770bd6d8e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Jackets",
            linkCategory: "Jackets",
          },
        ],
        l = [
          {
            imgSrc:
              "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=27aecaf25f31cf45d2de3ad774dad6ed&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Dresses",
            linkCategory: "Dresses",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1485527691629-8e370684924c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d6f450a6506599df62dc29593779a1b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Cardigans",
            linkCategory: "Cardigans",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42226a7bf3b99eec89267859b4f36114&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Tops",
            linkCategory: "Tops",
          },
          {
            imgSrc:
              "https://images.unsplash.com/photo-1508445861827-7711f397113a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b8561c6e78192892aae3c6943928c93&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
            cardTitle: "Trench Coats",
            linkCategory: "Trench Coats",
          },
        ],
        p = function (t, i) {
          return (function (t) {
            return "women" === t ? l : d;
          })(t).map(function (e) {
            return Object(o.jsx)(
              s.k,
              {
                md: "4",
                style: n.card,
                children: Object(o.jsx)(s.e, {
                  children: Object(o.jsx)("div", {
                    style: n.cardBtn,
                    onClick: function () {
                      return i(e.cardTitle);
                    },
                    children: Object(o.jsxs)(c.a, {
                      to: "/productslist/".concat(t, "/"),
                      children: [
                        Object(o.jsx)(s.f, {
                          src: e.imgSrc,
                          alt: "Card image cap",
                          style: {
                            boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.75)",
                          },
                        }),
                        Object(o.jsx)("div", {
                          style: {
                            position: "absolute",
                            top: "40%",
                            textAlign: "center",
                            width: "100%",
                            color: "white",
                            fontSize: "200%",
                          },
                          children: Object(o.jsxs)("b", {
                            children: [" ", e.cardTitle, " "],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              },
              e.cardTitle
            );
          });
        };
      i.default = Object(r.b)(
        function (t) {
          return { oneKeywordForFilter: t.oneKeywordForFilter };
        },
        function (t) {
          return {
            oneKeywordForFilter: function (i) {
              return t(Object(a.g)(i));
            },
          };
        }
      )(function (t) {
        var i = t.match.params.gender,
          e = t.oneKeywordForFilter;
        return Object(o.jsx)(s.m, {
          style: { paddingTop: "30px", paddingBottom: "50px" },
          children: Object(o.jsxs)(s.k, {
            md: "12",
            children: [
              Object(o.jsxs)("h1", {
                style: {
                  fontSize: "40px",
                  textAlign: "center",
                  padding: "20px",
                },
                children: [
                  i.charAt(0).toUpperCase() + i.slice(1),
                  " selection",
                ],
              }),
              Object(o.jsx)(s.Q, { children: p(i, e) }),
            ],
          }),
        });
      });
    },
  },
]);
//# sourceMappingURL=13.e337ceb9.chunk.js.map

