var simplemaps_countrymap_mapdata  = {
  main_settings: {
   //General settings
    width: "400", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "no",
    border_color: "rgb(204, 204, 204)",
    
    //State defaults
    state_description: "State description",
    state_color: "rgb(247, 247, 247)",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 3,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific,
  locations: {},
  labels: {},
  legend: {
    entries: [
      {
        name: "0",
        color: "rgb(247, 247, 247)",
        type: "location",
        shape: "square",
        ids: ""
      },
      {
        name: "1-5",
        color: "rgb(197, 197, 115)",
        type: "location",
        shape: "square",
        ids: ""
      },
      {
        name: "6-10",
        color: "rgb(255, 156, 7)",
        type: "location",
        shape: "square",
        ids: ""
      },
      {
        name: "11-20",
        color: "rgb(255, 121, 7)",
        type: "location",
        shape: "square",
        ids: ""
      },
      {
        name: "21-50",
        color: "rgb(224, 28, 28)",
        type: "location",
        shape: "square",
        ids: ""
      },
      {
        name: ">50",
        color: "rgb(247, 2, 2)",
        type: "location",
        shape: "square",
        ids: ""
      }
    ]
  },
  regions: {}
};

async function ok(){
  await main();
  for (const property in state_specific) {
    if(state_specific[property].description){
    }else{
      state_specific[property].inactive = "no";
    }
}
  simplemaps_countrymap_mapdata.state_specific = state_specific;
  simplemaps_countrymap.refresh()
}

ok()
let windo=window.innerWidth;
function resizeMap(){
  if(windo < 740 ){
    simplemaps_countrymap_mapdata.main_settings.width=300;
    
  } else {
    simplemaps_countrymap_mapdata.main_settings.width=500;
   
  }
}
resizeMap();  


