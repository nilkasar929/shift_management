"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = exports.removeCart = exports.deleteCourse = exports.addToFavourites = exports.removeFav = exports.getCourses = exports.createCourse = void 0;
const course_1 = __importDefault(require("../models/course"));
const favourites_1 = __importDefault(require("../models/favourites"));
const cart_1 = __importDefault(require("../models/cart"));
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, domain, image, author, description } = req.body;
    try {
        const course = yield course_1.default.create({
            name,
            domain,
            image,
            author,
            description,
        });
        return res.status(201).json(course.dataValues);
    }
    catch (error) {
        throw error;
    }
});
exports.createCourse = createCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body;
    const remove = yield course_1.default.destroy({ where: { id: id } });
    return remove;
});
exports.deleteCourse = deleteCourse;
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = course_1.default.findAll();
        return res.status(201).json(courses);
    }
    catch (error) {
        throw error;
    }
});
exports.getCourses = getCourses;
const addToFavourites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.body;
    const { userId } = req.body;
    try {
        const fav = favourites_1.default.create({
            courseId,
            userId
        });
        return res.status(201).json(fav);
    }
    catch (error) {
        throw error;
    }
});
exports.addToFavourites = addToFavourites;
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.body;
    const { userId } = req.body;
    try {
        const fav = cart_1.default.create({
            courseId,
            userId
        });
        return fav;
    }
    catch (error) {
        throw error;
    }
});
exports.addToCart = addToCart;
const removeCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.body;
    const userId = req.body;
    try {
        const remove = yield cart_1.default.destroy({ where: { courseId: courseId, userId: userId } });
        return remove;
    }
    catch (error) {
        throw error;
    }
});
exports.removeCart = removeCart;
const removeFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.body;
    const userId = req.body;
    try {
        const remove = yield favourites_1.default.destroy({ where: { courseId: courseId, userId: userId } });
        return remove;
    }
    catch (error) {
        throw error;
    }
});
exports.removeFav = removeFav;
//# sourceMappingURL=courseController.js.map