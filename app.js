// CarObject
// step-1: create object
// step-2: write a display function that will take an object
// step-3: invoke the function
var carObject = {
    vahicle: 'Car',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 5,
    capacity: 4,
    descrioption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit. Quae, corrupti impedit nostrum cupiditate soluta pariatur incidunt maxime quos.',
};

// bus object
var busObject = {
    vahicle: 'Bus',
    imageUrl: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    farePerKilo: 2,
    capacity: 40,
    descrioption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit. Quae, corrupti impedit nostrum cupiditate soluta pariatur incidunt maxime quos.',
}

// bike object
var bikeObject = {
    vahicle: 'Bike',
    imageUrl: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlrZSUyMHJpZGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerKilo: 3,
    capacity: 2,
    descrioption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, impedit. Quae, corrupti impedit nostrum cupiditate soluta pariatur incidunt maxime quos.',
}

const servicesArray = [bikeObject, carObject, busObject];

// function
function displayServices (service){
    /**
     step-1: access the main section by id
     step-2: create a div element
     step-3: create innerHTML of the above div dynamically with service
     step-4: append the div to main section
     */
    const mainSection = document.getElementById('main-section');
    const stringified = JSON.stringify(service);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mt-3 mb-3 mx-auto" style="max-width: 800px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${service.imageUrl} class="img-fluid h-100 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Transport Mood ${service.vahicle}</h5>
              <p class="card-text">${service.descrioption}</p>
              <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo} </small><small class="text-muted ms-4">Capcity ${service.capacity} </small></p>
              <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='handleBooking(${stringified})'>
                    Book Now
                </button>
            </div>
          </div>
        </div>
      </div>
    `;
    mainSection.appendChild(div);

    // console.log(service);
}

function displayAllArticles (arr) {
  for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    displayServices(element);
  };
};

displayAllArticles(servicesArray);


// handle booking info
// it will have an object as parameter
function handleBooking(object){
  const stringified = JSON.stringify(object)

  var vahicle = 'Car';
  var id = vahicle + 'fare-input'; // Car fire price
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 20rem;">
      <img src=${object.imageUrl} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Vahicle Mood ${object.vahicle}</h5>
        <p class="card-text">${object.descrioption}</p>

        <p class="card-text"><small class="text-muted">Fare per kilo ${object.farePerKilo} </small><small class="text-muted ms-4">Capcity ${object.capacity} </small></p>
        <p>Fare: $<small class="text-muted" id="fare"><span>00</span></small></p>
        <p>Tax: $<small class="text-muted" id="tax"><span>00</span></small></p>
        <p>TotalCost: $<small class="text-muted" id="total-cost"><span>00</span></small></p>

        <div class="d-flex flex-column" role="search">
            <input id="distance-input" class="form-control m-2" type="" placeholder="koto kilo jaben?">
            <input id="quantity-input" class="form-control m-2" type="" placeholder="Koita gari lagbe?">
            <button id="submit-btn" class="btn btn-outline-success m-2" type="submit" onclick='calculateCost(${stringified})'>Submit</button>
        </div>
    </div>
  </div>
    `;
};


// calculate cost
function calculateCost(object){
  const distance = document.getElementById('distance-input').value;
  const quantity = document.getElementById('quantity-input').value;

  const fareDiv = document.getElementById('fare');
  fareDiv.innerHTML = distance * quantity * object.farePerKilo;
}

// search btn
document.getElementById('search-btn').addEventListener('click', function(){
  const value = document.getElementById('search-value').value;
  
  for ( let i = 0; i < servicesArray.length; i++){
    const element = servicesArray[i];
    if (value.toLowerCase() === element.vahicle.toLowerCase()){
      document.getElementById('main-section').innerHTML = '';
      displayServices(element);
      return;
    }
  }
  alert('Nothing found with your input')
});
