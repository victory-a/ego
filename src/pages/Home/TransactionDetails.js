import React from "react";
import dayjs from "dayjs";
import { Box, Flex, Image } from "@chakra-ui/core";
import styled from "styled-components";
import colors from "styles/colors";
import { naira } from "utils/amountFormatters.js";

const TransactionDetails = ({ transaction }) => {
  const { image, metadata } = transaction;

  return (
    <TransactionData>
      <Flex align="center" mb="2rem">
        <Image src={image} alt={`transaction-${metadata.title}`} />
        <Box className="title-group" ml="1.5rem">
          <h4>{metadata.title}</h4>
          <p className="description">{metadata.description}</p>
        </Box>
      </Flex>
      <ul>
        <ListItem>
          Transaction Reference: <span>{transaction.id}</span>
        </ListItem>
        <ListItem>
          Amount:<span className={`${transaction.category}`}>{naira(transaction.amount)}</span>
        </ListItem>
        <ListItem>
          Balance after Transaction: <span>{naira(10035.55)}</span>
        </ListItem>
        <ListItem>
          Status:<span>Confirmed</span>
        </ListItem>
        <ListItem>
          Remark:<span>Nil</span>
        </ListItem>
        <ListItem>
          Timestamp:<span>{dayjs(transaction.createdAt).format("MM-DD-YYYY, hh:mmA")}</span>
        </ListItem>
      </ul>
    </TransactionData>
  );
};

export default TransactionDetails;

const TransactionData = styled.div`
  & img {
    height: 7rem;
    width: 7rem;
    display: inline-block;
  }

  & h4 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: ${colors.darkCharcoal};
    font-weight: bold;
  }

  & .description {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${colors.fauxBlack};
  }

  & li:not(:last-of-type) {
    border-bottom: 1px solid ${colors.cyanBlue};
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  font-size: 1.6rem;
  color: ${colors.weirdGrey};
  font-weight: bold;

  & .debit {
    color: ${colors.brightRed};
  }

  & .credit {
    color: ${colors.brightGreen};
  }
`;
