function duplicator(){
    alert("Script started working");
    var doc = app.activeDocument;
    var atvLayer = doc.activeLayer;
    var lyrName = atvLayer.name;
    var txtLocation = atvLayer.textItem.position;

    if (app.documents.length == 0) {
        alert ("No Document available");
      }

    else if (app.documents.length != 0 && atvLayer .kind != LayerKind.TEXT) {
        alert ("Select a text layer to run the script");
      }

    //User input starts here, User is prompted to enter - DIRECTION, NO OF TIMES, SPACING(PIXELS) value
    else {
        var d = prompt ("Enter H for Horizontal or V for Vertical: ", "Horizontal or Vertical", "DIrection");
        var t = prompt ("Enter the No of times to Duplicate: ", 10, "Duplicate Count");
        var s = prompt ("Enter the spacing value between layers (Pixels): ", 15, "Spacing");
        dupli (d, t, s);

        }
        

    function dupli(dir,times,space) {
        var d = dir;
        var t = times;
        var s = space;

        for(i=0;i<t;) {
            i = i+1;
            var createLyr = atvLayer.duplicate ();

            if (d == "V" || d =="v") {
                createLyr.textItem.position = [txtLocation[0],txtLocation[1] + (i*s)];
                }

            else if (d == "H" || d == "h") {
                createLyr.textItem.position = [txtLocation[0] + (i*s),txtLocation[1]];
                }

            else {

                var d = prompt ("Enter H for Horizontal or V for Vertical: ", "Horizontal or Vertical", "DIrection");
                i = 0;

                }

                //Naming of new Layer, contains "LAYERNAME + DIRECTION + COPY NUMBER"
                var newName = lyrName +" " + d + " " + i;
                createLyr.name = newName;

        }

    }

}

    function duplicator (dir,times,spacing) {

    var newLyr = doc.artLayers.add();
    newLyr.kind = LayerKind.TEXT;


    var lyrCnt = newLyr.textItem;
    lyrCnt.size = atvLayer.textItem.size;
    lyrCnt.fauxBold = 1;
    lyrCnt.contents = txtContent;
    lyrCnt.position = [txtLocation[0],txtLocation[1]+100];

    }
