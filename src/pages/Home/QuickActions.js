import React from "react";
import { InlineCardWrapper, CardTitle } from "./styles.js";
import styled from "styled-components";
import { AiFillBank } from "react-icons/ai";
import { MdPhoneIphone, MdSubscriptions } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import colors from "styles/colors";
import { Grid } from "@chakra-ui/core";

const actions = [
  { title: "Send to Phone", link: "", logo: <MdPhoneIphone /> },
  { title: "Send to bank", link: "", logo: <AiFillBank /> },
  { title: "Buy airtime", link: "", logo: <RiBillFill /> },
  { title: "Pay bills", link: "", logo: <MdSubscriptions /> }
];
const QuickActions = () => {
  return (
    <InlineCardWrapper>
      <CardTitle>
        <h3>Quick Actions</h3>
      </CardTitle>
      <Grid templateColumns="repeat(2, 1fr)" padding="2rem" gap="2rem" justifyContent="center">
        {actions.map(({ title, link, logo }, index) => (
          <Tile href={`${link}`} key={`quick action - ${index}`}>
            {logo}
            <p>{title}</p>
          </Tile>
        ))}
      </Grid>
    </InlineCardWrapper>
  );
};

export default QuickActions;

const Tile = styled.a`
  width: 100%;
  min-width: 13.3rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #eaedf3;
  background: ${colors.white};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.04);
  border: 1px solid #eaedf3;
  cursor: pointer;
  transition: all 0.25s ease-in;
  align-self: center;
  justify-self: center;
  text-align: center;

  &:hover {
    background: ${colors.primaryHoverLight};
    border: 1px solid ${colors.primary};

    p {
      color: ${colors.primary};
    }
  }

  svg {
    padding-bottom: 1rem;
    color: ${colors.primary};
    font-size: 28px;
  }

  p {
    font-size: 1.4rem;
    color: ${colors.fauxBlack};
  }
`;
