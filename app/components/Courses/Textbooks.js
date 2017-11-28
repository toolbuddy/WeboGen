/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Item, List } from 'semantic-ui-react';

/* Import components */
import TextbooksItem from './TextbooksItem';

/**
 * @class Textbooks
 * @extends {React.Component}
 */
class Textbooks extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        return (
            <Item.Group style={{ marginLeft: '3em' }}>
                {
                    this.props.textbooks.map(function(item, i) {
                        return (
                            <TextbooksItem 
                                authors={item.authors} 
                                img={item.img} 
                                isbn={item.isbn} 
                                name={item.name} 
                                publish={item.publish} />
                        );
                    })
                }
            </Item.Group>
        );
    }
}

/* Export module */
export default Textbooks;