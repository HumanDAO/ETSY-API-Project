$(function() {
    var Listings = new EtsyClient();
    Listings.ActiveListings_Request();
});

function EtsyClient(option) {
    this.etsy_api_request = "https://openapi.etsy.com/v2/";

    ///// -------------- possibly not needed?
    // this.version = "v2/";
    // this.model = "listings/";
    // this.filter = "active";
    // this.js = ".js";
    // this.user = option.userID;
    ///// -------------- 
    this.api_key = "2s69xib2039fs6asqnkosxfo"; //Roberto's key
}

EtsyClient.prototype.ActiveListings_Request = function() {
    var model = "listings/";
    var filter = "active/";
    var json = $.getJSON(this.etsy_api_request + model + filter + ".js?api_key=" + this.api_key + "&callback=?");
    var listingsTemplate = $.get('/templates/listings.tmpl');
    
    return $.when(json, listingsTemplate).then(function(data_result, tmpl_result) {
        console.log(data_result, tmpl_result);

        var data = data_result[0];
        var tmpl_text = tmpl_result[0];
        var templateFn = _.template(tmpl_text);
        var html_to_put_in_DOM = templateFn(data);

        $('html').append(html_to_put_in_DOM);

    });
}

EtsyClient.prototype.IndividualListing_Request = function(id) {
    var model = "listings/";
    return $.getJSON(this.etsy_api_request + model + id + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);

    });
}

EtsyClient.prototype.UserID_Request = function() {
    var model = "users/";
    // var user_ID = "45265550";
    return $.getJSON(this.etsy_api_request + model + this.user_ID + "/" + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}


//     function Sliding (){
//             $('#right').addEventListener('Click', SlidePicR);
//             $('#left').addEventListener('CLick', SlidePicL);
//         }
