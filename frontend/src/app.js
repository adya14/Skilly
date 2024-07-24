import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SkillList from './pages/SkillList';
import AddSkill from './pages/AddSkill';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/skills" component={SkillList} />
        <Route path="/add-skill" component={AddSkill} />
      </Switch>
    </Router>
  );
}

export default App;
