/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Icon, Item, List } from 'semantic-ui-react';

/* Import components */
import LecturesItem from './LecturesItem';

/**
 * @class Lectures
 * @extends {React.Component}
 */
class Lectures extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Item.Group 
                style={{ 
                    marginLeft: '3em' 
                }}>
                <Item>
                    <List
                        animated
                        bulleted>
                        {
                            this.props.lectures.map(function(item, i) {
                                return (
                                    <LecturesItem 
                                        lec={i + 1}
                                        title={item.title} />
                                );
                            })
                        }
                    </List>
                </Item>
            </Item.Group>
        );
    }
}

/* Export module */
export default Lectures;