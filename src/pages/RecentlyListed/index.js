import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {getAxieLatest, getEthPrice} from '../../redux/actions';
import {StyledContainer} from './styled';
import SaleCard from '../../components/SaleCard';
import Filters from '../../components/Filters';
import Spinner from '../../components/Spinner';
import CoinsPrice from '../../components/CoinsPrice';
import {
	comboRonin,
	fishKoi,
	fishKoiBreed0,
	fishnimo,
	lessThan,
	plantStandard,
	fishTwoAnemoneNimoRisky,
	birdDamage,
	birdDamagePigeon,
	comboDualBlade,
	plantStandardBreed0,
	terminator,
	plantStandardBug,
	fishKoiEspada,
	fishKoiEspadaBr0,
	fishnimoBr0,
	fishnimoOranda,
	comboRoninBr0,
	fishNimoLamBr0,
	fishNimoLam,
	fishNimoLamStar,
	fishNimoLamStarBr0,
	fishKoiLamStarGold,
	fishKoiLamStarGoldBr0,
	fishnimoOrandaRiskyGoldBr0,
	fishTwoAnemoneNimoRiskyBr0,
	fishTwoAnemoneNimoLam,
	fishTwoAnemoneNimoLamBr0,
	fishTwoAnemoneKoiLam,
	fishTwoAnemoneKoiLamBr0,
	fishTwoAnemoneKoiRisky,
	fishTwoAnemoneKoiRiskyBr0,
	plantPumpSerYamBug,
	plantYamBugBr0,
	fishKoiOrandaLam,
	fishKoiOrandaLamBr0,
	plantStandardBugBr0,
	comboRoninGodaImpCotton,
	comboRoninGodaImpCottonBr0,
	comboDualBladeBr0,
	plantStandardBeech,
	plantStandardBeechBr0,
	plantStandardWaterBeechBr0,
	plantStandardWaterBeech,
	plantStandardWaterCact,
	plantStandardWaterCactBr0,
	fishNimoDualblade,
	fishNimoDualbladeBr0,
	fishNimoLamDualblade,
	fishNimoLamDualbladeBr0,
} from '../../utils/filterVars';

