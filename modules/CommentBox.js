import React, { Component } from 'react';
import axios from 'axios';


class CommentBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
 }

 loadCommentsFromServer() {
   axios.get(this.props.url)
   .then(res => {
   this.setState({ data: res.data });
   })
 }

 componentDidMount() {
   this.loadCommentsFromServer();
   setInterval(this.loadCommentsFromServer, this.props.pollInterval);
 }

 render() {
   let commentNodes = this.state.data.map(comment => {
   return (
     <div>
     <h3>{comment.author} </h3>
     <h3>{comment.text} </h3>
     </div>
   )
   })

   return (
   <div>
   AAAA
     { commentNodes }
   </div>
   )
 }
}
export default CommentBox;
