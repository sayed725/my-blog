import FeaturedSliderSection from "@/components/sections/home/FeaturedSliderSection";
import GridAndAds from "@/components/sections/home/GridAndAds";
import HomeContentSection from "@/components/sections/home/HomeContentSection";
import { getHomePageData } from "@/lib/data";


export default async function Home() {

 
   const {articles} = await getHomePageData()


   const { editorPicksPrimary, editorPicksSecondary, trendingArticles, sliderArticles, gridArticles, mostRecentArticles, allMostRecentGridArticles, popularArticles   } = articles


  //  console.log(articles)


  return (
    <div className="blog-container">

      {
        editorPicksPrimary && editorPicksSecondary.length > 0 && trendingArticles.length > 0 && (
          <HomeContentSection
          editorPicksPrimary={editorPicksPrimary}
          editorPicksSecondary={editorPicksSecondary}
          trendingArticles={trendingArticles}
          />
        )
      }

      {
        sliderArticles.length > 0 && <FeaturedSliderSection articles={sliderArticles}/>
      }

      {
        gridArticles.length > 0 && <GridAndAds articles={gridArticles}/>
      }
     
    </div>
  );
}
