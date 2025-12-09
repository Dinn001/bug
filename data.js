const DATA = {
    operators: {

        xl: {
            name: "XL",
            bugs: {
                edukasi: {
                    name: "Bug Edukasi",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]",
                        "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 69[crlf][crlf]"
                    ],
                    proxy: [
                        "104.17.70.206:80",
                        "ablink.alerts.udemy.com",
                        "104.17.3.81:80",
                        "104.22.4.240:80"
                    ]
                },

                conference: {
                    name: "Bug Conference",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: devsupport.zoom.us[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/SweaterPink 200 OK[crlf][crlf]",
                        "PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: beta.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: @DINSTORE [ua][crlf][crlf]"
                    ],
                    proxy: [
                        "zoomcares.zoom.us:80",
                        "cdn-cf.zoom.us:80",
                        "support.zoom.us:80"
                    ]
                },

                udemy: {
                    name: "Bug Udemy",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: Websocket[crlf]Connection: Keep-Alive[crlf]Upgrade: websocket[crlf][crlf]",
                        "Belum tersedia"
                    ],
                    proxy: [
                        "www.udemy.com:80",
                        "Belum tersedia"
                    ]
                }
            }
        },
        
        vidi: {
                    name: "Bug Vidi",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
                        "Belum tersedia"
                    ],
                    proxy: [
                        "104.18.1.196:80",
                        "Belum tersedia",
                        "Belum tersedia"
                    ]
                },
                vidi: {
                    name: "Bug Vidi",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
                        "Belum tersedia"
                    ],
                    proxy: [
                        "104.18.1.196:80",
                        "Belum tersedia",
                        "Belum tersedia"
                    ]
                },

                iflix: {
                    name: "Bug Iflix",
                    payload: [
                        "SSL ONLY",
                        "SSL ONLY"
                    ],
                    proxy: [
                        "live.iflix.com"
                    ]
                }
            }
        },

        axis: {
            name: "AXIS",
            bugs: {
                edukasi: {
                    name: "Bug Edukasi",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]",
                        "GET / HTTP/1.1[crlf]Host: edu.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 69[crlf][crlf]"
                    ],
                    proxy: [
                        "104.17.70.206:80",
                      "104.22.4.240:80",
                      "104.17.3.81:80",
                        "ablink.alerts.udemy.com"
                    ]
                },

                game: {
                    name: "Bug Game",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
                        "GET / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf]"
                    ],
                    proxy: [
                        "dev.appsflyer.com",
                        "web.poe.garena.com:80"
                      ]
                },

conference: {
                    name: "Bug Conference",
                    payload: [
                        "GET / HTTP/1.1[crlf]Host: devsupport.zoom.us[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/SweaterPink 200 OK[crlf][crlf]",
                        "PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: beta.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: @DINSTORE [ua][crlf][crlf]"
                    ],
                    proxy: [
                        "zoomcares.zoom.us:80",
                        "cdn-cf.zoom.us:80",
                        "support.zoom.us:80"
                    ]
                },
                
                sosmed: {
                    name: "Bug Sosmed",
                    payload: [
                        "GET http://v16.tiktokcdn.com/ HTTP/1.1
Host: v16.tiktokcdn.com",
                        "CONNECT tiktok.com:443 HTTP/1.1
Host: tiktok.com"
                    ],
                    proxy: [
                        "172.67.71.2:443",
                        "104.21.45.6:443"
                    ]
                },
                
        telkomsel: {
            name: "TELKOMSEL",
            bugs: {
                gamemax: {
                    name: "Gamemax",
                    payload: [
                        "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: cf-vod.nimo.tv[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]"
                    ],
                    proxy: [
                        "cf-vod.nimo.tv:80"
                    ]
                },

                ilmupedia: {
                    name: "Ilmupedia",
                    payload: [
                        "GET /cdn-cgi/trace HTTP/1.1[crlf]Host: beta.zoom.us[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]Content-Lenght: LUKI STORE[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]",
                        "CONNECT /cdn-cgi/trace HTTP/1.1[crlf]Host: ruangguru.com[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: @DINSTOREVpn [ua][crlf]Upgrade: websocket[crlf][crlf]"
                    ],
                    proxy: [
                        "ruangguru.com:443",
                        "v2ray 104.20.28.42"
                    ]
                }
            }
        }

    }
};