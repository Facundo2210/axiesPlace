export const fishKoiBreed0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 370 &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57
		);
};
export const fishKoi = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 345 &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				classs === 'Aquatic' &&
				stats.speed >= 57
		);
};
export const fishnimo = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 355 &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-nimo' &&
				classs === 'Aquatic' &&
				stats.speed >= 57
		);
};
export const fishAnemone = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 448 &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				classs === 'Aquatic' &&
				stats.speed >= 57
		);
};
export const plantStandard = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 360 &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				classs === 'Plant' &&
				stats.hp === 61
		);
};
export const plantStandardBug = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 428 &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-leaf-bug' &&
				parts[5]?.id === 'tail-carrot' &&
				classs === 'Plant' &&
				stats.hp > 55
		);
};
export const plantStandardBreed0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 383 &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				breedCount === 0 &&
				classs === 'Plant' &&
				stats.hp === 61
		);
};
export const terminator = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 450 &&
				parts[2]?.id === 'back-snail-shell' &&
				parts[3]?.id === 'mouth-tiny-turtle' &&
				parts[4]?.id === 'horn-lagging' &&
				parts[5]?.id === 'tail-thorny-caterpillar' &&
				classs === 'Reptile'
		);
};
export const birdDamage = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 448 &&
				parts[2]?.id === 'back-kingfisher' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				classs === 'Bird' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
};
export const birdDamagePigeon = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 447 &&
				parts[2]?.id === 'back-pigeon-post' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				classs === 'Bird' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
};
/* export const birdDamageBreed0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 448 &&
				parts[2]?.id === 'back-kingfisher' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				classs === 'Bird' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
}; */

export const comboRonin = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 325 &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				classs === 'Beast' &&
				stats.speed >= 41
		);
};
export const comboDualBlade = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 340 &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				classs === 'Beast' &&
				stats.speed >= 41
		);
};

export const lessThan = (axies, number) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount}) => auction?.currentPriceUSD < number
		);
	}
};
