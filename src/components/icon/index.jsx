const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Icon = (props) => {
    const { icon, className } = props;
    return (
        <span className={className} styleName={icon} />
    );
};

Icon.displayName = 'Icon';
Icon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
};

module.exports = cssModules(Icon, styles);