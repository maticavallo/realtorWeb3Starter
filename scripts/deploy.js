// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts
  const [buyer, seller, inspector, lender] = await ethers.getSigners()

  // Deploy RealEstate.sol
  const RealEstate = /* complete *use await & ethers**/ 
  const realEstate = /*complete *use deploy **/ 
  await /*complete*/ /*use instead deployed*/

  console.log(`Deployed Real Estate Contract at: ${realEstate.address}`)
  console.log(`Minting 3 properties...\n`)

  for (let i = 0; i < 3; i++) {
    const transaction = await //complete **use function connect and mint and the IFPS link**
    await transaction. //complete 
  }

  // Deploy Escrow.sol
  const Escrow = /*complete*/
  const escrow = /*complete*/
    /*realEstate.address,
    seller.address,
    inspector.address,
    lender.address*/
  )
  await/* complete*/

  console.log(`Deployed Escrow Contract at: ${escrow.address}`)
  console.log(`Listing 3 properties...\n`)

  for (let i = 0; i < 3; i++) {
    // Approve properties...
    let transaction = await /*complete*/
    await /*complete*/
  }

  // Listing properties...
  transaction = await /*complete use functions connect and list for each nft*/ 
  await //complete
  transaction = await /*same here*/ 
  
  transaction = await /*same here*/
  
  console.log(`Finished.`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
