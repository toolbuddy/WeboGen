/* Import modules */
import React from 'react';
import { Route } from 'react-router';

/* Import layouts */
import App from './layouts/App';
import Home from './layouts/Home';
import Adviser from './layouts/Adviser';
import Research from './layouts/Research';
import Honors from './layouts/Honors';
import Member from './layouts/Member';
import Resource from './layouts/Resource';
import Courses from './layouts/Courses';

// Export component
export default (
    <Route component={ App }>
        <Route path='/' component={ Home } />
        <Route path='/adviser' component={ Adviser } />
        <Route path='/research' component={ Research } />
        <Route path='/honors' component={ Honors } />
        <Route path='/member' component={ Member } />
        <Route path='/resource' component={ Resource } />
        <Route path='/courses' component={ Courses } />
    </Route>
);