import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

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
      abi: [
        {
          inputs: [{ internalType: "address", name: "initialGovernor_", type: "address" }],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "CheckpointUnorderedInsertion", type: "error" },
        { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
        {
          inputs: [{ internalType: "uint256", name: "length", type: "uint256" }],
          name: "ECDSAInvalidSignatureLength",
          type: "error",
        },
        {
          inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
          name: "ECDSAInvalidSignatureS",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "increasedSupply", type: "uint256" },
            { internalType: "uint256", name: "cap", type: "uint256" },
          ],
          name: "ERC20ExceededSafeSupply",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "allowance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "approver", type: "address" }],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "receiver", type: "address" }],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "sender", type: "address" }],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [{ internalType: "address", name: "spender", type: "address" }],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "uint256", name: "timepoint", type: "uint256" },
            { internalType: "uint48", name: "clock", type: "uint48" },
          ],
          name: "ERC5805FutureLookup",
          type: "error",
        },
        { inputs: [], name: "ERC6372InconsistentClock", type: "error" },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "currentNonce", type: "uint256" },
          ],
          name: "InvalidAccountNonce",
          type: "error",
        },
        { inputs: [], name: "InvalidShortString", type: "error" },
        {
          inputs: [
            { internalType: "uint8", name: "bits", type: "uint8" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "SafeCastOverflowedUintDowncast",
          type: "error",
        },
        { inputs: [{ internalType: "string", name: "str", type: "string" }], name: "StringTooLong", type: "error" },
        {
          inputs: [{ internalType: "uint256", name: "expiry", type: "uint256" }],
          name: "VotesExpiredSignature",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "delegator", type: "address" },
            { indexed: true, internalType: "address", name: "fromDelegate", type: "address" },
            { indexed: true, internalType: "address", name: "toDelegate", type: "address" },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "delegate", type: "address" },
            { indexed: false, internalType: "uint256", name: "previousVotes", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "newVotes", type: "uint256" },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "EIP712DomainChanged", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "CLOCK_MODE",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "burnFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint32", name: "pos", type: "uint32" },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                { internalType: "uint48", name: "_key", type: "uint48" },
                { internalType: "uint208", name: "_value", type: "uint208" },
              ],
              internalType: "struct Checkpoints.Checkpoint208",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "clock",
          outputs: [{ internalType: "uint48", name: "", type: "uint48" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "delegates",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { internalType: "bytes1", name: "fields", type: "bytes1" },
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "version", type: "string" },
            { internalType: "uint256", name: "chainId", type: "uint256" },
            { internalType: "address", name: "verifyingContract", type: "address" },
            { internalType: "bytes32", name: "salt", type: "bytes32" },
            { internalType: "uint256[]", name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "timepoint", type: "uint256" }],
          name: "getPastTotalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "timepoint", type: "uint256" },
          ],
          name: "getPastVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "getVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
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
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "numCheckpoints",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
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
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
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

export default externalContracts satisfies GenericContractsDeclaration;
