(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[11], { 249: function (e, t, i) { "use strict"; i.r(t); var n = i(1), c = i(143), o = i(16), s = i(76), r = i(4), a = i(3), l = { backgroundImage: 'url("/images/banner-cover-pc.jpg")', backgroundSize: "cover" }, d = { backgroundImage: 'url("/images/banner-cover-mobile.jpg")', backgroundSize: "cover" }, x = { textShadow: "3px 3px 3px grey", textAlign: "center", color: "white" }, b = { textAlign: "center", padding: "30px" }, h = { fontSize: "60px" }, j = { fontSize: "80px" }, p = function () { return Object(a.jsx)(r.z, { fluid: !0, style: o.isMobile ? d : l, children: Object(a.jsxs)(r.m, { fluid: !0, style: { height: "300px" }, children: [Object(a.jsxs)("div", { style: x, children: [Object(a.jsx)("h1", { className: "display-3", style: o.isMobile ? h : j, children: "Fashion shop" }), Object(a.jsx)("p", { children: "Cool shop" })] }), Object(a.jsxs)("div", { style: b, children: [Object(a.jsx)(s.a, { gender: "men", content: "Artwork" }), Object(a.jsx)(s.a, { gender: "women", content: "Merchandise" })] })] }) }) }, u = i(30), g = i(33), m = i(32), f = i(31), O = i(29), v = function (e) { var t = e.link, i = e.sizeBtn, n = e.lightOrDark, c = e.content; return Object(a.jsx)(O.a, { to: t, children: Object(a.jsx)(r.c, { size: i, color: n, children: c }) }) }, y = { sliderContent: { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "white" } }, k = [{ src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b17958c40e777065643cb65954bede79&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb", altText: "Slide 1", caption: "Slide 1", title: "Fashion is cool", subtitle: "Check our nice collection", btn: { content: "Go to the collection", link: "/category/men" } }, { src: "https://images.unsplash.com/photo-1488826701985-4c18de62b405?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ce707ffe1b3f8c031acc5788cf6aef2&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb", altText: "Slide 2", caption: "Slide 2", title: "Nice for couples", subtitle: "Collection summer 2018", btn: { content: "Cool collection", link: "/category/men" } }, { src: "https://images.unsplash.com/photo-1485331129317-1717811a2b75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b713c86ebb20befc80029db6bc98dae&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb", altText: "Slide 3", caption: "Slide 3", title: "Nice for everyone", subtitle: "Amazing clothes!", btn: { content: "Go to the collection", link: "/category/men" } }], I = function (e) { Object(m.a)(i, e); var t = Object(f.a)(i); function i(e) { var n; return Object(u.a)(this, i), (n = t.call(this, e)).onExiting = function () { n.animating = !0 }, n.onExited = function () { n.animating = !1 }, n.next = function () { if (!n.animating) { var e = n.state.activeIndex === k.length - 1 ? 0 : n.state.activeIndex + 1; n.setState({ activeIndex: e }) } }, n.previous = function () { if (!n.animating) { var e = 0 === n.state.activeIndex ? k.length - 1 : n.state.activeIndex - 1; n.setState({ activeIndex: e }) } }, n.goToIndex = function (e) { n.animating || n.setState({ activeIndex: e }) }, n.state = { activeIndex: 0 }, n } return Object(g.a)(i, [{ key: "render", value: function () { var e = this, t = this.state.activeIndex, i = k.map((function (t) { return Object(a.jsx)(r.j, { onExiting: e.onExiting, onExited: e.onExited, children: Object(a.jsxs)(r.Q, { style: { backgroundColor: "#072a48" }, children: [Object(a.jsx)(r.k, { md: "6", children: Object(a.jsx)("img", { src: t.src, alt: t.altText, style: { width: "100%", maxHeight: "500px" } }) }), Object(a.jsxs)(r.k, { md: "6", style: y.sliderContent, children: [Object(a.jsx)("h2", { children: t.title }), Object(a.jsx)("p", { children: t.subtitle }), Object(a.jsx)(v, { content: t.btn.content, link: t.btn.link, lightOrDark: "light", sizeBtn: "lg" })] })] }) }, t.src) })); return Object(a.jsxs)(r.g, { activeIndex: t, next: this.next, previous: this.previous, children: [i, Object(a.jsx)(r.h, { direction: "prev", directionText: "Previous", onClickHandler: this.previous }), Object(a.jsx)(r.h, { direction: "next", directionText: "Next", onClickHandler: this.next })] }) } }]), i }(n.Component), S = { marginTop: "-33px" }; t.default = function () { return Object(a.jsxs)("div", { children: [Object(a.jsxs)(c.Helmet, { children: [Object(a.jsx)("title", { children: "Demo Ecommerce template" }), Object(a.jsx)("meta", { name: "description", content: "Demo Ecommerce template" })] }), Object(a.jsx)(p, {}), Object(a.jsx)("div", { style: S, children: Object(a.jsx)(I, {}) })] }) } }, 76: function (e, t, i) { "use strict"; i(1); var n = i(16), c = i(4), o = i(29), s = i(3), r = { margin: "20px", padding: "15px" }, a = { margin: "5px", padding: "15px" }; t.a = function (e) { var t = e.gender, i = e.content, l = void 0 === i ? t : i, d = r, x = a; return Object(s.jsx)(o.a, { to: "/category/".concat(t), className: "text-white", children: Object(s.jsx)(c.c, { size: n.isMobile ? "md" : "lg", color: "light", style: n.isMobile ? x : d, children: l }) }) } } }]);
//# sourceMappingURL=11.5103ebe7.chunk.js.map