import Course from "../models/course";
import { Request,Response } from "express";
import Favourites from "../models/favourites";
import Cart from "../models/cart";

const createCourse=async(req:Request,res:Response)=>{
    const {name,domain,image,author,description} = req.body;

   try {
    const course = await Course.create({
        name,
        domain,
        image,
        author,
        description,
      });

      return res.status(201).json(course.dataValues);
   } catch (error) {
    throw error;
   }
}

const deleteCourse=async(req:Request,res:Response)=>{
    const id = req.body;

    const remove = await Course.destroy({ where: { id: id} });
    return res.status(201).json(remove);
}

const getCourses = async(req:Request,res:Response)=>{
    try {
        const courses = await Course.findAll();
        return res.status(201).json(courses);
    } catch (error) {
        throw error
    }
}
const addToFavourites=async(req:Request,res:Response)=>{
    const {courseId}=req.body;
    const {userId}=req.body;

   try {
    const fav = await Favourites.create({
        courseId,
        userId
    })
    return res.status(201).json(fav)
   } catch (error) {
    throw error;
   }
}

const fetchFav = async(req:Request,res:Response)=>{
    const userId = req.params;
    try {
        const courses = await Favourites.findAll({where:{userId}})
    return res.status(201).json(courses);
    } catch (error) {
        throw error;
    }
}
const fetchCart = async(req:Request,res:Response)=>{
    const userId = req.params;
    try {
        const courses = await Cart.findAll({where:{userId}})
    return res.status(201).json(courses);
    } catch (error) {
        throw error;
    }
}
const addToCart=async(req:Request,res:Response)=>{
    const {courseId}=req.body;
    const {userId}=req.body;

   try {
    const fav = await Cart.create({
        courseId,
        userId
    })
    return res.status(201).json(fav);
   } catch (error) {
    throw error;
   }
}
const removeCart=async(req:Request,res:Response)=>{
    const courseId = req.body;
    const userId = req.body;

    try {
        const remove = await Cart.destroy({ where: { courseId: courseId,userId:userId} });
    return remove;
    } catch (error) {
        throw error;
    }
}
const removeFav=async(req:Request,res:Response)=>{
    const courseId = req.body;
    const userId = req.body;
    try {
        const remove = await Favourites.destroy({ where: { courseId: courseId,userId:userId} });
        return res.status(201).json(remove);
    } catch (error) {
        throw error;
    }
}


export {createCourse,getCourses,removeFav,addToFavourites,deleteCourse,removeCart,addToCart,fetchCart,fetchFav}