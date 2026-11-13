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
    root.innerHTML = '<style>' + CSS + '</style><nav class="nav" aria-label="Main"><a class="lg" href="' + SITE + '/"><img src="' + BASE + 'logo.png" alt="Ten Years Younger logo"><span><b>Ten Years Younger</b><small>Anti-Aging &amp; Wellness</small></span></a><ul>' + li + '</ul><div class="rt"><a class="ic" href="' + SITE + '/cart" aria-label="Cart"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg></a><a class="bk" href="' + BOOK + '">Book Now</a></div></nav>';
    document.body.appendChild(host);
    /* Keep the nav invisible until its logo and fonts are ready, so it never shows in fallback fonts without the logo. */
    host.style.opacity = '0'; host.style.transition = 'opacity .35s';
    var shown = false, show = function () { if (shown) return; shown = true; host.style.opacity = '1'; };
    var img = root.querySelector('img');
    var imgReady = new Promise(function (r) { if (!img || img.complete) r(); else { img.onload = r; img.onerror = r; } });
    var fontsReady = (document.fonts && document.fonts.load) ? Promise.all([document.fonts.load('600 21px "Cormorant Garamond"'), document.fonts.load('500 15px Jost')]) : Promise.resolve();
    Promise.all([imgReady, fontsReady]).then(show, show);
    setTimeout(show, 2500);
  }

  /* ---- Concierge: on-brand replacement for the Wix Virtual Assistant (desktop only). Leads post to the same
     /_functions/inquiry endpoint as the About page (saves a contact + emails Info@). ---- */
  var CCSS = ':host{all:initial}*{box-sizing:border-box}' +
    '.fab{position:fixed;z-index:2147482990;right:28px;bottom:28px;display:flex;align-items:center;gap:12px;padding:10px 22px 10px 10px;border:0;border-radius:999px;cursor:pointer;font-family:Jost,system-ui,sans-serif;font-size:14px;letter-spacing:.06em;color:#fff;background:linear-gradient(135deg,rgba(31,111,102,.94),rgba(19,60,55,.96));box-shadow:0 18px 44px -14px rgba(19,60,55,.65),inset 0 1px 0 rgba(255,255,255,.22);transition:transform .3s,box-shadow .3s}' +
    '.fab:hover{transform:translateY(-2px);box-shadow:0 22px 50px -14px rgba(19,60,55,.75),inset 0 1px 0 rgba(255,255,255,.22)}' +
    '.fab i{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#fff 0%,#d5dce0 30%,#9aa5ad 55%,#eef2f4 78%,#b4bec5 100%);color:#133C37}' +
    '.fab svg,.x svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}' +
    '.pn{position:fixed;z-index:2147482991;right:28px;bottom:28px;width:360px;max-height:calc(100vh - 56px);overflow:auto;border-radius:30px;background:linear-gradient(180deg,rgba(226,245,240,.96) 0,rgba(255,255,255,.97) 150px);backdrop-filter:blur(22px) saturate(1.3);-webkit-backdrop-filter:blur(22px) saturate(1.3);box-shadow:0 34px 80px -24px rgba(19,60,55,.55),0 0 0 1px rgba(255,255,255,.6) inset;font-family:Jost,system-ui,sans-serif;color:#133C37;opacity:0;transform:translateY(14px) scale(.98);pointer-events:none;visibility:hidden;transition:opacity .3s,transform .3s,visibility .3s}' +
    '.pn.open{opacity:1;transform:none;pointer-events:auto;visibility:visible}' +
    '.hd{padding:24px 28px 4px;position:relative}.ey{font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:#1F6F66;font-weight:500}' +
    '.hd h2{margin:8px 0 6px;font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:30px;line-height:1.05;letter-spacing:.01em}.hd h2 em{font-style:italic;color:#1F6F66}' +
    '.hd p{margin:0;font-size:15px;line-height:1.5;color:#3c5a55;font-weight:400}' +
    '.x{position:absolute;top:18px;right:18px;width:36px;height:36px;border:0;border-radius:50%;background:rgba(91,191,173,.16);color:#133C37;display:grid;place-items:center;cursor:pointer;transition:background .25s}.x:hover{background:rgba(91,191,173,.32)}.x svg{width:17px;height:17px}' +
    '.ac{display:flex;gap:10px;padding:14px 28px 4px}' +
    '.b{flex:1;display:flex;align-items:center;justify-content:center;height:46px;padding:0 12px;white-space:nowrap;text-align:center;line-height:1;border-radius:999px;font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;cursor:pointer;border:0;font-family:inherit;transition:filter .25s,transform .25s}.b:hover{filter:brightness(1.06);transform:translateY(-1px)}' +
    '.b.p{color:#fff;background:linear-gradient(135deg,#2a9487,#1b6f66);box-shadow:0 10px 24px -10px rgba(31,111,102,.7)}' +
    '.b.c{color:#133C37;background:linear-gradient(135deg,#fff 0%,#d5dce0 28%,#9aa5ad 52%,#eef2f4 74%,#b4bec5 100%);box-shadow:0 8px 20px rgba(0,0,0,.14),inset 0 1px 0 rgba(255,255,255,.85)}' +
    '.or{display:flex;align-items:center;justify-content:center;gap:8px;width:calc(100% - 56px);height:44px;margin:12px 28px 22px;border:0;border-radius:999px;cursor:pointer;font:500 12px Jost,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#1F6F66;background:rgba(91,191,173,.14);transition:background .25s}.or:hover{background:rgba(91,191,173,.26)}.or svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}form{display:none}.pn.more form{display:grid;animation:fd .35s ease both}.pn.more .or{display:none}@keyframes fd{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}' +
    'form{padding:8px 28px 22px;gap:8px}' +
    'label{display:block}.in{width:100%;border:0;outline:0;border-radius:16px;padding:12px 16px;font:400 15px Jost,system-ui,sans-serif;color:#133C37;background:rgba(91,191,173,.11);transition:box-shadow .25s,background .25s}' +
    '.in::placeholder{color:#6f8a85}.in:focus{background:rgba(91,191,173,.17);box-shadow:0 0 0 3px rgba(91,191,173,.35)}.in.bad{box-shadow:0 0 0 3px rgba(180,88,79,.4)}textarea.in{resize:none;height:64px;min-height:64px}' +
    '.cs{display:flex;gap:10px;align-items:flex-start;font-size:12px;line-height:1.5;color:#4b6863}.cs input{margin-top:2px;width:16px;height:16px;accent-color:#1F6F66;flex:none}' +
    '.go{margin-top:2px;height:46px;padding:0;border:0;border-radius:999px;cursor:pointer;font:500 12.5px Jost,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:linear-gradient(135deg,#2a9487,#1b6f66);box-shadow:0 12px 28px -12px rgba(31,111,102,.75);transition:filter .25s}.go:hover{filter:brightness(1.07)}.go[disabled]{opacity:.7;cursor:default}' +
    '.er{display:none;font-size:13px;line-height:1.5;color:#8a3d35}.er a{color:#8a3d35}' +
    '.hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}' +
    '.ok{display:none;padding:34px 30px 40px;text-align:center}.ok h3{margin:0 0 8px;font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:30px}.ok p{margin:0 0 20px;font-size:15px;line-height:1.55;color:#3c5a55}' +
    '.pn.sent form,.pn.sent .or,.pn.sent .ac{display:none}.pn.sent .ok{display:block}' +
    '@media(prefers-reduced-motion:reduce){*{transition:none!important}}';
  var chost, croot;
  function buildConcierge() {
    chost = document.createElement('div'); chost.id = 'tyy-concierge';
    croot = chost.attachShadow({ mode: 'open' });
    var chat = '<svg viewBox="0 0 24 24"><path d="M5 5h14a2 2 0 012 2v8a2 2 0 01-2 2h-7l-4.5 3.5V17H5a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>';
    croot.innerHTML = '<style>' + CCSS + '</style>' +
      '<button class="fab" type="button" aria-expanded="false" aria-controls="pn"><i>' + chat + '</i><span>Ask us anything</span></button>' +
      '<section class="pn" id="pn" role="dialog" aria-label="Contact Ten Years Younger" aria-hidden="true">' +
      '<div class="hd"><button class="x" type="button" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button><div class="ey">Ten Years Younger</div><h2>How can we <em>help?</em></h2><p>Ask a question, or start with a consultation. We reply as soon as we can.</p></div>' +
      '<div class="ac"><a class="b p" href="' + BOOK + '">Book now</a><a class="b c" href="tel:8329098031">Call us</a></div>' +
      '<button class="or" type="button">Send us a note <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<form novalidate autocomplete="on"><input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<label><input class="in" name="name" placeholder="Your name" autocomplete="name" aria-label="Your name"></label>' +
      '<label><input class="in" name="email" type="email" placeholder="Email" autocomplete="email" aria-label="Email"></label>' +
      '<label><input class="in" name="phone" type="tel" placeholder="Phone" autocomplete="tel" aria-label="Phone"></label>' +
      '<label><textarea class="in" name="message" placeholder="How can we help?" aria-label="Message"></textarea></label>' +
      '<label class="cs"><input type="checkbox" name="sms"><span>I agree to receive text messages from Ten Years Younger about my request. Message and data rates may apply. Reply STOP to opt out.</span></label>' +
      '<div class="er" role="alert"></div><button class="go" type="submit">Send message</button></form>' +
      '<div class="ok"><h3>Thank you.</h3><p>We received your note and will reply as soon as we can.</p><a class="b c" href="' + BOOK + '" style="display:inline-flex;padding:0 28px">Book a consultation</a></div></section>';
    document.body.appendChild(chost);
    var fab = croot.querySelector('.fab'), pn = croot.querySelector('.pn'), fm = croot.querySelector('form');
    function open(o) { if (!o) pn.classList.remove('more'); pn.classList.toggle('open', o); pn.setAttribute('aria-hidden', o ? 'false' : 'true'); fab.setAttribute('aria-expanded', o ? 'true' : 'false'); fab.style.visibility = o ? 'hidden' : ''; if (!o) try { fab.focus({ preventScroll: true }); } catch (x) {} }
    fab.addEventListener('click', function () { open(true); });
    croot.querySelector('.or').addEventListener('click', function () { pn.classList.add('more'); setTimeout(function () { try { fm.name.focus({ preventScroll: true }); } catch (x) {} }, 120); });
    croot.querySelector('.x').addEventListener('click', function () { open(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pn.classList.contains('open')) open(false); });
    fm.addEventListener('submit', function (e) {
      e.preventDefault(); if (fm.website.value) return;
      var n = fm.name.value.trim(), em = fm.email.value.trim(), ph = fm.phone.value.trim(), msg = fm.message.value.trim();
      [].forEach.call(fm.querySelectorAll('.in'), function (i) { i.classList.remove('bad'); });
      var bad = !n ? fm.name : !/^\S+@\S+\.\S+$/.test(em) ? fm.email : ph.replace(/\D/g, '').length < 7 ? fm.phone : !msg ? fm.message : null;
      if (bad) { bad.classList.add('bad'); bad.focus(); return; }
      var d = { name: n, email: em, phone: ph, message: msg + (fm.sms.checked ? '\n\n[Agreed to receive text messages]' : ''), _subject: 'Website message from ' + n };
      var gb = fm.querySelector('.go'), er = fm.querySelector('.er'); er.style.display = 'none'; gb.disabled = true; gb.textContent = 'Sending...';
      var ac = new AbortController(), tm = setTimeout(function () { ac.abort(); }, 9000);
      fetch(SITE + '/_functions/inquiry', { method: 'POST', signal: ac.signal, headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
        .then(function (r) { clearTimeout(tm); if (!r.ok) throw 0; return r.json(); })
        .then(function (j) { if (j && (j.success === false || j.success === 'false')) throw 0; pn.classList.add('sent'); fm.reset(); gb.disabled = false; gb.textContent = 'Send message'; })
        .catch(function () { clearTimeout(tm); gb.disabled = false; gb.textContent = 'Send message'; er.style.display = 'block'; er.innerHTML = 'We could not send that just now. Please call <a href="tel:8329098031">832-909-8031</a>.'; });
    });
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
    var css = on ? 'iframe[title="Wix Chat"]{display:none!important}#SITE_HEADER{display:none!important}' + (home || emb ? '' : 'body{padding-top:96px!important}') + (emb ? 'body{padding-top:0!important}.tyy-lead{display:none!important}' : '') : '';
    if (st.textContent !== css) st.textContent = css;
    if (host) host.style.display = on ? '' : 'none';
    if (chost) chost.style.display = on ? '' : 'none';
    if (root) root.querySelectorAll('ul a').forEach(function (a) { a.className = a.getAttribute('data-p').split(',').indexOf(p) > -1 ? 'on' : ''; });
  }
  /* Let a content-driven embed (Services) resize its Wix containers so a filtered page leaves no blank gap. */
  function fitEmbed(src, H) {
    if (!(H > 200 && H < 20000)) return;
    var f = [].slice.call(document.querySelectorAll('iframe')).filter(function (x) { return x.contentWindow === src; })[0];
    if (!f || f.__last === H) return;
    f.__last = H;
    apply(); /* make sure the empty Wix sections above the embed are already hidden before we measure */
    /* Idempotent: clear our own overrides, measure the natural layout, then apply from that. */
    var chain = [], el = f;
    while (el && el !== document.body) { chain.push(el); el = el.parentElement; }
    chain.forEach(function (e) { if (e.__tyy) { e.style.removeProperty('height'); e.style.removeProperty('min-height'); e.style.removeProperty('grid-template-rows'); } });
    var B = f.getBoundingClientRect().height;
    var info = chain.map(function (e) { return { e: e, r: e.getBoundingClientRect().height, g: getComputedStyle(e).gridTemplateRows }; });
    info.forEach(function (n, i) {
      if (n.r >= B - 1) {
        n.e.__tyy = 1;
        n.e.style.setProperty('height', (H + (n.r - B)) + 'px', 'important');
        n.e.style.setProperty('min-height', '0', 'important');
        /* A grid row holds its child (the previous link in the chain): resize the row that matches that child's natural height. */
        var ch = i ? info[i - 1] : { r: B };
        if (n.g && n.g !== 'none') n.e.style.setProperty('grid-template-rows', n.g.split(' ').map(function (x) { return Math.abs(parseFloat(x) - ch.r) < 1.5 ? (H + (ch.r - B)) + 'px' : x; }).join(' '), 'important');
      }
    });
  }
  /* Concern deep links: /services-9?concern=lines. The Services embed asks (tyyReady) and we answer with the concern. */
  var OKC = ['lines', 'volume', 'pigment', 'tight', 'glow'];
  window.addEventListener('message', function (e) {
    if (e.data && e.data.tyyHeight && e.source) { fitEmbed(e.source, +e.data.tyyHeight); return; }
    if (e.data && typeof e.data.tyyNav === 'string' && e.source) {
      var nv = e.data.tyyNav, qs = nv === 'hub' ? '' : (nv.indexOf('g:') === 0 ? '?cat=' + nv.slice(2) : nv.indexOf('s:') === 0 ? '?sub=' + nv.slice(2) : nv.indexOf('t:') === 0 ? '?t=' + nv.slice(2) : '?concern=' + nv.slice(2));
      try { history.pushState(null, '', location.pathname + qs); } catch (x) {}
      window.scrollTo(0, 0);
      return;
    }
    if (e.data && typeof e.data.tyyScroll === 'number' && e.source) {
      var fr = [].slice.call(document.querySelectorAll('iframe')).filter(function (x) { return x.contentWindow === e.source; })[0];
      if (fr) window.scrollTo({ top: fr.getBoundingClientRect().top + window.pageYOffset + e.data.tyyScroll - 100, behavior: 'smooth' });
      return;
    }
    if (!e.data || !e.data.tyyReady || !e.source) return;
    var v = viewFromUrl();
    if (v) { try { e.source.postMessage({ tyyView: v }, '*'); } catch (x) {} }
  });
  /* The Services embed is one page with several views. Keep the address bar in step (no reload) and honour Back/Forward. */
  var GK = ['inj', 'skin', 'well', 'her', 'start'];
  function viewFromUrl() {
    try {
      var q = new URLSearchParams(location.search), c = q.get('concern'), g = q.get('cat');
      if (c && OKC.indexOf(c) > -1) return 'c:' + c;
      var tt0 = q.get('t'); if (tt0 && /^[a-z0-9-]+$/.test(tt0)) return 't:' + tt0;
      var sb0 = q.get('sub'); if (sb0 && /^[a-z]+$/.test(sb0)) return 's:' + sb0;
      if (g && GK.indexOf(g) > -1) return 'g:' + g;
      var sb = q.get('sub'); if (sb && /^[a-z]+$/.test(sb)) return 's:' + sb;
      var tt = q.get('t'); if (tt && /^[a-z0-9-]+$/.test(tt)) return 't:' + tt;
    } catch (x) {}
    return 'hub';
  }
  function svcFrame() { return [].slice.call(document.querySelectorAll('iframe')).filter(function (x) { return /services-desktop/.test(x.src); })[0]; }
  window.addEventListener('popstate', function () {
    var f = svcFrame(); if (f && f.contentWindow) { try { f.contentWindow.postMessage({ tyyView: viewFromUrl() }, '*'); } catch (x) {} }
  });
  function start() { build(); buildConcierge(); apply(); setInterval(apply, 600); window.addEventListener('resize', apply); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
