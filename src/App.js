import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import Testimonials from './components/Testimonials.js';

class App extends Component {
    state = {
      resumeData: {}
    }

  componentDidMount() {
    axios.get('http://localhost:3000/resumeData.json')
    .then(response => {this.setState({resumeData: response.data })})
    .catch(err => {console.log(err)})
  }


  render() {
    console.log(this.state.resumeData);
    return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>);
  }
}

export default App;
