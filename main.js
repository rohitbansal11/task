let test =
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
            "additionalPrice": 2000,
            "__v": 0,
            "isNCR": true
        }]

// const filterData=test.reduce((acc,current)=>{
//     const data=test.filter((i)=>(i.pouchName==current.pouchName))
//     return {[current.pouchName]:data,...acc}
// })
// console.log(filterData)

let main = [];
let item = test.filter(function (i) {
    return i.pouchName

}).map(i => {
    const nn = i.pouchName;
    let myag = [];
    let secfil = test.filter(j => j.pouchName == nn)
    myag.name = nn;
    myag.obj = secfil;
    return myag
})
let fill = item.filter(function (k) {
    //  console.log(k);
    main[(k.name)] = k.obj
})
console.log(main);


let keym = Object.keys(main);



//  console.log(keym);
for (i = 0; i < keym.length; i++) {
    //  console.log(keym[i]);


    // if(main.keym[i]==="Small"){




    // }







}


for (joinnn in main) {
    //  console.log(main[joinnn]);
    if (joinnn == joinnn) {
        // console.log(joinnn);
        // console.log(main[joinnn]);

        var row = document.getElementById("myRow");
        var x = row.insertCell(0);
        x.innerHTML = `<table >
    <thead>
        <tr>
            <th>`+ joinnn + `</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <table>

            <tbody id='showUsers' >
            

        </tbody>
        </table>
        </tr>


    </tbody>
        </table>`;

  

        


        for (i in main[joinnn]) {
            // console.log(i);
            let ff = main[joinnn][i];
            console.log(ff._id);
            let addDiv = document.createElement('tr');
            addDiv.className = "myttr";

            addDiv.innerHTML =`
            




                    <table> 
         <tr>
                     <th>_id</th>
                        <td>`+ ff._id +`</td>
         </tr>

        <tr>
                         <th>updatedAt</th>
                         <td>`+ ff.updatedAt +`</td>
            </tr>
             <tr>
                            <th>createdAt</th>
                            <td>`+ ff.createdAt+`</td> 
             </tr>
             <tr>
                             <th>pouchName</th>
                            <td>`+ ff.pouchName+`</td> 
                </tr>
            <tr>
                            <th>price</th>
                            <td>`+ ff.price+`</td> 
            </tr>
                <tr>
                            <th>deliveryType</th>
                            <td>`+ff.deliveryType+`</td> 
            </tr>
            <tr>
                            <th>limit</th>
                            <td>`+ ff.limit+`</td> 
            </tr>
            <tr>
                            <th>additionalPrice</th>
                            <td>`+ff.additionalPrice+`</td> 
            </tr>
            <tr>
                            <th>__v</th>
                            <td>`+ ff.__v+`</td> 
            </tr>
            <tr>
                            <th>isNCR</th>
                            <td>`+ff.isNCR+`</td> 
            </tr>
                </table>
            
            `;
            document.getElementById("showUsers").appendChild(addDiv);

            
          
        }


console.log(joinnn.updatedAt);


    }


}

//  let itemmm=keym.filter(function(i){
//     return i

// }).map(i=>{
//    console.log(i);

//   for(j=0;j<i.length;j++){
//       console.log(i);
//   }



//  })






