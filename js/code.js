$.(function() {

            function EtsyClient(option) {
                this.etsy_url = "https://openapi.etsy.com/";
                this.api_version = option.api_version || "v2/";
                this.model = "listings/";
                this.filter = "active";
                this.js = ".js";
                this.api_key = "2s69xib2039fs6asqnkosxfo"; //Roberto's key
                this.complete_api_url = this.etsy_url + this.api_version;

            }

            APIMAIN.prototype.getRequest() {
                $.getJSON(complete_api_url + this.model + this.filter + 
                	this.js + "?" + "api_key=" + api_key + "&callback=?").
                then(function(data) {
                        console.log(data);
                    });
                }
                    // Etsy_Template = ._template(list, Object);
                    //$.(".)
            
                
});


        