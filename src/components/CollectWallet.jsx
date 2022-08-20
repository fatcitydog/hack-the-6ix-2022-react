const CollectWallet = ({ handleCardOpen, handleAuth }) => {
  const connectWithWallet = async () => {
    const data = "data";

    return data;
  };

  const handleConnectWallet = async () => {
    try {
      const data = await connectWithWallet();
      if (data) {
        console.log("connect!");
        handleAuth();
        handleCardOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      login with:
      <button onClick={handleConnectWallet}>Connect</button>
    </div>
  );
};

export default CollectWallet;
