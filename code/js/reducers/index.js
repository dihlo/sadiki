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
import Schedules from './schedules';
import PostSchedules from './postschedules';
import PutSchedules from './putschedules';
import DeleteSchedules from './deleteschedules';
import News from './news';
import PostNews from './postnews';
import PutNews from './putnews';
import DeleteNews from './deletenews';

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
	schedules: Schedules,
	postschedules: PostSchedules,
	putschedules: PutSchedules,
	deleteschedules: DeleteSchedules,
	news: News,
	postnews: PostNews,
	putnews: PutNews,
	deletenews: DeleteNews,	
});

export default allReducers;