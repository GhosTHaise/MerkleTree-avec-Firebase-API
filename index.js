const {ref} = require('./components/firebase')
const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');
//reqcuperer les donnees

const getDataFromDatabase = async() => {
    return(new Promise(async(resolve,reject)=>{
        let result = [];
        try{
            const data = await ref.get()
            data.forEach(doc => {
            result.push(doc.data().Address);
            })
            resolve(result);
        }catch(err){
            reject(result);
        }
       
    }))
    
}
const AfficherMerkle_Proof = async(address) => {
    const result = await getDataFromDatabase()
    const leaves = result.map(Element => keccak256(Element));
    const merkletree = new MerkleTree(leaves,keccak256,{sort : true});
    const leaf = keccak256(address);
    const proof = merkletree.getHexProof(leaf);
    const root = merkletree.getHexRoot();
    console.log("Proof : "+proof);
    console.log("Root : "+root);
} 
AfficherMerkle_Proof("0xc23EC2B7a2C89fF16C5cF1942a8c9B4eE50Cd742")
