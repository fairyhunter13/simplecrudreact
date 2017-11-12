import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class MainHeader extends Component{


    render(){
      let rows = [];
      this.props.crumbs.map((crumb, index) =>{
          if(crumb.link){
              rows.push(
                <li key={index}>{crumb.text}</li>
              );
          }else{
            rows.push(
                <li key={index}><a className="link-effect" href={crumb.link}>{crumb.text}</a></li>
            );
          }
      });
      return (
          <div className="content bg-gray-lighter">
              <div className="row items-push">
                  <div className="col-sm-7">
                      <h1 className="page-heading">
                          {this.props.header.title} <small>{this.props.header.subTitle}</small>
                      </h1>
                  </div>
                  <div className="col-sm-5 text-right hidden-xs">
                      <ol className="breadcrumb push-10-t">
                        {rows}
                      </ol>
                  </div>
              </div>
          </div>
      );
    }
}
export default MainHeader;
