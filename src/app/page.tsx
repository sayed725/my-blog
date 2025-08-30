import { connectDB } from "@/lib/mongodb";
import ArticleModel from "@/models/Article";






export default async function Home() {

 
    await connectDB()

    const article = await ArticleModel.find().lean()

    console.log(article)


  return (
    <div>
      <h1 className="text-3xl font-bold underline mt-20">Hello, from Next.js!</h1>
    </div>
  );
}
