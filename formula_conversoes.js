const conversorFormulas = {
  "Nanômetro": {
    "Micrômetro": 0.001,
    "Milímetro": 1e-6,
    "Centímetro": 1e-7,
    "Metro": 1e-9,
    "Quilômetro": 1e-12,
    "Milha": 6.2137e-13,
    "Pé": 3.2808e-9,
    "Polegada": 3.937e-8,
    "Jarda": 1.0936e-9
  },
  "Micrômetro":
  {
    "Nanômetro": 1000,
    "Milímetro": 0.001,
    "Centímetro": 1e-4,
    "Metro": 1e-6,
    "Quilômetro": 1e-9,
    "Milha": 6.2137e-10,
    "Pé": 3.2808e-6,
    "Polegada": 3.937e-5,
    "Jarda": 1.0936e-6
  }
  ,
  "Milímetro":
  {
    "Nanômetro": 1e+6,
    "Micrômetro": 1000,
    "Centímetro": 0.1,
    "Metro": 0.001,
    "Quilômetro": 1e-6,
    "Milha": 6.2137e-7,
    "Pé": 0.00328084,
    "Polegada": 0.0393701,
    "Jarda": 0.00109361
  }
  ,
  "Centímetro":
  {
    "Nanômetro": 1e+7,
    "Micrômetro": 10000,
    "Milímetro": 10,
    "Metro": 0.01,
    "Quilômetro": 1e-5,
    "Milha": 6.2137e-6,
    "Pé": 0.0328084,
    "Polegada": 0.393701,
    "Jarda": 0.0109361
  }
  ,
  "Metro":
  {
    "Nanômetro": 1e+9,
    "Micrômetro": 1e+6,
    "Milímetro": 1000,
    "Centímetro": 100,
    "Quilômetro": 0.001,
    "Milha": 0.000621371,
    "Pé": 3.28084,
    "Polegada": 39.3701,
    "Jarda": 1.09361
  }
  ,
  "Quilômetro":
  {
    "Nanômetro": 1e+12,
    "Micrômetro": 1e+9,
    "Milímetro": 1000000,
    "Centímetro": 100000,
    "Metro": 1000,
    "Milha": 0.621371,
    "Pé": 3280.84,
    "Polegada": 39370.1,
    "Jarda": 1093.612959
  }
  ,
  "Milha":
  {
    "Nanômetro": 1.609e+12,
    "Micrômetro": 1.609e+9,
    "Milímetro": 1.609e+6,
    "Centímetro": 160934,
    "Metro": 1609.34,
    "Quilômetro": 1.60934,
    "Pé": 5280,
    "Polegada": 63360,
    "Jarda": 1760
  }
  ,
  "Pé":
  {
    "Nanômetro": 3.048e+8,
    "Micrômetro": 304800,
    "Milímetro": 304.8,
    "Centímetro": 30.48,
    "Metro": 0.3048,
    "Quilômetro": 0.0003048,
    "Milha": 0.000189394,
    "Polegada": 12,
    "Jarda": 0.333333
  }
  ,
  "Polegada":
  {
    "Nanômetro": 2.54e+7,
    "Micrômetro": 25400,
    "Milímetro": 25.4,
    "Centímetro": 2.54,
    "Metro": 0.0254,
    "Quilômetro": 2.54e-5,
    "Milha": 1.5783e-5,
    "Pé": 0.0833333,
    "Jarda": 0.0277778
  }
  ,
  "Jarda":
  {
    "Nanômetro": 9.144e+8,
    "Micrômetro": 914400,
    "Milímetro": 914.4,
    "Centímetro": 91.44,
    "Metro": 0.9144,
    "Quilômetro": 0.0009144,
    "Milha": 0.000568182,
    "Pé": 3,
    "Polegada": 36
  }
  ,
  "Micrograma":
  {
    "Miligrama": 0.001,
    "Grama": 1e-6,
    "Quilograma": 1e-9,
    "Tonelada": 1e-12,
    "Libra": 2.2046e-9,
    "Onça": 3.5274e-8
  }
  ,
  "Miligrama":
  {
    "Micrograma": 1000,
    "Grama": 1e-3,
    "Quilograma": 1e-6,
    "Tonelada": 1e-9,
    "Libra": 1.5747e-7,
    "Onça": 3.5274e-5
  }
  ,
  "Grama":
  {
    "Micrograma": 1e+6,
    "Miligrama": 1000,
    "Quilograma": 0.001,
    "Tonelada": 1e-6,
    "Libra": 0.00220462,
    "Onça": 0.035274
  }
  ,
  "Quilograma":
  {
    "Micrograma": 1e+9,
    "Miligrama": 1e+6,
    "Grama": 1000,
    "Tonelada": 0.001,
    "Libra": 2.20462,
    "Onça": 35.274
  }
  ,
  "Tonelada":
  {
    "Micrograma": 1e+12,
    "Miligrama": 1e+9,
    "Grama": 1e+6,
    "Quilograma": 1000,
    "Libra": 2204.62,
    "Onça": 35274
  }
  ,
  "Libra":
  {
    "Micrograma": 4.536e+8,
    "Miligrama": 453592,
    "Grama": 453.592,
    "Quilograma": 0.453592,
    "Tonelada": 0.000453592,
    "Onça": 16
  }
  ,
  "Onça":
  {
    "Micrograma": 2.835e+7,
    "Miligrama": 28349.5,
    "Grama": 28.3495,
    "Quilograma": 0.0283495,
    "Tonelada": 2.835e-5,
    "Libra": 0.0625
  },
  "Celsius": {
    "Fahrenheit": "(input * 9/5) + 32",
    "Kelvin": "input + 273.15"
  },
  "Fahrenheit": {
    "Celsius": "(input - 32) * 5/9",
    "Kelvin": "(input - 32) * 5/9 + 273.15"
  },
  "Kelvin": {
    "Fahrenheit": "(input - 273.15) * 9/5 + 32",
    "Celsius": "input - 273.15"
  }

}

export default conversorFormulas