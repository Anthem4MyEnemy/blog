import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import "./singlePage.css";

const SinglePage = () => {
    return (
        <div className="single">
            {/* post */}
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default SinglePage
