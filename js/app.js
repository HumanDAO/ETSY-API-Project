window.onload = app;

function app() {
	function clearPanel(){
        // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
    }
    
    Path.map("#/users").to(function(){
        document.querySelector('.container').innterText = "Users!"
    });
    
    Path.map("#/comments").to(function(){
        alert("Comments!");
    }).enter(clearPanel);
    
    Path.map("#/posts").to(function(){
        alert("Posts!");
    }).enter(clearPanel);
    
    Path.root("#/posts");
    
    Path.listen();
}
	