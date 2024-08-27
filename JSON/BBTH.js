// Barbarian Thunder
const talents = [{"id":"BBTHT01","name":"Wild Frenzy","description":"Wild Strike will increase your ATK and Speed-up by 0.66% / 1.3% / 2%.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT1.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHT02","name":"Critical Blow","description":"Wrath of Thunder will cause the target to bleed and deal Physical DMG equal to 8% / 16% / 24% of your ATK for 4 sec.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT2.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHT03","name":"Wildness Control","description":"Your base Combo Rate is increased by 1% / 2% / 3%.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT3.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBTHT04","name":"Wild Strike+","description":"[Wild Strike] deals 5% / 10% / 15% more DMG and grants you 1 / 2 / 3 more Beastliness.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT4.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBTHT05","name":"Contest","description":"When Beastliness is greater than or equal to Sanity, DMG will be increased by 1.5% / 3% / 4.5%. When Sanity is greater than or equal to Beastliness, the Combo Rate will be increased by 1.5% / 3% / 4.5%.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"BBTHT06","name":"Cyclone Turmoil+","description":"Cyclone Turmoil deals 5% / 10% / 15% more DMG.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT6.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"BBTHT07","name":"Earthquake+","description":"[Earthquake] increases 3% / 6% more Combo additionally, and the effect lasts for 1 / 2 sec longer.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT7.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":6,"preq":null,"lvl":null},
    {"id":"BBTHT08","name":"Spare Power","description":"When Wrath of Thunder lands a combo hit, it will additionally restore 4 / 8 Sanity and Beastliness separately.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT8.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":6,"preq":null,"lvl":null},
    {"id":"BBTHT09","name":"Thunder Axe","description":"Wrath of Thunder is replaced with Thunder Axe.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT9.jpg","cooldown":null,"range":null,"speed":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"BBTHT10","name":"Axe Thunder+","description":"Axe Thunder deals 5% / 10% / 15% more DMG and grants you 1 / 2 / 3 more Sanity.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT10.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":9,"preq":null,"lvl":null},
    {"id":"BBTHT11","name":"Tearing Wound","description":"When Thunder Axe hits a target, it will increase the DMG dealt to the target by 1% / 2% / 3% for 8 sec, stackable up to 3 times.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT11.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":9,"lvl":1},
    {"id":"BBTHT12","name":"Achilles","description":"Earthquake additionally grants 8 / 16 Sanity or Beastliness, whichever is lower. If the values are equal and there are still points left, they will be distributed evenly.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT12.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":12,"preq":null,"lvl":null},
    {"id":"BBTHT13","name":"Zealous Throw","description":"Each time Thunder Axe lands a combo, it increases your HasteEffect by 0.5% / 1% for 8 sec.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT13.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":null,"lvl":null},
    {"id":"BBTHT14","name":"Potential Unleash","description":"Earthquake grants you 5 / 10 more Sanity and Beastliness. While it is active, your DMG bonus is increased by 3% / 6% after casting a skill.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT14.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":12,"lvl":2},
    {"id":"BBTHT15","name":"Wrath of Thunder","description":"Wrath of Thunder deals 5% / 10% / 15% more DMG and has a 10% / 20% / 30% chance of increasing the DMG of the next Wild Strike by 100% after it is cast.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT15.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"BBTHT16","name":"Thunder Axe+","description":"Thunder Axe deals 5% / 10% / 15% more DMG. Combo DMG is increased by 0.66% / 1.32% / 2% for up to 2.3 sec after this skill is cast.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT16.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":13,"lvl":2},
    {"id":"BBTHT17","name":"Cruelty","description":"Deal 15% / 30% / 45% more DMG to targets with an HP lower than 25%.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT17.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":null,"lvl":null},
    {"id":"BBTHT18","name":"Energy Overflow","description":"If your skill leads to the overflow of any Energy, the next Wrath of Thunder or Thunder Axe deals 5% 10% more DMG, with a cooldown of 8 sec.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT18.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"BBTHT19","name":"Bloodlust+","description":"Bloodlust grants you additional 2.5% / 5% of DMG Bonus, and the effect lasts for 2 / 4 sec longer.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT19.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"BBTHT20","name":"Balance","description":"When adding more Sanity, there is a 10% / 20% / 30% chance to increase Beastliness by 50% of value added to Sanity. When adding more Beastliness, there is a 10% / 20% / 30% chance to increase Sanity by 50% of value added to Beastliness.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT20.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"BBTHT21","name":"Storm Spread","description":"While Bloodlust is active, it grants you an aura that grants your nearby allies a 25% / 50% ATK boost. (The same effects do not stack.)","variable":"","icon":"./Icons/Barbarian/Thunder/barbT21.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":24,"preq":19,"lvl":2},
    {"id":"BBTHP01","name":"Combo Spec.","description":"Your Combo Rate is increased by 5% additionally.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHP02","name":"Wild Thunder","description":"When Wild Strike or Axe Thunder lands a combo, it has a 10% chance to enhance the next Axe Thunder to Wild Thunder, increasing the DMG to 150% of the original.<br><br>Enhanced with Combo. The DMG of Wild Thunder increases with it.<br><br>Combo 16%: DMG is increased by 5% more. <br>Combo 25%: DMG is increased by 10% more. <br>Combo 34%: DMG is increased by 15% more. <br>Combo 42%: DMG is increased by 20% more. <br>Combo 50%: DMG is increased by 25% more.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT23.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHP03","name":"Multi Strike","description":"Wild Strike has a chance equal to the Omni percentage x 40% to deal additional DMG 1 time(s).<br><br>Enhanced with Omni. Wild Strike increases the DMG of your next skill.<br>Omni 6%: the DMG of the next skill is increased by 5%.<br>Omni 11.4%: the DMG of the next skill is increased by 12%.<br>Omni 15.6%: the DMG of the next skill is increased by 20%.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT24.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHP04","name":"Wrath Build Up","description":"For every 200 Beastliness and Sanity consumed, there's a chance equal to the character's Cooldown percentage x 30% to refresh the cooldown for Earthquake.<br><br>Enhanced with Cooldown. Casting Earthquake reduces the remaining cooldown for Bloodlust.<br><br>Cooldown 10%: Cooldown is reduced by 0.5 sec. <br>Cooldown 19%: Cooldown is reduced by 1.2 sec. <br>Cooldown 26% : Cooldown is reduced by 2 sec.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT25.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHP05","name":"Combo DMG Spec.","description":"Your Combo DMG is increased by 10% additionally.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT26.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU01","name":"Beast Sprint","description":"Stimulate your beast potential and boost your Movement Speed by 70% for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult1.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU02","name":"Leap","description":"Jump to the target or a specified location, causing enemies within 3 m of the landing point inflicted by a 50% Deceleration for 5 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult2.jpg","cooldown":35,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU03","name":"Thundershock","description":"Unleash the power of thunder to inflict a 50% Deceleration effect on\nenemies within a 4 m radius for 6 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult3.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU04","name":"HP Up","description":"Calm down to recover HP 3 time(s), each time recovering 12% of Max HP.","variable":"","icon":"./Icons/Barbarian/Frozen/ult4.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU05","name":"Break Free","description":"Instantly remove all Root and Control effects on you.<br>Certain Boss Skill effects cannot be removed.","variable":"","icon":"./Icons/Barbarian/Frozen/ult5.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU06","name":"Slam","description":"Slam the target to interrupt the skill casting.<br>Some Bosses' skills can't be interrupted.","variable":"","icon":"./Icons/Barbarian/Frozen/ult6.jpg","cooldown":20,"range":4,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU07","name":"Wild Flying Axe","description":"Throws an axe at the target, causing an effect of 70% of Deceleration for 8 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult7.jpg","cooldown":30,"range":8,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHU08","name":"Vulnerate","description":"Wound the target, inflicting 60% Heal Reduc and 60% Deceleration on it for 7 sec.","variable":"","icon":"./Icons/Barbarian/Frozen/ult8.jpg","cooldown":20,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS01","name":"Axe Thunder","description":"Gain 22 Sanity and attack the ranged target twice, each attack dealing Physical DMG equal to 43% of your ATK +112. Can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk1.png","cooldown":3,"range":8,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS02","name":"Wild Strike","description":"Obtain 10 Beastliness and attack the target multiple times, each attack dealing Physical DMG equal to 43% of your ATK + 112. Can be recharged twice.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk2.png","cooldown":3,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS03","name":"Thunder Axe","description":"Continuously throw flying axes at the nearest target, each axe dealing Physical DMG equal to 11% of your ATK +77. Requires at least 20 Beastliness and Sanity. Consuming more Beastliness increases the DMG while consuming more Sanity increases the number of attacks.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT9.jpg","cooldown":4,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS04","name":"Earthquake","description":"Combine the primitive Wildness and Thunder Power within to deal Physical DMG equal to 388% of your ATK + 1015 to the target, increase your Combo and Combo DMG by 7% for 5 sec, and gain 40 Beastliness and Sanity.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk4.png","cooldown":35,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS05","name":"Cyclone Turmoil","description":"Wield two axes to deal Physical DMG equal to 25% of your ATK +63 to nearby enemies twice.<br>For each target hit by the skill, its cooldown is reduced by 1 sec.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk5.png","cooldown":5,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS06","name":"Bloodlust","description":"Unleash your full potential, increasing your ATK by 10% +70 for 15 sec, during which Beastliness gained from [Wild Strike] is doubled, and [Axe Thunder] has no cooldown.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk6.png","cooldown":120,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS07","name":"Wrath of Thunder","description":"Strike hard at the target, attack the target 2 time(s), each time dealing Physical DMG equal to 95% of your ATK +252 and consuming 60 Beastliness and Sanity.","variable":"","icon":"./Icons/Barbarian/Thunder/barbTsk7.png","cooldown":0,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHS08","name":"Inscribed Stone Skill","description":"[Wild Strike] or [Axe Thunder] decreases Cooldown and gains extra Energy within 6 sec","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHA01","name":"Beast & Sanity","description":"Gain 2 Beastliness per base attack. Casting different skills can gain and cost Sanity and Beastliness. When the current difference between Sanity and Beastliness is greater than 30, the DMG will be reduced by 15%.<br><br>Spec Aura: Grant your group an attribute bonus aura of Concentration that increases combo and crit, by 2% during a raid.","variable":"","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"BBTHC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Combo by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Combo DMG is improved by 9%. / 13.5% / 18% additionally<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI02","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI07","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI09","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI12","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI15","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI16","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI17","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI23","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increase your Physical DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI26","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI27","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI29","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI30","name":"Combo","description":"Combo + 52 / 79 / 105<br><br>Increases chance to trigger a Combo attack","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI31","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI36","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI39","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI42","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI45","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Ignores the target's DEF","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI49","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG dealt","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI51","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI54","name":"Strength","description":"Strength + 52 / 79 / 105<br><br>Strength increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI57","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"BBTHI58","name":"Specialization","description":"Combo DMG + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Combo DMG","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null}]
    