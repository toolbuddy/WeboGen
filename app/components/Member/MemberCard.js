/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Button, Card, Icon, Image, Item, Modal, Label, List } from 'semantic-ui-react';

/* Import components */
import Title from '../Title';

/**
 * @class MemberCard
 * @extends {React.Component}
 */
class MemberCard extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.detail) {
            return (
                <Card 
                    raised 
                    style={{ 
                        margin: '1em 0.5em 1em' 
                    }}>
                    <Image 
                        src={this.props.img} />
                    <Card.Content>
                        <Modal 
                            trigger={
                                <Button 
                                    circular
                                    color='facebook'
                                    compact
                                    floated='right'
                                    icon='info circle'
                                    size='tiny' />
                            }>
                            <Modal.Header>
                                <Title
                                    as='h2'
                                    icon=''
                                    title_en={this.props.name_en}
                                    title_ch={this.props.name_ch} />
                            </Modal.Header>
                            <Modal.Content image>
                                <Image 
                                    wrapped
                                    rounded
                                    size='medium' 
                                    src={this.props.img} />
                                <Modal.Description>
                                    <Title
                                        as='h3'
                                        icon='info circle'
                                        title_en='About'
                                        title_ch='關於' />
                                    <Item>{ this.props.about }</Item>
                                    <List 
                                        relaxed
                                        selection
                                        style={{ 
                                            color: "#3e588f" 
                                        }}>
                                        <List.Item>
                                            <List.Icon 
                                                name='mail' 
                                                size='large' 
                                                verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header 
                                                    style={{ 
                                                        color: '#2c3e50' 
                                                    }}>電子信箱</List.Header>
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
                                        <List.Item>
                                            <List.Icon 
                                                name='github' 
                                                size='large' 
                                                verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header 
                                                    style={{ 
                                                        color: '#2c3e50' 
                                                    }}>GitHub</List.Header>
                                                <List.Description>
                                                    {
                                                        <a 
                                                            href={this.props.github}
                                                            target="_blank">
                                                            { 
                                                                this.props.github 
                                                            }
                                                        </a>
                                                    }
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Card.Header>
                            <Title
                                as='h3'
                                icon=''
                                title_en={this.props.name_en}
                                title_ch={this.props.name_ch} />
                        </Card.Header>
                        <Card.Description>
                            <List>
                                <List.Item>
                                    <List.Icon 
                                        name='student' />
                                    <List.Content>{ this.props.inst }</List.Content>
                                </List.Item>
                            </List>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content 
                        extra 
                        textAlign='right'>
                        <Icon 
                            name='checked calendar' />{ 'Joined in ' + this.props.join }
                    </Card.Content>
                </Card>
            );
        } else {
            return (
                <Card 
                    raised 
                    style={{ 
                        margin: '1em 0.5em 1em' 
                    }}>
                    <Image 
                        src={this.props.img} />
                    <Card.Content>
                        <Card.Header>
                            <Title
                                as='h3'
                                icon=''
                                title_en={this.props.name_en}
                                title_ch={this.props.name_ch} />
                        </Card.Header>
                        <Card.Description>
                            <List>
                                <List.Item>
                                    <List.Icon 
                                        name='student' />
                                    <List.Content>{ this.props.inst }</List.Content>
                                </List.Item>
                            </List>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content 
                        extra 
                        textAlign='right'>
                        <Icon 
                            name='checked calendar' />{ 'Joined in ' + this.props.join }
                    </Card.Content>
                </Card>
            );
        }
    }
}

/* Export module */
export default MemberCard;