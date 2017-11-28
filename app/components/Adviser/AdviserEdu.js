/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import AdviserEduList from './AdviserEduList';

/* Import data */
import education from '../../data/Adviser/education.json';

/**
 * @class AdviserEdu
 * @extends {React.Component}
 */
class AdviserEdu extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(education.data).forEach(function(key) {
            dataArr.push(education.data[key]);
        });

        return (
            <List 
                animated
                bulleted 
                selection
                style={{
                    paddingLeft: '2.5em'
                }}>
                {
                    dataArr.map(function(item, i) {
                        return <AdviserEduList date={item.date} deg_en={item.deg['en']} deg_ch={item.deg['ch']} edu_en={item.edu['en']} edu_ch={item.edu['ch']} place_en={item.place['en']} univ_en={item.univ['en']} univ_ch={item.univ['ch']} />;
                    })
                }
            </List>
        );
    }
}

export default AdviserEdu;