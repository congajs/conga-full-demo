import React from 'react';

export default class Navbar extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                      <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00MzcuMzMzLDE3MC42NjdoLTEzLjMyN2MxLjE0Mi0xNy40ODMsMS45ODgtMzUuMjAxLDIuMzQ4LTUzLjEyNWMwLjA1Mi0yLjg2NS0xLjA0Mi01LjYyNS0zLjA1Mi03LjY3NyAgICAgYy0yLTIuMDQyLTQuNzUtMy4xOTgtNy42MTUtMy4xOThIMjc3LjMzM2MtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N3Y0NS45MzhjMCwzLjc2LDEuOTc5LDcuMjUsNS4yMTksOS4xNjcgICAgIGMxLjYzNSwwLjk3OSw1LjQ0OCwzLjc5Miw1LjQ0OCw4Ljg5NnY2NGMwLDUuODg1LTQuNzgxLDEwLjY2Ny0xMC42NjcsMTAuNjY3aC0yMS4zMzNjLTUuODg1LDAtMTAuNjY3LTQuNzgxLTEwLjY2Ny0xMC42Njd2LTY0ICAgICBjMC01LjEwNCwzLjgxMy03LjkxNyw1LjQ0OC04Ljg5NmMzLjI0LTEuOTE3LDUuMjE5LTUuNDA2LDUuMjE5LTkuMTY3di00NS45MzhjMC01Ljg5Ni00Ljc3MS0xMC42NjctMTAuNjY3LTEwLjY2N0g5Ni4zMTMgICAgIGMtMi44NjUsMC01LjYxNSwxLjE1Ni03LjYxNSwzLjE5OGMtMi4wMSwyLjA1Mi0zLjEwNCw0LjgxMy0zLjA1Miw3LjY3N2MwLjM1OSwxNy45MjQsMS4yMDYsMzUuNjQyLDIuMzQ4LDUzLjEyNUg3NC42NjcgICAgIGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N3Y2NEM2NCwyNTEuMjI5LDY4Ljc3MSwyNTYsNzQuNjY3LDI1Nkg5NmMwLjEyMiwwLDAuMjI1LTAuMDY2LDAuMzQ2LTAuMDcgICAgIGMxMy4yMywxMDIuMTEzLDM1LjE1LDE4Ni4yNTMsNDYuNDQ1LDIyNS40MDRDMTQ4LjAxLDQ5OS4zODUsMTY0Ljg0NCw1MTIsMTgzLjc1LDUxMmgxNDQuNWMxOC45MDYsMCwzNS43NC0xMi42MTUsNDAuOTU4LTMwLjY2NyAgICAgYzExLjI5Ni0zOS4xNTEsMzMuMjE1LTEyMy4yOSw0Ni40NDUtMjI1LjQwNGMwLjEyMSwwLjAwNCwwLjIyNCwwLjA3LDAuMzQ2LDAuMDdoMjEuMzMzYzUuODk2LDAsMTAuNjY3LTQuNzcxLDEwLjY2Ny0xMC42Njd2LTY0ICAgICBDNDQ4LDE3NS40MzgsNDQzLjIyOSwxNzAuNjY3LDQzNy4zMzMsMTcwLjY2N3oiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPHBhdGggZD0iTTk2LDg1LjMzM2gzMjBjNS44OTYsMCwxMC42NjctNC43NzEsMTAuNjY3LTEwLjY2N3YtMzJDNDI2LjY2NywxOS4xMzUsNDA3LjUzMSwwLDM4NCwwSDEyOCAgICAgYy0yMy41MzEsMC00Mi42NjcsMTkuMTM1LTQyLjY2Nyw0Mi42Njd2MzJDODUuMzMzLDgwLjU2Myw5MC4xMDQsODUuMzMzLDk2LDg1LjMzM3oiIGZpbGw9IiNGRkZGRkYiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />&nbsp;conga.js demo
                    </a>
                  </div>
                </div>
            </nav>
        );
    }

}
