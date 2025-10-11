import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import type { BrandPalette, BrandPaletteOptions } from "@/theme/brandColors";
import { brandColors } from "@/theme/brandColors";
import type { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette { brand: BrandPalette }
    interface PaletteOptions { brand?: BrandPaletteOptions }
  }

const baseTheme = createTheme()

const brand: BrandPaletteOptions = brandColors;

const palette: PaletteOptions = {
  primary: { main: "#FFFFFF" },
  secondary: { main: "#0A0A0A" },
  background: { default: "#000000" },
  text: { primary: "#FFFFFF", secondary: "#AEAEAE" },
  info: { main: "#FFFFFF" },
  error: { main: "#DC2626" },
  success: { main: "#389685" },
  brand, // typed, not any
};

let theme = createTheme({
  palette,
  typography: {
    fontFamily: "Funnel Display",
    h1: {
      fontWeight: 700,
      fontSize: "5rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "2.25rem", fontWeight: 700 }, // tablet & mobile
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "2rem", fontWeight: 700 }, // tablet & mobile
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.75rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1.625rem", fontWeight: 500 }, // tablet & mobile
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.5rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1.375rem", fontWeight: 500 }, // tablet & mobile
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1rem", fontWeight: 500 }, // tablet & mobile
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1.25rem", fontWeight: 500 }, // tablet & mobile
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1.125rem", fontWeight: 500 }, // tablet & mobile
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "0.875rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1.125rem", fontWeight: 500 }, // tablet & mobile
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "1rem", fontWeight: 400 }, // tablet & mobile
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "0.9375rem", fontWeight: 400 }, // tablet & mobile
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "0.875rem", fontWeight: 400 }, // tablet & mobile
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem", // desktop
      [baseTheme.breakpoints.down("md")]: { fontSize: "0.875rem", fontWeight: 400 }, // tablet & mobile
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
