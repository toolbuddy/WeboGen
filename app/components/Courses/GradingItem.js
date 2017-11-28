/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List, Progress, Table } from 'semantic-ui-react';

/**
 * @class GradingItem
 * @extends {React.Component}
 */
class GradingItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.type == 'bonus') {
            return (
                <Table.Row>
                    <Table.Cell 
                        collapsing>
                        <List>
                            <List.Item>
                                <List.Content>
                                    <List.Header>{ this.props.item_ch }</List.Header>
                                    <List.Description>{ this.props.item_en }</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Table.Cell>
                    <Table.Cell>
                        <Progress
                            active
                            percent={this.props.pcnt}  
                            progress 
                            success>Bonus</Progress>
                    </Table.Cell>
                </Table.Row>
            );
        } else {
            return (
                <Table.Row>
                    <Table.Cell 
                        collapsing>
                        <List>
                            <List.Item>
                                <List.Content>
                                    <List.Header>{ this.props.item_ch }</List.Header>
                                    <List.Description>{ this.props.item_en }</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Table.Cell>
                    <Table.Cell>
                        <Progress
                            active
                            color='teal'
                            percent={this.props.pcnt} 
                            progress />
                    </Table.Cell>
                </Table.Row>
            );
        }
    }
}

/* Export module */
export default GradingItem;