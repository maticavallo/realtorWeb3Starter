import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// Components
import Navigation from './components/Navigation';
import Search from './components/Search';
import Home from './components/Home';

// ABIs
import RealEstate from './abis/RealEstate.json'
import Escrow from './abis/Escrow.json'

// Config
import config from './config.json';

function App() {
  const [provider, setProvider] = useState(null)
  const [escrow, setEscrow] = useState(null)

  const [account, setAccount] = useState(null)

  const [homes, setHomes] = useState([])
  const [home, setHome] = useState({})
  const [toggle, setToggle] = useState(false);

    //here the Blockchain links with the ReactApp
  const loadBlockchainData = async () => {
    const provider = //complete using ethers
    setProvider(provider)
    const network = // complete with await and get the network

    //conecting RealEstate Contract.
    const RealEstate = new // create an instance with ethers use  (must include properties )
    
    const totalSupply = //this variable should await realEstate.totalSupply()
    const homes = [] //storage of housing/nfts

    for (var i = 1; i <= totalSupply; i++) {
      const uri = //complete 
      const response = //complete 
      const metadata = //complete 
      homes.push(metadata)
    }

    setHomes(homes)

    const escrow = new // same here as RealEstate
    setEscrow(escrow)

    //Interaction with Connect Metamask button
    ... , async () => {//*use window.ethereum 'accountsChanged' as async function
    const accounts = // *use await +window ethereum + requestAccount method*
    const account = //use ethers to get the address
    setAccount(account); 
    }  
  useEffect(() => {
    loadBlockchainData()
  }, [])

  const togglePop = (home) => {
    setHome(home)
    toggle ? setToggle(false) : setToggle(true);
  }

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <Search />

      <div className='cards__section'>

        <h3>Homes For You</h3>

        <hr />

        <div className='cards'>
          {homes.map((home, index) => (
            <div className='card' key={index} onClick={() => togglePop(home)}>
              <div className='card__image'>
                <img src={home.image} alt="Home" />
              </div>
              <div className='card__info'>
                <h4>{home.attributes[0].value} ETH</h4>
                <p>
                  <strong>{home.attributes[2].value}</strong> bds |
                  <strong>{home.attributes[3].value}</strong> ba |
                  <strong>{home.attributes[4].value}</strong> sqft
                </p>
                <p>{home.address}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {toggle && (
        <Home home={home} provider={provider} account={account} escrow={escrow} togglePop={togglePop} />
      )}

    </div>
  );
}

export default App;
