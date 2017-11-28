/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Label, Table } from 'semantic-ui-react';

const newsLabel = {
    'New': 'orange',
    'Notice': 'red'
};

/**
 * @class NewsTableCell
 * @extends {React.Component}
 */
class NewsTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if ( this.props.label === 'None' ) {
            return (
                <Table.Row className='home-table'>
                    <Table.Cell collapsing textAlign='center'>{ this.props.date }</Table.Cell>
                    <Table.Cell>{ this.props.title }</Table.Cell>
                    <Table.Cell collapsing textAlign='right'></Table.Cell>
                </Table.Row>
            );
        } else {
            return (
                <Table.Row className='home-table'>
                    <Table.Cell collapsing textAlign='center'>{ this.props.date }</Table.Cell>
                    <Table.Cell>{ this.props.title }</Table.Cell>
                    <Table.Cell collapsing textAlign='right'>
                        <Label className='newsLabel' color={newsLabel[this.props.label]} horizontal={ true }>{ this.props.label }</Label>
                    </Table.Cell>
                </Table.Row>
            );
        }
    }
}

/* Export module */
export default NewsTableRow;