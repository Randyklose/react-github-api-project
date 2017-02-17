import React from 'react';
import GithubRepo from './GithubRepo';
//2c927c835e4e710d0c7a0d11ac89924c64b98ea5
class Repos extends React.Component{

  constructor() {
      super();
      this.state = {};
  }

  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/repos?access_token=2c927c835e4e710d0c7a0d11ac89924c64b98ea5`)
    .then(response => response.json())
    .then(
        repo => {
            // How can we use `this` inside a callback without binding it??
            // Make sure you understand this fundamental difference with arrow functions!!!
            this.setState({
                repos: repo
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
      if (!this.state.repos) {
      return <div>LOADING REPOS...</div>
      }

      return (
      <div className="followers-page">
        <h2>Repos of {this.props.params.username}: </h2>
        <ul className="followers">
          {this.state.repos.map((repo, i)=><GithubRepo user={repo} key={i}/>)}
        </ul>
      </div>
      );
  }
}

export default Repos;
