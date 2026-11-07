import json
BOOK="https://www.myaestheticspro.com/BN/index.cfm?D2BFB64A9DF9C64D43CE5587075B5B52FBC66F7FCA968DDF12B85466368C5E81"
SHOW_PRICES=False   # flip to False to hide every "From $X" chip
# (cat, name, desc, from_price or 0, options, concern tags)
I=[]
def a(cat,name,desc,p=0,opts=(),tags=()): I.append(dict(cat=cat,n=name,d=desc,p=p,o=list(opts),g=list(tags)))
# WRINKLE RELAXERS (areas only, no prices)
a('toxin','Forehead lines','Smooth the lines across your forehead.',0,(),['lines'])
a('toxin','Frown lines','Soften the lines between your brows.',0,(),['lines'])
a('toxin',"Crow's feet",'Soften the lines around your eyes.',0,(),['lines'])
a('toxin','Eyebrow lift','A subtle lift to open up the eyes.',0,(),['lines'])
a('toxin','Lip flip','A softer, fuller-looking upper lip.',0,(),['lines','volume'])
a('toxin','Jawline','Soften and define the lower face.',0,(),['volume'])
a('toxin','Masseters','Relax the jaw for a slimmer, softer lower face.',0,(),['volume'])
a('toxin','Platysmal neck bands','Smooth and soften vertical neck bands.',0,(),['lines','tight'])
# FILLERS & CONTOURING
a('filler','Lips','Shape and fullness, kept natural.',679,(),['volume'])
a('filler','Cheeks','Restore lift and volume.',800,(),['volume'])
a('filler','Chin','Balance and define your profile.',679,(),['volume'])
a('filler','Jawline','Sculpted definition along the jaw.',800,(),['volume'])
a('filler','Smile lines','Soften the lines around your mouth.',789,(),['lines','volume'])
a('filler','Tear troughs','Refresh hollows under the eyes.',715,(),['volume'])
a('filler','Chin fat reduction','Reduce fullness under the chin, no surgery.',750,(),['volume'])
a('filler','PRF filler','A natural option for volume and smoothing.',1400,(),['volume'])
a('filler','Filler touch-up','A refresh to keep your results looking their best.',399,(),['volume'])
# FACIALS
a('facials','Deep Pore Cleansing','Clearer, refreshed-looking skin.',120,(),['glow'])
a('facials','100% Natural Deep Pore Cleansing & Detox Facial','A deeper, all-natural reset for congested skin.',150,(),['glow'])
a('facials','Ancient Detox Facial','A purifying facial that leaves skin fresh.',65,(),['glow'])
a('facials','Deluxe Facial','Our most complete facial experience.',349,(),['glow'])
a('facials','Dermaplaning','Smoother skin and a brighter finish.',99,(),['glow','pigment'])
a('facials','Date Night Facial','Event-ready glow, with boosts to choose from.',150,['Brightening Complex','Hyaluronic Acid','PRP','PRF','X-Rated'],['glow','pigment'])
a('facials','Age Rewind Mask','A quick mask treatment for fresher, more hydrated skin.',60,(),['lines','tight','glow'])
a('facials','Brightening Treatment','A mask treatment to brighten your complexion.',99,(),['pigment','glow'])
# MICRONEEDLING
a('needle','Age Rewind Microneedling','A collagen-boosting session for smoother-looking skin.',400,(),['lines','tight'])
a('needle','Hyaluronic Acid Microneedling','A hydrating session to refine texture and glow.',150,(),['tight','glow'])
a('needle','PRP Face Microneedling','Your own natural renewal for a fresher complexion.',500,(),['tight','pigment'])
a('needle','PRF Microneedling Facial','A regenerative session for firmer-looking skin.',1000,(),['tight','lines'])
a('needle','X-Rated Plus Microneedling','Our advanced session for renewed texture and tone.',799,(),['tight','pigment'])
a('needle','Microneedling with Stem Cells','A next-level session for skin renewal.',1500,(),['tight'])
a('needle','Laser Treatments','A new way to treat your skin is on its way.',0,(),['tight'])
I[-1]['soon']=1
# PEEL
a('peel','Chemical Peel','Renew the surface for a fresher, smoother complexion.',375,(),['pigment','glow'])
# UNDER EYE & SMILE LINES
a('eye','PRP Under-Eye Injections','Brighten and refresh the delicate eye area.',299,(),['volume'])
a('eye','PRF Under-Eye Injections','Brighten and refresh the delicate eye area.',399,(),['volume'])
a('eye','PRP Under-Eye Microneedling','A gentle option to refresh under the eyes.',199,(),['volume'])
a('eye','PRF Under-Eye Microneedling','A gentle option to refresh under the eyes.',250,(),['volume'])
a('eye','PRF + Tear-Trough Filler','Volume and renewal together under the eyes.',920,(),['volume'])
a('eye','PRP Smile Line Injections','Soften the lines around the mouth.',299,(),['lines'])
a('eye','PRF Smile Line Injections','Soften the lines around the mouth.',399,(),['lines'])
# SPOT
a('spot','Scar & Mark Treatment','Targeted injections for acne scars, pick scars, dark marks and old injuries.',199,['PRP','PRF','X-Rated Plus'],['pigment'])
# IV
IVD='Hydration and nutrients, delivered while you relax.'
for n,d,p,o,t in [
 ('Myers Cocktail','A classic wellness favorite.',199,(),[]),
 ('Total Wellness IV','Our most complete wellness drip.',299,(),[]),
 ('Immune Booster Infusion','Support when you want to stay well.',189,(),[]),
 ('Cold and Flu Buster IV','Support when you are run down.',215,(),[]),
 ('Energy-Boosting Hydration IV','Hydration to help you feel energized.',149,['Add a B12 push'],[]),
 ('Energy Complex IV','A quick energy-focused drip.',99,(),[]),
 ('Athletic Performance IV','Fuel for training and recovery.',399,(),[]),
 ('Post Workout Recharge','Replenish after a hard session.',150,(),[]),
 ('Hangover Recovery IV','Rehydrate and reset.',189,(),[]),
 ('Stress Buster IV','A calming, replenishing drip.',199,(),[]),
 ('Love Drip','A feel-good drip, just because.',200,(),[]),
 ('Dr. Feel Good','A simple lift when you need one.',150,(),[]),
 ('Skin Radiance IV','Hydration for a healthy-looking glow.',149,(),['glow']),
 ('Glutathione IV','Lower doses support detox. Higher doses are for skin brightening.',395,(),['pigment','glow']),
 ('Detox IV','A cleansing, hydrating drip.',189,(),[]),
 ('Detox Push','A quick detox boost, in three levels.',150,['Plus','Super Plus'],[]),
 ('Heavy Metal Chelation Therapy','A longer therapy session. Ask us if it is right for you.',250,(),[]),
 ('Remineralization IV','Replenish essential minerals.',200,(),[]),
 ('NAD+ Infusion','A longer infusion for cellular wellness.',450,['250 mg','500 mg'],[]),
 ('H2O Hydration Formula','Simple hydration in four sizes.',40,['100 mL','250 mL','500 mL','1 liter'],[]),
 ('High-Dose Vitamin C IV','Dose tailored to you.',0,(),[]),
 ('Vitamin C IV','A bright, replenishing drip.',249,(),[]),
 ('Optimal IV','Built around your needs.',0,(),[]),
]: a('iv',n,d,p,o,t)
# SHOTS
for n,d,p,o in [
 ('B12 Injection','A quick energy lift.',20,()),('B-Complex Injection','A quick, replenishing shot.',40,()),
 ('Biotin Injection','Support for hair, skin and nails.',35,()),('CoQ-10 Injection','A quick wellness shot.',40,()),
 ('Energy Boosting Injection','A quick pick-me-up.',50,()),('Immunity Boost Injection','Support when you want to stay well.',99,()),
 ('Vitamin D3 Injection','Support for everyday wellness.',49.99,()),
 ('NAD+ Injection','A quick option for cellular wellness.',75,['25 mg','50 mg','100 mg']),
]: a('shots',n,d,p,o)
# WEIGHT (cross-listed on purpose)
a('weight','Monthly Weight Loss Program','A guided monthly plan built around your goals.',400,(),[])
a('weight','Prescription Weight Support','A personalized plan, designed with your provider.',0,(),[])
a('weight','Lipo-C Injection','A quick shot to support your plan.',30,(),[])
a('weight','Slim Shot','A quick shot to support your plan.',50,(),[])
a('weight','Lipo-B Injection','A quick shot to support your plan.',20,(),[])
a('weight','Diet Drip','Hydration and support while you work toward your goals.',199,(),[])
# LABS
a('labs','Lab Testing','Know your numbers so your plan fits you. Panels for hormones, thyroid, vitamins and more.',0,(),[])
# HER
a('her','Anti-Drip Chair Treatment','A comfortable, clothes-on session to strengthen the pelvic floor.',400,(),[])
a('her','O-Shot','A private treatment to support sexual wellness. An enhanced version is available.',999,(),[])
# CONSULTS
for n,d in [('Introductory Consultation','The best place to start. We listen first, then recommend.'),('Under-Eye Assessment','See what is right for the delicate eye area.'),('Weight Loss Consultation','Talk through your goals and options.'),('Lab Consultation','Review your results and what they mean.'),('Sexual Health Consultation','A private, respectful conversation.'),('Urinary Incontinence Consultation','Talk through comfortable options.')]:
    a('cons',n,d)
