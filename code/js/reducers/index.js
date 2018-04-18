import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import Pages from './pages';
import DinerData from './DinerTableData'

const allReducers = combineReducers ({
	cars: CarsReducers,
	active: ActiveCar,
	pages: Pages,
	DinerData: DinerData,
});

export default allReducers;