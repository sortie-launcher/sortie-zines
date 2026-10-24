## Why Jehuty belongs here

Character action is usually told as a story about swords and people: Dante, Ryu Hayabusa, Kratos. Zone of the Enders: The 2nd Runner, which Konami Computer Entertainment Japan released in North America in March 2003, makes the same argument with a giant robot. Hideo Kojima produced it. Shuyo Murata, who had worked on the first game, directed it. At E3 2002 Kojima and Murata told IGN that the sequel would fix the original's one-on-one fights and repetitive backtracking. Their answer was a linear run of stages full of enemy crowds, a new camera Kojima said took a year to build, and grabs that turn enemies into clubs and shields.

It came out about eighteen months after Devil May Cry and a year before Ninja Gaiden. In my reading, it puts as much weight on range and movement as on combos.

A warning if the words "giant robot" make you think of Armored Core: there is no garage. IGN's Jeremy Dunham said its design and pacing were not meant for the crowd that "worships titles like Armored Core or Carnage Heart", and GameRevolution found "no customization and little ship development". Jehuty gains levels and collects sub-weapons, and that's all.

## One button, two ranges

The North American manual puts nearly all offence on the Square button. Jehuty locks on automatically as enemies come near (L2 switches targets; hold it to release the lock), and Square then gives a blade attack when you are close and a shot when you are not. You never switch weapons; you decide range by moving. Tapping Square at close range gives a four-hit combo, and Konami's English site notes that the fourth hit can instead throw the enemy against the ceiling or the ground. IGN reported that finishing with Triangle launches the enemy and finishing with X smashes it down. Triangle and X also handle climbing and descending, which takes some getting used to in full 3D space.

R2 changes what Square does. Press R2 while moving and you dash. Press it while standing still and you enter Burst mode.

## Dash, burst, grab

Each attack has three versions. Square during a dash gives the Dash Blade, a sweep round the enemy's flank, or the Homing Laser at range. Holding Square while dashing adds laser markers to the lock-on cursor, and they spread left or right in the direction you dash. Releasing fires the volley. In Burst mode, Square gives the Burst Blade, a 360-degree spinning slash, or a Burst Shot that grows the longer you hold it. Burst Shots hit enemies who are blocking. Homing Lasers and Burst Shots both drain the Sub Gauge, the same meter that powers sub-weapons.

