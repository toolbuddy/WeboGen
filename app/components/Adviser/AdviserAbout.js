/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import AdviserAboutList from './AdviserAboutList';

/* Import data */
import adviser from '../../data/Adviser/adviser.json'

/**
 * @class AdviserAbout
 * @extends {React.Component}
 */
class AdviserAbout extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(adviser.data).forEach(function(key) {
            dataArr.push(adviser.data[key]);
        });

        return (
            <div>
                {
                    dataArr.map(function(item, i) {
                        return <AdviserAboutList email={item.email} fax={item.fax['ch']} office={item.office['ch']} phone={item.phone['ch']} />;
                    })
                }
            </div>
        );
    }
}

export default AdviserAbout;