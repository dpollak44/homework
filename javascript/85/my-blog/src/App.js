import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';

export default class App extends Component {
  state = {
    bloggers: null,
    selectedBlog: null
  }

  handleSelectedBlog = (event, blogger) => {
    this.setState({
      selectedBlog: blogger

    });

    // return (<Posts blogger={this.state.selectedBlog} />)

  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw Error('Failed to fetch bloggers');
        }
        return response.json();
      })
      .then(BloggerData => {
        this.setState({

          bloggers: BloggerData
          ,
          error: null
        });
      })

      .catch(e => {
        this.setState({
          error: e.message,
          blogger: null
        });
      });

  }





  render() {
    let bloggerDiv;
    let test;



    return (
      <>

        {this.state.bloggers && this.state.bloggers.map(blogger => < div className="blog" onClick={event => this.handleSelectedBlog(event, blogger)} key={blogger.id} >{blogger.id} <div>{blogger.name}</div></div>)}
        {this.state.selectedBlog && <Posts blogger={this.state.selectedBlog} />}

      </>

    )
  }

}
