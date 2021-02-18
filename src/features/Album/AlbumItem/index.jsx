import React from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  albumItem: PropTypes.object,
};

AlbumItem.defaultProps = {
  albumItem: null,
};

function AlbumItem(props) {
  const { albumItem } = props;

  return (
    <>
      <img src={albumItem.image} alt="" />
      <p>{albumItem.des}</p>
    </>
  );
}

export default AlbumItem;
