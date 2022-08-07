const dotenv = require("dotenv");
const { Relayer } = require("dot-vote-relayer");
dotenv.config();

const config = {
  ethRpcUrl: process.env.ETH_RPC,
  mongodDbUrl: process.env.MONGODB_URL,
  relayerPk: process.env.RELAYER_PK,
  notificationHook: process.env.NOTIFICATION_HOOK,
  governorAddress: "0x7E9B1672616FF6D6629Ef2879419aaE79A9018D2",
  tokenAddress: "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
  governorVoteFunction: "submitVoteBySignature",
  governorGetProposalFunction: "getProposalById",
  governorGetReceiptFunction: "getVoteOnProposal",
};

const relayer = new Relayer(config);
relayer.start();