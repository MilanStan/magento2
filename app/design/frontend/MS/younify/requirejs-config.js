var config = {
   paths: {
	   'slick':"js/slick.min",
	   /*'homeinit':"js/home-init"*/
   },

  // When load 'requirejs' always load the following files also
  /*deps: [
    "js/init"
  ],*/

  shim: {
		/*'homeinit':{
			'deps': ['slick']
		},*/
		/*ako bi sledeći red zakomentarisali prvo bi se pozvala skripta 3 pa 4 i 5 a ovako sa ovim idu prvo 4 i 5 pa 3*/
		'slick':{
			'deps': ['jquery']
		}
	}

};