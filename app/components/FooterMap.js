import React, { Component } from 'react';

/* Import Semantic-UI React components */
import { Header, Icon } from 'semantic-ui-react';

/* Import React Google Map */
import GoogleMapReact from 'google-map-react';

const Marker = function({ place }) {
    return (
        <Header 
            as='h4'
            color='red'>
            <Icon name='marker' />
            <Header.Content
                style={{
                    paddingLeft: '0.5em'
                }}>{ place }</Header.Content>
        </Header>
    );
} 

/**
 * @class FooterMap
 * @extends {React.Component}
 */
class FooterMap extends Component {
    constructor(props){
        super(props);
    }

    render() {      
        return (
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDRu7tY_dBHbFyYH-TFY_LSR4bco21FZ3c'
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <Marker
                    lat={this.props.place.lat}
                    lng={this.props.place.lng}
                    place={this.props.place.id}
                />
            </GoogleMapReact>
        );
    }
}

/* Default Props */
FooterMap.defaultProps = {
    center: {
        lat: 24.787350,
        lng: 120.997421
    },
    place: {
        id: 'NSSLAB',
        lat: 24.786999,
        lng: 120.997421
    },
    zoom: 17
};

/* Export module */
export default FooterMap;