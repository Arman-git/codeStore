import React from "react";

const PopulatPosts = ({ post }) => {
  return (
    <div className="bg-gray-600 m-1">
      <div className="flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-white">
        {post.title}
      </div>
    </div>
  );
};

export default PopulatPosts;
