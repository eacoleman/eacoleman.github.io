window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function onWindowResize() {
  // whole window: center vertically
  //$(".eac-content-container").css('top', ($("#eac-body").height()/2 
  //                                         + $("#eac-nav").height()
  //                                         - $(".eac-content-container").height()/2)
  //                                         + 'px');


  if(window.mobileCheck()) {
    $("#eac-nav").height('7%');
    $("#eac-nav .eac-name-container p").css("font-size", ($("#eac-nav").height()*0.5) + 'px');
    $("#eac-nav .eac-name-container p").css("top", '-40%');
    $("#eac-nav .eac-name-container p#slash").css("font-size", ($("#eac-nav").height()*2) + 'px');
    $("#eac-nav .eac-name-container p#slash").css("top", -($("#eac-nav").height()*0.5) + 'px');

    $("#eac-body .eac-content-container").css("font-size",'40px');
    $("#eac-body .eac-content-container .eac-header").height('30%');
    $(".eac-content-container").css("top",$("#eac-nav").height() + 'px');

    $(".eac-header h1").css("color",'transparent');
    $(".eac-header h3").css("color",'transparent');
  };

  // home tab: make sure the body padding centers the text properly
  $("#HOME.eac-content .eac-content-container").css("top",$("#eac-nav").height() + 'px');
  $("#HOME.eac-content .eac-content-body").height(($("#HOME.eac-content").height() - $("#HOME.eac-content .eac-header").height() - 
                                          $("#eac-nav").height() - 40) + 'px');

  $("#eac-body .eac-content-container").height( ($("#eac-body").height() - $("#eac-nav").height()) + 'px');
  $("#eac-body .eac-content-container").width( ($("#eac-body").width()) + 'px');
  $("#eac-body .eac-content-container .eac-content-body").width( ($("#eac-body .eac-content-container").width() - 60) + 'px');
  $("#eac-body .eac-content-container .eac-content-body").height( ($("#eac-body .eac-content-container").height() - $("#eac-body .eac-content-container .eac-header").height() - 41) + 'px');


  // work tab: "under construction" line should be centered
  //$("#WORK.eac-content > span").css('top', ($("#WORK.eac-content").height()/2 - 26) + 'px');

  //contact tab: contact info should be centered
  //$("#CONTACT.eac-content .eac-sidebar").css('top', 
  //                                             ($("#CONTACT.eac-content").height()/2 - 150) 
  //                                                + 'px');
}

function addWork(title, imageSrc, url) {
  // i'm lazy, add in a work div for me
  $("#WORK.eac-content").append('<div name="'+title+'" class="eac-work" '
                                  + 'style="background-image: url('+imageSrc+')">'
                                  + '<span>'+title+'</span></div>');

  // open url on click
  $("#WORK.eac-content div.eac-work[name='"+title+"']").click(function() {
    window.open(url);
  });
}

