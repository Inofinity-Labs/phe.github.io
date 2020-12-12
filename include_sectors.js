
//Hydro Power -----------------------------------------------------------------------------
    const hydro_xhr = new XMLHttpRequest();
    const hydro_container = document.getElementById('include-content');
    hydro_xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        hydro_container.innerHTML = hydro_xhr.responseText;
        }else{
            console.warn('Did not reserve');
        }
    };

    hydro_xhr.open("GET", "includes/hydro.html");
    hydro_xhr.send();

    function hydro_loadhome(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1proj_dev() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/proj_dev.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1feas_stu() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/feas_stu.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1de_eng() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/de_eng.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1epc() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/epc.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }
    
    function load1pm() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/pm.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1om() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/om.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1sup_e() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/sup_e.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }

    function load1supGRP() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/hydro/supGRP.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }
    function hydro_loadref() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/reference/hydro_ref.html", false);
        xhttp.send();
        document.getElementById("include-content").innerHTML = xhttp.responseText; 
    }
    
   
//Wind Power -----------------------------------------------------------------------------
    const wind_xhr = new XMLHttpRequest();
    const wind_container = document.getElementById('wind');
    wind_xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        wind_container.innerHTML = wind_xhr.responseText;
        }else{
            console.warn('Did not reserve');
        }
    };

    wind_xhr.open("GET", "includes/wind.html");
    wind_xhr.send();

    function wind_loadhome(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }


    function load2_feasibility() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind/feasibility.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }

    function load2_simulation() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind/simulation.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }

    function load2_micro() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind/micro.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }
    
    function load2_detaile() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind/detaile.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }

    function load2_projectm() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/wind/projectm.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }

    function wind_loadref() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/reference/wind_ref.html", false);
        xhttp.send();
        document.getElementById("wind").innerHTML = xhttp.responseText; 
    }
//Solar Power -----------------------------------------------------------------------------    
    const solar_xhr = new XMLHttpRequest();
    const solar_container = document.getElementById('solar');
    solar_xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        solar_container.innerHTML = solar_xhr.responseText;
        }else{
            console.warn('Did not reserve');
        }
    };

    solar_xhr.open("GET", "includes/solar.html");
    solar_xhr.send();

    function solar_loadhome(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }


    function solar_feasibility() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_feasibility.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }

    function solar_detailed() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_detailed.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }

    function solar_simulation() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_simulation.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }

    function solar_projectm() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_projectm.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }

    function solar_installation() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_installation.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }

    function solar_epc() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/solar/solar_epc.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }
    function solar_loadref() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/reference/solar_ref.html", false);
        xhttp.send();
        document.getElementById("solar").innerHTML = xhttp.responseText; 
    }
//Bio  -----------------------------------------------------------------------------    
    const bio_xhr = new XMLHttpRequest();
    const bio_container = document.getElementById('bio');
    bio_xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        bio_container.innerHTML = bio_xhr.responseText;
        }else{
            console.warn('Did not reserve');
        }
    };

    bio_xhr.open("GET", "includes/bio.html");
    bio_xhr.send();

    function bio_loadhome(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/bio.html", false);
        xhttp.send();
        document.getElementById("bio").innerHTML = xhttp.responseText; 
    }


    function bio_feasibility() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/bio/feasibility.html", false);
        xhttp.send();
        document.getElementById("bio").innerHTML = xhttp.responseText; 
    }

    function bio_detailed() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/bio/detailede.html", false);
        xhttp.send();
        document.getElementById("bio").innerHTML = xhttp.responseText; 
    }

    function bio_project() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/bio/projectm.html", false);
        xhttp.send();
        document.getElementById("bio").innerHTML = xhttp.responseText; 
    }
    function bio_loadref() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/reference/bio_ref.html", false);
        xhttp.send();
        document.getElementById("bio").innerHTML = xhttp.responseText; 
    }
    

    //Bio  -----------------------------------------------------------------------------    
    const inv_xhr = new XMLHttpRequest();
    const inv_container = document.getElementById('inv');
    inv_xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        inv_container.innerHTML = inv_xhr.responseText;
        }else{
            console.warn('Did not reserve');
        }
    };

    inv_xhr.open("GET", "includes/inv.html");
    inv_xhr.send();

    function inv_loadhome(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/inv.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }
    function inv_diligence() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/inv/diligence.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }
    function inv_monitoring() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/inv/monitoring.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }
    function inv_portfolio() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/inv/portfolio.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }
    function inv_penetration() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/inv/penetration.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }
    function inv_loadref() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "includes/reference/inv_ref.html", false);
        xhttp.send();
        document.getElementById("inv").innerHTML = xhttp.responseText; 
    }




    var indexValue = 0;
    function slideShow(){
      setTimeout(slideShow, 2500);
      var x;
      const img = document.getElementsByClassName("slide-img");
      for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
      }
      indexValue++;
      if(indexValue > img.length){indexValue = 1}
      img[indexValue -1].style.display = "block";
    }
    slideShow();