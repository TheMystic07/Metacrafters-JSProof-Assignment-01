/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , type , rarity , attack , defense , speed , level) {
    let NFT = {
        name: name,
        type: type,
        rarity: rarity,
        attack: attack,
        defense: defense,
        speed: speed,
        level: level
    }
    NFTContainer.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n_____________________ POKEMON CARD  _________________________\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("Type: " + NFTContainer[i].type);
        console.log("Rarity: " + NFTContainer[i].rarity);
        console.log("Attack: " + NFTContainer[i].attack);
        console.log("Defense: " + NFTContainer[i].defense);
        console.log("Speed: " + NFTContainer[i].speed);
        console.log("Level: " + NFTContainer[i].level);
        console.log("\n\n_____________________* * * * *_________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted do Far " + NFTContainer.length);

}

// call your functions below this line
mintNFT("Pikachu", "Electric", "Rare", 100, 50, 100, 1);
mintNFT("Charmander", "Fire", "Common", 50, 50, 50, 1);
mintNFT("Bulbasaur", "Grass", "Common", 50, 50, 50, 1);
mintNFT("Squirtle", "Water", "Common", 50, 50, 50, 1);
listNFTs();
getTotalSupply();