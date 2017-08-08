import React, { Component } from 'react';
import { Link } from 'react-router'
import axios from 'axios';


class Cek extends React.Component {
  constructor(props) {
  super(props);
  this.state = { data: [] };
  this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  loadCommentsFromServer() {
    axios.get('http://localhost:3001/api/comments')
    .then(res => {
    this.setState({ data: res.data });
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  }

 render() {
   let commentNodes = this.state.data.map(comment => {
   return (
     <div>
     <h3>{comment.name} </h3>
     <h3>{comment.lokasi} </h3>
     </div>
   )
   })

   return (
   <div>
    <Header/>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h3 className="page-header">Kosan yang lain</h3>
            </div>
        </div>
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
}
export default Cek;

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
