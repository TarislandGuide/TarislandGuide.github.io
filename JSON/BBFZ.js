const talents = [{"id":"blah","name":"Unknown","description":"skill information coming soon","icon":"./Icons/blah.png"},
// Barbarian Frozen
{"id":"BBFZT01","name":"Combat System","description":"Max HP is increased by 5% / 10% / 15%, and the Glancing Effect is increased by 2% / 4% / 6%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF1.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
{"id":"BBFZT02","name":"Storm Protect","description":"After Storm Flying Axe returns, increase the glancing chance by 3.5% / 7% / 10.5%, for 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF2.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
{"id":"BBFZT03","name":"Frozen Mastery","description":"Your base Glancing Rate is increased by 1% / 2% / 3%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF3.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
{"id":"BBFZT04","name":"Piercing Chill","description":"When cast Chill Strike, there is a 100% chance to reduce the remaining cooldown for Storm Flying Axe and Frost Cross by 0.5 / 1 / 1.5 sec, and increase the next respective HP recovery effect and Dmg Reduc effect by 10% / 20% / 30%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF4.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
{"id":"BBFZT05","name":"Ice Thread Rune","description":"Frost Strike additionally grants 2 / 4 / 6 Frozen Runes, and grants 16.6% / 33.3% / 50% more shield at settlement.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF5.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
{"id":"BBFZT06","name":"Axe Cyclone","description":"Axe Cyclone deals 5% / 10% / 15% more DMG.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF6.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
{"id":"BBFZT07","name":"Pain RES","description":"When you are attacked, the Dmg Reduc effect of the next Frost Strike is increased by 3% / 6% / 9%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF7.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":4,"lvl":3},
{"id":"BBFZT08","name":"Frost Cross","description":"Switch Storm Flying Axe to Frost Cross.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF8.jpg","cooldown":null,"range":null,"speed":"","max":1,"min":9,"preq":null,"lvl":null},
{"id":"BBFZT09","name":"Rapid Freeze","description":"Frozen Runes obtained is increased by 2 / 4 when casting Chill Strike while Frost Strike is active.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF9.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
{"id":"BBFZT10","name":"Quick Throw","description":"Every time [Storm Flying Axe] hits a target, its remaining cooldown is reduced by 1.5 / 3 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF9.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":9,"preq":null,"lvl":null},
{"id":"BBFZT11","name":"Frost Reaction","description":"When [Frost Cross] is cast beyond the duration of [Frost Strike], the remaining Cooldown of [Frost Strike] is reduced by 1 / 2 / 3 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF10.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":8,"lvl":1},
{"id":"BBFZT12","name":"Chill Strike+","description":"Chill Strike deals 5% / 10% / 15% more DMG and reduces the DMG of the target's next attack on you by 2% / 4% / 6%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF11.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},{"id":"BBFZT13","name":"Frost Strike+","description":"Frost Strike deals 5% / 10% / 15% more DMG. Dmg Reduc is additionally increased by 2.5% / 5% / 7.5%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF12.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},
{"id":"BBFZT14","name":"Frostbind","description":"Additional DMG Reduc granted by Frost Cross is increased by 50% / 100%. Cooldown is decreased by 1 / 2 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF13.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":11,"lvl":3},
{"id":"BBFZT15","name":"Storm Flying Axe+","description":"Storm Flying Axe deals 5% / 10% / 15% more DMG. The amount of HP recovered is increased by 60% / 120% / 180%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF14.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":15,"preq":null,"lvl":null},
{"id":"BBFZT16","name":"Frost Cross+","description":"Frost Cross deals 5% / 10% / 15% more DMG and increases the Dmg Reduc of the next Frost Strike by 4% / 8% / 12% when cast.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF15.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":14,"lvl":2},
{"id":"BBFZT17","name":"Death Fight+","description":"Death Fight grants 3% / 6% more DMG Immunity. Cooldown is decreased by 2 / 4 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF16.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":18,"preq":null,"lvl":null},
{"id":"BBFZT18","name":"Frost Spread","description":"For every 9 / 6 / 3 sec in combat, grant 2 Frozen Rune(s) and recover 3% of Max HP.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF17.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":21,"preq":null,"lvl":null},
{"id":"BBFZT19","name":"Frost Outbreak+","description":"Frost Outbreak grants 40% / 80% more Glancing, Glancing effect, and Physical DEF effect, and makes them last 2 / 4 sec longer.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF18.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
{"id":"BBFZT20","name":"Instinct Dodge","description":"5% / 10% / 15% of Glancing Level converts into Dodge. Each Dodge will grant 12 / 24 / 32 Frozen Rune(s).","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF19.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":24,"preq":null,"lvl":null},
{"id":"BBFZT21","name":"Permanent Freeze","description":"All Frozen Runes are obtained 70% / 140% faster during Frost Outbreak.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF20.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":24,"preq":null,"lvl":null},
{"id":"BBFZP01","name":"Glancing Specialization","description":"Your Glancing Rate is increased by 5% additionally.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF21.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZP02","name":"Frost Guard","description":"Each Glancing during Frost Strike grants 3 additional Frozen Runes.<br><br>Enhanced with Glancing. The number of Frozen Runes returned after Frost Strike is settled increases with it.<br><br>Glancing 16% 5% Frozen Runes are returned.<br>Glancing 25%:10% Frozen Runes are returned.<br>Glancing 34%: 15% Frozen Runes are returned.<br>Glancing 42% 20% Frozen Runes are returned.<br>Glancing 50%: 25% Frozen Runes are returned.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZP03","name":"Frozen Skin","description":"The Physical DEF bonus granted by Chill Strike is increased by the Omni percentage.<br><br>Enhanced with Omni. The basic Damage Immunity effect granted by Death Fight is also improved.<br><br>Omni 6%: the basic Damage Immunity is increased by 3%.<br>Omni 11.4%: the basic Damage Immunity is increased by 7%.<br>Omni 15.6%: the basic Damage Immunity is increased by 12%.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF23.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZP04","name":"Duel Master","description":"When Chill Strike hits a target, there is a chance equal to the Cooldown percentage to reduce the remaining cooldown for Death Fight by 3.5 sec.<br><br>Enhanced with Cooldown. Casting Death Fight reduces the remaining cooldown for Storm Flying Axe and Frost Cross.<br><br>Cooldown 10%: Cooldown is reduced by 1.5 sec.<br>Cooldown 19%: Cooldown is reduced by 3 sec.<br>Cooldown 26%: Cooldown is reduced by 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF24.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZP05","name":"Glancing Effect Specialization","description":"Your Glancing Effect is increased by 5% additionally.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF25.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU01","name":"Beast Sprint","description":"Stimulate your beast potential and boost your Movement Speed by 70% for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult1.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU02","name":"Leap","description":"Jump to the target or a specified location, causing enemies within 3 m of the landing point inflicted by a 50% Deceleration for 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult2.jpg","cooldown":35,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU03","name":"Contempt","description":"Taunt your enemies within 8 m. The effect lasts for 6 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult3.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU04","name":"Mockery","description":"Taunt targets enemy. The effect lasts for 6 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult4.jpg","cooldown":15,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU05","name":"Break Free","description":"Instantly remove all Root and Control effects on you.<br>Certain Boss Skill effects cannot be removed.","variable":"","icon":"./Icons/Barbarian/Frozen/ult5.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU06","name":"Slam","description":"Slam the target to interrupt the skill casting.<br>Some Bosses' skills can't be interrupted.","variable":"","icon":"./Icons/Barbarian/Frozen/ult6.jpg","cooldown":20,"range":4,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU07","name":"Wild Flying Axe","description":"Throws an axe at the target, causing an effect of 70% of Deceleration for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult7.jpg","cooldown":30,"range":8,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZU08","name":"Vulnerate","description":"Wound the target, inflicting 60% Heal Reduc and 60% Deceleration on it for 7 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult8.jpg","cooldown":20,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS01","name":"Frost Strike","description":"Obtain 15 Frozen Rune(s), dealing Physical DMG equal to 107% +203 DMG to the target, and granting 5% DMG Reduc to yourself. After 5 sec, an HP Shield equal to 13% of Max HP+ 2744 will be retumed for 10 sec according to the number of Frozen Runes.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk1.png","cooldown":8,"range":4,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS02","name":"Chill Strike","description":"Obtain 5 Frozen Rune(s), deal Physical DMG equal to 76% of your ATK + 140 to the target, and increase Physical DEF by 2.4% +70. Its effect is stackable and can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk2.png","cooldown":3,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS03","name":"Frost Cross","description":"Condense Chill and obtain 10 Frozen Runes to launch a ranged [Cross Slash], dealing Physical DMG equal to 47% of your ATK + 119 to the target and reducing the DMG equal to the target's next attack against you by 5%. Can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Frozen/BarbF8.jpg","cooldown":12,"range":4,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS04","name":"Axe Cylclone","description":"Surround yourself with flying axes, dealing Physical DMG equal to 48% of your ATK + 91 to nearby enemies twice every second,","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk4.png","cooldown":4,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS05","name":"Death Fight","description":"Increase Physical DEF by 203 and gain DMG Immunity effect for 8 sec. The lower the HP, the higher the DMG Immunity.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk5.png","cooldown":90,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS06","name":"Frost Outbreak","description":"Activate frost energy, improving Glancing Chance by 15%, increasing Glancing Effect by 10%, Physical DEF by 70, and Frozen Runes slowly for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk6.png","cooldown":120,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZS07","name":"Storm Flying Axe","description":"Obtain 10 Frozen Rune(s) and throw an axe toward the target, dealing Physical DMG equal to 105% of your ATK+ 196 to the enemies along the arc path. The axe will retum to you and recover HP by 3% of your Max HP+791.","variable":"","icon":"./Icons/Barbarian/Frozen/barbFsk7.png","cooldown":9.9,"range":8,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"BBFZA01","name":"Frozen Rune","description":"Accumulate Frozen Runes. During the settlement of Frost Strike, all Frozen Runes will be consumed to grant a Shield based on the proportion of the consumed amount.<br><br>Spec Aura: Grant your group an attribute bonus aura of Firmness that increases Physical DEF by 2% during a\nraid.","variable":" ","icon":"./Icons/Barbarian/Frozen/BarbF22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null}]