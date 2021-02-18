import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
    subjectItem: PropTypes.object
};

TodoItem.defaultProps = {
    subjectItem: null
}

function TodoItem(props) {

    const {subjectItem} = props;
    return (
        <div>
            <p>{subjectItem.Name}</p>
        </div>
    );
}

export default TodoItem;