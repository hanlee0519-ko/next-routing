import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  boxSizing: "border-box",
  height: "100%",
});

export const appContainer = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "lightyellow",
  height: "100%",
});

export const contentArea = style({
  display: "flex",
  flex: 1,
  margin: "10px",
});

export const nav = style({
  backgroundColor: "lightskyblue",
  display: "flex",
  flex: "none",
  width: "200px",
});

export const main = style({
  padding: "10px",
  display: "flex",
  backgroundColor: "lightskyblue",
  flexDirection: "column",
  flex: 1,
});
