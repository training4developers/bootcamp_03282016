import $ from "jquery";

function loadAllAccounts() {

	return new Promise(function(resolve) {
		$.ajax({
			url: "/api/accounts",
			type: "GET"
		}).then(function(accounts) {
			resolve(accounts);
		});
	});

}

function loadOneAccount(accountNumber) {

	return new Promise(function(resolve) {
		$.ajax({
			url: "/api/accounts/" + encodeURIComponent(accountNumber),
			type: "GET"
		}).then(function(account) {
			resolve(account);
		});
	});
}

function showTable(accounts) {

	$("body").empty();

	var tableTemplate = "<table><thead><tr><th>Acct Num</th><th>Name</th></tr></thead><tbody></tbody></table>";
	var table = $(tableTemplate);

	function viewAccountButton(e) {
		loadOneAccount($(e.target).attr("account-id")).then(function(account) {
			table.off("click", viewAccountButton);
			return account;
		}).then(showView);
	}

	table.on("click", "button", viewAccountButton);

	var tbody = table.find("tbody");

	accounts.forEach(function(account) {
		var tr = $("<tr>");
		var td = $("<td>");
		td.text(account.acctNum);
		tr.append(td);
		td = $("<td>");
		td.text(account.name);
		tr.append(td);

		td = $("<td><button>View</button></td>");
		td.find("button")
			.attr("account-id", account._id);
		tr.append(td);

		tbody.append(tr);
	});

	$("body").append(table);

}

function showView(account) {

	$("body").empty();

	var viewTemplate = "<div><div>Acct Number: <span id='account-number'></span></div><div>Name: <span id='account-name'></span></div><button>Return</button></div>";

	var view = $(viewTemplate);

	view.find("#account-number").text(account.acctNum);
	view.find("#account-name").text(account.name);

	function returnToList() {
		loadAllAccounts().then(function(results) {
			$(this).off("click", returnToList);
			return results;
		}).then(showTable);
	}

	view.find("button").on("click", returnToList);

	$("body").append(view);
}


$(() => {

	loadAllAccounts().then(showTable);

});