/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Icon, List } from 'semantic-ui-react';

/* Import components */
import AssistantsItem from './AssistantsItem';

/**
 * @class Assistants
 * @extends {React.Component}
 */
class Assistants extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Card.Group 
                itemsPerRow={3} 
                style={{ 
                    marginLeft: '2em' 
                }}>
                {
                    this.props.assistants.map(function(item, i) {
                        return (
                            <AssistantsItem 
                                email={item.email} 
                                name_en={item.name['en']} 
                                name_ch={item.name['ch']} 
                                time={item.time} />
                        );
                    })
                }
            </Card.Group>
        );
    }
}

/* Export module */
export default Assistants;