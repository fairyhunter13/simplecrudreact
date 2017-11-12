import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class MainHeader extends Component{


    render(){
      const { match, location, history } = this.props
      return (
          <div className="content bg-gray-lighter">
              <div className="row items-push">
                  <div className="col-sm-7">
                      <h1 className="page-heading">
                          Title <small>Subtitle.</small>
                      </h1>
                  </div>
                  <div className="col-sm-5 text-right hidden-xs">
                      <ol className="breadcrumb push-10-t">
                          <li>Category</li>
                          <li><a className="link-effect" href="">Page</a></li>
                      </ol>
                  </div>
              </div>
          </div>
      );
    }
}
export default withRouter(MainHeader);
