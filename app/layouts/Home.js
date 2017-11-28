/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Column, Container, Grid, Header, Icon, Image, Label, List, Row, Segment } from 'semantic-ui-react';

/* Import ANT Desgin components */
import { Carousel } from 'antd';

/* Import components */
import CallForPaperList from '../components/Home/CallForPapersList';
import HomeBanner from '../components/Home/HomeBanner';
import NewsTable from '../components/Home/NewsTable';
import Title from '../components/Title';
import VisitorsImg from '../components/Home/VisitorsImg';

/**
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
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
                <Carousel autoplay>
                    <div>
                        <Image src='/Banner/home.png' />
                    </div>
                    <div>
                        <Image src='/Banner/nss_banner.jpg' />
                    </div>
                    <div>
                        <Image src='/Banner/home.png' />
                    </div>
                </Carousel>
                <Segment vertical>
                    <Grid celled='internally' stackable>
                        <Grid.Row>
                            <Grid.Column width={ 4 }>
                                <Title as='h3' icon='bar chart' title_ch='訪客統計' title_en='Visitors' />
                                <VisitorsImg />
                            </Grid.Column>
                            <Grid.Column width={ 9 }>
                                <Title as='h3' icon='announcement' title_ch='最新消息' title_en='News' />
                                <NewsTable />
                            </Grid.Column>
                            <Grid.Column width={ 3 }>
                                <Title as='h3' icon='bookmark' title_ch='論文徵求' title_en='Call for Papers' />
                                <CallForPaperList />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Home;