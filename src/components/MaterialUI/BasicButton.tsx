import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface BasicButtonsProps {
  text: string;
  onClick: () => void;
  active: boolean;
}

const BasicButtons: React.FC<BasicButtonsProps> = ({
  text,
  onClick,
  active,
}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        style={{
          color: "gray",
          width: "200px",
          backgroundColor: active ? "#e3f1fc" : "",
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default BasicButtons;
