import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Test1 = <div>Test1</div>;
const Test2 = <div>Test2</div>;
const Test3 = <div>Test3</div>;

export default ({location}) => (
  <TransitionGroup>
    <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="frame"
        >
      <Switch location={location}>
        <Route path="/test1" children={Test1} />
        <Route path="/test2" children={Test2} />
        <Route path="/test3" children={Test3} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);