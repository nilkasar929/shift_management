import Course from "../models/course";
import { Request,Response } from "express";
import Favourites from "../models/favourites";
import Cart from "../models/cart";

const createCourse=async(req:Request,res:Response)=>{
    const {name,domain,price,image,author,description} = req.body;

   try {
    const course = await Course.create({
        name,
        domain,
        image,
        price,
        author,
        description,
      });

      return course;
   } catch (error) {
    throw error;
   }
}

const deleteCourse=async(req:Request,res:Response)=>{
    const id = req.body;

    const remove = await Course.destroy({ where: { id: id} });
    return remove;
}

const getCourses = async(req:Request,res:Response)=>{
    try {
        const courses = Course.findAll();
        return courses;
    } catch (error) {
        throw error
    }
}
const addToFavourites=async(req:Request,res:Response)=>{
    const {courseId}=req.body;
    const {userId}=req.body;

   try {
    const fav = Favourites.create({
        courseId,
        userId
    })
   } catch (error) {
    throw error;
   }
}
const addToCart=async(req:Request,res:Response)=>{
    const {courseId}=req.body;
    const {userId}=req.body;

   try {
    const fav = Cart.create({
        courseId,
        userId
    })
    return fav;
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
    return remove;
    } catch (error) {
        throw error;
    }
}


export {createCourse,getCourses,removeFav,addToFavourites,deleteCourse,removeCart,addToCart}