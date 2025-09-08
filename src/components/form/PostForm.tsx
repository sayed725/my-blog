"use client"

import React from 'react'

import { useForm } from 'react-hook-form';
import QuillEditor from './QuillEditor';


export interface PostFormType {
    title: string;
    author: string;
    category: "Tech" | "Lifestyle" | "Education" | "Health" | "Design" | "Startup" | "Culture" | "Politics" | "";
    excerpt: string;
    image?: string;
    tags?: string;
    status: boolean
}

type PostFormProps = {
    onSubmit: (data: PostFormType, imageFile: File | null) => void;
    initialData?: PostFormType;
}

const PostForm = ({onSubmit, initialData}: PostFormProps) => {

     const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostFormType>({
    defaultValues: initialData || {
         title: '',
        author: '',
        category: '',
        excerpt: '',
        image: '',
        tags: '',
        status: true

    }
  })
  const onFormSubmit = (data: PostFormType) => {console.log(data)}





  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='space-y-6 max-w-3xl'>

        {/* title  */}

        <div>
            <label className='block font-bold mb-1'>Title <span className='text-red-500'>*</span></label>

            <input type="text"
             id='title' 
             className='w-full border rounded px-3 py-2' placeholder='Enter Post title'
             {...register("title", { required: "Title is required" })}
              />
               {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>}
        </div>

        {/* author  */}
       <div>
            <label className='block font-bold mb-1'>Author <span className='text-red-500'>*</span></label>
            <input 
            type="text" id="author" 
            className='w-full border rounded px-3 py-2' 
            placeholder='Enter author name' 
            {...register("author", { required: "Auhtor is required" })}
            />
             {errors.author && <p className='text-red-600 text-sm mt-1' >{errors.author.message}</p>}
        </div>

        {/* category */}
         <div>
            <label className='block font-bold mb-1'>Category <span className='text-red-500'>*</span></label>
           <select 
            className='w-full border rounded px-3 py-2'
            defaultValue={initialData?.category || ""}
           {...register("category", { required: "Category is required" })}>
                <option value="" disabled>
            Select category
            </option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="design">Design</option>
          <option value="startup">Startup</option>
          <option value="culture">Culture</option>
          <option value="politics">Politics</option>
            </select>
             {errors.category && <p className='text-red-600 text-sm mt-1' >{errors.category.message}</p>}
        </div>

        {/* content  */}

         <div>
            <label className='block font-bold mb-1'>Content <span className='text-red-500'>*</span></label>
             <QuillEditor
             value= {watch("excerpt")}
             onChange={(html)=>setValue("excerpt",html, { shouldValidate: true })}
             placeholder='Write Your Post Content Here'
             />
             {errors.excerpt && <p className='text-red-600 text-sm mt-1' >{errors.excerpt.message}</p>}
        </div>

                  {/* Tags */}
      <div>
        <label className="block font-semibold mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          id="tags"
          type="text"
          {...register("tags")}
          defaultValue={initialData?.tags || ""}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. react, javascript, tutorial"
        />
      </div>

      {/* Status */}
      <div className=" space-x-2">
                <label htmlFor="status" className="block font-semibold mb-1">Status</label>
                <select 
                    id="status"
                    {...register("status")}
                    defaultChecked={initialData?.status ?? true}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                    <option value="true">Published</option>
                    <option value="false">Draft</option>
                </select>
      </div>




    </form>
  )
}

export default PostForm