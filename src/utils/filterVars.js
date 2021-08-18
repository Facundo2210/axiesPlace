const result = (parts, classs) => {
	console.log('object,', classs);
	const control = parts?.reduce((acum, part) => {
		if (part?.class === classs) {
			acum++;
		}
		return acum;
	}, 0);
	return control;
};

export const fishKoiBreed0 = (axies) => {
	console.log(result);
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 450 &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57
		);
};
export const plantStandard = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 350 &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				breedCount === 0 &&
				classs === 'Plant'
		);
};

export const comboRonin = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 320 &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				classs === 'Beast' &&
				stats.speed >= 40
		);
};

export const fishKoi = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 390 &&
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
				auction?.currentPriceUSD < 390 &&
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
				auction?.currentPriceUSD < 610 &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				classs === 'Aquatic' &&
				stats.speed >= 57
		);
};

export const lessThan = (axies, number) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount}) => auction?.currentPriceUSD < number
		);
	}
};
