const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const ResumeContainer = (props) => {
    return <div styleName='main'>Zuqi Li</div>;
};

ResumeContainer.displayName = 'ResumeContainer';
ResumeContainer.propTypes = {
};

module.exports = cssModules(ResumeContainer, styles);