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
          color: active ? "#333" : "gray",
          width: "180px",
          fontSize: "16px",
          textTransform: "none",
          borderBottom: active ? "1px solid #333" : "transparent",
          transition: "border-bottom 0.3s ease-in-out",
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default BasicButtons;
