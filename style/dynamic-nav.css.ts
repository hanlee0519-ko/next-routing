import { style } from "@vanilla-extract/css";

export const navGroupContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "20px",
  marginBottom: "40px",
  marginLeft: "20px",
});

export const navItem = style({
  textDecoration: "none",
  marginRight: "50px",
  fontWeight: "bolder",
  fontSize: "larger",
  color: "white",
  selectors: {
    "&:hover": {
      color: "black",
    },
  },
});
