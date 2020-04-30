import React, { Component } from 'react';
import Header from "./header/Header";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main className="content">
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;
