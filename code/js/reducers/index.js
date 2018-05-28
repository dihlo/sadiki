import {combineReducers} from 'redux';
import CarsReducers from './car';
import ActiveCar from './car-active';
import Pages from './pages';
import DinerData from './DinerTableData';
import ToApi from './toapi';
import Meals from './meals';
import PostMeals from './postmeals';

const allReducers = combineReducers ({
	cars: CarsReducers,
	active: ActiveCar,
	pages: Pages,
	DinerData: DinerData,
	auth: ToApi,
	meals: Meals,
	postmeals: PostMeals,
});

export default allReducers;