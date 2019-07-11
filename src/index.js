//import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//create react component
const App = function() {
  return (
  <div className="ui container comments">
    <ApprovalCard>
      <h4>Warning!</h4>
      Are you sure you want to delete?
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
      author='Luke'
      date="Today"
      comment="Really cool post!"
      image={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
      author='Jane'
      date="Yesterday"
      comment="I love this blog"
      image={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail
      author='Carrie'
      date="Last week"
      comment="Good job!"
      image={faker.image.avatar()}
      />
    </ApprovalCard>
  </div>
  );
}

//take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
