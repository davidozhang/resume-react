const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Icon = require('../icon/index.jsx');

const Header = (props) => {
    const { term } = props;
    return (
        <div styleName='header' className='clear-fix'>
            <div styleName='main-desc'>
                <p styleName='name' className='bold-text'>Zuqi <span className='med-text'>(Zach)</span> Li</p>
                <p styleName='term'><span className='bold-text'>{term}</span> Software Engineering</p>
            </div>
            <div styleName='contact-links' className='med-text'>
                <a href='http://zuqi.li'><Icon icon='website' />zuqi.li</a>
                <a href='http://zuqi.li'><Icon icon='email' />zq6li@uwaterloo.ca</a>
                <a href='http://zuqi.li'><Icon icon='github' />github.com/zuqini</a>
                <a href='http://zuqi.li'><Icon icon='linkedin' />ca.linkedin.com/in/zuqili</a>
            </div>
        </div>
    );
};

Header.displayName = 'Header';
Header.propTypes = {
    term: React.PropTypes.string,
};

module.exports = cssModules(Header, styles);