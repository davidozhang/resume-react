const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Highlight = (props) => {
    const { children } = props;
    return (
        <span styleName='highlight' className='bold-text'>
            {children}
        </span>
    );
};

Highlight.displayName = 'Highlight';
Highlight.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(Highlight, styles);