const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Header = require('../header/index.jsx');

const ResumeContainer = (props) => {
    return (
        <div styleName='resume-container'>
            <Header term='3B' />
        </div>
    );
};

ResumeContainer.displayName = 'ResumeContainer';
ResumeContainer.propTypes = {
};

module.exports = cssModules(ResumeContainer, styles);