/* Import modules */
import React from 'react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import AdviserAwardList from './AdviserAwardList';

/* Import data */
import awards from '../../data/Adviser/awards.json';

/**
 * @class AdviserAward
 * @extends {React.Component}
 */
class AdviserAward extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(awards.data).forEach(function(key) {
            dataArr.push(awards.data[key]);
        });

        return (
            <Timeline
                style={{
                    marginTop: '1.5em',
                    paddingLeft: '3em'
                }}>
                {
                    dataArr.map(function(item, i) {
                        return <AdviserAwardList date={item.date} award_en={item.award['en']} award_ch={item.award['ch']} />;
                    })
                }
            </Timeline>
        );
    }
}

export default AdviserAward;