"use client"
import PostForm, { PostFormType } from '@/components/form/PostForm'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const EditPostPage = () => {

    const {id} = useParams();

     const [initialData, setInitialData] = React.useState<PostFormType | undefined>(undefined);
     const [loading, setLoading] = React.useState(true);

     useEffect(()=>{

        if(!id) return;
        async function fetchPost() {
            try {
                const res = await fetch (`/api/articles/${id}`)
               if(!res.ok) {
                    throw new Error("Failed to fetch post data");
                }

                const post = await res.json();

                 setInitialData({
                    title: post.title,
                    author: post.meta.author,
                    category: post.meta.category,
                    excerpt: post.excerpt,
                    status: post.status,
                    tags: post.tags,
                    image: post.image || "",
                })

                setLoading(false)


            } catch (error) {
                 setLoading(false);
                console.error("Error fetching post data:", error);
            }
        }

        fetchPost();

     },[id])


      // console.log(initialData)

    if(loading) return <p>Loading...</p>;

    if(!initialData) return <p className='text-red-500'>Post not found</p>;


    const handleUpdatePost =  () =>{

    }


  return (
    <section className='max-w-4xl'>
         <h1 className='text-3xl font-bold mb-6'>Edit Post </h1>
          <PostForm onSubmit={handleUpdatePost} initialData={initialData}/>
    </section>
  )
}

export default EditPostPage