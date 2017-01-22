const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Italic = (props) => {
    const { children } = props;
    return (
        <span styleName='italic'>
            {children}
        </span>
    );
};

Italic.displayName = 'Italic';
Italic.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(Italic, styles);