// import Init from "./js/aa";
// import {Fnstr} from "./js/bb";
// new Init({name:"zs",age:12}).fn();
console.log(111);
import './css/style.css'
import "./fonts/iconfont.css"
import "./scss/index.scss"
function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onload = ()=>{
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject("error")
            }
        }
    })
}

ajax("/api/data").then(res=>{
    console.log(res);
})
