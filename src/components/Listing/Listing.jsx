/** @format */

import {
  Avatar,
  Breadcrumbs,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/funtions";
import ImageNotFound from "../../img/papas.jpeg";
import Nav from "../Navbar/Nav";
import Separator from "../common/separator.component";
import Button from "@material-ui/core/Button";
import Viejito from "../../img/viejito.jpg";
import Sandia from "../../img/sandia.jpeg";
import Ayote from "../../img/ayote.jpg";
import Pepino from "../../img/pepito.jpg";
import Tomate from "../../img/tomate.jpg";
import Zanahoria from "../../img/Zanahoria.jpg";

export default function Listing(props) {
  const styles = useStyles();
  const details = useSelector((state) => state.users.postDetails);

  var arrayImage = [ImageNotFound, Sandia, Ayote, Pepino,Tomate, Zanahoria];
  var rand = Math.floor(Math.random()*arrayImage.length);
  var ImageRender = arrayImage[rand];
  console.log('ImageRender', ImageRender);
  return (
    <div>
      <Nav />
      <div>
        <h1 className={styles.title}>{details.titlePost}</h1>
        <h3 className={styles.subtitle}>Aristides Ábrego</h3>
        
      </div>
      <div className={styles.body}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px"
          }}>
          <img className={styles.image} src={ImageRender} alt='imagen' />
        </div>
        <div className={styles.row}>
          <div style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Avatar
              style={{ height: 70, width: 70 }}
              alt='Viejito granjero'
              src={Viejito}
            />
          </div>
          <div>
            <div style={{ textAlign: "left", paddingLeft: 10 }}>
              <h2>{details.descriptionPost}.</h2>
            </div>
            <div  style={{ textAlign: "left", paddingLeft: 10, color: "grey" }}>
              <h2>$ {details.price}</h2>
            </div>
          </div>
        </div>
        
        {/* <div className={styles.row}>
          <div style={{ paddingRight: 10, paddingLeft: 10 }}>
            <Avatar
              style={{ height: 70, width: 70 }}
              alt='Viejito granjero'
              src={Viejito}
            />
          </div>
          <h2>Un pinta</h2>
        </div> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 3,
            marginBottom: 3
          }}>
          <Button
            target='_blank'
            href='https://api.whatsapp.com/send?phone=50762250666'
            variant='contained'
            color='primary'
            onClick={() => {
              // window.history.push('https://api.whatsapp.com/send?phone=50762250666')
              // {`https://api.whatsapp.com/send?phone=${details.phoneNumber}`}
              console.log("Que noris");
            }}>
            Contactar
          </Button>
        </div>
        <Separator />
        <div style={{ padding: 20 }}>
          <h2 style={{ textAlign: "center" }}>Detalles del listado.</h2>
          <div className={styles.row}>
            <h2 className={styles.boldletter}>Categoria: </h2>
            <h2>{details.category}</h2>
          </div>
          <div className={styles.row}>
            <h2 className={styles.boldletter}>Direccion: </h2>
            <h2>{details.address}</h2>
          </div>
          {/* <div className={styles.row}>
            <h2 className={styles.boldletter}>Telefono: </h2>
            <h2>{details.phoneNumber}</h2>
          </div> */}

          <div className={styles.row}>
            <h2 className={styles.boldletter}>Creada: </h2>
            <h2>{formatDate(details.createDate)}</h2>
          </div>
          <div className={styles.row}>
            <h2 className={styles.boldletter}>Actualizada: </h2>
            <h2>{formatDate(details.updateDate)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "15px"
  },
  subtitle: {
    color: "grey",
    textAlign: "center",
    marginTop: "15px"
  },
  body: {
    height: "100%",
    width: "100%"
    // padding: 20
  },
  row: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
  },
  boldletter: {
    fontWeight: "500",
    fontSize: "20px",
    color: "black",
    marginRight: "10px"
  },
  image: {
    width: "100%",
    height: "40vh",
    marginBottom: "20px",
    objectFit: "cover"
  }
}));
