Long before players saved replays, machines were playing themselves to strangers. Atari's manual for *Rebound*, from about 1974, describes an attract mode with nothing recorded at all. "The paddle controls are defeated by the ATTRACT signal," and the ball moves at random, so it "is seldom returned more than twice". The cabinet plays badly and waits.

Fifteen years later Atari Games gave operators of *Hard Drivin'* a setting called Steering During Attract Mode. The force-feedback wheel turned by itself while the simulator drove for nobody, and On was the recommended setting. The manual doesn't say whether that drive was a recording. A few pages earlier it describes a feature that was: in the "challenge" lap, "The simulator remembers the path of the car driven by the best driver on record."

## Twenty-one presses

The title-screen demo in *Super Mario Bros.* is a recording of that kind, and a short one. In the community disassembly of the game it is a table of 21 controller states with durations: Right for 155 frames, A for 16, Left for 24, and so on, ending with 255 frames of nothing pressed. Each entry is written into the same variable that holds player one's controller while the ordinary game engine runs. The demo is not a film of *Super Mario Bros.*; it is the game, with a stranger's hands on it. If Mario loses a life, the demo ends early, and pressing Start returns to the title screen rather than starting a game.

![The Super Mario Bros. title demo as stored in the game: 21 controller states with their durations, about 14 seconds of buttons and 4 of nothing. Original diagram by Sortie Field Notes from DemoActionData and DemoTimingData in doppelganger's SMBDIS.ASM disassembly; durations in NTSC frames.](media/smb-demo-strip.webp)

## Making the world hold still

A recording of buttons only works if everything else repeats, and the code shows designers making sure of it. The demo in NES *Tetris* draws its falling pieces from a fixed list rather than the random generator, because the right inputs for the wrong pieces would be nonsense. The European version of the cartridge carries a different recording: 462 of the 512 bytes in its demo table differ from the American one. Nothing documents why. The likeliest reason is that the European console runs at 50 frames a second instead of 60, so the old presses would no longer fit.

The other risk was a live hand. In the first release of *Sonic the Hedgehog* on the Mega Drive, the demo code still reads the real controller, so pressing A, B or C while the demo plays can disturb it. A revised version of the game clears that value and ignores the pad. Both games also still contain routines for recording a demo, unused in the finished code. They suggest the demos were made the plain way: someone played on development hardware and the game wrote the presses down.

The European *Super Mario Bros.* changes Mario's physics tables but, as far as the disassemblies show, keeps the same 21 presses. Whether its demo still walks the American route I could not establish from any source, and this magazine does not run games to find out.

What makes the attract demo unusual among replays is its purpose. Every other recording in this issue is kept to be believed. This one is kept to be interrupted: it plays to a room until a hand reaches the controls, and then it stops. A recording built to end when somebody arrives is the most honest replay in this issue.

## Sources

- Atari, Inc., *Rebound* Computer Service Manual, Bulletin 101-1 (c. 1974), page 1-3: "The paddle controls are defeated by the ATTRACT signal…"; "the ball is seldom returned more than twice". Internet Archive item ArcadeGameManualRebound, leaf n4. https://archive.org/details/ArcadeGameManualRebound/page/n4/mode/1up
- Atari Games, *Hard Drivin'* Operator's Manual TM-327, third printing, ©1989, page 1-5 (challenge lap, "remembers the path…", leaf n12) and page 2-5 (Table 2-3 and Steering During Attract Mode, leaf n17). Internet Archive item hard_drivin__tm-327_3rd_printing_ptm. https://archive.org/details/hard_drivin__tm-327_3rd_printing_ptm
- doppelganger, *SMBDIS.ASM: A Comprehensive Super Mario Bros. Disassembly*, GitHub gist 4048722, revision 59e88c0028a58c6d7b9156749230ccac647bc7d4: `DemoActionData`, `DemoTimingData`, `DemoEngine` writing to `SavedJoypad1Bits`, `RunDemo` (early exit on losing a life), `ChkContinue`. Decoding and frame totals by Field Notes (864 frames of input, then 255 idle). https://gist.github.com/1wErt3r/4048722
- Matthew Gilmore (segaloco), *Super Mario Bros. Meta-Disassembly*, GitLab, commit e986348cfc76c6feb17164870a73c7caedd24767: one demo table shared by the NES, Vs., Famicom Disk System and PAL builds; PAL-only player physics data in `data/player_phys.s`. https://gitlab.com/segaloco/smb
- CelestialAmber, *TetrisNESDisasm* (based on ejona86/taus), commit 94581c0306fa0009fe11fde48222875549d15b8b: demo recorder in `main.asm`, `demoTetriminoTypeTable` used in demo mode, separate PAL and NTSC `demoButtonsTable` in `data/demo_data.asm` (byte comparison by Field Notes). https://github.com/CelestialAmber/TetrisNESDisasm
- Sonic Retro, *s1disasm*, commit 89c0e0e06b51fd9ebac44d988e4a89bd643fd031, `_inc/MoveSonicInDemo.asm` (unused demo recorder; REV00 reads the controller, REV01 clears it). https://github.com/sonicretro/s1disasm ; FraGag, "SCHG How-to: Fix demo playback", Sonic Retro wiki ("possible to disrupt a demo by pressing A, B or C while it plays in Sonic 1 REV00"). https://info.sonicretro.org/SCHG_How-to:Fix_demo_playback
