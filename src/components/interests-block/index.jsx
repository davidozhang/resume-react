const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const InterestsBlock = (props) => {
    const { children } = props;
    return (
        <ul styleName='interests-block'>
            {children}
        </ul>
    );
};

InterestsBlock.displayName = 'InterestsBlock';
InterestsBlock.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(InterestsBlock, styles);