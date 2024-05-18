import { fulfilledContracts } from "~~/contracts/externalContracts";
import scaffoldConfig from "~~/scaffold.config";
import { contracts } from "~~/utils/scaffold-eth/contract";

export async function getAllContractsAync(chainId: number = scaffoldConfig.targetNetworks[0].id) {
  const contractsData = contracts?.[chainId];
  if (contractsData) {
    return await fulfilledContracts(chainId.toString(), contractsData);
  }
  return contractsData ? contractsData : {};
}

export function getAllContracts(chainId: number = scaffoldConfig.targetNetworks[0].id) {
  const contractsData = contracts?.[chainId];
  return contractsData ? contractsData : {};
}
