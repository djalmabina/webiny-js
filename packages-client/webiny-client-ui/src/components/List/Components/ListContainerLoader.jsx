import React from 'react';
import { createComponent } from 'webiny-client';

class ListContainerLoader extends React.Component {
    render() {
        if (this.props.render) {
            return this.props.render.call(this);
        }

        if (!this.props.show) {
            return null;
        }

        if (typeof this.props.children === "function") {
            return this.props.children();
        }

        const { Loader } = this.props;
        return <Loader/>;
    }
}

export default createComponent(ListContainerLoader, { modules: ['Loader'] });