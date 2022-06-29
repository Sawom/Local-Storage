// add data
const addData = (item)=>{
    let data = getData();
    if(item in data){
        data[item] = data[item]+1;
    }
    else{
        data[item] = 1;
    }
    console.log(data);
    saveData(data);
}
// remove data
const removeData = (item)=>{
    let data = getData();
    delete data[item];
    saveData(data);
}
// save data
const saveData = (data)=>{
    let savedb = JSON.stringify(data);
    localStorage.setItem('cart', savedb);
}
//get data
const getData = ()=>{
    let saved = localStorage.getItem('cart');
    if(saved){
        saved = JSON.parse(saved);
    }else{
        saved = {};
    }
    return saved;
}
