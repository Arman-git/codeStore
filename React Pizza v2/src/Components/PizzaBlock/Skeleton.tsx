import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="76" y="170" rx="0" ry="0" width="280" height="0" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="320" rx="24" ry="24" width="280" height="88" />
    <rect x="0" y="424" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="415" rx="10" ry="10" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
