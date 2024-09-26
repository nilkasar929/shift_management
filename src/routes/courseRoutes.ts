import { Router } from 'express';
import { createCourse, getCourses,addToFavourites,removeFav ,deleteCourse, addToCart, removeCart, fetchFav, fetchCart} from '../controllers/courseController';

const router = Router();

router.post('/createCourse',createCourse);
router.get('/getCourses',getCourses);
router.post('/deleteCourse',deleteCourse);
router.post('/addToCart',addToCart)
router.post('/addToFavourites',addToFavourites)
router.post('/removeFav',removeFav);
router.post('/removeCart',removeCart);
router.post('/fetchFav',fetchFav);
router.post('/fetchCart',fetchCart);

export default router;