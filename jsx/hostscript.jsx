/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

function sayHello(spc,cnt,drtn,grp){
  
  try
  {
    var doc=app.activeDocument;
  }
  catch(e)
  {
    alert("Open a Document and select a layer!");
  }
  
//Collecting Active layer details.
    var atvLayer = doc.activeLayer;
    var lyrName = atvLayer.name;

  if (atvLayer.isBackgroundLayer) {
    alert("Selected layer is a Background. Unlock to Continue!")
  }
  
  else if (atvLayer.positionLocked) {
    alert("Layer " + lyrName + " is Locked! Unlock to Continue")
  }
  
  else {
    
    if (grp) {
      
      var createGroup = doc.layerSets.add();
      var grpName = lyrName + "_" + cnt;
      
      createGroup.name = grpName;
      
      var parentGrp = doc.layerSets.getByName(grpName);
      var dummyGrp = parentGrp.layerSets.add();
      dummyGrp.name = "dummy";
      
      atvLayer.move(dummyGrp,ElementPlacement.PLACEBEFORE)
      dummyGrp.remove();
    }
  
  dupli (drtn, cnt, spc);

    function dupli(dir,times,space) {
        var d = dir;
        var t = times;
        var s = space;

        for(i=0;i<t;) {
            i = i+1;
            var createLyr = atvLayer.duplicate ();

            if (d == 1) {
                createLyr.translate(new UnitValue(0, "px"), new UnitValue((i*s), "px"));
                }

            else if (d == 2) {
                createLyr.translate(new UnitValue((i*s), "px"), new UnitValue(0, "px"));
                }

            else {
                var d = prompt ("An else I cant remove, so having it here");
                i = 0;
                }

                //Naming of new Layer, contains "LAYERNAME + DIRECTION + COPY NUMBER"
                var newName = lyrName +" " + d + " " + i;
                createLyr.name = newName;

          }

      }
  }

}
