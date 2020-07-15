import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
 
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          
          image={props.imgsrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            {props.para}
            <p className="cardtext py-1">We provide 24*7 support via web</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button className="cardbtn  ">
          CLICK NOW
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
