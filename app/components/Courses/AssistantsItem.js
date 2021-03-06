/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, List } from 'semantic-ui-react';

/* Import components */
import Title from '../Title';

/**
 * @class AssistantsItem
 * @extends {React.Component}
 */
class AssistantsItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Card 
                color='facebook' 
                raised>
                <Card.Content>
                    <Card.Header 
                        style={{ 
                            color: "#203562" 
                        }}>
                        <Title
                            as='h3'
                            icon=''
                            title_en={this.props.name_en}
                            title_ch={this.props.name_ch} />
                    </Card.Header>
                    <Card.Description>
                        <List 
                            style={{ 
                                color: "#3e588f" 
                            }}>
                            <List.Item>
                                <List.Icon 
                                    name='envelope' />
                                <List.Content>
                                    {
                                        <a 
                                            href={"mailto:" + this.props.email}>
                                            { 
                                                this.props.email 
                                            }
                                        </a>
                                    }
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon 
                                    name='wait' />
                                <List.Content>{ this.props.time }</List.Content>
                            </List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>       
        );
    }
}

/* Export module */
export default AssistantsItem;