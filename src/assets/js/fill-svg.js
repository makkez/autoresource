function fillSvg() {
    let fillBlackColor = '#383838';
    let fillWhiteColor = '#fff';
    let windowWidth = document.documentElement.clientWidth;

    let svgObjects = document.getElementsByClassName('svg__filling');
    let tmpSvgPaths;

    for (let i = 0; i < svgObjects.length; i++) {
        tmpSvgPaths = svgObjects[i].contentDocument.getElementsByTagName('path');

        for (let j = 0; j < tmpSvgPaths.length; j++) {
            if (windowWidth < 768) { tmpSvgPaths[j].setAttribute('fill', fillBlackColor); }
            else { tmpSvgPaths[j].setAttribute('fill', fillWhiteColor); }
        }
    }
}

window.addEventListener('load', fillSvg);
window.addEventListener('resize', fillSvg);