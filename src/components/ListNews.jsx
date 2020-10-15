import React from 'react';
import MyNew from './MyNew';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
    if (!news) return null;
    
    return (    
    <div className="row">
        {news.map(mynew => (
            <MyNew 
                key={mynew.url}
                mynew={mynew}
            />
        ))}
        
    </div>
)};
ListNews.propTypes = {
    news: PropTypes.array.isRequired
} 
export default ListNews;