ADDONS={
 'needle':dict(title='Add to your micro-needling',note='Add-ons are only available with a micro-needling session.',type='grid',cols=['Hyaluronic Acid','PRP','PRF','X-Rated'],rows=[['Under-eye',[49,99,150,199]],['Neck',[49,99,150,199]],['Chest / décolleté',[49,99,150,199]],['Face + neck + décolleté',[147,0,0,0]],['Scars',[0,99,0,0]]]),
 'facials':dict(title='Add to your facial',note='Add-ons are only available with a facial.',type='list',items=[['Neck add-on for the Age Rewind Mask',35],['Deep Pore Cleansing add-on',60],['Deep Pore Cleansing + Detox add-on',75],['Collagen Vitamin Serum add-on',20]]),
 'iv':dict(title='Boost your IV',note='Boosters are added to an IV session.',type='list',items=[['Amino Blend Boost',30],['B-Complex Boost',30],['Glutathione Booster',50],['Magnesium Chloride Booster',40],['Mineral Blend Boost',30],['Vitamin C Boost',35],['Zinc Booster',30],['IV Bag Upgrade',50]]),
}
G=[
 ('inj','Injectables','Smooth lines and restore shape, kept natural.',[('toxin','Wrinkle relaxers','Choose the area. We plan the rest with you at your visit.',''),('filler','Fillers & contouring','Lips, cheeks, chin, jawline and more.','')]),
 ('skin','Skin','Glow, clarity and firmer-feeling skin.',[('facials','Facials & scrubs','Glow-first facials tailored to your skin.',''),('needle','Micro-needling','Collagen-boosting sessions to refine texture and tone.',''),('peel','Chemical peel','Renew the surface for a fresher, smoother complexion.',''),('eye','Under-eye & smile lines','Targeted care for the delicate areas.',''),('spot','Scars & marks','Targeted help for texture and discoloration.','')]),
 ('well','Wellness','Hydration, nutrients and support when you need it.',[('iv','IV therapy','Hydration and nutrients, delivered while you relax.',''),('shots','Vitamin injections','Quick shots, in and out in minutes.',''),('weight','Weight support','Everything we offer that supports your weight goals.',''),('labs','Lab testing','Know your numbers.','')]),
 ('her',"Women's health",'Private, respectful care for intimate wellness and confidence.',[('her',"Women's health",'Private, respectful care.','')]),
 ('start','Start here','Not sure where to begin? A conversation is the best first step.',[('cons','Consultations','Your consultation happens at your appointment.','')]),
]
tpl=open('template.html').read()
html=(tpl.replace('/*ITEMS*/',json.dumps(I,ensure_ascii=False)).replace('/*GROUPS*/',json.dumps(G,ensure_ascii=False)).replace('/*ADDONS*/',json.dumps(ADDONS,ensure_ascii=False)).replace('/*SHOWP*/',json.dumps(SHOW_PRICES)).replace('BOOKURL',BOOK))
open('index.html','w').write(html)
json.dump([dict(k=i['cat'],n=i['n'],d=i['d'],p=i['p'],g=i['g'],soon=i.get('soon',0)) for i in I if i['cat'] not in ('cons','labs')],open('items.json','w'),ensure_ascii=False)
print(len(I),'items')
