import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IngredientWithQuantityType } from "../../types/IngredientWithQuantityType";
import { IngredientWithQuantity } from "../Ingredients/IngredientWithQuantity";
import { StepType } from "../../types/StepType";
import Step from "../Steps/Step";

export default function SimpleAccordion({
  ingredientsWithQuantity,
  steps,
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
  steps: StepType[];
}) {
  return (
    <div>
      <Accordion style={{ boxShadow: "none", marginBottom: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-zinc-500">Ingrédients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-left">
            {ingredientsWithQuantity.map((obj) => {
              return <IngredientWithQuantity ingredientWithQuantity={obj} />;
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="text-zinc-500">
            Étapes de la recette
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            height: "200px",
            overflow: "scroll",
          }}
        >
          <Typography className="text-left">
            {steps.map((obj) => (
              <Step step={obj} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
