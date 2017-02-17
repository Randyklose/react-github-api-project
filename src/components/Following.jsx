import React from 'react';
import GithubUser from './GithubUser';

class Following extends React.Component{

  constructor() {
      super();
      this.state = {};
  }

  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/following?access_token=2c927c835e4e710d0c7a0d11ac89924c64b98ea5`)
    .then(response => response.json())
    .then(
        following => {
            // How can we use `this` inside a callback without binding it??
            // Make sure you understand this fundamental difference with arrow functions!!!
            this.setState({
                following: following
            });
        }
    );
  }

  componentDidMount(){
this.fetchData()
}

componentDidUpdate(prevProps, prevState){
if(prevProps.username !== this.props.username){
  this.fetchData()
}
}

  render() {
      if (!this.state.following) {
      return <div>LOADING FOLLOWING...</div>
      }

      return (
      <div className="followers-page">
        <h2>{this.props.params.username} is following: </h2>
        <ul className="followers">
          {this.state.following.map((following, i)=><GithubUser user={following} key={i}/>)}
          </ul>
      </div>
      );
  }
}

export default Following;
