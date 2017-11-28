/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Icon, Item } from 'semantic-ui-react';

/**
 * @class CoursesAbout
 * @extends {React.Component}
 */
class CoursesAbout extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Item.Group 
                style={{ 
                    color: "#2c3e50", 
                    marginLeft: '3em' 
                }}>
                <Item>{ this.props.about }</Item>
                <Item>
                    <Icon 
                        name='external' />
                    <a href={this.props.website}>課程網站</a>
                </Item>
            </Item.Group>
        );
    }
}

/* Export module */
export default CoursesAbout;