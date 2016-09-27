var cols = [
    { key: 'name1', label: 'Name' },
    { key: 'qty', label: 'Quantity' },
    { key: 'purQty', label: 'Purchased Quantity' },
    { key: 'price', label: 'Price' }
];

var data = [
    { name1:'Jasmine',qty:5 ,price:5000},
    { name1:'Annie',price:10000,qty:10},
    { name1:'Kevin',price:10000,qty:10, purQty:5},
    { name1:'George',price:10000,qty:10, purQty:4},
    { qty:15 ,price:15000,name1:'Suganthi'}
];

var Table = React.createClass({
    render: function() {
        var headerComponents = this.getHeaders(),
            rowComponents = this.generateRows();
            var sortComponents = this.getSortedRows();
        return (
            <table>
                <thead> {headerComponents} </thead>
                <tbody> {rowComponents} </tbody>
              <tbody> {sortComponents} </tbody>
            </table>
        );
    },

    getHeaders: function() {
        var cols = this.props.cols;
        return cols.map(function(colData) {
            return <th className='header-cell' key={colData.key}> {colData.label} </th>;
        });
    },

    generateRows: function() {
        var cols = this.props.cols,
            data = this.props.data;
        return data.map(function(item) {
            var cells = cols.map(function(colData) {
                return <td> {item[colData.key]} </td>;
            });
            return <tr className='rows-cell' key={item.id}> {cells} </tr>;
        });
    },

    getSortedRows: function(cells) {
       var sortedData = cells.sort(sort_by({item[colData.key]}: 'Quantity', asec));

    }
  
});

React.render(<Table cols={cols} data={data}/>, document.getElementById('jas'));




