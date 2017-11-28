/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Label, List } from 'semantic-ui-react';

const grantStatus = [[
        'Principal Investigator (PI)', 
        '計畫主持人',
        'blue'
    ], [
        'Co-principal Investigator (Co-PI)', 
        '共同計劃主持人',
        'teal'
    ]
];

/**
 * @class ResearchGrantsList
 * @extends {React.Component}
 */
class ResearchGrantsList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let status = [];
        if (this.props.status === 'PI') {
            status = grantStatus[0];
        } else if (this.props.status === 'Co-PI') {
            status = grantStatus[1];
        }

        if (this.props.type === 'MOST') {
            return (
                <List.Item>
                    <List.Content>
                        <List.Header 
                            style={{ 
                                color: '#2c3e50' 
                            }}>{ this.props.title }</List.Header>
                        <List.Description>{ this.props.project }</List.Description>
                    </List.Content>
                    <List 
                        bulleted 
                        horizontal
                        style={{
                            paddingLeft: '0em'
                        }}>
                        <List.Item>
                            <Label 
                                basic 
                                color={status[2]} 
                                horizontal>{ status[1] }</Label>
                        </List.Item>
                        <List.Item>{ this.props.date }</List.Item>
                        <List.Item>{ this.props.serial }</List.Item>
                    </List>
                </List.Item>
            );
        } else if (this.props.type === 'Sinica') {
            return (
                <List.Item>
                    <List.Content>
                        <List.Header 
                            style={{ 
                                color: '#2c3e50' 
                            }}>{ this.props.title }</List.Header>
                        <List.Description>{ this.props.project }</List.Description>
                    </List.Content>
                    <List 
                        bulleted 
                        horizontal
                        style={{
                            paddingLeft: '0em'
                        }}>
                        <List.Item>
                            <Label 
                                basic 
                                color={status[2]} 
                                horizontal>{ status[1] }</Label>
                        </List.Item>
                        <List.Item>{ this.props.date }</List.Item>
                        <List.Item>{ this.props.serial }</List.Item>
                    </List>
                </List.Item>
            );
        } else if (this.props.type === 'Coop') {
            return (
                <List.Item>
                    <List.Content>
                        <List.Header 
                            style={{ 
                                color: '#2c3e50' 
                            }}>{ this.props.title }</List.Header>
                        <List.Description>{ this.props.project }</List.Description>
                    </List.Content>
                    <List 
                        bulleted 
                        horizontal
                        style={{
                            paddingLeft: '0em'
                        }}>
                        <List.Item>
                            <Label 
                                basic 
                                color={status[2]} 
                                horizontal>{ status[1] }</Label>
                        </List.Item>
                        <List.Item>{ this.props.date }</List.Item>
                    </List>
                </List.Item>
            );
        }
    }
}

/* Export module */
export default ResearchGrantsList;