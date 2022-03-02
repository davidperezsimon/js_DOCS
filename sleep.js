function sleep(sec){
    return new Promise(resolve => {
        setTimeout(resolve, sec)
    })
}

sleep(1000).then(()=>{
    console.log('ok')
})
