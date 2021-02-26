function currentTime() {
    var date = new Date(); /* creating object of Date class */
    document.getElementById("time").innerText = date.toLocaleTimeString(); /* adding time to the div */
    document.getElementById("date").innerText = date.toLocaleDateString(); /* adding date to the div */
    var t = setTimeout(function () { currentTime() }, 1000); /* setting timer */
}

currentTime(); /* calling currentTime() function to initiate the process */


const github = 'https://github.com/';
const iobroker = 'http://iobroker.live/badges/';
const npm = 'https://www.npmjs.com/package/';
const travis = 'https://travis-ci.com/';
const david = 'https://david-dm.org/';

const repositories = {
    'iobroker-table': [
        { name: 'ioBroker.vodafone-speedtest', key: 'vodafone-speedtest' },
        { name: 'ioBroker.unifi-protect', key: 'unifi-protect' },
    ],
};

$(document).ready(function () {

    $('#footer a').click((e) => {
        $('#footer a').removeClass('active');
        $(e.target).addClass('active');
    });
    if (window.location.hash != "") {
        $('#footer a').removeClass('active');
        $('#footer a[href="'+window.location.hash+'"]').addClass('active');
    }

    for (let key in repositories) {
        repositories[key].forEach(function (repo) {
            repo.user = repo.user || 'peterbaumert';
            let row = $('<tr />', repo.development === false ? { css: { backgroundColor: '#ccc', textDecoration: 'line-through' } } : {});

            // Name
            row.append($('<td />', {}).append($('<a />', { 'text': repo.name, 'href': github + repo.user + '/' + repo.name })));

            // Installations
            row.append($('<td />', {}).append($('<a />', { 'href': iobroker + repo.key + '-installed.svg', 'target': '_blank' }).append($('<img />', { 'src': iobroker + repo.key + '-installed.svg', 'alt': 'Number of Installations' }))));

            // Stars (Github)
            row.append($('<td />', {}).append($('<a />', { 'href': github + repo.user + '/' + repo.name + '/stargazers', 'target': '_blank' }).append($('<img />', { 'src': 'https://img.shields.io/github/stars/' + repo.user + '/' + repo.name + '.svg', 'alt': 'Github Stars' }))));

            // Watchers (Github)
            row.append($('<td />', {}).append($('<a />', { 'href': github + repo.user + '/' + repo.name + '/watchers', 'target': '_blank' }).append($('<img />', { 'src': 'https://img.shields.io/github/watchers/' + repo.user + '/' + repo.name + '.svg', 'alt': 'Github Watchers' }))));

            // Forks (Github)
            row.append($('<td />', {}).append($('<a />', { 'href': github + repo.user + '/' + repo.name + '/network/members', 'target': '_blank' }).append($('<img />', { 'src': 'https://img.shields.io/github/forks/' + repo.user + '/' + repo.name + '.svg', 'alt': 'Github Forks' }))));

            // Stable (ioBroker)
            row.append($('<td />', {}).append($('<a />', { 'href': iobroker + repo.key + '-stable.svg', 'target': '_blank' }).append($('<img />', { 'src': iobroker + repo.key + '-stable.svg', 'alt': 'Stable Release' }))));

            // Latest (NPM) 
            row.append($('<td />', {}).append($('<a />', { 'href': npm + (repo.npm || repo.name).toLowerCase(), 'target': '_blank' }).append($('<img />', { 'src': 'http://img.shields.io/npm/v/' + (repo.npm || repo.name).toLowerCase() + '.svg', 'alt': 'NPM Release' }))));

            // Travis
            row.append($('<td />', {}).append($('<a />', { 'href': travis + repo.user + '/' + repo.name, 'target': '_blank' }).append($('<img />', { 'src': travis + repo.user + '/' + repo.name + '.svg?branch=master', 'alt': 'Travis' }))));

            // Issues (Github)
            row.append($('<td />', {}).append($('<a />', { 'href': github + repo.user + '/' + repo.name + '/issues', 'target': '_blank' }).append($('<img />', { 'src': 'https://img.shields.io/github/issues/' + repo.user + '/' + repo.name + '.svg', 'alt': 'Issues' }))));

            // Pull Requests (Github)
            row.append($('<td />', {}).append($('<a />', { 'href': github + repo.user + '/' + repo.name + '/pulls', 'target': '_blank' }).append($('<img />', { 'src': 'https://img.shields.io/github/issues-pr/' + repo.user + '/' + repo.name + '.svg', 'alt': 'Pull Requests' }))));

            $('#' + key).append(row);
        });
    }
});