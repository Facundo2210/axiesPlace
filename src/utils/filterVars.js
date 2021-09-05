//---------- PLANT ----------------//

export const plantStandard = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 330 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31
		);
};
export const plantStandardBreed0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 355 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31 &&
				stats.morale === 41
		);
};

export const plantStandardBeechBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 360 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-beech' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31 &&
				stats.morale === 41
		);
};
export const plantStandardBeech = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 330 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-beech' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31
		);
};
export const plantStandardWaterBeech = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 380 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-watering-can' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-beech' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31
		);
};

export const plantStandardWaterBeechBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 440 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-watering-can' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-beech' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31 &&
				stats.morale === 41
		);
};

export const plantStandardWaterCactBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 420 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-watering-can' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31 &&
				stats.morale === 41
		);
};
export const plantStandardWaterCact = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 380 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-watering-can' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-cactus' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 61 &&
				stats.speed === 31
		);
};
export const plantStandardBug = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 390 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-leaf-bug' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 59 &&
				stats.speed === 31 &&
				stats.morale === 43
		);
};
export const plantStandardBugBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 450 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-leaf-bug' &&
				parts[5]?.id === 'tail-carrot' &&
				stats.hp === 59 &&
				stats.morale === 43 &&
				stats.speed === 31
		);
};

export const plantYamBugBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Plant' &&
				auction?.currentPriceUSD < 550 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-leaf-bug' &&
				parts[5]?.id === 'tail-yam' &&
				stats.hp === 59 &&
				stats.morale === 43 &&
				stats.hp === 31
		);
};

export const plantPumpSerYamBug = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Plant' &&
				auction?.currentPriceUSD < 480 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pumpkin' &&
				parts[3]?.id === 'mouth-serious' &&
				parts[4]?.id === 'horn-leaf-bug' &&
				parts[5]?.id === 'tail-yam' &&
				stats.hp === 59 &&
				stats.morale === 43 &&
				stats.speed === 31
		);
};

// -------------------------- KOI ----------------------//

export const fishKoiLamStarGold = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 300 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};

export const fishKoiLamStarGoldBr0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				classs === 'Aquatic' &&
				breedCount === 0 &&
				auction?.currentPriceUSD < 330 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
	}
};

export const fishKoiOrandaLamBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 400 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
};

export const fishKoiOrandaLam = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 340 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};

//ASD
export const fishKoiEspada = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 325 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};

export const fishKoiEspadaBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 329 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
};
export const fishKoiBreed0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 320 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
	}
};

export const fishKoi = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 305 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};
//--------------------//// NIMO ////////................//

export const fishnimo = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 335 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};

export const fishnimoBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 400 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
};

export const fishnimoOrandaRiskyGoldBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 415 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
};

export const fishnimoOranda = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 385 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};

export const fishNimoLam = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 380 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};

export const fishNimoLamBr0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 435 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-oranda' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
	}
};

export const fishNimoLamStarBr0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 380 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57 &&
				stats.hp === 45
		);
	}
};
export const fishNimoLamStar = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 340 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-shoal-star' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};
export const fishNimoDualblade = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 550 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed >= 52
		);
};
export const fishNimoDualbladeBr0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 600 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed >= 52
		);
	}
};

export const fishNimoLamDualbladeBr0 = (axies) => {
	if (axies.length) {
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 600 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed >= 52
		);
	}
};
export const fishNimoLamDualblade = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 500 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-goldfish' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed >= 52
		);
};

//------------------------ ANEMONA --------------------------------//

export const fishTwoAnemoneNimoLam = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 415 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};
/* export const fishTwoAnemoneNimoLamBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 650 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57 &&
				stats.hp === 45
		);
}; */

export const fishTwoAnemoneNimoRisky = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 450 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				stats.speed === 57
		);
};
/* export const fishTwoAnemoneNimoRiskyBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 700 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-nimo' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57 &&
				stats.hp === 45
		);
}; */

export const fishTwoAnemoneKoiRisky = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 330 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};
/* export const fishTwoAnemoneKoiRiskyBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 700 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-risky-fish' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-koi' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57 &&
				stats.hp === 45
		);
}; */

export const fishTwoAnemoneKoiLam = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Aquatic' &&
				auction?.currentPriceUSD < 310 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-koi' &&
				stats.speed === 57
		);
};
/* export const fishTwoAnemoneKoiLamBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				auction?.currentPriceUSD < 750 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-anemone' &&
				parts[3]?.id === 'mouth-lam' &&
				parts[4]?.id === 'horn-anemone' &&
				parts[5]?.id === 'tail-koi' &&
				classs === 'Aquatic' &&
				breedCount === 0 &&
				stats.speed === 57 &&
				stats.hp === 45
		);
}; */

//TERMINATOR//

export const terminator = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Reptile' &&
				auction?.currentPriceUSD < 410 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-snail-shell' &&
				parts[3]?.id === 'mouth-tiny-turtle' &&
				parts[4]?.id === 'horn-lagging' &&
				parts[5]?.id === 'tail-thorny-caterpillar' &&
				stats.hp === 47 &&
				stats.speed === 42
		);
};
export const birdDamage = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Bird' &&
				auction?.currentPriceUSD < 300 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-kingfisher' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
};
export const birdDamagePigeon = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Bird' &&
				auction?.currentPriceUSD < 290 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-pigeon-post' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
};
/* export const birdDamageBreed0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				auction?.currentPriceUSD < 448 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-kingfisher' &&
				parts[3]?.id === 'mouth-little-owl' &&
				parts[4]?.id === 'horn-kestrel' &&
				parts[5]?.id === 'tail-the-last-one' &&
				classs === 'Bird' &&
				stats.hp === 27 &&
				stats.speed === 61
		);
}; */

export const comboRoninGodaImpCotton = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Beast' &&
				auction?.currentPriceUSD < 280 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-goda' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-cottontail' &&
				stats.speed >= 41
		);
};
export const comboRoninGodaImpCottonBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Beast' &&
				auction?.currentPriceUSD < 300 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-goda' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-cottontail' &&
				stats.morale === 61 &&
				stats.hp === 31 &&
				stats.speed === 41
		);
};

export const comboRoninBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, breedCount, auction, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Beast' &&
				auction?.currentPriceUSD < 325 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				stats.morale === 61 &&
				stats.hp === 31 &&
				stats.speed === 41
		);
};

export const comboRonin = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Beast' &&
				auction?.currentPriceUSD < 290 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-imp' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				stats.speed >= 41
		);
};

export const comboDualBlade = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, stats, class: classs}) =>
				classs === 'Beast' &&
				auction?.currentPriceUSD < 310 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				stats.speed >= 41
		);
};
export const comboDualBladeBr0 = (axies) => {
	if (axies.length)
		return axies.filter(
			({parts, auction, breedCount, stats, class: classs}) =>
				breedCount === 0 &&
				classs === 'Beast' &&
				auction?.currentPriceUSD < 340 &&
				auction.startingPrice === auction.endingPrice &&
				parts[2]?.id === 'back-ronin' &&
				parts[3]?.id === 'mouth-nut-cracker' &&
				parts[4]?.id === 'horn-dual-blade' &&
				parts[5]?.id === 'tail-nut-cracker' &&
				stats.morale === 61 &&
				stats.hp === 31 &&
				stats.speed === 41
		);
};

export const lessThan = (axies, number) => {
	if (axies.length) {
		return axies.filter(
			({auction}) =>
				auction.startingPrice === auction.endingPrice &&
				number >= auction?.currentPriceUSD
		);
	}
};
