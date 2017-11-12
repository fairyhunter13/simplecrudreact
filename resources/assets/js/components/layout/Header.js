import React,{ Component } from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';


export default class Header extends Component{
  render() {
      return (
        <header id="header-navbar" className="content-mini content-mini-full">
            <ul className="nav-header pull-right">
                <li>
                    <button className="btn btn-default" data-toggle="layout" data-action="side_overlay_toggle" type="button">
                        <i className="fa fa-tasks"></i>
                    </button>
                </li>
            </ul>

            <ul className="nav-header pull-left">
                <li className="hidden-md hidden-lg">
                    <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                        <i className="fa fa-navicon"></i>
                    </button>
                </li>
                <li className="hidden-xs hidden-sm">
                    <button className="btn btn-default" data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
                        <i className="fa fa-ellipsis-v"></i>
                    </button>
                </li>
                <li className="visible-xs">
                    <button className="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" data-className="header-search-xs-visible" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </li>
                <li className="js-header-search header-search">
                    <form className="form-horizontal" action="start_backend.html" method="post">
                        <div className="form-material form-material-primary input-group remove-margin-t remove-margin-b">
                            <input className="form-control" type="text" id="base-material-text" name="base-material-text" placeholder="Search.."/>
                            <span className="input-group-addon"><i className="si si-magnifier"></i></span>
                        </div>
                    </form>
                </li>
            </ul>
        </header>
      );
  }
}
