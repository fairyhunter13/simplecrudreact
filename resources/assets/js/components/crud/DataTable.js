import React,{ Component } from 'react';


export default class DataTable extends Component{
  render(){
    let thHeader = [];
    let trRows = [];
    let index = 0;
    Object.keys(Simple.users[0]).forEach((head)=>{
      if(head.toLowerCase().localeCompare('id')==0){
         thHeader.push(
           <th key={++index} className="text-center"></th>
         );
      }else{
        thHeader.push(
          <th key={++index} className="hidden-xs">{head.charAt(0).toUpperCase()+head.slice(1)}</th>
        );
      }
    });
    thHeader.push(
      <th key={++index} className="text-center" style={{width: '10%'}}>Actions</th>
    );

    return(
              <div className="block">
                <div className="block-header">
                  <h3 className="block-title">{this.props.header.title} <small>{this.props.header.subTitle}</small></h3>
                </div>
                <div className="block-content">
                  <table className="table table-bordered table-striped js-dataTable-full-pagination">
                    <thead>
                      <tr>
                        <th className="text-center"></th>
                        <th>Name</th>
                        <th className="hidden-xs">Email</th>
                        <th className="hidden-xs" style={{width: '15%'}}>Access</th>
                        <th className="text-center" style={{width: '10%'}}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td className="font-w600">Amy Hunter</td>
                        <td className="hidden-xs">client1@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td className="font-w600">Susan Elliott</td>
                        <td className="hidden-xs">client2@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td className="font-w600">Rebecca Reid</td>
                        <td className="hidden-xs">client3@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td className="font-w600">Jeremy Fuller</td>
                        <td className="hidden-xs">client4@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td className="font-w600">John Parker</td>
                        <td className="hidden-xs">client5@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td className="font-w600">Julia Cole</td>
                        <td className="hidden-xs">client6@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-primary">Personal</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">7</td>
                        <td className="font-w600">Amanda Powell</td>
                        <td className="hidden-xs">client7@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-info">Business</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">8</td>
                        <td className="font-w600">Dennis Ross</td>
                        <td className="hidden-xs">client8@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">9</td>
                        <td className="font-w600">Roger Hart</td>
                        <td className="hidden-xs">client9@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">10</td>
                        <td className="font-w600">Julia Cole</td>
                        <td className="hidden-xs">client10@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">11</td>
                        <td className="font-w600">Megan Dean</td>
                        <td className="hidden-xs">client11@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">12</td>
                        <td className="font-w600">Joshua Munoz</td>
                        <td className="hidden-xs">client12@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">13</td>
                        <td className="font-w600">Bruce Edwards</td>
                        <td className="hidden-xs">client13@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">14</td>
                        <td className="font-w600">Sara Holland</td>
                        <td className="hidden-xs">client14@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-info">Business</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">15</td>
                        <td className="font-w600">Amanda Powell</td>
                        <td className="hidden-xs">client15@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">16</td>
                        <td className="font-w600">Rebecca Reid</td>
                        <td className="hidden-xs">client16@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">17</td>
                        <td className="font-w600">Amanda Powell</td>
                        <td className="hidden-xs">client17@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">18</td>
                        <td className="font-w600">Walter Fox</td>
                        <td className="hidden-xs">client18@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">19</td>
                        <td className="font-w600">Evelyn Willis</td>
                        <td className="hidden-xs">client19@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-primary">Personal</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">20</td>
                        <td className="font-w600">Ann Parker</td>
                        <td className="hidden-xs">client20@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">21</td>
                        <td className="font-w600">Jeremy Fuller</td>
                        <td className="hidden-xs">client21@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">22</td>
                        <td className="font-w600">Roger Hart</td>
                        <td className="hidden-xs">client22@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">23</td>
                        <td className="font-w600">Rebecca Reid</td>
                        <td className="hidden-xs">client23@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">24</td>
                        <td className="font-w600">Lisa Gordon</td>
                        <td className="hidden-xs">client24@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">25</td>
                        <td className="font-w600">Jeremy Fuller</td>
                        <td className="hidden-xs">client25@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">26</td>
                        <td className="font-w600">Judy Alvarez</td>
                        <td className="hidden-xs">client26@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-primary">Personal</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">27</td>
                        <td className="font-w600">Adam Hall</td>
                        <td className="hidden-xs">client27@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-success">VIP</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">28</td>
                        <td className="font-w600">Ethan Howard</td>
                        <td className="hidden-xs">client28@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-warning">Trial</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">29</td>
                        <td className="font-w600">Joshua Munoz</td>
                        <td className="hidden-xs">client29@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-info">Business</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">30</td>
                        <td className="font-w600">Judy Alvarez</td>
                        <td className="hidden-xs">client30@example.com</td>
                        <td className="hidden-xs">
                          <span className="label label-danger">Disabled</span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Edit Client"><i className="fa fa-pencil"></i></button>
                            <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="Remove Client"><i className="fa fa-times"></i></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
    );
  }
}
