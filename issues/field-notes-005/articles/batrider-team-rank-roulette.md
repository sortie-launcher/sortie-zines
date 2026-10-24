## Garegga's engine, with the choices up front

Field Notes 001 covered *Battle Garegga*, a shooter that taxes your success. *Armed Police Batrider* came from the same team two years later: Raizing developed it, Eighting published it in arcades in early 1998, and Shinobu Yagawa programmed it again. It shares Garegga's hidden rank and medal chains, but it's built differently. Garegga hides its decisions inside play. Batrider asks for many of them before the first stage starts: which three pilots fly, with which weapon tuning, and on which course.

That's why it fits this issue. The first stage starts at once over a Manhattan freeway full of gang cars, turrets and billboards you can wreck, and almost everything you choose and destroy decides which bosses appear later.

## Which set this article describes

Arcade games survive as region sets, and this article follows the US one, *batrideru*. MAME and the Arcade Database name it *Armed Police Batrider (USA) (Fri Feb 13 1998)*. They list it as English-language, two-player, an 8-way stick and three buttons. Its title screen, shown beside the boss in the lead image, reads "USE IN U.S.A. ONLY." In that same Arcade Database capture, the attract screen shows guest players and the special course as enabled. Other region sets and other emulator configurations may ship with different DIP-switch defaults; that wasn't checked for this issue.

The game had no home release until the 2022 *Sega Astro City Mini V*. According to the Shmups Wiki, that version renamed two tracks, possibly for copyright reasons. On October 10, 2026, M2 announced a re-release, as Gematsu reported, with no platforms or date given. Until that arrives, the arcade board (or its emulation) is the complete version.

![The Japanese arcade flyer. The headline credits Raizing, maker of the Mahou Daisakusen series, Battle Garegga and Soukyugurentai, and promises nine airbikes plus nine Raizing guests, "shooting's first team system" (pick three of eighteen) and beginner, intermediate and advanced courses. © Eighting / Raizing, via Arcade Database.](media/batrider-team-rank-roulette-flyer-jp.webp)

## Building a team

You pick three pilots, and each one is effectively a life. The nine standard Zero Cops come in three themed teams. The story casts them as police, convicts and psychics, but in play the differences are mechanical. A title-screen code unlocks nine guests from *Mahou Daisakusen* and *Battle Garegga*: Up, Up, Down, Down, Left, Right, Left, Right, A, B, then Start, entered after inserting a coin.

- **Shot type** sets the trajectory: Front, Wide, Search (homing), or Garegga for the guest ships.
- **Power type** sets bullet behaviour: Vulcan, Beam, Laser (piercing) or Napalm (explosive).
- **The button you select with sets the tuning.** According to the Shmups Wiki, A gives a strong main shot with a weak option and starts at 15 Hz autofire. B gives a strong option and a weak shot at 12 Hz. C (or A+B) strengthens both but makes the ship slower, at 20 Hz. Start gives speed with weak weapons at 10 Hz.
- **Each pilot's bomb is different.** D.D.'s gravity bomb detonates at a distance you set by holding and releasing B. Tag-T's razor blade can be thrown in a direction. Silver Sword's napalm fires opposite to the direction you're holding.

