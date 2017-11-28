/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Accordion, Container, Divider, Grid, Header, Item, List, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import AdviserAbout from '../components/Adviser/AdviserAbout';
import AdviserEdu from '../components/Adviser/AdviserEdu';
import AdviserExp from '../components/Adviser/AdviserExp';
import AdviserAward from '../components/Adviser/AdviserAward';
import ConfPapers from '../components/Adviser/PapersConf';
import JourPapers from '../components/Adviser/PapersJour';
import Banner from '../components/Banner';
import Committees from '../components/Adviser/Committees';
import Professional from '../components/Adviser/Professional';
import Title from '../components/Title';

/* Import data */
import about from '../data/Adviser/about.json';

let dataArr = [];
Object.keys(about.data).forEach(function(key) {
    dataArr.push(about.data[key]);
});

/* Define tab panes content */
const AdviserPanes = [{
        menuItem: '關於',
        render: function() {
            return (
                <Tab.Pane>
                    <Item.Group>
                        <Item>
                            <Item.Content verticalAlign='middle'>
                                <Item.Header>
                                    <Header 
                                        as='h2' 
                                        style={{ 
                                            color: "#2c3e50",
                                            padding: '0.5em 0 0 0.5em'
                                        }}>林靖茹教授</Header>
                                </Item.Header>
                                <Item.Meta
                                    style={{
                                        paddingLeft: '0.75em'
                                    }}>Prof. Kate Ching-Ju Lin</Item.Meta>
                                <Item.Description>
                                    <Divider hidden />
                                    <List
                                        style={{
                                            paddingLeft: '1em'
                                        }}>
                                        <List.Item
                                            style={{
                                                fontWeight: 'bold'
                                        }}>國立交通大學資訊工程學系 副教授</List.Item>
                                        <List.Item>Associate Processor, Department of Computer Science,</List.Item> 
                                        <List.Item>National Chiao Tung University</List.Item>
                                        <List.Item>
                                            <List.Icon name='google' />
                                            <List.Content 
                                                as='a' 
                                                href={'http://scholar.google.com/citations?hl=en&user=dT-9dtwAAAAJ'}>Google Scholar</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='certificate' />
                                            <List.Content
                                                as='a'
                                                href={'http://people.cs.nctu.edu.tw/~katelin/CV-kate.pdf'}>Curriculum Vitae</List.Content>
                                        </List.Item>
                                    </List>
                                    <Divider hidden />
                                    <AdviserAbout />
                                </Item.Description>
                            </Item.Content>
                            <Item.Image 
                                src='/Adviser/katelin.jpg' 
                                shape='rounded' />
                        </Item>
                    </Item.Group>
                    <Divider />
                    <Item.Group
                        style={{
                            padding: '0 0.5em 0'
                        }}>
                        {
                            dataArr.map(function(item, i) {
                                return <Item>{ item.about }</Item>
                            })
                        }
                        {
                            dataArr.map(function(item, i) {
                                return <Item>{ item.notice }</Item>
                            })
                        }
                    </Item.Group>
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '學歷與經歷',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='student' title_ch='學歷' title_en='Education' />
                    <AdviserEdu />
                    <Divider />
                    <Title as='h3' icon='flag' title_ch='經歷' title_en='Experiences' />
                    <AdviserExp />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '論文發表',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='file text' title_ch='研討會論文' title_en='Conference Papers' />
                    <ConfPapers />
                    <Divider />
                    <Title as='h3' icon='file text outline' title_ch='期刊論文' title_en='Journal Papers' />
                    <JourPapers />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '獲獎殊榮',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='trophy' title_ch='獲獎殊榮' title_en='Honors and Awards' />
                    <AdviserAward />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '學術活動',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='suitcase' title_ch='專業活動' title_en='Professional Activities' />
                    <Professional />
                    <Divider />
                    <Title as='h3' icon='flag checkered' title_ch='程序委員會委員' title_en='Program Committees' />
                    <Committees />
                </Tab.Pane>
            );
        }
    }
];

/**
 * @className Adviser
 * @extends {React.Component}
 */
class Adviser extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>
                <Banner 
                    title_en='Adviser' 
                    title_ch='主持人' 
                    type='adviser' />
                <Segment
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab
                            menu={{
                                fluid: true, 
                                vertical: true 
                            }} 
                            panes={ AdviserPanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Adviser;