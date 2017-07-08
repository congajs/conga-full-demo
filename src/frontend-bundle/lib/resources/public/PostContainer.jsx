import React from 'react';

export default class PostContainer extends React.Component {

    constructor() {
        super();
        this.posts = [];
    }

    componentDidMount() {

        fetch('/api/posts').then((response) => {
            console.log(response);
        });
    }

    render() {

        return (
            <div>

            </div>
        );
    }

}
