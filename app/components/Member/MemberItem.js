/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Icon, Image, Item, Label, List } from 'semantic-ui-react';

/* Import components */
import Title from '../Title';

/**
 * @class MemberItem
 * @extends {React.Component}
 */
class MemberItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.type === 'past') {
            return (
                <Item>
                    <Item.Image size='small' src={this.props.img} />
                    <Item.Content>
                        <Item.Header>
                            <Title
                                as='h3'
                                icon=''
                                title_en={this.props.name_en}
                                title_ch={this.props.name_ch} />
                        </Item.Header>
                        <Item.Description>
                           <List 
                                bulleted
                                relaxed>
                                <List.Item>
                                    <List.Content>
                                        <List.Header style={{ color: '#2c3e50' }}>就讀系所</List.Header>
                                        <List.Description>{ this.props.inst }</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Item.Description>
                        <Item.Extra
                            style={{
                                position: 'relative',
                                top: '25%'
                            }}>
                            <Label
                                style={{
                                    backgroundColor: '#3e588f',
                                    borderColor: '#3e588f',
                                    color: '#ffffff'
                                }}>
                                <Icon name='checked calendar' />
                                <Label.Detail>{ this.props.date }</Label.Detail>
                            </Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            );
        } else if (this.props.type === 'alumni') {
            return (
                <Item>
                    <Item.Image size='small' src={this.props.img} />
                    <Item.Content>
                        <Item.Header>
                            <Title
                                as='h3'
                                icon=''
                                title_en={this.props.name_en}
                                title_ch={this.props.name_ch} />
                        </Item.Header>
                        <Item.Description>
                            <List 
                                bulleted
                                relaxed>
                                <List.Item>
                                    <List.Content>
                                        <List.Header style={{ color: '#2c3e50' }}>論文題目</List.Header>
                                        <List.Description>{ this.props.thesis }</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header style={{ color: '#2c3e50' }}>畢業出路</List.Header>
                                        <List.Description>{ this.props.outcomes }</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Item.Description>
                        <Item.Extra
                            style={{
                                position: 'relative',
                                top: '7.5%'
                            }}>
                            <Label 
                                basic 
                                horizontal={ true }
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderColor: '#3e588f',
                                    color: '#3e588f'
                                }}>
                                <Icon name='student' />
                                <Label.Detail>{ this.props.start + ' - ' + this.props.end }</Label.Detail>
                            </Label>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            );
        }
    }
}

/* Export module */
export default MemberItem;