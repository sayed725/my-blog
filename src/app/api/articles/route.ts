import { connectDB } from "@/lib/mongodb";
import { IArticle } from "@/models/Article";
import { FilterQuery } from "mongoose";
import { NextRequest } from "next/server";

export async function GET( request:NextRequest) {
    await connectDB();

    const {searchParams} = request.nextUrl

    const query = searchParams.get('q')
    const category = searchParams.get('category')

    const filter: FilterQuery<IArticle> = {}

    if(category){
        filter['meta.category'] = { $regex: `^${category}`, $options: 'i'
        }
    }

    if(query){
        filter.$or = [
            {title: { $regex: query, $options: 'i' }},
            {excerpt: { $regex: query, $options: 'i' }},
            {caption: { $regex: query, $options: 'i' }},
            {
                'meta.author': { $regex: query, $options: 'i' } 
            }
            
        ]
    }

    const pageParam = searchParams.get('page')
    const limitParam = searchParams.get('limit')

    if(pageParam && limitParam){
        const page = parseInt(pageParam)
        const limit = parseInt(limitParam)
    }


}