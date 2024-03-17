import React from "react";
import Card from "./Card";
import { useState } from "react";
function Cards({courses, category}){

    const [likedCourses, setLikedCourses]= useState([]);

    const getCourses = () => {
        if(category==="All"){
            let allCourses = [];
            Object.values(courses).forEach(courseCategory=>{
                    courseCategory.forEach(course =>{
                    allCourses.push(course);
                })
    
        })
        return allCourses;
        }
        else{
            //specific category ka data pass hoga
           return  courses[category];
        }  
};
    return (
        <div className="flex justify-center flex-wrap gap-4 mb-4">
             {
             getCourses().map((course)=>{
                return(<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>);
             })
             }
        </div>
    );
}

export default Cards;