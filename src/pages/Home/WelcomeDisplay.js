import React from "react";
import { Box } from "@chakra-ui/core";

export default function WelcomeDisplay({ userName }) {
  const currentTime = new Date().getHours();
  const isDay = Boolean(currentTime >= 6 && currentTime < 18);
  return (
    <>
      <Box as="h2" fontSize="3xl" marginBottom="2rem">
        Hi {userName ?? ""}{" "}
        {isDay ? (
          <span role="img" aria-label="day indicator">
            ☀️
          </span>
        ) : (
          <span role="img" aria-label="night indicator">
            🌌
          </span>
        )}
      </Box>
    </>
  );
}
