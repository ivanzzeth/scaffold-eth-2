import { whatsabi } from "@shazow/whatsabi";
import { ethers } from "ethers";
import { getTargetNetworks } from "~~/utils/scaffold-eth";
import { GenericContract, GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */

const externalContracts = {
  84532: {
    TEA: {
      address: "0x87C51CD469A0E1E2aF0e0e597fD88D9Ae4BaA967",
      abi: [],
    },
    "Storage Pin": {
      address: "0x567452C6638c0D2D9778C20a3D59749FDCaa7aB3",
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        { inputs: [], name: "NotActive", type: "error" },
        { inputs: [], name: "SoulboundToken", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "approved", type: "address" },
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: false, internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "submission", type: "address" },
            { indexed: false, internalType: "bool", name: "passed", type: "bool" },
            {
              components: [
                { internalType: "string", name: "message", type: "string" },
                {
                  components: [
                    {
                      components: [
                        { internalType: "bool", name: "passed", type: "bool" },
                        { internalType: "string", name: "assertionError", type: "string" },
                        { internalType: "string", name: "returnedAsString", type: "string" },
                        { internalType: "string", name: "expectedAsString", type: "string" },
                        { internalType: "string", name: "methodName", type: "string" },
                      ],
                      internalType: "struct Assert.AssertResult[]",
                      name: "elements",
                      type: "tuple[]",
                    },
                    { internalType: "uint256", name: "num", type: "uint256" },
                  ],
                  internalType: "struct List.ARList",
                  name: "assertResults",
                  type: "tuple",
                },
              ],
              indexed: false,
              internalType: "struct Cafe.TestResult[]",
              name: "testResults",
              type: "tuple[]",
            },
          ],
          name: "TestSuiteResult",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "string", name: "message", type: "string" },
                {
                  components: [
                    {
                      components: [
                        { internalType: "bool", name: "passed", type: "bool" },
                        { internalType: "string", name: "assertionError", type: "string" },
                        { internalType: "string", name: "returnedAsString", type: "string" },
                        { internalType: "string", name: "expectedAsString", type: "string" },
                        { internalType: "string", name: "methodName", type: "string" },
                      ],
                      internalType: "struct Assert.AssertResult[]",
                      name: "elements",
                      type: "tuple[]",
                    },
                    { internalType: "uint256", name: "num", type: "uint256" },
                  ],
                  internalType: "struct List.ARList",
                  name: "assertResults",
                  type: "tuple",
                },
              ],
              internalType: "struct Cafe.TestResult[]",
              name: "_testResults",
              type: "tuple[]",
            },
          ],
          name: "checkIfAllPassed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes", name: "a", type: "bytes" },
            { internalType: "bytes", name: "b", type: "bytes" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "a", type: "uint256" },
            { internalType: "uint256", name: "b", type: "uint256" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "a", type: "address" },
            { internalType: "address", name: "b", type: "address" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "a", type: "string" },
            { internalType: "string", name: "b", type: "string" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string[]", name: "a", type: "string[]" },
            { internalType: "string[]", name: "b", type: "string[]" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "a", type: "address[]" },
            { internalType: "address[]", name: "b", type: "address[]" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "a", type: "uint256[]" },
            { internalType: "uint256[]", name: "b", type: "uint256[]" },
          ],
          name: "equal",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "a", type: "bool" }],
          name: "isFalse",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "a", type: "bool" }],
          name: "isTrue",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "a", type: "address" },
            { internalType: "address", name: "b", type: "address" },
          ],
          name: "notEqual",
          outputs: [
            {
              components: [
                { internalType: "bool", name: "passed", type: "bool" },
                { internalType: "string", name: "assertionError", type: "string" },
                { internalType: "string", name: "returnedAsString", type: "string" },
                { internalType: "string", name: "expectedAsString", type: "string" },
                { internalType: "string", name: "methodName", type: "string" },
              ],
              internalType: "struct Assert.AssertResult",
              name: "result",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "owners",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "_setActiveTo", type: "bool" }],
          name: "setActive",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "string", name: "_tokenURI", type: "string" }],
          name: "setTokenURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_submissionAddress", type: "address" }],
          name: "testContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenIds",
          outputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export async function fulfilledContracts(
  chainId: string,
  contracts: {
    [contractName: string]: GenericContract;
  },
): Promise<void> {
  for (const contractName of Object.keys(contracts)) {
    const contract = contracts[contractName];
    if (contract.abi.length == 0) {
      // trying to parse abi using whatsabi
      const targetNetworks = getTargetNetworks();
      const network = targetNetworks.find(network => network.id.toString() == chainId);
      if (network) {
        const provider = new ethers.JsonRpcProvider(network.rpcUrls.default.http[0]);
        const result = await whatsabi.autoload(contract.address, {
          provider: provider,
          enableExperimentalMetadata: true,
          followProxies: true,
          ...whatsabi.loaders.defaultsWithEnv({
            SOURCIFY_CHAIN_ID: chainId,
            ETHERSCAN_BASE_URL: network.blockExplorers?.default.apiUrl,
            ETHERSCAN_API_KEY: "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW",
          }),
        });
        console.log(`Parsed ABI for ${contractName} on ${chainId}, ABI=${JSON.stringify(result.abi)}`);
        contract.abi = result.abi as any;
        contract.parsed = true;
      }
    }
  }
}

export default externalContracts satisfies GenericContractsDeclaration;
