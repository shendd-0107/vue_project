import "./css/style.scss"
import "./fonts/iconfont.css"

// let script = document.createElement("script");
// script.src="./js/axios.js"


function ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.send();
        xhr.onload=()=>{
            if(xhr.status==200){
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr.status);
            }
        }
    })
}
ajax("/api/data").then(res=>{
    console.log(res);
    let list = document.querySelector(".list");
    list.innerHTML = res.datas.map(item=>{
        return `<div class="box">
                <img src="./src/img/111.jpg" alt="">
                <dl>
                    <dt>${item.add}</dt>
                    <dd class="iconfont icon-shoucang1"></dd>
                    <dd>${item.name}</dd>
                </dl>
                <button>编辑</button>
            </div>`
    }).join("")
})