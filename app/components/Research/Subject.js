/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Header, Image, Item } from 'semantic-ui-react';

/* Import data */
import subject from '../../data/Research/subject.json';

/**
 * @class Subject
 * @extends {React.Component}
 */
class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(subject.data).forEach(function(key) {
            dataArr.push(subject.data[key]);
        });

        return (
            <div>
                <Header 
                    as='h3' 
                    icon='quote left' 
                    content={dataArr[0].title} 
                    style={{ 
                        color: "#203562" 
                    }} />
                <Item.Group 
                    style={{ 
                        marginLeft: '2em' 
                    }}>
                    <Image 
                        centered 
                        size='medium' 
                        src={dataArr[0].img} />
                    <Item>{ dataArr[0].content }</Item>
                </Item.Group>
                <Header 
                    as='h3' 
                    icon='quote left' 
                    content={dataArr[1].title} 
                    style={{ 
                        color: "#203562" 
                    }} />
                <Item.Group 
                    style={{ 
                        marginLeft: '2em' 
                    }}>
                    <Image 
                        centered 
                        size='medium' 
                        src={dataArr[1].img} />
                    <Item>{ dataArr[1].content }</Item>
                </Item.Group>
                <Header 
                    as='h3' 
                    icon='quote left' 
                    content={dataArr[2].title} 
                    style={{ 
                        color: "#203562" 
                    }} />
                <Item.Group 
                    style={{ 
                        marginLeft: '2em' 
                    }}>
                    <Image 
                        centered 
                        size='medium' 
                        src={dataArr[2].img} />
                    <Item>{ dataArr[2].content }</Item>
                </Item.Group>
            </div>
        );
    }
}

/* Export module */
export default Subject;