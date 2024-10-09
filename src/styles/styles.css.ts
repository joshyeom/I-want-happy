import { style } from "@vanilla-extract/css";

export const mainStyle = style({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px",
});

export const sectionStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingBottom: "88px",
});

export const buttonStyle = style({
  borderRadius: "100px",
  color: "#000000",
  fontFamily: "wfbs",
  fontSize: "100px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "95px",
  textTransform: "none",
  backgroundColor: "white",
  border: "none",
  transition: "background 0.2s ease, color 0.2s ease",
  padding: "0 30px 7px 30px",
  ":hover": {
    backgroundColor: "#0b00ff",
    color: "#ffffff",
  },
  ":focus": {
    outline: "none",
  },
});
