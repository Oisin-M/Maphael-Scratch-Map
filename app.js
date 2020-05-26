var getTooltip = function(elem) {
    // Show element ID
    console.log(elem);
    return $(elem.node).attr("data-id");
};
//need to add custom data and legend to go anywhere further. get country list from world_countries_miller
//just make visited 0 or 1 and follow the legend tutorials
$(function () {
  $(".mapcontainer").mapael({
      map: {
          name: "world_countries_miller",
          zoom: {
              enabled: true
          },
          defaultArea: {
              attrs: {
                  fill: "#5ba4ff",
                  stroke: "#99c7ff",
                  cursor: "pointer"
              },
              tooltip: {
                  content: getTooltip
              },
              attrsHover: {
                  animDuration: 0
              },
              text: {
                  attrs: {
                      cursor: "pointer",
                      "font-size": 10,
                      fill: "#000"
                  },
                  attrsHover: {
                      animDuration: 0
                  }
              },
              eventHandlers: {
                  click: function (e, id, mapElem, textElem) {
                      var newData = {
                          'areas': {}
                      };
                      if (mapElem.originalAttrs.fill == "#5ba4ff") {
                          console.log("click");
                          newData.areas[id] = {
                              attrs: {
                                  fill: "#0088db"
                              }
                          };
                      } else {
                          console.log("unclick");
                          newData.areas[id] = {
                              attrs: {
                                  fill: "#5ba4ff"
                              }
                          };
                      }
                      $(".mapcontainer").trigger('update', [{mapOptions: newData}]);
                  }
              }
          }
      }
  });
});
