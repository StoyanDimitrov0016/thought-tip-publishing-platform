import "./article-preview-card.styles.css";
import { IArticlePreview } from "../../types/IArticlePreview";
import { Link } from "react-router-dom";

import addToWatchLaterIcon from "/src/assets/add-svgrepo-com.svg";

interface ArticlePreviewCardProps {
  article: IArticlePreview;
}

const saveArticle = async (articleId: string) => {
  // Logic to save article for later
};

const ArticlePreviewCard = ({ article }: ArticlePreviewCardProps) => {
  const redirectToCurrentArticleLink = `/articles/${article.id}`;
  const redirectToAuthorPageLink = `/authors/${article.author.id}`;
  const formattedDate = new Date(article.publishedDate).toLocaleDateString();

  return (
    <div className="preview-card">
      <div className="preview-card-left">
        {/* Author Information */}
        <div className="author-info">
          <Link to={redirectToAuthorPageLink} className="author-link">
            <img
              src={article.author.profilePicture}
              alt={`${article.author.firstName} ${article.author.lastName}`}
              className="author-photo"
            />
            <div className="author-name">
              <span className="author-first-name">{article.author.firstName}</span>
              <span className="author-last-name">{article.author.lastName}</span>
            </div>
            <span className="author-username">@{article.author.username}</span>
            <span className="author-rank">{article.author.rank}</span>
          </Link>
        </div>

        {/* Article Preview Content */}
        <Link to={redirectToCurrentArticleLink}>
          <div className="preview-content">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-preview-text">{article.previewText}</p>
          </div>
        </Link>

        {/* Article Metadata */}
        <div className="article-metadata">
          <span className="reading-time">{article.averageReadingTime} min read</span>
          <span className="published-date">Published on: {formattedDate}</span>
          <span className="likes-count">{article.likesCount} Likes</span>
        </div>

        {/* Article Tags */}
        <div className="article-tags">
          {article.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Save for Later Action */}
        <div className="article-actions">
          <button
            onClick={() => saveArticle(article.id)}
            className="add-later-button"
            aria-label="Add this article to watch later"
          >
            <img className="icon" src={addToWatchLaterIcon} alt="Add to watch later" /> Add to watch
            later
          </button>
        </div>
      </div>

      {/* Article Thumbnail */}
      <Link to={redirectToCurrentArticleLink} className="preview-card-right">
        <img src={article.thumbnail} alt={article.title} className="article-thumbnail" />
      </Link>
    </div>
  );
};

export default ArticlePreviewCard;
