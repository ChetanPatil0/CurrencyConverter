//const apikey = '004c1711fb1617bfa7ea4e47';
let url = 'https://v6.exchangerate-api.com/v6/004c1711fb1617bfa7ea4e47/latest/USD';
let currencyData = () => {
    let data = fetch(url).then((res) => {
        console.log(res, "success");
        return res.json();
    })
        .then((data) => {
            console.log("OKKK");
            console.log(data);

            let cdata = data.conversion_rates;
            currencyCalculate(cdata)
            currencyconvertor(cdata);
        })
        .catch((error) => {
            console.log(error, 'faild');
        });

}
currencyData();

let currencyFrom = document.querySelector('#CurrencyFrom');
let currencyTo = document.querySelector('#CurrencyTo');
let amount = document.querySelector('#amount');
let totalamount = document.querySelector('#totalval');


let currencyconvertor = (data) => {
    //console.log("data : ",data);

    let countrys = Object.keys(data);
    countrys.forEach(ele => {
        const list1 = document.createElement("option");
        list1.innerHTML = ele;

        const list2 = document.createElement("option");
        list2.innerHTML = ele;
        currencyFrom.appendChild(list1);
        currencyTo.appendChild(list2);
    
    });
}


let currencyCalculate = (data)=>{ 
    let currFromVal= currencyFrom.value;
    let currToVal= currencyTo.value;
    let amt = amount.value;
    let value1 =0;
    let value2 =0;
    
    for(const [key,value] of Object.entries(data)){
        if(currFromVal === key)
            {
                value1 = value;
            }
        if(currToVal === key)
                {
                    value2 = value;
                }
    }
         
                let result = value1*value2 * amt;
                totalamount.innerHTML=result.toFixed(2)+ " "+currToVal;
        

    console.log(value1,value2);  
    console.log(value1*value2 * amt ,"result");
     
}
