// import { useState } from "react";

// import connectToWallet from "../../../helpers/hashconnect";
// import { FancyButton } from "../../styles/globalStyles";

// export default function WalletConnect() {
//   const [pairingString, setPairingString] = useState("");

//   const pairingStringHandler = async () => {
//     const string = await connectToWallet();
//     setPairingString(string);
//   };
//   return (
//     <>
//       <div>Wallet Connect</div>
//       <p>{pairingString}</p>
//       <FancyButton onClick={pairingStringHandler}>
//         Connect to Wallet
//       </FancyButton>
//     </>
//   );
// }
