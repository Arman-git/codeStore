import React from "react";

const MainPage = () => {
  return (
    <div class="max-w-[900px] mx-auto py-10">
      <div class="flex justify-between gap-8">
        <div class="flex flex-col gap-10 basis-4/5">POSTS</div>
        <div class="basis-1/5">
          <div class="text-xs uppercase text-white">Популярное:</div>
          POPULAR POSTS
        </div>
      </div>
    </div>
  );
};

export default MainPage;
