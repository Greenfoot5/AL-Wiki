---
title: Version 1.3.0
release: "2025-01-17"
---

<script>
    import Callout from "$lib/components/Callout.svelte";
</script>
---
## New
- Guild chat has limited persistent history. This means it will remain visible even after the server restarts.
- Added Tier 3.5
  - Any new T3 drops will be part of this new T3.5
  - Gear's stats have been buffed
  - Confirmed new best stats for Legendary cloak will match Internal Tester's cloak.
- Changed how rarities work, it will now be more appropriate scaling between rarities
- Quests now reward Battle Points (BP)
- Guild Events reward BP
- Better rewards for BD added (2 legendary items on top chest - will be available from the next BD)
- Improved PC lighting
---

## Balance
<Callout variant="warning">
    Values are a change in the skill's numbers, not the values the skill uses (as that data isn't currently easily available)
</Callout>

#### Mage
- Fire Storm: `+10%` / `+20%` / `+30%` / `+40%` / `+50%` damage

#### Warlock
- Chaos Shower:  `+0%` / `+10%` / `+20%` / `+30%` / `+40%` damage

#### Priest
- Flash Heal: `-20%` / `-20%` / `-20%` / `-20%` / `-20%` heal
- Flash Heal: `+1` second cooldown
- Holy Explosion: `+10%` / `+10%` / `+15%` / `+15%` / `+20%` damage
- Holy Explosion: `+10%` / `+10%` / `+15%` / `+15%` / `+20%` heal

#### Assassin
- Thousand Cuts: `+10%` / `+20%` / `+30%` / `+40%` / `+50%` damage

#### Ranger
- Arrow Barrage: `+0%` / `+10%` / `+20%` / `+30%` / `+40%` damage

#### Paladin
- Sword of Heavens: now provides temporal buff that increases the effectiveness of aura
- Sword of Heavens: `+0%` / `+10%` / `+20%` / `+30%` / `+40%` damage

---

## Fixes
- Disappearing players in Arena 2 (village)
- Raid boss attack pattern differed depending on how the raid was loaded
- Changing stats display in forge deselecting the item
- Having Auto Battle on in Guild events no longer continue the fight if you reached the max stage
- Guild Events progress bars not showing correct values
- Upgraded item not correctly updated in other loadouts
- Primary skill not required for advanced version
- Upgrade damage not being applied to weapons
- Reconnect dialog not reconnecting
- Some UI elements for consistency
- PvP Title is awarded even on loss
- PvP matchmaking would sometimes priorotize PCs rather than creating a mercenary of your chosen class
- Fixed Ranger's skill "Rapid Shot, Greater", now it will fire the correct amount of rounds, faster
- Fixed Ranger's skill "Bouncing Shot" that would trigger a SFX bug
