import { writable, derived } from "svelte/store";
import { properties as propStats } from "$lib/data/properties.js";
import { weapons as weaponStats } from "$lib/data/weapons.js";
import { trinkets as trinkStats } from "$lib/data/trinkets.js";
import { servants as serveStats } from "$lib/data/servants.js";
import {
    bargaining, battleTactics, blazingFervour,
    doggedPerseverance,
    fervour,
    manaControl, materialism, muscleMemory, resilience,
    strength,
    zeal,
    zealousConviction
} from "$lib/data/skill_levels.js";

export let tent = writable(false);
export let woodenHut = writable(false);
export let cottage = writable(false);
export let house = writable(false);
export let largeHouse = writable(false);
export let smallPalace = writable(false);
export let grandPalace = writable(false);
export let townRuler = writable(false);
export let cityRuler = writable(false);
export let kingdomMinister = writable(false);
export let heaven = writable(false);
export let properties = [tent, woodenHut, cottage, house, largeHouse, smallPalace,
    grandPalace, townRuler, cityRuler, kingdomMinister, heaven];

export let coinPouch = writable(false);
export let woodenCrown = writable(false);
export let dumbbells = writable(false);
export let luckyCharm = writable(false);
export let soulboundLocket = writable(false);
export let pendulum = writable(false);
export let silverRing = writable(false);
export let ceremonyKnife = writable(false);
export let magicPebbles = writable(false);
export let shinyLamp = writable(false);
export let goldenHourglass = writable(false);
export let mysticSatchel = writable(false);
export let trinkets = [coinPouch, woodenCrown, dumbbells, luckyCharm, soulboundLocket, pendulum,
    silverRing, ceremonyKnife, magicPebbles, shinyLamp, goldenHourglass, mysticSatchel];

export let smallShield  = writable(false);
export let warPaint = writable(false);
export let shortBow = writable(false);
export let steelLongsword  = writable(false);
export let knightArmour = writable(false);
export let warHorse  = writable(false);
export let magicSword = writable(false);
export let weapons = [smallShield, warPaint, shortBow, steelLongsword, knightArmour, warHorse, magicSword];

export let squire = writable(false);
export let bookkeeper = writable(false);
export let butler = writable(false);
export let banker = writable(false);
export let seer = writable(false);
export let bodyguard = writable(false);
export let holyMan = writable(false);
export let smuggler = writable(false);
export let servant = [squire, bookkeeper, butler, banker, seer, bodyguard, holyMan, smuggler];

export let shopHappiness = derived([tent, woodenHut, cottage, house, largeHouse, smallPalace,
    grandPalace, townRuler, cityRuler, kingdomMinister, heaven, ceremonyKnife, butler],
    ([$tent, $woodenHut, $cottage, $house, $largeHouse, $smallPalace,
         $grandPalace, $townRuler, $cityRuler, $kingdomMinister, $heaven, $ceremonyKnife,
         $butler]) =>
        ($tent ? propStats[0].effectValue : 1 *
        $woodenHut ? propStats[1].effectValue : 1 *
        $cottage ? propStats[2].effectValue : 1 *
        $house ? propStats[3].effectValue : 1 *
        $largeHouse ? propStats[4].effectValue : 1 *
        $smallPalace ? propStats[5].effectValue : 1 *
        $grandPalace ? propStats[6].effectValue : 1 *
        $townRuler ? propStats[7].effectValue : 1 *
        $cityRuler ? propStats[8].effectValue : 1 *
        $kingdomMinister ? propStats[9].effectValue : 1 *
        $heaven ? propStats[10].effectValue : 1 *
        $ceremonyKnife ? trinkStats[7].effectValue : 1 *
        $butler ? serveStats[2].effectValue : 1));

export let shopIncome = derived([coinPouch, luckyCharm, bookkeeper],
    ([$coinPouch, $luckyCharm, $bookkeeper]) =>
        ($coinPouch ? trinkStats[0].effectValue : 1 *
        $luckyCharm ? trinkStats[3].effectValue : 1 *
        $bookkeeper ? serveStats[1].effectValue : 1));

export let shopAllPrices = derived([silverRing, shinyLamp, banker],
    ([$silverRing, $shinyLamp, $banker]) =>
        ($silverRing ? trinkStats[6].effectValue : 1 *
        $shinyLamp ? trinkStats[9].effectValue : 1 *
        $banker ? serveStats[3].effectValue : 1));

export let shopShopPrices = derived([woodenCrown, magicPebbles, magicSword, squire, holyMan],
    ([$woodenCrown, $magicPebbles, $magicSword, $squire, $holyMan]) =>
        ($woodenCrown ? trinkStats[1].effectValue : 1 *
        $magicPebbles ? trinkStats[8].effectValue : 1 *
        $magicSword  ? weaponStats[6].effectValue : 1 *
        $squire ? serveStats[0].effectValue : 1 *
        $holyMan ? serveStats[6].effectValue : 1));

export let atkPower = [strength];
export let greed = [materialism, blazingFervour];
export let atkDuration = [muscleMemory];
export let enAtkDuration = [battleTactics];
export let atkResistance = [resilience];
