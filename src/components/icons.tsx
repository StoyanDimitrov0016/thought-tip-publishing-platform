import { IconBaseProps } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import {
  FaBookmark,
  FaEdit,
  FaHeart,
  FaRegBookmark,
  FaRegCommentAlt,
  FaRegHeart,
  FaTrash,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { MdIosShare } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

// Bookmark Icons
export const BookmarkIcon = (props: IconBaseProps) => <FaBookmark {...props} />;
export const RemoveBookmarkIcon = (props: IconBaseProps) => <FaRegBookmark {...props} />;

// Like Icons
export const LikeIcon = (props: IconBaseProps) => <FaRegHeart {...props} />;
export const RemoveLikeIcon = (props: IconBaseProps) => <FaHeart {...props} />;

// Follow Icons
export const FollowIcon = (props: IconBaseProps) => <FaUserPlus {...props} />;
export const RemoveFollowIcon = (props: IconBaseProps) => <FaUserMinus {...props} />;

// Action Icons
export const PublishIcon = (props: IconBaseProps) => <MdIosShare {...props} />;
export const SendIcon = (props: IconBaseProps) => <LuSendHorizontal {...props} />;
export const EditIcon = (props: IconBaseProps) => <FaEdit {...props} />;
export const DeleteIcon = (props: IconBaseProps) => <FaTrash {...props} />;

// UI Icons
export const HomeIcon = (props: IconBaseProps) => <AiFillHome {...props} />;
export const AvatarIcon = (props: IconBaseProps) => <RxAvatar {...props} />;
export const CommentIcon = (props: IconBaseProps) => <FaRegCommentAlt {...props} />;
