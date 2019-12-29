const React = require('react');
require('./Greeting.scss');

/**
 * @class Greeting
 * @description Provides greeting screen for the app
 */
export class Greeting extends React.Component {
  /**
   * Greeting constructor
   * @constructs Greeting
   * @param {React.Props} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    return (
      <p className="greeting">
      У вас ещё нет запланированных дел.<br/>
      Начните планировать &mdash; добавьте первую цель!
      </p>
    );
  }
}
