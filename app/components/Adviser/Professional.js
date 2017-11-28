/* Import modules */
import React from 'react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import AcademyList from './AcademyList';

/* Import data */
import professional from '../../data/Adviser/professional.json'

/**
 * @class Professional
 * @extends {React.Component}
 */
class Professional extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(professional.data).forEach(function(key) {
            dataArr.push(professional.data[key]);
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
                            <AcademyList 
                                date={item.date} 
                                prof={item.prof['en']} 
                                type='prof' 
                                unit={item.unit['en']} />
                        );
                    })
                }
            </Timeline>
        );
    }
}

export default Professional;