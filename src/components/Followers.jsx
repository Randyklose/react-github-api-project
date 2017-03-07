import React from 'react';
import GithubUser from './GithubUser';

class Followers extends React.Component{

  constructor() {
      super();
      this.state = {};
  }

  fetchData(){
    fetch(`https://api.github.com/users/${this.props.params.username}/followers?access_token=2c927c835e4e710d0c7a0d11ac89924c64b98ea5`)
    .then(response => console.log(response))
      //response.json())
    .then(
        follower => {
            // How can we use `this` inside a callback without binding it??
            // Make sure you understand this fundamental difference with arrow functions!!!
            this.setState({
                followers: follower
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
      if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
      }

      return (
      <div className="followers-page">
        <h2>Followers of {this.props.params.username}: </h2>
        <ul className="followers">
          {this.state.followers.map((follower, i)=><GithubUser user={follower} key={i}/>)}
        </ul>
      </div>
      );
  }
}

export default Followers;