function addWorkFolder(title, imageSrc, json) {
  // i'm lazy, add in a work div for me
  $("#WORK.eac-content").append('<div name="'+title+'" class="eac-work" '
                                  + 'style="background-image: url('+imageSrc+')">'
                                  + '<span>'+title+'</span></div>'
                                  + '<div name="'+title+'" class="eac-work-folder"></div>');

  // open url on click
  $("#WORK.eac-content div.eac-work[name='"+title+"']").click(function() {
    thisIsOpen = $("#WORK.eac-content div.eac-work-folder[name='"+title+"']");
    thisIsOpen = thisIsOpen.css("display") == "block";

    blurs= thisIsOpen ? null : $("#WORK.eac-content > div.eac-work[name!='"+title+"']");
    
    $("#WORK.eac-content > div.eac-work").animate({
      opacity: 1
    },{
      duration: 50,
      queue: false,
      easing: "easeOutQuad"
    });

    if(blurs) {
      blurs.animate({
        opacity: 0.6
      },{
        duration: 50,
        queue: false,
        easing: "easeOutQuad"
      });
    }

/*
    blurs=$("#WORK.eac-content > div.eac-work[name!='"+title+"']").filter(function(){
      work=$("#WORK.eac-content > div.eac-work-folder[name='"+$(this).attr("name")+"']")
      if(work == null || work.length==0) return true;
      else if(work.css("display")=="block") return false;
      else return true;
    });

    unblurs=$("#WORK.eac-content > div.eac-work[name!='"+title+"']").filter(function(){
      work=$("#WORK.eac-content > div.eac-work-folder[name='"+$(this).attr("name")+"']")
      if(work == null || work.length==0) return false;
      else if(work.css("display")=="block") return true;
      else return false;
    });

    if(thisIsOpen && unblurs.length<=1) { 
      unblurs.add(this).add(blurs); 
      blurs=null;
    } else if(thisIsOpen && unblurs.length>1){
      blurs.add(this);
    } else if(!thisIsOpen) {
      unblurs.add(this);
    }

    if(blurs) {
      blurs.animate({
        opacity: 0.6
      },{
        duration: 50,
        queue: false,
        easing: "easeOutQuad"
      }).addClass("blurred");
    }

    unblurs.animate({
      opacity: 1
    },{
      duration: 50,
      queue: false,
      easing: "easeOutQuad"
    }).removeClass("blurred");
*/
  
    $("#WORK > .eac-work-folder[name!='"+title+"']").slideUp({
      duration: 250,
      queue: false,
      easing: "easeOutQuad"
    });  

    $("#WORK > .eac-work-folder[name='"+title+"']").slideToggle({
      duration: 500,
      queue: false,
      easing: "easeOutQuad"
    });

  });
  
  $("#WORK > .eac-work-folder").each(function(i,thing){
    modIndex 
      = $("#WORK > .eac-work,.eac-work-folder[name='"+$(thing).attr("name")+
            "']").index($("#WORK .eac-work-folder[name='"+
            $(thing).attr("name")+"']"));
    modIndex = Math.ceil(modIndex/5) *5 - 1;


    $(thing).insertAfter($("#WORK > .eac-work").eq(modIndex));
  });

  jQuery.each(json, function(i,val) {
    $("#WORK.eac-content .eac-work-folder[name='"+title+"']").append(
                                '<div name="'+i+'" class="eac-work" '
                                    + 'style="background-image: url('+val[0]+')">'
                                    + '<span>'+i+'</span></div>');
    $("#WORK.eac-content .eac-work-folder[name='"+title+"'] "
      + "div.eac-work[name='"+i+"']").click(
        function() {
          window.open(val[1]);
        }
    );

  });
}

function navComplete() { 
  // change the navigation when a button is clicked
  $(".eac-nav-button").click(function() {
    if(!$(this).hasClass('selected')) {
      var name = $(this).children().html();
      $(this).dequeue();
      $(".eac-nav-button.selected").removeClass('selected');
      $(this).addClass('selected');

      $(".eac-nav-helper").animate({
        width: $(".eac-nav-button.selected").children('span').width() + 9,
        marginLeft: "-=" + ($(".eac-nav-helper").offset().left 
                             - $(".eac-nav-button.selected").children('span').offset().left 
                             - 6)
      }, {
        duration: 500,
        queue: false,
        easing: "easeOutQuad"
      });

      $(".eac-content").animate({
        opacity: 0
      }, {
        duration: 500,
        start: function() {  },
        queue: false,
        complete: function() { $(".eac-content").not("[id='"
                                                     +name
                                                     +"']").css('z-index',0);
                               $(".eac-content[id='"
                                               +name
                                               +"']").css('z-index',2); },
        easing: "easeOutQuad"
      });


      $(".eac-content[id='"+$(this).children().html()+"']").animate({
        opacity: 1
      }, {
        duration: 500,
        queue: false,
        easing: "easeOutQuad"
      });
    }
  });
}

