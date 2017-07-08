import React from 'react';

import Navbar from './Navbar.jsx';
import PostContainer from './PostContainer.jsx';

export default class App extends React.Component {

    render() {

        return (

            <div>
                <Navbar />
                <div className="container">
                    <h1>conga.js v2</h1>
                </div>
                <PostContainer />
            </div>

        );
    }

}
