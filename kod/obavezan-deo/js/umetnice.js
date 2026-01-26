const parametri = new URLSearchParams(window.location.search);
let imeUmetnice = parametri.get("umetnica");

console.log("imeUmetnice:", imeUmetnice);

if(!imeUmetnice){
    imeUmetnice = "artemizija";
}


const umetnice = {
    artemizija: {
        zaglavljeSlika: `/slike/artemiyija-djentileski/1465px-Jael_and_Sisera_by_Artemisia_Gentileschi.jpg`,
        nazivPostavke: `Artemizija Đentileski
        Snaga i Pravda`,
        imeUmetnice: `ARTEMIZIJA
        ĐENTILESKI`,
        portretUmetnice: `/slike/artemiyija-djentileski/Artemisia_Gentileschi_-_Self-Portrait_as_a_Lute_Player.jpg`,
        oUmetnici: `Artemizija Đentileski (ital. Artemisia Gentileschi; Rim, 8. jul 1593 — Napulj, 1653) bila je italijanska slikarka. Mnoge njene slike prikazuju žene iz mitova, alegorija i Biblije, uključujući žrtve, samoubice i ratnike. Bila je poznata po tome što je prikazivala žensku figuru sa velikim naturalizmom i po njenoj veštini rukovanja bojom kako bi izrazila dimenziju i dramu.
                    
        U svet slikarstva i umetnosti ušla je zahvaljujući svom ocu - slikaru Oraciju Đentileskiju, koji je podsticao njen talent, učio je da posmatra i primećuje svet oko sebe, meša boje i mašta. Naučila je da crta, kako da meša boje i kako da slika. Do 1612, kada je imala 18 godina, Artemizija je bila poznata po svojim primernim talentima, a njen otac se hvalio da je, uprkos tome što se bavila slikanjem samo tri godine, Artemizija bila daleko najbolja.
                    
        Bila je jedna od retkih žena koja je imala dovoljno snažnu individualnost da se izdigne iznad konvencija svoga doba, uporno tražeći ljubav, opraštanje i punoću življenja kroz umetnost.
                    
        Artemizija je bila svesna „svoje pozicije umetnice i trenutnih predstava ženskog odnosa prema umetnosti”.To je evidentno u njenom alegorijskom autoportretu, Autoportret kao La Pitura, koji prikazuje Artemiziju kao muzu, „simboličko oličenje umetnosti“ i kao profesionalnu umetnicu.
                    
        Istraživački rad Gentileschi, padre e figlia (1916) Roberta Longija, italijanskog kritičara, opisao je Artemiziju kao jedinu ženu u Italiji koja je ikada znala za slikanje, bojenje, crtanje i druge osnove. On je dodao: „Postoji oko pedeset sedam dela Artemizije Đentileski, a 94% (četrdeset devet dela) prikazuje žene kao protagoniste ili jednake muškarcima”. Njenim likovima su namerno nedostajale stereotipne „ženske“ osobine – osetljivost, plahost i slabost – i bili su hrabre, buntovne i moćne ličnosti.
                    
        Pošto se Artemizija iznova i iznova vraćala nasilnim temama kao što su Judita i Olofern, neki istoričari umetnosti su postulirali teoriju potisnute osvete, ali drugi istoričari umetnosti sugerišu da je ona lukavo iskoristila svoju prepoznatljivost zbog suđenja za silovanje, i da je gađala tržišnu nišu za muške pokrovitelje, sa slikama koje prikazuju seksualno nabijenu umetnosti u kojoj dominiraju žene.
                    
        Feminističke autorke, na primer, uzdigli su Artemiziju do statusa feminističke ikone, što je pripisivano njenim slikama strašnih žena i njenom uspehu kao umetnice u polju kojim dominiraju muškarci, dok je istovremeno bila samohrana majka.`,
        tekstIzlozbe: `Postavka „Snaga i pravda“ predstavlja dela Artemizije Đentileski, umetnice koja je kroz slikarstvo hrabro progovarala o borbi, istrajnosti i pravednosti.
        Njene heroine nisu pasivne posmatračice, već aktivne nositeljke radnje i emocije. Postavka poziva posetioce da sagledaju barok iz perspektive snažnog, ženskog autorskog glasa.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Odabrana remek-dela Artemizije Đentileski iz biblijskih, mitoloških i istorijskih ciklusa
                    
        -Prikaze snažnih ženskih figura kao nosilaca radnje, pravde i moralne odlučnosti
                    
        -Analizu baroknog dramatizma kroz svetlo, kolorit i izražajnu gestikulaciju
                    
        -Kontekst umetničkog i društvenog položaja žene u Evropi XVII veka`,
        postavkaSlika: `/slike/artemiyija-djentileski/Judit_decapitando_a_Holofernes,_por_Artemisia_Gentileschi.jpg`,
        karticaSlikaPrva: `/slike/judith-leyster/Judith_Leyster_The_Concert.jpg`,
        karticaNaslovPrva: `Džudit Lejster
                            Portreti i žanrovske scene`,
        karticaPrvaLink: "dzudit",
        karticaSlikaDruga: `/slike/elizabet-vize-le-brun/Elisabeth_Louise_Vigée-Le_Brun_-_Juno_Borrowing_the_Belt_of_Venus,_1781.jpg`,
        karticaNaslovDruga: `Elizabet Viže Lebran
                            Ženski autorski glas u XVIII veku`,
        karticaDrugaLink: "elizabet",
        karticaSlikaTreca: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        karticaNaslovTreca: `Suzana Valadon
                            Boje i linije slobode`,
        karticaTrecaLink: "suzana"
    },



    hilma: {
        zaglavljeSlika: `/slike/hilma-af-klint/Hilma_af_Klint,_1915,_Svanen,_No._17.jpg`,
        nazivPostavke: `Hilma af Klint
        Između nauke i duhovnosti`,
        imeUmetnice: `HILMA
        AF KLINT`,
        portretUmetnice: `/slike/hilma-af-klint/Hilma_af_Klint,_portrait_photograph_published_in_1901.jpg`,
        oUmetnici: `Hilma af Klint bila je švedska umetnica i mistik. Njene slike smatraju se neke od prvih apstraktnih dela poznatim u zapadnoj istoriji umetnosti. Značajan deo njenog rada prethodio je prvim čisto apstraktnim slikama Kandinskog, Maleviča i Mondrijana. Pripadala je grupi pod nazivom „Petorka“, koja se sastojala od kruga žena inspirisanih teozofijom, koje su delile zajedničko verovanje u važnost pokušaja da stupe u kontakt sa takozvanim „Visokim gospodarima“— često kroz seanse. Njene slike, koje ponekad podsećaju na dijagrame, bile su vizuelni prikaz složenih duhovnih ideja.

        Od svoje porodice Hilma af Klint je nasledila veliko interesovanje za matematiku i botaniku. Pokazala je ranu sposobnost u vizuelnoj umetnosti i, nakon što se porodica preselila u Stokholm, studirala je na Tekniskoj školi (danas Konstfack) u Stokholmu, gde je naučila portret i pejzažno slikarstvo.

        Sa dvadeset godina primljena je na Kraljevsku akademiju lepih umetnosti. Između 1882. i 1887. studirala je uglavnom cranje, portretno slikarstvo i pejzažno slikarstvo. Diplomirala je sa odličnim uspehom i dodeljena joj je stipendija u vidu studija u takozvanoj „Atelje zgradi“ (Ateljébyggnaden), u vlasništvu Akademije lepih umetnosti između Hamngatana i Kraljevskog parka u centru Stokholma.

        Godine 1880. umrla je njena mlađa sestra Hermina i tada je počela da se razvija njen duhovni život. Njeno interesovanje za apstrakciju i simbolizam proizašlo je iz angažovanja Hilme af Klint u spiritizmu, koji je bio veoma popularan krajem devetnaestog i početkom dvadesetog veka. Njeni eksperimenti u duhovnom istraživanju počeli su 1879.[5] Zainteresovala se za teozofiju gospođe Blavatske i filozofiju Kristijana Rozenkrojca.

        Af Klintovo delo može se razumeti u širem kontekstu modernističkog traganja za novim formama u umetničkim, duhovnim, političkim i naučnim sistemima na početku dvadesetog veka. Njene studije organskog rasta, uključujući proučavanje školjke i cveće, pomogle su joj da prikaže život kroz duhovno sočivo. Ideja da se prevaziđe fizički svet i ograničenja reprezentativne umetnosti vidljiva je na njenim apstraktnim slikama.

        Godine 1906. af Klint je naslikala prvu seriju apstraktnih slika. Radovi za Hram nastali su između 1906. i 1915. godine, izvođeni u dve faze sa prekidom između 1908. i 1912. godine. Kako je Klint otkrila svoj novi oblik vizuelnog izražavanja, razvila je novi umetnički jezik. Njeno slikarstvo je postalo autonomnije i više namerno. Duhovno će nastaviti da bude glavni izvor kreativnosti do kraja njenog života.

        Hilma af Klint će tokom svog života nastojati da razume misterije sa kojima je došla u kontakt kroz svoj rad. O svojim razmišljanjima i studijama napisala je više od 150 sveska.`,
        
        tekstIzlozbe: `Postavka „Između nauke i duhovnosti“ predstavlja stvaralaštvo Hilme af Klint, umetnice koja je apstrakciju koristila kao sredstvo razumevanja sveta. 
        Kroz geometriju, simboliku i boju, njena dela povezuju racionalno i intuitivno.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Odabrana dela Hilme af Klint iz ključnih ciklusa apstraktnog slikarstva
        
        -Istraživanje odnosa između naučnih teorija, geometrije i duhovne simbolike
        
        -Prikaz umetničkog procesa koji spaja intuiciju, sistem i meditativni izraz
        
        -Kontekst nastanka apstrakcije pre njenog zvaničnog priznanja u istoriji umetnosti`,
        postavkaSlika: `/slike/hilma-af-klint/Hilma_af_Klint_-_The_Ten_Largest_No._6_-_1907.jpg`,
        karticaSlikaPrva: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        karticaNaslovPrva: `Suzana Valadon
                            Boje i linije slobode`,
        karticaPrvaLink: "suzana",
        karticaSlikaDruga: `/slike/artemiyija-djentileski/1465px-Jael_and_Sisera_by_Artemisia_Gentileschi.jpg`,
        karticaNaslovDruga: `Artemizija Đentileski
                            Snaga i Pravda`,
        karticaDrugaLink: "artemizija",
        karticaSlikaTreca: `/slike/natalia-goncarova/Goncharova_Fighters.jpg`,
        karticaNaslovTreca: `Natalija Gončarova
                            Ruski perspektivizam i apstrakcija`,
        karticaTrecaLink: "natalija"
    },


    elizabet: {
        zaglavljeSlika: `/slike/elizabet-vize-le-brun/Elisabeth_Louise_Vigée-Le_Brun_-_Juno_Borrowing_the_Belt_of_Venus,_1781.jpg`,
        nazivPostavke: `Elizabet Viže Lebran
        Ženski autorski glas u XVIII veku`,
        imeUmetnice: `ELIZABET
        VIŽE LEBRAN`,
        portretUmetnice: `/slike/elizabet-vize-le-brun/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vigée-Lebrun.jpg`,
        
        oUmetnici: `Lujza Elizabet-Viže Lebran (fr. Élisabeth Vigée Le Brun; Pariz, 16. april 1755 - 30. mart 1842) bila je francuska slikarka[1] , najznačajniji portretista 18. veka, a po mišljenju mnogih umetnika i jedan od tehnički najveštijih portretista svog doba.

        Umetnički stil koji jezastupala na svojim radovima je rokoko, sa elementima neoklasicizma.

        Za vreme svoje slikarske karijere naslikala je 600 portreta i 200 pejzaža, a neke njene slike se nalaze u vlasništvu najvećih muzeja, kao što je Luvr u Parizu, Ermitaž u Sankt Peterburgu, Nacionalna galerija u Londonu, Metropolitenu u Njujorku...

        Rođena je 1755. godine u Parizu, Francuska. Otac, Luj Viže, bio je slikar i član akademije, a majka, Žan Misin, frizerka. Prvih pet godina provela je na selu. Potom je preseljena u školu manastira Svetog Trojstva u Parizu. Tamo je pokazivala da ima talenta za slikanje crtajući po zidovima, sveskama... Otac, oduševljen jednim od njenih crteža, vratio je kući i počeo je podučavati slikanju.

        Već u petnaestoj godini, Elizabet je dobro zarađivala crtajući portrete bogatih. Da bi unapredila svoje veštine ona je obilazeći galerijebeležila i kopirala dela starih majstora kao što su Rubens, Van Dajk, i Rembrant. Godine 1775. Elizabeta je dobila priliku da ponudi dva portreta Kraljevskoj umetničkoj akademiji, a iste godinepostaje i član akademije.

        Njena slava proširila se sve do francuske kraljice Marije Antoanete koja joj je zatražila da joj nacrta jedan portret. Između njih dve je stvoreno prijateljstvo koje će potrajati sve do početka Francuske revolucije. Godine 1779. Elizabeta je proglašena za dvorskog slikara. Uradila je preko trideset portreta Marije Antoanete i njene porodice. Kao Marijin portretista se još više probila u krugove evropske aristokratije i postaje poznata širom Evrope.

        Izbijanje Francuske revolucije nateralo je Elizabetu da u noći između 5. i 6. oktobra 1789. godine napusti Pariz. Njen muž koji je ostao u Parizu je tvrdio da je ona otišla u Italiju na usavršavanje. U Evropi je već bila dovoljno poznata pa je slikala portrete vladara u Rimu, Beču, Londonu, Sankt Peterburgu...`,
        
        tekstIzlozbe: `Postavka „Ženski autorski glas u XVIII veku“ prikazuje dela Elizabet Viže Lebrun, jedne od najistaknutijih slikarki francuskog XVIII veka. Njena umetnost osvetljava snagu i samosvest žena tog vremena, prikazujući portrete punih dostojanstva, elegancije i karaktera.
        Kroz kombinaciju tehničke virtuoznosti i emotivne dubine, Viže Lebrun pokazuje kako ženski pogled i umetnički izraz mogu oblikovati kulturu i estetiku svoje epohe.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Prikaze portreta žena koje odražavaju moć, samosvest i društveni status u XVIII veku

        -Analizu tehnike i kolorita Elizabet Viže Lebrun, naglašavajući eleganciju i detaljnost

        -Isticanje uloge žene kao samostalnog i aktivnog autora u umetnosti tog perioda

        -Kontekst društvenog i kulturnog položaja žena u Francuskoj i Evropi XVIII veka`,
        
        postavkaSlika: `/slike/elizabet-vize-le-brun/Vigée-Lebrun_Marie_Antoinette_1783.jpg`,
        karticaSlikaPrva: `/slike/judith-leyster/Judith_Leyster_The_Concert.jpg`,
        karticaNaslovPrva: `Džudit Lejster
                            Portreti i žanrovske scene`,
        karticaPrvaLink: "dzudit",
        karticaSlikaDruga: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        karticaNaslovDruga: `Suzana Valadon
                            Boje i linije slobode`,
        karticaDrugaLink: "suzana",
        karticaSlikaTreca: `/slike/hilma-af-klint/Hilma_af_Klint,_1915,_Svanen,_No._17.jpg`,
        karticaNaslovTreca: `Hilma af Klint
                            Između nauke i duhovnosti`,
        karticaTrecaLink: "hilma"
    },



        natalija: {
        zaglavljeSlika: `/slike/natalia-goncarova/Goncharova_Fighters.jpg`,
        nazivPostavke: `Natalija Gončarova
        Ruski perspektivizam i apstrakcija`,
        imeUmetnice: `NATALIJA
        GONČAROVA`,
        portretUmetnice: `/slike/natalia-goncarova/Natalia_Sergeyevna_Goncharova.jpg`,
        
        oUmetnici: `Natalija Sergejevna Gončarova (rus. Ната́лья Серге́евна Гончаро́ва; Tula, 4. jun 1881 — Pariz, 17. oktobar 1962) bila je ruski avangardni slikar, kostimograf, pisac, ilustrator i scenski dizajner. Njena prababa-tetka bila je Natalija Nikolajevna Gončarova, žena pesnika Aleksandra Puškina.

        Natalija Gončarova je rođena u Tuli na imanju svog oca, poznatog arhitekte i matematičara, Sergeja Gončarova. 1891. godine porodica se preselila u Moskvu, gde je ona 1901. upisala Moskovsku školu slikarstva, vajarstva i arhitekture.Tu je upoznala Mihaila Larionova, koji je takođe bio student iste škole. Kasnije su oni formirali životnu vezu.

        Larionov i Gončarova su osnivači dveju važnih ruskih umetničkih grupa: “Jack of Diamonds” (1909-1911) i mnogo radikalnije “Magareći rep” (1912-1913). Magareći rep je zamišljen kao nameran prekid uticaja evropske umetnosti i uspostavljanje nezavisne ruske škole moderne umetnosti. Kako god, uticaj ruskog futurizma je vidljiv i u daljim radovima Gončarove.

        Kao vođe moskovskih futurista, Gončarova i Larionov su organizovali provokativna večernja predavanja u istom tonu kao i njihove italijanske kolege. Gončarova je takođe bila uključena u grafički dizajn - pisanje i ilustrovanje knjige u futurističkom stilu.

        Gončarova je bila i član Plavog jahača, avangardne grupe osnovane 1911. godine. 1915. godine ona je počela da dizajnira kostime za balet i nastanila se u Ženevi. U Pariz se preselila 1921. godine, gde je dizajnirala niz scenografija iz Djagiljevljevih baleta.`,
        
        tekstIzlozbe: `Postavka posvećena Nataliji Gončarovoj predstavlja stvaralaštvo umetnice koja je povezala rusku avangardu, folklor i moderne evropske umetničke tokove. Njena dela istražuju dinamiku pokreta, boje i forme, brišući granice između tradicije i eksperimenta.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Odabrana dela Natalije Gončarove iz perioda ruske avangarde i eksperimentalnog slikarstva

        -Spoj tradicionalnih ruskih motiva, folklora i savremenih umetničkih pravaca

        -Istraživanje dinamike pokreta, boje i apstraktne forme

        -Prikaz umetničkog otklona od akademskih normi i razvoja modernog vizuelnog jezika`,
        
        postavkaSlika: `/slike/natalia-goncarova/Babi_s_grablyami.jpg`,
        karticaSlikaPrva: `/slike/elizabet-vize-le-brun/Elisabeth_Louise_Vigée-Le_Brun_-_Juno_Borrowing_the_Belt_of_Venus,_1781.jpg`,
        karticaNaslovPrva: `Elizabet Viže Lebran
                            Ženski autorski glas u XVIII veku`,
        karticaPrvaLink: "elizabet",
        karticaSlikaDruga: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        karticaNaslovDruga: `Suzana Valadon
                            Boje i linije slobode`,
        karticaDrugaLink: "suzana",
        karticaSlikaTreca: `/slike/hilma-af-klint/Hilma_af_Klint,_1915,_Svanen,_No._17.jpg`,
        karticaNaslovTreca: `Hilma af Klint
                            Između nauke i duhovnosti`,
        karticaTrecaLink: "hilma"
    },



        dzudit: {
        zaglavljeSlika: `/slike/judith-leyster/Judith_Leyster_The_Concert.jpg`,
        nazivPostavke: `Džudit Lejster
        Portreti i žanrovske scene`,
        imeUmetnice: `DŽUDIT
        LEJSTER`,
        portretUmetnice: `/slike/judith-leyster/Self-portrait_by_Judith_Leyster.jpg`,
        
        oUmetnici: `Džudit Jans Lejster (takođe Lejster; Harlem, — Himstede, 10. februar 1660) bila je holandska slikarka zlatnog doba žanrovskih dela, portreta i mrtvih priroda. Njen rad je bio veoma cenjen od strane savremenika, ali je uglavnom zaboravljen nakon njene smrti. Ceo opus Džudit Lejster se pripisuje Fransu Halsu ili njenom mužu Janu Miensu Molenaeru. Godine 1893. ponovo je otkriven njen rad i naučnici su počeli da pravilno pripisuju autorstvo slika Lejster.

        Lejster je rođena jula 1609. u Harlemu u porodici lokalnog pivara. Bila je osmo dete Jana Vilemsa Lejstera. Neki naučnici spekulišu da je Lejster nastavila karijeru u slikarstvu kako bi pomogla da izdržava svoju porodicu nakon bankrota oca.Do 1633. primljena je u članstvo Harlemskog saveza Svetog Luke. Neki izvori navode da je ona bila prva žena koju je Esnaf prihvatio; drugi izvori navode da je to bila Sara van Balbergen 1631.

        Godine 1636, Lejster se udala za produktivnog umetnika Jana Miensea Molenaera, koji je radio na sličnim temama. Većina Lejsterinih datiranih radova nastala je pre njenog braka i datira između 1629. i 1635. godine. Malo je poznatih njenih dela naslikanih posle 1635. godine: dve ilustracije u knjizi o lalama iz 1643. godine, portret iz 1652. godine i mrtva priroda iz 1654. godine koja je otkrivena u privatnoj kolekciji u 21. veku.

        Specijalizovala se za žanrovske scene nalik portretu, koje obično sadrže od jedne do tri figure, koje uglavnom odišu dobrim raspoloženjem i prikazane su na običnoj pozadini. Mnogi su deca; drugi muškarci s pićem. Lejster je bila posebno inovativna u svojim domaćim žanrovskim scenama. Ovo su mirni prizori žena kod kuće, često sa svećama ili lampama, posebno iz ženske tačke gledišta.

        Iako je bila poznata tokom svog života i cenjena od strane svojih savremenika, Lejster i njen rad su uglavnom zaboravljeni nakon njene smrti. Ponovo je otkrivena 1893. godine, kada je slika kojoj su se divili više od jednog veka kao delo Fransa Halsa prepoznata kao njena. Lejsterin rad je kritikovan da pokazuje „slabost ženske ruke“, dok su mnoge njene slike pripisane Fransu Halsu.`,
        
        tekstIzlozbe: `Postavka „Portreti i žanrovske scene“ posvećena je stvaralaštvu Džudit Lejster, slikarke zlatnog doba holandskog slikarstva. Njena dela prikazuju intimne prizore svakodnevnog života, muzičare, druženja i portrete, ispunjene živim izrazima i toplinom. 
        Postavka ističe njen prepoznatljiv kolorit, spontan potez i sposobnost da uhvati karakter i atmosferu trenutka, potvrđujući njen značaj kao samostalne i originalne umetnice XVII veka.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Odabrane portrete i žanrovske scene koje prikazuju svakodnevni život holandskog društva XVII veka

        -Prikaze muzike, druženja i intimnih trenutaka kroz živu gestikulaciju i izražajnu mimiku likova

        -Analizu slikarskog rukopisa Džudit Lejster, sa naglaskom na kolorit, svetlo i spontan potez

        -Kontekst njenog umetničkog identiteta i položaja žene u okviru holandskog zlatnog doba`,
        
        postavkaSlika: `/slike/judith-leyster/Judith_Leyster_The_Proposition.jpg`,
        karticaSlikaPrva: `/slike/artemiyija-djentileski/1465px-Jael_and_Sisera_by_Artemisia_Gentileschi.jpg`,
        karticaNaslovPrva: `Artemizija Đentileski
        Snaga i Pravda`,
        karticaPrvaLink: "artemizija",
        karticaSlikaDruga: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        karticaNaslovDruga: `Suzana Valadon
        Boje i linije slobode`,
        karticaDrugaLink: "suzana",
        karticaSlikaTreca: `/slike/natalia-goncarova/Goncharova_Fighters.jpg`,
        karticaNaslovTreca: `Natalija Gončarova
        Ruski perspektivizam i apstrakcija`,
        karticaTrecaLink: "natalija"
    },



        suzana: {
        zaglavljeSlika: `/slike/suzane-valadon/1357px-(Barcelona)_The_future_Revealed_or_the_Fortune-Teller_by_Suzanne_Valadon.jpg`,
        nazivPostavke: `Suzana Valadon
        Boje i linije slobode`,
        imeUmetnice: `SUZANA
        VALADON`,
        portretUmetnice: `/slike/suzane-valadon/Suzanne_Valadon_-_Self-Portrait_-_Google_Art_Project.jpg`,
        
        oUmetnici: `Rođena pod imenom Meri-Klementina Valadon (Marie-Clémentine Valadon) u Bessines-sur-Gartempe, Haute-Vienne, Francuska, bila je ćerka nevenčanih roditelja, i sa svojih 15 godina Suzan Valadon postaje cirkuski akrobata, ali već sa 16 godina pada sa trapeza i tako završava tu karijeru. U Monmartrovskoj četvrti Pariza ona počinje da se interesuje za umetnost.
        
        Pričalo se o njoj da je bila jako lepa žena, i kao takva ubrzo počinje da radi kao umetnički model, zato što je tako imala šansu da koliko-toliko posmatra i uči o slikarskim tehnikama. Bila je model slikarima Edgaru Degau, Anriju de Tuluz-Lotreku, Pjer-Ogistu Renoaru a i Pierre Puvis de Chavannes.
        
        Godine 1894. Valadonova postaje prva žena koja je primljena u Société Nationale des Beaux-Arts. Kao perfekcionista, Valadon radi i do 13 godina na slikama rađenim u ulju pre nego što bi ih izložila.
        
        Valadon nije bila ograničena na jedan određeni stil, ali su i simbolistička i postimpresionistička estetika jasno prisutne u njenom radu. Radila je prvenstveno uljem na platnu, uljanim olovkama, pastelima i crvenom kredom; nije koristila mastilo niti akvarel jer su ti medijumi bili previše fluidni za njene afinitete. Valadonine slike odlikuju se bogatim bojama i smelim, otvorenim potezima četkice, često naglašenim čvrstim crnim linijama koje definišu i uokviruju figure.

        Valadonini autoportreti, portreti, aktovi, pejzaži i mrtve prirode ostaju izdvojeni od trendova i savremenih tokova akademske umetnosti.

        Kao jedna od najbolje dokumentovanih francuskih umetnica s početka dvadesetog veka, Valadonin opus je bio od velikog interesovanja za feminističke istoričarke umetnosti naročito zbog njenog fokusa na žensko telo. Njeno stvaralaštvo bilo je neposredno i povremeno nespretno, često obeleženo snažnim linijama, a njeno odbijanje i akademskih i avangardnih konvencija u prikazivanju ženskog akta podstaklo je interesovanje za njen rad. Smatra se da mnoge njene predstave žena ukazuju na oblik otpora nekim dominantnim prikazima ženske seksualnosti u zapadnoj umetnosti ranog dvadesetog veka.`,
        tekstIzlozbe: `Postavka posvećena Suzani Valadon predstavlja stvaralaštvo umetnice koja je hrabro pomerala granice između modela i autora, tradicije i modernosti. Njene slike istražuju telo, identitet i svakodnevicu bez idealizacije, kroz snažan crtež i smelu upotrebu boje. 
        Postavka osvetljava Valadon kao jednu od ključnih figura ranog modernizma, čije delo donosi autentičan, neposredan i nekonvencionalan pogled na svet.`,
        postavkaStavke: `Ova postavka obuhvata:
        
        -Odabrana dela Suzane Valadon koja prikazuju aktove, portrete i scene iz svakodnevnog života

        -Istraživanje odnosa tela, identiteta i ženskog iskustva kroz snažan crtež i kolorit

        -Prikaz prelaza od akademske tradicije ka modernom, ličnom umetničkom izrazu

        -Kontekst Valadoninog mesta u razvoju ranog modernizma i njenog uticaja na savremenu umetnost`,
        
        postavkaSlika: `/slike/suzane-valadon/Suzanne_Valadon_-_Femme_aux_bas_blancs.jpg`,
        karticaSlikaPrva: `/slike/judith-leyster/Judith_Leyster_The_Concert.jpg`,
        karticaNaslovPrva: `Džudit Lejster
        Portreti i žanrovske scene`,
        karticaPrvaLink: "dzudit",
        karticaSlikaDruga: `/slike/hilma-af-klint/Hilma_af_Klint,_1915,_Svanen,_No._17.jpg`,
        karticaNaslovDruga: `Hilma af Klint
        Između nauke i duhovnosti`,
        karticaDrugaLink: "hilma",
        karticaSlikaTreca: `/slike/natalia-goncarova/Goncharova_Fighters.jpg`,
        karticaNaslovTreca: `Natalija Gončarova
        Ruski perspektivizam i apstrakcija`,
        karticaTrecaLink: "natalija"
    },
   
};

