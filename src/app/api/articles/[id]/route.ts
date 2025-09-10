import { connectDB } from "@/lib/mongodb";
import ArticleModel from "@/models/Article";
import CommentModel from "@/models/Comment";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}: {params: Promise<{id: string}>}) {

    try {
        const {id} = await params

        if(!mongoose.Types.ObjectId.isValid(id)){
           return NextResponse.json({message: "invalid article id format"}, {status: 400})
        }

        await connectDB()

        const [article, comments] = await Promise.all([
            ArticleModel.findById(id).lean(),
            CommentModel.find({articleId: id}).sort({createdAt: -1}).lean()
        ])

        if(!article){
           return NextResponse.json({message: "Article not found"}, {status: 404})
        }

        const responseData = {
            ...article,
            comments: comments || []
        }

        return NextResponse.json(responseData, {status: 200})


    } catch (error: unknown) {
        console.error('Error fetching article and comments', error)
        return NextResponse.json({
            message: "Filed to fetch article and comments",
            details: error instanceof Error ? error.message : String(error)

        }, {status: 500})
    }
    


}


export async function DELETE(request:NextRequest, {params}: {params: Promise<{id: string}>}) {
    
    try {
        await connectDB()
        const {id} = await params;
           if(!mongoose.Types.ObjectId.isValid(id)){
           return NextResponse.json({message: "invalid article id format"}, {status: 400})
        }

        const deletedArticle = await ArticleModel.findByIdAndDelete(id);
        if(!deletedArticle){
            return NextResponse.json({message: "Article not found"}, {status: 404})
        }
     return NextResponse.json({message: "Article Deleted Successfully"}, {status: 200})

    } catch (err: unknown) {
            console.error("Failed to delete article:", err);
            if (err instanceof Error) {
                alert(err.message || "An error occurred while deleting the article.");
            } else {
                alert("An error occurred while deleting the article.");
            }
            
        }
}


export async function PUT(req: NextRequest, {params}: {params: Promise<{id: string}>}) {
    try {
        await connectDB();
        const {id} = await params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: "Invalid article ID format."}, {status: 400})
        }

        const body = await req.json();

        const updatePost = await ArticleModel.findByIdAndUpdate(id, body, {new: true});
        if(!updatePost) {
            return NextResponse.json({message: "Article not found."}, {status: 404})
        }
        return NextResponse.json({message: "Article updated successfully."}, {status: 200})
    } catch (error: unknown) {
         console.error(`Error deleting article`, error);
            return NextResponse.json({
                message: "Failed to delete article.",
                details: error instanceof Error ? error.message : String(error)
            }, {
                status: 500
            })   
    }
}