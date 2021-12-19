# client

 story

 **Location Page**
 I entered the site with two options and on the left a motion picture. The right side contains a new account or login.
 
 **home page**
 The Hum page has Nav Bar and in the middle of the page on the left are news related to hospital and human health.
Nav Bar has the wax in the middle, the right side the medical file option, and the left side the choice of who we are and who we are.

**Access to medical file**
A doctor can spend medication and write reports with your medical file, and he can modify your file. With the possibility of modification from another doctor
 **Show Names From Not on File**
 If your medical file is modified, the name of the change will appear with the time and time that the change was made.
 
 **logged out**
 Login out at the end of your tour inside the site, and after you've been briefed on the entire medical record, you can log out to keep your information private.
 
 
 ## User Stories
 
 - **The user must have an account and be logged in if he wants to use the website features**
 - **The logged-in user can book an appointment and see the medical file**
 - **The user can log in on the website, book an appointment, request a private buyer and other medical services.**
 - **A registered user can browse the web site without having to modify only for reading and viewing**
 - **The user who logged in has their own file plate containing all their information and statistics.**
 - **The  `admines` the login with the role has all the features of the regular user. Possible modification of patient information**
 - **The user who logged in with the role can delete or modify with the time of modification and the `admin` name.**
 - **The user has a login and has the role of a control board that contains all the information and statistics of the web site that enable them to control all    patients.**
 
 ## user profile:

- **See my profile**
- **See the exit point**
 - **Look at the state of health**
- **Set an appointment**

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | homePage           | public `<Route>`           | Home page                                                    |
| `/signup`        | SignupPage           |anon only `<AnonRoute>`     |Registration form, after activating the account, go to the login page |
| `/login`         | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/filemedical`     | medical file page   | user only `<PrivateRoute>` | Shows all exit points in a list                              |
| `/activated` | Verify that the account is active or not   | user only `<PrivateRoute>` | Confirm activation to enter the site to save rights                                         |
| `/restpassword` | To set the password | user only `<PrivateRoute>` | If the password is forgotten, it will be set from restpassword                             |
| `/forget` | Forget password page                  | user only `<PrivateRoute>` | If the password is forgotten, it will be set again after sending a link                                           
## Components

- LoginPage
- homePage
- ProfilePage
- SignupPage
- filemedicalPage
- activatedPage
- restpasswordPage
- forgetPage
- Navbar


## UML
![UML Diagram](https://user-images.githubusercontent.com/92247967/146677090-5669ac00-9a45-4b94-9101-1b53f1111f20.png)


## wirframes


**SING UP**
 *![sing up](https://user-images.githubusercontent.com/92247967/146677173-30c2e60a-502b-4c10-a014-9b2edb3bdb02.png)
 
 **SING IN**
 ![login](https://user-images.githubusercontent.com/92247967/146677194-4b52217e-b28d-42f3-97a4-5b83b0378cd0.png)
**HOME**
![home](https://user-images.githubusercontent.com/92247967/146677210-627b2d80-67d2-4ea5-ae08-7ac0845ce68a.png)

**MEDIECL FILE**

![mediecl file](https://user-images.githubusercontent.com/92247967/146677238-beefb62b-c626-43f8-9c25-66c6f41b2649.png)





