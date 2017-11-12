import React,{Component} from 'react';
import {DataTable} from '../../components/crud';
import {MainHeader} from '../../components/layout';
import {withRouter} from 'react-router-dom';

class ListPengguna extends Component{


  render(){
    let { match, location, history } = this.props;
    let header = [
      {
        title: 'Manajemen Pengguna',
        subTitle: 'Mengelola pengguna untuk seluruh aksi CRUD (Create, Read, Update, Delete)'
      },
      {
        title: 'Daftar Pengguna',
        subTitle: 'Seluruh daftar pengguna beserta aksi yang tersedia'
      }
    ];
    let crumbs = [
        {
          text: 'Dashboard',
          link: ''
        },
        {
          text: 'Pengguna',
          link: location.pathname
        }
    ];

    return (
      <div>
        <MainHeader header={header[0]} crumbs={crumbs}/>

        <div className="content">
          <DataTable header={header[1]}/>
        </div>
      </div>
    );
  }
}

export default withRouter(ListPengguna);
