import json,re
d=json.load(open('data.json'))
days=d['days']
for x in days:
    nums=re.findall(r'\d+',x['wd'])
    end=x['end']; start=end[:8]+('0'+nums[0])[-2:]
    x['start']=start
days.append(dict(end='2026-11-28',start='2026-11-28',wd='NOV 28',title='The Thank You Gift',num='Free',em='thank you gift',tag='Take home the glow. A thank you gift is waiting.',deals=[],note='A free thank you gift with any retail purchase. Offer valid Saturday, November 28.'))
days.sort(key=lambda x:x['start'])
prods=[
 ("Collagen Boosting Hydrating Serum","collagen-boosting-hydrating-serum","139","1760c7_09ce62478ddb4621941d4268ef5b4990~mv2.png",1),
 ("Vitamin C Age Defying Antioxidant Serum","vitamin-c-age-defying-antioxidant-serum","205","1760c7_e0a7b354a75a472fb8f255bcb8c11011~mv2.png",0),
 ("The Ultimate Sun Protection","the-ultimate-sun-protection","42","1760c7_938f6c394a38486a9ee5c7b1ed68d89a~mv2.png",0),
 ("Skin Tightening Lotion","retinol-miracle-skin-tightening-lotion","129","1760c7_5730221809df4131b17e6dceb51afaa2~mv2.png",0),
 ("Perfect Pout Lip Plumper","skin-hydration-primer","55","1760c7_12307b92cd0443e6b32f34b13f76fd4d~mv2.png",0),
 ("Refreshing Anti-Oxidant Cleanser","refreshing-anti-oxidant-cleanser","54.99","1760c7_7281c02c4dc24290ae483928fd113f6c~mv2.png",0),
 ("Brightening and Toning Corrector","soap-bar","149.25","1760c7_c90cace144644574b92bd3715888aca3~mv2.png",0),
 ("Triple Effect Anti-Rosacea Serum","triple-effect-anti-rosacea-serum","19.99","1760c7_35d2383b8cdd428bb907f3b0e1cd5498~mv2.png",0),
 ("Break out be Gone! GEL","break-out-be-gone-gel","40","1760c7_85376b192b724248a33be3fe0796d391~mv2.png",0)]
items=json.load(open('../services-desktop/items.json'))
data=dict(svcs=d['svcs'],items=items,days=days,prods=[dict(n=a,s=b,p=c,i=i,bs=e) for a,b,c,i,e in prods])
t=open('template.html').read().replace('/*DATA*/',json.dumps(data,ensure_ascii=False))
open('index.html','w').write(t)
print(len(t),'bytes;',len(days),'days')
