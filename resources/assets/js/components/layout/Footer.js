import React, { Component } from 'react';

class Footer extends Component{
  render() {
      return (
        <footer id="page-footer" className="content-mini content-mini-full font-s12 bg-gray-lighter clearfix">
            <div className="pull-right">
                Crafted with <i className="fa fa-heart text-city"></i> by <a className="font-w600" href="http://goo.gl/vNS3I" target="_blank">pixelcave</a>
            </div>
            <div className="pull-left">
                <a className="font-w600" href="http://goo.gl/6LF10W" target="_blank">OneUI</a> &copy; <span className="js-year-copy"></span>
            </div>
        </footer>
      );
  }
}

export default Footer;
