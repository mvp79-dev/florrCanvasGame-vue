// This script was made by k2r_n2iq, not me.
// **WARNING**
// - This script makes it seem like you have petals that you actually don't.
//   Therefore, if you equip them or use them for crafting more than once, your account will be banned.
// - We do NOT recommend running the script outside of a guest account if you are not a ban speedrunner!
// - Don't forget that I do NOT have any responsibility for any damage to you caused by the script.

(async () => {

	const currentVersionHash = (await (await fetch("https://florr.io")).text()).match(/const\sversionHash\s=\s"(.*)";/)[1];
	if (currentVersionHash !== "77476f75fdd26b8817bc87a8fd7fd7549a46308f"") {
		console.error("nob");
		return;
	}

	const kMaxRarities = 8;
	const kMaxPetals = 79;
	const petalInventoryBaseAddress = 2832812;

	for (let petalIndex = 1; petalIndex <= kMaxPetals; petalIndex++) {
		for (let rarityIndex = 0; rarityIndex < kMaxRarities; rarityIndex++) {
			const offset = ((petalIndex * kMaxRarities + rarityIndex) << 2);
			Module.HEAPU32[(petalInventoryBaseAddress + offset) >> 2] = 1;
		}
	}

	console.log("ez");

})();