![Jehuty fires Homing Lasers at the Orbital Frame Ardjet. PS2 screenshot, © Konami, via IGN's March 2003 review (Wayback)](media/zoe2-jehuty-momentum-homing-laser.webp)

Defence costs the same meter. R1 puts Jehuty in Block mode, and every hit it absorbs drains a little Sub Gauge. Burst attacks, which flash red as a warning, and grabs cannot be blocked. Grab is selected like a sub-weapon and used with Circle. Konami's site lists what you can do with a grabbed enemy: throw it into a wall, swing it into other enemies, or hold it up as a shield. Wall panels and girders work as clubs too. GameSpot noted that shielded enemies move poorly, which leaves them open to a grab.

## Sub-weapons and set pieces

Konami's site lists twelve sub-weapons: Geyser, Gauntlet, Halberd, Wisp, Phalanx, Comet, Decoy, Mummy, Homing Missile, Floating Mine, Vector Cannon and Zero Shift. IGN counted 14 "in all". You pick them with L1 and the D-pad. Zero Shift teleports Jehuty toward the locked target or in the direction you hold, and Konami calls it a "must have" against Anubis. The Vector Cannon fires only from the ground, charges slowly, empties most of the gauge and, per Konami, sinks a battleship in one shot.

Several are tied to particular stages. Eurogamer's Rob Fahey singled out a stage where you hop between battleships with the Vector Cannon, and a huge field battle where you rush between flanks to cut your side's losses. EGM described carrying a disabled ally through crowds. GameSpy's Michael Vreeland saw the downside: objectives change so often that techniques stop mattering, and some sub-weapons "exist solely for one or two minor objectives".

## The first session

The opening takes some patience. IGN called it a "lengthy tutorial" followed by a couple of battles, and Eurogamer said it tries to ease you into "fairly complex but powerful" twin-stick controls before dropping you into the fighting. Story arrives through 2D anime cutscenes and in-engine scenes. Loading a save puts you at the start of the stage you last saved in.

- Start on Normal. The manual's Hard is for "people who are skilled at action games", and IGN found the North American version noticeably harder than the Japanese release.
- Use the main menu's VR Training to drill R2 combinations before the story starts.
- Practise one loop on Callisto: lock, dash in, slash, back off, Homing Laser the crowd.
- Grab enemies that raise their shields rather than shooting at them.
- Don't use continues casually. IGN warns that continuing resets your experience to what you had when the stage began.

## Fit and friction

Length cuts both ways. Eurogamer finished the story in "just over five hours". GameSpy said most players would take under eight, much of it cinematics. My view: for anyone short on patience or time, a short, dense campaign is a selling point. Like God Hand in Field Notes No. 005, it has little filler. Unlike God Hand, it has plenty of talking between stages.

Controls and the camera are the consistent complaint. IGN scored gameplay 7.5, citing "schizophrenic controls" and a camera that can swing 90 degrees in corridors. GameRevolution also noted frame-rate dips in busy scenes. The English dub split reviewers: IGN rated it "among the elite" and GameSpy called it "atrocious". The NA disc has no Japanese audio. Replay comes from Extra Missions, Versus against the CPU or a friend, extra Jehuty models, New Game+ and Zoradius, an unlockable 3D Gradius.

## Which version this covers

This article describes the original North American release, which came out before the later Special Edition additions. Two pre-release accounts of those additions exist, and they differ. In March 2003, GameSpot reported Konami of Europe's announcement: a new opening with a remixed theme, three new events (Train Destruction, Mars Melee, Carrying Up Ardjet), two redesigned levels, European Hard and European Extreme difficulties, and new Jehuty models. In November 2003, IGN reported that Japan's January 2004 Special Edition would carry the European additions, including "two extra stages" and the two difficulties. What actually shipped wasn't checked for this issue. The North American disc has one advantage: it runs at 60Hz, while Eurogamer's reviewer could find no 60Hz mode on the PAL disc.

![North American cover (left) and European PAL Special Edition cover (right). © Konami; left via libretro-thumbnails, right from an ES-DE scrape (upstream source not recorded)](media/zoe2-jehuty-momentum-covers.webp)

The Special Edition content first reached North America in the 2012 HD Collection for PS3 and Xbox 360. Digital Foundry measured that port at around 30fps with regular drops below 20. Because game speed is tied to frame rate, it often ran at half speed. HexaDrive's 2013 patch brought it near 60fps, but only on PS3. The 2018 M∀RS remaster by Konami and Cygames added 4K and VR.

## Emulation: what is known

This guide was researched, not playtested. PCSX2's GameIndex.yaml (master, checked 24 October 2026) rates SLUS-20545, "Zone of the Enders - The 2nd Runner" (NTSC-U), at compat 5. It applies InstantDMAHack to fix cut-off text, plus halfPixelOffset 4 and nativeScaling 2 for post-processing effects. That is desktop data, and other builds and hardware may behave differently. Since game speed follows frame rate, emulator slowdown would probably slow the game itself rather than drop frames (my inference from the HD Collection behaviour, untested).

## How it was received

At launch: IGN's Jeremy Dunham gave it 8.6 (10 March 2003). GameSpot's Giancarlo Varanini gave 8.5 (11 March), calling it what the original "should have been". GameRevolution's Shawn Sanders gave B+ (March 2003). GameSpy's Michael Vreeland gave 3/5 (22 March). EGM issue 164's three reviewers gave 7.5, 9.0 and 8.5. Ziff Davis's site also listed 4.5/5 from the Official U.S. PlayStation Magazine and 8/10 from GMR. Eurogamer's Rob Fahey gave the PAL release 8/10 (13 October 2003). Metacritic's PS2 aggregate is 82. Later, GameSpot's Justin Clark gave the M∀RS remaster 5/10 (14 September 2018), still finding the controls unwieldy.

## Sources

- Konami. Zone of the Enders: The 2nd Runner instruction manual, NTSC U/C (SLUS-20545 release). 2003. Controls, attack types, blocking, difficulty, VR Training, Versus and Extra Missions. https://www.videogamemanual.com/PS2/Zone%20of%20the%20Enders-%20The%202nd%20Runner%20(USA).pdf
- Konami. Zone of the Enders: The 2nd Runner official English site, System and Subweapons pages. 2003. Combo finishers, grab uses, sub-weapon list, Zero Shift and Vector Cannon details. https://www.konami.com/games/zoe2/english/subweapons.html
- IGN staff. "E3 2002: Z.O.E 2 Q&A". IGN, 2002-05-22. Development goals (camera, multi-enemy fights, linear design). https://web.archive.org/web/20231103021507/https://www.ign.com/articles/2002/05/22/e3-2002-zoe-2-qa
- Jeremy Dunham. "Zone of the Enders: The 2nd Runner" review. IGN, 2003-03-10. 8.6/10. Mechanics, sub-weapon count, continue penalty, NA difficulty, dub, camera, Armored Core comparison. https://web.archive.org/web/20130630055921/http://www.ign.com/articles/2003/03/10/zone-of-the-enders-the-2nd-runner
- Giancarlo Varanini. "Zone of the Enders: The 2nd Runner Review". GameSpot, 2003-03-11. 8.5/10. Combat, shields and grabs, reception quote. https://web.archive.org/web/20130324004733/http://www.gamespot.com/zone-of-the-enders-the-2nd-runner/reviews/zone-of-the-enders-the-2nd-runner-review-2912559/
- Shawn Sanders. "Zone of the Enders: The 2nd Runner" review. GameRevolution, March 2003. B+. No customisation, frame-rate dips, camera. https://web.archive.org/web/20041025155755/http://game-revolution.com/games/ps2/action/zone_of_enders_second_runner.htm
- Michael Vreeland. "Zone of the Enders 2". GameSpy, 2003-03-22. 3/5. Situational sub-weapons, length, dub. https://web.archive.org/web/20150908001123/http://ps2.gamespy.com/playstation-2/zone-of-the-enders-the-2nd-runner/5717p1.html
- EGM Review Crew (reviewer names not shown in archive). "Zone of the Enders: The 2nd Runner". Electronic Gaming Monthly #164, 2003. 7.5, 9.0 and 8.5. Set pieces, length, dub; same page lists OPM 4.5/5 and GMR 8/10. https://web.archive.org/web/20040301150608/http://www.egmmag.com/article2/0,4364,1490347,00.asp
- Rob Fahey. "Zone of the Enders: The 2nd Runner review". Eurogamer, 2003-10-13. 8/10 (PAL Special Edition). Set pieces, five-hour clear, 50Hz PAL conversion. https://www.eurogamer.net/r-zoe2-ps2
- Justin Calvert. "ZOE: The 2nd Runner enhanced for Europe". GameSpot, 2003-03-24. European Special Edition additions. https://www.gamespot.com/articles/zoe-the-2nd-runner-enhanced-for-europe/1100-6023646/
- IGN PS2 staff. "Anubis Special Edition Details". IGN, 2003-11-17. Japanese Special Edition contents and date. https://web.archive.org/web/20130305083531/http://www.ign.com/articles/2003/11/17/anubis-special-edition-details
- Steve Watts. "Zone of the Enders HD includes 2nd Runner SE". Shacknews, 2012-02-23. Special Edition content arriving in North America via the HD Collection. https://www.shacknews.com/article/72576/zone-of-the-enders-hd-includes-2nd-runner-se
- John Linneman. "Zone of the Enders: how Konami remade its own HD remake". Digital Foundry, 2013-08-18. HD Collection frame rate, speed tied to frame rate, HexaDrive PS3 patch. https://www.digitalfoundry.net/articles/digitalfoundry-how-konami-remade-zoe-hd-remaster
- Justin Clark. "Zone Of The Enders: The 2nd Runner – MARS Review". GameSpot, 2018-09-14. 5/10. Later remaster reassessment, Pro controls. https://www.gamespot.com/reviews/zone-of-the-enders-the-2nd-runner-mars-review/1900-6416990/
- Valve/Konami. ZONE OF THE ENDERS THE 2nd RUNNER : M∀RS Steam store page. Release date, Konami/Cygames credit, 4K/VR. https://store.steampowered.com/app/650510/
- Metacritic. Zone of the Enders: The 2nd Runner (PS2). Aggregate 82. https://www.metacritic.com/game/zone-of-the-enders-the-2nd-runner
- PCSX2 project. GameIndex.yaml, entry SLUS-20545 (master, last file commit b3402c13, 2026-10-21; fetched 2026-10-24). Upstream desktop compatibility data only. https://github.com/PCSX2/pcsx2/blob/master/bin/resources/GameIndex.yaml
