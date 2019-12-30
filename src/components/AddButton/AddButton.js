const React = require('react');
const {PropTypes} = require('prop-types');
const {Icon} = require('../Icon/Icon');
require('./AddButton.scss');
/**
 * AddButton component
 * @class AddButton
 */
export class AddButton extends React.Component {
  /**
   * @contructs AddButton
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    return (
      <button className="add-button" onClick={this.props.handler}>
        <Icon name="fas fa-plus" color="white" />
      </button>
    );
  }
}

AddButton.propTypes = {
  handler: PropTypes.func,
};
