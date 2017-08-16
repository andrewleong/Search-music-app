//#1 search for the artist in input, listen for input value
//#2 make a call to the database API
//#3 make a fetch data request from the database

(function musicDB(){
  this.init = function () {
      this.search();
  };

  this.search = function() {
      //The first thing is go to the form and get the form input value event.

      //select the form
      var form = document.querySelector("#form");
      //add the submit event listener
      form.addEventListener("submit", function(event){
        //prevents default page from refreshing
        event.preventDefault();
        //select the input's value
        var value = document.querySelector("#input_search").value;
        //reset the form to clear the input users type in
        form.reset();

        //2nd thing is to call the database API
        //grab the value variable
        //the value needs to be concat with a +, since spaces is bad like Avril Lavigne
        //need it to be like Avril+Lavigne
        getData(value.split(' ').join("+"));

      });
  };

  this.getData = function(artistVal) {
      var http = new XMLHttpRequest();
      //entity is what we are looking for in the artist, in this case is album
      var url = "https://itunes.apple.com/search?term="+ artistVal +"&entity=album";
      var method = "GET";

      //grabbing the container of display album
      var container = document.querySelector("album_list_container");
      //clear the container because what if user enters other values?
      container.innerHTML = "";

      http.open(method, url);
      http.onreadystatechange = function() {
          if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
              //do something if ok
              var json = JSON.parse(http.response)
              //call show artist function
              showArtist(json);
          }
          else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
              //failed
          }
      };

      http.send();
  };

  this.showArtist(jsonObj) {
      var container = document.querySelector("album_list_container");
      //template for building the album list
      var template = "";
  };

  this.init();
})();
