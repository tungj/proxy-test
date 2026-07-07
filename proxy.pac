function FindProxyForURL(url, host) {
//     var useSocks = ["webmail.maybank.com","github.maybank.com"];
//    var useSocks = ["github.maybank.com", "*.maybank.com","*.maybank.com.my"];

    var useSocks = ["github.maybank.com", "webmail.maybank.com", "maybank.com"];

    for (var i = 0; i < useSocks.length; i++) {
        if (shExpMatch(host, useSocks[i])) {
            return "SOCKS 127.0.0.1:10800;";
        }
    }

    var useSocks = ["login.microsoftonline.com", "login.windows.net", "login.live.com", "auth.gfx.ms", "secure.aadcdn.microsoftonline-p.com", "ocws.officeapps.live.com", "roaming.officeapps.live.com"];

    for (var i = 0; i < useSocks.length; i++) {
        if (shExpMatch(host, useSocks[i])) {
            return "PROXY 127.0.0.1:1084;";
        }
    }

    return "DIRECT";
}

