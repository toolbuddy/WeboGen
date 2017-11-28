/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Image, Segment } from 'semantic-ui-react';

/**
 * @class HomeBanner
 * @extends {React.Component}
 */
class HomeBanner extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Image src='Banner/home.png' />
        );
    }
}

/* Export module */
export default HomeBanner;