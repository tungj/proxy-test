function FindProxyForURL(url, host) {
    var useSocks = ["login.microsoftonline.com", "login.windows.net", "login.live.com", "auth.gfx.ms", "secure.aadcdn.microsoftonline-p.com", "ocws.officeapps.live.com", "roaming.officeapps.live.com", "groupmbb.atlassian.net", "groupmbb-tech.atlassian.net", "media-cdn.atlassian.com", "myhrecc.maybank.com.my", "myhr2u.maybank.com.my"];

    for (var i = 0; i < useSocks.length; i++) {
        if (shExpMatch(host, useSocks[i])) {
            return "PROXY 205.220.71.130:443;";
        }
    }

    return "DIRECT";
}

