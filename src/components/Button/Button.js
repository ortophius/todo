const React = require('react');
const {PropTypes} = require('prop-types');
const {Icon} = require('../Icon/Icon');
require('./Button.scss');
/**
 * Button component
 * @class Button
 */
export class Button extends React.Component {
  /**
   * @contructs Button
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.processClick = this.processClick.bind(this);
  }

  /**
   * Process clicks
   * @param {Event} e
   */
  processClick(e) {
    this.props.handler();
  }

  /**
   * @return {*}
   */
  render() {
    return (
      <button
        className={`button button-${this.props.color} ${this.props.className}`}
        onClick={this.props.handler}>
        <Icon name={this.props.icon} color="white" />
      </button>
    );
  }
}

Button.propTypes = {
  handler: PropTypes.func,
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: 'purple',
};

