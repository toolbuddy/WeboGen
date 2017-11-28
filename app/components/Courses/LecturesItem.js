/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Icon, Item, List } from 'semantic-ui-react';

/**
 * @class LecturesItem
 * @extends {React.Component}
 */
class LecturesItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <List.Item>
                <List.Content>
                    <List.Header>{ 'Lecture ' + this.props.lec }</List.Header>
                    <List.Description>{ this.props.title }</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

/* Export module */
export default LecturesItem;