const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./bullet-point.scss');

const BulletPoint = (props) => {
    const { children } = props;
    return (
        <p styleName='bullet-point'>
            {children}
        </p>
    );
};

BulletPoint.displayName = 'BulletPoint';
BulletPoint.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.node),
};

module.exports = cssModules(BulletPoint, styles);