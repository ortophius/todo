const React = require('react');
const {Greeting} = require('../Greeting/Greeting');
const {AddButton} = require('../AddButton/AddButton');
const {Card} = require('../Card/Card');
const {Row} = require('../Row/Row');

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
    this.state = {
      empty: true,
      rows: [],
    };

    this.addRow = this.addRow.bind(this);
    this.getRows = this.getRows.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.editRow = this.editRow.bind(this);
  }

  /**
   * Adds a row to list.
   * @param {string} title
   * @param {string} id
   */
  addRow(title, id) {
    this.setState((state) => {
      const [...rows] = state.rows;
      const title = (title === undefined) ? '' : title;
      const id = (id === undefined) ?
          `${rows.length}_${new Date().getTime()}` : id;
      const row = {
        id: id,
        title: title,
        order: rows.length,
        done: false,
      };
      rows.push(row);

      return {
        rows,
      };
    });
  }

  /**
   * Remove row with specified `id`
   * @param {string} id
   */
  removeRow(id) {
    console.log('remove');
    this.setState((state) => {
      const rows = state.rows.filter((row) => row.id != id);

      console.log(rows);
      return {
        rows,
      };
    });
  }

  /**
   * Edit existing row
   * @param {string} id
   * @param {string} title
   * @param {boolean} done
   */
  editRow(id, title, done) {
    this.setState((state) => {
      const rows = state.rows.map((row) => {
        if (row.id == id) {
          row.title = title;
          row.done = true;
        }
        return row;
      });
      return {
        rows,
      };
    });
  }

  /**
   * Generate Rows from array
   * @return {Array}
   */
  getRows() {
    const rows = this.state.rows.map((row) =>
      <Row
        key={row.id}
        id={row.id}
        title={row.title}
        destroyHandler={this.removeRow}
        changeHandler={this.editRow} />
    );
    return rows;
  }

  /**
   * @return {*}
   */
  render() {
    const addRow = this.addRow;
    const length = this.state.rows.length;
    const greeting = (length == 0) ? <Greeting /> : null;
    const card = (length > 0) ?
    <Card>
      {this.getRows()}
    </Card> :
    null;
    const handler = (e) => {
      addRow();
    };
    return (
      <div>
        {card}
        {greeting}
        <AddButton handler={handler}/>
      </div>
    );
  }
}

exports.App = App;
