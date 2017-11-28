/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/**
 * @class AdviserEduList
 * @extends {React.Component}
 */
class AdviserEduList extends React.Component {
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
                <List.Content>
                    <List.Header style={{ color: '#203562' }}>
                        { 
                            this.props.univ_ch + this.props.edu_ch + ' ' + this.props.deg_ch
                        }
                    </List.Header>
                    <List.Description>
                        { 
                            this.props.univ_en + ' ' + this.props.edu_en + ' ' + this.props.deg_en
                        }
                    </List.Description>
                </List.Content>
                <List bulleted horizontal>
                    <List.Item>{ this.props.date }</List.Item>
                    <List.Item>{ this.props.place_en }</List.Item>
                </List>
            </List.Item>
        );
    }
}

export default AdviserEduList;