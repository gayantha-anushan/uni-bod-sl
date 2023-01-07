//filter like this
/*
{
            university:selectedUni,
            tenantType:selectedTenantType,
            tenantNo:selectedTenantNo,
            withMeals:withMealse,
            withFurniture:furniture,
            withBills:bills,
            minMoFee:minMoFee,
            maxMoFee:maxMoFee
        }
*/
export function GetSelectedAds(filters){
    return new Promise((resolve,reject)=>{
        fetch("connection_string_here",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(filters)
        }).then(response=>response.json()).then(jsonResponse=>{
            resolve(jsonResponse)
        }).catch((error)=>{
            console.log(error);
            reject(error)
        })
    })
}
//these kind of response will expexted from server
    // return [
    //     {
    //         university:"University of colombo",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     },{
    //         university:"University of Ruhuna",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     },{
    //         university:"University of Jaffna",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     }
    // ]
//here is post model example
/* {"advancePayment": "200", "contactNumber": "0w93727", "description": "Skebr jeie", 
"monthlyFee": "12000", "selectedTenantType": "", "selectedUni": "", 
"tenantNo": 0, "withBills": true, "withFurniture": false, "withMeals": true}
 */
export function createPost(post){
    return new Promise((resolve,reject)=>{
        fetch("http://connection.link/route",{
        method:'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":'application/json'
        },
        body:JSON.stringify(post)
    }).then(result=>result.json()).then(jsonRes=>{
        resolve(jsonRes.reference)
    }).catch((error)=>{
        reject(error)
    })
    })
}