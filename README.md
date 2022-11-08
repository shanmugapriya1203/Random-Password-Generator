# Random-Password-Generator
 ![Uploading 2022-11-08.png…]()

1. Creating app structure with HTML
  1.  A box to show the generated password and a copy button to copy the password.
  2.  A number input box for taking input for the length of the password.
  3. 4 checkboxes for taking input whether to include number, symbol, uppercase, and lowercase in password or not
   4. A button to generate the password






2. Styling CSS

     Align the app to the center of the window screen using flexbox.
    Apply "display: flex;align-items: center;justify-content: center" on '.container' class to align app vertically and horizontally in center of the screen.


3.Script Function

   1.Naming a variables
 
  
   2.Copy Button work
       when we click a copy button it will store in google clipboard so we use(await navigator.clipboard.writeText(pass))function.. if the password input box is                 empty when we click copy button it alert there is no password copied in clipboard. We use navigator function so we include async and await

  3.Get a random Characters,Numbers and symbols by using Math.random() function
      when we give min and max value (min-max)+1 It will take a difference and add 1 Becuase For example we assign max value as 90 and min value as 65 difference is         25. But the alphabetic numbers are 26 so we add 1.
      This function is use as well small characters and numbers and symbols .. 
    
 Here  symbols take the elemnts from that we store in symbols.

   4. we store the value and elements in objects so we access it easily (element as well as fun)

   5.Main part of the function is 

    1. get the length of the from password length // line no 89
    2.create an empty variable that will store the password //line no 91
    3. Filter the elemnts that what are all the checkbox is checked .. It takes checked elemnts from the objects
    4.Looping is for increase the function till the length value
    5.Then it will generate random elemnts till the length as well as true as which are all the checkboxes are checked
    6.Then it will show in generated password
    



