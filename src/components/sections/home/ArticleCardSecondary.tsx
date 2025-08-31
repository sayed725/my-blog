
import PostMeta from '@/components/ui/PostMeta'
import { IArticle } from '@/models/Article'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ArticleCardSecondaryProps {
    article: IArticle
}

const ArticleCardSecondary = ({article}: ArticleCardSecondaryProps) => {
  return (
    <article className='flex mb-6 first:mt-0 mt-6 md:mt-0'>
         <figure className='shrink-0 w-28 h-24 sm:w-32 sm:h-28 md:w-36 md:h-32 mr-4'>
            <Link href={`/articles/${article._id}`} className='block w-full h-full'>
            <Image src={article.image} alt={article.title} width={190} height={165} className='w-full h-auto object-cover rounded-lg' loading='lazy'/>
            </Link>
        </figure>

        <div className='grow'>
            {article.caption && (
                <p className='text-xs uppercase text-gray-500 mb-1'>{article.caption}</p>
            )}
            <h5 className='text-base font-bold mb-2 leading-tight'>
                <Link href={`/articles/${article._id}`} className='text-[#2E2E2E] hover:text-primary transition-colors'>{article.title}</Link>
            </h5>

            <PostMeta {...article.meta}/>
        </div>

    </article>
  )
}

export default ArticleCardSecondary