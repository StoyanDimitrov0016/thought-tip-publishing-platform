import { Link } from "react-router-dom";
import "./author-card.styles.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { followAuthor, unfollowAuthor } from "../../../api/author";

interface AuthorCardProps {
  id: string;
  username: string;
  verified: boolean;
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  createdAt: string;
  isFollowed: boolean;
}

import { useState } from "react";

const AuthorCard = ({
  id,
  username,
  verified,
  firstName,
  lastName,
  profilePicture,
  createdAt,
  isFollowed: initialIsFollowed,
}: AuthorCardProps) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(initialIsFollowed);

  const handleFollow = async () => {
    try {
      await followAuthor(id);
      setIsFollowed(true);
      console.log(`Followed ${username} successfully`);
    } catch (error) {
      console.error(`Failed to follow ${username}:`, error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await unfollowAuthor(id);
      setIsFollowed(false);
      console.log(`Unfollowed ${username} successfully`);
    } catch (error) {
      console.error(`Failed to unfollow ${username}:`, error);
    }
  };

  const joinedDate = new Date(createdAt).toLocaleDateString();
  const defaultProfilePicture =
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";

  return (
    <section className="author-card" aria-labelledby={`author-${username}`}>
      <div className="picture">
        <Link to={`/authors/@${username}`} aria-label={`Visit ${username}'s profile`}>
          <img
            src={profilePicture || defaultProfilePicture}
            alt={`${firstName || lastName || username}'s profile picture`}
            className="profile-picture"
          />
        </Link>
      </div>

      <div className="info">
        <Link
          to={`/authors/@${username}-${id}`}
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
        <p className="author-meta">
          Status:
          {verified && (
            <span className="badge verified-badge">
              <RiVerifiedBadgeFill />
            </span>
          )}
        </p>
        <p className="author-joined">Thinker since {joinedDate}</p>
      </div>

      <div className="action">
        {isFollowed ? (
          <button
            className="button unfollow-button"
            aria-label={`Unfollow ${username}`}
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
        ) : (
          <button
            className="button follow-button"
            aria-label={`Follow ${username}`}
            onClick={handleFollow}
          >
            Follow
          </button>
        )}
      </div>
    </section>
  );
};

export default AuthorCard;
