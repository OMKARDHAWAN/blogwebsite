"use client"

import Image from "next/image";
import { useEffect, useState } from "react"
import { usePostForm } from "../../../../contextApi/Postcategory";
import { RTEField } from "../RTEField/RTEField";
import { FaBars } from "react-icons/fa";
import './postform.css'
export default function Postform(){
        
    const { 
        data,
        isLoading,
        error,
        isDone,
        setImage,
        image,
        handleData,
        handleCreate,
        handleUpdate,
        handleDelete,
        fetchData
    }=usePostForm();

    
        

        const handleSubmit = (e) => {
            e.preventDefault();
            handleCreate();
          };
         
  
  


          
          
    return(
        <>
        <main className="bg-white  shadow-xl rounded-xl">

        
            <form className="p-5" onSubmit={handleSubmit}>
            <h1 className="text-2xl underline my-3">Post form</h1>
            <div className="flex flex-col gap-2">
                    <label className="text-xl text-gray-500 my-2">Title <span className="text-red-500">*</span> </label>
                    <input
                        className="px-4 py-2 rounded-full border bg-gray-50"
                        placeholder="Enter Title"
                        type="text"
                        onChange={(e) => {
                            handleData('title', e.target.value)
                        }}
                        value={data?.title}
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl text-gray-500 my-2">Author<span className="text-red-500">*</span> </label>
                    <input
                        className="px-4 py-2 rounded-full border bg-gray-50"
                        placeholder="Enter Title"
                        type="text"
                        onChange={(e) => {
                                handleData('author', e.target.value)
                        }}
                        value={data?.author}
                        required
                    />
                </div>
            
                <div className="flex flex-col gap-2 my-5">
                <label className="text-xl text-gray-500 my-2">Image  </label>
                    <input
                        className="px-4 py-2 rounded-full border bg-gray-50"
                        placeholder="Image..."
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            e.preventDefault();
                            setImage(e.target.files[0]);
                        }}
                    />
                  </div>


                <div className="flex flex-col gap-2">
                    <label className="text-xl text-gray-500 my-2">Category<span className="text-red-500">*</span> </label>
                    <input
                        className="px-4 py-2 rounded-full border bg-gray-50"
                        placeholder="Enter category...."
                        type="text"
                        value={data?.category}
                        onChange={(e) => {
                            handleData('category', e.target.value)
                        }}
                        required
                    />
                </div>

         
                <RTEField/>
            <button  className="w-24 h-12 bg-blue-500 cursor-pointer active:bg-green-600 mt-12 rounded-md text-white  postbtn " >Submit</button>
            </form>

        </main>
        </>
    )
}
