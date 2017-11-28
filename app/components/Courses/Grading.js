/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Icon, Item, List, Progress, Table } from 'semantic-ui-react';

/* Import components */
import GradingItem from './GradingItem';

/**
 * @class Grading
 * @extends {React.Component}
 */
class Grading extends React.Component {
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
                    marginLeft: '3em', 
                    marginRight: '1em' 
                }}>
                <Table 
                    basic='very'>
                    <Table.Body>
                        {
                            this.props.grading.map(function(item, i) {
                                return (
                                    <GradingItem 
                                        item_en={item.name['en']} 
                                        item_ch={item.name['ch']} 
                                        pcnt={item.val} 
                                        type={item.type}/>
                                );
                            })
                        }
                    </Table.Body>
                </Table>
            </Item.Group>
        );
    }
}

/* Export module */
export default Grading;