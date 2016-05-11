var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="Header-image">
      <Link to="/">
        <img src="./Images/Fixed-header/wdoh.png" className="wdoh-img" title="Washington Department of Health" />
      </Link>
    </div>
  }
});
