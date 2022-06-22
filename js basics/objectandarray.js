accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },

    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },

    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },

    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log("****************************");
console.log(accounts.length);
//2. print account number whose ac_type is savings
console.log("-----------------------------");
accounts.filter(data=>data.ac_type=='savings').forEach(eachdata => console.log(eachdata.acno));
//3.print the balance of accnount number 1000
console.log("****************************");
accounts.filter(data=>data.acno==1000).forEach(eachdata => console.log(eachdata.balance));
console.log(accounts.find(data=>data.acno==1000));
console.log("****************************");
console.log(accounts.find(data=>data.acno==1000).balance);


//4. print all gpay transactions
console.log("______________________________");
console.log(accounts.map(mapdata=>mapdata.transaction));
//flat to single array 
console.log("____===================_______");
console.log(accounts.map(mapdata=>mapdata.transaction).flat());
console.log("____===^^^^^^^^^^^^^^^^^^^^===_______");
console.log(accounts.map(mapdata=>mapdata.transaction).flat().filter(t=>t.mode=="gpay"));


//5. print all transaction whose amount > 5000

console.log("____===^^^^^^^^^^^^^^^^^^^^===_______");
console.log(accounts.map(mapdata=>mapdata.transaction).flat().filter(tdata=>tdata.amount>5000));

//6. print credit transaction of account 1002

console.log("____==='''''''''''''^^^^^^^^^^^^^^^^^^^^'''''''''''''===_______");
console.log(accounts.map(mapdata=>mapdata.transaction).flat().filter(t=>t.to==1002));
//7. print debit transaction of account 1002
console.log("____===????????????????===_______");
console.log(accounts.map(mapdata=>mapdata.transaction==1002));
//8. print highest balance account details