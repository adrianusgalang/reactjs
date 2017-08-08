import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">About E-Kosan
                  </h1>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <img className="img-responsive" src="http://rumahdijual.org/athumb/6/f/8/big380398.jpg" alt=""/>
              </div>
              <div className="col-md-4">
                  <h3>Tentang E-Kosan</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <Link to={"/"} className="btn btn-primary">Kembali ke Home<span className="glyphicon glyphicon-chevron-right"></span></Link>
              </div>
          </div>
          <hr/>
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; E-KosanKu</p>
                </div>
            </div>
        </footer>
        </div>
      </div>
    )
  }
})

class Header extends React.Component {
   render() {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">E-Kosan</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/kosan" activeClassName="active">Daftar Kosan</Link></li>
                    <li className="active"><Link to="/about" activeClassName="active">About<span className="sr-only">(current)</span></Link></li>
                  </ul>
              </div>
            </div>
        </nav>
      );
   }
}
