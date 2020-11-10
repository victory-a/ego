import React from "react";
import { Box } from "@chakra-ui/core";

export default function WelcomeDisplay({ userName }) {
  const [time, setTime] = React.useState("night");

  return (
    <>
      <Box as="h2" fontSize="3xl">
        Hi {userName ?? ""}{" "}
        {time === "night" ? (
          <span role="img" aria-labelledby="night time">
            🌌
          </span>
        ) : (
          <span role="img" aria-labelledby="day time">
            ☀️
          </span>
        )}
      </Box>
    </>
  );
}
