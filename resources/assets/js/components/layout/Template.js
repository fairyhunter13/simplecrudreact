import React,{ Component } from 'react';
import {MainHeader} from './';

export default class Template extends Component{
  render(){
    return(
          <div>
            <MainHeader/>

            <div className="content">
                <div className="block">
                    <div className="block-header">
                        <ul className="block-options">
                            <li>
                                <button type="button"><i className="si si-settings"></i></button>
                            </li>
                            <li>
                                <button type="button" data-toggle="block-option" data-action="fullscreen_toggle"></button>
                            </li>
                            <li>
                                <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh"></i></button>
                            </li>
                            <li>
                                <button type="button" data-toggle="block-option" data-action="content_toggle"></button>
                            </li>
                            <li>
                                <button type="button" data-toggle="block-option" data-action="close"><i className="si si-close"></i></button>
                            </li>
                        </ul>
                        <h3 className="block-title">My Block</h3>
                    </div>
                    <div className="block-content">
                        <p>...</p>
                    </div>
                </div>
            </div>
          </div>
    );
  }
}
