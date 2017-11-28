/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item } from 'semantic-ui-react';

/* Import components */
import MemberItem from './MemberItem';

/* Import data */
import alumni from '../../data/Member/alumni.json';

/**
 * @class Alumni
 * @extends {React.Component}
 */
class Alumni extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr_alumni = [];
        Object.keys(alumni.data).forEach(function(key) {
            dataArr_alumni.push(alumni.data[key]);
        });

        return (
            <Item.Group 
                divided>
                {
                    dataArr_alumni.map(function(item, i) {
                        return (
                            <MemberItem 
                                end={item.period[1]} 
                                name_en={item.name['en']} 
                                name_ch={item.name['ch']} 
                                img={item.img} 
                                outcomes={item.outcomes['ch']} 
                                start={item.period[0]} 
                                thesis={item.thesis['ch']} 
                                type='alumni' />
                        );
                    })
                }
            </Item.Group>
        );
    }
}

/* Export module */
export default Alumni;