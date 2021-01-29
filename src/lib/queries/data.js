import client from "../client";
import { useQuery } from "react-query";

function useFetchBanks() {
  const { data, status } = useQuery({
    queryKey: "getBanks",
    queryFn: () => client("data/banks").then(data => data.data)
  });

  return { data, status };
}

function useFetchBeneficiaries() {
  const { data, status } = useQuery({
    queryKey: "getBanks",
    queryFn: () => client("users/beneficiaries").then(data => data.data)
  });

  return { data, status };
}

async function getPlans(subscriber) {
  const data = await client(`data/${subscriber}`)
    .then(data => data.data)
    // eslint-disable-next-line no-console
    .catch(console.log);

  return data;
}

export { useFetchBanks, getPlans, useFetchBeneficiaries };
