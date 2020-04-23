# ecologize.css

## a sass boilerplate

This is my small sass boilerplate + html and php basefiles. I use this to have my sass foundation quick in use and i use this for rapid static website development.

You can use the compiled sass as a cdn:

https://rawcdn.githack.com/eversthomas/ecologize/68370f463545e232513931bf4a3894eaca2127e0/dist/style.css

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

## html and php structure

## thanks

https://github.com/HugoGiraudel/sass-boilerplate

https://necolas.github.io/normalize.css/

https://html5boilerplate.com/
