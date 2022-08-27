import { PageHeader } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Post() {
  return (
    <div className="container">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Post"
        extra={[<Link to="/">Home</Link>, <Link to="/post">Post</Link>]}
      />
      <span>Post</span>
    </div>
  );
}

export default Post;
