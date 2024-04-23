async function fetc(){
    var swe=document.getElementById('result');
    swe.className="logasri";
    var url=await fetch("https://jsonplaceholder.typicode.com/photos");
    var store=await url.json()
    store.map((swetha)=>{
      var ak=document.createElement("div")
      ak.className="d"
      swe.appendChild(ak)
      var st=document.createElement("p")
       st.innerText=swetha.id
       swe.appendChild(st)
       ak.appendChild(st)
       ak.className="ggg"
       var img2=document.createElement("img")
       img2.src=swetha.url
       img2.className="zzz"
      swe.appendChild(img2);
       ak.appendChild(img2)
       var ss=document.createElement("p")
       ss.innerText=swetha.title
       swe.appendChild(ss)
       ak.appendChild(ss)
    })
  }
  fetc();
  