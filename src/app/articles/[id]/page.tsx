import { IArticle } from '@/models/Article';
import React from 'react'


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

    console.log(article)



  return (
    <div>ArticleDetailsPage</div>
  )
}

export default ArticleDetailsPage