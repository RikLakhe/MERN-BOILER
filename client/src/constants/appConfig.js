const appConfig = {
    projectName: 'LAKHEMERN',
    projectDate: 2020,
    projectOwn: 'RIKLAKHE',
    projectLinked: 'https://www.linkedin.com/in/rikesh-lal-shrestha-55b063132/',
    projectKey: process.env.REACT_APP_ENCODE_SECRET || 'apple',
};

const production = window.location.origin;
const development = `${process.env.REACT_APP_REST_API_HOST}` || 'http://localhost:3003';

export const API_URL = (process.env.NODE_ENV==='production'? production : development);

// localstorage name
export const MERN_TOKEN = 'MERN-TOKEN';
export const MERN_PERMISSION = 'MERN-PERMISSION';

export default appConfig;

export const CODE_REGEX = /^[A-Za-z]{3}$/

export const maleIcon = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMzg0IDM4NCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMzgzLjc5Mjk2OSAxMy45Mzc1Yy0uMTc1NzgxLTEuMzc4OTA2LS40ODA0NjktMi43MDcwMzEtLjk4NDM3NS0zLjk1MzEyNS0uMDE1NjI1LS4wMzEyNS0uMDE1NjI1LS4wNzQyMTktLjAyMzQzOC0uMTEzMjgxIDAtLjAwNzgxMy0uMDA3ODEyLS4wMTU2MjUtLjAxNTYyNS0uMDIzNDM4LS41NTQ2ODctMS4zMTI1LTEuMzEyNS0yLjUwMzkwNi0yLjE2Nzk2OS0zLjYwOTM3NS0uMjEwOTM3LS4yNjE3MTktLjQxNzk2OC0uNTE5NTMxLS42NDA2MjQtLjc2NTYyNS0uOTE0MDYzLTEuMDMxMjUtMS45MDYyNS0xLjk4NDM3NS0zLjA1ODU5NC0yLjc2MTcxOC0uMDMxMjUtLjAyMzQzOC0uMDcwMzEzLS4wMzEyNS0uMTAxNTYzLS4wNTQ2ODgtMS4xMTMyODEtLjczNDM3NS0yLjM0Mzc1LTEuMjg5MDYyLTMuNjMyODEyLTEuNzI2NTYyLS4zMjAzMTMtLjExMzI4Mi0uNjMyODEzLS4yMTA5MzgtLjk2MDkzOC0uMjk2ODc2LTEuMzUxNTYyLS4zNjcxODctMi43NDIxODctLjYzMjgxMi00LjIwNzAzMS0uNjMyODEyaC0xMTJjLTguODMyMDMxIDAtMTYgNy4xNjc5NjktMTYgMTZzNy4xNjc5NjkgMTYgMTYgMTZoNzMuMzY3MTg4bC05NS40OTYwOTQgOTUuNDk2MDk0Yy0yNS40NjQ4NDQtMjAuMzY3MTg4LTU2LjgxNjQwNi0zMS40OTYwOTQtODkuODcxMDk0LTMxLjQ5NjA5NC03OS4zOTg0MzggMC0xNDQgNjQuNjAxNTYyLTE0NCAxNDRzNjQuNjAxNTYyIDE0NCAxNDQgMTQ0IDE0NC02NC42MDE1NjIgMTQ0LTE0NGMwLTMzLjAzOTA2Mi0xMS4xMjEwOTQtNjQuMzgyODEyLTMxLjUwMzkwNi04OS44NzEwOTRsOTUuNTAzOTA2LTk1LjUwMzkwNnY3My4zNzVjMCA4LjgzMjAzMSA3LjE2Nzk2OSAxNiAxNiAxNnMxNi03LjE2Nzk2OSAxNi0xNnYtMTEyYzAtLjMzNTkzOC0uMDc4MTI1LS42NTYyNS0uMDk3NjU2LS45ODQzNzUtLjAyMzQzOC0uMzY3MTg3LS4wNjI1LS43MTg3NS0uMTA5Mzc1LTEuMDc4MTI1em0tMjM5Ljc5Mjk2OSAzMzguMDYyNWMtNjEuNzYxNzE5IDAtMTEyLTUwLjIzODI4MS0xMTItMTEyczUwLjIzODI4MS0xMTIgMTEyLTExMmMyOS45MDIzNDQgMCA1OC4wNTQ2ODggMTEuNjQwNjI1IDc5LjIyMjY1NiAzMi43MzQzNzUgMjEuMTM2NzE5IDIxLjIxMDkzNyAzMi43NzczNDQgNDkuMzYzMjgxIDMyLjc3NzM0NCA3OS4yNjU2MjUgMCA2MS43NjE3MTktNTAuMjM4MjgxIDExMi0xMTIgMTEyem0wIDAiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4K'
export const femaleIcon = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzYuMjY0LDI5MC4xNzNjNjYuMzE0LTY2LjI5Myw2Ni4zMTQtMTc0LjE2LDAtMjQwLjQ1M2MtNjYuMzE0LTY2LjI5NC0xNzQuMjE0LTY2LjI5NC0yNDAuNTI5LDAgICAgYy02Ni4zMTQsNjYuMjkzLTY2LjMxNCwxNzQuMTYsMCwyNDAuNDUzYzI4LjA3LDI4LjA2MSw2My41OTEsNDQuMjQsMTAwLjI1NCw0OC41NDZ2NTYuOTIzaC00MC4wMTggICAgYy0xMS4wNTEsMC0yMC4wMDksOC45NTYtMjAuMDA5LDIwLjAwM3M4Ljk1OCwyMC4wMDMsMjAuMDA5LDIwLjAwM2g0MC4wMTh2NTYuMzQ4YzAuMDAxLDExLjA0Nyw4Ljk1OSwyMC4wMDMsMjAuMDExLDIwLjAwMyAgICBjMTEuMDUxLDAsMjAuMDA5LTguOTU2LDIwLjAwOS0yMC4wMDN2LTU2LjM0OGg0MC4wMTljMTEuMDUxLDAsMjAuMDA5LTguOTU2LDIwLjAwOS0yMC4wMDNzLTguOTU4LTIwLjAwMy0yMC4wMDktMjAuMDAzaC00MC4wMTkgICAgVjMzOC43MkMzMTIuNjczLDMzNC40MTMsMzQ4LjE5NCwzMTguMjM0LDM3Ni4yNjQsMjkwLjE3M3ogTTE2NC4wMzMsMjYxLjg4NGMtNTAuNzExLTUwLjY5NS01MC43MTEtMTMzLjE4MSwwLTE4My44NzYgICAgYzUwLjcxLTUwLjY5MywxMzMuMjIxLTUwLjY5NiwxODMuOTM0LDBjNTAuNzExLDUwLjY5NSw1MC43MTEsMTMzLjE4MSwwLDE4My44NzZDMjk3LjI1NiwzMTIuNTc4LDIxNC43NDQsMzEyLjU3OCwxNjQuMDMzLDI2MS44ODQgICAgeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
