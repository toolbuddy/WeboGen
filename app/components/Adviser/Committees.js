/* Import modules */
import React from 'react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import AcademyList from './AcademyList';

/* Import data */
import committees from '../../data/Adviser/committees.json'

/**
 * @class Committees
 * @extends {React.Component}
 */
class Committees extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(committees.data).forEach(function(key) {
            dataArr.push(committees.data[key]);
        });

        return (
            <Timeline
                style={{
                    marginTop: '1.5em',
                    paddingLeft: '3em'
                }}>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <AcademyList date={item.date} prog={item.prog} type='comm' />
                        );
                    })
                }
            </Timeline>
        );
    }
}

export default Committees;