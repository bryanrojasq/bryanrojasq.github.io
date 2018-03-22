$(function() {

    w3.includeHTML();
    
    var nav = $("#main-navbar");
    nav.affix({
        offset: 40
    });
    nav.on("affixed.bs.affix", function() {});
    $(".page-scroll a").bind("click", function(event) {
        event.preventDefault();
        console.log("hello");
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo");
    });
    $("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    });
    $(".navbar-collapse ul li a").click(function() {
        $(".navbar-toggle:visible").click();
    });
    $(window).resize(function() {
        $(".svg-progress-skill").trigger("redraw");
    });
    $(".responsive").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    var projects = [
    {
        "id": 0,
        "title": "Ex2 Outcoding",
        "img_src": "./img/projects/outcoding.png",
        "video_src": "",
        "description": "<p>Website migration to Wordpress, Theme building and site-building.<br> Debug legacy code and website optimization.</p>",
        "client": "Ex2 Outcoding",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, wordpress, theming',
        'link' : ''
    }, {
        "id": 1,
        "title": "Costa Blu Resort",
        "img_src": "./img/projects/costablu.png",
        "video_src": "",
        "description": "<p>Website built with Wordpress, Theme building, Plugin building and Site-building.<br> Web design made by the graphic design agency InvaluableCR.</p>",
        "client": "Sandy Point Resorts",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, wordpress, theming',
        'link' : ''
    }, {
        "id": 2,
        "title": "CIJULenLÃ­nea",
        "img_src": "./img/projects/cijulenlinea.png",
        "video_src": "https://www.youtube.com/embed/gQ-o_j_xvVE",
        "description": "<p>Web application developed in PHP using Codeigniter as framework, PostgreSQL and MySLQ as bases of Data, Bootstrap and jQuery for Colegio de Abogados.<br> This project included the automation of processes, Server Administration and DBA and integration with databases.</p>", 
        "client": "Colegio de Abogados de Costa Rica",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, codeigniter, joomla, postgresql, mysql',
        'link' : ''
    }, {
        "id": 3,
        "title": "Bosco Mattel",
        "img_src": "./img/projects/boscomattel.png",
        "video_src": "",
        "description": "<p>Website built with Wordpress, Theme customization, Site-building.<br> Website optimization.</p>",
        "client": "Diego Vargas Artist",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, wordpress, site-building',
        'link' : ''
    }, {
        "id": 4,
        "title": "Deportiva Los Ãngeles",
        "img_src": "./img/projects/deportiva-los-angeles.png",
        "video_src": "",
        "description": "<p>Website built with Wordpress, Theme customization, Site-building.<br> Website optimization.</p>",
        "client": "AsociaciÃ³n Deportiva Los Ãngeles",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, wordpress, theme',
        'link' : ''
    }, {
        "id": 5,
        "title": "Colegio de Abogados",
        "img_src": "./img/projects/abogados.png",
        "video_src": "https://www.youtube.com/embed/RDNEhD8kE6c",
        "description": "<p>Website Proposal for Colegio de Abogados.<br> Website built with Joomla, Theme customization, Site-building.</p>",
        "client": "Colegio de Abogados",
        "service": "Web Development",
        'tags' : 'css3, mootools, php, joomla, theme',
        'link' : ''
    }, {
        "id": 6,
        "title": "IUS Doctrina",
        "img_src": "./img/projects/ius-doctrina.png",
        "video_src": "https://www.youtube.com/embed/GcYIJkE6aBA",
        "description": "<p>Website built with Joomla, Theme customization, Site-building.</p>",
        "client": "Laws Faculty, Universidad de Costa Rica",
        "service": "Web Development",
        'tags' : 'css3, jquery, php, joomla, theme',
        'link' : ''
    }, {
        "id": 7,
        "title": "University Community Work",
        "img_src": "./img/projects/tcu-ctpmqs.png",
        "video_src": "https://www.youtube.com/embed/eBvZiLvXGxg",
        "description": "<p>Website built with Drupal 7, Theme customization, Site-building.</p>",
        "client": "Mario Quiros High School",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, drupal, theme',
        'link' : ''
    }, {
        "id": 8,
        "title": "Referal Library",
        "img_src": "./img/projects/biblioteca-abogados.png",
        "video_src": "https://www.youtube.com/embed/lhIFwo2-A8g",
        "description": "<p>Website built with Drupal 7, Theme customization, Site-building.</p>",
        "client": "Colegio de Abogados",
        "service": "Web Development",
        'tags' : 'bootstrap, jquery, php, drupal, theme',
        'link' : ''
    }];
    var htmlProjects = '';
    $.each(projects, function(i, val) {
        console.log(val.title);
        htmlProjects += '<div class="col-xs-12 col-sm-6 col-md-4 item-projects">';
        htmlProjects += '<figure>';
        htmlProjects += '<img alt="" class="img-responsive" src="' + val.img_src + '" />';
        htmlProjects += '<figcaption>';
        htmlProjects += '<h3>' + val.title + '</h3>';
        htmlProjects += '</figcaption>';
        htmlProjects += '<a class="overlay" data-target="#myModal" data-toggle="modal" href="#" data-project_id="' + val.id + '"></a>';
        htmlProjects += '</figure>';
        htmlProjects += '</div>';
        htmlProjects += '';
        htmlProjects += '';
    });
    $('#projects-container').append(htmlProjects);
    var skills = [{
        "name": "HTML5",
        "level": 90,
    }, {
        "name": "CSS3",
        "level": 85,
    }, {
        "name": "JS / jQuery / Angular",
        "level": 85,
    }, {
        "name": "NodeJS / Express",
        "level": 70,
    }, {
        "name": "PHP / Laravel / Codeigniter",
        "level": 85,
    }, {
        "name": "Wordpress",
        "level": 85,
    }, {
        "name": "MySQL / PostgreSQL",
        "level": 80,
    }, {
        "name": "GitHub / Gupl / NPM / Vagrant",
        "level": 85,
    }];
    var htmlSkills = '';
    $.each(skills, function(i, val) {
        console.log(val.name);
        var thirdElement = ((i + 1) % 3 == 0);
        var offset = ((skills.length - 2) == i) ? 'col-md-offset-2' : '';
        var xsClass = (thirdElement) ? 'col-xs-12' : 'col-xs-6';
        htmlSkills += '<div class="' + offset + ' ' + xsClass + ' col-md-4">';
        htmlSkills += '<div class="skill">';
        htmlSkills += '<div class="svg-progress-skill normal" data-progress-value="' + val.level + '">';
        htmlSkills += '<span class="svg-progress-output"></span>';
        htmlSkills += '</div>';
        htmlSkills += '<h3>' + val.name + '</h3>';
        htmlSkills += '</div><!-- skill -->';
        htmlSkills += '</div><!-- Col-->';
        htmlSkills += (thirdElement) ? '<div class="clearfix"></div>' : '';
    });
    $('#skills-container').append(htmlSkills);
    $(".svg-progress-skill").svgprogress({
        figure: "hexagon",
        progressFillGradient: ["#fcbf02", "#2cbc99"],
        progressWidth: 4
    });
    $(".svg-progress-skill").trigger("redraw");
    $('#myModal').on('hide.bs.modal', function(e) {
        $(this).find('h2').html('');
        $('#myModal').find('p:first').html('');
        $('#myModal').find('#media').html('');
        var project = $(this).data('project_id');
        console.log(project);
    });
    $('.item-projects a').on('click', function() {
        var project = $(this).data('project_id');
        project = projects[project];
        console.log(project);
        var media = '';
        $('#myModal').find('h2').html(project.title);
        $('#myModal').find('p:first').html(project.description);
        if (project.video_src) {
            media += '<div class="video-container"> <iframe width="560" height="315" src="' + project.video_src + '" frameborder="0" allowfullscreen></iframe></div>';
        } else {
            media += '<img alt="' + project.title + '" class="img-responsive" src="' + project.img_src + '"></img>';
        }
        $('#myModal').find('#media').html(media);
    })
});
