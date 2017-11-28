/* Import modules */
import React from 'react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import AdviserExpList from './AdviserExpList';

/* Import data */
import experiences from '../../data/Adviser/experiences.json';

/**
 * @class AdviserExp
 * @extends {React.Component}
 */
class AdviserExp extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(experiences.data).forEach(function(key) {
            dataArr.push(experiences.data[key]);
        });

        return (
            <Timeline
                style={{
                    marginTop: '1.5em',
                    paddingLeft: '3em'
                }}>
                {
                    dataArr.map(function(item, i) {
                        return <AdviserExpList date={item.date} duty_en={item.exp['duty']['en']} duty_ch={item.exp['duty']['ch']} unit_en={item.exp['unit']['en']} unit_ch={item.exp['unit']['ch']} />;
                    })
                }
            </Timeline>
        );
    }
}

export default AdviserExp;