if (imeUmetnice && umetnice[imeUmetnice]) {
    const u = umetnice[imeUmetnice];

document.getElementById("zaglavlje-slika").src = u.zaglavljeSlika;
document.getElementById("naziv-postavke").textContent = u.nazivPostavke;
document.getElementById("ime-umetnice").textContent = u.imeUmetnice;
document.getElementById("portret-umetnice").src = u.portretUmetnice;
document.getElementById("o-umetnici").textContent = u.oUmetnici;
document.getElementById("tekst-o-izlozbi").textContent = u.tekstIzlozbe;
document.getElementById("postavka-stavke").textContent = u.postavkaStavke;
document.getElementById("postavka-slika").src = u.postavkaSlika;
document.getElementById("kartica-slika-prva").src = u.karticaSlikaPrva;
document.getElementById("kartica-naslov-prva").textContent = u.karticaNaslovPrva;
document.getElementById("kartica-slika-druga").src = u.karticaSlikaDruga;
document.getElementById("kartica-naslov-druga").textContent = u.karticaNaslovDruga;
document.getElementById("kartica-slika-treca").src = u.karticaSlikaTreca;
document.getElementById("kartica-naslov-treca").textContent = u.karticaNaslovTreca;

document.getElementById("karticaPrvaDugme").onclick = () => {
    window.location.href=`umetnica.html?umetnica=${u.karticaPrvaLink}`;
};

document.getElementById("karticaDrugaDugme").onclick = () => {
    window.location.href=`umetnica.html?umetnica=${u.karticaDrugaLink}`;
};

document.getElementById("karticaTrecaDugme").onclick = () => {
    window.location.href=`umetnica.html?umetnica=${u.karticaTrecaLink}`;
};

document.title =  u.nazivPostavke;

} else {
    alert("Umetnica nije pronadjena!");
}   
