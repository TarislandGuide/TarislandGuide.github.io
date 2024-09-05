// Necro Healing
const talents = [{"id":"PNSHT01","name":"Soul Herb+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH1.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHT02","name":"Zest","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH2.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHT03","name":"Beacon","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH3.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"PNSHT04","name":"Healing","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH4.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":3,"preq":null,"lvl":null},
    {"id":"PNSHT05","name":"Tainted Potential","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH5.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":3,"preq":null,"lvl":null},
    {"id":"PNSHT06","name":"Soul Link+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"PNSHT07","name":"Blossom","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH7.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"PNSHT08","name":"Firmness","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH8.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":6,"preq":null,"lvl":null},
    {"id":"PNSHT09","name":"Soulguard","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH9.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":9,"preq":null,"lvl":null},
    {"id":"PNSHT10","name":"Vilebloom","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH10.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":9,"preq":null,"lvl":null},
    {"id":"PNSHT11","name":"Soul Aid","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH11.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":9,"lvl":1},
    {"id":"PNSHT12","name":"Rejuvenate","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH12.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"PNSHT13","name":"Souldraw+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH13.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":12,"preq":null,"lvl":null},
    {"id":"PNSHT14","name":"Soul Power","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH14.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":15,"preq":11,"lvl":3},
    {"id":"PNSHT15","name":"Burning Soul+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH15.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":15,"preq":null,"lvl":null},
    {"id":"PNSHT16","name":"Tainted Soul+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH16.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":15,"preq":null,"lvl":null},
    {"id":"PNSHT17","name":"Soulguard+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH17.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":18,"preq":14,"lvl":2},
    {"id":"PNSHT18","name":"Flourish","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH18.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":21,"preq":null,"lvl":null},
    {"id":"PNSHT19","name":"Bloomwaltz","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH19.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":21,"preq":null,"lvl":null},
    {"id":"PNSHT20","name":"Self-healing Soul","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH20.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":24,"preq":null,"lvl":null},
    {"id":"PNSHT21","name":"Soul Dance+","description":"skill information coming soon","variable":"","icon":"./Icons/Necro/SoulHealing/necroH21.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":2,"min":24,"preq":19,"lvl":2},
    {"id":"PNSHP01","name":"Crit. Mastery","description":"Your Crit. Rate is increased by 5%.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH22.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHP02","name":"Renewal","description":"When Soul Herb deals a Crit. Hit, it grants 1 additional Vitality.<br><br>Enhanced with Crit., for every 4 Datura Flower(s) collected, your next Soul Herb becomes Soul Blossom within 5 sec, and its healing effect is enhanced as well.<br><br>Crit. 16%: the healing this time is increased by 30%.<br>Crit. 25%: the healing this time is increased by 60%.<br>Crit. 34%: the healing this time is increased by 90%.<br>Crit. 42%: the healing this time is increased by 120%.<br>Crit. 50%: the healing this time is increased by 150%.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH23.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHP03","name":"Soul Armor","description":"Casting Souldraw will additionally increase the target's Dual Defense by your Omni percentage for 4 sec.<br><br>Enhanced with Omni. When casting Souldraw, the target's HP is continuously recovered by a percentage of your ATK for 4 sec.<br><br>Omni 6%: HP is recovered by 1.5% per sec.<br>Omni 11.4%: HP is recovered by 3% per sec.<br>Omni 15.6%: HP is recovered by 6% per sec.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH24.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHP04","name":"Sanctum","description":"After casting Burning Soul, the remaining cooldown of Tainted Soul and Soulquard is immediately reduced by your Cooldown percentage × 3.<br><br>Enhanced with Cooldown. While Burning Soul is active, the target's Damage Immunity is increased. <br><br>Cooldown 10%: DMG Reduction is increased by 5%.<br>Cooldown 19%: DMG Reduction is increased by 10%.<br>Cooldown 26%: DMG Reduction is increased by 25%.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH25.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHP05","name":"Crit. DMG Mastery","description":"Your Crit. DMG is increased by 10%.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH26.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU01","name":"Psionic Phantom","description":"Flash 10 m in the designated direction and leave a phantom in place. Cast the skill again after 4 sec to instantly return to the position of the phantom. The skill has a max range of 24 m.<br><br>Additional PvP Effect<br>Can remove the Stun and Immobilize effects and grant a 10% Damage Immunity effect for 1s / 1.5s / 2s<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult1.jpg","cooldown":30,"range":10,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU02","name":"Shadow Speed","description":"Increase your MoveSpd by 70% for 8 sec.<br><br>Additional PVP Effect<br>Can remove Deceleration, Stun, and Immobilize and grant a 10% Damage Immunity effect for 1s / 1.5s / 2s.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult2.jpg","cooldown":30,"range":2,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU03","name":"Styx Pulse","description":"Control the Ghost to strike around to Knockback enemies within 4 m, distance: 8 m, and inflict 50% of Deceleration on them for 5 sec.<br><br>Additional PvP Effect<br>When cast, recovers HP by 8% / 10% / 12% of Max HP<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult3.jpg","cooldown":40,"range":2,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU04","name":"Ghost","description":"Resurrect a chosen ally by infusing a Ghost into the body. The resurrected ally has 50% HP.<br><br>Additional PvP Effect<br>Can be used in the arena, but the HP after resurrection is 10% / 20% / 30% of the target's Max HP, and the skill requires 5 sec of chanting.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult4.jpg","cooldown":300,"range":24,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU05","name":"Break Free","description":"Instantly remove all Root and Control effects on you.<br>Certain Boss Skill effects cannot be removed.<br><br>Additional PvP Effect<br>Immune to all controls within 2s / 2.5s / 3s after using [Break Free]<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult5.jpg","cooldown":60,"range":2,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU06","name":"Clean Soul","description":"Disperse 1 random Control effect(s) and all the Move Restraint effects and Boss Debuffs for an ally.<br>Disperse the selected target first. If the current target has no effects to be dispersed, it will disperse the nearest ally within the casting range. If there is still no qualified target, the skill cooldown will be reset.<br><br>Additional PvP Effect<br>After dispersing a debuff, the target is immune to all controls for 2s.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult6.jpg","cooldown":25,"range":24,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU07","name":"Soul Bind","description":"Make the target Root for 6 sec.<br><br>Additional PvP Effect<br>Inflicts Stun for 2s / 2.5s / 3s. Continuous control from effects of the same type will diminish.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult7.jpg","cooldown":30,"range":16,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU08","name":"Borrowed Time","description":"For the next 6 sec, convert a percentage of DMG taken into healing, which heals you for up to 20% of your Max HP. (You still take the excess DMG)<br><br>Additional PvP Effect<br>While active, grant Immortality once. When triggered, recovers HP by 10% / 15% / 20% of Max HP. The cooldown is reduced to 40 sec.<br><br>Additional PvP Attributes<br>ATK (PVP) gained from Military Rank + 2% / 3% / 5%<br>HP (PvP) gained from Military Rank + 2% / 3% / 5%","variable":"","icon":"./Icons/Necro/SoulHealing/ult8.jpg","cooldown":60,"range":2,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU09","name":"Slow Suppression","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Decelerated target are increased by ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank +${u.g + info[1] + u.s}<br>HP (PvP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT1.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU10","name":"Deadly Strike","description":"Additional Effect<br>The direct DMG dealt and healing granted to the Dazed target are increased by ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT2.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU11","name":"Slow Shield","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0] + u.s} when Decelerated<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT3.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU12","name":"Deady RES","description":"Additional Effect<br>DMG taken is reduced by ${u.g + info[0] + u.s} when Dazed<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 20% / 30%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT4.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU13","name":"Death Sustenance","description":"Additional Effect<br>Can negate lethal DMG once. HP is recovered by ${u.g + info[0] + u.s} of Max HP when triggered<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT5.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU14","name":"Time Control","description":"Additional Effect<br>Cooldown for all Ultimates - ${u.g + info[0] + u.s}<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT6.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU15","name":"Divine Radiance","description":"Additional Effect<br>Disperse a random debuff effect every ${u.g + info[0] + u.s} in battle<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank +  ${u.g + info[1] + u.s}","variable":"40s / 30s / 20s, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT12.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHU16","name":"Rapid Pullback","description":"Additional Effect<br>After being hit, MoveSpd is increased by ${u.g + info[0] + u.s} for 3 sec. Can stack up to 3 times<br><br>Additional Attributes<br>ATK (PVP) gained from Military Rank + ${u.g + info[1] + u.s}<br>HP (PVP) gained from Military Rank + ${u.g + info[1] + u.s}","variable":"10% / 15% / 20%, 2% / 3% / 5%","icon":"./Icons/Barbarian/Thunder/barbT8.jpg","cooldown":null,"range":null,"speed":"","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS01","name":"Soul Herb","description":"Unleash the Soul Herb to recover the target's HP by 77% of your ATK + 203, Deal half of the healing effect as DMG when cast on enemies.<br>For every 1.8 sec that the skill is not cast in battle, the HP Recovery effect of the skill is increased by 67%, stacking up to 3 times,","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk1.png","cooldown":0,"range":24,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS02","name":"Souldraw","description":"Manipulate souls to deal DMG equal to 116% of your ATK + 308 to enemies near your selected ally and recover the ally's HP by 3 times the DMG dealt. You will also gain 3 Vitality.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk2.png","cooldown":6,"range":24,"speed":"Instant","cost":"Recovers 3 Vitality","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS03","name":"Tainted Soul","description":"Release corrupted soul to recover HP for an ally by 360% of your ATK + 945. As the soul is corrupted, the ally will slowly lose 50% of its healing points, Gain 10 Vitality.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk4.png","cooldown":12,"range":24,"speed":"Instant","cost":"Recovers 1 Flower","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS04","name":"Soul Link","description":"Link your allies to yourself, with each ally sharing 4% of the target's DMG taken and healing received. Increase the target's Physical DEF by 1400. Each Datura Flower consumed allows the linking of one more ally.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk5.png","cooldown":15,"range":24,"speed":"Instant","cost":"Costs 1 Flower","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS05","name":"Burning Soul","description":"Bum souls to recover an ally's HP by 288% of your ATK + 756, additionally recover HP for them by 24% of your ATK +63 for 6 sec, and increase their Max HP by 10%.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk6.png","cooldown":60,"range":24,"speed":"Instant","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS06","name":"Soul Dance","description":"Perform a ritual dance, healing the teammates and summoned units within 24 meters within 5.5 sec by recovering 6 time(s). Each time, recover HP by 237% of your ATK +623. This skill will be interrupted by jumps and movements.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk7.png","cooldown":120,"range":24,"speed":"Channel 5.5 sec","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS07","name":"Soulguard","description":"Summon 3 Soul Fire(s) to circle the target. Each time the target is attacked, a Soul Fire explodes and recovers HP equal to 72% of your ATK + 189 to the target.","variable":"","icon":"./Icons/Necro/SoulHealing/necroH9.jpg","cooldown":10,"range":24,"speed":"Instant","cost":"Recovers 1 Flower","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS08","name":"Soul Blossom","description":"Soul Herb grows everywhere, recovering HP by 128% of your ATK + 336 for all nearby allies.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk8.png","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHS09","name":"Inscribed Stone Skill","description":"[Soul Herb] becomes an AoE skill for 6 sec, gaining extra DMG reduction when [Soul Link] is active.","variable":"","icon":"./Icons/Stone/Skill7.png","cooldown":0,"range":2,"speed":"Instant","cost":"","max":null,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHA01","name":"Datura Flower","description":"Use skills to gain Vitality. Every 10 Vitality spawns a Datura Flower. Casting Soul Link will consume all the flowers and replace the next Soul Herb with Soul Blossom. Each additional flower consumed increases the healing effect of the next Soul Blossom by 25%.<br><br>Spec Aura: Grant your group bonus aura of Fitness that increases Max HP by 5% during a raid.","variable":"","icon":"./Icons/Necro/SoulHealing/necroHsk8.png","cooldown":null,"range":null,"speed":"","cost":"","max":0,"min":null,"preq":null,"lvl":null},
    {"id":"PNSHC01","name":"Starting","description":"There is a 30% chance to inflict 1 stacks of Echo Recharge in battle. 15 stacks of Energy triggers Echo of Destiny, increasing your Crit by 525 for 6 sec.","variable":"","icon":"./Icons/Stone/start.png","cooldown":null,"range":null,"speed":"","cost":"","max":1,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHC02","name":"Core 1","description":"Echo of Destiny lasts 1 / 2 / 3 more sec.<br>Crit DMG (& Healing?) is improved by 9%. / 13.5% / 18% additionally<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHC03","name":"Core 2","description":"Echo of Destiny increases your specialization attribute level by 131 / 196 / 262 additionally, increasing Speed Up and MoveSpd by 2.5% / 3.7% / 5% respectively.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHC04","name":"Core 3","description":"Each time you obtain Echo of Destiny, you have a 30% chance to gain 12.5% / 18.5% / 25% Inscribed Stone Energy and recover HP by 2% / 3% / 4% per sec for 5 sec.<br><br>The core node's level is the lowest level of all its preceding nodes.","variable":"","icon":"./Icons/Stone/echo.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI01","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI02","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack / heal","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI03","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI04","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG & Healing done","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI05","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI06","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI07","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI08","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI09","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI10","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI11","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI12","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI13","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI14","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG & Healing done","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI15","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI16","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack / heal","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI17","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack / heal","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI18","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI19","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI20","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI21","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI22","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI23","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI24","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI25","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI26","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI27","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI28","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI29","name":"Specialization","description":"Crit DMG & Crit Healing + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG & Crit Healing","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI30","name":"Crit","description":"Crit + 52 / 79 / 105<br><br>Increases chance to trigger a Critical attack / heal","variable":"","icon":"./Icons/Stone/crit.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI31","name":"Specialization","description":"Crit DMG & Crit Healing + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG & Crit Healing","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI32","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG & Healing done","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI33","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI34","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI35","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI36","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI37","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI38","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI39","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI40","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI41","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI42","name":"Specialization","description":"Crit DMG & Crit Healing + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG & Crit Healing","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI43","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI44","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI45","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI46","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI47","name":"Focus","description":"Focus + 52 / 79 / 105<br><br>Increases your Healing","variable":"","icon":"./Icons/Stone/focus.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI48","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI49","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI50","name":"Omni","description":"Omni + 52 / 79 / 105<br><br>Increases your final DMG & Healing done","variable":"","icon":"./Icons/Stone/omni.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI51","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI52","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI53","name":"Resonance","description":"Resonance + 52 / 79 / 105<br><br>Affect how fast a player can get Inscribed Stone Energy and how powerful the Inscribed Stone skill will be during the burst.","variable":"","icon":"./Icons/Stone/res.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI54","name":"Intelligence","description":"Intelligence + 52 / 79 / 105<br><br>Intelligence increases a small amount of ATK.","variable":"","icon":"./Icons/Stone/stat.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI55","name":"Stamina","description":"Stamina + 52 / 79 / 105<br><br>Stamina affects HP and Health Recovery","variable":"","icon":"./Icons/Stone/stamina.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI56","name":"Cooldown","description":"Cooldown + 52 / 79 / 105<br><br>Speeds up the cooldown, cast time, and global cooldown of a player's skills.","variable":"","icon":"./Icons/Stone/cooldown.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI57","name":"Specialization","description":"Crit DMG & Crit Healing + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG & Crit Healing","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null},
    {"id":"PNSHI58","name":"Specialization","description":"Crit DMG & Crit Healing + 1.2% / 1.8% / 2.5%<br><br>Convert Specialization points into Crit DMG & Crit Healing","variable":"","icon":"./Icons/Stone/spec.png","cooldown":null,"range":null,"speed":"","cost":"","max":3,"min":0,"preq":null,"lvl":null}]
    