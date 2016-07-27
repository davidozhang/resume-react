const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const GeneralBlock = require('../general-block/index.jsx');

const SideSection = (props) => {
    return (
        <div styleName='side-section'>
            <GeneralBlock title='Skills' />
            <GeneralBlock title='Education' />
            <GeneralBlock title='Interests' />
        </div>
    );
};

SideSection.displayName = 'SideSection';
SideSection.propTypes = {
};

module.exports = cssModules(SideSection, styles);