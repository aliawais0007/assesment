import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
const menu = ["Platform", "Super Merchants", "Pricing", "Partners", "Docs"];

const useStyles = makeStyles({
  root: {
    width: "max-content",
  },
  list: {
    width: 300,
    height: "100%",
    color: "#f2f2f2",
    background: "#040b14",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    zIndex: 1302,
  },
  icons: {
    color: "#fff",
  },
});

const styles = {
  navLogo: {
    height: 120,
    width: 120,
    borderRadius: "50%",
    border: "10px solid rgba(255, 255, 255 ,0.1)",
  },
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "50px 0",
  },
  iconColor: {
    color: "#fff",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },
};

const DrawerMenu = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <CloseIcon
        style={styles.iconColor}
        className={"close-icon"}
        onClick={() => props.setDrawerStatus(false)}
      />

      <h2 className={"title text-left w-100 pl-2"}>{"KMMRCE"}</h2>
      <div style={styles.listWrapper}>
        {menu.map((text, index) => (
          <div key={index}>
            <a key={index}>
              <List key={index} style={styles.link}>
                <ListItem className={"link-hover"}>
                  <ListItemText primary={text} />
                </ListItem>
              </List>
            </a>
            <Divider />
          </div>
        ))}
      </div>
      <button className={"button common-btn w-100"}>Request Demo</button>
    </div>
  );
};

export const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        disableEnforceFocus
        className={classes.root}
        anchor={"left"}
        onClose={() => {
          props.setDrawerStatus(false);
        }}
        open={props?.isOpened}
      >
        <DrawerMenu setDrawerStatus={props.setDrawerStatus} />
      </Drawer>
    </>
  );
};
