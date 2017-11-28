/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Label } from 'semantic-ui-react';

/* Import ANT Desgin components */
import { Table } from 'antd';

/* Import components */
import NewsTableRow from './NewsTableRow';

/* Import data */
import news from '../../data/Home/news.json';

/**
 * @class NewsTable
 * @extends {React.Component}
 */
class NewsTable extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Table
                className='table-news'
                dataSource={news.data}
                pagination={{ 
                    pageSize: 7
                }}
                showHeader={false}
                size='middle'
                style={{
                    color: '#203562'
                }}>
                <Table.Column
                    className='col-date'
                    dataIndex='date'
                    key='date'
                    title='Date'
                    width='100' />
                <Table.Column
                    className='col-title'
                    dataIndex='title'
                    key='title'
                    title='Title'
                    width='' />
                <Table.Column
                    className='col-label'
                    dataIndex='label'
                    key='label'
                    render={function(text, row, index) {
                        if (text === 'New') {
                            return (
                                <Label
                                    className='newsLabel'
                                    color='orange'>
                                    {text}
                                </Label>
                            );
                        }
                    }}
                    title='Label'
                    width='100' />
            </Table>
        ); 
    }
}

/* Export module */
export default NewsTable;