import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import Pages from './pages';
import DinerData from './DinerTableData';
import ToApi from './toapi';
import Meals from './meals';

const allReducers = combineReducers ({
	cars: CarsReducers,
	active: ActiveCar,
	pages: Pages,
	DinerData: DinerData,
	auth: ToApi,
	meals: Meals,
});

export default allReducers;