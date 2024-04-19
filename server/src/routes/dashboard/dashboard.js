const { Router } = require("express");
const DashboardLoginPostHandler = require("../../handlers/dashboard/DashboardLoginPostHandler");
const DashboardCreatedPostHandler = require("../../handlers/dashboard/DashboardCreatedPostHandler");

const dashboardRoute = Router();

dashboardRoute.post("/login", DashboardLoginPostHandler);
dashboardRoute.post("/created", DashboardCreatedPostHandler);

module.exports = dashboardRoute;
