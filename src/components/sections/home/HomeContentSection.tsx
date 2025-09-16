import SectionTitle from "@/components/ui/SectionTitle";
import { IArticle } from "@/models/Article";
import React from "react";
import ArticleCardPrimary from "./ArticleCardPrimary";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import ArticleCardSecondary from "./ArticleCardSecondary";
import TrendingArticleItem from "./TrendingArticleItem";
import { Button } from "@/components/ui/button";

interface HomeContentSectionProps {
  editorPicksPrimary?: IArticle;
  editorPicksSecondary: IArticle[];
  trendingArticles: IArticle[];
}

const HomeContentSection = ({
  editorPicksPrimary,
  editorPicksSecondary,
  trendingArticles,
}: HomeContentSectionProps) => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* left side */}
        <div className="w-full md:w-9/12 px-4 mb-10 md:mb-0">
          <SectionTitle title="Editor's Picks" />
          <div className="flex flex-col md:flex-row -mx-4">
            {/* main featured article */}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {editorPicksPrimary && (
                <ArticleCardPrimary article={editorPicksPrimary} />
              )}
              <Button
                variant="secondary"
                className=" lg:mt-5 border border-gray-300 text-gray-800 rounded-md hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {" "}
                <Link href="/articles">All Featured</Link>
              </Button>
            </div>

            {/* small featured article*/}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {editorPicksSecondary &&
                editorPicksSecondary.map((article, index) => (
                  <ArticleCardSecondary key={index} article={article} />
                ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-3/12 px-4">
          <SectionTitle title="Trending" />
          <ol className="list-none p-0">
            {trendingArticles.map((article, index) => (
              <TrendingArticleItem
                key={index}
                article={article}
                index={index}
              />
            ))}
          </ol>
          <Link
            href="/articles"
            className="inline-flex items-center text-sm uppercase text-primary hover:underline transition-colors mt-6"
          >
            See all Articles
            <FaArrowRight className="ml-2" size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContentSection;
