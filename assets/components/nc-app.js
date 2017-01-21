'use strict'
// <nc-app></nc-app>
document.registerElement ('nc-app', class NcApp extends HTMLElement {
  createdCallback () {
    document.head.dom ('style').html (`
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      html {
        background: url("images/background.jpeg") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        backgrund-size: cover;
      }
      nc-app {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0;
        padding: 0;
        vertical-align: middle;
        overflow: hidden;
      }
    `)
    // shadow root has fa and twbs
    let shadow = this.createShadowRoot ();
    shadow.dom ('style').html (`
      @import url("/twbs/bootstrap.css");
      @import url("/fa/font-awesome.css");
      @import url("/css/nc-app.css");
      @import url('https://fonts.googleapis.com/css?family=Raleway');
      * {
        font-family: 'Raleway', sans-serif;
      }
    `);
    // logo is norman's name
    let logo = shadow.dom ('div').prop ('id', 'logo').html ('Norman Claros Photography');
  }
});