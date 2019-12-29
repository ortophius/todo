const React = require('react');
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
      <button className="add-button">
        <Icon name="fas fa-plus" color="white" />
      </button>
    );
  }
}
