import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class RTable extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      data: this.props.data
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.data !== nextProps.data) {
      return {
        data: nextProps.data,
      };
    }
    return null;
  }

  render(){
    return(
      <div className="table-div">
        <BootstrapTable data={this.state.data}
                        options={ { noDataText: 'Enter the number to display data' } }
                        >
          <TableHeaderColumn row='0' colSpan='2' dataAlign='center'>Frequency Data</TableHeaderColumn>
          <TableHeaderColumn row="1" dataField='keyword' isKey>Keyword</TableHeaderColumn>
          <TableHeaderColumn row="1" dataField='count'>Frequency</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default RTable;
