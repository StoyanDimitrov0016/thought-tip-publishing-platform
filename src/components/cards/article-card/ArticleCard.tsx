import React from "react";
import { Link } from "react-router-dom";
import "./article-card.styles.css";

interface IArticlePreviewEntry {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  hook: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    userPartial: {
      id: string;
      username: string;
      verificationLevel: number;
    };
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  topics: {
    id: string;
    name: string;
    slug: string;
  }[];
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  readingTime: number;
  charge: number;
  discussion: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ArticleCardProps {
  article: IArticlePreviewEntry;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const {
    title,
    slug,
    thumbnail,
    hook,
    author,
    category,
    topics,
    tags,
    readingTime,
    charge,
    createdAt,
    updatedAt,
  } = article;

  const isUpdated = new Date(updatedAt).getTime() !== new Date(createdAt).getTime();

  return (
    <div className="article-card">
      {/* Thumbnail */}
      <Link to={`/articles/@${author.userPartial.username}/${slug}`} className="thumbnail">
        <img src={thumbnail} alt={title} />
      </Link>

      {/* Content */}
      <div className="content">
        {/* Meta Info */}
        <div className="meta">
          {/* Author */}
          <div className="author">
            <Link to={`/authors/${author.userPartial.username}`} className="author-link">
              {author.firstName && author.lastName ? (
                <span className="names">{`${author.firstName} ${author.lastName}`}</span>
              ) : (
                <span className="username">{`@${author.userPartial.username}`}</span>
              )}
            </Link>
          </div>

          <span className="reading-time">{readingTime} min read</span>
          {charge > 0 && <span className="paywalled">Paywalled</span>}
          <span className="created-at">{new Date(createdAt).toLocaleDateString()}</span>
          {isUpdated && (
            <span className="updated-at">
              Latest Revision: {new Date(updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="title">
          <Link to={`/articles/@${author.userPartial.username}/${slug}`}>{title}</Link>
        </h2>

        {/* Hook */}
        <p className="hook">
          <Link to={`/articles/@${author.userPartial.username}/${slug}`}>{hook}</Link>
        </p>

        {/* Segmentation */}
        <div className="segmentation">
          {/* Category Badge */}
          <div className="category">
            <span className="badge category-badge">{category.name}</span>
          </div>

          {/* Topic Badges */}
          <div className="topics">
            {topics.map((topic) => (
              <span key={topic.id} className="badge topic-badge">
                {topic.name}
              </span>
            ))}
          </div>

          {/* Tag Badges */}
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag.id} className="badge tag-badge">
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
