import DeleteButton from '@/components/ui/DeleteButton';
import { connectDB } from '@/lib/mongodb'
import ArticleModel, { IArticle } from '@/models/Article';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react'


const POSTS_PER_PAGE = 10;

const ManagePostPage = async({searchParams} : {searchParams: Promise<{page?: string}>}) => {

  await connectDB();
    const currentPage = parseInt((await searchParams).page || "1");

    if(currentPage < 1) redirect("dashboard/manage-posts?page=1"); 

    const skip = (currentPage -1) * POSTS_PER_PAGE;

    // get post and total post count
    const [rawPosts, totalPosts] = await Promise.all([
      ArticleModel.find().sort({createdAt: -1}).skip(skip).limit(POSTS_PER_PAGE).lean(),

      ArticleModel.countDocuments()
    ])

    // console.log(rawPosts, totalPosts)

     const posts: IArticle[] = JSON.parse(JSON.stringify(rawPosts));
     const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);



  return (
    <div className='max-w-5xl'>
      <h1 className='text-3xl font-bold mb-6'>Manage Posts</h1>

      {posts.length === 0 ? (
        <p className='text-gray-500'>No posts found.</p>) : (
          <>
          <table className='min-w-full shadow-md rounded-md overflow-hidden'>
            <thead className='bg-gray-900 text-gray-100'>
             <tr> 
              <th className='text-left p-3'>Title</th>
              <th className='text-left p-3'>Author</th>
              <th className='text-left p-3'>Category</th>
              <th className='text-left p-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className='border-b'>
                  <td className='p-3'>
                    <Link href={`/articles/${post._id}`} className='hover:text-primary hover:underline cursor-pointer'>{post.title}</Link>
                  </td>
                  <td className='p-3'>{post.meta.author}</td>
                  <td className='p-3'>{post.meta.category}</td>
                  <td className='p-3 flex gap-4'>
                    <Link href={`/dashboard/edit-post/${post._id}`} className='text-blue-600 hover:underline'>Edit</Link>
                   <DeleteButton id={post._id}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className='mt-8 flex justify-center gap-4'>
            {
              Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                <Link key={page} href={`?page=${page}`}
                className={`px-4 py-2 rounded ${page === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                {page}
                </Link>
              ))
            }
          </div>
          </>
        )
      }
    </div>
  )
}

export default ManagePostPage