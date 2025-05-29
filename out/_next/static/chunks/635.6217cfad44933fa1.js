(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[635], {
  1049: (e, t) => {
    Object.defineProperty(t, '__esModule', { value: !0 }), Object.defineProperty(t, 'warnOnce', { enumerable: !0, get() { return r; } }); let r = (e) => {};
  },
  2635: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: !0 }), Object.defineProperty(t, 'default', { enumerable: !0, get() { return c; } }); const n = r(4252); const o = r(7876); const i = n._(r(4232)); const l = n._(r(5237)); const u = {
      400: 'Bad Request', 404: 'This page could not be found', 405: 'Method Not Allowed', 500: 'Internal Server Error',
    }; function s(e) { const { req: t, res: r, err: n } = e; return { statusCode: r && r.statusCode ? r.statusCode : n ? n.statusCode : 404, hostname: window.location.hostname }; } const a = {
      error: {
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      },
      desc: { lineHeight: '48px' },
      h1: {
        display: 'inline-block', margin: '0 20px 0 0', paddingRight: 23, fontSize: 24, fontWeight: 500, verticalAlign: 'top',
      },
      h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
      wrap: { display: 'inline-block' },
    }; class c extends i.default.Component {render() { const { statusCode: e, withDarkMode: t = !0 } = this.props; const r = this.props.title || u[e] || 'An unexpected error has occurred'; return (0, o.jsxs)('div', { style: a.error, children: [(0, o.jsx)(l.default, { children: (0, o.jsx)('title', { children: e ? `${e}: ${r}` : 'Application error: a client-side exception has occurred' }) }), (0, o.jsxs)('div', { style: a.desc, children: [(0, o.jsx)('style', { dangerouslySetInnerHTML: { __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${t ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}' : ''}` } }), e ? (0, o.jsx)('h1', { className: 'next-error-h1', style: a.h1, children: e }) : null, (0, o.jsx)('div', { style: a.wrap, children: (0, o.jsxs)('h2', { style: a.h2, children: [this.props.title || e ? r : (0, o.jsxs)(o.Fragment, { children: ['Application error: a client-side exception has occurred', ' ', !!this.props.hostname && (0, o.jsxs)(o.Fragment, { children: ['while loading ', this.props.hostname] }), ' ', '(see the browser console for more information)'] }), '.'] }) })] })] }); }}c.displayName = 'ErrorPage', c.getInitialProps = s, c.origGetInitialProps = s, (typeof t.default === 'function' || typeof t.default === 'object' && t.default !== null) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  },
  5237: (e, t, r) => {
    const n = r(5364); function o(e, t) { const r = Object.keys(e); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(e); t && (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)), r.push.apply(r, n); } return r; }Object.defineProperty(t, '__esModule', { value: !0 }), !(function (e, t) { for (const r in t)Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }(t, { default() { return g; }, defaultHead() { return p; } })); const i = r(4252); const l = r(8365); const u = r(7876); const s = l._(r(4232)); const a = i._(r(7666)); const c = r(6781); const d = r(7405); const f = r(5441); function p(e) { void 0 === e && (e = !1); const t = [(0, u.jsx)('meta', { charSet: 'utf-8' }, 'charset')]; return e || t.push((0, u.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport')), t; } function h(e, t) { return typeof t === 'string' || typeof t === 'number' ? e : t.type === s.default.Fragment ? e.concat(s.default.Children.toArray(t.props.children).reduce((e, t) => (typeof t === 'string' || typeof t === 'number' ? e : e.concat(t)), [])) : e.concat(t); }r(1049); const y = ['name', 'httpEquiv', 'charSet', 'itemProp']; function m(e, t) {
      const { inAmpMode: r } = t; return e.reduce(h, []).reverse().concat(p(r).reverse()).filter(function () {
        const e = new Set(); const t = new Set(); const r = new Set(); const
          n = {}; return (o) => { let i = !0; let l = !1; if (o.key && typeof o.key !== 'number' && o.key.indexOf('$') > 0) { l = !0; const t = o.key.slice(o.key.indexOf('$') + 1); e.has(t) ? i = !1 : e.add(t); } switch (o.type) { case 'title': case 'base': t.has(o.type) ? i = !1 : t.add(o.type); break; case 'meta': for (let e = 0, t = y.length; e < t; e++) { const t = y[e]; if (o.props.hasOwnProperty(t)) if (t === 'charSet')r.has(t) ? i = !1 : r.add(t); else { const e = o.props[t]; const r = n[t] || new Set(); (t !== 'name' || !l) && r.has(e) ? i = !1 : (r.add(e), n[t] = r); } } } return i; };
      }())
        .reverse()
        .map((e, t) => {
          const i = e.key || t; if (n.env.__NEXT_OPTIMIZE_FONTS && !r && e.type === 'link' && e.props.href && ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some((t) => e.props.href.startsWith(t))) {
            const t = (function (e) {
              for (let t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {}; t % 2 ? o(Object(r), !0).forEach((t) => {
                  let n; let o; let i; n = e, o = t, i = r[t], (o = (function (e) { const t = (function (e, t) { if (typeof e !== 'object' || e === null) return e; const r = e[Symbol.toPrimitive]; if (void 0 !== r) { const n = r.call(e, t || 'default'); if (typeof n !== 'object') return n; throw TypeError('@@toPrimitive must return a primitive value.'); } return (t === 'string' ? String : Number)(e); }(e, 'string')); return typeof t === 'symbol' ? t : String(t); }(o))) in n ? Object.defineProperty(n, o, {
                    value: i, enumerable: !0, configurable: !0, writable: !0,
                  }) : n[o] = i;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((t) => { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); });
              } return e;
            }({}, e.props || {})); return t['data-href'] = t.href, t.href = void 0, t['data-optimized-fonts'] = !0, s.default.cloneElement(e, t);
          } return s.default.cloneElement(e, { key: i });
        });
    } let g = function (e) {
      const { children: t } = e; const r = (0, s.useContext)(c.AmpStateContext); const n = (0, s.useContext)(d.HeadManagerContext); return (0, u.jsx)(a.default, {
        reduceComponentsToState: m, headManager: n, inAmpMode: (0, f.isInAmpMode)(r), children: t,
      });
    }; (typeof t.default === 'function' || typeof t.default === 'object' && t.default !== null) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), e.exports = t.default);
  },
  5364: (e, t, r) => {
    let n; let o; e.exports = ((n = r.g.process) == null ? void 0 : n.env) && typeof ((o = r.g.process) == null ? void 0 : o.env) === 'object' ? r.g.process : r(5861);
  },
  5441: (e, t) => {
    function r(e) { const { ampFirst: t = !1, hybrid: r = !1, hasQuery: n = !1 } = void 0 === e ? {} : e; return t || r && n; }Object.defineProperty(t, '__esModule', { value: !0 }), Object.defineProperty(t, 'isInAmpMode', { enumerable: !0, get() { return r; } });
  },
  5861: (e) => { !(function () { const t = { 229(e) { let t; let r; let n; const o = e.exports = {}; function i() { throw Error('setTimeout has not been defined'); } function l() { throw Error('clearTimeout has not been defined'); } try { t = typeof setTimeout === 'function' ? setTimeout : i; } catch (e) { t = i; } try { r = typeof clearTimeout === 'function' ? clearTimeout : l; } catch (e) { r = l; } function u(e) { if (t === setTimeout) return setTimeout(e, 0); if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0); try { return t(e, 0); } catch (r) { try { return t.call(null, e, 0); } catch (r) { return t.call(this, e, 0); } } } let s = []; let a = !1; let c = -1; function d() { a && n && (a = !1, n.length ? s = n.concat(s) : c = -1, s.length && f()); } function f() { if (!a) { const e = u(d); a = !0; for (let t = s.length; t;) { for (n = s, s = []; ++c < t;)n && n[c].run(); c = -1, t = s.length; }n = null, a = !1, (function (e) { if (r === clearTimeout) return clearTimeout(e); if ((r === l || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e); try { r(e); } catch (t) { try { return r.call(null, e); } catch (t) { return r.call(this, e); } } }(e)); } } function p(e, t) { this.fun = e, this.array = t; } function h() {}o.nextTick = function (e) { const t = Array(arguments.length - 1); if (arguments.length > 1) for (let r = 1; r < arguments.length; r++)t[r - 1] = arguments[r]; s.push(new p(e, t)), s.length !== 1 || a || u(f); }, p.prototype.run = function () { this.fun.apply(null, this.array); }, o.title = 'browser', o.browser = !0, o.env = {}, o.argv = [], o.version = '', o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function (e) { return []; }, o.binding = function (e) { throw Error('process.binding is not supported'); }, o.cwd = function () { return '/'; }, o.chdir = function (e) { throw Error('process.chdir is not supported'); }, o.umask = function () { return 0; }; } }; const r = {}; function n(e) { const o = r[e]; if (void 0 !== o) return o.exports; const i = r[e] = { exports: {} }; let l = !0; try { t[e](i, i.exports, n), l = !1; } finally { l && delete r[e]; } return i.exports; }n.ab = '//', e.exports = n(229); }()); },
  6781: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: !0 }), Object.defineProperty(t, 'AmpStateContext', { enumerable: !0, get() { return n; } }); let n = r(4252)._(r(4232)).default.createContext({});
  },
  7666: (e, t, r) => {
    Object.defineProperty(t, '__esModule', { value: !0 }), Object.defineProperty(t, 'default', { enumerable: !0, get() { return l; } }); const n = r(4232); const o = n.useLayoutEffect; const i = n.useEffect; function l(e) { const { headManager: t, reduceComponentsToState: r } = e; function l() { if (t && t.mountedInstances) { const o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean)); t.updateHead(r(o, e)); } } return o(() => { let r; return t == null || (r = t.mountedInstances) == null || r.add(e.children), () => { let r; t == null || (r = t.mountedInstances) == null || r.delete(e.children); }; }), o(() => (t && (t._pendingUpdate = l), () => { t && (t._pendingUpdate = l); })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => { t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null); })), null; }
  },
}]);
