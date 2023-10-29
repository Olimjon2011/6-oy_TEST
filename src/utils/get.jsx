const getStore = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
 }
  
const getUser = () => {
    return localStorage.getItem
}

export default getStore;