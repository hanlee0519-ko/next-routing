import { style } from "@vanilla-extract/css";

export const backdrop = style({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const modalBtn = style({
  marginTop: "20px",
  padding: "10px 50px",
});
