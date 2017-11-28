/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card } from 'semantic-ui-react';

/* Import components */
import MemberCard from './MemberCard';

/* Import data */
import currentMS from '../../data/Member/currentMS.json';

/**
 * @class CurrentMS
 * @extends {React.Component}
 */
class CurrentMS extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArrMS = [];
        Object.keys(currentMS.data).forEach(function(key) {
            dataArrMS.push(currentMS.data[key]);
        });

        return (
            <Card.Group 
                itemsPerRow={this.props.perRow} 
                stackable
                style={{
                    paddingLeft: '3em'
                }}>
                {
                    dataArrMS.map(function(item, i) {
                        return (
                            <MemberCard
                                about={item.about}
                                detail={item.detail}
                                email={item.email} 
                                github={item.github} 
                                img={item.img} 
                                inst={item.inst['ch']} 
                                join={item.join} 
                                name_en={item.name['en']} 
                                name_ch={item.name['ch']} />
                        );
                    })
                }
            </Card.Group>
        );
    }
}

/* Export module */
export default CurrentMS;