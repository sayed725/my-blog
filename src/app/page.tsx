import { getHomePageData } from "@/lib/data";


export default async function Home() {

 
   const {articles} = await getHomePageData()


   console.log(articles)


  return (
    <div>
      <h1 className="text-3xl font-bold underline mt-20">Hello, from Next.js!</h1>
    </div>
  );
}
