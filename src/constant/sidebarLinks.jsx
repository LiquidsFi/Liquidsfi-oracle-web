import {
  BitcoinRefresh,
  Bubble,
  Home2,
  PercentageCircle,
  Repeat,
  EmptyWalletAdd,
  Activity,
  Game,
  Image,
  Link2,
  Data,
  BuyCrypto,
  Award,
} from "iconsax-react";
import { PiBinocularsBold, PiSwap } from "react-icons/pi";

export default [
  {
    heading: "CROSS-CHAIN BRIDGE",
    links: [
      {
        title: "Multichain Bridge",
        icon: <Repeat />,
        path: "bridge.liquids.fi/",
      },
      {
        title: "Liquidity Protocol",
        icon: <Bubble />,
        path: "bridge.liquids.fi/liquidity",
      },

      // {
      // 	title: "Collateralized Loans",
      // 	icon: <Bubble />,
      // 	path: "/loans",
      // },
    ],
  },
  {
    heading: "ORACLE NETWORK",
    links: [
      {
        title: "Explorer",
        path: "explorer.liquids.fi/",
        icon: <PiBinocularsBold className="text-[24px]" />,
      },
      {
        title: "Lane Status",
        path: "explorer.liquids.fi/lane-status",
        icon: <PiSwap className="text-[24px]" />,
      },
    ],
  },
  // {
  // 	title: "Explorer",
  // 	icon: <Bubble />,
  // 	path: "/explorer",
  // },

  // {
  // 	title: "Lane Status",
  // 	icon: <Bubble />,
  // 	path: "/lane-status",
  // },
  // {
  //   title: "Rewards and Quests",
  //   icon: <Award />,
  //   path: "/rewards",
  // },

  // {
  //   title: "Faucet",
  //   icon: <BuyCrypto />,
  //   path: "/faucet",
  // },
];
