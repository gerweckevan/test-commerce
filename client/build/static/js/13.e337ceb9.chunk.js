
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
              "/img/A2-P4.jpg",
            cardTitle: "Polos",
            linkCategory: "Polos",
          },
          {
            imgSrc:
              "/img/A2-P11.jpg",
            cardTitle: "Shirts",
            linkCategory: "Shirts",
          },
          {
            imgSrc:
              "/img/A1-P7.jpg",
            cardTitle: "Pants",
            linkCategory: "Pants",
          },
          {
            imgSrc:
              "/img/A1-P9.jpg",
            cardTitle: "Jackets",
            linkCategory: "Jackets",
          },
        ],
        l = [
          {
            imgSrc:
              "/img5/cartoonish-t-shirt-design-creator-with-a-smoking-gangster-4005d.png",
            cardTitle: "Dresses",
            linkCategory: "Dresses",
          },
          {
            imgSrc:
              "/img5/crop-top-hoodie-mockup-featuring-a-woman-in-a-streetwear-outfit-m641 (1).png",
            cardTitle: "Cardigans",
            linkCategory: "Cardigans",
          },
          {
            imgSrc:
              "/img5/long-sleeve-t-shirt-mockup-of-a-man-with-sunglasses-m531 (1).png",
            cardTitle: "Tops",
            linkCategory: "Tops",
          },
          {
            imgSrc:
              "/img5/round-neck-tee-mockup-featuring-a-man-with-sunglasses-by-a-truck-m535.png",
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

