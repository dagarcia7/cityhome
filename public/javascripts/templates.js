(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bed-thumbnail'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"raise-bed\" data-bed-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Raise bed</a></td>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"lower-bed\" data-bed-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Lower bed</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr class=\"bed-in-table\">\n    <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-bed\" data-bed-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit name</a> | <a href=\"#\" id=\"delete-bed\" data-bed-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Delete bed</a></td>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.state : depth0), "down", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"useData":true});
templates['beds'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['bed-thumbnail'], '                    ', 'bed-thumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"beds\">\n    <h1>Beds</h1>\n    \n    <span>\n        <button id=\"view-all-beds\" class=\"btn btn-info\">View All Beds</button>\n        <button id=\"raised-beds\" class=\"btn btn-info\">View 'Raised' Beds</button>\n        <button id=\"lowered-beds\" class=\"btn btn-info\">View 'Lowered' Beds</button>\n        <button id=\"create-new-bed\" class=\"btn btn-info\">Create New Bed</button>\n    </span>\n    <div>\n        <table class=\"table\" id=\"beds-table\">\n            <thead>\n                <th>Name: </th>\n                <th>State: </th>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.beds : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Edit Bed Modal -->\n<div class=\"modal fade\" id=\"modal-edit-bed\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-bed\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-bed-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Bed Name</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-bed-form\">\n            <input id=\"edit-bed-form-id\" class=\"display-none\" name=\"bedId\">\n            <input id=\"bed-new-name\" type=\"text\" placeholder=\"Enter new bed name here...\" name=\"bedName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Name\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Create Bed Modal -->\n<div class=\"modal fade\" id=\"modal-create-bed\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-create-bed\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"create-bed-modal-title\" style=\"text-align: center; font-size: 30px;\">New Bed</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"create-bed-form\">\n            <input id=\"create-bed-name\" type=\"text\" placeholder=\"Bed name\" name=\"bedName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Create Bed\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
templates['closet-thumbnail'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"close-closet\" data-closet-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Close closet</a></td>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-closet\" data-closet-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Open closet</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr class=\"closet-in-table\">\n    <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-closet\" data-closet-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit name</a> | <a href=\"#\" id=\"delete-closet\" data-closet-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Delete closet</a></td>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.state : depth0), "open", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"useData":true});
templates['closets'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['closet-thumbnail'], '                    ', 'closet-thumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"closets\">\n    <h1>Closets</h1>\n    \n    <span>\n        <button id=\"view-all-closets\" class=\"btn btn-info\">View All Closets</button>\n        <button id=\"open-closets\" class=\"btn btn-info\">View 'Open' Closets</button>\n        <button id=\"closed-closets\" class=\"btn btn-info\">View 'Closed' Closets</button>\n        <button id=\"create-new-closet\" class=\"btn btn-info\">Create New Closet</button>\n    </span>\n    <div>\n        <table class=\"table\" id=\"closets-table\">\n            <thead>\n                <th>Name: </th>\n                <th>State: </th>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.closets : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Edit Closet Modal -->\n<div class=\"modal fade\" id=\"modal-edit-closet\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-closet\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-closet-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Closet Name</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-closet-form\">\n            <input id=\"edit-closet-form-id\" class=\"display-none\" name=\"closetId\">\n            <input id=\"closet-new-name\" type=\"text\" placeholder=\"Enter new closet name here...\" name=\"closetName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Name\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Create Closet Modal -->\n<div class=\"modal fade\" id=\"modal-create-closet\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-create-closet\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"create-closet-modal-title\" style=\"text-align: center; font-size: 30px;\">New Closet</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"create-closet-form\">\n            <input id=\"create-closet-name\" type=\"text\" placeholder=\"Closet name\" name=\"closetName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Create Closet\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
templates['dashboard'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"dashboard\">\n    <h1>CityHome</h1>\n    <h3>(<a href=\"#\" id=\"logout-link\">logout</a>)</h3>\n    \n    <span>\n        <button id=\"lights-button\" class=\"btn btn-info\">Lights</button>\n        <button id=\"tables-button\" class=\"btn btn-info\">Tables</button>\n        <button id=\"closets-button\" class=\"btn btn-info\">Closets</button>\n        <button id=\"screens-button\" class=\"btn btn-info\">Screens</button>\n        <button id=\"beds-button\" class=\"btn btn-info\">Beds</button>\n    </span>\n</div>\n";
  },"useData":true});
templates['light-thumbnail'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"turn-light-off\" data-light-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Turn light off</a></td>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"turn-light-on\" data-light-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Turn light on</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr class=\"light-in-table\">\n    <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-light\" data-light-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit name</a> | <a href=\"#\" id=\"delete-light\" data-light-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Delete light</a></td>\n    <td>"
    + escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"color","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-color\" data-light-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit color</a></td>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.state : depth0), "on", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"useData":true});
templates['lights'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['light-thumbnail'], '                    ', 'light-thumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"lights\">\n    <h1>Lights</h1>\n    \n    <span>\n        <button id=\"view-all-lights\" class=\"btn btn-info\">View All Lights</button>\n        <button id=\"on-lights\" class=\"btn btn-info\">View 'On' Lights</button>\n        <button id=\"off-lights\" class=\"btn btn-info\">View 'Off' Lights</button>\n        <button id=\"create-new-light\" class=\"btn btn-info\">Create New Light</button>\n    </span>\n    <div>\n        <table class=\"table\" id=\"lights-table\">\n            <thead>\n                <th>Name: </th>\n                <th>Color: </th>\n                <th>State: </th>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.lights : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Edit Light Modal -->\n<div class=\"modal fade\" id=\"modal-edit-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-light\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-light-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Light Name</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-light-form\">\n            <input id=\"edit-light-form-id\" class=\"display-none\" name=\"lightId\">\n            <input id=\"light-new-name\" type=\"text\" placeholder=\"Enter new light name here...\" name=\"lightName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Name\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Create Light Modal -->\n<div class=\"modal fade\" id=\"modal-create-light\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-create-light\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"create-light-modal-title\" style=\"text-align: center; font-size: 30px;\">New Light</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"create-light-form\">\n            <input id=\"create-light-name\" type=\"text\" placeholder=\"Light name\" name=\"lightName\" style=\"font-size: 20px;\" required>\n            <input id=\"create-light-color\" type=\"text\" placeholder=\"Light color\" name=\"lightColor\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Create Light\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit Light Color Modal -->\n<div class=\"modal fade\" id=\"modal-edit-light-color\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-light-color\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-color-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Color</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-light-color-form\">\n            <input id=\"edit-light-color-form-id\" class=\"display-none\" name=\"lightId\">\n<!--            <input id=\"create-light-name\" type=\"text\" placeholder=\"Light name\" name=\"lightName\" style=\"font-size: 20px;\" required>-->\n            <input id=\"picker\" type=\"text\" name=\"lightColor\"></input>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Color\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});
templates['login'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"login\">\n  <h1>Welcome to CityHome! </h1>\n  <h2>Login</h2>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  <form id=\"login-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" style=\"margin-top:20px\" required /></div>\n    <input type=\"submit\" class=\"btn btn-primary\"/>\n  </form>\n</div>";
},"useData":true});
templates['screen-thumbnail'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"raise-screen\" data-screen-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Raise screen</a></td>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"lower-screen\" data-screen-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Lower screen</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr class=\"screen-in-table\">\n    <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-screen\" data-screen-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit name</a> | <a href=\"#\" id=\"delete-screen\" data-screen-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Delete screen</a></td>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.state : depth0), "down", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"useData":true});
templates['screens'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['screen-thumbnail'], '                    ', 'screen-thumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"screens\">\n    <h1>Screens</h1>\n    \n    <span>\n        <button id=\"view-all-screens\" class=\"btn btn-info\">View All Screens</button>\n        <button id=\"raised-screens\" class=\"btn btn-info\">View 'Raised' Screens</button>\n        <button id=\"lowered-screens\" class=\"btn btn-info\">View 'Lowered' Screens</button>\n        <button id=\"create-new-screen\" class=\"btn btn-info\">Create New Screen</button>\n    </span>\n    <div>\n        <table class=\"table\" id=\"screens-table\">\n            <thead>\n                <th>Name: </th>\n                <th>State: </th>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.screens : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Edit Screen Modal -->\n<div class=\"modal fade\" id=\"modal-edit-screen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-screen\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-screen-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Screen Name</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-screen-form\">\n            <input id=\"edit-screen-form-id\" class=\"display-none\" name=\"screenId\">\n            <input id=\"screen-new-name\" type=\"text\" placeholder=\"Enter new screen name here...\" name=\"screenName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Name\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Create Screen Modal -->\n<div class=\"modal fade\" id=\"modal-create-screen\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-create-screen\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"create-screen-modal-title\" style=\"text-align: center; font-size: 30px;\">New Screen</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"create-screen-form\">\n            <input id=\"create-screen-name\" type=\"text\" placeholder=\"Screen name\" name=\"screenName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Create Screen\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
templates['table-thumbnail'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"close-table\" data-table-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Close table</a></td>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <td>"
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-table\" data-table-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Open table</a></td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<tr class=\"table-in-table\">\n    <td>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"#\" id=\"open-modal-edit-table\" data-table-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Edit name</a> | <a href=\"#\" id=\"delete-table\" data-table-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Delete table</a></td>\n";
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.state : depth0), "open", {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</tr>";
},"useData":true});
templates['tables'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['table-thumbnail'], '                    ', 'table-thumbnail', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"tables\">\n    <h1>Tables</h1>\n    \n    <span>\n        <button id=\"view-all-tables\" class=\"btn btn-info\">View All Tables</button>\n        <button id=\"open-tables\" class=\"btn btn-info\">View 'Open' Tables</button>\n        <button id=\"closed-tables\" class=\"btn btn-info\">View 'Closed' Tables</button>\n        <button id=\"create-new-table\" class=\"btn btn-info\">Create New Table</button>\n    </span>\n    <div>\n        <table class=\"table\" id=\"tables-table\">\n            <thead>\n                <th>Name: </th>\n                <th>State: </th>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tables : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Edit Table Modal -->\n<div class=\"modal fade\" id=\"modal-edit-table\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-edit-table\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"edit-table-modal-title\" style=\"text-align: center; font-size: 30px;\">Edit Table Name</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"edit-table-form\">\n            <input id=\"edit-table-form-id\" class=\"display-none\" name=\"tableId\">\n            <input id=\"table-new-name\" type=\"text\" placeholder=\"Enter new table name here...\" name=\"tableName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Change Name\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Create Table Modal -->\n<div class=\"modal fade\" id=\"modal-create-table\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-create-table\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"create-table-modal-title\" style=\"text-align: center; font-size: 30px;\">New Table</h4>\n      </div>\n      <div class=\"modal-body\" style=\"text-align: center;\">\n        <form id=\"create-table-form\">\n            <input id=\"create-table-name\" type=\"text\" placeholder=\"Table name\" name=\"tableName\" style=\"font-size: 20px;\" required>\n            <input class=\"btn btn-info\" type=\"submit\" value=\"Create Table\" style=\"width: 200px;\"></input>\n          </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
},"usePartial":true,"useData":true});
})();