![The Select Player screen, showing the eighteen-ship roster with Tag-T's Grizzly VSE highlighted, its homing laser and Brutal Knife bomb listed. Arcade screenshot © Raizing / Eighting, via Arcade Database.](media/batrider-team-rank-roulette-select.webp)

## Rank, revisited

Batrider has a hidden rank value that adjusts difficulty, as Garegga does. The two community references describe it differently, so treat these details as guidance. The Shmups Wiki's technical notes, credited partly to players who built a MAME rank overlay, make three practical points:

- **Rank starts counting at character select.**
- **Extra credits add rank.** Practise with a single credit inserted. In an emulator, that means not tapping coin "just in case."
- **Extends cost rank.** Earning an extra life when your stock is already full adds about 12.9%, and less when you have fewer lives in stock. Score extends come every 1.5 million points. There are also secret extends: destroy the large blue hovercraft when it stops in the Highway tunnel, let three large bomb items fall off-screen, or let three extend items fall off-screen.

The wiki also warns that a freshly booted board starts at a very high rank unless you go into service mode and initialise it. **That advice wasn't tested for this issue**, and whether it applies depends on how your emulator stores the board's settings.

Nick Zverloff's Hardcore Gaming 101 retrospective adds that grazing, letting bullets pass through your sprite without touching your hitbox, lowers rank and earns points. That makes risk a tool for controlling difficulty. Medal chains are back as well. Zverloff notes that the announcer shouts "No!" when you miss the largest medal.

## The hidden-boss layer

The Shmups Wiki lists the conditions for each extra boss. A few examples:

- **Manhattan City:** destroy the car showroom *before* the billboards in front of it, with a *Mahou Daisakusen* pilot still alive, and Bashinet Mk II appears later. Birds fly out of the rubble and the announcer says "wonderful!" when you've done it right.
- **Highway:** a team with three different shot types triggers the ninja Tsumujimaru, and one with mixed power types triggers Hayatemaru. Both also need a living *Mahou* pilot.
- **Highway's end boss depends on your route.** The order you play Sky High, the Airport and the Sewage System decides which bosses meet you at the end of Highway. Collect "special level ups" and more of them appear.
- **Special level ups.** Let three shot items (or three option items) fall off the bottom, then catch the next one, and that weapon jumps straight to maximum. The wiki warns that doing this early adds bosses at the end of stage 5.

So your earlier choices change what you have to fight.

## Courses, and which to start on

According to Wikipedia and the Shmups Wiki, the game offers four courses. **Training** is three stages, and the game spends a bomb automatically when you would be hit. The Shmups Wiki says grazing a bullet in Training also triggers that auto-bomb. **Normal** is five stages, with the three middle stages in random order unless Stage Edit is on. **Advanced** is seven stages, adds Zenovia City and the Building, and has more secret bosses. **Special** is a boss rush using the Advanced bosses.

## A first-session plan

- **Insert one credit.** Play Training once to see the stage shapes.
- **Normal course, the guest-free Police team of D.D., Shorty and Jyuji, selected with A.** That gives three shot types and three power types. By the wiki's rules, that's half of what summons the Highway ninjas. The other half is a living *Mahou* pilot, so this team makes a clean baseline run.
- **Learn the fire controls before worrying about bosses.** Tap A at the rate you want and the game sets autofire to match. Hold Start and tap A or C to raise or lower that rate. Stop firing and your ship charges an aura that damages enemies at close range. Press A while it's charged to release a stronger attack. B is the bomb. C changes formation for the Garegga guests only.
- **Fix bullet visibility.** Fan reviewers on SHMUPS! complained that enemy fire blends into the dark palette. The Shmups Wiki lists in-game commands to recolour each bullet class: hold Start and tap Right, Down or Left. Try a high-contrast colour early.
- **Second run:** go after Manhattan's showroom trigger with a guest-enabled team that includes a *Mahou* pilot.

## Fit and friction

**Fit.** A Normal run is short, and almost everything you do on the way affects what comes later: team, tuning, route, what you destroy and what you let fall. For a player who likes systemic games, the hidden-boss conditions turn repeat runs into experiments.

**Friction.** It's a vertical game, so on a landscape screen it will be pillarboxed unless you rotate it. The muddy palette makes dense moments hard to read, and rank is invisible. Feeding coins in an emulator raises rank, according to the wiki. The secrets are a lot to learn, so note two or three triggers rather than trying to learn the whole list.

## Controls and emulation: what's known and what isn't

The Arcade Database documents *batrideru* as a MAME set. The game uses three buttons, and C needs to be mapped for the Garegga guests. The Shmups Wiki notes that some revisions don't have a C button, but the Arcade Database lists three for the USA set. **Nothing here was play-tested for this issue:** emulator choice, screen rotation, input lag, DIP switches and service-mode access are all unverified. Map coin and start separately from fire, so you don't add credits, and rank, by accident.

## How it landed

The contemporary record we found is thin, and it's commercial rather than critical. *Game Machine*'s March 15, 1998 issue (No. 560, page 21) placed "Batrider (Eighting/Raizing)" sixth on its video-game software chart. It was a new entry that issue, with an operator rating of 5.89, ahead of Psikyo's *Strikers 1945 II* in ninth. **We didn't find a release-era English-language press review, and Japanese magazine reviews such as Gamest weren't available to us.**

Later fan and retrospective writing exists. On the long-running SHMUPS! site, Michael Miller called it "quite possibly the single craziest example of a manic shooter," while a second reviewer, "Felix," liked it but said the "dreary" palette hides shots. Nick Zverloff's Hardcore Gaming 101 piece calls it a fantastic game that offers "something for the inexperienced and the hardcore alike," though he rates its visuals and music below Raizing's best.

## Sources

- "Armed Police Batrider," Shmups Wiki (revision 37915, edited May 11, 2026). Controls, ship tuning, characters, rank notes, secret extends, hidden-boss conditions, Training note, Astro City Mini V track changes. https://shmups.wiki/library/Armed_Police_Batrider
- Arcade Database, *Armed Police Batrider (USA) (Fri Feb 13 1998)*, romset batrideru. Set name, inputs and the in-game, select and title captures used here. https://adb.arcadeitalia.net/?mame=batrideru
- *Game Machine* No. 560, March 15, 1998, page 21, "Game Machine's Best Hit Games 25." Read from the archive scan at onitama.tv. https://onitama.tv/gamemachine/pdf/19980315p.pdf
- Sal Romano, "M2 announces Armed Police Batrider re-release," Gematsu, October 10, 2026. https://www.gematsu.com/2026/10/m2-announces-armed-police-batrider-re-release
- Nick Zverloff, "Armed Police Batrider," Hardcore Gaming 101 (retrospective; read via a February 2023 Wayback Machine copy). https://web.archive.org/web/2022/https://www.hardcoregaming101.net/armed-police-batrider/
- Michael Miller and "Felix," "Armed Police Batrider," SHMUPS! (fan review, undated; site active 1997–2007). http://www.shmups.com/reviews/batrider/index.html
- "Armed Police Batrider," Wikipedia (accessed October 24, 2026). Course structure and Astro City Mini V release. https://en.wikipedia.org/wiki/Armed_Police_Batrider
- Images: arcade captures and the Japanese promotional flyer via Arcade Database. © Raizing / Eighting.