const RecentlyListed = ({getEthPrice, getAxieLatest, filters}) => {
	const updateAxies = () => {
		getAxieLatest();
		getEthPrice();
	};
	const [timer, setTimer] = useState();
	const axies = useSelector(({axies}) => axies);
	const ETH = useSelector(({ETH}) => ETH);
	const timerUpdateAxies = () => {
		setTimer(setInterval(updateAxies, 50));
	};
	//Axies menores a 250 usds
	const _250usd = lessThan(axies, 240);
	//Filtrados
	console.log(axies);
	const roninCombo = comboRonin(axies);
	const _comboRoninBr0 = comboRoninBr0(axies);
	const _comboRoninGodaImpCotton = comboRoninGodaImpCotton(axies);
	const _comboRoninGodaImpCottonBr0 = comboRoninGodaImpCottonBr0(axies);
	const _comboDualBlade = comboDualBlade(axies);
	const _comboDualBladeBr0 = comboDualBladeBr0(axies);
	const _BirdDamage = birdDamage(axies);
	const _BirdDamagePigeon = birdDamagePigeon(axies);
	const _fishKoi = fishKoi(axies);
	const _fishKoiBreed0 = fishKoiBreed0(axies);
	const _fishNimo = fishnimo(axies);
	const _fishNimoDualblade = fishNimoDualblade(axies);
	const _fishNimoDualbladeBr0 = fishNimoDualbladeBr0(axies);
	const _fishNimoLamDualblade = fishNimoLamDualblade(axies);
	const _fishNimoLamDualbladeBr0 = fishNimoLamDualbladeBr0(axies);
	const _fishNimoBr0 = fishnimoBr0(axies);
	const _fishnimoOranda = fishnimoOranda(axies);
	const _fishnimoOrandaRiskyGoldBr0 = fishnimoOrandaRiskyGoldBr0(axies);
	const _fishKoiEspada = fishKoiEspada(axies);
	const _fishKoiEspadaBr0 = fishKoiEspadaBr0(axies);
	const _fishKoiOrandaLam = fishKoiOrandaLam(axies);
	const _fishKoiOrandaLamBr0 = fishKoiOrandaLamBr0(axies);
	const _fishNimoLamBr0 = fishNimoLamBr0(axies);
	const _fishNimoLam = fishNimoLam(axies);
	const _fishNimoLamStar = fishNimoLamStar(axies);
	const _fishNimoLamStarBr0 = fishNimoLamStarBr0(axies);
	const _fishKoiLamStarGold = fishKoiLamStarGold(axies);
	const _fishKoiLamStarGoldBr0 = fishKoiLamStarGoldBr0(axies);
	const _fishTwoAnemoneNimoRisky = fishTwoAnemoneNimoRisky(axies);
	const _fishTwoAnemoneNimoLam = fishTwoAnemoneNimoLam(axies);
	const _fishTwoAnemoneKoiLam = fishTwoAnemoneKoiLam(axies);
	const _fishTwoAnemoneKoiRisky = fishTwoAnemoneKoiRisky(axies);
	const _PlantStandar = plantStandard(axies);
	const _plantStandardBreed0 = plantStandardBreed0(axies);
	const _plantStandardBeech = plantStandardBeech(axies);
	const _plantStandardBeechBr0 = plantStandardBeechBr0(axies);
	const _plantStandardWaterBeechBr0 = plantStandardWaterBeechBr0(axies);
	const _plantStandardWaterBeech = plantStandardWaterBeech(axies);
	const _plantStandardWaterCact = plantStandardWaterCact(axies);
	const _plantStandardWaterCactBr0 = plantStandardWaterCactBr0(axies);
	const _plantStandardBug = plantStandardBug(axies);
	const _plantStandardBugBr0 = plantStandardBugBr0(axies);
	const _plantPumpSerYamBug = plantPumpSerYamBug(axies);
	const _plantYamBugBr0 = plantYamBugBr0(axies);
	const _terminator = terminator(axies);
	//const _fishTwoAnemoneNimoRiskyBr0 = fishTwoAnemoneNimoRiskyBr0(axies);
	//const _fishTwoAnemoneKoiLamBr0 = fishTwoAnemoneKoiLamBr0(axies);
	//const _fishTwoAnemoneNimoLamBr0 = fishTwoAnemoneNimoLamBr0(axies);
	//const _fishTwoAnemoneKoiRiskyBr0 = fishTwoAnemoneKoiRiskyBr0(axies);
	/* 	_fishTwoAnemoneNimoRiskyBr0,
			_fishTwoAnemoneNimoLamBr0,
			_fishTwoAnemoneKoiLamBr0,
			_fishTwoAnemoneKoiRiskyBr0, */

	const final = roninCombo?.concat(
		_comboRoninBr0,
		_comboRoninGodaImpCotton,
		_comboRoninGodaImpCottonBr0,
		_PlantStandar,
		_fishTwoAnemoneNimoRisky,
		_fishTwoAnemoneNimoLam,
		_fishTwoAnemoneKoiLam,
		_fishTwoAnemoneKoiRisky,
		_fishNimo,
		_fishNimoBr0,
		_fishNimoLam,
		_fishNimoLamBr0,
		_fishNimoLamStar,
		_fishNimoLamStarBr0,
		_fishnimoOranda,
		_fishnimoOrandaRiskyGoldBr0,
		_fishKoi,
		_fishKoiBreed0,
		_fishKoiEspada,
		_fishKoiEspadaBr0,
		_fishKoiOrandaLam,
		_fishKoiOrandaLamBr0,
		_fishKoiLamStarGold,
		_fishKoiLamStarGoldBr0,
		_BirdDamage,
		_BirdDamagePigeon,
		_comboDualBlade,
		_comboDualBladeBr0,
		_plantStandardBreed0,
		_plantStandardBug,
		_plantStandardBeechBr0,
		_plantStandardBeech,
		_plantStandardBugBr0,
		_plantPumpSerYamBug,
		_plantStandardWaterBeechBr0,
		_plantStandardWaterBeech,
		_plantStandardWaterCact,
		_plantStandardWaterCactBr0,
		_plantYamBugBr0,
		_terminator,
		_fishNimoDualbladeBr0,
		_fishNimoDualblade,
		_fishNimoLamDualbladeBr0,
		_fishNimoLamDualblade
	);

	useEffect(() => {
		getAxieLatest();
		getEthPrice();
		timerUpdateAxies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getAxieLatest, getEthPrice]);

	return (
		<div className='content'>
			<StyledContainer>
				<div className='title'></div>
				<div className='coins'>
					<CoinsPrice />
				</div>
				<div className='filters'>
					<Filters />
				</div>
				{/* {final &&
					final[0] &&
					window.open(
						`https://marketplace.axieinfinity.com/axie/${final[0]?.id}`,
						'_blank',
						'status=yes,scrollbars=yes,toolbar=yes,resizable=yes,width=1200,height=1000,menubar'
					)} */}
				<div>
					<div className='dogs'>
						<div className='div_cards'>
							{final ? (
								final.map((el, i) => <SaleCard key={i} axie={el} ETH={ETH} />)
							) : (
								<Spinner />
							)}
						</div>
					</div>
					<div className='dogs'>
						<div className='div_cards'>
							{_250usd ? (
								_250usd.map((el, i) => <SaleCard key={i} axie={el} ETH={ETH} />)
							) : (
								<Spinner />
							)}
						</div>
					</div>
					{/* 					<div className='dogs'>
						<div className='div_cards'>
							{axies ? (
								axies.map((el, i) => <SaleCard key={i} axie={el} ETH={ETH} />)
							) : (
								<Spinner />
							)}
						</div>
					</div> */}
				</div>
			</StyledContainer>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAxieLatest: () => dispatch(getAxieLatest()),
		getEthPrice: () => dispatch(getEthPrice()),
	};
};

export default connect(null, mapDispatchToProps)(RecentlyListed);
