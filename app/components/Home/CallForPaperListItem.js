/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List, Label } from 'semantic-ui-react';

const confLabel = {
    'IEEE': 'blue', 
    'ACM': 'purple',
    'ISCE': 'pink',
    'IWCMC': 'green',
    'ICCCN': 'teal',
    'USENIX': 'olive'
};

/**
 * @class CallForPaperListItem
 * @extends {React.Component}
 */
class CallForPaperListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <List.Item>
                <List.Content
                    as='a'
                    href={this.props.link}
                    target='_blank'>
                    <List.Header 
                        className='list-header'
                        style={{
                            color: '#203562'
                        }}>{ this.props.conf }
                        <List 
                            floated='right'>
                            <Label
                                as='i' 
                                basic 
                                className='callPapersLabel' 
                                color={confLabel[this.props.label]} 
                                size='tiny'>{this.props.label}</Label>
                        </List>
                        <List.Description
                            style={{
                                fontWeight: 'normal'
                            }}>{ this.props.date }</List.Description>
                    </List.Header>
                </List.Content>
            </List.Item>
        );
    }
}

/* Export module */
export default CallForPaperListItem;