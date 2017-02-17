import React from 'react';

class GithubRepo extends React.Component{
static propTypes = {
   user:React.PropTypes.object.isRequired
}

render() {
  return (
    <a className="user-info__text" href={this.props.user.url} target='_blank'>
      {this.props.user.full_name}
    </a>
  )
}

}

export default GithubRepo;
