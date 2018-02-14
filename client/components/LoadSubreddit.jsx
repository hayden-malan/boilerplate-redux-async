import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'




class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

  }

}

render() {
  return (
    <div>
      <input type='text'
       value={this.state.subreddit}
       onChange={(e) => this.setTarget(e)} />
     <button
       onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}
>Fetch Posts</button>
</div>
  )
 }


  const LoadSubreddit = ({dispatch}) => (
<div>
    <input type='text' name='subreddit' />

    <button onClick={() => dispatch(fetchPosts('newzealand'))}>
      Fetch Posts
    </button>
</div>
  )

export default connect()(LoadSubreddit)
