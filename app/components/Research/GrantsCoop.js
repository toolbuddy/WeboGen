/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import GrantsList from './GrantsList';

/* Import data */
import grantsCoop from '../../data/Research/grantsCoop.json';

/**
 * @class GrantsCoop
 * @extends {React.Component}
 */
class GrantsCoop extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(grantsCoop.data).forEach(function(key) {
            dataArr.push(grantsCoop.data[key]);
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
                                status={grants.status} 
                                title={grants.title} 
                                type='Coop' />
                        );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default GrantsCoop;