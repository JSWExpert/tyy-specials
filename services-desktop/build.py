import json,re
L=json.load(open('/private/tmp/claude-501/-Users-jasmine/c35fc938-c396-4524-a8bf-4985f9fcd01f/scratchpad/lib.json'))
BOOK="https://www.myaestheticspro.com/BN/index.cfm?D2BFB64A9DF9C64D43CE5587075B5B52FBC66F7FCA968DDF12B85466368C5E81"
EXCL={'IM STEROID INJECTION','ZOFRAN','TORADOL 30MG','IV EXOSOMES DEPOSIT','6 FOR 8 IV SPECIAL'}
SMALL={'and','of','w/','for','a','the','with'}
def tc(n):
    n=n.replace('W/','with')
    out=[]
    for i,w in enumerate(n.lower().split(' ')):
        if w in ('iv','hifem','b12','hi-dose','nad+','prp','prf','ha','coq-10','h2o','d3','o-shot'): out.append(w.upper() if w!='hi-dose' else 'High-Dose'); continue
        out.append(w if (w in SMALL and i) else w[:1].upper()+w[1:])
    r=' '.join(out)
    r=re.sub(r'\bMg\b','mg',r); r=r.replace('Ml','mL'); r=r.replace('Iv ','IV ')
    return r
def clean_time(t):
    t=t.replace('–',' to ').replace('—',' ')
    t=re.sub(r'\s*\(.*?\)','',t).strip()
    return t
def first_ben(b):
    if not b: return ''
    x=b[0].strip().replace(' — ',', ').replace('—',', ').replace(' – ',', ')
    return x if len(x)<=120 else x[:117].rsplit(' ',1)[0]+'...'
rows=[o for o in L if not o['cat'].startswith('BHRT') and o['name'] not in EXCL]
def mk(cat,name,time,ben,opts=None,tags=()):
    return dict(cat=cat,n=name,t=time,b=ben,o=opts or [],g=list(tags))
CAT={'FACIALS AND SCRUBS':'facials','CHEMICAL PEELS':'peel','FILLER INJECTION SERVICES':'filler','IV ADD-ONS':'boost','IV THERAPY':'iv','JELLY MASKS':'jelly','MICRONEEDLING':'needle','PRF / UNDER EYE':'eye','SEXUAL HEALTH / URINARY INCONTINENCE':'her','TOXIN':'toxin','VITAMIN INJECTIONS':'shots'}
items=[]; merged=set()
by={o['name']:o for o in rows}
def grp(key,names,title,time,ben_from,opts):
    o=by[ben_from]
    for n in names: merged.add(n)
    items.append(mk(key,title,time,first_ben(o['ben']),opts))
grp('iv',['250MG NAD+ INFUSION','500MG NAD+ IV INFUSION'],'NAD+ Infusion','2 to 5 hours','250MG NAD+ INFUSION',['250 mg','500 mg'])
grp('iv',['H2O 100ML','H2O FORMULA 250ML','H2O FORMULA 500ML','H2O FORMULA 1 LITER'],'H2O Hydration Formula','15 to 60 minutes','H2O FORMULA 500ML',['100 mL','250 mL','500 mL','1 liter'])
grp('iv',['ENERGY-BOOSTING HYDRATION IV','ENERGY BOOSTING HYDRATING IV W/ B12 PUSH'],'Energy-Boosting Hydration IV','45 to 60 minutes','ENERGY-BOOSTING HYDRATION IV',['Add a B12 push'])
grp('shots',['100 MG NAD+ INJECTION','50 MG NAD+ INJECTION','25 MG NAD+ INJECTION'],'NAD+ Injection','5 to 10 minutes','50 MG NAD+ INJECTION',['25 mg','50 mg','100 mg'])
grp('shots',['LIPO C INJECTION','SLIM SHOT (LIPO C)'],'Lipo-C Injection','5 to 10 minutes','LIPO C INJECTION',[])
grp('facials',['DATE NIGHT FACIAL W/ BRIGHTENING COMPLEX','DATE NIGHT FACIAL W/ HA','DATE NIGHT FACIAL W/ PRF','DATE NIGHT FACIAL W/ X-RATED','DATE NIGHT W/ PRP'],'Date Night Facial','45 to 60 minutes','DATE NIGHT FACIAL W/ HA',['Brightening Complex','Hyaluronic Acid','PRF','PRP','X-Rated Exosomes'])
for o in rows:
    if o['name'] in merged: continue
    key=CAT[o['cat']]
    name=tc(o['name'])
    if key=='her' and 'HIFEM' in o['name']: name='Anti-Drip Chair Treatment'; ben='Strengthens pelvic floor muscles with a comfortable, clothes-on session.'
    else: ben=first_ben(o['ben'])
    items.append(mk(key,name,clean_time(o['time']),ben if key!='jelly' else '',[]))
