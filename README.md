# Book Search Website
Find books easily by searching using ISBN, Name of Author or Book.
To discover books, other features include Random Book Generator and Exploring in the New Book Releases section. 

## Design Process
#### Insights about The Design Process
* Choice of Colors
  * Main colors are Black & White - Sleek Color (changed because it does not suit a book website)
  * Blue and Green - Colorful and lively like how reading can make people feel (final)

* Typography
  * Roboto 
  * Open sans 


#### Target Audience
People who are trying to find out more about a book. Also for people trying to explore books to read. 

## Features
#### Existing Features
* Book Search - allows user to get more information about a book, by having them fill out the search box.
* Read More - user is redirected to Google Books Site to get more information about a book.
* Random Book Generator - generates a random book. (doesnt work for now)


#### Features to Implement in the future
* Use API key so the results include user-specific information, such as purchased status. More personalized.
* Recommended Book - allows users to get recommendations related to books to what they have searched before.
* Specific Search - specifically by ISBN or Name of Author/book. 
* Specific Random Book generator - generate a book from chosen genre chosen by user.
* Explore books from a list of Genres - in the footer or/and nav bar.


## Technologies used
* HTML
  * The project uses HTML to create and structure sections, paragraphs, headings, links, and blockquotes for web pages and applications

* CSS
  * The project uses CSS to describe the presentation of the Web pages, including colors, layout, and fonts

* JQuery
  * Used for DOM manipulation.
  * Used for event handling.
  * Used for animation
  * Used for Ajax when working with google books api.

* Bootstrap
  * Ensure the website is responsive using Flexbox Grid.
  * Includes Navigation Bar Template.
  * Includes Button Template and search input box.
  * Includes Navigation Bar Template.
  
* Google Books API
  * The project uses Google Books API to search and access book content. 
  * Currently no API key is used.
  * No call limit. Performing a search does not require authentication, so you do not have to provide the Authorization HTTP header with the GET request. 
  
* Adobe XD
  * Used to create wireframe (found in network folder).
 
* Google Fonts
  * Roboto https://fonts.google.com/specimen/Roboto
  * Open Sans https://fonts.google.com/specimen/Open+Sans
 
* Postman
  * Used to test api calls.
  
 
 
## Testing
#### How the project looks and works on different browsers and screen sizes
* Firefox
Works okay.

* Chrome Window Resizer tool      
Works okay.

#### Bugs/Problems discovered during testing
* Search Form not in the middle. (found 2/1/21)
  * Added text-align at differed css tags (didnt work)
  * Added container class and added css property flex to fix it (__fixed__ 2/1/21) 
* Each page was not spaced enough. (found 3/1/21)
  * Added empty h1 tag (didnt work. weird)
  * Added br tag (__fixed__ 3/1/21)
 
* For width<400, the background is not filling up the whole page. (found 4/1/21)
  * I tried to switch bootstrap <div class="col-lg-12"> to <div class="col-xs-12"> (didnt work)
  * I tried to switch position of 2 classes. (didnt work)
 
* Icons do not work. (found 2/1/21)

* Api calls not working (found 2/1/21)
  * Api call successful (__fixed__ 11/1/2021)
 
* Api is not showing more than 1 result & it is showing the wrong result (found 11/1/1)
 
 
## Credits
#### Content
* Color combination inspiration from Design Wizard https://www.designwizard.com/blog/design-trends/colour-combination
* To get the api key, Privacy Policy and Terms & Conditions were generated using https://app.privacypolicies.com/

#### Media
* Photo in home page taken from Unsplash https://unsplash.com/photos/uEcSKKDB1pg

#### Acknoledgements
* Google
* Mr Andy for helping me debug
