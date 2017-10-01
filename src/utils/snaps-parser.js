//reduce an array of snaps to a snap object with snapid as key for each snap
const snapsParser = (array) => {
    return array.reduce((snaps, snap) =>{
        snaps[snap.id] = snap;
        return snaps;
    },{})
}

//TEST var a = [{id : 1, title : 'hey'},{id : 2, tee : 'oh'},{id : 6, name : 'ok'}]
//console.log(snapsParser(a))

export { snapsParser }