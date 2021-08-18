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
	fishAnemone,
} from '../../utils/filterVars';

const RecentlyListed = ({getEthPrice, getAxieLatest, filters}) => {
	const updateAxies = () => {
		getAxieLatest();
		getEthPrice();
	};
	const [timer, setTimer] = useState();
	const axies = useSelector(({axies}) => axies);
	const ETH = useSelector(({ETH}) => ETH);
	console.log(timer);
	const timerUpdateAxies = () => {
		setTimer(setInterval(updateAxies, 50));
	};
	//Axies menores a 250 usds
	const _50usd = lessThan(axies, 50);
	//const _250usd = lessThan(axies, 250);
	//Filtrados
	const roninCombo = comboRonin(axies);
	const _fishKoiBreed0 = fishKoiBreed0(axies);
	const _fishKoi = fishKoi(axies);
	const _fishNimo = fishnimo(axies);
	const _fishAnemone = fishAnemone(axies);
	const _PlantStandar = plantStandard(axies);
	const final = roninCombo?.concat(
		_50usd,
		_PlantStandar,
		_fishKoiBreed0,
		_fishKoi,
		_fishAnemone,
		_fishNimo
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
