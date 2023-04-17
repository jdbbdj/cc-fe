import React from "react";
import { ProductSections, VideoWrapper } from "./styled";

const Video = () => {
  return (
    <ProductSections>
      <VideoWrapper>
        <video src={"/video/video.mp4"} autoPlay loop muted />
      </VideoWrapper>
    </ProductSections>
  );
};

export default Video;
