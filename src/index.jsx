const React = require('react');
const render = require('react-dom').render;

class App extends React.Component {
    render () {
        return <p>Zuqi Li</p>;
    }
}

render(<App/>, document.getElementById('app'));