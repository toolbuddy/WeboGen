/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import GrantsList from './GrantsList';

/* Import data */
import grantsMOST from '../../data/Research/grantsMOST.json';

/**
 * @class GrantsMOST
 * @extends {React.Component}
 */
class GrantsMOST extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(grantsMOST.data).forEach(function(key) {
            dataArr.push(grantsMOST.data[key]);
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
                    dataArr.map(function(grants, i) {
                        return (
                            <GrantsList 
                                date={grants.date} 
                                project={grants.project['ch']} 
                                serial={grants.serial} 
                                status={grants.status} 
                                title={grants.title['en']} 
                                type='MOST' />
                        );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default GrantsMOST;