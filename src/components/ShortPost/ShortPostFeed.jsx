import React, { useState, useEffect } from "react";
import "./ShortPost.css";
import { userService } from "../../services";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { getPostDetail } from "../../actions";

import Sandia from "../../img/sandia.jpeg";
import Ayote from "../../img/ayote.jpg";
import Pepino from "../../img/pepito.jpg";
import Tomate from "../../img/tomate.jpg";
import Zanahoria from "../../img/Zanahoria.jpg";
import Papas from "../../img/papas.jpeg";

function ShortPostFeed(props) {
  const { currentScreen, changeScreenType } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setPageNumber] = useState(1);
  const [postsLimit, setPostsLimit] = useState(12);
  const [post, setPost] = useState([]);
  let total = localStorage.getItem("Total Posts");
  const paginationIndex = Math.ceil(total / 8);
  const categories = [];

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPost = async () => {
      const result = await userService.getPostPage(currentPage, postsLimit);
      setPost(result.data.data);
      console.log(result.data.data);
    };
    fetchPost();
  }, [currentPage, currentScreen]);

  var arrayImage = [
    Papas,
    Sandia,
    Ayote,
    Pepino,
    Tomate,
    Zanahoria,
    Papas,
    Sandia,
    Ayote,
    Pepino,
    Tomate,
    Zanahoria,
    Papas,
    Sandia,
    Ayote,
    Pepino,
    Tomate,
    Zanahoria,
  ];

  let arrayCategories = [
    { category: "Hortalizas" },
    { category: "Frutas" },
    { category: "Legumbres" },
    { category: "Carnes" },
    { category: "Productos del Mar" },
    { category: "Granos" },
    { category: "Papas" },
    { category: "Sandia" },
    { category: "Ayote" },
    { category: "Pepino" },
    { category: "Tomate" },
    { category: "Zanahoria" },
    { category: "Papas" },
    { category: "Sandia" },
    { category: "Ayote" },
    { category: "Pepino" },
    { category: "Tomate" },
    { category: "Zanahoria" },
  ];

  let arraySubcategories = [
    { category: "Cebolla" },
    { category: "Ajo" },
    { category: "Espinaca" },
    { category: "Alcachofa" },
    { category: "Tomate" },
    { category: "Zanahoria" },
    { category: "Calabaza" },
    { category: "Sandia" },
    { category: "Ayote" },
    { category: "Pepino" },
    { category: "Tomate" },
    { category: "Zanahoria" },
    { category: "Papas" },
    { category: "Sandia" },
    { category: "Ayote" },
    { category: "Pepino" },
    { category: "Tomate" },
    { category: "Zanahoria" },
  ];

  let tomatoExamples  = [
    { category: "Tomate cherry" },
    { category: "Tomate perita" },
    { category: "Tomate verde" },
    { category: "Tomate rojo" },
    { category: "Tomate morado" },
    { category: "Tomate naranja" },
    { category: "Tomate amarillo" },
    { category: "Tomate anaranjado" },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handlePagination = (event, value) => {
    setPageNumber(value);
  };

  const postDtails = async (item) => {
    dispatch(getPostDetail(item));
  };

  const changeScreenHandler = (index) => {
    index === 0
      ? changeScreenType(1)
      : index === 1
      ? changeScreenType(2)
      : index === 2
      ? changeScreenType(3)
      : changeScreenType(1);
  };

  const renderScreen = (currentRender) => {
    console.log(currentRender);
    let list =
      currentRender === 0
        ? arrayCategories
        : currentRender === 1
        ? arraySubcategories
        : currentRender === 2
        ? tomatoExamples  
        : post;
    return list.map((post, index) => {
      const laP = arrayImage[index];
      return (
        <Grid item xs={6} sm={3} className={classes.cardContainer} key={index}>
          <Card
            className={classes.root}
            // onClick={() => postDtails(post._id)}
            onClick={() => changeScreenHandler(currentRender, post)}
          >
            {/* <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          Eco
        </Avatar>
      }
      title={post.titlePost}
      subheader={post.catergory}
    /> */}
            <CardMedia
              className={classes.media}
              image={laP}
              // title="Industria Agrícola"
            />
            <CardContent>
              <Typography
                style={{
                  textAlign: "center",
                }}
                variant="body1"
                color="textPrimary"
                component="p"
              >
                <h2>
                  {post.category.charAt(0).toUpperCase() +
                    post.category.slice(1)}
                </h2>
                {/* <h1>${post.price ? post.price : 0}</h1> */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  if (post === null) {
    return <div className="nulldata">...Loading...</div>;
  } else {
    return (
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.gridRoot}
      >
        {currentScreen === 0 ? (
          renderScreen(currentScreen)
        ) : currentScreen === 1 ? (
          renderScreen(currentScreen)
        ) : currentScreen === 2 ? (
          renderScreen(currentScreen)
        ) : (
          <div onClick={()=>changeScreenType(0)}>No se encontró información...</div>
        )}
      </Grid>
    );
  }
}

export default ShortPostFeed;

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    width: "100%",
    margin: "auto",
    // marginTop: '10px',
    // marginBottom: '10px',
    marginLeft: "10px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    // marginRight: 10,
    // marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderBottom: "2px solid black",
  },
  gridRoot: {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 300,
    marginTop: 1,
  },
  cardContainer: {
    // minWidth:300,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

{
  /* <div className="pagination">
        <Pagination className="pagination-bottom" page={currentPage} onChange={handlePagination} count={paginationIndex} defaultPage={1} showFirstButton showLastButton />
      </div> */
}
