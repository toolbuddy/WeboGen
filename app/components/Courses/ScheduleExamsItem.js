/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Header, Icon, Item, Label, List } from 'semantic-ui-react';

/* Import components */
import Title from '../Title';

/**
 * @class ScheduleExamsItem
 * @extends {React.Component}
 */
class ScheduleExamsItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.pass) {
            return (
                <Item style={{ margin: '2em 0 0 2em' }}>
                    <Item.Content>
                        <Item.Header style={{ color: "#2c3e50" }}>
                            <Title as='h5' icon='checked calendar' title_ch={this.props.name_ch} title_en={this.props.name_en} />
                        </Item.Header>
                        <Item.Description style={{ margin: '1em 0 0 3em' }}>
                            <List style={{ color: "#2c3e50" }} ani>
                                <List.Item>
                                    <List.Icon name='time' />
                                    <List.Content>{ this.props.time + ', ' + this.props.week }</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='add to calendar' />
                                    <List.Content>{ this.props.date }</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='marker' />
                                    <List.Content>{ this.props.place }</List.Content>
                                </List.Item>
                            </List>
                        </Item.Description>
                    </Item.Content>
                </Item>
            );
        } else {
            return (
                <Item style={{ margin: '-0.5em 0 0 2em' }}>
                    <Item.Content>
                        <Item.Extra>
                            <Label className='examsLabel' color='red' horizontal pointing='below' size={'tiny'}>注意</Label>
                        </Item.Extra>
                        <Item.Header style={{ color: "#2c3e50" }}>
                            <Title as='h5' icon='checked calendar' title_ch={this.props.name_ch} title_en={this.props.name_en} />
                        </Item.Header>
                        <Item.Description style={{ margin: '1em 0 0 3em' }}>
                            <List style={{ color: "#2c3e50" }} ani>
                                <List.Item>
                                    <List.Icon name='time' />
                                    <List.Content>{ this.props.time + ', ' + this.props.week }</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='add to calendar' />
                                    <List.Content>{ this.props.date }</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='marker' />
                                    <List.Content>{ this.props.place }</List.Content>
                                </List.Item>
                            </List>
                        </Item.Description>
                    </Item.Content>
                </Item>
            );
        }
    }
}

/* Export module */
export default ScheduleExamsItem;