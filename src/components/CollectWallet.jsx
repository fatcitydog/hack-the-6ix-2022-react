const CollectWallet = ({ handleCardOpen }) => {
  const connectWithWallet = async () => {
    const data = "data";

    return data;
  };

  const handleConnectWallet = async () => {
    try {
      const data = await connectWithWallet();
      if (data) {
        console.log("connect!");
        handleCardOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      login with:
      <button onClick={handleConnectWallet}> connect</button>
    </div>
  );
};

export default CollectWallet;
