// brandColors.ts
export type BrandColor = { main: string };

export type BrandPalette = {
  mgsBlue1: BrandColor;
  mgsBlue2: BrandColor;
  mgsBlue3: BrandColor;
  mgsLightBlue1: BrandColor;
  mgsPurple1: BrandColor;
  buttons: BrandColor;
  buttonsHover: BrandColor;
  navButtonsHover: BrandColor;
  mgsRed: BrandColor;
  shadow1: BrandColor;
  cardHover1: BrandColor;
  border1: BrandColor
};

export type BrandPaletteOptions = Partial<BrandPalette>;

export const brandColors: BrandPalette = {
  mgsBlue1: { main: "#1437E8" },
  mgsBlue2: { main: "#1F37E1" },
  mgsBlue3: { main: "#3D5FFF" },
  mgsLightBlue1: { main: "#34B2FF" },
  mgsPurple1: {main: "#344AF9"},
  buttons: { main: "#1F37E1" },
  buttonsHover: { main: "#1D1D1D" },
  navButtonsHover: { main: "#27695d" },
  mgsRed: { main: "#FF4356" },
  shadow1: { main: "#676767" },
  cardHover1: { main: "#141414" },
  border1: {main: "#292929"}
};
