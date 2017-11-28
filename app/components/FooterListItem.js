/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List, Label, Icon } from 'semantic-ui-react';

/**
 * @class FooterListItem
 * @extends {React.Component}
 */
class FooterListItem extends React.Component {
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
                <Icon 
                    name={this.props.icon} 
                    style={{ 
                        color: '#c0c5cd' 
                    }} 
                    verticalAlign='middle' />
                <List.Content>
                    <List.Header 
                        as={this.props.as} 
                        style={{ 
                            color: '#c0c5cd' 
                        }}>{ this.props.title }</List.Header>
                    <List.Description 
                        style={{ 
                            color: '#e3e8f8' 
                        }}>{ this.props.detail }</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}

/* Export module */
export default FooterListItem;