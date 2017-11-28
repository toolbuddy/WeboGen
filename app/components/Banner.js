/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react';

/**
 * @class Banner
 * @extends {React.Component}
 */
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Segment 
                style={{ 
                    marginTop: '1.5em', 
                    padding: '0em' 
                }} 
                vertical>
                <Container
                    style={{
                        width: '100% !important'
                    }}>
                    <Image 
                        centered 
                        src={'Banner/' + this.props.type + '.jpg'}
                        style={{
                            width: '100vw !important'
                        }} />
                </Container>
            </Segment>
        );
    }
}

/* Export modules */
export default Banner;