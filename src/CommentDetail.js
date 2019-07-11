import React from 'react';

const CommentDetail = (props) => {
  return(
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
              {props.date}
          </span>
        </div>
        <div className="text">
          {props.comment}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;


























<script type="text/babel" data-presets="env,react">
    const Segment = (props) => {
        return (
          <div className="ui placeholder segment">
              <div className="ui icon header">
                  <i className={props.icon}></i>
                  {props.title}
              </div>
              <p>
                {props.paragraph}
              </p>
              <div className="ui primary button">{props.button}</div>
          </div>
        );

    }

    const Segment = () => {
      return (
        <div className="ui placeholder segment">
            <h4 class="ui header">For Your Information</h4>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
        </div>
      );
    }

    const App = () => {
        return (
            <div>
                <Card />
                <Segment />
            </div>
        );
    }




    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>


<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
