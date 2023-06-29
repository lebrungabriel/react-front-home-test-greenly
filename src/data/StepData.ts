import {
  butter,
  chocolate,
  cream,
  cucumber,
  egg,
  feta,
  salmon,
  onion,
  veal,
  carrot,
  mushroom,
  oil,
  lemon,
  flour,
  redFruits,
  salad,
  sugar,
  redPepper,
  greenPepper,
  tomato,
  beef,
} from "./IngredientData";

import { StepType as StepType } from "../types/StepType";

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsBakedSalmon: StepType[] = [
  {
    description: "Mettre le saumon dans un plat allant au four.",
    ingredients: [{ ingredient: salmon, quantity: 2 }],
    order: 1,
  },
  {
    description:
      "Couper le citron en deux, le presser sur le saumon, puis couper le citron en lamelles et les disposer sur le saumon",
    ingredients: [{ ingredient: lemon, quantity: 1 }],

    order: 2,
  },
  {
    description: "Ciseler les oignons et les disposer sur le saumon",
    ingredients: [{ ingredient: onion, quantity: 5 }],
    order: 3,
  },
  {
    description:
      "Verser l'huile d'olive sur le tout, saler, poivrer et faire cuire à 180° pendant 25 minutes.",
    order: 4,
    ingredients: [{ ingredient: oil, quantity: 15, unit: "cl" }],
  },
];

export const stepsVealBlanquette: StepType[] = [
  {
    description: "Faire revenir le veau dans un peu de beurre.",
    ingredients: [{ ingredient: veal, quantity: 1, unit: "kg" }],
    order: 1,
  },
  {
    description:
      "Éplucher et couper les carottes, l'oignon et les champignons puis les incorporer à la viande",
    ingredients: [
      { ingredient: carrot, quantity: 2 },
      { ingredient: mushroom, quantity: 500, unit: "g" },
      { ingredient: onion, quantity: 1 },
    ],

    order: 2,
  },
  {
    description: "Laisser mijoter à feu très doux pendant 2h00.",

    order: 3,
  },
  {
    description: "Incorporer la crème, mélanger et servir",
    order: 4,
    ingredients: [{ ingredient: cream, quantity: 15, unit: "cl" }],
  },
];

export const stepsChocolateFudge: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsWalfordSalad: StepType[] = [
  {
    description: "Laver la salade.",
    order: 1,
    ingredients: [{ ingredient: salad, quantity: 1 }],
  },
  {
    description: "Éplucher puis couper le concombre.",
    order: 2,
    ingredients: [{ ingredient: cucumber, quantity: 1 }],
  },
  {
    description: "Couper la feta en morceaux",
    order: 3,
    ingredients: [{ ingredient: feta, quantity: 150, unit: "g" }],
  },
  {
    description: "Mélanger le tout dans un saladier et verser une vinaigrette.",
    order: 4,
  },
];

export const stepsGaspacho: StepType[] = [
  {
    description: "Couper les légumes en morceau et les passer au mixeur",
    order: 1,
    ingredients: [
      { ingredient: cucumber, quantity: 1 },
      { ingredient: redPepper, quantity: 1 },
      { ingredient: greenPepper, quantity: 1 },
      { ingredient: tomato, quantity: 8 },
    ],
  },
  {
    description: "Assaisonner avec du sel, du poivre et de l'huile d'olive",
    order: 2,
    ingredients: [{ ingredient: oil, quantity: 10, unit: "cl" }],
  },
  {
    description: "Laisser reposer 2h00 et servir",
    order: 3,
  },
];

export const stepsBurger: StepType[] = [
  {
    description: "Couper l'oignon et la tomate en lamelles",
    order: 1,
    ingredients: [
      { ingredient: tomato, quantity: 1 },
      { ingredient: onion, quantity: 1 },
    ],
  },
  {
    description: "Faire cuire le steack.",
    order: 2,
    ingredients: [{ ingredient: beef, quantity: 1 }],
  },
  {
    description: "Toaster les pains",
    order: 3,
  },
  {
    description:
      "Déposer le steak sur le pain, mettre la salade, les légumes et le fromage par dessus puis refermer avec le pain",
    order: 4,
  },
];

export const stepsPearPie: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 3,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 4,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 5,
  },
];
