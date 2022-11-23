//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
    address public nftAddress;
    address payable public seller;
    address public inspector;
    //address public lender; LENDER is OPTIONAL

    // modifier onlyBuyer => verify for "Only buyer call this method"
   
    // modifier onlySeller => verify for "Only seller call this method"

    // modifier onlyInspector => verify for "Only inspector call this method"
    
    //mappings *isListed**purchuasePrice**escrowAmount**buyer**inspectionPassed*
    constructor(
        address _nftAddress,
        address payable _seller,
        address _inspector,
        address _lender
    ) {
        nftAddress = _nftAddress;
        seller = _seller;
        inspector = _inspector;
        lender = _lender;
    }

    function list(
        uint256 _nftID,
        address _buyer,
        uint256 _purchasePrice,
        uint256 _escrowAmount
    ) public payable onlySeller {
        // Transfer NFT from seller to this contract
        IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);

        isListed[_nftID] = true;
        purchasePrice[_nftID] = _purchasePrice;
        escrowAmount[_nftID] = _escrowAmount;
        buyer[_nftID] = _buyer;
    }
            // Put Under Contract (only buyer - payable escrow)   
    function depositEarnest//complete


    // Update Inspection Status (only inspector)
    function updateInspectionStatus//complete *renember use onlyInspector*
    

    // Approve Sale
    function approveSale // complete
    
    (uint256 _nftID) public {
        approval[_nftID][msg.sender] = true;
    }

    // Finalize Sale
    // -> Require inspection status 
    // -> Require sale to be authorized
    // -> Require funds to be correct amount
    // -> Transfer NFT to buyer
    // -> Transfer Funds to Seller
    function finalizeSale //complete
        
    // Cancel Sale (handle earnest deposit)
    // -> if inspection status is not approved, then refund, otherwise send to seller
    function cancelSale // complete

    //implement a special receive function in order to receive funds and increase the balance
    receive() external payable {}

            //function getBalance to check the current balance
    function getBalance() //completepublic view returns (uint256) {
        



}
