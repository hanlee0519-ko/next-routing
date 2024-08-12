import { style } from "@vanilla-extract/css";

export const globalNavContainer = style({
  backgroundColor: "lightpink",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const logo = style({
  backgroundColor: "lightgrey",
  padding: "10px",
  color: "white",
});

export const logoLink = style({
  textDecoration: "none",
  color: "white",
  selectors: {
    "&:hover": {
      color: "black",
    },
  },
});

export const navItemArea = style({
  display: "flex",
  flexDirection: "column",
});

export const active = style({
  textDecoration: "none",
  backgroundColor: "lightsalmon",
  padding: "10px",
  color: "white",
});

export const inActive = style({
  textDecoration: "none",
  color: "black",
  marginTop: "10px",
  marginBottom: "10px",
});
