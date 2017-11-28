/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List } from 'semantic-ui-react';

/**
 * @class ScheduleClassItem
 * @extends {React.Component}
 */
class ScheduleClassItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <List 
                style={{ 
                    color: "#2c3e50" 
                }}>
                <List.Item>
                    <List.Icon 
                        name='alarm outline' />
                    <List.Content>
                        { 
                            this.props.time + ', ' + this.props.week 
                        }
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon 
                        name='alarm marker' />
                    <List.Content>{ this.props.place }</List.Content>
                </List.Item>
            </List>
        );
    }
}

/* Export module */
export default ScheduleClassItem;