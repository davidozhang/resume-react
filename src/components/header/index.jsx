const React = require('react');
const cssModules = require('react-css-modules');

const styles = require('./styles.scss');

const Icon = require('../icon/index.jsx');

const Header = (props) => {
    const { term } = props;
    return (
        <div styleName='header' className='clear-fix'>
            <div styleName='main-desc'>
                <p styleName='name' className='bold-text'>Zach <span className='med-text'>(Zuqi)</span> Li</p>
                <p styleName='term'> <span className='bold-text'>Software Engineer</span> | University of Waterloo</p>
            </div>
            <div styleName='contact-links' className='med-text'>
                <a href='http://zuqi.li'><Icon icon='website' />zuqi.li</a>
                <a><Icon icon='phone' />(519) 729 8365</a>
                <a href='mailto:lizuqiliang@gmail.com'><Icon icon='email' />lizuqiliang@gmail.com</a>
                <a href='https://github.com/zuqini'><Icon icon='github' />github.com/zuqini</a>
                <a href='https://ca.linkedin.com/in/zuqili'><Icon icon='linkedin' />linkedin.com/in/zuqili</a>
            </div>
        </div>
    );
};

Header.displayName = 'Header';
Header.propTypes = {
    term: React.PropTypes.string,
};

module.exports = cssModules(Header, styles);