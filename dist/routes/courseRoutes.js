"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courseController_1 = require("../controllers/courseController");
const router = (0, express_1.Router)();
router.post('createCourse', courseController_1.createCourse);
router.get('getCourses', courseController_1.getCourses);
router.post('deleteCourse', courseController_1.deleteCourse);
router.post('addToCart', courseController_1.addToCart);
router.post('addToFavourites', courseController_1.addToFavourites);
router.post('removeFav', courseController_1.removeFav);
router.post('removeCart', courseController_1.removeCart);
exports.default = router;
//# sourceMappingURL=courseRoutes.js.map