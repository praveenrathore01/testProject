import p1img from "../assets/images/P1SPF50_lg.png";
import p2img from "../assets/images/P2Sham_lg.png";
export const baseUrl =
  process.env.REACT_APP_SERVER_URL ||
  "http://localhost:3000" ||
  "https://maxxbio.herokuapp.com";

export const colors = {
  dark: "#333",
  lightGrey: "#ccc"
};
export const fonts = {
  mainfont: "SuisseReg, sans-serif"
};

export const selectStyle = {
  valueContainer: styles => ({
    ...styles,
    backgroundColor: "transparant",
    padding: 0
  }),
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    minHeight: "50px",
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: "0",
    backgroundColor: "transparant",
    paddingLeft: "0.8889rem ",
    boxShadow: isFocused ? 0 : 0,
    "&:hover": {
      border: `1px solid ${colors.lightGrey}`
    }
  }),
  input: styles => ({
    ...styles,
    fontSize: "1.6rem",
    "&:placeholder": {
      color: "rgba(65, 51, 183, 0.5)"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontFamily: fonts.mainfont,
      fontSize: "1.6rem",
      color: colors.dark,
      backgroundColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(197, 192, 240, 0.25)"
      }
    };
  },
  singleValue: styles => ({
    ...styles,
    fontFamily: fonts.mainfont,
    fontSize: "1.6rem",
    color: colors.dark,
    fontWeight: "normal"
  }),
  placeholder: styles => ({
    ...styles,
    whiteSpace: "nowrap"
  }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: "2px"
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: "none"
  }),
  menu: styles => ({
    ...styles,
    borderRadius: "0",
    border: `1px solid ${colors.lightGrey}`,
    marginTop: 0
  }),
  multiValueLabel: styles => ({
    ...styles,
    fontFamily: fonts.mainfont,
    fontSize: "1.6rem",
    color: colors.dark
  }),
  multiValue: styles => ({
    ...styles,
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: "0",
    backgroundColor: "rgba(197, 192, 240, 0.25)",
    fontFamily: fonts.mainfont,
    fontSize: "1.6rem",
    color: colors.dark
  }),
  multiValueRemove: styles => ({
    ...styles,
    cursor: "pointer",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: colors.dark
    }
  })
};

export const mainProducts = [
  {
    img: p1img || "http://via.placeholder.com/700x500",
    title: "Protective Body Lotion SPF50",
    link: "#",
    pId: "P1SPF50",
    desc: `Broad-spectrum moisturising sunscreen with high SPF50 protection—formulated to provide up to four hours’ water resistance—with a lightweight skin feel and refreshing aroma.`,
    basePrice: 3783,
    topIngredient: `Spearmint Leaf, Panthenol, Tocopherol`,
    ingredients: `Avobenzone (3% w/w) Homosalate (10% w/w) Octisalate (5% w/w) Octocrylene (8% w/w) INACTIVE INGREDIENTS: Water (Aqua), C12-15 Alkyl Benzoate, Triacontanyl PVP, Euphorbia Cerifera (Candelilla) Wax, Silica, PEG-15 Cocamine, Acrylates/Steareth-20 Methacrylate Copolymer, PEG-40 Stearate, Glyceryl Behenate, Panthenol, Lavandula Angustifolia (Lavender) Oil, Caprylyl Glycol, Mentha Viridis (Spearmint) Leaf Oil, Aloe Barbadensis Leaf Juice, Ammonium Acryloyldimethyltaurate/VP Copolymer, Caprylhydroxamic Acid, Glycerin, Citrus Medica Limonum (Lemon) Peel Oil, Persea Gratissima (Avocado) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Glycine Soja (Soybean) Oil, Methyl Glucose Sesquistearate, Tocopheryl Acetate, Daucus Carota (Carrot) Sativa Root Extract, Beta-Carotene, Tocopherol, Linalool, d-Limonene, Citral.`,
    sizes: [50, 150, 250],
    category: "Skin"
  },
  {
    img: p2img || "http://via.placeholder.com/700x500",
    title: "Colour Protection Shampoo",
    link: "#",
    pId: "P2Sham",
    desc: `A sulphate-free blend that cleanses hair gently without stripping colour. Hydrolyzed Oats and nourishing Provitamin B5 replenish and soften hair.`,
    basePrice: 2644,
    topIngredient: `Tangerine Rind, Panthenol, Hydrolyzed Oats`,
    ingredients: `Water (Aqua), Sodium Lauroamphoacetate, Sodium Methyl Cocoyl Taurate, Glycerin, Cetyl Betaine, Propylene Glycol, Citric Acid, Phenoxyethanol, Panthenol, Lauryl Betaine, Guar Hydroxypropyltrimonium Chloride, Hydrolyzed Oats, Sea Salt (Maris sal), Citrus Tangerina (Tangerine) Peel Oil, Lavandula Angustifolia (Lavender) Oil, Disodium EDTA, Mentha Citrata Leaf Extract, Ethylhexylglycerin, Foeniculum Vulgare (Fennel) Oil, Mentha Piperita (Peppermint) Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Salvia Officinalis (Sage) Oil, Magnesium Nitrate, Potassium Sorbate, Sodium Benzoate, Benzoic Acid, Dehydroacetic Acid, Methylchloroisothiazolinone, Magnesium Chloride, Methylisothiazolinone, d-Limonene, Linalool.`,
    sizes: [200, 500],
    category: "hair"
  }
];

