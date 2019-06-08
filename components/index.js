import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';

import Main from './Main';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';

class App extends Component {

  state = {
    gists: null
  }

  componentDidMount() {
    fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists });
      })
  }

  render() {
    const { gists } = this.state;
    return (
      <div className="app">
        <Sidebar>
          {gists ? (
            gists.map(gist => {
              return (
                <SidebarItem key={gist.id}>
                  {gist.description || '[no description]'}
                </SidebarItem>
              )
            })
          ) : <span>Loading...</span>}
        </Sidebar>

        <Main>
          <h1>Welcome</h1>
        </Main>

      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
