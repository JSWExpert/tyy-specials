# Builds one detail page per category into <slug>/index.html. No prices, no brand names, no staff.
import os
BOOK="https://www.myaestheticspro.com/BN/index.cfm?D2BFB64A9DF9C64D43CE5587075B5B52FBC66F7FCA968DDF12B85466368C5E81"
PAGES={
 'lab':dict(title='Lab Testing',kick='Lab testing',h1='Know your numbers, <em>then plan.</em>',
  lead='Your results help shape a plan that fits you, not a one-size-fits-all routine.',img='../../services-mobile/img/lab.jpg',cta='Book a lab visit',
  goodkick='Good for',goodh='Who it helps',good=['Starting a wellness or weight program','Wanting to understand how you feel day to day','Choosing a longer-term plan with confidence'],
  stepsh='Simple from start to finish',steps=[('1. Book','Choose a time that works for you.'),('2. We review','Your results explained in plain language.'),('3. Your plan','Built around your numbers.')],
  note='We are finalizing our panels with a new testing partner. Ask us at your visit what we can test for.',
  ctah='Ready to know your numbers?',ctap='Book online or call us. We will take it from there.'),
 'consult':dict(title='Consultations',kick='Consultations',h1='Start with <em>a conversation.</em>',
  lead='Your consultation happens at your appointment. We listen first, then shape a plan around your skin, your goals and your schedule. No pressure.',img='../../services-mobile/img/hero.jpg',cta='Book my appointment',
  goodkick='Good for',goodh='Who it is for',good=['Not sure where to begin','Comparing a few treatments','Wanting a plan that fits your schedule'],
  stepsh='Three easy steps',steps=[('1. Tell us','What you would like to change.'),('2. We recommend','The treatment that fits, and what to use at home.'),('3. You decide','At your pace, with every question answered.')],
  note='',ctah='Not sure where to start?',ctap='Book your appointment and we will walk through it together.'),
 'soon':dict(title='Coming soon',kick='Under construction',h1='Something lovely is <em>on its way.</em>',
  lead='We are rebuilding this part of our site so it is easier to explore. In the meantime, we are happy to guide you in person.',img='../../services-mobile/img/hero.jpg',cta='Book a consultation',
  goodkick='Coming soon',goodh='What to look forward to',good=['A short quiz that points you to the right treatment','Every treatment explained, with what to expect','Easy booking when you are ready'],
  stepsh='Until then',steps=[('1. Book','Choose a time that suits you.'),('2. Talk with us','We listen first, then recommend.'),('3. Begin','At your pace, no pressure.')],
  note='',ctah='Want to start now?',ctap='Book online or call us. We will take it from there.'),
}
tpl=open('template.html').read()
for slug,p in PAGES.items():
    h=tpl
    for k,v in dict(TITLE=p['title'],KICK=p['kick'],H1=p['h1'],LEAD=p['lead'],IMG=p['img'],CTA=p['cta'],GOODKICK=p['goodkick'],GOODH=p['goodh'],STEPSH=p['stepsh'],CTAH=p['ctah'],CTAP=p['ctap']).items(): h=h.replace('/*%s*/'%k,v)
    h=h.replace('/*GOOD*/',''.join('<div>%s</div>'%g for g in p['good'])).replace('/*STEPS*/',''.join('<div><b>%s</b><span>%s</span></div>'%s for s in p['steps']))
    h=h.replace('/*NOTE*/','<p class="note">%s</p>'%p['note'] if p['note'] else '').replace('BOOKURL',BOOK)
    os.makedirs(slug,exist_ok=True); open(slug+'/index.html','w').write(h)
print('built',list(PAGES))
