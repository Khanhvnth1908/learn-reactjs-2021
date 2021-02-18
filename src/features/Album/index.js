import React, { useState } from "react";
import PropTypes from "prop-types";
import AblumList from "./AbumList";

Album.propTypes = {};

function Album(props) {

    const [album,setAlbum] = useState([
       {
           image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/c/f/e/9cfea37df026b64a11262628c3aab2fb.jpg",
           des: "Nhạc phim Hoa Ngữ mới nhất",
       }, 
       {
           image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/5/4/0/7540fbc87a23ac44fb5b00b08db6a4b0.jpg",
           des: "Nhạc trẻ gây nghiện",
       }, 
       {
           image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/f/f/5/1ff5fe34c2f7617f74432c4a8613b8e8.jpg",
           des: "Đỉnh cao Trending",
       }, 
       {
           image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/8/4/9/2849a5b50dd6cda9697ecbe3534ff8aa.jpg",
           des: "Today's R&B Hits",
       }, 
    ]);

  return (
    <div>
      <AblumList albumlist={album} />
    </div>
  );
}

export default Album;