$(window).load(function() {
  // make the scrollbar in the home window, work window
  $("#CV").perfectScrollbar();
  $("#WORK").perfectScrollbar();

  // make sure the content body has the proper width
  $(".eac-content-body").width(($(".eac-content-container").width() - 60) + 'px');

  // add onWindowResize to event stack
  onWindowResize();
  window.addEventListener( 'resize', onWindowResize, false );

  // make the zippity zoom nav helper come out of hiding on load
  /*$(".eac-nav-helper").animate({
    width: $(".eac-nav-button.selected").children('span').width() + 9,
    marginLeft: "-=" + ($('.eac-nav-helper').offset().left 
                        - $('.eac-nav-button.selected').offset().left 
                        - 14)
  }, {
    duration: 1500,

    queue: false,
    complete: navComplete,
    easing: "easeOutQuart"
  });*/

  // home window opacity animates to 1 on load
  $(".eac-content[id='HOME']").animate({
     opacity: 1
   }, {
     duration: 1500,
     queue: false,
     easing: "easeOutQuad"
   });

  addWork("Cubiculo", "images/Cubiculo.jpg", "http://evan-a-coleman.com/4D/");

  //addWorkFolder("(Underclassman) <br> Course notes", "", 
  //{
  //  "PHYS1410: Quantum Mechanics Notes":  ["", "./Documents/PHYS1410/PHYS1410_Notes.pdf"],
  //  "MATH1130: Multivariate Analysis Midterm II Study Guide":   ["", "./Documents/MATH1130/MATH1130_SG2.pdf"],
  //  "MATH1010: Analysis Midterm II Study Guide":   ["", "./Documents/MATH1010/MATH1010_SG2.pdf"],
  //  "MATH0540: Linear Algebra Midterm II Study Guide":   ["", "./Documents/MATH0540/MATH0540_SG2.pdf"]
  //});

  //addWorkFolder("PHYS2470: Renormalization", "", 
  //{
  //  //"Set 1":                    ["", "http://evan-a-coleman.com/"],
  //  //"Set 2":                    ["", "http://evan-a-coleman.com/"],
  //  "Set 3 (Used as solution)": ["", "./Documents/PHYS2470/Set3.pdf"],
  //  //"Set 4":                    ["", "http://evan-a-coleman.com/"],
  //  "Set 5 (Used as solution)": ["", "./Documents/PHYS2470/Set5.pdf"],
  //  //"Set 6":                    ["", "http://evan-a-coleman.com/"],
  //});

  addWorkFolder("13 TeV Top Width Measurement", "", 
  {
    "CERN Document Server": ["", "http://cds.cern.ch/record/2218019"],
    "InspireHEP":           ["", "http://inspirehep.net/record/1487815"],
    "TOP2016 Poster":       ["", "./Documents/TopWidth/ColemanE_TopWidth_TOP2016.pdf"],
  });

  addWorkFolder("Track Observables Study", "", 
  {
    "CERNWeb & Plots": ["", "http://ecoleman.web.cern.ch/ecoleman/TrackObservablesStudy/"],
    "BOOST2017 Poster": ["", "./Documents/TrackObservablesStudy/ColemanE_TrackObservables_BOOST2017"],
    "arXiv": ["", "https://arxiv.org/abs/1709.08705"]
  });

  addWork("Github",   "", "https://www.github.com/eacoleman/");
  addWork("Lectures",   "", "https://www.youtube.com/channel/UCzKSkbluN42ui-rxH_WHxDQ?view_as=subscriber");

  addWorkFolder("(Upperclassman) <br> Course notes", "", 
  {
    "PHYS2300: Quantum Field Theory I Final Project, The Axial Anomaly": ["","./Documents/PHYS2300/Final Project.pdf"],
    "Hausdorff-Ising Model":                                             ["", "./Documents/ColemanE_HausdorffIsingModel.pdf"],
    "The Lie Algebra of <br> SU ( 2 to the M )":                         ["", "./Documents/ColemanE_LieAlgebraSU(2toM).pdf"]
  });

});
