import React,{ Component } from 'react';
import PropTypes from 'prop-types';

const TableHeader = ()=>(
  <tr>
    <th className="text-center"></th>
    <th>Name</th>
    <th className="hidden-xs">Email</th>
    <th className="text-center" style={{width: '10%'}}>Actions</th>
  </tr>
)

const TableRow = ({index, record})=>(
  <tr>
    <td className="text-center">{index}</td>
    <td className="font-w600">{record.name}</td>
    <td className="hidden-xs">{record.email}</td>
    <td className="text-center">
      <div className="btn-group">
        <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
        <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
      </div>
    </td>
  </tr>
)

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  record: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default class TablePengguna extends Component{


  renderRows(){
    let trRows =[];
    let index = 0;
    Simple.users.forEach((record)=>{
      trRows.push(
        <TableRow key={++index} record={record} index={index}/>
      );
    });
    return trRows;
  }

  render(){
    let trRows = this.renderRows();


    return(
              <div className="block">
                <div className="block-header">
                  <h3 className="block-title">{this.props.header.title} <small>{this.props.header.subTitle}</small></h3>
                </div>
                <div className="block-content">
                  <table className="table table-bordered table-striped js-dataTable-full-pagination">
                    <thead>
                      <TableHeader key={'table-header'}/>
                    </thead>
                    <tbody>
                      {trRows}
                    </tbody>
                  </table>
                </div>
              </div>
    );
  }
}

TablePengguna.propTypes ={
  header: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired
  }).isRequired,
};
