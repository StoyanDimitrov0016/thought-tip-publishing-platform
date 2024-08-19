import "./article-feed-container.styles.css";
import { IArticlePreview } from "../../types/IArticlePreview";
import ArticlePreviewCard from "../article-preview-card/ArticlePreviewCard";

const ArticleFeedContainer = ({ articles }: { articles: IArticlePreview[] }) => {
  return (
    <div className="articles-feed">
      {articles.map((article) => (
        <ArticlePreviewCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleFeedContainer;
