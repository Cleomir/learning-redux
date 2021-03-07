import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        {post.content.substring(0, 100)}
        <br />
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};

export default PostExcerpt;
