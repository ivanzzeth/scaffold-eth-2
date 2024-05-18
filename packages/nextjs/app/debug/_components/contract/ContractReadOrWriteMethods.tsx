import { Abi, AbiFunction, AbiStateMutability } from "abitype";
import { ReadOrWriteFunctionForm } from "~~/app/debug/_components/contract";
import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const ContractReadOrWriteMethods = ({
  onChange,
  deployedContractData,
}: {
  onChange: () => void;
  deployedContractData: Contract<ContractName>;
}) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  )
    .map(fn => {
      return {
        fn,
        inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
      };
    })
    .sort((a, b) => {
      // pure < view < nonpayable < payable
      const stateMutabilityCompare = (a: AbiStateMutability, b: AbiStateMutability) => {
        const av = a == "pure" ? 0 : a == "view" ? 1 : a == "nonpayable" ? 2 : 3;
        const bv = b == "pure" ? 0 : b == "view" ? 1 : b == "nonpayable" ? 2 : 3;
        return av - bv;
      };
      const stateCompare = stateMutabilityCompare(a.fn.stateMutability, b.fn.stateMutability);
      const inputsLengthCompare = a.fn.inputs.length - b.fn.inputs.length;
      if (stateCompare == 0) {
        if (inputsLengthCompare == 0) {
          if (b.inheritedFrom) return b.inheritedFrom.localeCompare(a.inheritedFrom);

          return 1;
        }

        return inputsLengthCompare;
      }

      return stateCompare;
    });

  if (!functionsToDisplay.length) {
    return <>No read or write methods</>;
  }

  return (
    <>
      {functionsToDisplay.map(({ fn, inheritedFrom }, idx) => (
        <ReadOrWriteFunctionForm
          abi={deployedContractData.abi as Abi}
          key={`${fn.name}-${idx}}`}
          abiFunction={fn}
          onChange={onChange}
          contractAddress={deployedContractData.address}
          inheritedFrom={inheritedFrom}
        />
      ))}
    </>
  );
};
