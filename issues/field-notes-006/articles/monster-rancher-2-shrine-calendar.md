## Why this one belongs here

Most of this issue is about games where nobody tells you what to do next, and *Monster Rancher 2* is the friendliest of them. It looks like a pet game, but it plays like a budget. LegendCup's beginner guide says you're managing two things: gold and your monster's lifespan. Almost every choice spends one of them.

This article follows the North American PlayStation release (Tecmo, August 31, 1999, per IGN). It's *Monster Farm 2* in Japan. You never see yourself: your assistant Colt and her toucan Joy do the talking, and you choose from menus. Story scenes turn up when you reach a rank or win a cup. The rest is a calendar you fill.

![The North American PlayStation cover for Monster Rancher 2. © Koei Tecmo (Tecmo); via libretro-thumbnails.](media/monster-rancher-2-box.webp)

## The loop: a week at a time

Time moves in weeks. You choose one action, then watch it happen. GamesFirst disliked that in 1999. If you play in short bursts, it's ideal: every week is a natural place to stop.

**Drills** raise stats. LegendCup splits them into light drills (one stat, little stress or fatigue) and heavy drills (two stats up, one down, more strain). Stress and fatigue are hidden, and both eat lifespan. Drills also fail more as a stat climbs.

**Rest and food** pay that cost down. You set food monthly, breeds have tastes, and items are once a week. LegendCup names Mint Leaf for stress and Nuts Oil for fatigue.

**Errantry** sends your monster away for a month to learn techniques. IGN quoted a 2,000-gold fee, halved in discount months. LegendCup says leave on week 1, fresh, and expect a new baby to miss the stat minimums.

**Tournaments** pay money and stat bonuses, and four IMa Official Cups a year decide your rank. You can watch or steer. Each technique works at one range, so manual fighting is mostly about distance, with attacks spending Guts that refill during the bout. GamesFirst found steering more fun.

**Your reactions shape it.** Scold or ignore a cheat, praise or ignore a great result: LegendCup's tables show each choice moving hidden Fear, Spoil, Nature and stress. Loyalty, the balance of Fear and Spoil, affects obedience in a fight and learning. Then it ages. Colt's first retirement warning comes about a year out and her last at nine weeks. Freeze it at the Lab, or lose it for good. Electric Playground, in the excerpt Metacritic quotes, complained that a three-to-four-year life fits in one or two sittings. Seen another way, that's a complete arc in an evening.

## The shrine, on a disc and off it

The famous gimmick: at the Shrine you swap in any audio, game or PC CD, then the game disc again, and a monster hatches. GamesFirst mentioned the Beastie Boys' *Hello Nasty* producing a special one, and fans traded lists.

LegendCup's technical page explains it. The game reads only the disc's **table of contents**, the map of where the tracks start and stop. For this game, that means minutes and seconds from the second and last tracks. A few exact values are hard-coded to rare monsters. Everything else is looked up in tables of breed, sub-breed and stat offsets. That's why two pressings of one album could hatch different monsters. In 2020, fans reverse-engineered the values, and LegendCup built **Make-A-Monster**, which generates small disc-image pairs for any monster you choose.

The 2021 *Monster Rancher 1 & 2 DX* drops the drive. LegendCup says it searches an internal database of song and album titles instead, with a Randomize button. It's the easiest way to use the shrine today, though this article covers the PlayStation original.

## The shrine in emulation: what the sources say

- **Swapping discs has to hand the game a real table of contents.** A 2011 NGEmu forum thread about older ePSXe builds shows what happens when it doesn't: every disc the user tried hatched the same Gaboo.
- **LegendCup's Make-A-Monster page (Wayback Machine capture, May 2025)** lists DuckStation as supported. Its setup note is to turn off **Async Readahead** in console settings. On mobile, it says to use Change Disc to pick the `.bin`, then Change Disc again to pick the `.cue`, before you continue.
- **The same page says RetroArch can't do it reliably.** Beetle PSX HW reads only part of the table of contents and fixes the rest. PCSX ReARMed zeroes almost everything. SwanStation doesn't read the `.cue`, so every generated disc gives you a Pink Kato. A bug ticket was filed in September 2024.

In practice, that points to **standalone DuckStation** rather than the RetroArch cores, if you want the shrine. Without an optical drive, any "CD" has to be a disc image. This issue didn't check whether DuckStation passes the table of contents of compressed CHD images through correctly; the archived Make-A-Monster page offered cue/bin and ccd/img pairs, which avoid the question. **None of this was tested.** Romhacking.net lists a "Seasonal Shrine" hack that builds shrine monsters from the date and player name, but it was only seen in search results.

You don't need the shrine. LegendCup lists free Market monsters: Mocchi and Zuum all year, plus Suezo (spring), Arrowhead (summer), Hare (autumn) or Gaboo (winter).

