// taking all the input data form the user
let eleName=document.getElementById('inputElement2')//name input  the search bar

let showTable=document.getElementById('showTable')//showing the all data about the given name

let numberOfProperites=0;//for the serial number of the properties

var nameForTheSummery;
// let makeTable =document.getElementById('insideTableBody')//inserting the data in the table in tbody

let info=document.getElementById('aboutele')

let searchdata=document.getElementById('searchdata')//button for searchin the data


searchdata.addEventListener('click',(event)=>{//adding an event to show the data
  event.preventDefault();
  if(eleName.value !="")
  {

  
    numberOfProperites=0;
  
    let elementsof=eleName.value[0].toLocaleUpperCase()+eleName.value.slice(1).toLocaleLowerCase()//,making the given data`s first letter in capital 
    console.log(elementsof,typeof elementsof);//for the debuging purpose latar we will delete this line
    fetch('data1st.json')//fetchin the api from our local storage named data1st.json
    .then(data =>data.json())//converting to promise in json
    .then(finalData => {//finally we are showing the data in table
        for( i of finalData)//loop for the itreting objects in array form
    {
        if(i['symbol']==elementsof || i["name"]==elementsof ||i["atomicNumber"]==elementsof)/*checking the condition of our user`s input */
        {
           
            for(key in i)
            {//finally printing the data in our html page
          
              nameForTheSummery=i['name']
            }
    
        }

            
        
    }
    })
    .catch(err=> {   
         document.getElementById('doalert').innerText=`Oooppps ! it seems like you have deleted the json file to ur local storage ${err}`
    document.getElementById('doalert').style.display="block";

    setTimeout(() => {
        document.getElementById('doalert').style.display="none"
    }, 4000);
})

//for the detail of that element
try{

    fetch('element.json')
    .then(mydata=>mydata.json())
    .then(myfinalData =>{
        
        console.log(myfinalData.hydrogen);// for the debuging purpose;
        console.log(nameForTheSummery);
        for(nkey in myfinalData)
        {
            showTable.innerHTML=`<table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Properties</th>
                <th scope="col">value</th>
                
              </tr>
            </thead>
            <tbody id="insideTableBody">
          
            </tbody>
          </table>`
                if( nameForTheSummery.toLocaleLowerCase()==nkey ){
                    document.getElementById('insideTableBody').innerHTML += `   <tr>
                    <th scope="row">${++numberOfProperites}</th>
                    <td>${nkey}</td>
                    <td>${myfinalData[nkey]}</td>
             
                  </tr>`
              
                
                    }
                }
                
                
                }).catch(errorinreadin =>{
                        document.getElementById('identification').innerText=` Detail of element.. \n 404 Not Found`
                    
                    })
                }catch(error){
                    document.getElementById('identification').innerText=`Failed to load detail }`
                }
                    
                    
                    
                    
  }else
  {
      document.getElementById('doalert').innerText="Please write the element`s name ,number or symbol"
      document.getElementById('doalert').style.display="block"
      setTimeout(() => {
        document.getElementById('doalert').style.display="none"
      }, 2000);
  }
})

