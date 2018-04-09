import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import Pages from './pages';

const allReducers = combineReducers ({
	cars: CarsReducers,
	active: ActiveCar,
	pages: Pages,
});

export default allReducers;