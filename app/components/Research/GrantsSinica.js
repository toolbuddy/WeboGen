/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import GrantsList from './GrantsList';

/* Import data */
import grantsSinica from '../../data/Research/grantsSinica.json';

/**
 * @class GrantsSinica
 * @extends {React.Component}
 */
class GrantsSinica extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(grantsSinica.data).forEach(function(key) {
            dataArr.push(grantsSinica.data[key]);
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
                                title={grants.title} 
                                type='Sinica' />
                        );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default GrantsSinica;