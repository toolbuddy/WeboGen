/* Import modules */
import React from 'react'

/* Import Semantic-UI React components */
import { Header, Icon } from 'semantic-ui-react';

/**
 * @class Title
 * @extends {React.Component}
 */
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state); 
    }

    render() {
        if (this.props.icon !== '') {
            return (
                <Header 
                    as={this.props.as} 
                    style={{ 
                        color: '#203562' 
                    }}>
                    <Icon 
                        name={this.props.icon} 
                        style={{ 
                            color: '#3e588f' 
                        }} />
                    <Header.Content>{ this.props.title_ch }
                        <Header.Subheader>{ this.props.title_en }</Header.Subheader>
                    </Header.Content>
                </Header>
            );
        } else {
            if (this.props.type === 'timeline') {
                return (
                    <Header 
                        as={this.props.as} 
                        style={{ 
                            color: '#203562',
                            marginTop: '0.5em'
                        }}>
                        <Header.Content>{ this.props.title_ch }
                            <Header.Subheader>{ this.props.title_en }</Header.Subheader>
                        </Header.Content>
                    </Header>
                );
            } else {
                return (
                    <Header 
                        as={this.props.as} 
                        style={{ 
                            color: '#203562' 
                        }}>
                        <Header.Content>{ this.props.title_ch }
                            <Header.Subheader>{ this.props.title_en }</Header.Subheader>
                        </Header.Content>
                    </Header>
                );
            }
        }
    }
}

/* Export module */
export default Title;