import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const modalArea = style({
  padding: "10px",
  backgroundColor: "lightgray",
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
});

export const modalBtn = style({
  margin: "100px 10px",
  padding: "10px 50px",
});
