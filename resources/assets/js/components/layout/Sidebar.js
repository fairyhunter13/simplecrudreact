import React,{ Component } from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';


export default class Sidebar extends Component{
  render() {
      return (
        <nav id="sidebar">
            <div id="sidebar-scroll">
                <div className="sidebar-content">
                    <div className="side-header side-content bg-white-op">
                        <button className="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
                            <i className="fa fa-times"></i>
                        </button>
                        <Dropdown id="dropdown-change-color" className="pull-right">
                          <Dropdown.Toggle className="text-gray" noCaret bsStyle="link">
                            <i className="si si-drop"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-right font-s13 sidebar-mini-hide">
                            <MenuItem eventKey="1" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                              <i className="fa fa-circle text-default pull-right"></i> <span className="font-w600">Default</span>
                            </MenuItem>
                            <MenuItem eventKey="2" data-toggle="theme" data-theme="assets/css/themes/amethyst.min.css" href="javascript:void(0)">
                              <i className="fa fa-circle text-amethyst pull-right"></i> <span className="font-w600">Amethyst</span>
                            </MenuItem>
                            <MenuItem eventKey="3" data-toggle="theme" data-theme="assets/css/themes/city.min.css" href="javascript:void(0)">
                              <i className="fa fa-circle text-city pull-right"></i> <span className="font-w600">City</span>
                            </MenuItem>
                            <MenuItem eventKey="4" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="javascript:void(0)">
                              <i className="fa fa-circle text-flat pull-right"></i> <span className="font-w600">Flat</span>
                            </MenuItem>
                            <MenuItem eventKey="5" data-toggle="theme" data-theme="assets/css/themes/modern.min.css" href="javascript:void(0)">
                              <i className="fa fa-circle text-modern pull-right"></i> <span className="font-w600">Modern</span>
                            </MenuItem>
                            <MenuItem eventKey="6" data-toggle="theme" data-theme="assets/css/themes/smooth.min.css" href="javascript:void(0)">
                              <i className="fa fa-circle text-smooth pull-right"></i> <span className="font-w600">Smooth</span>
                            </MenuItem>
                          </Dropdown.Menu>
                        </Dropdown>
                        <a className="h5 text-white" href="start_backend.html">
                            <i className="fa fa-circle-o-notch text-primary"></i> <span className="h4 font-w600 sidebar-mini-hide">ne</span>
                        </a>
                    </div>

                    <div className="side-content">
                        <ul className="nav-main">
                            <li>
                                <a className="active" href="start_backend.html"><i className="si si-speedometer"></i><span className="sidebar-mini-hide">Dashboard</span></a>
                            </li>
                            <li className="nav-main-heading"><span className="sidebar-mini-hide">Header</span></li>
                            <li>
                                <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-wrench"></i><span className="sidebar-mini-hide">Dropdown</span></a>
                                <ul>
                                    <li>
                                        <a href="start_backend.html">Link #1</a>
                                    </li>
                                    <li>
                                        <a href="start_backend.html">Link #2</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      );
  }
}
