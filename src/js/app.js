import FileLoader from './FileLoader'

new FileLoader(document.querySelector('[data-file-loader]'), {
    multiple: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc'],
    onUpload(files) {
        console.log('%conUpload', 'font-weight:900; color:firebrick;', files);
    },
})
