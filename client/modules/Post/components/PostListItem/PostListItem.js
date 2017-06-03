import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle, FlatButton} from "material-ui";

// Import Images
import heroImage from 'assets/images/north-sydney-pool.jpg';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <Card>
        <CardMedia>
          <img src={heroImage} />
        </CardMedia>
        <div>
          <Link to={`/posts/${props.post.slug}-${props.post.cuid}`}>
            <CardTitle title={props.post.title} />
          </Link>

          <CardText>
            {props.post.content}
          </CardText>
          <CardActions>
            <FlatButton label="More Info" />
          </CardActions>
          {/*<p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>*/}
        </div>
      </Card>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
