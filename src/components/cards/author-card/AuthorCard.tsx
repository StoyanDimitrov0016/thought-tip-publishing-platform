import { Link } from "react-router-dom";
import "./author-card.styles.css";
import { Author } from "../../../types/entities/user";
import FollowButton from "../../action-buttons/follow-button";

interface AuthorCardProps {
  author: Author;
  hasFollowed: boolean;
  canFollow: boolean;
}

const AuthorCard = ({ author, hasFollowed, canFollow }: AuthorCardProps) => {
  const { id, avatar, firstName, lastName, username, createdAt } = author;

  const joinedDate = new Date(createdAt).toLocaleDateString();
  const defaultProfilePicture =
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

  return (
    <section className="author-card" aria-labelledby={`author-${username}`}>
      <div className="picture">
        <Link to={`/authors/${id}`} aria-label={`Visit ${username}'s profile`}>
          <img
            src={avatar || defaultProfilePicture}
            alt={`${firstName || lastName || username}'s profile picture`}
            className="profile-picture"
          />
        </Link>
      </div>

      <div className="info">
        <Link
          to={`/authors/${id}`}
          className="author-link"
          aria-label={`Visit ${
            firstName && lastName ? `${firstName} ${lastName}` : `@${username}`
          }'s profile`}
        >
          {firstName && lastName ? (
            <div className="author-names-container">
              <h2 className="author-full-name">{`${firstName} ${lastName}`}</h2>
              <span className="author-username">@{username}</span>
            </div>
          ) : (
            <h2 className="author-username-large">@{username}</h2>
          )}
        </Link>
        <p className="author-joined">Thinker since {joinedDate}</p>
      </div>

      <div className="action">
        <FollowButton
          authorId={author.id}
          canFollow={author.actions.canFollow}
          hasFollowed={author.actions.hasFollowed}
        />
      </div>
    </section>
  );
};

export default AuthorCard;
