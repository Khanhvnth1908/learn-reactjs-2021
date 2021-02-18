import React from "react";
import './style.scss';
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";

AblumList.propTypes = {
    albumlist: PropTypes.array,
};

AblumList.defaultProps = {
    albumlist: null,
}

function AblumList(props) {

    const {albumlist} = props;
  return (
    <div>
      <h1>AblumList</h1>
      <ul className="albumList">
          {albumlist.map(al => (
              <li><AlbumItem albumItem={al}/></li>
          ))};
      </ul>
    </div>
  );
}

export default AblumList;