![A Mocchi on the ranch during an event, with Colt's portrait beside the line "What is this?..." North American PlayStation screenshot © Koei Tecmo (Tecmo), from the libretro-thumbnails community snapshot set.](media/monster-rancher-2-new-arrival.webp)

## A first-session plan

- **Skip the first-week prompts.** LegendCup warns that Colt opens by pushing an Official Tournament and an Errantry sale, and a new baby should do neither. Stop at the item shop and start the conversation with Aunt Verde, then go back to the ranch.
- **Choose a forgiving monster.** LegendCup suggests a monster with good Nature, and warns new players off late bloomers like pure Ape or Kato. Suezo is on its "better" starter list, so take it if it's spring. Read the Monster Data screen before you commit.
- **Pick two stats and ignore the rest.** The guide's general advice is one attack stat (Power or Intelligence), one defensive stat, and Skill on the side. Drill what your monster learns quickly while it's young.
- **Take a rest when Colt mentions fatigue.** Decide whether to praise or scold based on what you want to happen, not out of habit.
- **Session goal:** get through the first few months and enter a low-grade tournament you can drive by hand. Save before you try the shrine.

## Fit and friction

**Fit.** Hidden variables, real trade-offs, permanent loss and a calendar that never stops: it's a systemic game wearing bright colours. LegendCup's tags even include "(proto)roguelike." Every week is a short decision, so it's easy to pick up for ten minutes and put down again.

**Friction.** The best mechanics are hidden. You can play it blind and it's fine, but breeding, rank and the unlockable monsters get much clearer with a guide open. GamesFirst's two biggest complaints were that the drill animations can't be skipped and that the stop-start rhythm keeps you at arm's length. IGN found monsters in the sequel sometimes too lazy to do anything without a firmer hand. The art is cute and mid-90s. Nothing here asks for fast reflexes.

## Controls: what's known, what isn't

These come from a long-standing GameFAQs walkthrough by KurasuSoratobu, describing the PlayStation pad. Out of combat: the D-pad moves through menus, × selects, △ cancels, □ opens info screens, and ○ asks Colt to explain the highlighted option. In battle: left and right on the D-pad move you closer or further away, × uses the attack for your current range, ○ cycles moves within that range, L1 and R1 scroll the attack list, △ pushes back when you're up close, and Select offers surrender. Everything maps onto a standard modern pad. **Not play-tested for this issue.**

## How it was received

The release-era press was warm. IGN's October 1999 review by Robin Loro and Douglass Perry scored it 8.8. It praised the monsters' animation and the new errantries, marked the graphics down to 6, and gave lasting appeal a 10. GameSpot's review, by Ben Stahl and dated September 27, 1999, is listed at 8.7 by both Wikipedia and Metacritic; GameSpot's own page couldn't be loaded for this issue. Shawn Rider's GamesFirst review (October 5, 1999) gave it 4 out of 5 and called it inventive but distant, and slow to win you over. Metacritic's average is 83 from six reviews. Its normalised entries also include Game Revolution at 75 ("repetitive") and Electric Playground at 60. Those are Metacritic's conversions, not necessarily each outlet's original scale.

## Sources

- LegendCup, "Monster Rancher 2 (+DX) Beginner's Guide & Walk-through." Gold and lifespan budgets, drills, stress and fatigue, errantry, Market monsters, first-week advice, retirement warnings and the 1&2 DX shrine search. Read via the Wayback Machine capture of October 13, 2026. https://legendcup.com/faqmr2walkthrough.php
- LegendCup, "How Monster Rancher generates monsters" (page last modified May 18, 2025). The table-of-contents mechanism, differences between pressings, the 2020 reverse engineering and Make-A-Monster. Read via the Wayback Machine capture of August 4, 2025. https://legendcup.com/faq-generate-monsters.php
- LegendCup, "MR2 Make-A-Monster." Supported programs, DuckStation's Async Readahead setting, the mobile disc-change order, and RetroArch core limitations. Read via the Wayback Machine capture of May 15, 2025. https://legendcup.com/make-a-monster-mr2.php
- black.joker and others, "Monster Rancher 2 shrine issue," NGEmu forums, March–July 2011. The same-monster symptom in old ePSXe builds. https://www.ngemu.com/threads/monster-rancher-2-shrine-issue.142025/
- Robin Loro and Douglass Perry, "Monster Rancher 2" review, IGN, October 7, 1999. 8.8/10, with release date and subscores. Read via the Wayback Machine capture of August 17, 2012. http://psx.ign.com/articles/161/161227p1.html
- Shawn Rider, "Monster Rancher 2," GamesFirst!, October 5, 1999. 4/5. https://gamesfirst.com/articles/1999/monster-rancher-2/
- Metacritic, "Monster Rancher 2" critic reviews (PlayStation). Metascore 83 from six reviews, with normalised outlet scores. https://www.metacritic.com/game/monster-rancher-2/critic-reviews/?platform=playstation
- Ben Stahl, "Monster Rancher 2 Review," GameSpot, September 27, 1999. 8.7 as cited by Wikipedia and Metacritic; the page itself blocked access. https://www.gamespot.com/reviews/monster-rancher-2-review/1900-2546013/
- Wikipedia, "Monster Rancher 2." Japanese title, Colt and Joy, menu-driven play, Official Cups and the rank structure. https://en.wikipedia.org/wiki/Monster_Rancher_2
- KurasuSoratobu, "Monster Rancher 2 Guide and Walkthrough," GameFAQs. Basic and battle controls. Read via the Wayback Machine capture of August 4, 2025. https://gamefaqs.gamespot.com/ps/197977-monster-rancher-2/faqs/41786
- Romhacking.net, "Monster Rancher 2 Seasonal Shrine" (hack 3482). Description seen in search results only. https://www.romhacking.net/hacks/3482
