const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Icon = (props) => {
    const { icon } = props;
    return (
        <span styleName={icon} />
    );
};

Icon.displayName = 'Icon';
Icon.propTypes = {
    icon: React.PropTypes.string,
};

module.exports = cssModules(Icon, styles);