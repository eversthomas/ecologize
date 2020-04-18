<?php

  // site informations
  $config = [
    'title'       =>  'ecologize boiler',
    'description' =>  'a php and sass boiler plate',
    'meta'        =>  'sass, website, boilerplate, php, functions, config, kamp-lintfort'
  ];

  function siteTitle($config) {
    echo $config['title'];
  };
  function siteDescrpt($config) {
      echo $config['description'];
  };
  function siteMeta($config) {
      echo $config['meta'];
  };

  // main menu
  $menu = [
    'home'        =>  '<a href="/">home</a>',
    'services'    =>  '<a href="/">services</a>',
    'about'       =>  '<a href="/">about</a>',
    'contact'     =>  '<a href="/">contact</a>',
    'legal'       =>  '<a href="/">legal</a>'
  ];


  function mainMenu($menu) {
      echo '<ul>';
        foreach($menu AS $item => $link) {
        echo "<li>" . "$link" . "</li>";
        }
      echo '</ul>';
  };

 ?>
