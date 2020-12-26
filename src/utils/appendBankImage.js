import bankTransfer from "assets/banktransfer.svg";
import fbn from "assets/firstbank.svg";
import gtb from "assets/gtb.svg";
import fidelity from "assets/fidelity.svg";
import wema from "assets/wema.svg";

export default function appendBankImage(beneficiary) {
  let image;

  switch (beneficiary.bankCode) {
    case "011":
      image = fbn;
      break;

    case "058":
      image = gtb;
      break;

    case "070":
      image = fidelity;
      break;

    case "035":
      image = wema;
      break;

    default:
      image = bankTransfer;
      break;
  }

  return image;
}