items.append(mk('needle_soon','Laser Treatments','Coming soon','A new way to treat your skin is on its way.',[]))
# concern tags
def tag(i):
    n=i['n'].lower(); c=i['cat']; g=[]
    if c=='toxin' or 'smile line' in n or 'illumin-lines' in n or 'age rewind' in n: g.append('lines')
    if c=='filler' or 'under eye' in n or 'illumin' in n: g.append('volume')
    if 'peel' in n or 'brightening' in n or 'exosomes' in n or 'prf microneedling' in n or 'date night' in n or 'skin radiance' in n: g.append('pigment')
    if c in('needle',) or 'radiesse' in n or 'prf' in n or 'age rewind' in n: g.append('tight')
    if c in('facials','jelly') or 'dermaplaning' in n or 'skin radiance' in n or 'peel' in n: g.append('glow')
    i['g']=sorted(set(g)); return i
items=[tag(i) for i in items]
for i in items:
    if i['cat']=='needle_soon': i['cat']='needle'; i['soon']=1; i['g']=['tight']
GROUPS=[
 ('inj','Injectables','Smooth lines and restore shape, kept natural.',[('toxin','Wrinkle relaxers','Four trusted brands, so we can match the right one to you.','https://www.10yearsyounger4u.com/filler-and-facial-augmentation'),('filler','Fillers & contouring','Lips, cheeks, chin, jawline and more.','https://www.10yearsyounger4u.com/filler-and-facial-augmentation')]),
 ('skin','Skin','Glow, clarity and firmer-feeling skin.',[('facials','Facials & scrubs','Glow-first facials tailored to your skin.','https://www.10yearsyounger4u.com/facials-scrubs'),('needle','Micro-needling','Collagen-boosting sessions to refine texture and tone.','https://www.10yearsyounger4u.com/micro-needling-description-booking-page'),('peel','Chemical peel','Renew the surface for a fresher, smoother complexion.','https://www.10yearsyounger4u.com/microneedling-chemical-peel'),('eye','Under-eye care','Targeted treatments for the delicate eye area.',''),('jelly','Jelly masks','Twenty flavors to finish a facial. Pick your favorite.','https://www.10yearsyounger4u.com/facials-scrubs')]),
 ('well','Wellness','Hydration, nutrients and a boost when you need it.',[('iv','IV therapy','Hydration and nutrients, delivered while you relax.','https://www.10yearsyounger4u.com/iv-therapy'),('boost','IV boosters','Add-ons to personalize any IV session.','https://www.10yearsyounger4u.com/iv-therapy'),('shots','Vitamin injections','Quick shots, in and out in minutes.','https://www.10yearsyounger4u.com/iv-therapy')]),
 ('her','Women\'s health','Private, respectful care for intimate wellness and confidence.',[('her','Women\'s health','Private, respectful care.','https://www.10yearsyounger4u.com/women-sexual-health')]),
]
tpl=open('template.html').read()
html=tpl.replace('/*ITEMS*/',json.dumps(items,ensure_ascii=False)).replace('/*GROUPS*/',json.dumps(GROUPS,ensure_ascii=False)).replace('BOOKURL',BOOK)
open('index.html','w').write(html)
print(len(items),'items',len(html),'bytes')
