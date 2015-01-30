currentUser = undefined;

Handlebars.registerPartial('light-thumbnail', Handlebars.templates['light-thumbnail']);
Handlebars.registerPartial('table-thumbnail', Handlebars.templates['table-thumbnail']);
Handlebars.registerPartial('closet-thumbnail', Handlebars.templates['closet-thumbnail']);
Handlebars.registerPartial('screen-thumbnail', Handlebars.templates['screen-thumbnail']);
Handlebars.registerPartial('bed-thumbnail', Handlebars.templates['bed-thumbnail']);
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

/* -------------------- Helper functions ------------------ */
$(document).ready(function () {
    $.get('/users/current', function (response) {
        if (response.response.loggedIn) {
            currentUser = response.response.user;
        }
        loadHomePage();
    });
});

$(document).on('click', '#home-link', function (evt) {
    evt.preventDefault();
    loadHomePage();
});

var loadPage = function (template, data) {
    data = data || {};
    $('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function () {
    if (currentUser) {
        loadDashboard();
    } else {
        loadPage('login');
    }
};

var loadDashboard = function(additional) {
    loadPage('dashboard');
}

/* ---------------------- Lights ----------------------- */
$(document).on('click', '#lights-button', function(evt) {
    loadPage('lights');
});

var loadLightsPageAllLights = function (additional) {
    $.get('/lights/', function (response) {
        loadPage(
            'lights',
            $.extend(
                {}, 
                {lights: response.response.lights},
                {currentUser: currentUser},
                additional
            )
        );
    });
};

var loadLightsPageOnLights = function(additional) {
    $.get('/lights/on', function (response) {
        loadPage(
            'lights',
            $.extend(
                {},
                {lights: response.response.lights},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

var loadLightsPageOffLights = function(additional) {
    $.get('/lights/off', function (response) {
        loadPage(
            'lights',
            $.extend(
                {},
                {lights: response.response.lights},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

/* ---------------------- Tables ----------------------- */

$(document).on('click', '#tables-button', function(evt) {
    loadPage('tables');
});

var loadTablesPageAllTables = function (additional) {
    $.get('/tables/', function (response) {
        loadPage(
            'tables',
            $.extend(
                {}, 
                {tables: response.response.tables},
                {currentUser: currentUser},
                additional
            )
        );
    });
};

var loadTablesPageOpenTables = function(additional) {
    $.get('/tables/open', function (response) {
        loadPage(
            'tables',
            $.extend(
                {},
                {tables: response.response.tables},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

var loadTablesPageClosedTables = function(additional) {
    $.get('/tables/closed', function (response) {
        loadPage(
            'tables',
            $.extend(
                {},
                {tables: response.response.tables},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

/* ---------------------- Closets ----------------------- */

$(document).on('click', '#closets-button', function(evt) {
    loadPage('closets');
});

var loadClosetsPageAllClosets = function (additional) {
    $.get('/closets/', function (response) {
        loadPage(
            'closets',
            $.extend(
                {}, 
                {closets: response.response.closets},
                {currentUser: currentUser},
                additional
            )
        );
    });
};

var loadClosetsPageOpenClosets = function(additional) {
    $.get('/closets/open', function (response) {
        loadPage(
            'closets',
            $.extend(
                {},
                {closets: response.response.closets},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

var loadClosetsPageClosedClosets = function(additional) {
    $.get('/closets/closed', function (response) {
        loadPage(
            'closets',
            $.extend(
                {},
                {closets: response.response.closets},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

/* ---------------------- Screens ----------------------- */

$(document).on('click', '#screens-button', function(evt) {
    loadPage('screens');
});

var loadScreensPageAllScreens = function (additional) {
    $.get('/screens/', function (response) {
        loadPage(
            'screens',
            $.extend(
                {}, 
                {screens: response.response.screens},
                {currentUser: currentUser},
                additional
            )
        );
    });
};

var loadScreensPageRaisedScreens = function(additional) {
    $.get('/screens/up', function (response) {
        loadPage(
            'screens',
            $.extend(
                {},
                {screens: response.response.screens},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

var loadScreensPageLoweredScreens = function(additional) {
    $.get('/screens/down', function (response) {
        loadPage(
            'screens',
            $.extend(
                {},
                {screens: response.response.screens},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

/* ---------------------- Beds ----------------------- */

$(document).on('click', '#beds-button', function(evt) {
    loadPage('beds');
});

var loadBedsPageAllBeds = function (additional) {
    $.get('/beds/', function (response) {
        loadPage(
            'beds',
            $.extend(
                {}, 
                {beds: response.response.beds},
                {currentUser: currentUser},
                additional
            )
        );
    });
};

var loadBedsPageRaisedBeds = function(additional) {
    $.get('/beds/up', function (response) {
        loadPage(
            'beds',
            $.extend(
                {},
                {beds: response.response.beds},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};

var loadBedsPageLoweredBeds = function(additional) {
    $.get('/beds/down', function (response) {
        loadPage(
            'beds',
            $.extend(
                {},
                {beds: response.response.beds},
                {currentUser: currentUser}, 
                additional
            )
        );
    });
};