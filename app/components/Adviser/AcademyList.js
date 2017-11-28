/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import Title from '../Title';

/* Import components */
import AcademyProgList from './AcademyProgList';

/**
 * @class AcademyList
 * @extends {React.Component}
 */
class AcademyList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.props.type === 'prof') {
            return (
                <Timeline.Item>
                    <p>{ this.props.date }</p>
                    <Title 
                        as='h5'
                        icon=''
                        type='timeline'
                        title_ch={this.props.prof + ' for ' + this.props.unit}
                        title_en='' />
                </Timeline.Item>
            );
        } else if (this.props.type === 'comm') {
            return (
                <Timeline.Item>
                    <p>{ this.props.date }</p>
                    <List.Item>
                        <AcademyProgList prog={this.props.prog}/>
                    </List.Item>
                </Timeline.Item>
            );
        }   
    }
}

export default AcademyList;