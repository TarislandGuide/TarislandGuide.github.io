const talents = [{"id":"blah","name":"Unknown","description":"skill information coming soon","icon":"./Icons/blah.png"},
// Warrior Wrathful
{"id":"WAWRT01","name":"Rage","description":"After Wrath is full, you have a 33% / 66% / 100% chance of entering the Rage status for 5 sec (up to 10 sec when repeatedly acquired): Casting Fury Blade while in this status deals additional DMG 1 times.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr1.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
{"id":"WAWRT02","name":"Final Slash","description":"Final Strike has a 33% / 66% / 100% chance of making your next Cross Slash deal 80% more DMG when cast.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr2.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":0,"preq":null,"lvl":null},
{"id":"WAWRT03","name":"Commander","description":"Your base Combo Rate is increased by 1% / 2% / 3%,","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr3.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
{"id":"WAWRT04","name":"Berserk Blow","description":"Armor Penetration has a 50% / 100% chance to send you into the Rage status instantly after it is cast.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr4.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":3,"preq":null,"lvl":null},
{"id":"WAWRT05","name":"Assault of Fury Blade","description":"While in Rage, each time Fury Blade is cast, its remaining duration is increased by 0.5 / 1 / 1.5 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr5.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":3,"preq":null,"lvl":null},
{"id":"WAWRT06","name":"Blade Cyclone","description":"Blade Cyclone deals 10% / 20% / 30% more base DMG, and its base cooldown is reduced by 2 / 4 / 6 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr6.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
{"id":"WAWRT07","name":"Rage+","description":"While Rage is active, additionally grant a 1.5% / 3% / 4.5% DMG bonus.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr7.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":6,"preq":null,"lvl":null},
{"id":"WAWRT08","name":"Furious Stab","description":"Obtained Furious Stab (this skill will replace Final Strike).","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr8.jpg","cooldown":null,"range":null,"speed":"","max":1,"min":9,"preq":null,"lvl":null},
{"id":"WAWRT09","name":"Cross Assault","description":"For every 3 Cross Slash cast, DMG is increased by 25% / 50% / 75%.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr9.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":9,"preq":null,"lvl":null},
{"id":"WAWRT10","name":"Fury Blade+","description":"Fury Blade deals 2% / 4% / 6% more base DMG. Upon hitting a target, there is a 6% / 12% / 18% chance of dealing additional DMG once.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr10.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":9,"preq":5,"lvl":3},
{"id":"WAWRT11","name":"Cruelty","description":"Furious Stab makes your next Fury Blade deal 5% / 10% / 15% more DMG.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr11.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":8,"lvl":1},
{"id":"WAWRT12","name":"Cross Slash+","description":"Cross Slash deals 3% / 6% / 9% more base DMG. When you cast it at 0 Wrath, there is a 33% / 66% / 100% chance of gaining an additional 1 Wrath.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr12.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":12,"preq":null,"lvl":null},
{"id":"WAWRT13","name":"Direct Final","description":"After Fury Blade is cast, your next Final Strike has a 10% / 20% chance to directly trigger its Enhancement Effect irrespective of the target's remaining HP.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr13.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":12,"preq":null,"lvl":null},
{"id":"WAWRT14","name":"Crazy","description":"When your Rage is active, the base cooldown for your Furious Stab is reduced by 10% / 20%, and you are 5% / 10% more likely to land a combo.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr14.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":15,"preq":11,"lvl":3},
{"id":"WAWRT15","name":"Final Strike+","description":"Final Strike deals 2% / 4% / 6% more base DMG, and its base cooldown is reduced by 1 / 2 / 3 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr15.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":15,"preq":null,"lvl":null},
{"id":"WAWRT16","name":"Furious Stab+","description":"Furious Stab's base DMG is increased by 15% / 30% / 45%. When you don't have Rage status, casting this skill has a 33% / 66% / 100% chance of gaining 1 extra Wrath.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr16.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":18,"preq":14,"lvl":2},
{"id":"WAWRT17","name":"Armor Penetration+","description":"Armor Penetration deals 15% / 30% more base DMG and increases the Combo Rate of your next skill by 4% / 8% after it is cast.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr17.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":18,"preq":null,"lvl":null},
{"id":"WAWRT18","name":"Wrath Speed","description":"The ATK and Combo effects from Infinite Rage allow your teammates within a 25m radius of you to enjoy 25% / 50% of the effects. (The same effects do not stack.)","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr18.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
{"id":"WAWRT19","name":"Infinite Rage+","description":"Infinite Rage grants 4.5% / 9% more ATK additionally, and this effect lasts 1 / 2 sec longer.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr19.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":21,"preq":null,"lvl":null},
{"id":"WAWRT20","name":"Rampage","description":"Upon gaining Rage, there is also a 33% / 66% / 100% chance of gaining Rampage with the same duration: You deal 6% more DMG but also take 6% more DMG.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr20.jpg","cooldown":null,"range":null,"speed":"","max":3,"min":24,"preq":null,"lvl":null},
{"id":"WAWRT21","name":"Wrath Outbreak","description":"Infinite Rage grants you 1 Wrath every 2 / 1 sec when it's active.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr21.jpg","cooldown":null,"range":null,"speed":"","max":2,"min":24,"preq":null,"lvl":null},
{"id":"WAWRP01","name":"Combo Spec","description":"Your Combo Rate is increased by 5% additionally.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr22.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRP02","name":"Wrath Desire","description":"When Cross Slash lands a Combo, your ATK will be increased by 5% for 4 sec.<br><br>Enhanced with Combo. Your Combo DMG is increased with it while Rage is active.<br><br>Combo 16%: Combo DMG is increased by 2%. <br>Combo 25%: Combo DMG is increased by 4%. <br>Combo 34%: Combo DMG is increased by 6%. <br>Combo 42%: Combo DMG is increased by 8%. <br>Combo 50%: Combo DMG is increased by\n10%.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr23.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRP03","name":"Enemy Break","description":"The DMG Bonus effect of Armor Penetration is increased by the Omni percentage x 50%.<br><br>Enhanced with Omni. The DMG bonus granted by Armor Penetration is additionally increased.<br><br>Omni 6% : +3%.<br>Omni 11.4% +7%.<br>Omni 15.6% +12%.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr24.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRP04","name":"Valor","description":"Fury Blade has a chance equal to the Cooldown percentage to reset the Cooldown: for Final Strike or Furious Stab.<br><br>Enhanced with Cooldown. Casting Fury Blade reduces the remaining Cooldown for Armor Penetration and Infinite Rage.<br><br>Cooldown 10%: Cooldown is reduced by 0.4 sec.<br>Cooldown 19%: Cooldown is reduced by 0.9 sec.<br>Cooldown 26%: Cooldown is reduced by 1.5 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr25.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRP05","name":"Combo DMG Spec.","description":"Your Combo DMG is increased by 10% additionally.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr26.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU01","name":"Dash","description":"Quickly dash 8 m toward the direction of the joystick. Can be recharged 2 times.","variable":"","icon":"./Icons/Warrior/Wrathful/ult1.jpg","cooldown":22,"range":8,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU02","name":"Charge","description":"Charge toward the target enemy quickly and Root the enemy for 0.5 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/ult2.jpg","cooldown":20,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU03","name":"Intimidate","description":"Inflict Roar, dealing DMG to enemies within 8 m by 50% of Deceleration for 6 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/ult3.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU04","name":"Winning Hunger","description":"Adjust stance to recover 30% HP instantly.","variable":"","icon":"./Icons/Warrior/Wrathful/ult4.jpg","cooldown":60,"range":16,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU05","name":"Break Free","description":"Instantly remove all Root and Control effects on you. Certain Boss Skill effects cannot be removed.","variable":"","icon":"./Icons/Warrior/Wrathful/ult5.jpg","cooldown":60,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU06","name":"Slam","description":"Slam the target to interrupt the spellcasting. Some Bosses' skills can't be interrupted.","variable":"","icon":"./Icons/Warrior/Wrathful/ult6.jpg","cooldown":20,"range":4,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU07","name":"Squall Strike","description":"Unleash a shockwave at enemies within a rectangular area ahead and Knockout them for 6 sec (shorter duration for players).","variable":"","icon":"./Icons/Warrior/Wrathful/ult7.jpg","cooldown":25,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRU08","name":"Crippling Strike","description":"Wound the target, inflicting 60% Heal Reduc and 60% Deceleration on it for 7 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/ult8.jpg","cooldown":30,"range":2.5,"speed":"","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS01","name":"Cross Slash","description":"Quickly launch an attack at the target twice, dealing Physical DMG equal to 41% of your ATK + 112. Casting this skill grants you 1 Wrath.<br>This skill can be recharged up to 2 times.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk1.png","cooldown":3,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS02","name":"Final Strike","description":"Launch a final strike at the target, dealing Physical DMG of 146% of your ATK +385, and granting you 2 Wrath. If the target's HP is less than 25%, the skill will deal an additional DMG (no Wrath will be granted).","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk2.png","cooldown":10,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS03","name":"Furious Stab","description":"Launch a furious strike at the target, dealing Physical DMG equal to 105% of your ATK + 280, and granting you 1 Wrath.<br>This skill can be recharged up to 2 times.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr8.jpg","cooldown":6,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS04","name":"Fury Blade","description":"Tum berserk power into a sword to attack the target 2 time(s). Each attack deals Physical DMG equal to 146% of your ATK + 385.<br>The skill can be recharged twice.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk4.png","cooldown":15,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS05","name":"Armor Penetration","description":"Break target's protection with a powerful strike, dealing Physical DMG equal to 299% of your ATK + 784, and boosting the DMG you deal to the target by 10% for 4 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk5.png","cooldown":30,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS06","name":"Blade Cyclone","description":"Become a storm, attacking enemies within 5 m for 5.2 sec 14 times. Each attack deals Physical DMG equal to 31% of your ATK +91.<br>When the skill is activated, you can still move and are immune to Move\nRestraints effect. <br>But some boss skills can still take effect on you.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk6.png","cooldown":25,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRS07","name":"Infinite Rage","description":"Release inexhaustible Wrath, increasing the basic Wrath gain of all skills by 100%, ATK by 70, and Combo Rate by 3% for 12 sec.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWrsk7.png","cooldown":90,"range":2.5,"speed":"Instant","max":0,"min":null,"preq":null,"lvl":null},
{"id":"WAWRA01","name":"Outrage","description":"Gain Wrathful in combat and tum it into a blade to attack enemies.<br><br>Casting Cross Slash, Final Strike, and Furious Stab grant Wrath. When Wrath reaches 10, Fury Blade gains one stack of Recharge.<br><br>Spec Aura: Grant your group bonus aura of the Concentration attribute that increases Combo and Crit, by 2% during a raid.","variable":"","icon":"./Icons/Warrior/Wrathful/warrWr1.jpg","cooldown":null,"range":null,"speed":"","max":0,"min":null,"preq":null,"lvl":null}]