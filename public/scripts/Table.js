var cols = [
  {key: 'name1', label: 'Name'},
  {key: 'qty', label: 'Quantity'},
  {key: 'purQty', label: 'Purchased Quantity'},
  {key: 'price', label: 'Price'}
];

var data = [
  {name1: 'Jasmine', qty: 5, price: 5000},
  {name1: 'Annie', price: 10000, qty: 15},
  {name1: 'Kevin', price: 10000, qty: 10, purQty: 5},
  {name1: 'George', price: 10000, qty: 30, purQty: 4},
  {qty: 2, price: 15000, name1: 'Suganthi'}
];

var Table = React.createClass({
  getInitialState: function () {
    return {
      SortKey: "name1",
      SortOrder: true
    }
  },

  onHeaderClick: function (key) {
    console.log(key);
  },

  render: function () {
    var headerComponents = this.getHeaders();
    var rowComponents = this.generateRows();
    return (
      <table>
        <thead> {headerComponents} </thead>
        <tbody> {rowComponents} </tbody>
      </table>
    );
  },

  getHeaders: function () {
    var cols = this.props.cols;
    var self = this;
    return cols.map(function (colData) {
      return (
        <th
          className='header-cell'
          key={colData.key}
          onClick={function (e) {
            self.onHeaderClick(colData.key);
          }}
        >
          {colData.label}
        </th>
      );
    });
  },

  generateRows: function () {
    var cols = this.props.cols;
    var data = this.props.data;

    data.sort(function (ov, nv) {
      if (ov.name1 < nv.name1) return -1;
      if (ov.name1 > nv.name1) return 1;
      return 0;
    });
    return data.map(function (item) {
      var cells = cols.map(function (colData) {
        return <td> {item[colData.key]} </td>;
      });
      return <tr className='rows-cell' key={item.id}> {cells} </tr>;
    });
  }
});

React.render(<Table cols={cols} data={data}/>, document.getElementById('jas'));
