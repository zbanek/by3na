function FindProxyForURL(url, host) {
        if (shExpMatch(host, "*.onion"))
        {
                return "PROXY 192.168.100.1:8081";
        }
	if (shExpMatch(host, "*.jaw.pl"))
	{
		return "PROXY 192.168.100.1:8118";
	}
	if (isInNet(host, "10.234.0.0", "255.255.248.0"))
	{
		return "PROXY fastproxy.example.com:8080";
	}
        if (isInNet(host, "10.0.0.0", "255.0.0.0"))
        {
                return "DIRECT";
        }
        if (isInNet(host, "192.168.0.0", "255.255.0.0"))
        {
                return "DIRECT";
        }
	return "PROXY 192.168.100.1:8080; DIRECT";
}
