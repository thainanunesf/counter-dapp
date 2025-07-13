import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0xb5081f0cc1332b45872198592916b56c20e19809f0ca6114ff4663c70db26809",
        "0x2e6c69e187d177ad37c0e132cdd7e26c0859c4b082ec2ffd476a381d6fa575d0",
        "0x443d8007516c977cadd17e32c53021141735665a18d339ed132da99ea97a0010",
        "0x94576a4864065f3b9dbbfe2b1e38306a5a802f5e316ee92df5a13298fee8abc2",
        "0x598b1f58e3d98efd3aae0a927b4eb5c51c690604dda0dda9ab183c40a48cb45b",
        "0xf0b74274d1de06b788fa5d50ebbcb8e94a86f2c20c880af1699d4e10fd5221ba",
        "0x996cdde6a13ac3a50829a5e83c6163996e1c441af132ae431695fccd65651c98",
        "0xf59bceb2e937ad037642d5ddfe784cf7ff4ab3066957f4af06ed9eff03e3c576",
        "0x98c98ba875835e3cf19e9c395442a8ea8ab0fd066254206f92c433baf750155d",
        "0x47dfce189fa9c71b0630b62a5b8ab675acc20b26c5035c7d2e52d14b75d9ca15"

      ]
    }
  },
};

export default config;