# ecologize.css

## a sass boilerplate

This is my small sass boilerplate + html and php basefiles. I use this to have my sass foundation quick in use and i use this for rapid static website development.

## how to use

Download or clone this repo: npm install (gulpfile.js) - you know this!

## sass structure

    sass/
    ├── abstracts/     
    │   ├── _mixins.scss         # Sass Mixins
    │   └── _variables.scss      # Sass Variables
    │   
    ├── base/          
    │   ├── _ecologize.scss      # normalizer
    │   └── _typo.scss     # Typography rules
    │       
    ├── components/              
    │   ├── _blockquote.scss    # Blockquotes
    |   ├── _helpers.scss       # Helpers
    │   └── _button.scss        # Buttons
    │       
    ├── layout/        
    │   ├── _footer.scss         # Footer layout      
    │   ├── _header.scss         # Header layout
    │   ├── _main.scss           # Main layout   
    │   ├── _navigation.scss     # Navigation layout
    │   └── _sidebar.scss        # Sidebar layout
    │       
    ├── pages/    
    │   └──                      # empty
    │       
    ├── shame/
    │   └── _shame.scss          # hacks
    │       
    ├── vendors/
    │   └──                      # empty
    │       
    └── style.scss               # Main Sass file
