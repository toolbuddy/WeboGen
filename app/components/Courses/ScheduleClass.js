/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List } from 'semantic-ui-react';

/* Import components */
import ScheduleClassItem from './ScheduleClassItem';
import Title from '../Title';

/**
 * @class ScheduleClass
 * @extends {React.Component}
 */
class ScheduleClass extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Item 
                style={{ 
                    margin: '2em 0 2em' 
                }}>
                <Item.Content>
                    <Item.Header 
                        style={{ 
                            color: "#2c3e50" 
                        }}>
                        <Title 
                            as='h5' 
                            icon='clock' 
                            title_ch='時間與地點' 
                            title_en='Time and Place' />
                    </Item.Header>
                    <Item.Description 
                        style={{ 
                            margin: "1em 0 0 3em" 
                        }}>
                        {
                            this.props.classes.map(function(item, i) {
                                return (
                                    <ScheduleClassItem 
                                        place={item.place} 
                                        time={item.time} 
                                        week={item.week} />
                                );
                            })
                        }
                    </Item.Description>
                </Item.Content>
            </Item>
        );
    }
}

/* Export module */
export default ScheduleClass;