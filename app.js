//bài 1
// let a = [
//     {
//         Name: 'Sony Xperia XZ Premium',
//         Brand: 'Sony',
//         Price: '4428',
//         Color: 'White',
//         Category: 'chager',
//     },
//     {
//         Name: 'OPPO F3 Plus',
//         Brand: 'OPPO',
//         Price: '5487',
//         Color: 'Black',
//         Category: 'Phone',
//     },
//     {
//         Name: 'IPhone 13 Pro max',
//         Brand: 'Apple',
//         Price: '21490',
//         Color: 'Gray',
//         Category: 'Phone',
//     },
//     {
//         Name: 'Samsung Galaxy S8',
//         Brand: 'Samsung',
//         Price: '8490',
//         Color: 'Blue',
//         Category: 'Phone',
//     }
// ]
    
//1.1
// for(let i = 0; i < a.length; i++) {
//     console.log('-------------------');
//     console.log(`#${i} name: ${a[i].Name}`);
//     console.log(`Price: ${a[i].Price}`);
// }

//1.2
// let b = Number(prompt('Enter product position'));
// console.log(`name: ${a[b].Name}`);
// console.log(`Brand: ${a[b].Brand}`);
// console.log(`Price: ${a[b].Price}`);
// console.log(`Color: ${a[b].Color}`);
// console.log(`Category: ${a[b].Category}`);

//1.3
// let c = prompt('nhập vào category bạn muốn');
// for(let i = 0; i < a.length; i++){
//     if(c == a[i].Category){
//         console.log('-------------------');
//         console.log(`name: ${a[i].Name}`);
//         console.log(`Price: ${a[i].Price}`);
//     }   
// }

//1.4
// let Providers = ["Phukienso","Tgdd","Tgdd","Tgdd"]
//     for(let j = 0; j < Providers.length; j++){
//         a[j].Providers = Providers[j];
// }
// for(let i = 0; i < a.length; i++) {
//     console.log('-------------------');
//     console.log(`#${i} name: ${a[i].Name}`);
//     console.log(`Price: ${a[i].Price}`);
//     console.log(`Providers: ${a[i].Providers}`);
// }

//1.5
// let g = prompt('nhập vào Providers bạn muốn');
// for(let i = 0; i < a.length; i++){
//     if(g == a[i].Providers){
//         console.log('-------------------');
//         console.log(`name: ${a[i].Name}`);
//         console.log(`Brand: ${a[i].Brand}`);
//         console.log(`Price: ${a[i].Price}`);
//         console.log(`Color: ${a[i].Color}`);
//         console.log(`Category: ${a[i].Category}`);
//         console.log(`Providers: ${a[i].Providers}`);
//     }   
// }

// bài 2

// let a =[
//     ["html",{Complete: "false"}],
//     ["css",{Complete: "false"}],
//     ["javascript",{Complete: "false"}],
//     ['node packge manager',{Complete: "false"}],
//     ["git",{Complete: "false"}]
// ]
// for(let i = 0; i < a.length; i++) {
//     console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
// }
// let h = true;
// while(h) {
//     let b = prompt("Enter your command(Cretae,Update,Complete,Delete,Ext)");
//     if(b == 'Cretae') {
//         let c = prompt('Enter new task');
//         a.push([c,{Complete: "false"}]);
//         for(let i = 0; i < a.length; i++) {
//             console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
//         }
//     }else if (b == 'Update') {
//         let d = Number(prompt('Enter position'));
//         let e = prompt('Enter new title');
//         a[d-1][0]= e;
//         for(let i = 0; i < a.length; i++) {
//             console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
//         }
//     }else if (b == "Complete") {
//         let f = Number(prompt('Enter position'));
//         a[f-1][1].Complete = 'true';
//         for(let i = 0; i < a.length; i++) {
//             console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
//         }
//     }else if (b == 'Delete') {
//         let g = Number(prompt('Enter deleter'));
//         a.splice(g-1)
//         for(let i = 0; i < a.length; i++) {
//             console.log(`${i+1}: ${a[i][0]} \n   ${Object.keys(a[i][1])[0]}: ${a[i][1][Object.keys(a[i][1])[0]]} `);
//         }
//     }else if(b == 'Ext') {
//         console.log('bye bye');
//         h = false;
//     }
// }