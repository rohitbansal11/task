let data =
    [
        {
            "_id": "614c2258c685a60eb773be7b",
            "updatedAt": "2021-09-23T06:44:40.673Z",
            "createdAt": "2021-09-23T06:44:40.673Z",
            "pouchName": "Small",
            "price": 120,
            "deliveryType": "Express",
            "limit": 12,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c2276c685a60eb773be7c",
            "updatedAt": "2021-09-23T07:33:53.915Z",
            "createdAt": "2021-09-23T06:45:10.884Z",
            "pouchName": "large",
            "price": 1111,
            "deliveryType": "standard",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c5523fdd72d07055f45b4",
            "updatedAt": "2021-09-23T10:21:23.879Z",
            "createdAt": "2021-09-23T10:21:23.879Z",
            "pouchName": "Medium",
            "price": 150,
            "deliveryType": "standard",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": false
        },
        {
            "_id": "614c5a53fdd72d07055f45b5",
            "updatedAt": "2021-09-23T10:43:31.176Z",
            "createdAt": "2021-09-23T10:43:31.176Z",
            "pouchName": "Medium",
            "price": 120,
            "deliveryType": "Express",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c5a62fdd72d07055f45b6",
            "updatedAt": "2021-09-23T10:43:46.184Z",
            "createdAt": "2021-09-23T10:43:46.184Z",
            "pouchName": "Small",
            "price": 150,
            "deliveryType": "Gencar",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": false
        },
        {
            "_id": "614c5a77fdd72d07055f45b7",
            "updatedAt": "2021-09-23T10:44:07.297Z",
            "createdAt": "2021-09-23T10:44:07.297Z",
            "pouchName": "large",
            "price": 150,
            "deliveryType": "standard",
            "limit": 12,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c5b78fdd72d07055f45b8",
            "updatedAt": "2021-09-23T10:48:24.097Z",
            "createdAt": "2021-09-23T10:48:24.097Z",
            "pouchName": "gencar",
            "price": 150,
            "deliveryType": "ahjhj",
            "limit": 12,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c5b83fdd72d07055f45b9",
            "updatedAt": "2021-09-23T10:48:35.995Z",
            "createdAt": "2021-09-23T10:48:35.995Z",
            "pouchName": "gencar",
            "price": 152,
            "deliveryType": "Express",
            "limit": 11,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c5baffdd72d07055f45ba",
            "updatedAt": "2021-09-23T10:49:19.231Z",
            "createdAt": "2021-09-23T10:49:19.231Z",
            "pouchName": "Small",
            "price": 152,
            "deliveryType": "ahjhj",
            "limit": 12,
            "additionalPrice": 12,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614c6034fdd72d07055f45bb",
            "updatedAt": "2021-09-23T11:08:36.134Z",
            "createdAt": "2021-09-23T11:08:36.134Z",
            "pouchName": "gencar 2",
            "price": 150,
            "deliveryType": "done",
            "limit": 11,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "614ec43c90b85922634e722b",
            "updatedAt": "2021-09-25T06:39:56.812Z",
            "createdAt": "2021-09-25T06:39:56.812Z",
            "pouchName": "Small",
            "price": 120,
            "deliveryType": "Express",
            "limit": 12,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        },
        {
            "_id": "6155679268d6340f40a3de75",
            "updatedAt": "2021-09-30T07:30:26.869Z",
            "createdAt": "2021-09-30T07:30:26.869Z",
            "pouchName": "Small",
            "price": 150,
            "deliveryType": "Express",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        }
        ,
        {
            "_id": "6155679268d6340f40a3de75",
            "updatedAt": "2021-09-30T07:30:26.869Z",
            "createdAt": "2021-09-30T07:30:26.869Z",
            "pouchName": "Small12555",
            "price": 150,
            "deliveryType": "Express",
            "limit": 10,
            "additionalPrice": 0,
            "__v": 0,
            "isNCR": true
        }]




let myarrr = []


let arrs = []
let fillt = data.filter(function (student) {
    // console.log(student.pouchName);
    return student;
}).map(function (student) {

   let my = student.pouchName;
      //console.log(student.pouchName);
      arrs.push(student.pouchName);
      



})


 let myary=[]   ;
 let propp=["_id","updatedAt","createdAt","pouchName","price","deliveryType","limit","additionalPrice","__v","isNCR"]

    //  console.log(arrs);
    const counts = {};
    arrs.forEach((x) => {
        counts[x] = (counts[x] || 0) + 1;
    });

    for (let prop in counts) {
        //  console.log(prop);
        myary.push({
            name:prop
        })
        

    }

console.log(myary);
console.log(propp);

var result = data.filter(function(item){
    // filter out (!) items in result2
    return myary.some(function(ite){
        return item.pouchName === ite.name;          // assumes unique id
    });
}).map(function(item){
    let nn = item.pouchName;
    let mm=item.pouchName;
    // console.log(item.pouchName);
    if(nn==mm){
        console.log(nn);
    }


})


//.map(function(item){
//     // use reduce to make objects with only the required properties
//     // and map to apply this to the filtered array as a whole
//     return propp.reduce(function(newo, name ,b,c,d,e,f,j,h,i,n){
//         propp.push({
//             _id: item[name],
//             updatedAt:item[name],
//             createdAt: item[b],
//             pouchName:item[c],
//             price: item[d],
//             deliveryType: item[e],
//             limit: item[f],
//             additionalPrice:item[j],
//             __v : item[h],
//             isNCR : item[i],
       
//         })
//         return newo;
//     }, {});
// });
// // console.log(JSON.stringify(result));
// console.log(propp);



// let countarr = [];

// countarr.push({
//     'value': counts
// })
// var names = countarr.map(function (i) {
//     return i.value;
// });


//   function count_duplicate(arrs){
//     let counts = {}

//     for(let i =0; i < arrs.length; i++){ 
//         if (counts[arrs[i]]){
//         counts[arrs[i]] += 1
//         } else {
//         counts[arrs[i]] = 1
//         }
//        }  
//        for (let prop in counts){
//            if (counts[prop] >= 2){
//                console.log(prop + " counted: " + counts[prop] + " times.")
//            }
//        }
//      console.log(counts)
//    }

//    count_duplicate(arrs)







// let arr=[]

// let filltg = data.filter(function (student) {
//     return student.pouchName === "gencar";
// }).map(function (student) {

//     console.log('pouchName=====gencar');

//     //  console.log(student);
//     arr.push(student);









// })

// console.log(arr);





// let arrm=[]
// let filltm = data.filter(function (student) {
//     return student.pouchName === "Medium";
// }).map(function (student) {

//     console.log('pouchName=====Medium');
//     //  console.log(student);
//     arrm.push(student);




// })



// console.log(arrm);



// let arrl=[]
// let filltl = data.filter(function (student) {
//     return student.pouchName === "Medium";
// }).map(function (student) {
//     console.log('pouchName=====Medium');
//     //  console.log(student);
//     arrl.push(student);
// })


// console.log(arrl);





// myarrr.push(arrl);
// myarrr.push(arrm);
// myarrr.push(arrs);
// myarrr.push(arr);

// console.log(myarrr);


