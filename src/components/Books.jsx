import React from 'react';
import PropTypes from 'prop-types';

const Books = () => {
  return (
    <div>Books</div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Books;
