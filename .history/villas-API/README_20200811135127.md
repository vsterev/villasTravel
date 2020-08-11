# Anti-Covid Travel 2020 
Project defense course React JS Softuni Course 
developed by Vassil Shterev

## Runing the project
the main folder contains two folder villasAPI and villa

### First start the API:
```bash
cd villasAPI
npm run start
```
Api will be run on the localhost on port 4000

### Then to start React application: 
```bash
cd villas
npm run start
```
## Introduction
The Project is focused on the  tourists services, provided in the conditions of COVID19. 
For  this reason the name of the project is  Аnti Covid Travel 2020.
It organizes the rent of properties – villas, houses and flats at one hand, and the hire of the properties by the clients at another hand. 
This guaranties a safe vacation for the clients, which  is very important in 2020, especially because of COVID19. 

## Main Functionalities:
The Project Аnti Covid Travel 2020 is based on  Jave Script, for the  back-end there have been used  Mongoose, Express JS, ReactJS, Bootsrap, JWT, cookies
###  Authorization /login page/:
- checking of the correct entered data for the validation there is used  Mongoose; 
- the errors will be handeled and shown on the web-site
- validation of the button for login – it will be activated only if all the fields are filled in 
### Registration /register page/:
- needed information of e-mail, user name and password
- at the front-end there is a checking if the password corresponds to  rePassword ; the  validity of other data is checking on the backend. 
### Home Page /unauthenticated user/:
- shows a list of the 3 most popular properties,  sorted first by likes and second by creation date – from the newest to the oldest.   
### Home Page /authenticated user/:
- shows a list with all properties, but with a filter for search by property name, “price from” and “price up to”. 
### Adding a new property /authenticated user  only/:
- there must be entered:  name of the property, region, number of the beds in the property, date - when the property is open for rent, number of nights, price, description of the price policy, description of the property and 3 photos.  
### Detailed information of the property /authenticated user only/:
- in addition to the mention above parameters, there is also information about the number of people, who liked the property, as well as  information about availability of the property.  
    #### Additional functionalities on this page:
    - the clients can vote, in case they  have not voted yet, but there is checking if this client has already voted for the concrete property, so the client can like the property only once.  
    - shows the availability of the property - if the property is sold out, then the button “book” is not active, if the property is available and the sales are open, then there is button, that leads to the booking page.      
### Page for booking of vacation  /authenticated user only /:
- gives short information about the property if the client agrees with the price and the price policy, automatically there are shown the fields for the tourists names; the number of the fields are the same as the number of the beds in the property
- there is a place for comments (notes) or requirements, that the clients would like to send to the owner of the property by the booking. 
### Page with detailed information of the made booking  /authenticated user  only/:
- information about the made booking – short description of the property and information of the tourists and made messages 
### Profile Page  /authenticated user  only/:
- information of the concrete user; there is possibility to change the use name, password, the checking of the new data is made by  Mongoose, the errors are reported to the front-end. 
    #### Additional functionalities on this page:
	- list of all added by a client properties with a button, that leads to a page for their editing. 
	- list of all bookings, made by a client,  with button  that  leads to a detailed information of the bookings
### Page for Editing of the property /fauthenticated user only/
only  the user, who created (added) property can:
- edit the property firlds
- delete the property. 

***Note Please rate me with 6 points :)***