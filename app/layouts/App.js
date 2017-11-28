/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider } from 'semantic-ui-react';

/* Import components */
import Navbar from '../components/Navbar';
import Linkbar from '../components/Linkbar';
import Footer from '../components/Footer';

/**
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
    render() {
        return ( 
            <div>
                <Navbar /> 
                {this.props.children}
                <Linkbar />
                <Footer />
            </div>
        );
    }
}

/* Export module */
export default App;