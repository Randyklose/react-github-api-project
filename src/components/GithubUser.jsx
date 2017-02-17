import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component{
static propTypes = {
   user:React.PropTypes.object.isRequired
}

render() {
  return (
    <Link className="user-info__text" to={`/user/${this.props.user.login}`}>
      <img alt=" " className="user-info__avatar" src={this.props.user.avatar_url}/>
      <p className="user-info__title">{this.props.user.login}</p>
    </Link>
  )
}

}

export default GithubUser;
