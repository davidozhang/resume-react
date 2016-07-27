const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = require('../general-block/index.jsx');

const MainSection = (props) => {
    return (
        <div styleName='main-section'>
            <GeneralBlock title='Experience' />
            <GeneralBlock title='Projects' />
        </div>
    );
};

MainSection.displayName = 'MainSection';
MainSection.propTypes = {
};

module.exports = cssModules(MainSection, styles);