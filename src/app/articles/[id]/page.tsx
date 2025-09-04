import { Article } from '@/types/article';
import { Comment } from '@/types/comments';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

interface IArticle extends Article {
    authorImageUrl: string;
    createdAt: string;
    comments: Comment[]
}


async function getArticle(id:string): Promise<IArticle | null> {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/articles/${id}`;
        const res = await fetch(apiUrl, {next: {revalidate: 100} })

        if(!res.ok){
          return null
        }

        const articleData = await res.json()

        return {
            ...articleData,
             imageUrl: articleData.imageUrl || 'https://placehold.co/1240x700/e2e8f0/4a5568?text=Featured+Image',
            authorImageUrl: 'https://placehold.co/120x120/e2e8f0/4a5568?text=Author',
            comments: articleData.comments
        }



    } catch (error) {
        console.error('Error Fetching article', error)
        return null
    }
}

const ArticleDetailsPage = async({params}: {params: Promise<{id: string}>}) => {

    const {id} = await params;

    const article = await getArticle(id)

    // console.log(article)

    if(!article){
        return  <div className='flex justify-center items-center h-screen bg-white'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-gray-800'>404</h1>
                    <p className='text-xl text-gray-600'>Article Not Found!</p>
                </div>
            </div>
    }

  return (
   <section className='container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 '>
     {/* article header */}
        <div className="pt-12 pb-8">
                <div className="mb-5 text-left">
                    <h1 className="text-4xl font-lora font-bold mb-6">{article.title}</h1>
                    <div className="flex justify-start items-center space-x-2 text-gray-500">
                        <img alt="author avatar" src={article?.authorImageUrl || 'https://placehold.co/120x120/e2e8f0/4a5568?text=Author'} className="w-12 h-12 rounded-full " />
                        <a href="#" className="hover:underline">{article.meta.author || 'Unknown'}</a>
                        <span>in</span>
                        <a href="#" className="hover:underline capitalize text-primary">{article.meta.category}</a>
                    </div>
                    <div className="text-gray-500 text-sm mt-2">
                        <span>{new Date(article?.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                        <span className="mx-2">&middot;</span>
                        <span title="5 min read"> {article.meta?.readingTime || 5}  min read</span>
                        <a href="#">
                          <FaStar className="inline-block ml-2 text-yellow-500" />
                          <span className="ml-1">5.0</span>
                        </a>
                    </div>
                </div>
        </div>

         {/* Featured Image */}
        <figure className="mb-8 zoom aspect-video">
                <Image alt={article.title} src={article.image} width={1200} height={500} className="w-full h-auto rounded-lg" />
        </figure>








   </section>
  )
}

export default ArticleDetailsPage