import MostRecentSection from '@/components/sections/home/MostRecentSection'
import { Button } from '@/components/ui/button'
import { IArticle } from '@/models/Article'
import Link from 'next/link'
import React from 'react'


async function getArticlesByCategory(categoryName: string): Promise<IArticle[]> {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/articles?category=${categoryName}`

        const res = await fetch (apiUrl, {
            cache: 'no-store'
        })

        if(!res.ok){
            throw new Error("Failed to Search results")
        }

        return res.json()


    } catch (error) {
        console.error('error searching articles', error)
        return []
    }
}

const CategoryPage = async( {params}: {params: Promise<{categoryName: string}>} ) => {


const { categoryName } = await params;

// console.log(categoryName)

const decodedCategoryName = decodeURIComponent(categoryName)


const articles = await getArticlesByCategory(decodedCategoryName) 

// console.log(articles)


  return (
     <div className="min-h-screen">
        <div className="container  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg font-semibold text-primary">Category</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 capitalize">
              {decodedCategoryName}
            </h1>
          </div>
  
          {articles.length > 0 ? (
            <div className="">
              <MostRecentSection
                mostRecentArticles={articles[0] ? [articles[0]] : []} 
                allMostRecentGridArticles={articles.slice(1)} 
                popularArticles={articles.slice(1, 4)} 
            />
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-700">No articles found</h2>
              <p className="text-gray-500 mt-2">There are no articles in the &quot; {decodedCategoryName} &quot;category yet.</p>
             <Button variant="secondary"
              className=" border mt-6 border-gray-300 rounded-md bg-primary text-white transition-colors cursor-pointer">
               <Link href="/">
                Back to Home
              </Link>
             </Button>
            </div>
          )}
        </div>
      </div>
  )
}

export default CategoryPage