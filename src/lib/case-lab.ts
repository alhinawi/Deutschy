export const caseGroups=[['place','المكان والاتجاه','Location and destination'],['verb','الفعل بيطلب أنهي حالة؟','Verb-governed case'],['fixed','حرف الجر ثابت ولا مرتبط بفعل؟','Fixed and verb-bound prepositions']];
export const caseDrills=[
['place','Ich laufe jeden Morgen ___ Park. (innerhalb des Parks)','im','in den','داخل الحديقة، مش دخولها. وجود حركة لوحده مش معناه أكوزاتيف.','Movement happens within the park, not into it. Motion alone does not mean accusative.'],
['place','Ich gehe jetzt ___ Park hinein.','in den','im','هنا الاتجاه لداخل المكان، فالحالة أكوزاتيف.','Here the destination is into the park, so accusative.'],
['place','Ich lege das Heft auf ___ Tisch.','den','dem','بحط الكراسة لمكان جديد فوق الترابيزة.','Placing the notebook onto a new location takes accusative here.'],
['place','Das Heft liegt auf ___ Tisch.','dem','den','بنحدد مكان الكراسة، مش بننقلها.','This describes the notebook’s location, not a destination.'],
['verb','Ich helfe ___ Nachbarn. (der Nachbar)','dem','den','الفعل يساعد في التركيب ده بياخد داتيف. متختارش الحالة من الترجمة بالمصري.','Helfen takes dative here. Do not infer case from an Arabic translation.'],
['verb','Ich besuche ___ Nachbarn. (der Nachbar)','den','dem','الفعل يزور في التركيب ده بياخد أكوزاتيف، رغم إن الشخص ممكن يبقى نفسه.','Besuchen takes accusative here even though the person may be the same.'],
['verb','Ich danke ___ Lehrerin.','der','die','شخص بنشكره مع الفعل ده داتيف.','The person thanked takes dative with danken.'],
['verb','Ich sehe ___ Lehrerin.','die','der','الشخص اللي بشوفه مفعول أكوزاتيف مع الفعل ده.','The person seen takes accusative with sehen.'],
['fixed','Ich fahre mit ___ Bus.','dem','den','حرف الجر هنا دايماً داتيف، حتى وإنت بتتحرك.','Mit takes dative, even while traveling.'],
['fixed','Ich gehe zu ___ Bahnhof.','dem','den','حرف الجر ده داتيف ثابت؛ سؤال رايح فين مش كفاية يغيره.','Zu takes fixed dative. A destination question does not change that.'],
['fixed','Ich warte auf ___ Zug.','den','dem','استنى القطر تركيب فعل مع حرف جر وأكوزاتيف. مش قاعدة المكان والاتجاه.','Warten auf takes accusative; this is not the local wo/wohin contrast.'],
['fixed','Ich nehme an ___ Kurs teil.','dem','den','يشترك في تركيب مرتبط بالفعل وبيطلب داتيف. احفظ الفعل مع الحرف والحالة.','Teilnehmen an takes dative. Learn the verb, preposition and case together.'],
].map(([group,prompt,answer,wrong,ar,en],i)=>({id:'case-'+(i+1),group,prompt,answer,wrong,ar,en}));
