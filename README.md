 Application purpose:

The application allows a customer to make a booking at a Bed and Breakfast holiday house. A customer can make a booking by first creating a user account. Once the account is created the customer can make a booking and leave an optional review about the facility. A user with administrator privileges can view, edit, or delete bookings.

My personal objective in creating application:

Vue JS was not part of the diploma I completed. I created this application to learn Vue and integrate my knowledge of JavaScript, CSS, and HTML. 

Application layout:

The vue-project/src/views/homeView.vue file dictates the layout of the application. It uses CSS grid to position all the imported component. CSS media queries implement the responsiveness for various screen sizes. All the component files imported into homeView.vue from vue-project/src/components have descriptive names. Their names identify their function. As an example, Booking.vue handles customer booking functionality.

Components:

from vue-project/src/components/ directory

NavBar.vue 

Navigational bar. It handles sign in status. It displays if user is logged and displays CRUD button if administrator is logged in. It uses Vuelidate for validating user input and bootstrap modals for signing in/out. 

Booking.vue

Handles the booking dates, costs, and customers details. V-calendar reads from database and only displays available dates. The ‘make a reservation’ button conditional changes color based on user login status and ensures that all information is entered before a booking can be placed. Red when no user is logged in, orange when user is logged in but either no dates or guest quantity is selected and green when dates and guest quantity selected. User can then proceed with entering their personal details and submit the booking. Vuelidate validates inputs before submitting to data base. Bootstrap modal used as form.

PictureModal.vue 

Displays images. It uses CSS grid for positioning images and bootstrap modal for ‘see more images ‘.
About.vue and ThingToKnow.vue displays 
static data and includes basic fontawesome icons.

Weather.vue

Reads from open weather api using axios. It displays basic live weather details for area. 

MapsGoogle.vue

Embeds google maps api.
SurroundingArea.vue

Has basic html <a href=” ”> links to various random websites

Review.vue
reads and displays user review information from database. Users submit their reviews from vue-project/src/views/UserAccount.vue 

CRUD
	
project/src/views/…... CustomerDetails.vue, EditBooking.vue and IndividualCustomerDetails.vue incorporates read, update, and delete functionality using firebase. Firebase also hosts the application.

Router
	
Index.js handles application routing and includes function to stop unauthorized user from accessing CustomerDetails.vue page. 
