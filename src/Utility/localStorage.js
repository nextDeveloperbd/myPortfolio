const getStoredDonate = () =>{
    const storedDonate = localStorage.getItem('donate-selects');
    if(storedDonate){
        return JSON.parse(storedDonate)
    }
    return [];
}

const saveDonate = id => {
    const storedDonates = getStoredDonate();
    const exists = storedDonates.find(donateId => donateId === id);
    if(!exists){
        storedDonates.push(id)
        localStorage.setItem('donate-selects', JSON.stringify(storedDonates))
    }
}
export{getStoredDonate, saveDonate}