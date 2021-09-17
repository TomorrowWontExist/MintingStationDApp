const fs = require("fs");
const width = 750; // Change to the resolution you want
const height = 1200;
const dir = __dirname;
const description = "This NFT is part of The Bee Collaborative Collection | Save the Bees with NFTs!";
const baseImageUri = "https://gateway.ipfs.io/ipns/k51qzi5uqu5dhl0enp0dupzorbyhsmsdj1aewjbghr0se5kb1w1s65dof038g5";
const startEditionFrom = 1; // Can start edition at whatever you want // start at 1
const endEditionAt = 10; // endEditionAt and edtionSize MUST be the SAME // start at 10 for testing purposes
const editionSize = 10; // this will print 100 copies : (use if you already have a 10k 1 1st edition) // erase the 100
const raceWeights = [
  {
    value: "TweeTheBee", // Change to whatever you want
    from: 1,
    to: editionSize,
  },
];

const races = {
  TweeTheBee: { // Must bee the same as value on line 12 | ALL CAPITALIZATIONS MATTER
    name: "TweeTheBee", // Make same as above
    layers: [
      {
        name: "Background",
        elements: [
          { 
            id: 0,
            name: "Astronaut",
            path: `${dir}/1-background/astronaut.png`, // 1-backround = folder name/image name
            weight: 100, // 16%   Every gap in numbers is = to % of rarity chance
          },
          {
            id: 1,
            name: "Blue Spiral",
            path: `${dir}/1-background/bluespiral.png`,
            weight: 84, // 16%    
          },
          {
            id: 2,
            name: "Lightening",
            path: `${dir}/1-background/lightening_r.png`,
            weight: 68, // 17%  --  68 + 17% = 84 Weight of the next one up
          },
          {
            id: 3,
            name: "Dancefloor",
            path: `${dir}/1-background/dancefloor_r.png`,
            weight: 51, //17%
          },
          {
            id: 4,
            name: "Acryllica",
            path: `${dir}/1-background/acryllica.png`,
            weight: 34, // 17%
          },
          {
            id: 5,
            name: "BadAcid",
            path: `${dir}/1-background/badacid.png`,
            weight: 17, // 17%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Extra",
        elements: [
          {
            id: 0,
            name: "none",
            path: `${dir}/2-extra/none.png`,
            weight: 100, // 10%
          },
          {
            id: 1,
            name: "Spooky",
            path: `${dir}/2-extra/spooky_ur.png`,
            weight: 90, // 15%
          },
          {
            id: 2,
            name: "Devil Tail",
            path: `${dir}/2-extra/devil tail_ur.png`,
            weight: 75, // 15%
          },
          {
            id: 3,
            name: "Polaroids",
            path: `${dir}/2-extra/polaroids_ur.png`,
            weight: 60, // 15%
          },
          {
            id: 4,
            name: "Dinosaurs",
            path: `${dir}/2-extra/dinosaurs_ur.png`,
            weight: 45, // 15%
          },
          {
            id: 5,
            name: "Christmas Lights",
            path: `${dir}/2-extra/christmas lights.png`,
            weight: 30, // 15%
          },
          {
            id: 5,
            name: "Blue Explosion",
            path: `${dir}/2-extra/blue explosions_r.png`,
            weight: 15, // 15%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Character",
        elements: [
          {
            id: 0,
            name: "TweeTheBee",
            path: `${dir}/3-character/TweeTheBee.png`,
            weight: 100, // 30%
          },
          {
            id: 1,
            name: "Twee Blue Wings",
            path: `${dir}/3-character/Twee Blue Wings.png`,
            weight: 70, // 15%
          },
          {
            id: 2,
            name: "Twee Pink Wings",
            path: `${dir}/3-character/Twee Pink Wings_r.png`,
            weight: 55, // 15%
          },
          {
            id: 3,
            name: "Twee Purple Wings",
            path: `${dir}/3-character/Twee Purple Wings_r.png`,
            weight: 40, // 15%
          },
          {
            id: 4,
            name: "Twee Green Wings",
            path: `${dir}/3-character/Twee Green Wings.png`,
            weight: 25, // 15%
          },
          {
            id: 5,
            name: "Twee Black Wings",
            path: `${dir}/3-character/Twee Black Wings_ur.png`,
            weight: 10, // 7%
          },
          {
            id: 6,
            name: "Twee Rainbow Wings",
            path: `${dir}/3-character/Twee Rainbow Wings_ur.png`,
            weight: 3, // 3%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Prop",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/4-prop/none.png`,
            weight: 100, // 31%
          },
          {
            id: 1,
            name: "Viking Warhammer Stein",
            path: `${dir}/4-prop/viking warhammer stein_ur.png`,
            weight: 69, // 1%
          },
          {
            id: 2,
            name: "Fire Axe",
            path: `${dir}/4-prop/axe_r.png`,
            weight: 68, // 1%
          },
          {
            id: 3,
            name: "War Axe",
            path: `${dir}/4-prop/waraxe_r.png`,
            weight: 67,
          },
          {
            id: 4,
            name: "Wine Glass",
            path: `${dir}/4-prop/wineglass_r.png`,
            weight: 66,
          },
          {
            id: 5,
            name: "Vodka",
            path: `${dir}/4-prop/vodka_r.png`,
            weight: 65,
          },
          {
            id: 6,
            name: "Sword",
            path: `${dir}/4-prop/sword_r.png`,
            weight: 64,
          },
          {
            id: 7,
            name: "Surfboard",
            path: `${dir}/4-prop/surfboard_r.png`,
            weight: 63,
          },
          {
            id: 8,
            name: "Sunburst Electric Guitar",
            path: `${dir}/4-prop/sunburst electric guitar_ur.png`,
            weight: 62,
          },
          {
            id: 9,
            name: "St.Patricks Beer",
            path: `${dir}/4-prop/st.patricks beer_r.png`,
            weight: 61,
          },
          {
            id: 10,
            name: "Snowboard",
            path: `${dir}/4-prop/snowboard_r.png`,
            weight: 60,
          },
          {
            id: 11,
            name: "Scepter",
            path: `${dir}/4-prop/scepter_r.png`,
            weight: 59,
          },
          {
            id: 12,
            name: "Portal Gun",
            path: `${dir}/4-prop/portal gun_r.png`,
            weight: 58,
          },
          {
            id: 13,
            name: "Pink Cuffs",
            path: `${dir}/4-prop/pink cuffs_r.png`,
            weight: 57,
          },
          {
            id: 14,
            name: "Moon Wand",
            path: `${dir}/4-prop/moon wand_r.png`,
            weight: 56,
          },
          {
            id: 15,
            name: "Money Wad",
            path: `${dir}/4-prop/moneywad_ur.png`,
            weight: 55,
          },
          {
            id: 16,
            name: "Mixed Drink",
            path: `${dir}/4-prop/mixed drink_r.png`,
            weight: 54,
          },
          {
            id: 17,
            name: "Electric Guitar",
            path: `${dir}/4-prop/greenelectric guitar_r.png`,
            weight: 53,
          },
          {
            id: 18,
            name: "Drumsticks",
            path: `${dir}/4-prop/drumsticks_r.png`,
            weight: 52,
          },
          {
            id: 19,
            name: "Devil's Pitchfork",
            path: `${dir}/4-prop/devils pitchfork_ur.png`,
            weight: 51,
          },
          {
            id: 20,
            name: "Xbox Controller",
            path: `${dir}/4-prop/controller_r.png`,
            weight: 5,
          },
          {
            id: 21,
            name: "Champagne",
            path: `${dir}/4-prop/champagne_r.png`,
            weight: 49,
          },
          {
            id: 22,
            name: "Briefcase",
            path: `${dir}/4-prop/briefcase_r.png`,
            weight: 48,
          },
          {
            id: 23,
            name: "Bong",
            path: `${dir}/4-prop/bong_ur.png`,
            weight: 47,
          },
          {
            id: 24,
            name: "Beer",
            path: `${dir}/4-prop/beer_r.png`,
            weight: 46,
          },
          {
            id: 25,
            name: "Skateboard",
            path: `${dir}/4-prop/skateboard_r.png`,
            weight: 45,
          },
          {
            id: 26,
            name: "Witchs Broom",
            path: `${dir}/4-prop/witchsbroom.png`,
            weight: 44,
          },
          {
            id: 27,
            name: "Tennis",
            path: `${dir}/4-prop/tennis.png`,
            weight: 43,
          },
          {
            id: 28,
            name: "Taco",
            path: `${dir}/4-prop/taco.png`,
            weight: 42,
          },
          {
            id: 29,
            name: "Syringe",
            path: `${dir}/4-prop/syringe.png`,
            weight: 41,
          },
          {
            id: 30,
            name: "Icecream",
            path: `${dir}/4-prop/strawberry icecream.png`,
            weight: 40,
          },
          {
            id: 31,
            name: "Squirt Gun",
            path: `${dir}/4-prop/squirt gun.png`,
            weight: 39,
          },
          {
            id: 32,
            name: "Soda",
            path: `${dir}/4-prop/soda.png`,
            weight: 38,
          },
          {
            id: 33,
            name: "Soccer Ball",
            path: `${dir}/4-prop/soccer ball.png`,
            weight: 37,
          },
          {
            id: 34,
            name: "Sketch Book",
            path: `${dir}/4-prop/sketchbook.png`,
            weight: 36,
          },
          {
            id: 35,
            name: "Rose",
            path: `${dir}/4-prop/rose.png`,
            weight: 35,
          },
          {
            id: 36,
            name: "Pizza",
            path: `${dir}/4-prop/pizza.png`,
            weight: 34,
          },
          {
            id: 37,
            name: "Painter",
            path: `${dir}/4-prop/painter.png`,
            weight: 33,
          },
          {
            id: 38,
            name: "None",
            path: `${dir}/4-prop/none.png`,
            weight: 32,
          },
          {
            id: 39,
            name: "Moneybag",
            path: `${dir}/4-prop/moneybag.png`,
            weight: 31,
          },
          {
            id: 40,
            name: "Martini",
            path: `${dir}/4-prop/martini.png`,
            weight: 30,
          },
          {
            id: 41,
            name: "Magical Wand",
            path: `${dir}/4-prop/magical wand.png`,
            weight: 29,
          },
          {
            id: 42,
            name: "Knife",
            path: `${dir}/4-prop/knife.png`,
            weight: 28,
          },
          {
            id: 43,
            name: "Judge Gavel",
            path: `${dir}/4-prop/judge gavel.png`,
            weight: 27,
          },
          {
            id: 44,
            name: "Iced Tea",
            path: `${dir}/4-prop/iced tea.png`,
            weight: 26,
          },
          {
            id: 45,
            name: "Iced Coffee",
            path: `${dir}/4-prop/iced coffee.png`,
            weight: 25,
          },
          {
            id: 46,
            name: "Hotdog",
            path: `${dir}/4-prop/hotdog.png`,
            weight: 24,
          },
          {
            id: 47,
            name: "Honeypot",
            path: `${dir}/4-prop/honeypot.png`,
            weight: 23,
          },
          {
            id: 48,
            name: "Hamburger",
            path: `${dir}/4-prop/hamburger.png`,
            weight: 22,
          },
          {
            id: 49,
            name: "Grenade",
            path: `${dir}/4-prop/grenade.png`,
            weight: 21,
          },
          {
            id: 50,
            name: "Frappe",
            path: `${dir}/4-prop/frappe.png`,
            weight: 20,
          },
          {
            id: 51,
            name: "Football",
            path: `${dir}/4-prop/football.png`,
            weight: 19,
          },
          {
            id: 52,
            name: "Fishing Pole",
            path: `${dir}/4-prop/fishingpole.png`,
            weight: 18,
          },
          {
            id: 53,
            name: "Explosive",
            path: `${dir}/4-prop/explosive.png`,
            weight: 17,
          },
          {
            id: 54,
            name: "Donut",
            path: `${dir}/4-prop/donut.png`,
            weight: 16,
          },
          {
            id: 55,
            name: "Controller",
            path: `${dir}/4-prop/controller blue.png`,
            weight: 15,
          },
          {
            id: 56,
            name: "Coffee",
            path: `${dir}/4-prop/coffee.png`,
            weight: 14,
          },
          {
            id: 57,
            name: "Coffee Cup",
            path: `${dir}/4-prop/coffee cup.png`,
            weight: 13,
          },
          {
            id: 58,
            name: "Chocolate Icecream",
            path: `${dir}/4-prop/chocolate swirl icecream.png`,
            weight: 12,
          },
          {
            id: 59,
            name: "Chainsaw",
            path: `${dir}/4-prop/chainsaw.png`,
            weight: 11,
          },
          {
            id: 60,
            name: "Camera",
            path: `${dir}/4-prop/camera.png`,
            weight: 10,
          },
          {
            id: 61,
            name: "Boombox",
            path: `${dir}/4-prop/boombox.png`,
            weight: 9,
          },
          {
            id: 62,
            name: "Bomb",
            path: `${dir}/4-prop/bomb.png`,
            weight: 8,
          },
          {
            id: 63,
            name: "Boba Tea",
            path: `${dir}/4-prop/boba tea.png`,
            weight: 7,
          },
          {
            id: 64,
            name: "BasketBall",
            path: `${dir}/4-prop/basketball.png`,
            weight: 6,
          },
          {
            id: 65,
            name: "Baseball Bat",
            path: `${dir}/4-prop/baseball bat.png`,
            weight: 5,
          },
          {
            id: 66,
            name: "Acoustic Guitar Blue",
            path: `${dir}/4-prop/blue acoustic guitar_r.png`,
            weight: 4, // 1%
          },
          {
            id: 67,
            name: "Electric Bass",
            path: `${dir}/4-prop/electric bass guitar_r.png`,
            weight: 3, // 1.5%
          },
          {
            id: 68,
            name: "Acoustic Guitar",
            path: `${dir}/4-prop/acoustic guitar.png`,
            weight: 1.5, // 1.5%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Expression",
        elements: [
          {
            id: 0,
            name: "Smile",
            path: `${dir}/5-expression/smile.png`,
            weight: 100, // 20%
          },
          {
            id: 1,
            name: "Surprised",
            path: `${dir}/5-expression/surprised.png`,
            weight: 80, // 12%
          },
          {
            id: 2,
            name: "Shocked",
            path: `${dir}/5-expression/shocked_r.png`,
            weight: 68, // 14%
          },
          {
            id: 3,
            name: "Indifferent",
            path: `${dir}/5-expression/neutral.png`,
            weight: 54, // 15%
          },
          {
            id: 4,
            name: "Laugh",
            path: `${dir}/5-expression/laugh_r.png`,
            weight: 39, // 14%
          },
          {
            id: 5,
            name: "Gasp",
            path: `${dir}/5-expression/gasp_r.png`,
            weight: 25, // 13%
          },
          {
            id: 6,
            name: "Biting Lip",
            path: `${dir}/5-expression/biting lip.png`,
            weight: 12, // 7%
          },
          {
            id: 7,
            name: "Fangs",
            path: `${dir}/5-expression/fangs_ur.png`,
            weight: 5, // 5%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Face",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/6-face/none.png`,
            weight: 100, // 20%
          },
          {
            id: 1,
            name: "Bloody Swipe",
            path: `${dir}/6-face/bloody swipe_r.png`,
            weight: 80, // 15%
          },
          {
            id: 2,
            name: "Covid Mask",
            path: `${dir}/6-face/facemask_r.png`,
            weight: 65, // 15%
          },
          {
            id: 3,
            name: "Flame Scar",
            path: `${dir}/6-face/flame scar_ur.png`,
            weight: 50, // 15%
          },
          {
            id: 4,
            name: "Gas Mask",
            path: `${dir}/6-face/gasmask_r.png`,
            weight: 35, // 15%
          },
          {
            id: 5,
            name: "Mustache Italiano",
            path: `${dir}/6-face/mustache italiano_r.png`,
            weight: 20, // 10%
          },
          {
            id: 6,
            name: "Werewolf Swipe",
            path: `${dir}/6-face/werewolf swipe_ur.png`,
            weight: 10, // 10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyewear",
        elements: [
          {
            id: 0,
            name: "None",
            path: `${dir}/7-eyewear/none.png`,
            weight: 100, // 20%
          },
          {
            id: 1,
            name: "Monocle",
            path: `${dir}/7-eyewear/monocle_ur.png`,
            weight: 80, // 15%
          },
          {
            id: 2,
            name: "Bleeding Eyes",
            path: `${dir}/7-eyewear/bleeding eyes_ur.png`,
            weight: 65, // 15%
          },
          {
            id: 3,
            name: "Pirate Patch",
            path: `${dir}/7-eyewear/pirate patch_r.png`,
            weight: 50, // 15%
          },
          {
            id: 4,
            name: "Ski Goggles",
            path: `${dir}/7-eyewear/ski goggles_r.png`,
            weight: 35, // 15%
          },
          {
            id: 5,
            name: "Sunglasses Vacation",
            path: `${dir}/7-eyewear/sunglasses vacation_r.png`,
            weight: 20, // 15%
          },
          {
            id: 6,
            name: "Sasuke Eye",
            path: `${dir}/7-eyewear/sasuke eye_ur.png`,
            weight: 5, // 5%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headpiece",
        elements: [
          {
            id: 0,
            name: "Antennas",
            path: `${dir}/8-headpiece/antenna.png`,
            weight: 100, // 25%
          },
          {
            id: 1,
            name: "Witch Hat",
            path: `${dir}/8-headpiece/witchhat.png`,
            weight: 75, // 20%
          },
          {
            id: 2,
            name: "Dog Filter",
            path: `${dir}/8-headpiece/dog filter_r.png`,
            weight: 55, // 15%
          },
          {
            id: 3,
            name: "Pirate Hat",
            path: `${dir}/8-headpiece/pirate hat_r.png`,
            weight: 40, // 15%
          },
          {
            id: 4,
            name: "Crown of Thorns",
            path: `${dir}/8-headpiece/crown of thorns.png`,
            weight: 25, // 15%
          },
          {
            id: 5,
            name: "Steampunk Hat",
            path: `${dir}/8-headpiece/steampunk hat_r.png`,
            weight: 10, // 10%
          },          
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
