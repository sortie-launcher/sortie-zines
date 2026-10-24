## Why this one belongs here

*Culdcept* is usually described as Monopoly plus Magic: The Gathering. That's accurate, and it's still the least interesting way to describe it. What makes it fit this issue is that the board is an economy. You build a deck of creature, item and spell cards. You roll dice to move around a looping map. You plant creatures on squares to claim them, and from then on, rivals who land there pay you. The longer a match runs, the more it becomes a contest over who invested better and who can hold onto their investments.

The edition covered here is the North American PlayStation 2 release. Omiya Soft developed it, and NEC Interchannel published it in December 2003 (Wikipedia; GameSpot's database gives December 4). It isn't the first *Culdcept*. It's the English version of *Culdcept II Expansion*, the 2002 PS2 upgrade of the Dreamcast sequel, which Wikipedia says was sold in North America simply as *Culdcept*. Greg Kasavin's GameSpot review pointed out that it was the first game in the series ever translated into English.

![The North American PS2 cover for Culdcept, published by NEC Interchannel. © Omiya Soft / NEC Interchannel; via libretro-thumbnails.](media/culdcept-box.webp)

## How a turn works

The US manual lays out the sequence. At the start of your turn you draw from your **book**, which is the game's name for a deck. A book is exactly 50 cards. You can hold six cards, so drawing a seventh forces a discard. When your book runs out, it reshuffles. You may cast a spell before you roll, then you roll and move.

What happens next depends on where you stop:

- **An empty square:** you can summon a creature there, paying its magic cost, and the square becomes yours.
- **A rival's square:** you either pay the toll or invade by sending one of your creatures, optionally with an item, against theirs. IGN's Jeremy Dunham stressed that you have no control once the fight starts. Strength, HP, abilities and items settle it. Win, and you take the land.
- **A fort or the castle:** these are the map's checkpoints. Pass all of them and get back to the castle, and you collect a lap bonus. The manual adds that all your creatures on the map recover 20% of their maximum HP when you do.

You win by reaching the map's target **total magic** and getting back to the castle, as GameSpot puts it. Total magic isn't your cash. The manual defines it as the magic you're holding plus the value of the land you own plus the value of your **symbols**, which are covered below. That definition is the whole strategy. Cash in hand is just one of three places your worth can sit.

## Where the systems hide

**Element matching.** Each creature and each square has an element. Place a creature on a square of its own element and it gets a land bonus. The manual gives the formula as extra HP equal to ten times the land's level. A cheap creature in its own element on developed land can be very hard to remove.

**Chains.** Own several squares of the same element and their value and tolls go up together. The manual calls this a land chain. Its "Techniques to Winning" page has a table showing both value and toll rising with every link you add, and rising again as each land gains levels.

**Symbols.** At a shrine square, you can spend magic on an area's elemental symbols. Their value follows the value of the land in that area. In effect it's a stock market. If you buy into the area where you're about to develop land, your stake goes up. If a rival is developing an area, buying into it means you profit from their growth.

None of this is subtle once you see it. What makes it tense is the dice. You can't choose where you land, so you're always playing against probability. Holding the right card for the square you'll probably reach is the actual skill.

![A developed board from Culdcept on PS2: creature sprites guard element-coloured squares, and toll values climb from double digits into the hundreds and thousands. Low-resolution screenshot © Omiya Soft / NEC Interchannel, hosted on English Wikipedia.](media/culdcept-toll-board.webp)

## Length, luck, and the Suspend command

Be realistic about match length. Kasavin wrote that matches "can easily wear on for more than an hour". He also found the card-name announcements and the AI's habit of working the interface like a human player wearing over long sessions, especially in four-player matches near the end. Bad draws and bad rolls will sometimes ruin a match you were playing well. GameSpot and GameSpy both make the point that you earn new cards whether you win or lose, which takes the sting out of quitting while behind.

If you can only play in short sittings, this is the most useful thing in the manual: **Story mode has a Suspend command.** You can use it on your turn from the command screen, before you roll or cast. It saves the match in progress to the memory card and quits. To get back, go to Load → Story → Continue from suspended data. The manual warns that choosing plain Continue after suspending throws the suspended match away and sends you back to the world map. Suspend works only in Story mode, not Versus. Emulator save states could do the same job, but they weren't tested with this game for this issue, and an in-game save is the safer habit.

## A first-session plan

- **Play the opening Story lessons as they come.** GameSpot found the early scenarios a reasonable way to learn. The whole printed manual is also available inside the game at any time, which IGN noted.
- **Learn one combination thoroughly.** On your first maps, look for creatures that match a common land element. Stack a few on neighbouring squares of that element, and level them up whenever you land on a fort.
- **Read every toll before you invade.** Land Info shows value, toll and level. If a fight looks bad, just pay.
- **Edit the book between scenarios.** GameSpot's advice is to build mostly creatures across several elements, then add items and spells. Add the cards you've won, one change at a time.
- **Suspend at a clean point**, at the start of your turn before you roll, whenever you need to stop.

## Fit and friction

**Fit.** It's a system you can exploit. Element bonuses, chain maths, fort timing and symbol investment reward planning ahead, and the board shows nearly everything you need to calculate. It works with two hands and no reflexes, and Suspend makes long matches survivable.

**Friction.** There's a lot of luck. Matches are long. The story is thin, told in Goligan's talking-cane dialogue. GameSpy's Christian Nutt called the translation "a non-native English speaker special" and said some card descriptions come out jumbled, though using a card once usually explains it. The board graphics are plain 2D sprites: IGN called them dated, but loved the card paintings.

## Controls and emulation

From the US manual's control page: up and down on the D-pad switch between spell, dice and command modes. Left and right choose cards and commands. × confirms, and also stops the dice. □ shows your cards, △ shows the map, R1 shows information, and Select opens help. It's entirely menu-driven, so any pad works.

The PCSX2 wiki (August 2025 capture) classes it as Playable. Its only Windows test, from 2013, says it runs at 200% speed, which says little about lower-powered hardware such as Android handhelds. **Nothing here was play-tested for this issue.** You lose nothing offline: IGN's main criticism was that the game has no online play to begin with.

## How it was received

Reviewers liked it, with reservations. Jeremy Dunham's IGN review (December 5, 2003) gave it 8.7 and an Editors' Choice. He called it "incredibly fun, deceptively deep, and always entertaining", praised the card art and Kenji Ito's score, and criticised the lack of online play and its 28 maps. Greg Kasavin's GameSpot review (December 15, 2003) gave 7.9, called it surprisingly fun and addictive, and complained about the pace and the luck. Christian Nutt's GameSpy review, reposted by the fan site Culdcept Central without its original date, gave it 4/5 and described being hooked within the first hour. Wikipedia reports Famitsu scores of 37/40 for the Dreamcast *Culdcept II* and 35/40 for the PS2 Expansion. The PCSX2 wiki lists a Metacritic score of 78. The Metacritic page itself returned an error when I tried it, so I couldn't confirm that figure.

## Sources

- NEC Interchannel, *Culdcept* PS2 instruction manual (SLUS-20774). Book rules, hand size, turn sequence, land effect, chains, levelling up, forts, lap bonus, symbols, the Suspend command and controls. Scan by an archive.org uploader. https://archive.org/details/culdcept-ps2-hiresscans
- Jeremy Dunham, "Culdcept," IGN, December 5, 2003. 8.7, Editors' Choice. Read via the Wayback Machine capture of October 3, 2025. https://www.ign.com/articles/2003/12/05/culdcept
- Greg Kasavin, "Culdcept Review," GameSpot, December 15, 2003. 7.9. Read via the Wayback Machine capture of March 11, 2015. https://www.gamespot.com/reviews/culdcept-review/1900-6085672/
- Christian Nutt, GameSpy review (4/5), reposted by Culdcept Central on July 24, 2009; original date not shown. http://culdceptcentral.com/culdcept-ps2dc/culdcept-ps2dc-reviews/126-cps2-reviews-gamespy
- Wikipedia, "Culdcept (2001 video game)." Expansion lineage, North American release, Famitsu scores. https://en.wikipedia.org/wiki/Culdcept_(2001_video_game)
- PCSX2 Wiki, "Culdcept." Playable status, the 2013 test note and the listed Metacritic score. Read via the Wayback Machine capture of August 20, 2025. https://wiki.pcsx2.net/Culdcept
