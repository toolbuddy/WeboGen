/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/**
 * @class AdviserAboutList
 * @extends {React.Component}
 */
class AdviserAboutList extends React.Component {
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
                animated
                bulleted
                selection
                style={{
                    paddingLeft: '0.5em'
                }}>
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#203562' }}>辦公室</List.Header>
                        <List.Description>{ this.props.office }</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#203562' }}>電話</List.Header>
                        <List.Description>{ this.props.phone }</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#203562' }}>傳真</List.Header>
                        <List.Description>{ this.props.fax }</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#203562' }}>電子信箱</List.Header>
                        <List.Description>
                            { 
                                <a 
                                    href={"mailto:" + this.props.email}>
                                    { 
                                        this.props.email 
                                    }
                                </a> 
                            }
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        );
    }
}

export default AdviserAboutList;