import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Join from './components/Join/Join'
import Home from './components/Home/Home'

const App=()=>(
  <BrowserRouter>
    <Route path='/' exact component={Join}/>
    <Route path='/home' component={Home}/>
  </BrowserRouter>
)
// class App extends Component{
//   state={
//     tickets:null
//   }
//   // componentDidMount(){
//   //   console.log('mounted');
//   //   db.collection('tickets')
//   //     .get()
//   //     .then((snapshot)=>{
//   //       const tickets=[];
//   //       snapshot.forEach(doc=>{
//   //         const data=doc.data();
//   //         tickets.push(data);
//   //       })
//   //       this.setState({tickets:tickets})
//   //       console.log(snapshot);
//   //     })
//   //     .catch(err=>{console.log(err)});
//   // }
//   addNewTicket=()=>{
//     var t=generate();
//     db.collection('tickets').add({
//       row1:t[0],
//       row2:t[1],
//       row3:t[2]
//     })
//     .then((ticket)=>{
//       console.log(ticket.toString());
//     })
//     .catch((err)=>{
//       console.log(err);
//     });

//   }
//   render(){
//     return(
//       <div>
//         Welcome
//         {
//           this.state.tickets && this.state.tickets.map(ticket=>{
//             return(
//               <div>
//                 <p>Row1 {String(ticket.row1)}</p>
//                 <p>Row2 {String(ticket.row2)}</p>
//                 <p>Row3 {String(ticket.row3)}</p>
//               </div>
//             )
//           })
//         }
//         <button onClick={this.addNewTicket}>Generate ticket</button>
//         <h1>Now from program</h1>
//       </div>
//     )
//   }
// }
export default App;