/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Button, Icon, Label, List } from 'semantic-ui-react';

const confLabel = {
    'IEEE': 'blue',
    'ACM': 'purple',
    'IEEE/ACM': 'violet',
    'MobileHCI': 'orange',
    'IWCMC': 'green',
    'ICCCN': 'teal',
    'USENIX': 'olive',
    'WILEY': 'brown',
    'ScienceDirect': 'grey'
};

/**
 * @class PapersList
 * @extends {React.Component}
 */
class PapersList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.type === 'conf') {
            return (
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#2c3e50' }}>{ this.props.title }</List.Header>
                        <List.Description>{ this.props.authors }</List.Description>
                        <List.Description
                            style={{
                                fontStyle: 'italic'
                            }}
                        >{ this.props.unit + ' ' + this.props.publish }</List.Description>
                    </List.Content>
                    <List 
                        bulleted 
                        horizontal
                        style={{
                            paddingLeft: '0em'
                        }}>
                        <List.Item>
                            <Button
                                as='a'
                                color={confLabel[this.props.unit]}
                                content={this.props.unit}
                                href={this.props.link}
                                icon='external share'
                                label={{ 
                                    basic: true, 
                                    color: confLabel[this.props.unit], 
                                    pointing: 'left', 
                                    content: 'Link',
                                    size: 'tiny' }}
                                size='tiny'
                                target='_blank' />
                        </List.Item>
                        <List.Item>{ this.props.date }</List.Item>
                    </List>
                </List.Item>
            );
        } else if (this.props.type === 'jour') {
            return (
                <List.Item>
                    <List.Content>
                        <List.Header style={{ color: '#2c3e50' }}>{ this.props.title }</List.Header>
                        <List.Description>{ this.props.authors }</List.Description>
                        <List.Description
                            style={{
                                fontStyle: 'italic'
                            }}
                        >{ this.props.unit + ' ' + this.props.publish }</List.Description>
                    </List.Content>
                    <List 
                        bulleted 
                        horizontal
                        style={{
                            paddingLeft: '0em'
                        }}>
                        <List.Item>
                            <Button
                                as='a'
                                color={confLabel[this.props.unit]}
                                content={this.props.unit}
                                href={this.props.link}
                                icon='external share'
                                label={{ 
                                    basic: true, 
                                    color: confLabel[this.props.unit], 
                                    pointing: 'left', 
                                    content: 'Link',
                                    size: 'tiny' }}
                                size='tiny'
                                target='_blank' />
                        </List.Item>
                        <List.Item>{ 'vol.' + this.props.vol + ', no.' + this.props.no + ', pp.' + this.props.pp }</List.Item>
                        <List.Item>{ this.props.date }</List.Item>
                    </List>
                </List.Item>
            );
        }
    }
}

/* Export module */
export default PapersList;