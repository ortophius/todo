const React = require('react');
const {Greeting} = require('../Greeting/Greeting');
const {AddButton} = require('../AddButton/AddButton');
const {Card} = require('../Card/Card');

/**
 * root class of the React application.
 * @class App
 */
class App extends React.Component {
  /**
  * Contructor for App
  * @constructs App
  * @param {*} props
  */
  constructor(props) {
    super(props);
    this.state = {empty: true};
  }

  /**
   * @return {*}
   */
  render() {
    const empty = this.state.empty;
    const greeting = empty ? <Greeting /> : '';
    return (
      <div>
        <Card>
        </Card>
        {greeting}
        <AddButton />
      </div>
    );
  }
}

exports.App = App;
