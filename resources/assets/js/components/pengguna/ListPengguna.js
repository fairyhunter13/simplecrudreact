import React,{Component} from 'react';
import {DataTable} from '../../components/crud';
import {MainHeader} from '../../components/layout';


export default class ListPengguna extends Component{
  render(){
    return (
      <div>
        <MainHeader/>

        <div className="content">
          <DataTable />
        </div>
      </div>
    );
  }
}
