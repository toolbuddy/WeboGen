/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Label, List } from 'semantic-ui-react';

/**
 * @class ResourceDigitalLibList
 * @extends {React.Component}
 */
class ResourceListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.type === 'download') {
            return (
                <List.Item>
                    <List.Icon
                        name={this.props.icon}
                        style={{ 
                            color: "#3e588f" 
                        }} ></List.Icon>
                    <List.Content>
                        <List.Header 
                            as='a'>
                            <a 
                                href={this.props.link} 
                                download 
                                style={{
                                    fontWeight: 'bold'
                                }}>{ this.props.name } </a>
                        </List.Header>
                    </List.Content>
                </List.Item>
            );
        } else if (this.props.type === 'link') {
            return (
                <List.Item>
                    <List.Icon
                        name={this.props.icon}
                        style={{ 
                            color: "#3e588f" 
                        }} ></List.Icon>
                    <List.Content>
                        <List.Header 
                            as='a'>
                            <a 
                                href={this.props.link}
                                style={{
                                    fontWeight: 'bold'
                                }}>{ this.props.name } </a>
                        </List.Header>
                    </List.Content>
                </List.Item>
            );
        }
    }
}

/* Export module */
export default ResourceListItem;