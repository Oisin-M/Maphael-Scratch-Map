var getTooltip = function(elem) {
    // Show element ID
    console.log(elem);
    return $(elem.node).attr("data-id");
};

countries="FO,UM,US,JP,SC,IN,FR,FM,CN,PT,SW,SH,BR,KI,PH,MX,ES,BU,MV,SP,GB,GR,AS,DK,GL,GU,MP,PR,VI,CA,ST,CV,DM,NL,JM,WS,OM,VC,TR,BD,LC,NR,NO,KN,BH,TO,FI,ID,MU,SE,TT,MY,PA,PW,TV,MH,CL,TH,GD,EE,AG,TW,BB,IT,MT,VU,SG,CY,LK,KM,FJ,RU,VA,SM,KZ,AZ,TJ,LS,UZ,MA,CO,TL,TZ,AR,SA,PK,YE,AE,KE,PE,DO,HT,PG,AO,KH,VN,MZ,CR,BJ,NG,IR,SV,SL,GW,HR,BZ,ZA,CF,SD,CD,KW,DE,BE,IE,KP,KR,GY,HN,MM,GA,GQ,NI,LV,UG,MW,AM,SX,TM,ZM,NC,MR,DZ,LT,ET,ER,GH,SI,GT,BA,JO,SY,MC,AL,UY,CNM,MN,RW,SO,BO,CM,CG,EH,RS,ME,TG,LA,AF,UA,SK,JK,BG,QA,LI,AT,SZ,HU,RO,NE,LU,AD,CI,LR,BN,IQ,GE,GM,CH,TD,KV,LB,DJ,BI,SR,IL,ML,SN,GN,ZW,PL,MK,PY,BY,CZ,BF,NA,LY,TN,BT,MD,SS,BW,BS,NZ,CU,EC,AU,VE,SB,MG,IS,EG,KG,NP";


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
