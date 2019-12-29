const React = require('react');
const {PropTypes} = require('prop-types');
require('./Card.scss');
/**
 * Card component
 * @class Card
 */
export class Card extends React.Component {
  /**
   * @contructs Card
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
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.any,
};
