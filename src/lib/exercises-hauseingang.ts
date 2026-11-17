import type {Ex} from './exercises';
// Append only: previous saved topic/index identities stay fixed.
export const hauseingangGrammar:Record<string,Ex[]>={
 satzbau:[
 ['Ordne: Vor der Tür / liegt / die Fußmatte.','Vor der Tür liegt die Fußmatte.','Vor der Tür die Fußmatte liegt.','Vor der Tür liegen die Fußmatte.','Vor der Tür أول مكان؛ الفعل في التاني وMatte مفرد.','Vor der Tür fills the first position; the finite verb is second and Matte is singular.'],
 ['Welche neutrale Ja/Nein-Frage ist richtig?','Gehört der Schirm Mona?','Der Schirm gehört Mona?','Gehören der Schirm Mona?','السؤال المحايد يبدأ بالفعل؛ Schirm مفرد. ترتيب الخبر بنغمة سؤال ممكن بس مش المطلوب.','A neutral yes/no question begins with the verb; Schirm is singular. Statement order with question intonation is possible but not requested.'],
 ['Ordne: Danach / fragt / Mona / ihre Mitbewohnerin.','Danach fragt Mona ihre Mitbewohnerin.','Danach Mona fragt ihre Mitbewohnerin.','Danach ihre Mitbewohnerin Mona fragt.','Danach أول مكان والفعل في التاني.','Danach is first and the finite verb second.'],
 ['Welche W-Frage hat die normale Wortstellung?','Wem gehört der Schirm mit dem Band?','Wem der Schirm mit dem Band gehört?','Wem gehören der Schirm mit dem Band?','Wem وبعده الفعل؛ der Schirm مفرد: gehört.','Wem is followed by the verb; singular der Schirm takes gehört.'],
 ],
 praesens:[
 ['Dina ___ ihren Schlüssel an den Haken. (hängen, transitiv)','hängt','hängst','hängen','Dina مفرد: hängt. هنا هي بتعلّق المفتاح.','Singular Dina takes hängt. Here she hangs the key up.'],
 ['Noah ___ seine Mütze auf die Bank. (legen)','legt','legst','legen','Noah مفرد: legt.','Singular Noah takes legt.'],
 ['Ihr ___ zuerst nach, wer da ist. (schauen)','schaut','schaust','schauen','ihr مع schauen: schaut؛ nach منفصلة هنا.','Ihr takes schaut; nach is separate here.'],
 ['Nora ___ den Zettel noch einmal. (lesen)','liest','lest','lesen','Nora مفرد: liest.','Singular Nora takes liest.'],
 ],
 negation:[
 ['Der rechte Haken ist ___ besetzt. (nicht/kein)','nicht','kein','keine','بننفي besetzt بـnicht.','Negate besetzt with nicht.'],
 ['Im Schirmständer steht ___ roter Schirm. (kein)','kein','keinen','keinem','Schirm فاعل مذكر نوميناتيف: kein.','Schirm is the masculine nominative subject: kein.'],
 ['Rafi öffnet ___ fremden Brief. (kein)','keinen','kein','keinem','Brief مذكر أكوزاتيف: keinen.','Brief is masculine accusative: keinen.'],
 ['Die Nachbarn haben noch ___ Reparatur vereinbart. (kein)','keine','keinen','keinem','Reparatur مؤنث أكوزاتيف: keine.','Reparatur is feminine accusative: keine.'],
 ],
 'trennbare-verben':[
 ['Dina ___ die Wohnungstür ___. (aufschließen)','schließt ... auf','aufschließt ...','schließen ... auf','aufschließen مع Dina: schließt ... auf.','Aufschließen with Dina is schließt ... auf.'],
 ['Felix ___ seinen Schirm ___. (mitnehmen)','nimmt ... mit','mitnimmt ...','nehmen ... mit','mitnehmen مع Felix: nimmt ... mit.','Mitnehmen with Felix is nimmt ... mit.'],
 ['Mona ___ bei ihrer Mitbewohnerin ___. (nachfragen)','fragt ... nach','nachfragt ...','fragen ... nach','nachfragen مع Mona: fragt ... nach.','Nachfragen with Mona is fragt ... nach.'],
 ['Rafi ___ keinen Brief ___. (herausnehmen)','nimmt ... heraus','herausnimmt ...','nehmen ... heraus','herausnehmen مع Rafi: nimmt ... heraus.','Herausnehmen with Rafi is nimmt ... heraus.'],
 ],
 dativ:[
 ['Der Schirm gehört ___ Nachbarn. (der, Singular)','dem','den','des','gehören داتيف؛ Nachbar مفرد: dem Nachbarn.','Gehören takes dative; singular Nachbar becomes dem Nachbarn.'],
 ['Mona antwortet ___ Mitbewohnerin. (die)','der','die','den','antworten بياخد داتيف؛ Mitbewohnerin مؤنث: der.','Antworten takes dative; feminine Mitbewohnerin takes der.'],
 ['Nora zeigt ___ Nachbarn das lockere Schild. (ihr, Singular)','ihrem','ihren','ihre','المستلم داتيف؛ Nachbar مفرد مذكر: ihrem Nachbarn.','The recipient takes dative; masculine singular Nachbar becomes ihrem Nachbarn.'],
 ['Dina erklärt ___ Freunden den Platz der Schlüssel. (die)','den','die','der','المستلم جمع داتيف: den Freunden.','The plural recipient takes dative: den Freunden.'],
 ],
 perfekt:[
 ['Dina hat die Tür ___. (aufschließen)','aufgeschlossen','geaufschlossen','aufschließt','المنفصل aufschließen بيحط ge في النص: aufgeschlossen.','Separable aufschließen inserts ge: aufgeschlossen.'],
 ['Felix hat seinen Schirm ___. (mitnehmen)','mitgenommen','gemitnommen','mitgenehmt','mitnehmen في البيرفكت: mitgenommen.','Mitnehmen has the participle mitgenommen.'],
 ['Nora hat noch keine Reparatur ___. (vereinbaren)','vereinbart','gevereinbart','vereingebart','البادئة ver غير منفصلة؛ vereinbart من غير ge.','Inseparable ver has no ge: vereinbart.'],
 ['Noah hat seine Mütze auf die Bank ___. (legen)','gelegt','gelegen','gelegtet','legen بمعنى يحط: gelegt؛ liegen بمعنى يبقى موجود: gelegen.','Legen, to put, has gelegt; liegen, to lie/be located, has gelegen.'],
 ],
};
