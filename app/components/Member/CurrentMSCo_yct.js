/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card } from 'semantic-ui-react';

/* Import components */
import MemberCard from './MemberCard';

/* Import data */
import currentMSCo from '../../data/Member/currentMSCo_yct.json';

/**
 * @class CurrentMSCo
 * @extends {React.Component}
 */
class CurrentMSCo extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArrMSCo = [];
        Object.keys(currentMSCo.data).forEach(function(key) {
            dataArrMSCo.push(currentMSCo.data[key]);
        });

        return (
            <Card.Group 
                itemsPerRow={this.props.perRow} 
                stackable
                style={{
                    paddingLeft: '3em'
                }}>
                {
                    dataArrMSCo.map(function(item, i) {
                        return (
                            <MemberCard 
                                img={item['img']} 
                                inst={item['inst']['ch']} 
                                join={item['join']} 
                                name_en={item['name']['en']} 
                                name_ch={item['name']['ch']} />
                        );
                    })
                }
            </Card.Group>
        );
    }
}

/* Export module */
export default CurrentMSCo;