/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List } from 'semantic-ui-react';

/* Import components */
import FooterListItem from './FooterListItem';

/* Import data */
import footer from '../data/Home/footer.json';

/**
 * @class FooterItem
 * @extends {React.Component}
 */
class FooterItem extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(footer.data).forEach(function(key) {
            dataArr.push(footer.data[key]);
        });

        return (
            <Item>
                <Item.Image size='tiny' src={dataArr[0]['logo']} />
                <Item.Content>
                    <Item.Header as='h3' style={{ color: '#e3e8f8' }} >{ dataArr[0]['univ']['ch'] + dataArr[0]['dept']['ch'] + ' ' + dataArr[0]['name']['ch'] }
                        <Item.Meta style={{ color: '#c0c5cd', fontWeight: 'normal' }}>{ dataArr[0]['name']['en'] + ', CS, NCTU' }</Item.Meta>
                    </Item.Header>
                    <Item.Description>
                        <List inverted>
                            <FooterListItem 
                                as='h4' 
                                detail={dataArr[0]['addr']['ch']} 
                                icon='map pin' 
                                title='地址' />
                            <FooterListItem 
                                as='h4' 
                                detail={dataArr[0]['phone']['ch']} 
                                icon='phone' 
                                title='電話' />
                            <FooterListItem 
                                as='h4' 
                                detail={
                                    <a 
                                        href={"mailto:" + dataArr[0]['email']['ch']}
                                        style={{
                                            color: '#B9DAFC'
                                        }}>{ dataArr[0]['email']['ch'] }</a>
                                } 
                                icon='mail outline' 
                                title='電子信箱' />
                        </List>        
                    </Item.Description>
                </Item.Content>
            </Item>
        );
    }
}

/* Export module */
export default FooterItem;