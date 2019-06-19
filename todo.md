# Table of Contents
- [Table of Contents](#Table-of-Contents)
- [To Do](#To-Do)
  - [Overall Needs](#Overall-Needs)
    - [Front End](#Front-End)
    - [Back End](#Back-End)
    - [Permissions](#Permissions)
  - [User login](#User-login)
    - [Front End](#Front-End-1)
    - [Back End](#Back-End-1)
  - [Calendar](#Calendar)
    - [Front End](#Front-End-2)
    - [Back End](#Back-End-2)
  - [Ingredients](#Ingredients)
    - [Front End](#Front-End-3)
    - [Back End](#Back-End-3)
  - [Recipes](#Recipes)
    - [Front End](#Front-End-4)
    - [Back End](#Back-End-4)
  - [Shopping List](#Shopping-List)
    - [Front End](#Front-End-5)
    - [Back End](#Back-End-5)
  - [Profile Page](#Profile-Page)
    - [Front End](#Front-End-6)
    - [Back End](#Back-End-6)

# To Do
## Overall Needs
### Front End
  - [x] Remove Material UI
  - [x] Add Styled Components

### Back End
  - [ ] Implement edamam.com api ?maybe
  - [ ] Add Passport
  - [ ] Add Session/Cookie support
  - [ ] Add Oauth
  - [ ] Maybe use graphql and sequelize?

### Permissions
  - [ ] Add ingredient
  - [ ] Request new type

---
## User login
### Front End
  - [ ] Registration Form
  - [ ] Login Form
  - [ ] Form Validation
    - [ ] Registration Form
    - [ ] Login Form
  - [ ] Oauth login options

### Back End
  - [x] Create User table
    - [x] Columns: id, email, username, password\_hash, name, image, bio, city, birthdate, profile\_rules, note
      - Profile rules control what information is available publicly on profile page
  - [x] Create permissions table
    - [x] Columns: permission, user_id
  - [ ] Create register (POST) route to add new users to database
    - [ ] Hash Passwords with salt and pepper on objection model
  - [ ] Create auth (POST) route to allow users to login
    - [ ] Compare hashed password to login password
    - [ ] User login session via Oauth

---
## Calendar
### Front End
  - [x] CSS for 7 column responsive calendar
  - [ ] User can specify calendar start date
  - [ ] User can specify calendar range from options (1 week, 2 weeks, 1 month)
  - [ ] Import data from database for specified user based on calendar start date and range
  - [ ] Display data on calendar, changing based on size of range
    - [ ] Up to six rows of data (meals) for each day
    - [ ] One month will display truncated recipe names for each meal
    - [ ] One week and two week will display partial recipe for each meal
    - [ ] Icons on day title for exercise type if supplied
  - [ ] User can click a meal to see the full recipe for that meal
  - [ ] User can click a day to see/select new recipes and add exercise for that day
    - [ ] User can specify order the meals will be in on the day
    - [ ] User can specify exercises (max 4 per day)

### Back End
  - [ ] Create meal_calendar table
    - [ ] Columns: id, user\_id, date, recipe\_id, meal, note
  - [ ] Create exercise_calendar Table
    - [ ] Columns: id, user\_id, date, exercise\_id, note
  - [ ] Create calendar (POST) route to allow user to add an item to their calendar
    - [ ] Route recieves param that specifies if meal or exercise
  - [ ] Create calendar (GET) route to pull meal and exercise calendar data from database
    - [ ] Route will pull data from both tables and combine them into one object
  - [ ] Create calendar (DELETE) route to remove a calendar item based on id and type
    - [ ] Route recieves param that specifies if meal or exercise

---
## Ingredients
### Front End
  - [ ] User can filter ingredients list by search, product type, or tags
  - [ ] User can add new ingredients to the database if has permission
    - [ ] User must select product type (ie. vegetable, meat, fruit, etc)
      - [ ] User can request new type if has permission
    - [ ] User can add/vote on optional tags for ingredients (ie. gluten-free, mexican, etc)
  - [ ] User can click an ingredient to see its full information and edit/add to their inventory
    - [ ] User must select unit of measurement (ie. count, cup, oz, kg, etc)
      - [ ] Recommend unit of measurement based on type

### Back End
  - [x] Create type table
    - [x] Columns: id, name, created_by, flag (0:disabled, 1:active, 2:review)
  - [x] Create unit table
    - [x] Columns: id, name, metric, metric_conversion, created_by, flag (0:disabled, 1:active, 2:review)
  - [x] Create ingredient table
    - [x] Columns: id, name, type_id, default_unit_id,created_by
  - [x] Create user has ingredient table
    - [x] Columns: user_id, ingredient_id, unit_id, inventory
  - [ ] Create itype (GET) route that pulls list of ingredient types
  - [ ] Create itype (POST) route that adds a type to database
    - [ ] Type is flagged as 2:review by default and requires admin approval
  - [ ] Create ingredient (GET) route that pulls ingredients based on passed params
    - [ ] Params: letter, search, type, tags are search terms and will return id, name, type
    - [ ] Param: id will pull all data for specified ingredient including current user inventory and list of tags
  - [ ] Create ingredient (POST) route will do different things based on passed params
    - [ ] Param: id will add the item to the current user's inventory with specified amount or 0
      - [ ] If id is null add a new ingredient to the database
    - [ ] Param: tags adds tags to item

---
## Recipes
### Front End


### Back End


---
## Shopping List
### Front End
  - [ ] Handle unit of measurement mismatch on inventory vs recipe
    - [ ] Show ingredient
    - [ ] Show need vs inventory (ex. needed: 5oz, inventory: 2kg)

### Back End


---
## Profile Page
### Front End


### Back End
