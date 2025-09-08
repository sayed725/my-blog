"use client"

import PostForm from '@/components/form/PostForm'
import React from 'react'

const AddPostPage = () => {

   const handleAddPost = () =>{

   }


  return (
    <section>
      <h1 className='text-3xl font-bold mb-6'>Add New Article</h1>

      <PostForm onSubmit={handleAddPost} />


    </section>
  )
}

export default AddPostPage
