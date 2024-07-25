window.addEventListener('DOMContentLoaded', () => {
    for (const type of ['chrome', 'node', 'electron']) {
        console.log(`${type}-version`, process.versions[type])
    }
})