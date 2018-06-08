import {combineReducers} from 'redux';
import CarsReducers from './car';
import Pagesselect from './pagesselect';
import Pages from './pages';
import DinerData from './DinerTableData';
import ToApi from './toapi';
import Meals from './meals';
import PostMeals from './postmeals';
import DeleteMeals from './deletemeals';
import PutMeals from './putmeals';

const allReducers = combineReducers ({
	cars: CarsReducers,
	pagesselect: Pagesselect,
	pages: Pages,
	DinerData: DinerData,
	auth: ToApi,
	meals: Meals,
	postmeals: PostMeals,
	deletemeals: DeleteMeals,
	putmeals: PutMeals,
});

export default allReducers;