import React from 'react';
import {Link} from 'react-router';

const getFilterPath = (filter) => {
    return filter === 'all' ? '/' : filter;
};

const FilterLink = ({filter, children}) => (
    <Link to={getFilterPath(filter)}
          activeStyle={{
              textDecoration: 'none',
              color: 'black'
          }}
    >
        {children}
    </Link>
);

export default FilterLink;