import config from "config";
import { useQuery } from "react-query";

function useBanks() {
  const { status, data } = useQuery({
    queryKey: "get-banks",
    queryFn: () =>
      fetch(`${config.BANK_URL}`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)
  });

  return { status, data };
}

export default useBanks;
