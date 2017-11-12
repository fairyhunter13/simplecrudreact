import React,{ Component } from 'react';

export default class Aside extends Component{
  render() {
      return (
        <aside id="side-overlay">
            <div id="side-overlay-scroll">
                <div className="side-header side-content">
                    <button className="btn btn-default pull-right" type="button" data-toggle="layout" data-action="side_overlay_close">
                        <i className="fa fa-times"></i>
                    </button>
                    <span className="font-w600 push-10-l">Admin</span>
                </div>
                <div className="side-content remove-padding-t">
                    <div className="block pull-r-l">
                        <div className="block-header bg-gray-lighter">
                            <ul className="block-options">
                                <li>
                                    <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh"></i></button>
                                </li>
                                <li>
                                    <button type="button" data-toggle="block-option" data-action="content_toggle"></button>
                                </li>
                            </ul>
                            <h3 className="block-title">Block</h3>
                        </div>
                        <div className="block-content">
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
      );
  }
}
