import React, { Component } from 'react';
import { Link } from 'react-router'
import axios from 'axios';


class Kosan extends React.Component {
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
       <div className="row">
           <div className="col-md-7">
               <img className="img-responsive" src={comment.gambar} alt=""/>
           </div>
           <div className="col-md-5">
               <h3><b>{comment.name}</b></h3>
               <hr/>
               <h4>{comment.lokasi}</h4>
               <hr/>
               <p>{comment.deskripsi}</p>
               <hr/>
               <h4>Harga {comment.harga}</h4>
               <hr/>
               <Link to={"/kosan/"+comment._id} className="btn btn-primary">Detail Kosan <span className="glyphicon glyphicon-chevron-right"></span></Link>
           </div>
       </div>
       <hr/>
     </div>
   )
   })

   return (
   <div>
    <Header/>
    <div className="container">
      <div className="row">
          <div className="col-lg-12">
              <h1 className="page-header">E-Kosan
                  <small> Temukan sesuai kebutuhanmu</small>
              </h1>
          </div>
      </div>
      {commentNodes}

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
                    <li className="active"><Link to="/kosan" activeClassName="active">Daftar Kosan<span className="sr-only">(current)</span></Link></li>
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                  </ul>
              </div>
            </div>
        </nav>
      );
   }
}


export default Kosan;
