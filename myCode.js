/* global variable */
var results = [];



window.onload = init;

function init() {

    $("#showBio").css("display", "none");

}
function callJSON(artistName) {
    $.ajax({
        type: "get",
        url: "violinistsInfo.json",
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#showBio").html("");
            $("#showBio").css("display", "none");
            $.each(data, function(i, val) {
                if (val.Name === artistName) {
                        results.push(val);
                        $("#showBio").css("display", "block");
                        $("#showBio").html(val.Name + "<br><br>" 
                        + "<strong>Born:</strong> " + val.Born + "<br>" 
                        + "<strong>Died:</strong> " + val.Died + "<br>" 
                        + "<strong>About:</strong> " + val.About + "<br>");
                    
                }
            });
        }
    });
    console.log(results);
}
    

function showBio(bioID) {
    
    
  // If the about button is clicked, display the output text 
  
    if (bioID === "heifetzInfo" ) {
        callJSON("Jascha Heifetz");
    }
    if (bioID === "oistrakhInfo" ) {
        callJSON("David Oistrakh");
    }
    if (bioID === "ricciInfo" ) {
        callJSON("Ruggiero Ricci");
    }
    if (bioID === "sternInfo" ) {
        callJSON("Isaac Stern");
    }
    if (bioID === "perlmanInfo" ) {
        callJSON("Itzhak Perlman");
    }
    if (bioID === "mutterInfo" ) {
        callJSON("Anne-Sophie Mutter");
    }
    if (bioID === "hahnInfo" ) {
        callJSON("Hilary Hahn");
    }
    if (bioID === "stirlingInfo" ) {
        callJSON("Lindsey Stirling");
    }
    if (bioID === "jangInfo" ) {
        callJSON("Daniel Jang");
    }

}





