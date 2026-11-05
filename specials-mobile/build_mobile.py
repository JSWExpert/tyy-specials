# Builds the phone-only monthly specials page from the desktop monthly page (data stays single-source).
# Usage: python3 build_mobile.py november   (reads ../november/index.html, writes november/index.html)
import re,sys
month=sys.argv[1] if len(sys.argv)>1 else 'november'
src=open(f'../{month}/index.html').read()
days=re.findall(r'<button type="button" class="day".*?</button>',src,re.S)
gift=re.search(r'<template id="giftTpl">(.*?)</template>',src,re.S).group(1)
book='https://aespro.biz/TA7DNA6'
css=open('mobile.css').read()
js=open('mobile.js').read()
html=f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>A Great Big Thank You | Ten Years Younger (phone)</title>
<!-- PROVENANCE: Phone-only {month.title()} specials page, built by Allen (Claude) for Jasmine Wiseman, 2026-11-05, by specials-mobile/build_mobile.py from ../{month}/index.html. Desktop page unchanged. -->
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Jost:wght@300;400;500&family=Pinyon+Script&display=swap" rel="stylesheet">
<script>try{{if(window.top!==window.self)document.documentElement.className+=" emb"}}catch(e){{document.documentElement.className+=" emb"}}</script>
<style>{css}</style></head><body>

<section class="hero">
 <p class="script">{month.title()}</p>
 <h1>A Great Big Thank You</h1>
 <p class="to">to our loyal clients</p>
 <div class="gift"><img src="img/gift.png" alt="">
  <div class="box"><div class="tag">New this month</div><div class="amt">$1,100</div><div class="was">Regularly $1,399</div><h3>The Tox Box Debut</h3><button type="button" id="open">Explore the Tox Box &rsaquo;</button></div>
 </div>
 <div class="ctas"><a class="btn deep" href="{book}" target="_top">Book your visit</a><a class="btn ghost" href="#cal">See the calendar</a></div>
 <div class="panel" id="gp"><button class="x" aria-label="Close">&times;</button><div class="pb">{gift}</div></div>
</section>

<section class="band">
 <p class="pre">Buy 2, get the</p>
 <div class="obig"><b>3RD</b><em>Free</em></div>
 <p class="post">of the same aesthetic service</p>
 <div class="feats">
  <div class="feat"><svg viewBox="0 0 48 48"><path d="M24 40c-6-3-10-8-10-14 4 0 8 2 10 6 2-4 6-6 10-6 0 6-4 11-10 14z"/><path d="M24 32c-4-5-4-12 0-18 4 6 4 13 0 18z"/></svg><span>Buy any 2 of the same service</span></div>
  <div class="feat"><svg viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="20" rx="2"/><rect x="6" y="14" width="36" height="7" rx="2"/><path d="M24 14v26"/></svg><span>Your 3rd one is free</span></div>
  <div class="feat"><svg viewBox="0 0 48 48"><path d="M14 34l12-12 4 4-12 12-6 2zM24 20l4 4M30 14l4 4"/><path d="M8 8l32 32"/></svg><span>Filler and neuromodulators not included</span></div>
 </div>
 <a class="btn gold" href="{book}" target="_top">Book your visit</a>
 <details class="fd"><summary>Offer details</summary><p>Buy 2 of the same aesthetic service and get a 3rd of that same service free. Filler and neuromodulators of any kind are not included. No cash value. Offers may change, so please call or book online to confirm.</p></details>
</section>

<section class="cal" id="cal">
 <div class="hd"><div class="eb">Exclusive offers all month long</div><h2>The <span class="sc">{month.title()}</span> Calendar</h2></div>
 <div class="rail" id="rail">
{chr(10).join(days)}
 </div>
 <div class="prog"><i id="pg"></i></div>
 <div class="hint">Swipe for more &middot; tap a day for details</div>
 <div class="panel" id="dp"><button class="x" aria-label="Close">&times;</button><div class="pb" id="dpb"></div></div>
 <p class="fine">Valid on the listed day only, one offer per visit, no cash value, cannot be saved for later. Offers may change, so please call or book online to confirm.</p>
</section>

<footer>
 <div class="thx">Thank you for being part of<br>the <em>Ten Years Younger</em> family.</div>
 <a class="btn deep" href="{book}" target="_top">Book your visit</a>
 <a class="call" href="tel:8329098031" target="_top">832-909-8031</a>
 <div class="addr">16316 FM 529 Rd, Suite C &middot; Houston, TX 77095</div>
</footer>
<script>{js}</script>
</body></html>'''
open(f'{month}/index.html','w').write(html)
print(len(html))
