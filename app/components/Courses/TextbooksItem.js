/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List } from 'semantic-ui-react';

/**
 * @class TextbooksItem
 * @extends {React.Component}
 */
class TextbooksItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Item>
                <Item.Image 
                    size='small' 
                    src={this.props.img} />
                <Item.Content>
                    <Item.Header 
                        style={{ 
                            color: "#2c3e50" 
                        }}>{ this.props.name }</Item.Header>
                    <Item.Meta 
                        style={{ 
                            color: "#2c3e50" 
                        }}>
                        <i>{ this.props.authors }</i>
                    </Item.Meta>
                    <Item.Description>
                        <List 
                            bulleted 
                            style={{ 
                                color: "#2c3e50" 
                            }}>
                            <List.Item>
                                <List.Content>{ this.props.publish }</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    { 
                                        'ISBN: ' + this.props.isbn 
                                    }
                                </List.Content>
                            </List.Item>
                        </List>
                    </Item.Description>
                </Item.Content>
            </Item>
        );
    }
}

/* Export module */
export default TextbooksItem;