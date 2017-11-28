/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item } from 'semantic-ui-react';

/* Import components */
import MemberItem from './MemberItem';

/* Import data */
import pastStudents from '../../data/Member/pastStudents.json';

/**
 * @class PastStudents
 * @extends {React.Component}
 */
class PastStudents extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr_past = [];
        Object.keys(pastStudents.data).forEach(function(key) {
            dataArr_past.push(pastStudents.data[key]);
        });

        return (
            <Item.Group divided>
                {
                    dataArr_past.map(function(item, i) {
                        return <MemberItem date={item.date} inst={item.inst['ch']} name_en={item.name['en']} name_ch={item.name['ch']} img={item.img} type='past' />
                    })
                }
            </Item.Group>
        );
    }
}

/* Export module */
export default PastStudents;