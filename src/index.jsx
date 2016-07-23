const React = require('react');
const render = require('react-dom').render;

const ResumeContainer = require('./components/resume-container/index.jsx');

const App = (props) => {
    return <ResumeContainer />;
};

render(<App/>, document.getElementById('app'));