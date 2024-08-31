<img src="banner.webp" width="100%" alt="banner">

# Interactive Map Client for Kingdom Come: Deliverance

<br>

> [!IMPORTANT]
> The code repository for this project has been moved to <https://github.com/kcdmap/kcdmap-electron>

<br>

[![Online](https://badgen.net/badge/icon/online?icon=firefox&label)](https://kingdomcomemap.github.io)[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/gfFAt5JW)

Thanks to RogerHN's [kingdomcomemap.github.io](https://kingdomcomemap.github.io) you can use the Kindom Come map even when not in game, City names, Fast travel points etc. You can see many points such as on this map and add our own markers. But it has a small problem: you always need to have an internet connection or browser to use this map. Here's a desktop app that Kingdom Come players can use offline. Created using electron and [kingdomcomemap source codes](https://github.com/kingdomcomemap/kingdomcomemap.github.io).

<br>

<img src="./windows.PNG" width="100%" height="" alt="banner">
Screenshot of how the application looks on Windows operating system


<br>

## Installation
Currently available for download on Windows and Linux,
go to [Download Latest Version](https://github.com/ahmetcanisik/kingdomcomemap-desktop/releases/latest)


<br>

## Source Codes
[Source codes](https://github.com/ahmetcanisik/kingdomcomemap-desktop/tree/master/source) are presented openly for those who want to develop the project on their own. After downloading the source codes, follow these steps for installation.
```bash
# Cloning source code
git clone https://github.com/ahmetcanisik/kingdomcomemap-desktop.git

# Go to source directory
cd kingdomcomemap-desktop/source
```
```bash
# install with npm
npm install

# or pnpm
pnpm install

# or yarn
yarn install
```


After the installation is complete, launch the electron application with these codes:
```bash
# start with npm
npm run start

# or pnpm
pnpm start

# or yarn
yarn start
```


If you want to convert the project into a desktop application, these codes will work.
```bash
# build with npm
npm run build

# or pnpm
pnpm build

# or yarn
yarn build
```

If you want output targeting a specific operating system, run these lines:
```bash
# only building for windows
yarn build --win

# or linux
yarn build --linux
```

## Creators
<a href="https://github.com/rogerhnn" target="_blank"><img src="https://avatars.githubusercontent.com/u/1373782?v=4" style="border-radius: 50%;" width="64" height="64" alt="Rogerhnn"></a>
<a href="https://github.com/ahmetcanisik" target="_blank"><img src="https://avatars.githubusercontent.com/u/167754410?v=4" style="border-radius: 50%;" width="64" height="64" alt="ahmetcanisik"></a>
