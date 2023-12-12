import React from "react";

const PostItem = () => {
  return (
    <div class="flex flex-col basis-1/4 flex-grow">
      <div>IMAGE</div>
      <div class="flex justify-between items-center pt-2">
        <div class="text-xs text-white opacity-50">USERNAME</div>
        <div class="text-xs text-white opacity-50">DATA</div>
      </div>
      <div class="text-white text-xl">POST TITLE</div>
      <p class="text-white opacity-60 text-xs pt-4">POST TEXT</p>
    </div>
  );
};

export default PostItem;
