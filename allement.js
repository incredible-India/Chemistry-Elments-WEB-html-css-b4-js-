

fetch('element.json')
.then(data => data.json())
.then(finaldata=>{

 console.log(finaldata);

for(i in finaldata)
{
document.body.innerHTML+=`<div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${i}
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
             ${finaldata[i].summary}
            </div>
          </div>
        </div>`



}


}).catch(err=>console.log(err))
