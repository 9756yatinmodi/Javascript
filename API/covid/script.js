const tBody=document.getElementById("tBody");

//  <tr>
//       <td>1</td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//     </tr>
function displayCovid(covid){
    covid.map((data,index)=>{

const tr=document.createElement("tr");
const td1=document.createElement("td");
const td2=document.createElement("td");
const td3=document.createElement("td");
const td4=document.createElement("td");
const td5=document.createElement("td");
const td6=document.createElement("td");
const td7=document.createElement("td");

td1.textContent=index+1;
td2.textContent=data.loc
td3.textContent=data.confirmedCasesIndian
td4.textContent=data.confirmedCasesForeign
td5.textContent=data.discharged
td6.textContent=data.deaths
td7.textContent=data.totalConfirmed

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
tr.appendChild(td7);

tBody.appendChild(tr);

});
}

fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then((Response)=>Response.json())
.then((data)=>{
    displayCovid(data.data.regional);
});
