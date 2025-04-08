import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import TextInput from '../../components/educator/TextInput';



function CreateCourse() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className="flex justify-between">
            <form
                onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <h1 className='text-3xl text-purple-500'>Create Course </h1>
                <TextInput>Course Title  <input {...register("courseTitle")} className='w-full p-2 m-2 text-right' placeholder="course Title" /></TextInput>
                <TextInput>Course Thumbnail  <input {...register("courseThumbnail")} className='w-full p-2 m-2 text-right' placeholder="course Thumbnail" /></TextInput>
                <TextInput>Course Description  <textarea className='w-full p-2 m-2 text-right'{...register("CourseDescription")} placeholder="Course Description" /></TextInput>
                <TextInput>Course Price <input {...register("coursePrice")} className='w-full p-2 m-2 text-right' placeholder="Enter Course Price ..." /></TextInput>
                <TextInput>Discount  <input {...register("discount")} className='w-full p-2 m-2 text-right' placeholder="discount" />%</TextInput>
                <TextInput>Category  <input {...register("category")} className='w-full p-2 m-2 text-right' placeholder="category" /></TextInput>
                <TextInput>Educator  <input {...register("educator")} className='w-full p-2 m-2 text-right' placeholder="educator" /></TextInput>

                <p>{data}</p>
                <button
                    onClick={() => {
                        console.log(data)
                    }}
                    type="button"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mx-1 w-full"
                >
                    Save Course
                </button>
            </form>
            <div>Hello moto</div>
        </div>
    );
}
export default CreateCourse;
