import FancyButton from "../styles/globalStyles";
import connectToWallet from "../../../helpers/hashconnect";

export default function WalletConnect() {
  return (
    <>
      <div>Wallet Connect</div>
      <FancyButton onClick={() => connectToWallet()}>
        Connect to Wallet
      </FancyButton>
    </>
  );
}
