/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Icon, Item, List } from 'semantic-ui-react';

/* Import components */
import ScheduleClass from './ScheduleClass';
import ScheduleExamsItem from './ScheduleExamsItem';

/**
 * @class Schedule
 * @extends {React.Component}
 */
class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.exams === 'none') {
            return (
                <Item.Group 
                    style={{ 
                        marginLeft: '4em' 
                    }}>
                    <Card.Group 
                        itemsPerRow={2}>
                        <ScheduleClass 
                            classes={this.props.classes} />
                    </Card.Group>
                </Item.Group>
            );
        } else {
            return (
                <Item.Group 
                    style={{ 
                        marginLeft: '4em' 
                    }}>
                    <Card.Group 
                        itemsPerRow={2}>
                        <ScheduleClass 
                            classes={this.props.classes} />
                        {
                            this.props.exams.map(function(item, i) {
                                return (
                                    <ScheduleExamsItem 
                                        date={item.date} 
                                        name_en={item.name['en']} 
                                        name_ch={item.name['ch']} 
                                        place={item.place} 
                                        time={item.time} 
                                        week={item.week}
                                        pass={item.pass} />
                                    );
                            })
                        }
                    </Card.Group>
                </Item.Group>
            );
        }
    }
}

/* Export module */
export default Schedule;