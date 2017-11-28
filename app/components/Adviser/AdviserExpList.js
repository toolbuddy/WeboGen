/* Import modules */
import React from 'react';

/* Import ANT Desgin components */
import { Timeline } from 'antd';

/* Import components */
import Title from '../Title';

/**
 * @class AdviserExpList
 * @extends {React.Component}
 */
class AdviserExpList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Timeline.Item>
                <p>{ this.props.date }</p>
                <Title 
                    as='h5'
                    icon=''
                    type='timeline'
                    title_ch={this.props.unit_ch + ' ' + this.props.duty_ch}
                    title_en={this.props.duty_en + ', ' + this.props.unit_en} />
            </Timeline.Item>
        );
    }
}

export default AdviserExpList;