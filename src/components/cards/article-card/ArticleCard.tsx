import "./article-card.styles.css";
import { Link } from "react-router-dom";
import { IArticleAggregatedPreview } from "../../../types/entries/article";
import { FaBookmark, FaLock, FaRegBookmark } from "react-icons/fa6";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import {
  getAuthorPath,
  getAvatarPath,
  getArticlePath,
  getThumbnailPath,
} from "../../../utils/path";
import { checkIsUpdated, getPublishedDate, parseReadingTimeDuration } from "../../../utils/time";

// TODO: Fix interface length
type ArticlePreview = IArticleAggregatedPreview;

// Article Card Component:
export default function ArticleCard({ article }: { article: ArticlePreview }) {
  const { author, statistics, interactions } = article;

  const authorPath = getAuthorPath(author.id);
  const avatarPath = getAvatarPath(author.avatar);

  const articlePath = getArticlePath(article.id);
  const thumbnailPath = getThumbnailPath(article.thumbnail);

  const publishedDate = getPublishedDate(article.createdAt);
  const isUpdated = checkIsUpdated(article.createdAt, article.updatedAt);
  const readingTimeDuration = parseReadingTimeDuration(article.readingTime);

  return (
    <article className="article-card">
      {/* Header */}
      <header className="article-header container">
        <div className="author-wrapper">
          <div className="avatar-container">
            <Link to={authorPath}>
              <img src={avatarPath} alt={`${author.username}'s profile pic`} />
            </Link>
          </div>
          <div className="credentials-wrapper">
            <Link to={authorPath}>
              <span className="username">@{author.username}</span>
            </Link>
            <Link to={authorPath}>
              <span className="names">
                {author.firstName} {author.lastName}
              </span>
            </Link>
          </div>
        </div>

        <div className="meta-container">
          <div className="meta-group">
            <span>{isUpdated && "Updated"}</span>
          </div>
          <div className="meta-group">
            <span>{readingTimeDuration}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="article-content-container">
        <div className="article-content-wrapper">
          <main className="article-main-wrapper">
            <Link to={articlePath}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </Link>
          </main>
          <aside className="thumbnail-wrapper">
            <div className="thumbnail-container">
              <Link to={articlePath}>
                <img src={thumbnailPath} alt={article.title} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="article-footer container">
        <div className="footer-meta">
          <div className="meta-group">{article.charge > 0 && <FaLock aria-hidden="true" />}</div>
          <div className="meta-group">
            <time dateTime={article.createdAt}>{publishedDate}</time>
          </div>
        </div>

        <div className="action-container">
          <div className="action-wrapper">
            <div className="action-group">
              <span>{statistics.commentsCount}</span>
              <FaRegCommentAlt aria-hidden="true" />
            </div>
            <div className="action-group">
              <span>{statistics.likesCount}</span>
              <button
                className={`like-button ${interactions.hasLiked ? "liked" : ""}`}
                disabled={interactions.canLike === false}
                aria-label="Like article"
              >
                {interactions.hasLiked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
            </div>
            <div className="action-group">
              <button
                className={`bookmark-button ${interactions.hasBookmarked ? "bookmarked" : ""}`}
                disabled={interactions.canBookmark === false}
                aria-label="Bookmark article"
              >
                {interactions.hasBookmarked ? <FaBookmark /> : <FaRegBookmark />}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
