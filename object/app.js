//default object which is empty
const localData = {};
//add to local data 
const addData =(item)=>{
    const localData = getData();
    if(item in localData){
        localData[item] = localData[item]+1;
    }
    else{
        localData[item] = 1;
    }
    console.log(localData);
}
// get data from local data
const getData =()=>{
    return localData;
}
// remove data
const removeData = (item)=>{
    const localData = getData();
    delete localData[item];
}