function counterWebReload(){
    let wedRefresh;
    if(!localStorage.getItem("reloads")) localStorage.setItem("reloads", 1)
    wedRefresh = +localStorage.getItem("reloads")
    const incrementReloads= wedRefresh + 1
    let values =  localStorage.setItem("reloads", incrementReloads)
    console.log(values)
}
module.exports = counterWebReload