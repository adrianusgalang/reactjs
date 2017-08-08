import React from 'react'
import { Link } from 'react-router'
import axios from 'axios';

class Kos extends React.Component {

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
    if(this.props.params.id_kosan != comment._id){
      return null;
    }
    return (
      <div>
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header">{comment.name}
                  </h1>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8">
                  <img className="img-responsive" src={comment.gambar} alt=""/>
              </div>
              <div className="col-md-4">
                  <h3>Deskripsi Kosan</h3>
                  <p>{comment.deskripsi}</p>
                  <hr/>
                  <h3>Fasilitas</h3>
                  <p>{comment.fasilitas}</p>
                  <hr/>
                  <h3>Harga</h3>
                  <p>{comment.harga}</p>
                  <hr/>
                  <h3>Kontak</h3>
                  <p>{comment.kontak}</p>
                  <hr/>
                  <h3>Lokasi</h3>
                  <p>{comment.lokasi}</p>
                  <hr/>
                  <h3>Alamat</h3>
                  <p>Belum ada</p>
              </div>
          </div>
      </div>
    )
    })

    let kosLain = this.state.data.map(comment => {
    if(this.props.params.id_kosan == comment._id){
      return null;
    }
    return (
      <div className="col-sm-3 col-xs-6">
            <Link to={"/kosan/"+comment._id}>{comment.name}</Link>
        </div>
    )
    })

    return (
      <div>
        <Header/>
            <div className="container">
              {commentNodes}
              <div className="row">
                  <div className="col-lg-12">
                      <h3 className="page-header">Kosan yang lain</h3>
                  </div>
                  {kosLain}
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

export default Kos;
