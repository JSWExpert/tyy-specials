/* TYY universal desktop nav. Built by Allen (Claude) for Jasmine Wiseman, 2026-11-07.
   Loaded on every desktop page by a Wix Custom Code snippet. Edit here, push, and all pages update.
   Desktop only (width >= 1000). Phone keeps its own header. */
(function () {
  if (window.__tyyNav) return; window.__tyyNav = 1;
  var BASE = 'https://jswexpert.github.io/tyy-specials/nav/';
  var BOOK = 'https://www.myaestheticspro.com/BN/index.cfm?D2BFB64A9DF9C64D43CE5587075B5B52FBC66F7FCA968DDF12B85466368C5E81';
  var SITE = 'https://www.10yearsyounger4u.com';
  var LINKS = [
    ['Home', '/', ['/']],
    ['About', '/team-1', ['/team-1']],
    ['Services', '/services-9', ['/services-9', '/filler-and-facial-augmentation', '/microneedling-chemical-peel', '/facials-scrubs', '/hormone-therapy', '/iv-therapy', '/women-sexual-health', '/weight-loss', '/urinary-incontinence', '/coming-soon-01']],
    ['Specials', '/specials', ['/specials']],
    ['Financing', '/cherry-payments', ['/cherry-payments', '/financing']]
  ];
  var CSS = ':host{all:initial}' +
    '.nav{position:fixed;z-index:2147483000;top:18px;left:50%;transform:translateX(-50%);width:min(1240px,calc(100vw - 48px));box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:9px 12px 9px 18px;border-radius:999px;background:rgba(255,255,255,.7);backdrop-filter:blur(18px) saturate(1.3);-webkit-backdrop-filter:blur(18px) saturate(1.3);box-shadow:0 16px 40px -20px rgba(19,60,55,.5),inset 0 1px 0 rgba(255,255,255,.85);font-family:Jost,system-ui,sans-serif}' +
    'a{text-decoration:none;color:#133C37}' +
    '.lg{display:flex;align-items:center;gap:12px}.lg img{width:42px;height:42px;object-fit:contain}' +
    '.lg b{display:block;font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:21px;letter-spacing:.04em;line-height:1}' +
    '.lg small{display:block;margin-top:4px;font-size:9.5px;letter-spacing:.3em;text-transform:uppercase;color:#1F6F66;font-weight:500}' +
    'ul{display:flex;gap:6px;list-style:none;margin:0;padding:0}' +
    'ul a{display:block;padding:10px 18px;border-radius:999px;font-size:15px;letter-spacing:.04em;transition:background .25s}' +
    'ul a:hover,ul a.on{background:rgba(91,191,173,.24)}' +
    '.rt{display:flex;align-items:center;gap:8px}.pts{font-size:14px;color:#1F6F66;padding:8px 6px}' +
    '.ic{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;transition:background .25s}.ic:hover{background:rgba(91,191,173,.24)}' +
    '.ic svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}' +
    '.bk{margin-left:4px;padding:12px 26px;border-radius:999px;font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:#133C37;background:linear-gradient(135deg,#fff 0%,#d5dce0 28%,#9aa5ad 52%,#eef2f4 74%,#b4bec5 100%);box-shadow:0 8px 22px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.85);transition:filter .25s}.bk:hover{filter:brightness(1.05)}' +
    '@media(max-width:1180px){.lg small,.pts{display:none}}';
  var host, root, wide = function () { return window.innerWidth >= 1000; };
  function build() {
    var fl = document.createElement('link'); fl.rel = 'stylesheet'; fl.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Jost:wght@400;500&display=swap'; document.head.appendChild(fl);
    host = document.createElement('div'); host.id = 'tyy-universal-nav';
    root = host.attachShadow({ mode: 'open' });
    var li = LINKS.map(function (l) { return '<li><a href="' + SITE + l[1] + '" data-p="' + l[2].join(',') + '">' + l[0] + '</a></li>'; }).join('');
    root.innerHTML = '<style>' + CSS + '</style><nav class="nav" aria-label="Main"><a class="lg" href="' + SITE + '/"><img src="' + BASE + 'logo.png" alt="Ten Years Younger logo"><span><b>Ten Years Younger</b><small>Anti-Aging &amp; Wellness</small></span></a><ul>' + li + '</ul><div class="rt"><a class="pts" href="' + SITE + '/account/my-rewards">View points</a><a class="ic" href="' + SITE + '/account/my-account" aria-label="Log in"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6"/></svg></a><a class="ic" href="' + SITE + '/cart" aria-label="Cart"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg></a><a class="bk" href="' + BOOK + '">Book Now</a></div></nav>';
    document.body.appendChild(host);
  }
  /* On pages whose first real content is a full-width embed, hide the empty Wix sections above it (the embed pads itself for the nav). */
  function lead() {
    var f = document.querySelector('iframe[src*="services-desktop"],iframe[src*="services-detail"]');
    var sec = f && f.closest('section');
    if (!sec || !sec.parentElement) return false;
    var kids = [].slice.call(sec.parentElement.children);
    for (var i = 0; i < kids.indexOf(sec); i++) {
      var k = kids[i];
      if (!k.querySelector('iframe') && k.getBoundingClientRect().height <= 80) k.classList.add('tyy-lead');
    }
    return true;
  }
  var st;
  function apply() {
    var on = wide();
    if (!st) { st = document.createElement('style'); st.id = 'tyy-nav-style'; document.head.appendChild(st); }
    var p = location.pathname.replace(/\/$/, '') || '/', home = p === '/';
    var emb = !home && on && lead();
    var css = on ? '#SITE_HEADER{display:none!important}' + (home || emb ? '' : 'body{padding-top:96px!important}') + (emb ? 'body{padding-top:0!important}.tyy-lead{display:none!important}' : '') : '';
    if (st.textContent !== css) st.textContent = css;
    if (host) host.style.display = on ? '' : 'none';
    if (root) root.querySelectorAll('ul a').forEach(function (a) { a.className = a.getAttribute('data-p').split(',').indexOf(p) > -1 ? 'on' : ''; });
  }
  /* Let a content-driven embed (Services) resize its Wix containers so a filtered page leaves no blank gap. */
  function fitEmbed(src, H) {
    if (!(H > 200 && H < 20000)) return;
    var f = [].slice.call(document.querySelectorAll('iframe')).filter(function (x) { return x.contentWindow === src; })[0];
    if (!f) return;
    var old = f.__tyyOld || f.getBoundingClientRect().height; f.__tyyOld = H;
    if (Math.abs(old - H) < 2) return;
    var el = f;
    while (el && el !== document.body) {
      var r = el.getBoundingClientRect().height;
      if (r >= old - 1) {
        el.style.setProperty('height', (H + (r - old)) + 'px', 'important');
        el.style.setProperty('min-height', '0', 'important');
        var g = getComputedStyle(el).gridTemplateRows;
        if (g && g !== 'none') el.style.setProperty('grid-template-rows', g.split(' ').map(function (x) { return Math.abs(parseFloat(x) - old) < 1 ? H + 'px' : x; }).join(' '), 'important');
      }
      el = el.parentElement;
    }
  }
  /* Concern deep links: /services-9?concern=lines. The Services embed asks (tyyReady) and we answer with the concern. */
  var OKC = ['lines', 'volume', 'pigment', 'tight', 'glow'];
  window.addEventListener('message', function (e) {
    if (e.data && e.data.tyyHeight && e.source) { fitEmbed(e.source, +e.data.tyyHeight); return; }
    if (e.data && typeof e.data.tyyScroll === 'number' && e.source) {
      var fr = [].slice.call(document.querySelectorAll('iframe')).filter(function (x) { return x.contentWindow === e.source; })[0];
      if (fr) window.scrollTo({ top: fr.getBoundingClientRect().top + window.pageYOffset + e.data.tyyScroll - 100, behavior: 'smooth' });
      return;
    }
    if (!e.data || !e.data.tyyReady || !e.source) return;
    var c = null; try { c = new URLSearchParams(location.search).get('concern'); } catch (x) {}
    if (c && OKC.indexOf(c) > -1) { try { e.source.postMessage({ tyyConcern: c }, '*'); } catch (x) {} }
  });
  function start() { build(); apply(); setInterval(apply, 600); window.addEventListener('resize', apply); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
