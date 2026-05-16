"use strict";

module.exports = {
	routes: [
		{
			method: "GET",
			path: "/galleries",
			handler: "gallery.find",
			config: { policies: [] },
		},
		{
			method: "GET",
			path: "/galleries/:id",
			handler: "gallery.findOne",
			config: { policies: [] },
		},
		{
			method: "POST",
			path: "/galleries",
			handler: "gallery.create",
			config: { policies: ["admin::isAuthenticatedAdmin"] },
		},
		{
			method: "PUT",
			path: "/galleries/:id",
			handler: "gallery.update",
			config: { policies: ["admin::isAuthenticatedAdmin"] },
		},
		{
			method: "DELETE",
			path: "/galleries/:id",
			handler: "gallery.delete",
			config: { policies: ["admin::isAuthenticatedAdmin"] },
		},
	],
};
