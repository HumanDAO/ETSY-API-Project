$(function() {

    function EtsyClient(option) {
        this.etsy_api_request = "https://openapi.etsy.com/v2/";
        // this.version = "v2/";
        // this.model = "listings/";
        // this.filter = "active";
        // this.js = ".js";
        this.user = option.userID;
        this.api_key = "2s69xib2039fs6asqnkosxfo"; //Roberto's key
    }

    EtsyClient.prototype.ActiveListing_Request = function(){
    	var model = "listings/";
    	var filter = "active/";
        var Etsy_Object = $.getJSON(this.etsy_api_request + model + filter + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
            console.log(data);
    
        var Fill_HTML = $('#listing').textContent;
        var Fill_Template = _.template(9, Etsy_Object[id]);
        
        .then(function(data) {$('#listing').append(Fill_Template(data));
        // .then(Sliding());
            });
        }

    });
    }
   
    
    EtsyClient.prototype.IndividualListing_Request = function(id) {
    	var model = "listings/";
    	return $.getJSON(this.etsy_api_request + model + id + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        	console.log(data);

    });
	}

	EtsyClient.prototype.UserID_Request = function() {
		var model ="users/";
		// var user_ID = "45265550";
    	return $.getJSON(this.etsy_api_request + model + this.user_ID + "/" + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        	console.log(data);
    });
	}
	
	var Listings = new EtsyClient();
	Listings.ActiveListings_Request();
 




//     function Sliding (){
//             $('#right').addEventListener('Click', SlidePicR);
//             $('#left').addEventListener('CLick', SlidePicL);
//         }


});