export const categoryList = ["Pets", "Oil Drops / Tinctures", "Sprays"];

export const regionsList = [
  {
    name: "Oceania",
    data: "oceania"
  },
  {
    name: "Americas",
    data: "americas"
  },
  {
    name: "Europe",
    data: "europe"
  },
  {
    name: "Asia",
    data: "asia"
  }
];
export const countryList = [
  {
    title: "Andorra",
    code: "AD",
    region: "europe"
  },
  {
    title: "Australia",
    code: "AU",
    region: "oceania"
  },
  {
    title: "Austria",
    code: "AT",
    region: "europe"
  },
  {
    title: "Belgium",
    code: "BE",
    region: "europe"
  },
  {
    title: "Bulgaria",
    code: "BG",
    region: "europe"
  },
  {
    title: "Canada",
    code: "CA",
    region: "americas"
  },
  {
    title: "Cyprus",
    code: "CY",
    region: "europe"
  },
  {
    title: "Czech Republic",
    code: "CZ",
    region: "europe"
  },
  {
    title: "Denmark",
    code: "DK",
    region: "europe"
  },
  {
    title: "Estonia",
    code: "EE",
    region: "europe"
  },
  {
    title: "Finland",
    code: "FI",
    region: "europe"
  },
  {
    title: "France",
    code: "FR",
    region: "europe"
  },
  {
    title: "Germany",
    code: "DE",
    region: "europe"
  },
  {
    title: "Greece",
    code: "GR",
    region: "europe"
  },
  {
    title: "Hong Kong",
    code: "HK",
    region: "asia"
  },
  {
    title: "Hungary",
    code: "HU",
    region: "europe"
  },
  {
    title: "Iceland",
    code: "IS",
    region: "europe"
  },
  {
    title: "Ireland",
    code: "IE",
    region: "europe"
  },
  {
    title: "Italy",
    code: "IT",
    region: "europe"
  },
  {
    title: "Japan",
    code: "JP",
    region: "asia"
  },
  {
    title: "Korea, republic of",
    code: "KR",
    region: "asia"
  },
  {
    title: "Latvia",
    code: "LV",
    region: "europe"
  },
  {
    title: "Lithuania",
    code: "LT",
    region: "europe"
  },
  {
    title: "Luxembourg",
    code: "LU",
    region: "europe"
  },
  {
    title: "Malta",
    code: "MT",
    region: "europe"
  },
  {
    title: "Monaco",
    code: "MC",
    region: "europe"
  },
  {
    title: "Netherlands",
    code: "NL",
    region: "europe"
  },
  {
    title: "New Zealand",
    code: "NZ",
    region: "oceania"
  },
  {
    title: "Norway",
    code: "NO",
    region: "europe"
  },
  {
    title: "Poland",
    code: "PL",
    region: "europe"
  },
  {
    title: "Portugal",
    code: "PT",
    region: "europe"
  },
  {
    title: "Romania",
    code: "RO",
    region: "europe"
  },
  {
    title: "San Marino",
    code: "SM",
    region: "europe"
  },
  {
    title: "Singapore",
    code: "SG",
    region: "asia"
  },
  {
    title: "Slovak Republic",
    code: "SK",
    region: "europe"
  },
  {
    title: "Slovenia",
    code: "SI",
    region: "europe"
  },
  {
    title: "Spain",
    code: "ES",
    region: "europe"
  },
  {
    title: "Sweden",
    code: "SE",
    region: "europe"
  },
  {
    title: "Switzerland",
    code: "CH",
    region: "europe"
  },
  {
    title: "Taiwan",
    code: "TW",
    region: "asia"
  },
  {
    title: "Thailand",
    code: "TH",
    region: "asia"
  },
  {
    title: "United Kingdom",
    code: "GB",
    region: "europe"
  },
  {
    title: "United States",
    code: "US",
    region: "americas"
  }
];
