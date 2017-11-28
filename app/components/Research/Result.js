/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Header, Image, Item, Label, List } from 'semantic-ui-react';

/* Import data */
import result from '../../data/Research/result.json';

/**
 * @class Result
 * @extends {React.Component}
 */
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(result.data).forEach(function(key) {
            dataArr.push(result.data[key]);
        });

        return (
            <div>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <div
                                style={{
                                    paddingTop: '0.5em',
                                    paddingLeft: '2.5em'
                                }}>
                                <Header 
                                    as='h3'     
                                    icon='star' 
                                    content={item.title} 
                                    style={{ 
                                        color: "#203562",
                                        marginBottom: '0.25em'
                                    }} />
                                <List 
                                    bulleted
                                    selection
                                    style={{
                                        margin: '0.25em 0 0.25em 1.5em',
                                        paddingLeft: '2.5em'
                                    }}>
                                    <List.Item
                                        style={{
                                            padding: '0.25em 0'
                                        }}>
                                        <List.Content>
                                            <List.Header
                                                style={{
                                                    color: "#203562",
                                                    paddingBottom: '0.25em'
                                                }}>計畫編號</List.Header>
                                            <List.Description>{ item.series }</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item
                                        style={{
                                            padding: '0.25em 0'
                                        }}>
                                        <List.Content>
                                            <List.Header
                                                style={{
                                                    color: "#203562",
                                                    paddingBottom: '0.25em'
                                                }}>計畫主持人</List.Header>
                                            <List.Description>
                                                {
                                                    item['host'].map(function(item, i) {
                                                        return (
                                                            <Label color='blue' image>
                                                                <img src={item.img} />
                                                                { item.ch }
                                                                <Label.Detail>{ item.en }</Label.Detail>
                                                            </Label>
                                                        );
                                                    })
                                                }
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item
                                        style={{
                                            padding: '0.25em 0'
                                        }}>
                                        <List.Content>
                                            <List.Header
                                                style={{
                                                    color: "#203562",
                                                    paddingBottom: '0.25em'
                                                }}>計畫參與人員</List.Header>
                                            <List.Description>
                                                {
                                                    item['member'].map(function(item, i) {
                                                        return (
                                                            <Label color='teal' image>
                                                                <img src={item.img} />
                                                                { item.ch }
                                                                <Label.Detail>{ item.en }</Label.Detail>
                                                            </Label>
                                                        );
                                                    })
                                                }
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item
                                        style={{
                                            padding: '0.25em 0'
                                        }}>
                                        <List.Content>
                                            <List.Header
                                                style={{
                                                    color: "#203562",
                                                    paddingBottom: '0.25em'
                                                }}>執行機構</List.Header>
                                            <List.Description>
                                                {
                                                    item['unit'].map(function(item, i) {
                                                        return (
                                                            item.ch + ' ' + item.en
                                                        );
                                                    })
                                                }
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                                <Image 
                                    centered  
                                    size='huge' 
                                    src={item.img} 
                                    rounded />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

/* Export module */
export default Result;